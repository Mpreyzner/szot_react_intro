import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class AppUser extends React.Component {
  state = {
    data: null,
    filter: ""
  };
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10")
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data.results
        });
      });
  }
  render() {
    return (
      <div className="App">
        <input
          value={this.state.filter}
          onChange={e => {
            this.setState({
              filter: e.target.value
            });
          }}
        />

        {this.state.data &&
          this.state.data
           .filter(user => user.email.includes(this.state.filter))
          .map(user => (
            <div
              key={user.email}
              style={{
                display: "inline-block"
              }}
            >
              <img src={user.picture.medium} />
              {console.log(user.email.includes(this.state.filter))}
              <div>{user.email}</div>
            </div>
          ))}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <AppUser />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
