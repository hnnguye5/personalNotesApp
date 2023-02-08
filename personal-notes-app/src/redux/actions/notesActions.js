import { CREATE_NOTE, DELETE_NOTES, EDIT_NOTE, SET_NOTES } from "../types";

export const getNotes = async (dispatch) => {
	try {
		const response = [
			{ value: "Testing notes array 1", id: 1 },
			{ value: "Testing notes array 2", id: 2 },
			{ value: "Testing notes array 3", id: 3 },
			{ value: "Testing notes array 4", id: 4 },
		];

		dispatch({
			type: SET_NOTES,
			payload: response,
		});
	} catch (error) {
		console.log(error);
	}
};

export const deleteNote = async (dispatch, note) => {
	try {
		dispatch({
			type: DELETE_NOTES,
			payload: note,
		});
	} catch (error) {
		console.log(error);
	}
};

export const createNote = async (dispatch, note) => {
	try {
		const response = { value: note, id: 1 };
		dispatch({
			type: CREATE_NOTE,
			payload: response,
		});
	} catch (error) {
		console.log(error);
	}
};
export const editNote = async (dispatch, note) => {
	try {
		const response = { value: note, id: 1 };
		dispatch({
			type: EDIT_NOTE,
			payload: response,
		});
	} catch (error) {
		console.log(error);
	}
};
