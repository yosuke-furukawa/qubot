var util = require("util");
var Base = require("./base");

function QuizSearch(apikey) {
  Base.call(this, apikey);
}
util.inherits(QuizSearch, Base);

QuizSearch.prototype.endpoint = function() {
  var endpoint = "/quiz/search";
  return endpoint;
};
module.exports = QuizSearch;
