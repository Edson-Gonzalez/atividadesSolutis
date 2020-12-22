import { useState, useEffect } from "react"
import PartialsList from "../PartialsList"

const Counter = (props) => {
  const [startingDate,setDate] = useState(
    props.type === "Clock" ? 
    new Date() : 
    new Date(0,0,0,0,0,0,0)
  );

  const[partials,setPartials] = useState([])

  const getDatesArray = (date) => {
    return{
    hours:date.getHours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}),
    minutes:date.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}),
    seconds:date.getSeconds().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}),
    hundredth:Math.floor((date.getMilliseconds()/10)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}),
    };
  };

  const [currentTime,setTime] = useState(getDatesArray(startingDate));
  const [presentDate,setPresent] = useState(new Date());
  const [pausedDate,setPause] = useState(new Date());
  const [stopDate, setStop] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if(props.type === "Clock"){ 
        setDate(new Date());
        setTime(getDatesArray(startingDate));
      }

      if(props.status==="Play"){
        if(stopDate){
          setTime(getDatesArray(startingDate))
          setPartials([])
          setStop(false);
        }
        setPresent(new Date());
        setTime(getDatesArray(new Date(startingDate.getTime()+presentDate.getTime()-pausedDate.getTime())));
      }if(props.status==="Stop"){
        setPause(new Date())
        setStop(true);
      }
    }, 10);
    return () => clearInterval(interval);
  });

  

  return (
    <div>
      <p>{currentTime.hours+":"+currentTime.minutes+":"+currentTime.seconds+":"+currentTime.hundredth}</p>
      {props.type==="MainCounter" ? <button onClick={
        ()=>{
          partials.push(currentTime)
          setPartials(partials)
        }
      }> Salvar Valor Parcial </button> : ''}
      <PartialsList Partial={partials}/>
    </div>
  );
}

export default Counter;