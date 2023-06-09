import { useHistory } from 'react-router-dom'
import Form from '../projectForm/ProjectForm.jsx'

import styles from './NewProject.module.css'
import React from 'react'

const NewProject = () => {

    let saveCategory = []

    const history = useHistory() 

    async function createPost(project) {

        saveCategory = await fetch('http://localhost:5000/categories', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(res => res.json())

        if(project.categories === undefined) {
            project.categories = saveCategory.at(-1)
        }

        //initial cost and services
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: 'POST', 
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        .then(res => res.json())
        //redirect
        .then(data => {
            
            history.push('/projects')
        })
        .catch(err => console.log(err))

    }

    return (
        <div className={styles.new_project_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <Form handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProject