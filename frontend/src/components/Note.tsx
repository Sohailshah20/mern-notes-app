import styles from "../styles/Note.module.css"
import {Note as NoteModel } from "../models/note"
import {Card} from "react-bootstrap";
import {inspect} from "util";

interface NoteProps {
    note : NoteModel
}
const Note = ({note} : NoteProps) => {
    return(
        <Card className={styles.noteBody}>
            <Card.Body>
                <Card.Title>
                    {note.title}
                </Card.Title>
                <Card.Body className={styles.noteText}>
                    {note.text}
                </Card.Body>
            </Card.Body>
        </Card>
    )
}
export default Note;