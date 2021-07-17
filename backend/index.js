const data = require('./data')
require('dotenv').config()
console.log(data.sessions)
const convos = require('./conversation.js')

const express = require('express');
const cors = require("cors");
const app = express();

app.use(cors());

app.get('/createconvo', (req, res) => {
  convos.createConversation();
});

app.get('/addparticipant', (req, res) => {
  convos.addParticipant();
});

app.get('/sendmessage', (req, res) => {
  const { message, author } = req.body;
  convos.sendMessage(message, author);
});

app.get('/deletechannel', (req, res) => {
  const { channelID } = req.body;
  convos.deleteChannel(channelID);
});

/*
app.listen(3000, () =>
  console.log(`Listening on ${process.env.PORT}`),
);
*/