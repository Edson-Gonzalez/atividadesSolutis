const PartialsList = ({Partial}) => {
    return (
      <div>
        {
            Partial.map((e)=>{
                return (<p>{e.hours+":"+e.minutes+":"+e.seconds+":"+e.hundredth}</p>)
            })
        }
      </div>
  )
}

export default PartialsList;