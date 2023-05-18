import React from "react"
import styles from './Card.module.css'

const ServiceCard = ( services ) => {

    let service = services.services

    const remove = () => {

    }
    return ( 
    <div className={styles.project_card} >
        <h4>{service.name} </h4>
        <p>
            <span>Custo Total: </span>R$ {service.cost}
        </p>
        <p>{service.desc}</p>
        <div className={styles.project_card_actions}>
            <button  className={styles.pRemove} onClick={remove}>Excluir</button>
        </div>
    </div>
    )
        
    
}

export default ServiceCard