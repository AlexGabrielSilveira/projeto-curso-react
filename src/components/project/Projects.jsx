import styles from './Project.module.css'
import React from 'react'

import LinkBtn from '../linkBtn/LinkBtn.jsx'
import Card from '../card/Card.jsx'
import Container from '../../layout/container/Container.jsx'
import Load from '../../layout/load/Load.jsx'

import { useState, useEffect } from 'react'

const Projects = () => {

    const[ projects, setProjects] = useState([])
    const[removeLoad, setLoad] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': "application/json"
            }
            })
            .then(res => res.json())
            .then((data) => {
                setProjects(data)
                setLoad(true)
            }).catch(err => console.log(err))
        }, 1000)
    }, [])
    const removeProject = (id) => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': "application/json"
            }
            })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setProjects(projects.filter((project) => project.id !== id))
            })
    }

    return (
        <div className={styles.divProjectContainer}>
            <div className={styles.createProject}>
                <h1 className={styles.projectH1}>Meus Projetos</h1>
                <LinkBtn path="/newproject" text="Criar projeto"/>
            </div>
            <Container customClass="start">
                { projects.length > 0 &&

                    projects.map((project => (

                        <Card 
                        name={project.name} 
                        budget={project.budget} 
                        id={project.id}
                        category={project.categories.name}
                        key={project.id}
                        handleRemove={removeProject}
                        />
                    )))
                }
                {!removeLoad && <Load />}
                {removeLoad && projects.length === 0 && (
                    <p>Nenhum Projeto cadastrado! </p>
                )}
            </Container>
        </div>
    )
}

export default Projects