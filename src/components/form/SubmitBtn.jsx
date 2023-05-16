import styles from './SubmitBtn.module.css'
import React from 'react'

const SubmitBtn = ({ text }) => {
    return (
        <div>
            <button className={styles.subit_btn}>{text}</button>
        </div>
    )
}

export default SubmitBtn