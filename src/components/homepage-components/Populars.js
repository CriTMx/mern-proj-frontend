import React from 'react'
import { Container, Row } from 'react-bootstrap'
import '../css/populars.css';
import Populars_Instance from './Populars_Instance';

function Populars() {

  return (
    <Container fluid='true' className='text-white mb-5'>
        <h3 className='populars-title mb-4'>Popular Titles</h3>
        <div className='d-sm-flex d-block'>
            <Populars_Instance popularsImg={''} popularsTitle={'Popular Title Placeholder'} popularsSubtitle={'By test'} />
            <Populars_Instance popularsImg={''} popularsTitle={'Popular Title Placeholder'} popularsSubtitle={'By test'} />
            <Populars_Instance popularsImg={''} popularsTitle={'Popular Title Placeholder'} popularsSubtitle={'By test'} />
            <Populars_Instance popularsImg={''} popularsTitle={'Popular Title Placeholder'} popularsSubtitle={'By test'} />
        </div>
    </Container>
  )
}

export default Populars