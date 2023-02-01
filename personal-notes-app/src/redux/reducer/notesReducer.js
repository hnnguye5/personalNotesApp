import { SET_NOTES } from "../types";

const initialState = {
	notes: [],
};

export default function notesReducer(state = initialState, action) {
	switch (action.type) {
		case SET_NOTES:
			return { ...state, notes: [...action.payload] };
		default:
			return state;
	}
}
