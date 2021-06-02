import React from "react";

const Letter = (props) => {
	return (
		<button className="abc-letter" onClick={props.play_sound}>
			<div className="letter-inner">
				<div className="front-side">{props.name}</div>
				<div className="back-side">{props.pronunciation}</div>
			</div>
		</button>
	);
};

export default Letter;
