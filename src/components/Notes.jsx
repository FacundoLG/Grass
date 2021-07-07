import React, { useState, useEffect } from 'react'
import '../styles/notes.css'
import Input from './Input'
import NoteForm from './NoteForm'
const Notes = () => {
    const [form, setForm] = useState(false)
    const [inputTitle, setInputTitle] = useState('')
    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/api')
            .then((data) => data.json())
            .then((data) => setNotes(data))
    }, [])

    const newTask = (title) => {
        setInputTitle(title)
        console.log(inputTitle)
        setForm(true)
    }

    const addTask = (data) => {
        console.log(data)
        fetch('http://localhost:3001/api', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
        setForm(false)
    }
    return (
        <div className="Notes">
            {form ? (
                <NoteForm
                    title={inputTitle}
                    ret={(data) => {
                        addTask(data)
                    }}
                />
            ) : (
                ''
            )}
            <Input
                note={true}
                placeholder={'note title...'}
                ret={(title) => {
                    newTask(title)
                }}
            />
            <div className="noteContainer">
                {notes.map((note) => {
                    console.log(note)
                    return (
                        <div className="note" key={note.note_id + note.title}>
                            <h5 className="noteTitle">{note.title}</h5>
                            <p className="noteContent"> {note.content}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Notes
