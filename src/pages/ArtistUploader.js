import React from 'react'
import '../components/css/artist-uploader.css'
import { Button, FormGroup, Row, Form } from 'react-bootstrap'

function ArtistUploader() {
  return (
    <div className='container mt-5 text-white'>
        <h2 className='h2 text-start mb-3'>Upload your song</h2>
        <p className='text-start mb-5'>Add song details</p>
        <Row className='mb-sm-4'>
            <div className='col-sm-3'>
                <div className='img-square d-flex justify-content-center justify-content-md-start'>
                    <img className='song-cover-img-preview mb-3' />
                </div>
            </div>
            <div className='col-sm-9 text-center text-sm-start'>
                <p className='img-square-caption-rule'>Song cover aspect ratio must be 1:1</p>
                <Button type='button' className='btn-upload-img mb-3 mt-md-4 mt-2'>Upload song cover</Button>
            </div>
        </Row>
        <Form className='form d-flex flex-column' id="artist-upload-form">
            <FormGroup className='form-group form-group-upload-page mb-4'>
                <label className='form-group-label' htmlFor='inputSongTitle'>Song title</label>
                <input type='text' id='inputSongTitle' className='form-control' name='songtitle' />
            </FormGroup>
            <FormGroup className='form-group form-group-upload-page mb-4'>
                <label className='form-group-label' htmlFor='inputSongPublisher'>Publisher name</label>
                <input type='text' id='inputSongPublisher' className='form-control' name='songpublisher'></input>
            </FormGroup>
            <FormGroup className='form-group form-group-upload-page mb-4'>
                <label className='form-group-label' htmlFor='inputSongProducer'>Produced by</label>
                <input type='text' id='inputSongProducer' className='form-control' name='songproducer' />
            </FormGroup>
            <FormGroup className='form-group form-group-upload-page mb-4'>
                <label className='form-group-label' htmlFor='inputSongComposer'>Composed by</label>
                <input type='text' id='inputSongComposer' className='form-control' name='songcomposer' />
            </FormGroup>
            <FormGroup className='form-group form-group-upload-page mb-4'>
                <label className='form-group-label' htmlFor='inputSongDate'>Date of production</label>
                <input type='date' id='inputSongDate' className='form-control' name='songdate' />
            </FormGroup>
            <FormGroup className='form-group form-group-upload-page mb-5'>
                <label className='form-group-label' htmlFor='inputSongDate'>Upload song file</label>
                <input type='file' id='inputSongFile' className='form-control' name='songfile'/>
            </FormGroup>
        </Form>
    </div>
  )
}

export default ArtistUploader