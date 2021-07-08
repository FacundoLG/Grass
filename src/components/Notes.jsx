import React from 'react'
import { connect } from 'react-redux'
import '../styles/notes.css'
import NoteInput from './NoteInput'
import { getNotes } from '../redux/actions/index'
import { apiNotes } from '../service/apiNotes'
const Notes = (props) => {
    const { notes } = props
    const url = 'http://localhost:3001/api'

    const delteNote = (id) => {
        var data = {
            note_id: id
        }
        fetch(url, {
            method: 'DELETE',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then((res) => res.json())
            .then(() => {
                var newNotes = apiNotes(url)
                props.getNotes(newNotes)
            })
    }
    return (
        <div className="Notes">
            <NoteInput />
            <div className="noteContainer">
                {notes
                    ? notes.map((note) => {
                          return (
                              <div
                                  className="note"
                                  key={note.note_id + note.title}
                              >
                                  <h5 className="noteTitle">{note.title}</h5>
                                  <p className="noteContent"> {note.content}</p>
                                  <div className="buttonContainer">
                                      <button
                                          className="deleteButton"
                                          onClick={() => {
                                              delteNote(note.note_id)
                                          }}
                                      >
                                          x
                                      </button>
                                  </div>
                              </div>
                          )
                      })
                    : ''}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}
const mapDispatchToProps = {
    getNotes
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes)
