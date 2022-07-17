import { useEffect, useState } from 'react';
import '../css/App.css';

function App() {

  const [time, setTime] = useState(0);
  const [isRunning, setRunning] = useState(false);

  function resetTimer() {
    setTime(0);
    setRunning(false);
  }

  /* useEffect is the same as componentDidUpdate & allows us to update the timer in the ui.
    if the timer is running, setInterval executes the setTime method every second and adds a second to the time 
    if the timer isn't running or the useEffect function ends, clear the interval */
  useEffect(() => {
    var interval = null;
    if(isRunning) {
      interval = setInterval(() => {
        setTime(time => time + 1000);
      }, 1000);
    } else if(!isRunning && time != 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, setRunning]);

  return (
    <div className='App-header'>
      <div className='navBar'>
        <p>Points: {Math.floor(time/60000)}</p>
      </div>
      <div className='header'>
        <h2>Timer App</h2>
      </div>
      <div className='timer'>
        <div className='time'>
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
        </div>
        <div className='timeControl'>
          <button className='timerButton' onClick={() => setRunning(!isRunning)}>{isRunning ? 'Pause' : 'Start'}</button>
          <button className='timerButton' onClick={() => resetTimer()}>End</button>
        </div>
      </div>
    </div>
  );
}

export default App;
