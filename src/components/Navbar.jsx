import React from 'react'
import '../styles/navbar.css'
import { BsPencil, BsBell, BsTrash } from 'react-icons/bs'
import { connect } from 'react-redux'
import { setNav } from '../redux/actions'
import { BrowserRouter as Router, Link } from 'react-router-dom'
const Navbar = (props) => {
    const { navState } = props
    return (
        <div
            className={navState ? 'Navbar' : 'Navbar hideNav'}
            onClick={() => {
                props.setNav()
            }}
        >
            <ul className="listConainer">
                <Link to="/" className="link">
                    <BsPencil className="icon " />
                    Notes
                </Link>
                <Link to="/reminders" className="link">
                    <BsBell className="icon" />
                    Reminders
                </Link>
                {/* <li className={navState ? '' : ' hideNav'}>
                    <BsTag className="icon" />
                    Tags
                </li> */}
                <Link to="/can" className="link">
                    <BsTrash className="icon" />
                    Trash can
                </Link>
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
