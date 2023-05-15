import './Project.css'
import React from 'react'

import Message from "../../layout/message/Message"
import { useLocation } from 'react-router-dom'
import Container from '../../layout/container/Container'
import LinkBtn from '../linkBtn/LinkBtn'
import Card from '../card/Card'
import { useState, useEffect } from 'react'

const Projects = () => {

    const[ projects, setProjects] = useState([])

    const location = useLocation()
    let msg = ''

    if(location.state) {
        msg = location.state.message
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': "application/json"
            }
        })
        .then(res => res.json())
        .then((data) => {
            setProjects(data)
        }).catch(err => console.log(err))
    }, [])


    return (
        <div className='divProjectContainer'>
            {msg && <Message type="success" msg="Projeto criado com sucesso" />}
            <div className='createProject'>
                <h1 className='projectH1'>Meus Projetos</h1>
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
                        />
                    )))
                }
            </Container>
        </div>
    )
}

export default Projects