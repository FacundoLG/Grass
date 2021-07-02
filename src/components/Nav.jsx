import React from 'react'
import { CgNotes, CgTrash, CgBell } from 'react-icons/cg'
import { AiOutlineTags } from 'react-icons/ai'
import '../styles/nav.css'
const Nav = () => {
    return (
        <div className="Nav">
            <div className="brandContainer">
                <h3 className="brand">Grass</h3>
            </div>
            <div className="options">
                <ul>
                    <li className="option"> <CgNotes className="icon" /> Notes</li>
                    <li className="option"> <AiOutlineTags className="icon" />Tags</li>
                    <li className="option small"> <CgTrash className="icon" /></li>
                    <li className="option medium"> <CgBell className="icon" /> Remainders</li>
                </ul>
            </div>
        </div>
    )
}

export default Nav
