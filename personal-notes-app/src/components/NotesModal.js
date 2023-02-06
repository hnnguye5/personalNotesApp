import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { InputGroup, FormControl, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createNote } from "../redux/actions/notesActions";

export const NewNotesModal = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div>
			<Button className="btn btn-success" onClick={handleShow}>
				Create Note
			</Button>
			<NotesModal
				note={null}
				handleFormSubmit={createNote}
				show={show}
				handleClose={handleClose}
			/>
		</div>
	);
};

const NotesModal = ({ note, handleFormSubmit, show, handleClose }) => {
	const [modalNote, setModalNote] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		setModalNote(note);
	}, [note]);

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Form
					onSubmit={(e) => {
						e.preventDefault();
						handleFormSubmit(dispatch, modalNote);
					}}
				>
					<Modal.Body>
						<InputGroup>
							<FormControl
								value={modalNote === null ? "" : modalNote}
								onChange={(e) => setModalNote(e.target.value)}
							/>
						</InputGroup>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
						<Button type="submit" variant="primary" onClick={handleClose}>
							Save Changes
						</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</>
	);
};
