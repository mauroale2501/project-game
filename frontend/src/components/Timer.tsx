import { useEffect, useState } from "react";

type TimerProps = {
  initialTime: number;
};

const Timer = ({ initialTime }: TimerProps) => {
  const [, setStartTime] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    const storedTimeLeft = localStorage.getItem("timeLeft");
    const storedStartTime = localStorage.getItem("startTime");

    if (storedTimeLeft && storedStartTime) {
      const storedTimeLeftNum = parseInt(storedTimeLeft, 10);
      const storedStartTimeNum = parseInt(storedStartTime, 10);
      const now = Math.floor(Date.now() / 1000);

      const passedTime = now - storedStartTimeNum;
      const remainingTime = Math.max(storedTimeLeftNum - passedTime, 0);

      setTimeLeft(remainingTime);
      setStartTime(storedStartTimeNum);
    } else {
      setTimeLeft(initialTime);
      setStartTime(Math.floor(Date.now() / 1000));
      localStorage.setItem(
        "startTime",
        Math.floor(Date.now() / 1000).toString()
      );
      localStorage.setItem("timeLeft", initialTime.toString());
    }
  }, [initialTime]);

  useEffect(() => {
    if (timeLeft === 0) {
      localStorage.removeItem("startTime");
      localStorage.removeItem("timeLeft");
    } else {
      const timer = setTimeout(() => {
        setTimeLeft((prevTime) => Math.max(prevTime ? prevTime - 1 : 0, 0));
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      <h2>{timeLeft !== null ? formatTime(timeLeft) : "Loading..."}</h2>
    </div>
  );
};

export default Timer;
