_ = require("lodash")
QuizNow = require("../lib/index")
quiznow = new QuizNow("db82767316b49ea1959149b907a66cc4")

module.exports = (robot) ->
  robot.respond /(quiz|qz)( me)? (.*)/i, (msg) ->
    quizMe msg, msg.match[3], (data) ->
      msg.send data.title
      msg.send data.url
      msg.send data.image_url
      lists = _.shuffle(data.selections.list)
      msg.send lists[0].title
      msg.send lists[1].title
      msg.send lists[2].title
      msg.send lists[3].title
      msg.send "正解は... 10 秒後!"
      setTimeout(() ->
        data.selections.list.forEach((d) ->
          if (d.number == data.selections.right_number)
            msg.send "正解は... "
            msg.send d.title
        )
      , 10000)

quizMe = (msg, query, cb) ->
  quiznow.quizSearch.get({query : query}, (err, data)->
    quiznow.quizGet.get(
      ids : _(data.slice(0,1)).toString()
      (err, data) ->
        cb(
          title : data[0].title
          url : "http://quiznow.me/quiz_share/show?quiz_id=" + data[0].id
          image_url : data[0].title_image_url
          selections : data[0].selections
        )
    )
  )