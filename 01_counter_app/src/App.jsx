import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    if (counter >= 20) {
      alert("Counter is greater than 20");
      return;
    }
    setCounter(counter + 1);
    //increment by 2
    // setCounter((prevCounter) => {
    //   return prevCounter + 1;
    // });
    // setCounter((prevCounter) => {
    //   return prevCounter + 1;
    // });
    console.log(counter);
  };

  const handleDecrement = () => {
    if (counter <= 0) {
      alert("Counter is less than 0");
      return;
    }
    setCounter(counter - 1);
    console.log(counter);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}

export default App;
