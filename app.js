var _ = require("underscore");
var express = require('express');
var bodyParser = require('body-parser');
const http = require('http');
var request = require('sync-request');
const schedule = require('node-schedule');


const server = express();
server.use(bodyParser.json());

var rule = new schedule.RecurrenceRule();

rule.second = 30;

var j = schedule.scheduleJob(rule, function(){
    sendMessageTelegram();
});

function sendMessageTelegram() {
    var resUser = request('GET', 'http://tools.aimylogic.com/api/googlesheet2json?sheet=1&id=<id>');
	    var userList = JSON.parse(resUser.getBody('utf8'));
  
	for (var i = 0; i < userList.length; i++) {
	    var res = request('POST', 'https://api.telegram.org/bot<token>/sendMessage', {
           json: {"chat_id": userList[i].userid, "text": "Hello world!"},
           headers: {"Content-Type": "application/json"}
        });
        var user = JSON.parse(res.getBody('utf8'));
    }
}

server.listen(process.env.PORT || 3000, () => console.log('Ready'));

