import React from 'react'
import './Css/navbar.css'
import { Link } from 'react-router-dom'
import Beranda from './Beranda'

export default function Navbar() {
    return (
        <>
        <div className='navv'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                <a className="navbar-brand" >Dasboard</a>
                <button className="navbar-toggler" >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link "><Link className='link' to='beranda'>Beranda</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" ><Link className='link' to='barang'>Barang</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" ><Link className='link' to='contact'>Contact</Link></a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>

        </>

    )
}
