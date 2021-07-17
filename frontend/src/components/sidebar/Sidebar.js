import React from 'react'
import Chat from '../chat/Chat'
// import avatar from '../../assets/avatar1.png'
// import checkbox from '../../assets/checkbox.png'

import './Sidebar.css'

function Sidebar() {
  const username = sessionStorage.getItem('username');
  const avatar = sessionStorage.getItem('avatar');
  const goal = sessionStorage.getItem('subjects');

  return (
    <div className='sidebar'>
      <div className='avatar'>
        <img src={avatar} alt='avatar 1' height='75%' width='auto' />
        <h1>{username}</h1>
      </div>
      <div className="goal">{`"${goal}"`}</div>
      <div className='chat'>
        <h2>Chat</h2>
        <Chat />
      </div>
    </div >
  )
}

export default Sidebar
