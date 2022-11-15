import "./styles.css";
import React from "react";

export default function App() {
  const [count, setCount] = React.useState(0);
  const counterRef = React.useRef(null);
  const [state, setState] = React.useState("Start");

  const counterStart = () => {
    if (counterRef.current) {
      clearInterval(counterRef.current);
      return;
    }
    counterRef.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    setState("Pause");
  };

  const counterReset = () => {
    setCount(0);
    clearInterval(counterRef.current);
    counterRef.current = null;
    setState("Start");
  };

  const counterPause = () => {
    clearInterval(counterRef.current);
    counterRef.current = null;
    setState("Start");
  };

  return (
    <div className="App">
      <h1>Counter - {count}</h1>
      <button onClick={state === "Start" ? counterStart : counterPause}>
        {state}
      </button>
      <button onClick={counterReset}>Reset</button>
    </div>
  );
}
