import { put, call } from "redux-saga/effects";

import actions from "../../constants/actions";
import { ApiPath } from "../../config/apiPath";
import { filterBySourceDest } from "../../utils/data-service";
import { get } from "../../utils/xhr";

/**
 * Request data for fligths from API
 * @param {*} payload
 */
export function* fetFlightList(payload) {
  let url = `${ApiPath.BASE}/${ApiPath.FLIGHTS}`;
  try {
    // uncomment when API is available
    const jsonResponse = yield call(get, url);
    const response = filterBySourceDest(payload, jsonResponse);
    yield put({
      type: actions.GET_FLIGHT_LIST_SUCCESS,
      result: response,
      error: null,
    });
  } catch (error) {
    const errorObj = JSON.parse(error.message);

    yield put({
      type: actions.GET_FLIGHT_LIST_ERROR,
      result: null,
      error: {
        statusCode: errorObj.statusCode,
        message: errorObj.errorMessage,
      },
    });
  }
}

/**
 * Request data for cities from API
 * @param {*} payload
 */
export function* fetCitiesList() {
  let url = `${ApiPath.BASE}/${ApiPath.CITIES}`;

  try {
    const jsonResponse = yield call(get, url);
    yield put({ type: "GET_CITY_SUCCESS", payload: jsonResponse });
  } catch (error) {
    const errorObj = JSON.parse(error.message);
    yield put({
      type: actions.GET_CITY_ERROR,
      cities: [],
      error: {
        statusCode: errorObj.statusCode,
        message: errorObj.errorMessage,
      },
    });
  }
}
