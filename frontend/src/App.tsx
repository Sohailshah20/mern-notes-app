import './App.css'
import {Note as NoteModel} from './models/note';
import Note from "./components/Note.tsx";
import * as NoteApi from "./repository/notesApi.ts"
import {useEffect, useState} from "react";


function App() {

    const [notes, setNotes] = useState<NoteModel[]>([]);

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
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {notes.map(notes => (
                <Note note={notes} key={notes._id}/>
            ))}
        </div>
    );
}

export default App;
