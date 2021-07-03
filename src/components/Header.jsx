import React from 'react'
import Input from './Input'
import {BsList, BsCloudFill} from 'react-icons/bs'
import '../styles/header.css'
const Header = () => {
    return (
        <div className="Header">
           <div className="left">
                <BsList className="list"/>
                <div>
                    <h2 className="brand">Grass</h2>
                </div>
           </div>
           <Input/>
           <div className="right">
                <BsCloudFill className="icon"/>
           </div>
        </div>
    )
}

export default Header
