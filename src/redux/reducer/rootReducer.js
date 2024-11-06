import { combineReducers } from "redux";
import formulaReducer from "./formulaReducer";
import displayReducer from "./displayReducer";

const rootReducer = combineReducers({
  formula: formulaReducer,
  display: displayReducer,
});

export default rootReducer;