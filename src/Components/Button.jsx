import { BsBan,BsCaretRight  } from "react-icons/bs";

function Button({ toggleTimer, state }) {
  return (
    <button className="btn" onClick={toggleTimer}>
      {state == "START" ? <BsCaretRight /> : <BsBan />}
    </button>
  );
}
export default Button;
