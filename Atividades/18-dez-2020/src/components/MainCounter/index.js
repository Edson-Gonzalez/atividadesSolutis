import React from "react"
import Counter from "../Counter"

const MainCounter = (props) => {
  return <Counter type="MainCounter" status={props.status}/>
}

export default MainCounter;