import React from 'react'
import '../styles/reminderInput.css'
const ReminderInput = () => {
    return (
        <div className="Reminder">
            <div className="reminderContainer">
                <input type="text" placeholder="title..." />
                <input type="datetime-local" placeholder="" />
                <div className="line">
                    <input type="number" className="time" placeholder="" />
                    <p>Minutes</p>
                </div>
            </div>
        </div>
    )
}

export default ReminderInput
