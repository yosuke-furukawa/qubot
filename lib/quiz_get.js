var util = require("util");
var Base = require("./base");

function QuizGet(apikey) {
  Base.call(this, apikey);
}
util.inherits(QuizGet, Base);

QuizGet.prototype.endpoint = function() {
  var endpoint = "/quiz/";
  return endpoint;
};

module.exports = QuizGet;
