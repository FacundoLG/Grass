import React from 'react'
import '../styles/noteForm.css'
const NoteForm = ({title}) => {
    return (
        <div className="NoteForm">
            <div className="form">
                <input className="forminput title" type="text" />
                <textarea className="forminput text"></textarea>
                <div className="buttonContainer">
                    <button className="addButton">Add</button>
                </div>
            </div>
        </div>
    )
}

export default NoteForm
