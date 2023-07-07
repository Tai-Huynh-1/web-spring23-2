import React, { Fragment, useState } from "react";

const LoginForm = () => {
	// TODO: set up state management (use just 1 state)
	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	// TODO: set up and hook up the onChange handler (see if you can just use 1 onChange handler)
	const handleChange = (event) => {};

	const handleLogin = (event) => {
		event.preventDefault();

		// TODO: perform some input validation:
		// user's email must not be empty
		// user's password must be at least 5 characters in length

		// API submission happens here
	};

	return (
		<Fragment>
			<h1>Login</h1>
			<form onSubmit={handleLogin}>
				{/* email */}
				<div>
					<label htmlFor="email">Email: </label>
					<input type="email" id="email" placeholder="user@domain.com" required onChange={handleChange} />
				</div>

				{/* password */}
				<div>
					<label htmlFor="password">Password: </label>
					<input type="password" id="password" required onChange={handleChange} />
				</div>

				{/* 2 buttons for submission or go back */}

				<button type="submit">Login</button>

				<button>Go Back</button>
			</form>
		</Fragment>
	);
};

export default LoginForm;
