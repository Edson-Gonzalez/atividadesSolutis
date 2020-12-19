import React, { useState } from "react"
import Clock from "./components/Clock"
import MainCounter from "./components/MainCounter";
import './App.css';

const App = () => {
  const [counterStatus,setCounter] = useState(false);
  return (
    <div>
      <Clock/>
      <MainCounter status={counterStatus ? "Play" : "Pause"}/>
      <button onClick={()=> setCounter(!counterStatus)}>
        {counterStatus ? "Pause" : "Play"}
      </button>
      <button onClick={()=> setCounter(false)}> Stop </button>
    </div>
  );
}

export default App;
