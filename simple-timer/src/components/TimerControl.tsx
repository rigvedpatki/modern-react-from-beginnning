import { useEffect, useRef } from "react";

type TimerControlProps = {
  onToggle: () => void;
  onReset: () => void;
  isRunning: boolean;
};

const TimerControl: React.FC<TimerControlProps> = ({
  onToggle,
  onReset,
  isRunning,
}) => {
  const startButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = startButtonRef.current;
    if (button) {
      button.focus();
    }
  }, []);

  return (
    <>
      <button
        ref={startButtonRef}
        type="button"
        className="mt-3 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600 transition mr-3"
        onClick={onToggle}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
      <button
        type="button"
        className="mt-3 bg-red-700 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        onClick={onReset}
      >
        Reset
      </button>
    </>
  );
};

export default TimerControl;
