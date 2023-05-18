import styles from './Input.module.css'
import React from 'react'

const Input = ({type, text, name, placeholder, onChange, value}) => {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input type={type} name={name} placeholder={placeholder} id={name} onChange={onChange} value={value} />
        </div>
    )
}

export default Input