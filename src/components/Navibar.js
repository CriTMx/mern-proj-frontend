import React from 'react';
import LogoImg from './media/logo.png';
import {jwtDecode} from 'jwt-decode';
import SearchIcon from './media/search_icon.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarEnd from './NavbarEnd';
import './css/nav-buttons.css';
import { Link } from 'react-router-dom';

function Navibar() {
    // Function to check the user's type from the decoded token
    const isArtist = () => {
        const userToken = localStorage.getItem('user-token');
        if (userToken!=null) {
            const decodedToken = jwtDecode(userToken);
            return decodedToken.type === 'artist';
        }

        return false;
    };

    return (
        <Navbar collapseOnSelect expand="lg">
            <Container fluid className='mx-0 justify-content-between d-flex'>
                <Navbar.Brand className='d-flex text-white'>
                    <img src={LogoImg} width={'75px'} className='' />
                    <h4 className=''>Rhythmix</h4>
                </Navbar.Brand>
                <Navbar.Toggle className='bg-white' aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className='justify-content-between' id="responsive-navbar-nav">
                    <Nav className='ms-md-5 mb-2 mb-lg-0 gap-lg-3 gap-1'>
                        <Nav.Link><Link to='home' className='text-white text-uppercase text-center text-decoration-none'>Home</Link></Nav.Link>
                        <Nav.Link href="#" className='text-white text-uppercase text-center'>Music</Nav.Link>
                        <Nav.Link href="#" className='text-white text-uppercase text-center'>Podcast</Nav.Link>
                        <Nav.Link href="#" className='text-white text-uppercase text-center'>Live</Nav.Link>
                    </Nav>
                    <div className='navbar-container-right d-flex align-items-center '>
                        <div className='search-bar-container d-flex flex-row align-items-center justify-content-start'>
                            <img src={SearchIcon} className='search-icon' />
                            <input type='text' className='form-control' id='searchQuery' placeholder='Search for a song...' onChange={() => handleSearchQuery()} />
                        </div>
                        {isArtist() && (
                            <Nav.Link href="/artist_upload" className='text-white text-uppercase text-center ps-3 d-flex flex-row align-items-center'>
                                Upload
                                <span className='material-symbols-outlined float-end text-white align-self-center me-2 ps-2'>upload</span>
                            </Nav.Link>

                            
                        )}
                        <NavbarEnd/>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

function handleSearchQuery() {
    // Handle search query changes
}

export default Navibar;
