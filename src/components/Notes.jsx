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
                {notes.map((note) => (
                    <div className="note">
                        <h5>{note.title}</h5>
                        <p>{note.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Notes
