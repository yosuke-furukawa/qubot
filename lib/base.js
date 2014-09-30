var https = require("https");
var URL = require("url");

var QUIZNOW_URL =  "https://quiznow.me/api";
var Base = function(api_key) {
  this.api_key = api_key;
};

Base.prototype.endpoint = function() {
  return "";
};


Base.prototype.get = function(queryObj, cb) {
  var url = URL.parse(QUIZNOW_URL + this.endpoint()); 
  if (queryObj) {
    if (!queryObj.api_key) queryObj.api_key = this.api_key;
    url.query = queryObj;
  }
  url = URL.format(url);

  console.log(url);
  https.get(url, function(res) {
    var data = "";
    res.on("data", function(d){
      data += d;
    });

    res.on("end", function(){
      try {
        cb(null, JSON.parse(data));
      } catch(e) {
        cb(e + data);
      }
    });
    
    res.on("error", function(e) {
      cb(e);
    });

  }).on('error', function(e) {
    cb(e);
  });
}

module.exports = Base;
