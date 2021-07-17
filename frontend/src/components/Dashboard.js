import React from 'react'
import Timer from './timer/Timer'
import Button from './button/Button'

import './Dashboard.css'

function Dashboard() {
  return (
    <div className='background'>
      <div className='timer-container'>
        <Timer />
      </div>
    </div>
  )
}

export default Dashboard