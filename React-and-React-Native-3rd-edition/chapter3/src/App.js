import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import MyButton from "./components/MyButton";
import { Fragment } from "react";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent />
        <MyButton />
        <Fragment>
          <First />
          <Second />
          <Third />
        </Fragment>
      </header>
    </div>
  );
};

export default App;
