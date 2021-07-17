import React from 'react'
import classNames from 'classnames'

import './Chat.css'

function Chat() {
  const myToken = 'abcdef'
  const messages = [{
    message: "i love potatoes",
    author: "roycedadog",
    token: "abcdef"
  }, {
    message: "wow me too",
    author: "kendog",
    token: "12345"
  }, {
    message: "what are your favourite kind of potatoes",
    author: "roycedadog",
    token: "abcdef"
  }, {
    message: "your toes",
    author: "kendog",
    token: "12345"
  }, {
    message: "your toes",
    author: "kendog",
    token: "12345"
  }, {
    message: "your toes",
    author: "kendog",
    token: "12345"
  }, {
    message: "your toes",
    author: "kendog",
    token: "12345"
  }]

  return (
    <>
      <div className='chat-container'>
        {messages.map(({ message, author, token }) => {
          const myMessage = token === myToken;
          return (
            <div className={classNames('message-container', { 'my-message-container': myMessage })}>
              <div>{author}</div>
              <div className={classNames('bubble', { 'my-bubble': myMessage })}>{message}</div>
            </div>
          )
        })}
      </div>
      <input className="message-input" type="text"/>
    </>
  )
}

export default Chat
