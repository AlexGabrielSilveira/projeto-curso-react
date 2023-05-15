import './Card.css'
import React from 'react'

const Card = ({ id, name, budget, category, handleRemove }) => {
    return (
        <div className='project_card'>
           <h4>{name}</h4>
            <p>
                <span>Orçamento:</span>R$ {budget}
            </p>
            <p className='category_text'>
                <span></span> {category}
            </p>
            <div className='flexBtn'>
                <p className='pEdit'>Editar</p>
                <p className='pRemove'>Excluir</p>
            </div>
        </div>
    )
}

export default Card