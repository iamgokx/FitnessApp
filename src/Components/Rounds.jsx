
function Rounds({ handleRoundClick, rounds }) {
  return (
    <p className="rounds" id="rounds" onClick={handleRoundClick}>
      {rounds}
    </p>
  );
}
export default Rounds;
