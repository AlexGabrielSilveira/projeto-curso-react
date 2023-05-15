import './container.css'
import React from 'react'

const Container = (props) => {
    return (
        <div className={`container ${props.customClass}`}>
            {props.children}
        </div>
    )
}

export default Container