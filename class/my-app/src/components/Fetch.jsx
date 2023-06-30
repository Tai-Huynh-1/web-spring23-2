import React, { useEffect, useState } from "react";
import axios from "axios";

/**
 * Go over async/await syntax for promises
 * @returns
 */
const Fetch = () => {
	const [posts, setPosts] = useState(null);

	useEffect(() => {
		// defining my fetchData function
		const url = "https://jsonplaceholder.typicode.com/posts";
		function fetchData(url) {
			return axios
				.get(url)
				.then((res) => {
					const { data } = res;
					setPosts(data);
				})
				.catch((err) => {
					console.log("error", err);
				});
		}

		console.log("making api call");
		// call/invoke fetchData
		fetchData(url);
		console.log("after making api call");
	}, []);

	console.log("posts", posts);

	return (
		<div>
			<h1>Fetch</h1>
			<ul>
				{posts?.map((post) => {
					return (
						<li key={post.id}>
							<h3>{post.id}</h3>
							<p>{post.body}</p>
						</li>
					);
				})}
				{/* {[
					<li>
						<h3>Hello</h3>
					</li>,
					<li>
						<h3>World</h3>
					</li>,
					<li>
						<h3>!!!!</h3>
					</li>,
				]} */}
			</ul>
		</div>
	);
};

export default Fetch;
