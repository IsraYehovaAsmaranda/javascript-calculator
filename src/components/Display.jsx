import PropTypes from "prop-types";
import { Component } from "react";

class Display extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="" className="p-2 text-2xl">
        <div className="w-full text-yellow-300 text-end" id="formulaScreen">{this.props.formula}</div>
        <div className="w-full text-white text-end" id="display">{this.props.display}</div>
      </div>
    );
  }
}

Display.propTypes = {
  display: PropTypes.string || PropTypes.number,
  formula: PropTypes.string || PropTypes.number
}

export default Display;