import React, { useState } from 'react';
import Button from './button/Button'
import { useHistory } from 'react-router-dom'

import avatar1 from '../assets/avatar1.png'
import avatar2 from '../assets/avatar2.png'

import axios from 'axios';

import './Landing.css'

function Landing() {
  const [username, setUsername] = useState('');
  const [goal, setGoal] = useState('');
  const [avatar, setAvatar] = useState(avatar1);
  const history = useHistory();

  const handleClick = async () => {
    const response = await axios.post('http://localhost:3001/register', {
      username,
      subjects: goal,
      avatar: avatar
    })
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('uid', response.data.uid);
    sessionStorage.setItem('subjects', goal);
    sessionStorage.setItem('avatar', avatar);
    history.push('/pomodoro');
  }

  return (
    <div className='background'>
      <div className='landing-paper'>
        <div>
          <img src={avatar1} alt='avatar 1' height='300rem' width='auto' onClick={() => setAvatar(avatar1)} />
          <img src={avatar2} alt='avatar 1' height='300rem' width='auto' onClick={() => setAvatar(avatar2)} />
        </div>
        <h1>What is your nickname?</h1>
        <input className='name-input' type='text' value={username} onChange={e => setUsername(e.target.value)} />
        <h1>What do you want to achieve today?</h1>
        <input className='goal-input' type='text' value={goal} onChange={e => setGoal(e.target.value)} /><br></br>
        <Button onClick={handleClick} opaque>Pair me up!</Button>
      </div >
    </div >
  );
}

export default Landing;