import { useState } from "react";
import LifecycleLoggerClass from "./components/LifecycleLoggerClass";
import LifeCycleLoggerFunction from "./components/LifeCycleLoggerFunction";

function App() {
  const [showClassLogger, setShowClassLogger] = useState(false);
  const [showFunctionLogger, setShowFunctionLogger] = useState(false);

  return (
    <>
      <div className="container">
        <h2>React Lifecycle Playground - Class</h2>

        {/* Toggle LifecycleLogger */}
        <button
          className="primary-btn"
          onClick={() => setShowClassLogger(!showClassLogger)}
        >
          {showClassLogger ? "Unmount Logger" : "Mount Logger"}
        </button>

        {showClassLogger && <LifecycleLoggerClass />}
      </div>
      <div className="container">
        <h2>React Lifecycle Playground - Function</h2>

        {/* Toggle LifecycleLogger */}
        <button
          className="primary-btn"
          onClick={() => setShowFunctionLogger(!showFunctionLogger)}
        >
          {showFunctionLogger ? "Unmount Logger" : "Mount Logger"}
        </button>

        {showFunctionLogger && <LifeCycleLoggerFunction />}
      </div>
    </>
  );
}
export default App;
