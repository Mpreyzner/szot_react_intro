import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
class YesNo extends React.Component {
  state = {
    response: null
  };

  componentDidMount() {
    fetch("https://yesno.wtf/api")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  render() {
    if (this.state.data) return <div>...loading</div>;

    return <div>yes</div>;
  }
}
function App() {
  return (
    <div className="App">
      <YesNo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
