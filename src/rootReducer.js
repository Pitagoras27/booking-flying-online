import { combineReducers } from "redux";

import flightSearch from "./pages/search/reducer";

const rootReducer = combineReducers({
  flightSearch
});

export default rootReducer;
