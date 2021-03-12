import { Component, React } from "react";
import { render } from "react-dom";
import MyButton from "./MyButton";

class MySection extends Component {
    render() {
        return (
            <section>
                {this.props.children}
            </section>
        )
    }
}

export default MySection;