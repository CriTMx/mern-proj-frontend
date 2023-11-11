import React from 'react'
import { Container, Row } from 'react-bootstrap'
import '../css/recently-played.css';
import RecentlyPlayed_Instance from './RecentlyPlayed_Instance';

function RecentlyPlayed() {
  return (
    <Container fluid='true' className='text-white mb-5'>
        <h3 className='recently-played-title mb-4'>Recently played</h3>
        <div className='d-sm-flex d-block'>
          <RecentlyPlayed_Instance recentlyPlayedImg={''} recentlyPlayedTitle={'Recently Played Placeholder'} recentlyPlayedSubtitle={'By test'} />
          <RecentlyPlayed_Instance recentlyPlayedImg={''} recentlyPlayedTitle={'Recently Played Placeholder'} recentlyPlayedSubtitle={'By test'} />
          <RecentlyPlayed_Instance recentlyPlayedImg={''} recentlyPlayedTitle={'Recently Played Placeholder'} recentlyPlayedSubtitle={'By test'} />
          <RecentlyPlayed_Instance recentlyPlayedImg={''} recentlyPlayedTitle={'Recently Played Placeholder'} recentlyPlayedSubtitle={'By test'} />
        </div>
    </Container>
  )
}

export default RecentlyPlayed