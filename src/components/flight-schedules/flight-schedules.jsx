import React from "react";
import PropTypes from "prop-types";
import Loader from "../loader/loader";
import TripDetail from "../trip-detail/trip-detail";
import "../styles/FlightSchedules.css";

const FlightSchedules = ({ flightList, seeDetails }) => {
  let component = null;
  if (flightList?.loading) {
    component = <Loader />;
  } else if (flightList?.result?.length > 0) {
    component = (
      <table className="schelude-container">
        <tbody>
          {flightList.result.map((val) => {
            return (
              <tr key={val.id}>
                <td>
                  <div>
                    <div
                      className="schedule-row"
                      onClick={() => seeDetails(val)}
                    >
                      <div className="schedule-column">
                        <p>{val.airlineName}</p>
                        <p>{val.flightNbr}</p>
                        <span style={{ fontSize: "0.75rem", lineHeight: 1.66 }}>
                          {val.noOfStops === "0"
                            ? `No Stops`
                            : `${val.noOfStops} Stops`}
                        </span>
                      </div>
                      <div className="schedule-column">
                        <TripDetail
                          label="Salida"
                          schedule={val.deptTime}
                          city={val.deptCity}
                        />
                      </div>
                      <div className="schedule-column">
                        <TripDetail
                          label="Arribo"
                          schedule={val.arivalTime}
                          city={val.deptCity}
                        />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  } else if (flightList?.result?.length === 0) {
    component = (
      <span className="error">{"No existe información relacionada..."}</span>
    );
  } else if (flightList?.error) {
    component = (
      <span className="error">
        {"No ha sido posible recuperar información..."}
      </span>
    );
  }

  return <div style={{ width: "100%" }}>{component}</div>;
};

FlightSchedules.propTypes = {
  flightList: PropTypes.object,
  seeDetails: PropTypes.func,
};

export default FlightSchedules;
