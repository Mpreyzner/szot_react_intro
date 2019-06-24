import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import "./styles.css";
import { createStore } from "redux";
import {
  COUNTER_RESET,
  counterReset,
  ResetterConnected
} from "./COUNTER_RESET";

const initialState = {
  counter: 0
};
const COUNTER_INCREMENT = "COUNTER_INCREMENT";

const counterIncrement = () => ({
  type: COUNTER_INCREMENT // akcja
});
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case COUNTER_RESET:
      return {
        ...state,
        counter: 0
      };
    default:
      return state;
  }
};
const store = createStore(reducer);
const Counter = props => (
  <h1>
    {props.counter}
    <button onClick={props.increment}>+</button>
    <button onClick={props.reset}>reset</button>
  </h1>
);
const mapState = state => ({
  counter: state.counter
});

const mapDispatch = { increment: counterIncrement, reset: counterReset }; //mapowanie na akcj

const CounterConnected = connect(
  mapState,
  mapDispatch
)(Counter); // akcja z podanym stanem z podanymi akcjami mozliwymi do wykowania

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ResetterConnected />
        <CounterConnected />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
