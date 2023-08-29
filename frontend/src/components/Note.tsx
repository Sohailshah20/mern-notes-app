import {Note as NoteModel} from "../models/note"
import {formDate} from "../util/formDate.ts";
import {Trash2} from 'react-feather';

interface NoteProps {
    note: NoteModel,
    onNoteDelete: (note: NoteModel) => void;
}

const Note = ({note, onNoteDelete}: NoteProps) => {

    let createdUpdatedText: string;
    if (note.updatedAt > note.createdAt) {
        createdUpdatedText = "Updated " + formDate(note.updatedAt);
    } else {
        createdUpdatedText = "Created " + formDate(note.createdAt);
    }
    return (
        <div className=" shadow-md bg-primary
        hover:bg-secondary transition ease-in-out delay-150">
            {/*<div className="bg-gradient-to-t from-white from-50% to-10% opacity-10">*/}
            <div className="bg-grey-lightest   p-3 flex items-center border-b border-gray-600">
                <div className="mr-2 text-sm text-grey-darkest">{note.title}</div>
                <Trash2 onClick={() =>
                    onNoteDelete(note)}
                        className="ms-auto h-4 hover:h-5 transition ease-linear"/>
            </div>

            <div className="p-3 h-[190px] ">
                <p className="whitespace-pre-line line-clamp-6 overflow-hidden">{note.text}</p>
            </div>
            <div className="bg-grey-lightest border-b p-3 flex items-center">
                <div className="mr-2 text-sm text-grey-darkest">{createdUpdatedText}</div>
            </div>
            {/*</div>*/}
        </div>
    )
}
export default Note;