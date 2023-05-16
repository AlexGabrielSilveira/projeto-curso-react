import styles from './Project.module.css'

import Load from '../../layout/load/Load'
import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useState, useEffect } from 'react'
import Container from '../../layout/container/Container'

const EditProject = () => {
    const{id} = useParams()
    const[project, setProject] = useState([])
    const[showForm, setShowtForm] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            setProject(data)
        })
        .catch(err => console.log(err))

    }, [])
    const toggleProjectForm = () => {
        setShowtForm(!showForm)
    }
        
    return (<>
       {project.name ? (
        <div className={styles.project_details}>
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
                    ) : <p className={styles.project_info}>detalhes projeto</p>}
                </div>
            </Container>
        </div>
       ) : <Load />
       }
    </>)
}

export default EditProject
