import React from 'react'
import LogoImg from './media/logo.png'
import SearchIcon from './media/search_icon.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarEnd from './NavbarEnd'
import './css/nav-buttons.css';

function Navibar() {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container fluid className='mx-0 justify-content-between d-flex'>
                <Navbar.Brand className='d-flex text-white'>
                    <img src={LogoImg} width={'75px'} className='' />
                    <h4 className=''>Rhythmix</h4>
                </Navbar.Brand>
                <Navbar.Toggle className='bg-white' aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse className='justify-content-between' id="responsive-navbar-nav">
                    <Nav className='ms-5 mb-2 mb-lg-0 gap-lg-3 gap-1'>
                        <Nav.Link href="#" className='text-white text-uppercase'>Music</Nav.Link>
                        <Nav.Link href="#" className='text-white text-uppercase'>Podcast</Nav.Link>
                        <Nav.Link href="#" className='text-white text-uppercase'>Live</Nav.Link>
                    </Nav>
                    {/* <div className='container-right d-flex flex-row align-items-center '>
                        <div className='search-bar-container d-flex flex-row align-items-center justify-content-start pe-5'>
                            <img src={SearchIcon} className='search-icon' />
                            <input type='text' className='form-control' id='searchQuery' placeholder='Search for a song...' onChange={() => handleSearchQuery()} />
                        </div>
                        <NavbarEnd/>
                    </div> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

function handleSearchQuery() {

}

export default Navibar