import React from 'react'
import Chat from '../chat/Chat'
import avatar from '../../assets/avatar1.png'

import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='avatar'>
        <img src={avatar} alt='avatar 1' width='80%' height='auto' />
      </div>
      <div className='todo'>
        <h2>Todo</h2>
      </div>
      <div>
        <h2>Chat</h2>
        <Chat />
      </div>
    </div>
  )
}

export default Sidebar
