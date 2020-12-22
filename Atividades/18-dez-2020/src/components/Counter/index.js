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
  const [stopDate, setStop] = useState(true);
  const [pauseOnceDate, setPauseOnce] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if(props.type === "Clock"){ 
        setDate(new Date());
        setTime(getDatesArray(startingDate));
      }

      if(props.status==="Play"){
        if(stopDate||pauseOnceDate){
          setTime(getDatesArray(startingDate))
          setStop(false);
          setPauseOnce(false);
          setPause(new Date());
          console.log(startingDate.getSeconds())
          console.log(presentDate-pausedDate)
        }
        setPresent(new Date());
        props.type==="MainCounter" ?
        setTime(getDatesArray(new Date(startingDate.getTime()+presentDate.getTime()-pausedDate.getTime()))):
        setTime(getDatesArray(new Date(startingDate.getTime()-presentDate.getTime()-pausedDate.getTime())));
      }
      if(props.status==="Pause"){
        if(!pauseOnceDate){
          setDate(new Date(startingDate.getTime()+presentDate.getTime()-pausedDate.getTime()));
          setPause(new Date());
          setPauseOnce(true);
        }
      }
      if(props.status==="Stop"){
        if(!stopDate){
          setPartials([])
          setStop(true);
          setDate(new Date(0,0,0,0,0,0,0))
          setTime(getDatesArray(startingDate))
        }
      }
    }, 10);
    return () => clearInterval(interval);
  });
  const [A,setA]=useState('');
  return (
    <div>
      {props.type==="Timer"?
      <><input id="TimerSelector" type="time" step="1" onChange={(event)=>setA(event.target.value)}></input>
        <button onClick={()=>{
          setDate(new Date("2000-06-06T"+A));
        }}>Escolher Hora</button>
      
      </>:''}

      <p>{currentTime.hours+":"+currentTime.minutes+":"+currentTime.seconds+":"+currentTime.hundredth}</p>
      
      {props.type==="MainCounter" ? 
        <><button onClick={()=>{
            partials.push(currentTime)
            setPartials(partials)
          }}>Salvar Valor Parcial</button>
          <PartialsList Partial={partials}/></> : ''}
      
    </div>
  );
}

export default Counter;