import React, { useState } from "react";

const Circle = () => {
	const [hover, setHover] = useState(false)

	let mainStyle = {
		opacity: 0.7,
		background: "black",
		boxShadow: "inset 0 0 0.5rem 0 #80ee7888, inset 0 0 1rem 0 #000000e6,0 0 1.25rem 0 #ff56138e, 0 0 1rem 0 #d89d858e",
	},
		bigStyle = { width: "8rem", height: "8rem", borderRadius: "50%" },
		smallStyle = { width: "3rem", height: "3rem", borderRadius: "50%" };

	return (
		<div className="main" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
			style={hover ? mainStyle : null}>
			<div className="big" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
				style={hover ? bigStyle : null}></div>
			<div className="small" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
				style={hover ? smallStyle : null}></div>
		</div >
	);
};

export default Circle;
