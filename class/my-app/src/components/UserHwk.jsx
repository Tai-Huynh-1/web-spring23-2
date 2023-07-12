import React, { useState, useEffect } from "react";

/**
 * Component to fetch and display data of an individual user from the API
 * @returns {JSX.Element}
 */
const UserHwk = () => {
	const [userId, setUserId] = useState(0);
	const [loading, setLoading] = useState(false);
	const [userData, setUserData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		if (userId === 0) return;

		const fetchUser = async () => {
			try {
				const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
				if (!response.ok) {
					throw new Error("Error fetching user data");
				}

				const data = await response.json();
				setUserData(data);
				setLoading(false);
			} catch (error) {
				setError(error.message);
				setLoading(false);
			}
		};

		fetchUser();
	}, [userId]);

	const handleChange = (event) => {
		setUserId(event.target.value);
	};

	const renderUserDetails = () => {
		if (loading) {
			return <p>Loading...</p>;
		} else if (error) {
			return <p>Error: {error}</p>;
		} else if (userData) {
			return (
				<div>
					<p>User Id: {userData.id}</p>
					<p>Name: {userData.name}</p>
					<p>Username: {userData.username}</p>
					<p>Email: {userData.email}</p>
				</div>
			);
		} else {
			return null;
		}
	};

	return (
		<div>
			<h1>User By Id</h1>

			<br />

			<label>
				User Id to Fetch:
				<input type="text" value={userId} onChange={handleChange} />
			</label>

			<div>
				<h2>User Data</h2>
				{renderUserDetails()}
			</div>
		</div>
	);
};

export default UserHwk;
