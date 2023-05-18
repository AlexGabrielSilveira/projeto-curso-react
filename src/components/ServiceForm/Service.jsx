import styles from '../projectForm/ProjectForm.module.css'

import React, { useState } from 'react'
import Input from '../form/Input'
import SubmitBtn from '../form/SubmitBtn'


const ServiceForm = ({ handleSubmit, btnText, projectData, costValue, onCostUpdate}) => {

    const[service, setService] = useState([])

    const submit = e => {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }
    const handleChange = e => {
        
        setService({...service, [e.target.name]: e.target.value})
    }
    
    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text" 
                text="Nome do serviço" 
                name="name"
                placeholder='insira o nome do serviço'
                onChange={handleChange}

            />
            <Input 
                type="number" 
                text="Custo de serviço: " 
                name="cost"
                placeholder='insira o valor total'
                onChange={e => {
                    onCostUpdate(e)
                    handleChange(e)
                }}
                value={costValue}    
            />
            <Input 
                type="text" 
                text="Descrição do serviço" 
                name="desc"
                placeholder='Descreva o serviço'
                onChange={handleChange}
            />
            <SubmitBtn text={btnText} />
        </form>
    )

}
export default ServiceForm