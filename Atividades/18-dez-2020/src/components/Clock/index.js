import Counter from "../Counter"

const Clock = (props) => {
  return <Counter type="Clock" status={props.status}/>
}

export default Clock;