import {Note as NoteModel} from "../models/note"
import {formDate} from "../util/formDate.ts";

interface NoteProps {
    note: NoteModel
}

const Note = ({note}: NoteProps) => {

    let createdUpdatedText: string;
    if (note.updatedAt > note.createdAt){
        createdUpdatedText = "Updated" + formDate(note.updatedAt);
    }else {
        createdUpdatedText = "Updated" + formDate(note.createdAt);
    }
    return (
        <div className=" shadow-md bg-primary
        hover:bg-secondary transition ease-in-out delay-150">
            {/*<div className="bg-gradient-to-t from-white from-50% to-10% opacity-10">*/}
                <div className="bg-grey-lightest border-b p-4 flex items-center">
                    <div className="mr-2 text-sm text-grey-darkest">{note.title}</div>
                </div>

                <div className="p-4 h-[190px] ">
                    <p className="whitespace-pre-line line-clamp-6 overflow-hidden">{note.text}</p>
                </div>
            <div>{createdUpdatedText}</div>
            {/*</div>*/}
        </div>
    )
}
export default Note;