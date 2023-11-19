import React from 'react'
import { Container, Row } from 'react-bootstrap'
import '../css/populars.css';
import Populars_Instance from './Populars_Instance';
import Skrillex from '../media/skrillex_logo.png'
import SullivanKing from '../media/sullivanking_logo.png'
import Zomboy from '../media/zomboy_logo.png'
import MegAndDia from '../media/megdia_logo.png'
import BMTH from '../media/bmth_logo.png'
import BMTH2 from '../media/bmth_logo2.png'

function Populars() {

  return (
    <Container fluid='true' className='text-white mb-5'>
        <h3 className='populars-title mb-4'>Popular Titles</h3>
        <div className='d-flex flex-wrap'>
            <Populars_Instance popularsImg={MegAndDia} popularsTitle={'Monster'} popularsSubtitle={'Meg & Dia'} />
            <Populars_Instance popularsImg={Skrillex} popularsTitle={'Scary Monsters and Nice Sprites'} popularsSubtitle={'Skrillex'} />
            <Populars_Instance popularsImg={SullivanKing} popularsTitle={'Vantablack'} popularsSubtitle={'Sullivan King, Dirtyphonics'} />
            <Populars_Instance popularsImg={BMTH2} popularsTitle={'Can You Feel My Heart'} popularsSubtitle={'Bring Me The Horizon'} />
        </div>
    </Container>
  )
}

export default Populars