var request = require('request');

function getRoster(callback) {
  request('http://67.253.220.188:12080/json/roster', function (error, response, body) {
      body = JSON.parse(body)
      callback(error,body)
          });
}

module.exports = {
  getRoster,
}
