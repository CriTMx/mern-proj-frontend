import React from 'react'
import { Button, Container, Form, FormGroup, FormLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/artist-song-instance.css';

function ArtistSongInstance({ songId, artistSongImg, artistSongTitle, artistSongSubtitle, playNewSong }) {

  function handleSongEditButton() {
    var songEditor = document.getElementById('songEditor');
    songEditor.classList.toggle('d-none');
  }

  function handleEditorClose() {
    var songEditor = document.getElementById('songEditor');
    songEditor.classList.add('d-none');
  }

  return (
    <div className='artist-song-instance text-center me-sm-3 mb-4' id='artistSongInstance'>
      <div className='artist-song-img-container'>
        <img src={artistSongImg} className='artist-song-instance-img mb-3 mt-4' />
        <Button className='artist-song-play-btn'><span className='material-symbols-outlined symbol-filled' onClick={() => {
          playNewSong(songId);
          console.log(songId)
        }}>play_circle</span></Button>
        <Button className='artist-song-edit-btn' onClick={() => handleSongEditButton()}><span className='material-symbols-outlined symbol-filled'>edit</span></Button>
      </div>
      <p className='artist-song-played-instance-title mb-2'>{artistSongTitle}</p>
      <p className='artist-song-instance-subtitle text-subtle'>{artistSongSubtitle}</p>

      <Container id='songEditor' className='d-none'>
        <div className='song-editor-popup text-white'>
          <Button className='song-editor-close-btn btn-danger p-1 d-flex align-items-center' onClick={() => handleEditorClose()}>
            <span id='closeButton' className='material-symbols-outlined m-0 p-0'>close</span>
          </Button>
          <h3 className='mb-5'>Edit song</h3>
          <Form className='d-flex flex-column justify-content-center align-items-center text-start'>
            <FormGroup className='mb-3'>
              <FormLabel htmlFor='editSongName'>Song name</FormLabel>
              <input type='text' id='editSongName' className='form-control' />
            </FormGroup>
            <FormGroup className='mb-3'>
              <FormLabel htmlFor='editSongPublisher'>Song publisher</FormLabel>
              <input type='text' id='editSongPublisher' className='form-control' />
            </FormGroup>
            <FormGroup className='mb-3'>
              <FormLabel htmlFor='editSongComposer'>Song composer</FormLabel>
              <input type='text' id='editSongComposer' className='form-control' />
            </FormGroup>
            <FormGroup className='mb-3'>
              <FormLabel htmlFor='editSongProducer'>Song producer</FormLabel>
              <input type='text' id='editSongProducer' className='form-control' />
            </FormGroup>
            <FormGroup className='mb-5'>
              <FormLabel htmlFor='editSongDate'>Date of production</FormLabel>
              <input type='date' id='editSongDate' className='form-control' />
            </FormGroup>

            <Button className='btn-danger d-flex mb-3'>
              <span className='material-symbols-outlined m-0 me-2 align-self-center'>delete</span>Delete
            </Button>
            <Button className='editor-submit-btn d-flex'>
              <span className='material-symbols-outlined m-0 me-2 align-self-center'>check</span>Submit
            </Button>

          </Form>
        </div>
      </Container>
    </div>
  )
}

export default ArtistSongInstance