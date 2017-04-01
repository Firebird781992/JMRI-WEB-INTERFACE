var request = require('request');

function getRoster(callback) {
  request('http://192.168.1.112:12080/json/roster', function (error, response, body) {
      body = JSON.parse(body)
      callback(error,body) 
          });
}

module.exports = {
  getRoster,
}
