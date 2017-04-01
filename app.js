var express = require('express')
const roster = require('./src/roster.js');
const WebSocket = require('ws');


var app = express()
var throttleData = ""
const ws = new WebSocket('ws://192.168.1.112:12080/json/');
function getThrottle (){
  ws.on('open', function open() {
    ws.send(JSON.stringify({"type":"throttle","data":{"throttle":"AMD-103","address":803}}));
  });

  ws.on('message', function incoming(data, flags) {
    // flags.binary will be set if a binary data is received.
    // flags.masked will be set if the data was masked.
    throttleData = data
  });
}
app.get('/', function (req, res) {
  const items = roster.getRoster(function (error,items){
    if (error) {
      throw error
        }
var entries = ''
        items.forEach(function (item) {
          entries += item.data.name + ' '+item.data.number+'<br>'
        })
  res.send(entries)
  })
})
app.get('/throttle', function (req, res) {
res.send(throttleData)
})
getThrottle()
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
