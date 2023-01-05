import Disc from "../disc";
import "./style.css";

export default function Bar({ discs }) {
  return (
    <div className="bar">
      {discs.map((disc, index) => {
        return <Disc val={disc} key={index} />;
      })}
    </div>
  );
}
