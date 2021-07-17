// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure

require('dotenv').config()
const data = require('./data')

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
let convoServiceSID

const createConversation = async() => {
    const { chatServiceSid, sid  } = await client.conversations.conversations
        .create({friendlyName: 'TESTING BEEP BOOP'})
    
    data.sessions.push({ id: sid, users: []})
    console.log(data)
    convoServiceSID = chatServiceSid
    console.log(convoServiceSID)
}

// TODO: add parameter for specific chat room we want to add participant to
const addParticipant = async() => {
    const { sid } = await client.conversations.conversations(data.sessions[data.sessions.length - 1].id)
        .participants
        .create({
            identity: 'kennethTheDog'
        })

    console.log(sid)
}

const sendMessage = async(message, author) => {
    client.conversations.conversations(data.sessions[data.sessions.length - 1].id)
      .messages
      .create({
         body: message,
         author: author
       })
      .then(message => console.log(message.sid))
}

// deletes the created channel otherwise they remain on twilio
const deleteChannel = async(channelID) => {
    client.chat.services(convoServiceSID)
        .channels(channelID)
        .remove()
}

const main = async() => {
    await createConversation()
    await addParticipant()
    await sendMessage('hey wassup YEEBOIIII!', 'Megumin')
    await deleteChannel(data.sessions[data.sessions.length - 1].id)
}

main()

