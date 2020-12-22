import { useState } from "react"
import Counter from "../Counter"

const MainCounter = (props) => {
  const [counterStatus,setCounter] = useState("Stop");

  return (
    <div>
      <button onClick={()=> setCounter(counterStatus==="Play" ? "Pause" : "Play")}>
        {counterStatus==="Play" ? "Pause" : "Play"}
      </button>
      <button onClick={()=> setCounter("Stop")}> Stop </button>
      <Counter type="MainCounter" status={counterStatus}/>
    </div>
    )
}

export default MainCounter;