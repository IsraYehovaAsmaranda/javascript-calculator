import { Component } from "react";
import Display from "./components/Display";
import CalcButtons from "./components/CalcButtons";
import displayFormula from "./redux/action/formulaAction";
import displayNumber from "./redux/action/displayAction";
import { connect, Provider } from "react-redux";
import store from "./redux/store";

const mapToStateProps = (state) => ({
  formula: state.formula,
  display: state.display,
});

const mapToDispatchProps = (dispatch) => ({
  updateFormula: (formula) => dispatch(displayFormula(formula)),
  updateDisplay: (display) => dispatch(displayNumber(display)),
});

const DisplayContainer = connect(mapToStateProps, null)(Display);
const CalcButtonsContainer = connect(null, mapToDispatchProps)(CalcButtons);

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="bg-gray-400 min-h-screen flex flex-col flex-wrap justify-center items-center">
        <div className="container bg-black w-full lg:w-1/4 md:w-1/2">
          <Provider store={store}>
            <DisplayContainer />
            <CalcButtonsContainer />
          </Provider>
        </div>
        <div className="mt-4 text-center">
          <p>Designed and Coded By</p>
          <p className="text-blue-800 font-bold">Isra Yehova Asmaranda</p>
        </div>
      </div>
    );
  }
}

export default App;
