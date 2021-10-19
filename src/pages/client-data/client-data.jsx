import React, { useState } from "react";
import PropTypes from "prop-types";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Input from "../../components/input/input";

import Button from "../../components/button/button";
import {
  ButtonTypes,
  ButtonSizes,
  ButtonThemes,
} from "../../config/buttonTypes";

import "../../styles/global.scss";

const ClientData = () => {
  const bookingData = useSelector((state) => state.flightSearch.bookingDetails);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [emailValidator, setEmailValidator] = useState(false);
  const [errorFlag, setErrorFlag] = useState(false);
  const history = useHistory();

  /**
   * @function handleFName
   * @param {object} e
   * @description get first name
   */
  const handleFName = (e) => {
    setFName(e.target.value);
  };

  /**
   * @function handleLName
   * @param {object} e
   * @description get Last name
   */
  const handleLName = (e) => {
    setLName(e.target.value);
  };

  /**
   * @function handleEmail
   * @param {object} e
   * @description get email id
   */
  const handleEmail = (e) => {
    const inputEmail = e.target.value;
    const validEmailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    !inputEmail.match(validEmailRegex) || inputEmail.length === 0
      ? setEmailValidator(false)
      : setEmailValidator(true);

    setEmailValidator(!inputEmail.match(validEmailRegex));
    setEmail(inputEmail);
  };

  /**
   * @function handleMobile
   * @param {object} e
   * @description get mobile number
   */
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  /**
   * @function handleConfirm
   * @param {object} e
   * @description Confirm the booking
   */
  const handleConfirm = (e) => {
    if (
      fName.length !== 0 &&
      lName.length !== 0 &&
      email.length !== 0 &&
      !emailValidator &&
      address.length !== 0
    ) {
      setErrorFlag(false);
      history.push("/confirmation");
    } else {
      setErrorFlag(true);
    }
  };
  return (
    <section className="main-container">
      <h3>{`Confirma la reserva de tu vuelo: ${bookingData?.reservation[0]?.airlineName} (${bookingData?.reservation[0]?.flightNbr})`}</h3>

      <Input
        type="text"
        onChange={handleFName}
        value={fName}
        id="firstName"
        placeholder="Ingresa tu nombre"
        name="name"
        htmlForId="firstName"
        labelTitle="Ingresa tu Nombre"
      />

      <Input
        type="text"
        onChange={handleLName}
        value={lName}
        id="lastName"
        placeholder="Ingresa tu apellido"
        name="lastName"
        htmlForId="lastName"
        labelTitle="Ingresa tu apellido"
      />

      <Input
        type="email"
        onChange={handleEmail}
        value={email}
        id="email"
        placeholder="Ingresa un correo electrónico"
        name="email"
        htmlForId="email"
        labelTitle="Ingresa un correo electrónico"
      />

      <Input
        type="address"
        onChange={handleAddress}
        value={address}
        id="address"
        placeholder="Ingresa una dirección"
        name="address"
        htmlForId="address"
        labelTitle="Ingresa una dirección"
      />

      <Button
        size={ButtonSizes.MEDIUM}
        type={ButtonTypes.PRIMARY}
        theme={ButtonThemes.LIGHT}
        rule="align-center"
        label="Confirma la reservación"
        onClickHandler={(e) => handleConfirm(e)}
      />
      {errorFlag && (
        <span className="error">Todos los campos son obligatorios</span>
      )}
    </section>
  );
};

ClientData.propTypes = {
  classes: PropTypes.object,
  history: PropTypes.object,
};

export default ClientData;
