import React from 'react'
import Input from './Input'
import { BsList, BsCloudFill } from 'react-icons/bs'
import '../styles/header.css'
import { connect } from 'react-redux'
import { setNav } from '../redux/actions'
const Header = (props) => {
    const handleNav = () => {
        props.setNav()
    }
    return (
        <div className="Header">
            <div className="left">
                <div onClick={handleNav}>
                    <BsList className="list" />
                </div>
                <div>
                    <h2 className="brand">Grass</h2>
                </div>
            </div>
            <Input search={true} placeholder="Find your notes..." />
            <div className="right">
                <BsCloudFill className="icon small" />
            </div>
        </div>
    )
}
const mapDispathToProps = {
    setNav
}
export default connect(null, mapDispathToProps)(Header)
