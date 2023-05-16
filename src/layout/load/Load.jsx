import styles from './Load.module.css'
import React from 'react'

const Load = () => {
    return (
        <div className={styles.loader_container}>
            <h1 className={styles.loader}>Loading...</h1>
        </div>
    )
}

export default Load
