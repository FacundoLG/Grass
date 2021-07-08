import React, { useState } from 'react'
import '../styles/noteInput.css'

const NoteInput = () => {
    const [active, setactive] = useState(false)
    const addTask = () => {
        var data = {
            title: document.getElementById('inputTitle').value,
            content: document.getElementById('noteInput').value
        }
        fetch('http://localhost:3001/api', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then((response) => response.json())
            .then((json) => console.log(json))

        document.getElementById('inputTitle').value = ''
        document.getElementById('noteInput').value = ''
    }
    document.addEventListener('click', (e) => {
        var click = e.target.id
        if (click === 'inputTitle' || click === 'noteInput') {
            setactive(true)
        } else {
            setactive(false)
        }
    })

    return (
        <div
            className="Noteinput"
            onClick={() => {
                setactive(true)
            }}
        >
            <div>
                <input
                    type="text"
                    id="inputTitle"
                    className="inputTitle"
                    placeholder="note title.."
                />
            </div>
            <div className={active ? 'container' : 'container hide'}>
                <textarea
                    name=""
                    id="noteInput"
                    placeholder="note text.."
                    className={active ? 'inputText' : 'inputText hide'}
                ></textarea>
                <div className="bottom">
                    <button className={active ? '' : 'hide'} onClick={addTask}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NoteInput
