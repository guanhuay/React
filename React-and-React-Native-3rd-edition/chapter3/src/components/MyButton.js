import { React, Component } from "react";

class MyButton extends Component {
  static defaultProps = {
    disabled: false,
    text: "My Button",
  };

  render() {
    const { disabled, text } = this.props;
    return <button disabled={disabled}>{text}</button>;
  }
}

export default MyButton;

// const MyButton = ({ disabled, text }) => {
//   return <button disabled={disabled}>{text}</button>;
// };
//
// MyButton.defaultProps = {
//   disabled: false,
//   text: "My Button",
// };
//
// export default MyButton;
