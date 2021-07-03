import React, { useState } from 'react'
import '../styles/notes.css'
import Input from './Input'
import NoteForm from './NoteForm'
const Notes = () => {
    const [form,setForm] = useState(false)
    const [inputTitle,setInputTitle] = useState("")
    const newTask = (title) =>{
        setInputTitle(title)
        console.log(inputTitle)
        setForm(true)
    }
    const addTask = (data) =>{
        console.log(data)
        setForm(false)
    }
    return (
            <div className="Notes">
                {form? <NoteForm title={inputTitle} ret={(data) => {addTask(data)}}/>: ""}
                <div>
                {form? "": <Input note={true} placeholder={"note title..."} ret={(title)=>{ newTask(title)}}/>}
                </div>
                <div>

                </div>
            </div>
    )
}

export default Notes
