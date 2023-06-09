import { Component } from "react";

/**
 * Homework 1 component. Create a basic class component to display a greeting message to the UI upon button click.
 *
 * TODO: Make sure to export this component and use it in App.jsx to make
 * sure that it works.
 */
class Homework1 extends Component {
	// TODO: initialize your component and set the state to
	// { greeting: "" }
	constructor(props) {
		super(props);

		this.state = {
			greeting: "",
		};

		this.handleClick = this.handleClick.bind(this);
	}

	// TODO: add a handleClick method to update the greeting state upon click
	// the greeting state should update from an empty string (what you initialized
	// it to originally) to the string "Hello World!"
	handleClick() {
		this.setState({
			greeting: "Hello World!",
		});
	}

	// TODO: your component must return this jsx
	render() {
		return (
			<div>
				{/* TODO: render the greeting state inside the <h1> tag, if the greeting state is an empty string, the <h1> must display the text: "Click the button below" - otherwise it must render the string "Hello World!" upon clicking on the button below */}
				<h1>{this.state.greeting}</h1>
				{/* TODO: add an onClick handler to your button */}
				<button type="button" onClick={this.handleClick}>
					Update Greeting
				</button>
			</div>
		);
	}
}

export default Homework1;
