import React from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PermissionProvider } from "./components/PermissionProvider";

ReactDOM.render(
  <React.StrictMode>
    <PermissionProvider>
      <App />
    </PermissionProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const myComponentTest = render(
//   <MyComponent2 />,
//   document.getElementById("root")
// );
//
// setTimeout(() => {
//   myComponentTest.setState({ first: "done!" });
// }, 1000);
//
// setTimeout(() => {
//   myComponentTest.setState({ second: "done!" });
// }, 2000);
//
// setTimeout(() => {
//   myComponentTest.setState({ third: "done!" });
// }, 3000);
//
// setTimeout(() => {
//   myComponentTest.setState((state) => ({
//     ...state,
//     fourth: state.doneMessage,
//   }));
// }, 4000);
