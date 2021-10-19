import PropTypes from "prop-types";
import "../../styles/global.scss";

const ArrowUp = ({ color, size, classes }) => {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fillRule={color}
      clipRule="evenodd"
      className={classes}
    >
      <path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z" />
    </svg>
  );
};

ArrowUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  classes: PropTypes.string,
};

ArrowUp.defaultProps = {
  color: "#030086",
  size: 24,
  classes: "",
};

export default ArrowUp;
