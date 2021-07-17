import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import Button from '../button/Button'
import './Chat.css'
import axios from 'axios'

const AlwaysScrollToBottom = () => {
  const elementRef = useRef();
  useEffect(() => elementRef.current.scrollIntoView());
  return <div ref={elementRef} />;
};

function Chat() {
  const [messages, setMessages] = useState([])
  const [myMessage, setMyMessage] = useState('')
  const username = sessionStorage.getItem('username')

  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await axios.post('http://localhost:3001/getmessages', {
        uid: sessionStorage.getItem('uid')
      });
      setMessages(response.data.messages);
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleClick = async () => {
    await axios.post('http://localhost:3001/sendmessage', {
      author: sessionStorage.getItem('uid'),
      message: myMessage
    });
    setMyMessage('');
  }

  return (
    <>
      <div className='chat-container'>
        {messages.length === 0 && <div>Say hello!</div>}
        {messages.map(({ message, author }, index) => {
          const myMessage = author === username;
          return (
            <div key={`${message}-${index}`} className={classNames('message-container', { 'my-message-container': myMessage })}>
              <div className='author'>{author}</div>
              <div className={classNames('bubble', { 'my-bubble': myMessage })}>{message}</div>
            </div>
          )
        })}
        <AlwaysScrollToBottom />
      </div>
      <div className='message-input-container'>
        <input className="message-input" type="text" value={myMessage} onChange={(e) => setMyMessage(e.target.value)} />
        <Button onClick={handleClick}>Send</Button>
      </div>
    </>
  )
}

export default Chat
