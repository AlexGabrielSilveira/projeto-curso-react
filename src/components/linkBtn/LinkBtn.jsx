import { Link } from 'react-router-dom'
import React from 'react'
import './LinkBtn.css'

const LinkBtn = ({path, text}) => {
    return (
        <Link className='btn' to={path}>
            {text}
        </Link>
    )
}

export default LinkBtn