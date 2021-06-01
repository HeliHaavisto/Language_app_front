import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ModalWindow(props) {
	return (
		<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">Woohoo</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>Great! You have learned 5 new words!</h4>
				<p>Keep going to impove your skills in Finnish language. Good luck in the next level.</p>
			</Modal.Body>
			<Modal.Footer>
				{props.counter > 1 && (
					<Button variant="danger" className="dragNdropButtons" onClick={props.startover}>
						Start Again
					</Button>
				)}
				{props.counter < 4 && (
					<Button variant="warning" className="dragNdropButtons" onClick={props.nextlevel}>
						Next Level
					</Button>
				)}

				{/* <Button variant="warning" onClick={props.onHide}>
					Close
				</Button> */}
			</Modal.Footer>
		</Modal>
	);
}

export default ModalWindow;
