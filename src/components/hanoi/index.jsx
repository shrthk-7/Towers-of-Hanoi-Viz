import { useState, useEffect } from "react";
import getTowerStates from "../../utils/towerStates";
import initState from "../../utils/initState";
import Bar from "../Bar";
import "./style.css";

const numberOfDiscs = 5;

export default function Hanoi() {
  const [state, setState] = useState(initState(numberOfDiscs));

  useEffect(() => {
    const stateCopy = JSON.parse(JSON.stringify(state));
    getTowerStates(stateCopy, setState, numberOfDiscs);
  }, []);

  return (
    <div className="hanoi">
      <Bar discs={state[0]} />
      <Bar discs={state[1]} />
      <Bar discs={state[2]} />
    </div>
  );
}
