import { Component } from "react";
import "./App.css";

// function App() {
// 	const name = "Jake";
// 	const element = <h1>Hello, {name}</h1>;

// 	console.log("element", element);

// 	return element;
// }

class App extends Component {
	// constructor() {}

	render() {
		const name = "Jill";
		const element = <h1>Hello, {name}</h1>;
		return element;
	}
}

export default App;
