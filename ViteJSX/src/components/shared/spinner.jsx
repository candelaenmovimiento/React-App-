import spinner from "../assets/spinner.gif";

function Spinner() {
  return (
    <img
      src={spinner}
      alt="Loading..."
      style={{ width: 1000, margin: "auto", display: "block" }}
    />
  );
}

export default Spinner;
