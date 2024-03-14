import { useEffect, useState } from "react";
import "../styles/Timer.css";

type TimerProps = {
  initialTime: number;
};

function Timer({ initialTime }: TimerProps) {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    setTimeRemaining(initialTime);
  }, [initialTime]);
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timerInterval);
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [timeRemaining]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    let formattedSeconds = "";
    if (remainingSeconds < 10) {
      formattedSeconds = "0" + remainingSeconds;
    } else {
      formattedSeconds = remainingSeconds.toString();
    }
    return minutes + ":" + formattedSeconds;
  };

  return (
    <div className="timer-timer">
      <p>Time Remaining: {formatTime(timeRemaining)}</p>
    </div>
  );
}

export default Timer;
