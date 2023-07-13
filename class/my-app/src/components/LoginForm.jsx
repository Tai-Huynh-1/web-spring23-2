import React, { useState } from "react";
import Button from "./common/Button";
import Input from "./common/Input";

const LoginForm = () => {
	// TODO: set up state management (use just 1 state)
	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	// TODO: set up and hook up the onChange handler (see if you can just use 1 onChange handler)
	const handleChange = (event) => {
		const { id, value } = event.target;
		setForm((prevForm) => ({
			...prevForm,
			[id]: value,
		}));
	};

	const handleLogin = (event) => {
		event.preventDefault();

		// TODO: perform some input validation:
		// user's email must not be empty
		// user's password must be at least 5 characters in length
		const { email, password } = form; //  form is an object containing the form data

		if (email.trim() === " ") {
			alert("Please enter your email.");
			return;
		}

		if (password.length < 5) {
			alert("Password must be at least 5 characters long.");
			return;
		}

		// API submission happens here
		alert(`email is ${email} and password is ${password}`);
	};

	return (
		<div className="flex justify-center">
			<div className="mt-10 text-center border-gray-300 border-2 rounded-md p-4 px-8 w-8/12 sm:w-4/12">
				<h1 className="text-xl text-indigo-500 mb-4 font-bold">Login</h1>
				<form onSubmit={handleLogin} className="flex flex-col gap-4">
					{/* email */}
					{/* <div className="text-left flex justify-between">
						<label htmlFor="email">Email</label>
						<input className="border-2 border-black rounded-md px-2 py-1" type="email" id="email" placeholder="user@domain.com" required onChange={handleChange} />
					</div>

					{/* password */}
					{/* <div className="text-left flex justify-between">
						<label htmlFor="password">Password</label>
						<input className="border-2 border-black rounded-md px-2 py-1" type="password" id="password" required onChange={handleChange} />
					</div>{" "} */}

					<Input label="Email" id="email" type="email" placeholder="user@domain.com" required onChange={handleChange} />

					<Input label="Password" id="password" type="password" required onChange={handleChange} />
					{/* 2 buttons for submission or go back */}
					<Button type="submit" rounded="lg">
						Login
					</Button>
					<Button secondary onClick={() => console.log("GO BACK WAS CLICKED")}>
						Go Back
					</Button>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
