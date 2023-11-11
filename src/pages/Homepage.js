import React from 'react'
import SectionButtons from '../components/homepage-components/SectionButtons'
import Jumbotron from '../components/homepage-components/Jumbotron'
import AboutSection from '../components/homepage-components/AboutSection'
import RecArtists from '../components/homepage-components/RecArtists'
import RecentlyPlayed from '../components/homepage-components/RecentlyPlayed'
import Populars from '../components/homepage-components/Populars'
import NewReleases from '../components/homepage-components/NewReleases'

function Homepage() {
  return (
    <div className='homepage-container container-fluid ps-4 pe-4'>
      <SectionButtons />
      <Jumbotron songImage={"https://i.scdn.co/image/ab67616d0000b2734a3cdc1e547b3d275d97cff8"}/>
      <RecArtists />
      <RecentlyPlayed />
      <Populars />
      <NewReleases />
      <AboutSection />
    </div>
  )
}

export default Homepage