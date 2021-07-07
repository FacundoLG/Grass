import React, { useEffect } from 'react'
import '../styles/noteForm.css'
const NoteForm = ({ title, ret }) => {
    useEffect(() => {
        document.getElementById('formTitle').value = title
    }, [])
    const finishForm = () => {
        ret({
            title: document.getElementById('formTitle').value,
            content: document.getElementById('formText').value
        })
    }
    return (
        <div className="NoteForm">
            <div className="form">
                <input id="formTitle" className="forminput title" type="text" />
                <textarea id="formText" className="forminput text"></textarea>
                <div className="buttonContainer">
                    <button onClick={finishForm} className="addButton">
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NoteForm
