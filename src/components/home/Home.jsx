import './Home.css'
import React from 'react'
import save from '../../../src/img/save.png'
import LinkBtn from '../linkBtn/LinkBtn.jsx'

const Home = () => {
    return (
        <section className='home-container'>
            <h1>Bem-Vindo ao <span>Costs</span></h1>
            <p className='pText'>Comece a gerenciar seus projetos agora mesmo !</p>
            <LinkBtn path="/newproject" text='Criar Projeto' />
            <img src={save}/>
        </section>
    )
}

export default Home