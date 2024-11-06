import PropTypes from "prop-types";
import { Component } from "react";
import store from "../redux/store";

class CalcButtons extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleButtonClick(event) {
    if (event.target.value == "=") {
      this.props.updateFormula(event.target.value);
      const result = store.getState().formula;
      this.props.updateDisplay(result);
    } else {
      this.props.updateFormula(event.target.value);
      this.props.updateDisplay(event.target.value);
    }
  }
  render() {
    return (
      <div className="p-1" id="calcButtons">
        <div className="flex flex-row flex-nowrap text-2xl">
          <div className="grid grid-cols-3 flex-grow">
            <div className="col-span-2">
              <button
                className="px-8 py-4 bg-red-400 w-full border border-black hover:bg-red-500 active:bg-red-600"
                value="AC"
                id="clear"
                onClick={this.handleButtonClick}
              >
                AC
              </button>
            </div>
            <div className="col">
              <button
                className="px-8 py-4 bg-gray-500 w-full border border-black hover:bg-yellow-300 active:bg-yellow-500"
                value="/"
                id="divide"
                onClick={this.handleButtonClick}
              >
                /
              </button>
            </div>

            <div className="col">
              <button
                className="px-8 py-4 bg-gray-600 w-full border border-black hover:bg-yellow-300 active:bg-yellow-500"
                value="7"
                id="seven"
                onClick={this.handleButtonClick}
              >
                7
              </button>
            </div>
            <div className="col">
              <button
                className="px-8 py-4 bg-gray-600 w-full border border-black hover:bg-yellow-300 active:bg-yellow-500"
                value="8"
                id="eight"
                onClick={this.handleButtonClick}
              >
                8
              </button>
            </div>
            <div className="col">
              <button
                className="px-8 py-4 bg-gray-600 w-full border border-black hover:bg-yellow-300 active:bg-yellow-500"
                value="9"
                id="nine"
                onClick={this.handleButtonClick}
              >
                9
              </button>
            </div>

            <div className="col">
              <button
                className="px-8 py-4 bg-gray-600 w-full border border-black hover:bg-yellow-300 active:bg-yellow-500"
                value="4"
                id="four"
                onClick={this.handleButtonClick}
              >
                4
              </button>
            </div>
            <div className="col">
              <button
                className="px-8 py-4 bg-gray-600 w-full border border-black hover:bg-yellow-300 active:bg-yellow-500"
                value="5"
                id="five"
                onClick={this.handleButtonClick}
              >
                5
              </button>
            </div>
            <div className="col">
              <button
                className="px-8 py-4 bg-gray-600 w-full border border-black hover:bg-yellow-300 active:bg-yellow-500"
                value="6"
                id="six"
                onClick={this.handleButtonClick}
              >
                6
              </button>
            </div>

            <div className="col">
              <button
                className="px-8 py-4 bg-gray-600 w-full border border-black hover:bg-yellow-300 active:bg-yellow-500"
                value="1"
                id="one"
                onClick={this.handleButtonClick}
              >
                1
              </button>
            </div>
            <div className="col">
              <button
                className="px-8 py-4 bg-gray-600 w-full border border-black hover:bg-yellow-300 active:bg-yellow-500"
                value="2"
                id="two"
                onClick={this.handleButtonClick}
              >
                2
              </button>
            </div>
            <div className="col">
              <button
                className="px-8 py-4 bg-gray-600 w-full border border-black hover:bg-yellow-300 active:bg-yellow-500"
                value="3"
                id="three"
                onClick={this.handleButtonClick}
              >
                3
              </button>
            </div>

            <div className="col-span-2">
              <button
                className="px-8 py-4 bg-gray-600 w-full border border-black hover:bg-yellow-300 active:bg-yellow-500"
                value="0"
                id="zero"
                onClick={this.handleButtonClick}
              >
                0
              </button>
            </div>
            <div className="col">
              <button
                className="px-8 py-4 bg-gray-600 w-full border border-black hover:bg-yellow-300 active:bg-yellow-500"
                value="."
                id="decimal"
                onClick={this.handleButtonClick}
              >
                .
              </button>
            </div>
          </div>
          <div className="grid grid-rows-5 w-1/4">
            <div className="row">
              <button
                className="px-8 py-4 bg-gray-500 w-full border border-black hover:bg-yellow-300 active:bg-yellow-500"
                value="*"
                id="multiply"
                onClick={this.handleButtonClick}
              >
                x
              </button>
            </div>
            <div className="row">
              <button
                className="px-8 py-4 bg-gray-500 w-full border border-black hover:bg-yellow-300 active:bg-yellow-500"
                value="-"
                id="substract"
                onClick={this.handleButtonClick}
              >
                -
              </button>
            </div>
            <div className="row">
              <button
                className="px-8 py-4 bg-gray-500 w-full border border-black hover:bg-yellow-300 active:bg-yellow-500"
                value="+"
                id="add"
                onClick={this.handleButtonClick}
              >
                +
              </button>
            </div>
            <div className="row-span-2">
              <button
                className="px-8 py-4 bg-blue-500 w-full border border-black hover:bg-blue-600 active:bg-blue-700 h-full"
                value="="
                id="equals"
                onClick={this.handleButtonClick}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CalcButtons.propTypes = {
  updateDisplay: PropTypes.func,
  updateFormula: PropTypes.func,
};

export default CalcButtons;
