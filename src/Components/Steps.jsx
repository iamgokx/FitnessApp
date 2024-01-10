function Steps({steps}) {
  let km =( steps /2)/1000;
  return (
    <div className="dataCont">
    <div className="steps">{`STEPS : ${steps}`}</div>
    <div className="km">{`KM : ${km}`}</div>
    </div>
  )
}
export default Steps