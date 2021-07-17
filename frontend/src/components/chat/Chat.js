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
  }]

  return (
    <>
      <div className='chat-container'>
        {messages.map(({ message, author, token }) => {
          return (
            <div className={classNames('message', { 'my-message': token === myToken })}>
              <div>{author}</div>
              <div className='bubble'>{message}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Chat
