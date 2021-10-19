import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Header from "../../components/header/header";
import ErrorBoundaries from "../../components/error-boundaries/error-boundaries";
import Confirmation from "../confirmation/confirmation";
import FlightSearch from "../search/flight-search";
import FlightDetail from "../flight-detail/flight-detail";
import ClientData from "../client-data/client-data";

const Home = () => {
  return (
    <Fragment>
      <Router>
        <Header />
        <ErrorBoundaries>
          {<Redirect exact={true} from="/" to="/flight-search" />}
          <Switch>
            <Route
              exact={true}
              path={"/flight-search"}
              component={FlightSearch}
            />
            <Route
              exact={true}
              path={"/flight-detail"}
              component={FlightDetail}
            />
            <Route exact={true} path={"/client-data"} component={ClientData} />
            <Route
              exact={true}
              path={"/confirmation"}
              component={Confirmation}
            />
          </Switch>
        </ErrorBoundaries>
      </Router>
    </Fragment>
  );
};

export default Home;
