import "./style.css";

export default function Disc({ val }) {
  return (
    <div
      className="disc"
      style={{
        transform: `translate(-${val / 2 - 0.5}rem, ${11}rem)`,
        width: `${val}rem`,
      }}
    ></div>
  );
}
