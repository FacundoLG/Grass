import React from 'react'
import '../styles/notes.css'
import Input from './Input'
import NoteForm from './NoteForm'
const Notes = () => {
    return (
            <div className="Notes">
            <NoteForm/>
                <div>
                <Input note={true} placeholder={"note title..."}/>
                </div>
                <div>

                </div>
            </div>
    )
}

export default Notes
