import { CREATE_NOTE, EDIT_NOTE, SET_NOTES, DELETE_NOTES } from "../types";

const initialState = {
	notes: [],
};

export default function notesReducer(state = initialState, action) {
	switch (action.type) {
		case SET_NOTES:
			return { ...state, notes: [...action.payload] };
		case DELETE_NOTES:
			for (let i = 0; i < state.notes.length; i++) {
				if (state.notes[i].id === action.payload.id) {
					state.notes.splice(i, 1);
					break;
				}
			}
			return { ...state, notes: [...state.notes] };
		case CREATE_NOTE:
			return { ...state, notes: [...state.notes, action.payload] };
		case EDIT_NOTE:
			for (let i = 0; i < state.notes.length; i++) {
				if (state.notes[i].id === action.payload.id) {
					state.notes[i].value = action.payload.value;
				}
			}
			return { ...state, notes: [...state.notes] };
		default:
			return state;
	}
}
