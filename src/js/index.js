//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

let SimpleCounter = (props) => {
	return (
		<body>
			<div className="bigCounter d-flex">
				<div className="clock">
					<i className="fas fa-clock"></i>
				</div>
				<div className="fith">{props.sixthDigit % 10}</div>
				<div className="fith">{props.fithDigit % 10}</div>
				<div className="fourth">{props.fourthDigit % 10}</div>
				<div className="third">{props.thirdDigit % 10}</div>
				<div className="second">{props.secondDigit % 10}</div>
				<div className="first">{props.firstDigit % 10}</div>
			</div>
		</body>
	);
};
SimpleCounter.propTypes = {
	sixthDigit: PropTypes.number,
	fithDigit: PropTypes.number,
	fourthDigit: PropTypes.number,
	thirdDigit: PropTypes.number,
	secondDigit: PropTypes.number,
	firstDigit: PropTypes.number,
};
//render your react application
let counter = 0;
setInterval(() => {
	const six = Math.floor(counter / 100000);
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	counter++;
	console.log(six, five, four, three, two, one);
	ReactDOM.render(
		<SimpleCounter
			firstDigit={one}
			secondDigit={two}
			thirdDigit={three}
			fourthDigit={four}
			fithDigit={five}
			sixthDigit={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);
