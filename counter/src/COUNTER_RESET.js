import React from "react";
import { connect } from "react-redux";
export const COUNTER_RESET = "COUNTER_RESET";
export const counterReset = () => ({
  type: COUNTER_RESET
});
const mapDispatchR = { reset: counterReset };
const Resettter = props => {
  return <button onClick={props.reset}>I am resetter</button>;
};
export const ResetterConnected = connect(null, mapDispatchR)(Resettter);
