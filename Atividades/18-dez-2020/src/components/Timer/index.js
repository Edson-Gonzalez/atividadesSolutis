import { useState } from "react"
import Counter from "../Counter"

const Timer = (props) => {
  const [counterStatus,setCounter] = useState("Stop");

  return (
    <div>
      <Counter type="Timer" status={counterStatus}/>
      <button onClick={()=> setCounter(counterStatus==="Play" ? "Pause" : "Play")}>
        {counterStatus==="Play" ? "Pause" : "Play"}
      </button>
      <button onClick={()=> setCounter("Stop")}> Stop </button>
    </div>
    )
}

export default Timer;