import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import LogoImg from './media/logo.png'
import SearchIcon from './media/search_icon.png'
import NavSignupButton from './NavSignupButton'
import NavLoginButton from './NavLoginButton'
import './css/nav-buttons.css';

function Navbar() {
  return (
    <BrowserRouter>
        <nav className='navbar navbar-expand-lg'>
            <div className='container-fluid'>
                <div className='navbar-brand d-flex text-white'>
                    <img src={LogoImg} width={'75px'} className='' />
                    <h4 className=''>Rhythmix</h4>
                </div>
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                </button>
                <div className='navbar-collapse collapse' id='navbarSupportedContent'>
                    <ul className='navbar nav ms-5 mb-2 mb-lg-0 gap-lg-3 gap-1'>
                        <li className='nav-item'>
                            <Link className='nav-link text-white text-uppercase' to='#'>Music</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link text-white text-uppercase' to='#'>Podcast</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link text-white text-uppercase' to='#'>Live</Link>
                        </li>
                    </ul>
                    <div className='search-bar-container'>
                        <input type='text' className='form-control' id='searchQuery' placeholder='Search for a song...' onChange={() => handleSearchQuery()}/>
                        <img src={SearchIcon} width={'20px'} className='search-icon'/>
                    </div>
                    <NavSignupButton />
                    <NavLoginButton /> 
                </div>
            </div>
        </nav>
    </BrowserRouter>
  )
}

function handleSearchQuery()
{

}

export default Navbar