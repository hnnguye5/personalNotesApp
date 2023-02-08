import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote, getNotes } from "../redux/actions/notesActions";
import { Button } from "react-bootstrap";
import { EditNotesModal } from "./NotesModal";

const NotesTable = () => {
	const notes = useSelector((state) => state.notesReducer.notes);
	const dispatch = useDispatch();

	useEffect(() => {
		getNotes(dispatch);
	}, [dispatch]);

	return (
		<table className="table table-dark">
			<tbody>
				{notes.map((n) => (
					<tr>
						<td>
							<EditNotesModal note={n.value} />
						</td>
						<td>
							<Button
								className="button btn-danger"
								onClick={() => deleteNote(dispatch, n)}
							>
								Delete
							</Button>
						</td>
						<td>{n.value}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default NotesTable;
