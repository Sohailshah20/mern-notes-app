import {Note} from "../models/note.ts";
import {NoteInput} from "../repository/notesApi.ts";
import * as NoteApi from "../repository/notesApi.ts";
import {useForm} from "react-hook-form";

interface AddNoteProps {
    onDismiss: () => void,
    onNoteSaved: (note: Note) => void;
}

const AddNoteDialog = ({onDismiss, onNoteSaved}: AddNoteProps) => {

    const {register, handleSubmit, formState: {errors, isSubmittng}} = useForm<NoteInput>();

    async function onSubmit(input: NoteInput) {
        try {
            const response = await NoteApi.createNote(input);
            onNoteSaved(response);
        } catch (e) {
            console(e);
            alert(e);
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="w-[600px] bg-primary p-4 rounded-lg">
                <div className="flex flex-row justify-center items-center mb-4">
                    <button type="button" onClick={onDismiss}
                            className="text-white hover:text-gray-400y text-sm w-8 h-8 ml-auto inline-flex justify-center items-center">
                        <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                    </button>
                </div>
                <span className='divide-x-2'></span>
                <form className="space-y-6" action="#" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-white ">Title</label>
                        <input type="text" className="bg-secondary border border-gray-300 text-white text-sm rounded-lg
                   focus:border-white block w-full p-2.5 focus:ring-0"
                               placeholder="Title" required {...register("title", {required: "Title is required"}) }/>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                            password</label>
                        <textarea rows="8" placeholder="Enter your note"
                                  className="bg-secondary border border-gray-300 text-white text-sm rounded-lg
                   focus:border-white block w-full p-2.5 focus:ring-0"  {...register("text") }></textarea>
                    </div>
                    <button type="submit" disabled={isSubmittng}
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg
                            text-sm px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                        Note
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddNoteDialog;