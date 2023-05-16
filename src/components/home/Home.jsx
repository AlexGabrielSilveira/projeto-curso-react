import styles from './Home.module.css'
import React from 'react'
import save from '../../../src/img/save.png'
import LinkBtn from '../linkBtn/LinkBtn.jsx'

const Home = () => {
    return (
        <section className={styles.home_container}>
            <h1>Bem-Vindo ao <span>Costs</span></h1>
            <p className={styles.pText}>Comece a gerenciar seus projetos agora mesmo !</p>
            <LinkBtn path="/newproject" text='Criar Projeto' />
            <img src={save}/>
        </section>
    )
}

export default Home