import React from 'react'

import '../css/homepage-about-section.css';
import { Container } from 'react-bootstrap';

function AboutSection() {
  return (
    <Container fluid='true' className='pt-4 ps-5 pe-5 pb-4 mt-4 mb-4 text-white about-section-container'>
        <h5 className='mt-4 mb-4'>About Rhythmix</h5>
        <p className='homepage-about-text-1 mb-5'>Rhythmix is a complete package that allows you free online music streaming, listen to podcasts, and much more! Since music is essentially the only thing that can truly understand a person, we consistently offer our audience the ideal blend of songs by their favourite artists and of various genres.</p>
        <h5 className='mt-4 mb-4'>Stream music in all languages</h5>
        <p className='homepage-about-text-2 mb-5'>One of the unique features of Rhythmix is that it offers users the ability to stream music in multiple regional languages, including Hindi, Punjabi, Bengali, Tamil, Telugu, and more. This online music platform provides access to additional features such as high-quality audio, and exclusive content.</p>
        <h5 className='mt-4 mb-4'>Rhythmix- One-stop destination for all online music!</h5>
        <p className='homepage-about-text-3 mb-5'>Rhythmix offers users access to a vast library of music, including Indian and international tracks across various genres like Bollywood, Punjabi, pop, rock, and more. We have made online music streaming simple, fun, and all about you! So, what’s the wait for? Discover and listen to millions of songs and podcasts on any device including mobile for free exclusively on Rhythmix.</p>
    </Container>
  )
}

export default AboutSection