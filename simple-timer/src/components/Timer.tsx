import { useEffect, useRef, useState } from "react";
import TimerControl from "./TimerControl";
import TimerDisplay from "./TimerDisplay";
import {
  clearTimerFromLocalStorage,
  getTimerFromLocalStorage,
  saveTimerToLocalStorage,
} from "../service/local-storage";

const Timer = () => {
  const [time, setTime] = useState<number>(() => {
    const storedTime = getTimerFromLocalStorage();
    return storedTime;
  });
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const timeFromLocalStorage = getTimerFromLocalStorage();
    if (timeFromLocalStorage !== time) {
      console.log(
        "Time in state differs from local storage. Updating local storage...",
        `${timeFromLocalStorage} !== ${time}`,
      );
      saveTimerToLocalStorage(time);
    }
  }, [time]);

  const toggleTimer = () => {
    if (isRunning) {
      // Clear interval if running
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    } else {
      // Start interval if not running
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setTime(0);
    setIsRunning(false);
    clearTimerFromLocalStorage();
  };

  return (
    <>
      <TimerDisplay time={time} />
      <TimerControl
        isRunning={isRunning}
        onToggle={toggleTimer}
        onReset={resetTimer}
      />
    </>
  );
};

export default Timer;
