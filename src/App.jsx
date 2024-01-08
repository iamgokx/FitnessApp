import "./App.css";
import Steps from "./Components/Steps";
import Rounds from "./Components/Rounds";
import Button from "./Components/Button";
import { useRef, useState, useEffect } from "react";

function App() {
  const [timerRunning, setTimerRunning] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [recordedTime, setRecordedTime] = useState(0);
  const [steps, setSteps] = useState(0);
  const [state, setState] = useState("START");

  useEffect(() => {
    let timer;

    if (timerRunning) {
      timer = setInterval(updateTimer, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [timerRunning]);

  const updateTimer = () => {
    setTotalSeconds((prevSeconds) => prevSeconds + 1);
  };

  const toggleTimer = () => {
    if (timerRunning) {
      stopTimer();
      setState("START");
    } else {
      startTimer();
      setState("STOP");
    }
  };

  const startTimer = () => {
    setTimerRunning(true);
  };

  const stopTimer = () => {
    setTimerRunning(false);
    setRecordedTime(totalSeconds);
    setTotalSeconds(0);
  };

  const pad = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  const handleRoundClick = () => {
    setSteps((prevSteps) => prevSteps + 50);
  };



  return (
    <>
      <Steps steps={steps}></Steps>
      <Rounds handleRoundClick={handleRoundClick} rounds={steps / 50}></Rounds>
      <div className="footer">
        <div className="time">
          Timer: {pad(Math.floor(totalSeconds / 3600))}:{pad(Math.floor((totalSeconds % 3600) / 60))}:
          {pad(totalSeconds % 60)}
        </div>
        <Button toggleTimer={toggleTimer} state={state}></Button>
      </div>
        <div className="recorded-time">
          Recorded Time: {pad(Math.floor(recordedTime / 3600))}:{pad(Math.floor((recordedTime % 3600) / 60))}:
          {pad(recordedTime % 60)}
        </div>
    </>
  );
}

export default App;
