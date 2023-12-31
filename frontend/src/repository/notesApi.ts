import {Note} from "../models/note.ts";

async function fetchData(input: RequestInfo, init?: RequestInit) {
    const response = await fetch(input, init);
    if (response.ok) {
        return response;
    } else {
        const errorBody = await response.json();
        const errorMessage = errorBody.error;
        throw Error(errorMessage);
    }
}


export async function getNotes(): Promise<Note[]> {
    const response = await fetchData("http://localhost:9000/api/notes", {method: "GET"})
    return response.json();
}

export interface NoteInput {
    title: string,
    text?: string
}

export async function createNote(note: NoteInput): Promise<Note> {
    const response = await fetchData("http://localhost:9000/api/notes",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(note)

        });
    return response.json();
}

export async function deleteNote(noteId: string) {
    await fetch("http://localhost:9000/api/notes", {method: "DELETE"});
}