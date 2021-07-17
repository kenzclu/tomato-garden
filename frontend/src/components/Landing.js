import React from 'react';
import avatar from '../assets/avatar1.png'

import './Landing.css'

function Landing() {
  return (
    <div className='background'>
      <div className='landing-paper'>
        <img src={avatar} alt='avatar 1' height='300rem' width='auto' />
        <h1>What do you want to achieve today?</h1>
        <input className='goal-input' type='text' />
      </div>
    </div>
  );
}

export default Landing;