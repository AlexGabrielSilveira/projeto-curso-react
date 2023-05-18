import styles from './Message.module.css'
import React from 'react'

const Message = ({ type , msg }) => {
    return (
        <div className={`${styles[type]} ${styles.msg}`}>
            <p>{msg}</p>
        </div>
    )
}
export default Message