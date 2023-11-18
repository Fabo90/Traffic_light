import React, { useState } from "react";
import "../../styles/blackTop.css"
import "../../styles/red.css"
import "../../styles/redBright.css"
import "../../styles/blackMiddle.css"
import "../../styles/yellow.css"
import "../../styles/yellowBright.css"
import "../../styles/blackBottom.css"
import "../../styles/green.css"
import "../../styles/greenBright.css"
import "../../styles/button.css"

const TrafficLight = () => {

	const [color, setColor] = useState("red");

	const colorChange = () => {
		if (color === "red") {
		  setColor("yellow");
		} else if (color === "yellow") {
		  setColor("green");
		} else if (color === "green") {
		  setColor("red");
		};
	  };

	return (
		<div className="container mx-auto">
			<p className="topBox"></p>
			<p className="blackTop"></p>
			<p onClick={() => setColor("red")} 
				className={color === "red" ? "redBright" : "red"}
			></p>
			<p className="blackMiddle"></p>
			<p onClick={() => setColor("yellow")} 
				className={color === "yellow" ? "yellowBright" : "yellow"}
			></p>
			<p className="blackBottom"></p>
			<p onClick={() => setColor("green")} 
				className={color === "green" ? "greenBright" : "green"}
			></p>
			<button className="btn" onClick={colorChange}>Change Color</button>
		</div>
	);
};

export default TrafficLight;
