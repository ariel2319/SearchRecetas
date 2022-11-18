//este index es el que combina todos los reducers..y de aquí se exportan al store
import { combineReducers } from "@reduxjs/toolkit";

import resultsReducer from "./results";

export default combineReducers({
  results: resultsReducer,
});