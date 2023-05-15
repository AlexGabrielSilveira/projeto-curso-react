import { useState, useEffect} from 'react'
import React from 'react'

import './ProjectForm.css'
import Input from '../form/Input.jsx'
import Select from '../form/Select.jsx'
import SubmitBtn from '../form/SubmitBtn.jsx'


const ProjectForm = ({handleSubmit, projectData}) => {

    const [categories, setCategories] = useState([])
    const[project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(res => res.json())
        .then(data => {
            setCategories(data)
        })
        .catch(err => console.log(err))
    }, [])

    const submit = e => {
        
        e.preventDefault()
        handleSubmit(project)
    }
    

    const handleChange = e => {
        setProject({...project, [e.target.name]: e.target.value})
    }
    const handleSelect = e => {
        setProject({...project, categories: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text
        }})
    }

    return (
        <form onSubmit={submit} className='form'>
            <Input type='text' text="Nome do projeto" name='name' placeholder='insira o nome do projeto ...' handlOnChange={handleChange} value={project.name ? project.name : ''}/>
            <Input type="number" text='Orçamento' name='budget' placeholder='insira o orçamento do projeto' handlOnChange={handleChange} value={project.budget ? project.budget : ''}/>
            <Select name='category_id' text='Seleciona a categoria' options={categories} handleOnChange={handleSelect} value={project.categories} />
            <SubmitBtn text='Criar Projeto'/>
    </form>
    )
}

export default ProjectForm