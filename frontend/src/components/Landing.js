import React from 'react';
import Button from './button/Button'
import { Link } from 'react-router-dom'

import avatar1 from '../assets/avatar1.png'
import avatar2 from '../assets/avatar2.png'
import './Landing.css'

function Landing() {
  return (
    <div className='background'>
      <div className='landing-paper'>
        <div>
          <img src={avatar1} alt='avatar 1' height='300rem' width='auto' />
          <img src={avatar2} alt='avatar 1' height='300rem' width='auto' />
        </div>
        <h1>What is your nickname?</h1>
        <input className='name-input' type='text' />
        <h1>What do you want to achieve today?</h1>
        <input className='goal-input' type='text' /><br></br>
        <Link to='/'><Button opaque>Pair me up!</Button></Link>
      </div >
    </div >
  );
}

export default Landing;