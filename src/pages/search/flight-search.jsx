import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router";
import { DatePicker } from "@y0c/react-datepicker";
import "@y0c/react-datepicker/assets/styles/calendar.scss";
import "../../styles/global.scss";

import PassengerNumber from "../../components/passengers/passengers";
import Autocomplete from "../../components/autocomplete/Autocomplete";
import Button from "../../components/button/button";
import { ButtonTypes, ButtonSizes } from "../../config/buttonTypes";

import { validateSearch } from "../../utils/data-service";
import actions from "../../constants/actions";
import FlightSchedules from "../../components/flight-schedules/flight-schedules";

const FlightSearch = () => {
  const [source, setSource] = useState("");
  const [dest, setDest] = useState("");
  const [deptDate, setDeptDate] = useState("");

  const [searchDone, setSearchDone] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [passengers, setPassengers] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  const flightList = useSelector((state) => state.flightSearch.searchList);
  const bookingData = useSelector((state) => state.flightSearch.bookingDetails);

  // On Page Load
  useEffect(() => {
    // Reset Flight List
    dispatch({
      type: actions.RESET_FLIGHT_LIST,
    });
  }, []);

  /**
   * @function handleSource
   * @param {object} newVal
   * @description get source city details
   */
  const handleSource = (newVal) => {
    setSource(newVal);
  };

  /**
   * @function handleDestination
   * @param {object} newVal
   * @description get destination city details
   */
  const handleDestination = (newVal) => {
    setDest(newVal);
  };

  /**
   * @function handleDeparture
   * @param {object} e
   * @description get departure time
   */
  const handleDeparture =
    () =>
    (...args) => {
      setDeptDate(args[1]);
    };

  /**
   * Passenger selector
   * @param {e} object
   */
  const handlePassengers = (e) => {
    setPassengers(e.target.value);
  };

  /**
   * @function handleSearchFlight
   * @description Search Flight
   */
  const handleSearchFlight = () => {
    const payload = {};
    payload.source = source;
    payload.destination = dest;
    payload.deptDate = deptDate;

    if (
      payload?.source?.toLowerCase() === payload?.destination?.toLowerCase()
    ) {
      setCityError(true);
      setSearchDone(false);
      return;
    } else {
      setCityError(false);
    }
    // CLEAN Reset Flight List
    dispatch({
      type: actions.RESET_FLIGHT_LIST,
    });
    // PRINT Get flight List
    dispatch({
      type: actions.GET_FLIGHT_LIST,
      payload,
    });
    setSearchDone(true);
  };

  /**
   * @function handleSeeDetails
   * @param {object} bookingVal
   * @description book now
   */
  const handleSeeDetails = (bookingVal) => {
    const { reservation } = bookingData;
    const setBookingValues = Object.assign({}, bookingVal, {
      passengers,
      deptDate,
    });
    let timer;
    dispatch({
      type: actions.SET_BOOKING_DETAILS,
      payload: reservation.concat(setBookingValues),
    });

    clearTimeout(timer);

    timer = setTimeout(() => {
      history.push("/flight-detail");
    }, 100);
  };

  return (
    <section className="main-container">
      <h3>Reserva un viaje</h3>
      <div className=" form-label-group">
        <Autocomplete
          handleSelect={handleSource}
          labelTarget="Ciudad de origen"
        />
      </div>
      <div className=" form-label-group">
        <Autocomplete
          handleSelect={handleDestination}
          labelTarget="Ciudad de destino"
        />
      </div>
      <div className=" form-label-group">
        <span style={{ display: "flex" }}>Selecciona una fecha</span>
        <DatePicker
          className="color"
          showToday
          onChange={handleDeparture()}
          showDefaultIcon
          clear
        />
      </div>
      <div className=" form-label-group">
        <PassengerNumber onChange={handlePassengers} />
      </div>

      <div>
        <Button
          size={ButtonSizes.MEDIUM}
          label="Selecciona un horario"
          onClickHandler={handleSearchFlight}
          type={ButtonTypes.PRIMARY}
          disabled={validateSearch(source, dest, deptDate, passengers)}
        />
      </div>

      {cityError && (
        <span className="error">
          El Origen no puede ser el misma que el destino
        </span>
      )}
      {searchDone && (
        <FlightSchedules
          flightList={flightList}
          seeDetails={handleSeeDetails}
        />
      )}
    </section>
  );
};

FlightSearch.propTypes = {
  history: PropTypes.object,
  dispatch: PropTypes.func,
  flightList: PropTypes.object,
};

export default FlightSearch;
