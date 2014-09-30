_ = require("lodash")
QuizNow = require("../lib/index")
quiznow = new QuizNow("db82767316b49ea1959149b907a66cc4")

module.exports = (robot) ->
  robot.respond /(quiz|qz)( me)? (.*)/i, (msg) ->
    quizMe msg, msg.match[3], (data) ->
      lists = _.shuffle(data.selections.list)
      msg.send "[#{data.topic_title}]#{data.title}\n#{data.url}\n#{data.image_url}\n\n1. #{lists[0].title}\n2. #{lists[1].title}\n3. #{lists[2].title}\n4. #{lists[3].title}\n\n\n正解は... 10 秒後!"
      setTimeout(() ->
        data.selections.list.forEach((d) ->
          if (d.number == data.selections.right_number)
            msg.send "正解は... #{d.title}"
        )
      , 10000)

quizMe = (msg, query, cb) ->
  quiznow.quizSearch.get({query : query}, (err, data)->
    quiznow.quizGet.get(
      ids : _.sample(data)
      (err, data) ->
        cb(
          topic_title : data[0].topic.title
          title : data[0].title
          url : "http://quiznow.me/quiz_share/show?quiz_id=" + data[0].id
          image_url : data[0].title_image_url
          selections : data[0].selections
        )
    )
  )
