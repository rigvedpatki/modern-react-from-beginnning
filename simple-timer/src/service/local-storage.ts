const TIMER_LOCAL_STORAGE_KEY = "timer";

export const getTimerFromLocalStorage = (): number => {
  console.log("Retrieving timer from local storage...");
  const storedTime = localStorage.getItem(TIMER_LOCAL_STORAGE_KEY);
  console.log("Retrieved timer value:", storedTime);
  return storedTime ? parseInt(storedTime, 10) : 0;
};

export const saveTimerToLocalStorage = (time: number) => {
  console.log("Saving timer to local storage...");
  localStorage.setItem(TIMER_LOCAL_STORAGE_KEY, time.toString());
  console.log("Saved timer value:", time);
};

export const clearTimerFromLocalStorage = () => {
  console.log("Clearing timer from local storage...");
  localStorage.removeItem(TIMER_LOCAL_STORAGE_KEY);
  console.log("Timer cleared from local storage.");
};
