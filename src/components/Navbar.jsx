import React from 'react'
import '../styles/navbar.css'
import { BsPencil, BsBell, BsTag, BsTrash } from 'react-icons/bs'
import { connect } from 'react-redux'
const Navbar = ({ navState }) => {
    return (
        <div className={navState ? 'Navbar' : 'Navbar hideNav'}>
            <ul className="listConainer ">
                <li className={navState ? '' : ' hideNav'}>
                    <BsPencil className="icon " />
                    Notes
                </li>
                <li className={navState ? '' : ' hideNav'}>
                    <BsBell className="icon" />
                    Remainders
                </li>
                <li className={navState ? '' : ' hideNav'}>
                    <BsTag className="icon" />
                    Tags
                </li>
                <li className={navState ? '' : ' hideNav'}>
                    <BsTrash className="icon" />
                    Trash can
                </li>
            </ul>
        </div>
    )
}
const MapStateToProps = (state) => ({
    navState: state.nav
})
export default connect(MapStateToProps)(Navbar)
