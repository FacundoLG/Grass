import React from 'react'
import { connect } from 'react-redux'
import '../styles/notes.css'
import NoteInput from '../components/NoteInput'
import { getNotes } from '../redux/actions/index'
import { BsX } from 'react-icons/bs'
import { withRouter } from 'react-router-dom'
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
            .then((json) => {
                console.log(json)
                props.getNotes(json)
            })
    }
    return (
        <div className="Container">
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
                                          <BsX className="xicon" />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Notes))
