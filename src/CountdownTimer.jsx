import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [time, setTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timerRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  const handleStart = () => {
    setTimerRunning(true);
  };

  const handleReset = () => {
    setTimerRunning(false);
    setTime(0);
  };

  const handleRestart = () => {
    setTimerRunning(true);
    setTime(0);
  };

  const handleChange = (e) => {
    setTime(parseInt(e.target.value, 10));
  };

  return (
    <div className='container'>
      <input
        type="number"
        value={time}
        onChange={handleChange}
        disabled={timerRunning}
        className='input-time'
      />
      <div>
      <button onClick={handleStart} disabled={timerRunning}>
        Start
      </button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleRestart}>Restart</button>
      </div>
      <h1 className='remaining-time'>Time Remaining: {time}</h1>
    </div>
  );
}

export default CountdownTimer;
