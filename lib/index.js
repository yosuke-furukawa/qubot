var QuizSearch = require("./quiz_search");
var QuizGet = require("./quiz_get");
var TopicSearch = require("./topic_search");
var TopicGet = require("./topic_get");

module.exports = function QuizNow(apikey) {
  this.quizSearch = new QuizSearch(apikey);
  this.quizGet = new QuizGet(apikey);
  this.topicSearch = new TopicSearch(apikey);
  this.topicGet = new TopicGet(apikey);
};

