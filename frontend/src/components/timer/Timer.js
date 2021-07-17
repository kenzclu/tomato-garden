import React, { useState, useEffect } from 'react';
import { differenceInSeconds, secondsToDigitalTime } from '../../lib/helper';

import './Timer.css';

function Timer(props) {
    const START_TIME = props.startTime ? props.startTime * 60000 : 25 * 60000;
    const REST_TIME = props.restTime ? props.restTime * 60000 : 5 * 60000;
    const [finishTime, setFinishTime] = useState(Date.now() + START_TIME);
    const [seconds, setSeconds] = useState(differenceInSeconds(Date.now(), finishTime));
    const [isBreak, setIsBreak] = useState(false);
    useEffect(() => {
        if (seconds < 0) {
            setIsBreak(!isBreak);
            setFinishTime(isBreak ? Date.now() + START_TIME : Date.now() + REST_TIME);
        }
    }, [seconds])

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(differenceInSeconds(Date.now(), finishTime));
        }, 100)
        return () => { clearInterval(interval) }
    }, [seconds])

    return (
        <div className="pomodoro">
            <div className="timer-message">
                {isBreak && <div>Break Time! Next Session in: </div>}
            </div>
            <div className="timer">
                {secondsToDigitalTime(seconds)}
            </div>
        </div>

    )
}

export default Timer
