import styles from './Project.module.css'

import Load from '../../layout/load/Load'
import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useState, useEffect } from 'react'
import Container from '../../layout/container/Container'
import ProjectForm from '../projectForm/ProjectForm'
import ServiceForm from '../ServiceForm/Service'
import Message from '../msg/Message'
import ServiceCard from '../card/ServiceCard'

 
const EditProject = () => {
    const{id} = useParams()
    const[project, setProject] = useState({})
    const[showForm, setShowForm] = useState(false)
    const[showService, setShowService] = useState(false)
    const[message, setMessage] = useState("")
    const[type, setType] = useState("")
    const[cost, setCost] = useState("")
    const[services, setServices] = useState()

    const getInfos = async () => {
        let data = 
            await fetch(`http://localhost:5000/projects/${id}`, {
                method: "GET",
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(res => res.json())
            setProject(data)
            setServices(data)

    }

    useEffect(() => {
        getInfos()
    }, [])
    const toggleProjectForm = () => {
        setShowForm(!showForm)
    }
    const toggleServiceForm = () => {
        setShowService(!showService)
    }
    const createService =  project => {
        const lastService = project.services[project.services.length - 1]
        lastService.id = Math.floor(10000 * Math.random())

        const newCost = parseFloat(project.cost) + parseFloat(cost)
        
        if(newCost > parseFloat(project.budget)) {
            setMessage("Orçamento ultrapassado, verifique o valor do serviço!")
            setType("error")
            project.services.pop()
            return false
        }
        //add services 
        project.cost = newCost

        fetch(`http://localhost:5000/projects/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        }).then(res => res.json())
        .then(data => {
            setMessage("Alterado com sucesso!")
            setType("success")
            console.log(data)
        })
        .catch(err => console.log(err))

    }

    const editPost = project => {
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        .then(res => res.json())
        .then(data => {
            setProject(data)
            setShowForm(false)
        })
    }

    const removeService = () => {

    }
    return (<>
       {project.name ? (
           <div className={styles.project_details}>
            {message && <Message type={type} msg={message}/>}


            <Container customClass='column'>
                <div className={styles.details_container}>
                    <h1>{project.name}</h1>
                    <button className={styles.btn} onClick={toggleProjectForm}>
                        {!showForm ? 'Editar Projeto': 'Fechar'}
                    </button>
                    {!showForm ? (
                        <div className={styles.project_info}> 
                            <p><span>Categoria: </span>{project.categories.name}</p>
                            <p><span>Orçamento: </span>R$ {project.budget}</p>
                            <p><span>Total Utilizado: </span> R$ {project.cost}</p>
                        </div>
                    ) : <div className={styles.project_info}> 
                            <ProjectForm handleSubmit={editPost} btnText="Concluir projeto" projectData={project}/>
                        </div>}
                </div>


                <div className={styles.service_form_container}>
                    <h2>Adicione um serviço: </h2>
                    <button className={styles.btn} onClick={toggleServiceForm}>
                        {!showService ? 'Adicionar serviço' : 'Fechar'}
                    </button>
                    <div className={styles.project_info}>
                        {showService && 
                        (
                            <ServiceForm 
                            handleSubmit={createService}
                            btnText="Adicionar Serviço"
                            projectData={project}
                            costValue={cost}
                            onCostUpdate={e => setCost(e.target.value)}
                        />
                        )}
                    </div>



                </div>
                <h2>Serviços</h2>
                <Container customClass="start">
                    <ServiceCard  services={services}/>   
                {services.length === 0 &&
                    <p>Nenhum projeto cadastrado !</p>
                }
                </Container>
            </Container>
        </div>
       ) : <Load />
       }
    </>)
}

export default EditProject
