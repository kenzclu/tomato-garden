import React from 'react'
import Timer from './timer/Timer'
import Button from './button/Button'

import './Dashboard.css'

function Dashboard() {
  return (
    
    <div className='background'>
      <div className='timer-container'>
        <Timer />
        <div className='container'>
          <Button noUi>Pomodoro</Button>
          <Button noUi>Short Break</Button>
          <Button noUi>Long Break</Button>
        </div>
        <Button>Start</Button>
      </div>
    </div>
  )
}

export default Dashboard