const data = require('./data')
require('dotenv').config()
console.log(data.sessions)
const convos = require('./Conversation.js')

const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();

// create application/json parser
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.use(cors());

app.get('/sendmessage', (req, res) => {
  const { message, author } = req.body;
  convos.sendMessage(message, author);
  res.send({})
});

app.get('/deletechannel', (req, res) => {
  const { channelID } = req.body;
  convos.deleteChannel(channelID);
  res.send({})
});

// route for creating new account
app.get('/register', (req, res) => {
  const { username, avatar, subjects } = req.body;
  const uid = Object.keys(data.users).length;
  convos.createNewUser(uid, username, subjects, avatar);

  convos.matchUsers(uid)

  res.send({uid})
});

app.get('/getmessages', (req, res) => {
  const { chatID } = req.body;
  const messages = convos.retrieveMsgs(chatID);

  res.send({messages})
});

app.listen(3000, () =>
  console.log(`Listening on ${process.env.PORT}`),
);
