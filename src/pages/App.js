import { useEffect, useState } from 'react';
import NavHeader from '../components/NavHeader';
import '../css/App.css';

function App() {

  const [time, setTime] = useState(0);
  const [points, setPoints] = useState(0);
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
        // TODO: updates points every 1:01, so looks kinda weird & could have issues in future
        if(time%60000 === 0 && time !== 0) {
          setPoints(points => points + 1);
        }
        setTime(time => time + 1000);
      }, 1000);
    } else if(!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning, setRunning, points, setPoints, time, setTime]);

  return (
    <div className='App-header'>
      <NavHeader />
      <div className='navBar'>
        <p>Points: {points}</p>
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
