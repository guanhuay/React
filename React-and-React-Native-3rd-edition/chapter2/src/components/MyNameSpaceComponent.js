import { Component, React } from "react";
import { render } from "react-dom";

class First extends Component {
    render() {
        return (
            <p>First</p>
        )
    }
}

class Second extends Component {
    render() {
        return (
            <p>Second</p>
        )
    }
}

class MyNameSpaceComponent extends Component {
    render() {
        return (
            <section>{this.props.children}</section>
        )
    }
}

MyNameSpaceComponent.First = First;
MyNameSpaceComponent.Second = Second;

export default MyNameSpaceComponent;