import React from 'react'
import { withRouter } from 'react-router-dom'
import '../styles/reminders.css'
const Reminders = () => {
    return (
        <div className="Container">
            <div className="remainder">
                <div className="upRemainder">
                    <div>Estudiar</div>
                    <div className="time">
                        <p>12:10:12</p>
                    </div>
                </div>
                <div className="notload">
                    <div className="load"></div>
                </div>
                <div className="date"> 13/08/2021 18:30</div>
            </div>
        </div>
    )
}

export default withRouter(Reminders)
