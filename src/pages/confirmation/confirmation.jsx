import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "../../components/button/button";
import {
  ButtonTypes,
  ButtonSizes,
  ButtonThemes,
} from "../../config/buttonTypes";
import actions from "../../constants/actions";

import "../../styles/global.scss";

const Confirmation = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: actions.CLEAR_BOOKING_DETAILS,
    });
    history.push("/flight-search");
  };

  return (
    <section className="main-container">
      <h2 style={{ textAlign: "center" }}>¡Gracias por tu reserva!</h2>
      <Button
        size={ButtonSizes.MEDIUM}
        type={ButtonTypes.PRIMARY}
        theme={ButtonThemes.LIGHT}
        rule="align-center"
        label="Regresa al inicio"
        onClickHandler={handleClick}
      />
    </section>
  );
};

Confirmation.propTypes = {
  history: PropTypes.object,
  classes: PropTypes.object,
};

export default Confirmation;
