import styles from'./Card.module.css'
import React from 'react'

const Card = ({ id, name, budget, category, handleRemove }) => {

    const remove = e => {
        e.preventDefault()
        handleRemove(id)
    }

    return (
        <div className={styles.project_card}>
           <h4>{name}</h4>
            <p>
                <span>Orçamento:</span>R$ {budget}
            </p>
            <p className={styles.category_text}>
                <span></span> {category}
            </p>
            <div className={styles.flexBtn}>
                <p className={styles.pEdit}>Editar</p>
                <p className={styles.pRemove} onClick={remove}>Excluir</p>
            </div>
        </div>
    )
}

export default Card