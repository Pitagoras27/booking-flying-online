import { Fragment } from "react";
import PropTypes from "prop-types";

const TripDetail = ({ label, schedule, city, style, inlineStyle }) => {
  return (
    <Fragment>
      <p className={style}>{label}</p>
      <p className={style}>{schedule}</p>
      <span>{city}</span>
    </Fragment>
  );
};

TripDetail.propTypes = {
  label: PropTypes.string,
  schedule: PropTypes.string,
  city: PropTypes.string,
  style: PropTypes.string,
};

TripDetail.defaultProps = {
  style: "",
  inlineStyle: {},
};

export default TripDetail;
