import { Component, React } from "react";
import { render } from "react-dom";

class MyButton extends Component {
    render() {
        return (
            <button>{this.props.children}</button>
        )
    }
}

export default MyButton;