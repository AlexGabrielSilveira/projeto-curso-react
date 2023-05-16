import { Link } from 'react-router-dom'
import React from 'react'

import Container from '../container/Container.jsx'

import styles from'./Navbar.module.css'

import logo from '../../img/logo.png'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link to='/'>
              <img className={styles.logo} src={logo} alt="costs" />
            </Link>
            <ul className={styles.list}>
              <li className={styles.item}>
                  <Link to='/'>Home</Link>
              </li>
              <li className={styles.item}>
                <Link to='/projects'>
                  Projetos
                </Link>
              </li>
              <li className={styles.item}>
                <Link to='/contact'>Contato</Link>
              </li>
              <li className={styles.item}>
                <Link to='/company'>Empresa</Link>
              </li>
            </ul>
        </nav>
    )
}

export default Navbar