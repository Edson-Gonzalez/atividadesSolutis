import React, { useState, useEffect } from "react"

const Counter = (props) => {

  const [currentDate,setDate] = useState(
    props.type === "Clock" ? 
    new Date() : 
    new Date(0,0,0,0,0,0,0)
  );

  const getDatesArray = (date) => {
    return{
    hours:date.getHours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}),
    minutes:date.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}),
    seconds:date.getSeconds().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}),
    hundreth:Math.floor((date.getMilliseconds()/10)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}),
    };
  };

  const [currentTime,setTime] = useState(getDatesArray(currentDate));
  const time = (currentDate) => {
    return (getDatesArray(currentDate));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if(props.type === "Clock" || props.status==="Play"){ 
        currentDate.setMilliseconds(currentDate.getMilliseconds() + 10);
      }
      setTime(time(currentDate));
    }, 10);
    return () => clearInterval(interval);
  });

  return (
    <div>
      <p>
          {currentTime.hours+":"+currentTime.minutes+":"+currentTime.seconds+":"+currentTime.hundreth}
      </p>
    </div>
  );
}

export default Counter;
