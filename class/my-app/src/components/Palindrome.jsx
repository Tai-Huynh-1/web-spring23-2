import { Component } from "react";

class Palindrome extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: "",
			textB: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleClear = this.handleClear.bind(this);
	}

	handleChange(event) {
		const inputId = event.target.id;
		if (inputId === "palindrome") {
			this.setState({
				text: event.target.value,
			});
		} else {
			this.setState({
				textB: event.target.value,
			});
		}
	}

	handleClear(event) {
		const buttonId = event.target.id;
		switch (buttonId) {
			case "clear":
				this.setState({
					text: "",
				});
				break;
			case "clearB":
				this.setState({
					textB: "",
				});
				break;
			default:
				return;
		}

		// if (buttonId === "clear") {
		// 	this.setState({
		// 		text: "",
		// 	});
		// } else {
		// 	this.setState({
		// 		textB: "",
		// 	});
		// }
	}

	isPalindrome(string) {
		return string === string.split("").reverse().join("");
	}

	// An uncontrolled component is when an input causes a change in the React state, but state changes does not force the value property of the html node to change (1 way binding)

	// A controlled component will force the input state to synchronize with the React state

	render() {
		const isPalindrome = this.isPalindrome(this.state.text);
		const message = isPalindrome ? `${this.state.text} IS a palindrome` : `${this.state.text} IS NOT a palindrome`;

		return (
			<div>
				<h1>Palindrome</h1>
				<label id="palindrome">
					Enter some text: <input id="palindrome" type="text" onChange={this.handleChange} value={this.state.text} />
				</label>
				<button id="clear" type="button" onClick={this.handleClear}>
					Clear
				</button>

				<br />
				{/* TODO: Create a second input field here as a controlled component to update the "textB" state */}
				<label id="palindromeB">
					Enter some text: <input id="palindromeB" type="text" onChange={this.handleChange} value={this.state.textB} />
				</label>
				<button id="clearB" type="button" onClick={this.handleClear}>
					Clear
				</button>

				<br />

				<h2>{message}</h2>

				<br />

				<h2>{this.state.textB}</h2>
			</div>
		);
	}
}

export default Palindrome;
