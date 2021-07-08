import React from 'react'
import { BsSearch } from 'react-icons/bs'
import '../styles/imput.css'
const Input = ({ search, placeholder, ret }) => {
    const getText = () => {
        var text = document.getElementById(placeholder).value
        ret(text)
    }
    return (
        <div className={search ? 'Input search' : 'Input '}>
            <input type="text" id={placeholder} placeholder={placeholder} />
            {search ? <BsSearch onClick={getText} /> : ''}
        </div>
    )
}

export default Input
