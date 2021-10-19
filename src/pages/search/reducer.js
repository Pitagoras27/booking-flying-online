import { combineReducers } from "redux";

import actions from "../../constants/actions";

const defaultState = {
  loading: true,
  cities: [],
  result: null,
  reservation: [],
  error: null,
};

const getCitiesList = (state = defaultState, action) => {
  switch (action.type) {
    case actions.GET_CITY_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        cities: action.payload,
        error: null,
      });
    case actions.GET_CITY_ERROR:
      return Object.assign({}, state, {
        loading: false,
        cities: [],
        error: action.error,
      });
    default:
      return state;
  }
};

const searchList = (state = defaultState, action) => {
  switch (action.type) {
    case actions.GET_FLIGHT_LIST_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        result: action.result,
        error: null,
      });
    case actions.GET_FLIGHT_LIST_ERROR:
      return Object.assign({}, state, {
        loading: false,
        result: null,
        error: action.error,
      });
    case actions.RESET_FLIGHT_LIST:
      return Object.assign({}, state, {
        loading: true,
        result: null,
        reservation: [],
        error: null,
      });
    default:
      return state;
  }
};

const bookingDetails = (state = defaultState, action) => {
  switch (action.type) {
    case actions.SET_BOOKING_DETAILS:
      return Object.assign({}, state, {
        loading: false,
        reservation: action.payload,
        error: null,
      });
    case actions.CLEAR_BOOKING_DETAILS:
      return Object.assign({}, state, {
        loading: false,
        result: null,
        reservation: [],
        error: null,
      });
    default:
      return state;
  }
};

const flightSearch = combineReducers({
  getCitiesList,
  searchList,
  bookingDetails,
});

export default flightSearch;
