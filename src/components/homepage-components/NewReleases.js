import React from 'react'
import { Container } from 'react-bootstrap'
import NewReleases_Instance from './NewReleases_Instance'
import '../css/new-releases.css';

function NewReleases() {
  return (
    <Container fluid='true' className='text-white mb-5'>
        <h3 className='new-releases-title mb-4'>New Releases</h3>
        <div className='d-flex flex-wrap'>
            <NewReleases_Instance newReleasesImg={''} newReleasesTitle={'New Release Placeholder'} newReleasesSubtitle={'By test'} />
            <NewReleases_Instance newReleasesImg={''} newReleasesTitle={'New Release Placeholder'} newReleasesSubtitle={'By test'} />
            <NewReleases_Instance newReleasesImg={''} newReleasesTitle={'New Release Placeholder'} newReleasesSubtitle={'By test'} />
            <NewReleases_Instance newReleasesImg={''} newReleasesTitle={'New Release Placeholder'} newReleasesSubtitle={'By test'} />
        </div>
    </Container>
  )
}

export default NewReleases