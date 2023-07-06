import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
	const [state, setState] = useState({
		posts: null,
		loading: false,
		error: null,
	});

	useEffect(() => {
		setState({ posts: null, loading: true, error: null });
		// defining my fetchData function

		console.log("before making api call");

		// async/await & IIFE
		(async function fetchData(url) {
			try {
				console.log("INSIDE FETCH DATA");
				const result = await axios.get(url);
				console.log("result", result);
				const { data } = result;
				setState({ posts: data, loading: false, error: null });
			} catch (error) {
				console.log("error", error);
				setState({ posts: null, loading: false, error: error });
			}
		})(url);

		// call/invoke fetchData
		// fetchData(url);

		console.log("after making api call");
	}, []);

	return state;
};

export default useFetch;
