import { combineReducers } from "redux";
import { handleCallAppData } from "./phoneCallReducer";

const rootReducer = combineReducers({
  call: handleCallAppData,
});

export default rootReducer;
