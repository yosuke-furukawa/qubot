var util = require("util");
var Base = require("./base");

function TopicGet(apikey) {
  Base.call(this, apikey);
}
util.inherits(TopicGet, Base);

TopicGet.prototype.endpoint = function() {
  var endpoint = "/topic/get_topics";
  return endpoint;
};

module.exports = TopicGet;

