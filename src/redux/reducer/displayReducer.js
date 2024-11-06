import { DISPLAY_NUMBER, operator } from "../const";

const displayReducer = (state = "0", action) => {
  switch (action.type) {
    case DISPLAY_NUMBER:
      if (action.payload == "AC") {
        return "0";
      }
      if (typeof action.payload == "number" || typeof state == "number") {
        return action.payload;
      }
      if (action.payload == "." && state.includes(".")) {
        return state;
      }
      if (action.payload == "=") {
        return "0";
      }
      if (state == "0") {
        return action.payload;
      }
      if (operator.includes(action.payload)) {
        return action.payload;
      }
      if (operator.includes(state)) {
        return action.payload;
      }
      return state + action.payload;
    default:
      return state;
  }
};

export default displayReducer;
