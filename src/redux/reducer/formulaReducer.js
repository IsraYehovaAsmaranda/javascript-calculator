import { DISPLAY_FORMULA, operator } from "../const";

const formulaReducer = (state = "0", action) => {
  switch (action.type) {
    case DISPLAY_FORMULA:
      if (action.formula == "AC") {
        return "0";
      }
      if (action.formula == "=") {
        return eval(state);
      }
      if (typeof state == "number") {
        return action.formula;
      }
      if (action.formula == "." && state.includes(".")) {
        return state;
      }
      if (state == "0") {
        if (operator.includes(action.formula)) {
          return "0" + action.formula;
        }
        return action.formula;
      }
      if (
        operator.includes(state.slice(-1)) &&
        operator.includes(action.formula)
      ) {
        return state.slice(0, -1) + action.formula;
      }
      return state + action.formula;
    default:
      return state;
  }
};

export default formulaReducer;
