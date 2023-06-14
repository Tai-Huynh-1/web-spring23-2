import { Component } from "react";
import "./App.css";

class App extends Component {
	// constructor() {}

	render() {
		const name = "Jill";
		const element = <h1>Hello, {name}</h1>;
		console.log("element", element);
		return element;
	}
}

export default App;
