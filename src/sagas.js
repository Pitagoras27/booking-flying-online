import { fork, takeLatest } from "redux-saga/effects";
import { fetCitiesList } from "./pages/search/worker";
import * as FlightSearch from "./pages/search/watcher";

export default function* rootSaga() {
  yield [
    takeLatest("GET_FETCH_CITIES", fetCitiesList),
    fork(FlightSearch.watchFlightSearch),
  ];
}
