import React from 'react'
import { BsSearch, BsPlusCircle } from 'react-icons/bs'
import '../styles/imput.css'
const Input = ({ search, note, placeholder, ret }) => {
    const getText = () => {
        var text = document.getElementById(placeholder).value
        ret(text)
        if (note) {
            document.getElementById(placeholder).value = ''
        }
    }
    return (
        <div className={search ? 'Input search' : 'Input'}>
            <input type="text" id={placeholder} placeholder={placeholder} />
            {search ? <BsSearch onClick={getText} /> : ''}
            {note ? <BsPlusCircle onClick={getText} /> : ''}
        </div>
    )
}

export default Input
