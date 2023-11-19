import React from 'react'
import { Container } from 'react-bootstrap'
import NewReleases_Instance from './NewReleases_Instance'
import '../css/new-releases.css';
import Skrillex from '../media/skrillex_logo.png'
import SullivanKing from '../media/sullivanking_logo.png'
import Zomboy from '../media/zomboy_logo.png'
import MegAndDia from '../media/megdia_logo.png'
import BMTH from '../media/bmth_logo.png'
import BMTH2 from '../media/bmth_logo2.png'

function NewReleases() {
  return (
    <Container fluid='true' className='text-white mb-5'>
        <h3 className='new-releases-title mb-4'>New Releases</h3>
        <div className='d-flex flex-wrap'>
            <NewReleases_Instance newReleasesImg={Skrillex} newReleasesTitle={'Bangarang'} newReleasesSubtitle={'Skrillex'} />
            <NewReleases_Instance newReleasesImg={BMTH} newReleasesTitle={'DArkSide'} newReleasesSubtitle={'Bring Me The Horizon'} />
            <NewReleases_Instance newReleasesImg={BMTH} newReleasesTitle={'AmEN! (ft. Lil Uzi Vert & Daryl Palumbo'} newReleasesSubtitle={'Bring Me The Horizon'} />
            <NewReleases_Instance newReleasesImg={Zomboy} newReleasesTitle={'Battlefields'} newReleasesSubtitle={'Zomboy'} />
        </div>
    </Container>
  )
}

export default NewReleases