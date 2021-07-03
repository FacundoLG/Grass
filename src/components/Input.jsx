import React from 'react'
import {BsSearch, BsPlusCircle} from 'react-icons/bs'
import '../styles/imput.css'
const Input = ({search,note,placeholder}) => {
    return (
        <div className="Input">
            <input type="text" placeholder={placeholder}/>
            {search? <BsSearch/>:""}
            {note? <BsPlusCircle/>:""}
        </div>
    )
}

export default Input
