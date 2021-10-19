import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import TripDetail from "../../components/trip-detail/trip-detail";
import FlightButtonsDetail from "./flight-buttons-detail";
import { calculateTotalPrice } from "../../utils/data-service";
import actions from "../../constants/actions";

import "../../styles/global.scss";

const flightDetail = () => {
  const bookingData = useSelector((state) => state.flightSearch.bookingDetails);

  const dispatch = useDispatch();
  const history = useHistory();
  const { reservation } = bookingData;

  const handlebookNow = () => {
    let timer;
    clearTimeout(timer);

    timer = setTimeout(() => {
      history.push("/client-data");
    }, 100);
  };

  const handleCancel = () => {
    dispatch({
      type: actions.CLEAR_BOOKING_DETAILS,
    });
    history.push("/flight-search");
  };

  const handleAddNewReservation = () => {
    history.push("/flight-search");
  };
  // Handle to send client data module
  return (
    <section className="main-container">
      <h3>Mis reservaciones</h3>
      {reservation.length ? (
        reservation.map((item) => (
          <Fragment key={item.id}>
            <div className="detail__separator">
              <div>
                <h4>Número de vuelo: {item?.flightNbr}</h4>
                <h4>Fecha de salida</h4>
                <div>{item?.deptDate}</div>
              </div>
              <h4>Horarios</h4>
              <div className="detail">
                <TripDetail
                  label="Salida"
                  schedule={item.deptTime}
                  city={item.deptCity}
                  style="detail__schedule--element"
                />
              </div>
              <div className="detail">
                <TripDetail
                  label="Llegada"
                  schedule={item.arivalTime}
                  city={item.arivalCity}
                  style="detail__schedule--element"
                />
              </div>
              <div className="detail">
                <p style={{ margin: "16px 0 20px" }}>
                  <span className="bolder">Número de pasajeros: </span>
                  {item?.passengers}
                </p>
              </div>
            </div>
          </Fragment>
        ))
      ) : (
        <span className="error">"No hay reservaciones"</span>
      )}
      {reservation.length > 0 && (
        <FlightButtonsDetail
          handlebookNow={handlebookNow}
          handleAddNewReservation={handleAddNewReservation}
          handleCancel={handleCancel}
          totalAmount={calculateTotalPrice(reservation)}
        />
      )}
    </section>
  );
};

export default flightDetail;
