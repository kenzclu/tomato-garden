import React, { useState, useEffect } from 'react';
import { differenceInSeconds, secondsToDigitalTime } from '../../lib/helper';
import classNames from 'classnames';

import './Timer.css';

function Timer(props) {
    const START_TIME = props.startTime ? props.startTime * 60000 : 25 * 60000;
    const REST_TIME = props.restTime ? props.restTime * 60000 : 5 * 60000;

    const [finishTime, setFinishTime] = useState(Date.now() + START_TIME);
    const [seconds, setSeconds] = useState(differenceInSeconds(Date.now(), finishTime));
    const [isBreak, setIsBreak] = useState(false);
    
    useEffect(() => {
        if (seconds < 0) {
            setIsBreak(i => !i);
            setFinishTime(isBreak ? Date.now() + START_TIME : Date.now() + REST_TIME);
        }
    }, [seconds, START_TIME, REST_TIME])

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(differenceInSeconds(Date.now(), finishTime));
        }, 100)
        return () => { clearInterval(interval) }
    }, [seconds, finishTime])

    return (
        <div className="pomodoro">
            <div className="timer">
                {secondsToDigitalTime(seconds)}
            </div>
            <div className='timer-status-container'>
                <div className='arrow-up-container'>
                    <div>Pomodoro</div>
                    <div className={classNames('arrow-up', { hidden: isBreak }, 'fade-in')}></div>
                </div>
                <div className='arrow-up-container'>
                    <div>Short Break</div>
                    <div className={classNames('arrow-up', { hidden: !isBreak }, 'fade-in')}></div>
                </div>
            </div> 
        </div>

    )
}

export default Timer
