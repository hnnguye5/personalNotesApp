import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "../redux/actions/notesActions";

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
						<td>{n.value}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default NotesTable;
