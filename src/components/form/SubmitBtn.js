import './SubmitBtn.css'
import React from 'react'

const SubmitBtn = ({ text }) => {
    return (
        <div>
            <button className='subit-btn'>{text}</button>
        </div>
    )
}

export default SubmitBtn