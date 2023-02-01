import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./reducer/notesReducer";

export const store = configureStore({
	reducer: {
		notesReducer: notesReducer,
	},
});
