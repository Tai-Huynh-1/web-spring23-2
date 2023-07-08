/**
 * A reusable button with default styles and the ability to extend and modify styles. Proxy pattern.
 * @param {*} param0 children, classname, secondary, and other props
 * @returns Button component
 */
const Button = ({ children, className = "", secondary = false, ...otherProps }) => {
	const styles = `${secondary ? "bg-orange-500" : "bg-indigo-500"} text-white rounded-md p-1 ${className}`;

	return (
		<button className={styles} type="button" {...otherProps}>
			{children}
		</button>
	);
};

export default Button;
