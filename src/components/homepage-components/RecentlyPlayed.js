import React from 'react'
import { Container, Row } from 'react-bootstrap'
import '../css/recently-played.css';
import RecentlyPlayed_Instance from './RecentlyPlayed_Instance';
import Skrillex from '../media/skrillex_logo.png'
import Skrillex2 from '../media/skrillex2_logo.png'
import SullivanKing from '../media/sullivanking_logo.png'
import Zomboy from '../media/zomboy_logo.png'
import MegAndDia from '../media/megdia_logo.png'
import BMTH from '../media/bmth_logo.png'
import BMTH2 from '../media/bmth_logo2.png'

function RecentlyPlayed() {
  return (
    <Container fluid='true' className='text-white mb-5'>
        <h3 className='recently-played-title mb-4'>Recently played</h3>
        <div className='d-flex flex-wrap'>
          <RecentlyPlayed_Instance recentlyPlayedImg={BMTH2} recentlyPlayedTitle={'Shadow Moses'} recentlyPlayedSubtitle={'Bring Me The Horizon'} />
          <RecentlyPlayed_Instance recentlyPlayedImg={Zomboy} recentlyPlayedTitle={'Deadweight'} recentlyPlayedSubtitle={'Zomboy'} />
          <RecentlyPlayed_Instance recentlyPlayedImg={SullivanKing} recentlyPlayedTitle={'Lie'} recentlyPlayedSubtitle={'Sullivan King'} />
          <RecentlyPlayed_Instance recentlyPlayedImg={Skrillex2} recentlyPlayedTitle={'Ragga Bomb'} recentlyPlayedSubtitle={'Skrillex, Ragga Twins'} />
        </div>
    </Container>
  )
}

export default RecentlyPlayed