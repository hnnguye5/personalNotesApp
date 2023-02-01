import { SET_NOTES } from "../types";

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
