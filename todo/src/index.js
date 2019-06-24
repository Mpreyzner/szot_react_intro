import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";

import "./styles.css";

const Button = styled.button`
  border: none;
  background: #81f7be;
  border-radius: 4px;
  margin-left: 10px;
`;

const Div = styled.div`
  background: #d8d8d8;
`;

class Todo extends React.Component {
  state = {
    tasks: [],
    inputValue: ""
  };

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();

            const { inputValue, tasks } = this.state;
            if (tasks.map(tasks => tasks.value).includes(inputValue)) return;
            if (inputValue.trim().length < 3) return;

            this.setState({
              tasks: [
                ...this.state.tasks,
                {
                  id: +new Date(),
                  value: inputValue,
                  done: false
                }
              ],
              inputValue: ""
            });
          }}
        >
          <input
            value={this.state.inputValue}
            onChange={e => {
              this.setState({ inputValue: e.target.value });
            }}
          />
          <Button type="submit">dodaj</Button>
        </form>
        {this.state.tasks.length ? (
          <ul>
            {this.state.tasks.map(task => (
              <li
                key={task.id}
                style={{ textDecoration: task.done ? "line-through" : "none" }}
              >
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={e => {
                    this.setState({
                      tasks: this.state.tasks.map(t => {
                        return {
                          ...t,
                          done: t.id === task.id ? e.target.checked : t.done
                        };
                      })
                    });
                  }}
                />
                {task.value}
                <Button
                  onClick={() => {
                    this.setState({
                      tasks: this.state.tasks.filter(t => t.id !== task.id)
                    });
                  }}
                >
                  x
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <span>lista jest pusta :) </span>
        )}
      </div>
    );
  }
}
function App() {
  return (
    <Div className="App">
      <Todo />
    </Div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
