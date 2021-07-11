import React from 'react'
import '../styles/navbar.css'
import { BsPencil, BsBell, BsTrash } from 'react-icons/bs'
import { connect } from 'react-redux'
import { setNav } from '../redux/actions'

const Navbar = (props) => {
    const { navState } = props
    return (
        <div
            className={navState ? 'Navbar' : 'Navbar hideNav'}
            onClick={() => {
                props.setNav()
            }}
        >
            <ul className="listConainer ">
                <li className={navState ? '' : ' hideNav'}>
                    <BsPencil className="icon " />
                    Notes
                </li>
                <li className={navState ? '' : ' hideNav'}>
                    <BsBell className="icon" />
                    Reminders
                </li>
                {/* <li className={navState ? '' : ' hideNav'}>
                    <BsTag className="icon" />
                    Tags
                </li> */}
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
const MapDispachToProps = {
    setNav
}
export default connect(MapStateToProps, MapDispachToProps)(Navbar)
