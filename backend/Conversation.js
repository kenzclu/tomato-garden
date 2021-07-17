// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure

require('dotenv').config()
const data = require('./data')

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
let convoServiceSID

// TODO: delete this when testing routes
let currSIDTEMP

// matches a user with an existing room
const matchUsers = async(uid) => {    
    const sessions = [...data.sessions.entries()]
    for (const session of sessions) {
        if (session[1] == 1) {
            await addParticipant(session[0], uid)
            return
        }
    }

    // no free rooms, create your own
    const chatID = await createConversation();
    await addParticipant(chatID, uid)
}

const createNewUser = (userID, username, subjects, avatar) => {
    data.users[userID] = {subjects: subjects,
                            username: username,
                            avatar: avatar,
                            twilioID: null,
                            chatID: null}
}

// Takes in the id of the user that created the new channel
const createConversation = async () => {
    const { chatServiceSid, sid } = await client.conversations.conversations
        .create({ friendlyName: '2 AM TEST :) IM OKAY' })

    // data.sessions.push({ id: sid, users: [] })
    data.sessions.set(sid, 1)
    currSIDTEMP = sid
    convoServiceSID = chatServiceSid

    console.log(data)
    console.log(convoServiceSID)

    return sid
}

// TODO: add parameter for specific chat room we want to add participant to
const addParticipant = async (chatID, uid) => {
    const { username } = data.users[uid]
    const { sid } = await client.conversations.conversations(chatID)
        .participants
        .create({
            identity: username
        })

    console.log("user id: " + sid)

    // assign chatID to user that joined the chat
    data.users[uid].chatID = chatID
    // assign twilioID returned by API to user
    if (data.users[uid].twilioID == null) {
        data.users[uid].twilioID = sid
    } else {
        console.log("old uid: " + data.users[uid].twilioID)
    }

    console.log(data.users[uid])
}

const sendMessage = async (message, uid) => {
    // Find chatID associated with author
    const user = data.users[uid]
    const chatID = user.chatID

    client.conversations.conversations(chatID)
        .messages
        .create({
            body: message,
            author: user.username
        })
        .then(message => console.log("message sid: " + message.sid))
}

// deletes the created channel otherwise they remain on twilio
const deleteChannel = async (chatID) => {
    client.chat.services(convoServiceSID)
        .channels(chatID)
        .remove()
}

const retrieveMsgs = async (chatID) => {
    let messagesList = []
    await client.chat.services(convoServiceSID).channels(chatID).messages.list({limit: 20}).then(messages => messages.forEach(m => messagesList.push({author: m.from, body: m.body})))

    return messagesList
}

const main = async () => {
    createNewUser(1, "donny", ["Compsci", "Fortnite"], "kirby.jpg")
    await createConversation()
    await addParticipant(currSIDTEMP, 1)
    console.log(data.users["1"])

    await sendMessage('i wanna sleep', 1)
    // await deleteChannel(currSIDTEMP)
    await retrieveMsgs(currSIDTEMP)
}

// main()
module.exports = {matchUsers, createNewUser, sendMessage, deleteChannel, retrieveMsgs}
