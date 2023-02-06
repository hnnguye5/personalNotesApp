import React from "react";
import { NewNotesModal } from "./components/NotesModal";
import NotesTable from "./components/NotesTable";

const App = () => {
	return (
		<div className="App">
			<h1>Personal Note App</h1>
			<div>
				<NewNotesModal />
			</div>
			<NotesTable />
		</div>
	);
};

export default App;
