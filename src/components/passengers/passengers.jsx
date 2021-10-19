import { Fragment, useState } from "react";
import Arrow from "../icons/arrow";
import "../styles/Passengers.css";

const passengerNumber = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    onChange(e);
    setIsOpen(!isOpen);
  };
  return (
    <Fragment>
      <button
        className="toggle-button-select"
        onClick={handleClick}
        style={{ top: "14px" }}
      >
        {isOpen ? <Arrow classes="arrowUp" /> : <Arrow classes="arrowDown" />}
      </button>
      <select onChange={onChange} className="form-control passengers-control">
        <option defaultValue>Numero de pasajeros</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </Fragment>
  );
};

export default passengerNumber;
