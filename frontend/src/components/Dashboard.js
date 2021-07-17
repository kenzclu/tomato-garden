import React from 'react'
import Timer from './timer/Timer'
import Button from './button/Button'

import './Dashboard.css'

function Dashboard() {
  return (
    <div className='background'>
      <Timer />
      <div className='container'>
        <Button noUi>Pomodoro</Button>
        <Button noUi>Short Break</Button>
        <Button noUi>Long Break</Button>
      </div>
      <Button>Start</Button>
    </div>
  )
}

export default Dashboard