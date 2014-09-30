var util = require("util");
var Base = require("./base");

function TopicSearch(apikey) {
  Base.call(this, apikey);
}
util.inherits(TopicSearch, Base);

TopicSearch.prototype.endpoint = function() {
  var endpoint = "/topic/search";
  return endpoint;
};

module.exports = TopicSearch;


