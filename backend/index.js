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

app.post('/sendmessage', (req, res) => {
  const { message, author } = req.body;
  convos.sendMessage(message, author);
  res.send({})
});

app.get('/deletechannel', (req, res) => {
  const { channelID } = req.body;
  convos.deleteChannel(channelID);
  res.send({})
});

// finds your partner based on your id
app.post('/partner', (req, res) => {
  const { uid: id } = req.body;
  for (const uid in data.users) {
    if (uid === id) continue;
    if (data.users[uid].chatID === data.users[id].chatID) {
      res.send(data.users[uid]);
      return;
    }
  }
  res.send({ })
})

// route for creating new account
app.post('/register', (req, res) => {
  const { username, avatar, subjects } = req.body;
  const uid = Object.keys(data.users).length;
  convos.createNewUser(uid, username, subjects, avatar);

  convos.matchUsers(uid)

  res.send({ uid, username, subjects, avatar })
});

app.post('/getmessages', async (req, res) => {
  const { uid } = req.body;
  const messages = await convos.retrieveMsgs(data.users[uid].chatID);
  res.send({ messages })
});

app.listen(3001, () =>
  console.log(`Listening on ${process.env.PORT}`),
);
