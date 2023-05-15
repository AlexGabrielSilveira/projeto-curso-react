import { Link } from 'react-router-dom'
import React from 'react'

import Container from '../container/Container.jsx'

import './Navbar.css'

import logo from '../../img/logo.png'

const Navbar = () => {
    return (
        <nav className='navbar'>
          <Container>
            <Link to='/'>
              <img className="logo" src={logo} alt="costs" />
            </Link>
            <ul className='list'>
              <li className='item'>
                  <Link to='/'>Home</Link>
              </li>
              <li className='item'>
                <Link to='/projects'>
                  Projetos
                </Link>
              </li>
              <li className='item'>
                <Link to='/contact'>Contato</Link>
              </li>
              <li className='item'>
                <Link to='/company'>Empresa</Link>
              </li>
            </ul>
          </Container>
        </nav>
    )
}

export default Navbar