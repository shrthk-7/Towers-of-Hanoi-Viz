import { useState, useEffect } from "react";
import getTowerStates from "../../utils/towerStates";
import Bar from "../bar";
import "./style.css";

export default function Hanoi() {
  const [state, setState] = useState([[6, 5, 4, 3, 2, 1], [], []]);

  useEffect(() => {
    const stateCopy = JSON.parse(JSON.stringify(state));
    getTowerStates(stateCopy, setState, 6);
  }, []);

  return (
    <div className="hanoi">
      <Bar discs={state[0]} />
      <Bar discs={state[1]} />
      <Bar discs={state[2]} />
    </div>
  );
}
