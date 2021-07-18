import React, { useEffect, useState } from 'react';
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
  const [page, setPage] = useState(0)

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

  const handleAvatarClick = (avatar) => {
    setAvatar(avatar)
    setPage(2)
  }

  return (
    <div className='background'>
      {page === 0 && <div className='landing-paper' onClick={() => setPage(1)}>
        <h2>Welcome to</h2>
        <h1>Tomato Garden!</h1>
        <h3>Grow and study, with others!</h3>
        <p>Click to start!</p>
      </div>}

      {
        page === 1 && <div className='landing-paper'>
          <h1>Select an Avatar</h1>
          <img className='avatar-select' src={avatar1} alt='avatar 1' height='300rem' width='auto' onClick={() => handleAvatarClick(avatar1)} />
          <img className='avatar-select' src={avatar2} alt='avatar 1' height='300rem' width='auto' onClick={() => handleAvatarClick(avatar2)} /><br></br>
        </div>
      }

      {
        page === 2 && <div className='landing-paper'>
          <h1>What is your nickname?</h1>
          <input className='name-input' type='text' value={username} onChange={e => setUsername(e.target.value)} /><br></br>
          <Button onClick={() => setPage(3)} opaque>Next</Button>
        </div>
      }

      {
        page === 3 && <div className='landing-paper'>
          <h1>What do you want to achieve today?</h1>
          <input className='goal-input' type='text' value={goal} onChange={e => setGoal(e.target.value)} /><br></br>
          <Button onClick={handleClick} opaque>Pair me up!</Button>
        </div>
      }
    </div >
  );
}

export default Landing;