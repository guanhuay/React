import { React, Component } from "react";

class MyComponent2 extends Component {
  state = {
    first: "loading...",
    second: "loading...",
    third: "loading...",
    fourth: "loading...",
    doneMessage: "finished",
  };

  render() {
    const { state } = this;

    return (
      <ul>
        {Object.keys(state)
          .filter((key) => key !== "doneMessage")
          .map((key) => (
            <li key={key}>
              <strong>{key}: </strong>
              {state[key]}
            </li>
          ))}
      </ul>
    );
  }
}

export default MyComponent2;
