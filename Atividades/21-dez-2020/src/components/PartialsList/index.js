const PartialsList = ({Partial}) => {
    return (
      <ul>
        {
            Partial.map((e)=>{
                return (<li>{e.hours+":"+e.minutes+":"+e.seconds+":"+e.hundredth}</li>)
            })
        }
      </ul>
  )
}

export default PartialsList;