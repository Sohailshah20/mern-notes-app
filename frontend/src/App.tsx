import './global.css';
import React, {useEffect, useState} from 'react';
import {Note as NoteModel} from './models/note';
import Note from "./components/Note";


function App() {

    const [notes, setNotes] = useState<NoteModel[]>([]);

    useEffect(() => {
        async function loadNotes() {
            try {
                const response = await fetch("/api/notes", {method: "GET"});
                const notes = await response.json();
                setNotes(notes)

            } catch (error) {
                console.error(error);
                alert(error);
            }
        }

        loadNotes()
    }, []);

    return (
        <div className="global">
            {notes.map(n => (
                <Note note={n} key={n._id}/>
            ))}
        </div>
    );
}

export default App;
