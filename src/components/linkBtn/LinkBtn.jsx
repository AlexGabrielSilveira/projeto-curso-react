import { Link } from 'react-router-dom'
import React from 'react'
import styles from'./LinkBtn.module.css'

const LinkBtn = ({path, text}) => {
    return (
        <Link className={styles.btn} to={path}>
            {text}
        </Link>
    )
}

export default LinkBtn