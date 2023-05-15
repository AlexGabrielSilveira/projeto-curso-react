import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa"
import './Footer.css'
import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="list">
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
            </ul>
            <p><span>Costs</span> &copy;</p>
        </footer>
    )
}

export default Footer