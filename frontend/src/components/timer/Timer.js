import React, {useState, useEffect} from 'react'
// import { CircularProgressbar } from 'react-circular-progressbar';

function Timer() {
    const[minutes, setMinutes] = useState(0);
    const[seconds, setSeconds] = useState(10);

    const[displayMessage, setDisplayMessage] = useState(false);

    useEffect(() => {
        let counter = setInterval(() => {
            clearInterval(counter);
            // if seconds hit 0 we need to check whether we need to go back to 59 or we have completely finished the timer
            if (seconds === 0) {
                // if minutes is not 0, we will just subtract the minute counter and set seconds to 59
                if (minutes !== 0) {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                // if both minutes and seconds are 0 we have finished the timer and start our break 
                // OR the second case if that we have finished our break and we want to start new timer
                } else {
                    let minutes = displayMessage ? 24 : 0;
                    let seconds = 59;

                    setSeconds(seconds);
                    setMinutes(minutes);
                    setDisplayMessage(!displayMessage);
                }
            } else {
                setSeconds(seconds - 1);
            }
        }, 1000)
    }, [seconds]);
    
    // if minutes/seconds is less than 10 we will have a zero in front of the first digit in the minutes/seconds
    const minuteCounter = minutes < 10 ? `0${minutes}` : minutes;
    const secondCounter = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <div className="pomodoro">
            <div className="message">
                {displayMessage && <div>Break Time! Next Session in: </div>}
            </div>
            <div className="timer">
                {minuteCounter}:{secondCounter}
            </div>
        </div>
    )
}

export default Timer
