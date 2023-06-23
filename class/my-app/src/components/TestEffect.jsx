import React, { useEffect } from "react";

const TestEffect = () => {
	useEffect(() => {
		console.log("==== running effect on mount ===="); // continuous
	});

	console.log("component rendering / re-rendering"); // 1
	return <div>TestEffect</div>;
};

export default TestEffect;
