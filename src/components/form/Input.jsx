import styles from './Input.module.css'
import React from 'react'

const Input = ({type, text, name, placeholder, handlOnChange, value}) => {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input type={type} name={name} placeholder={placeholder} id={name} value={value} onChange={handlOnChange}/>
        </div>
    )
}

export default Input