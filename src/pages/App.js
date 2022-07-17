import { useEffect, useState } from 'react';
import '../css/App.css';

function App() {

  const [time, setTime] = useState(0);
  const [isRunning, setRunning] = useState(false);

  function resetTimer() {
    setTime(0);
    setRunning(false);
  }

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
    <div className="stopwatch">
      <div className="numbers">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>
      <div className="buttons">
        <button onClick={() => setRunning(!isRunning)}>Start</button>
        <button onClick={() => resetTimer()}>End</button>       
      </div>
    </div>
  );
}

export default App;
