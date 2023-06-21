import { useState } from "react";

/**
 * This is a functional Palindrome component
 */
function PalindromeB() {
	const initialText = "";
	const [text, setText] = useState(initialText);
	const [textB, setTextB] = useState(initialText);

	const handleChange = (event) => {
		setText(event.target.value);
	};

	const handleClear = (event) => {
		setText(initialText);
	};

	function checkPalindrome(string) {
		return string === string.split("").reverse().join("");
	}

	const isPalindrome = checkPalindrome(text);
	const message = isPalindrome ? `${text} IS a palindrome` : `${text} IS NOT a palindrome`;

	return (
		<div>
			<h1>Palindrome Functional Component</h1>
			<label id="palindrome">
				Enter some text: <input id="palindrome" type="text" onChange={handleChange} value={text} />
			</label>
			<button id="clear" type="button" onClick={handleClear}>
				Clear
			</button>

			<br />

			<h2>{message}</h2>

			<br />
			<label id="palindromeB">
				Enter some text: <input id="palindromeB" type="text" onChange={handleChange} value={textB} />
			</label>
			<button id="clearB" type="button" onClick={handleClear}>
				Clear
			</button>

			<h2></h2>
		</div>
	);
}

export default PalindromeB;
