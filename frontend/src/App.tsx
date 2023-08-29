import './App.css'
import {Note as NoteModel} from './models/note';
import Note from "./components/Note.tsx";
import * as NoteApi from "./repository/notesApi.ts"
import {Fragment, useEffect, useState} from "react";
import AddNoteDialog from "./components/AddNoteDialog.tsx";


function App() {

    const [notes, setNotes] = useState<NoteModel[]>([]);
    const [showAddNotesDialog, setAddNotesDialog] = useState(false);

    useEffect(() => {
        async function loadNotes() {
            try {
                const notes = await NoteApi.getNotes();
                setNotes(notes)
            } catch (error) {
                alert(error);
            }
        }

        loadNotes()
    }, []);

    return (
        <Fragment>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {notes.map(notes => (
                    <Note note={notes} key={notes._id}/>
                ))}

            </div>

            <button onClick={() => setAddNotesDialog(true)} className="px-4 py-2 text-white bg-primary rounded-lg"> Add Note</button>
            {
                showAddNotesDialog &&
                <AddNoteDialog onDismiss={() => setAddNotesDialog(false)}
                               onNoteSaved={(newNote) => {
                                   setNotes([...notes, newNote]);
                                   setAddNotesDialog(false);
                               }}
                />
            }
        </Fragment>
    );
}

export default App;
