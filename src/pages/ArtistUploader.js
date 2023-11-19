import React, { useState } from 'react';
import { Button, FormGroup, Row, Form } from 'react-bootstrap';
import '../components/css/artist-uploader.css';
import { jwtDecode } from 'jwt-decode';

function ArtistUploader() {
    const [file, setFile] = useState(null);
    const [imageSource, setImageSource] = useState('');

    const handleFileChange = (event) => {
        // Handle file change and update the state
        setFile(event.target.files[0]);
    };

    const imageSourceChange = (event) => {
        setImageSource(event.target.value);
        document.getElementById('song-cover-image').src = imageSource;
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const token = jwtDecode(localStorage.getItem('user-token'));

        const formData = new FormData();
        formData.append('songtitle', event.target.songtitle.value);
        formData.append('songimage', imageSource);
        formData.append('songartist', token.usr);
        formData.append('songpublisher', event.target.songpublisher.value);
        formData.append('songproducer', event.target.songproducer.value);
        formData.append('songcomposer', event.target.songcomposer.value);
        formData.append('songdate', event.target.songdate.value);
        formData.append('songfile', file);

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URI}:2900/song/upload`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('user-token')}`,
                },
                body: formData
            });

            if (response.ok) {
                const responseData = await response.json(); 
                console.log('Song uploaded successfully!', responseData);
                alert('Song uploaded successfully!');
            } else {
                const errorData = await response.json();
                console.error('Failed to upload song:', response.statusText, errorData.message);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <div className='container mt-5 text-white'>
            <h2 className='h2 text-start mb-3'>Upload your song</h2>
            <p className='text-start mb-5'>Add song details</p>
            <Row className='mb-sm-4'>
                <div className='col-sm-3'>
                    <div className='img-square d-flex justify-content-center justify-content-md-start'>
                        <img className='song-cover-img-preview mb-3' id='song-cover-image' src={imageSource}/>
                    </div>
                </div>
                <div className='col-sm-9 text-center text-sm-start'>
                    <p className='img-square-caption-rule'>Song cover aspect ratio must be 1:1</p>
                    <input className='artist-song-img-upload form-control w-50' placeholder='Upload a link to your song cover' onChange={imageSourceChange} name='songimage'/>
                </div>
            </Row>
            <Form className='form d-flex flex-column' id="artist-upload-form" onSubmit={handleFormSubmit} encType='multipart/form-data'>
                <FormGroup className='form-group form-group-upload-page mb-4'>
                    <label className='form-group-label' htmlFor='inputSongTitle'>Song title</label>
                    <input type='text' id='inputSongTitle' className='form-control' name='songtitle' placeholder='Enter song title...' />
                </FormGroup>
                <FormGroup className='form-group form-group-upload-page mb-4'>
                    <label className='form-group-label' htmlFor='inputSongPublisher'>Publisher name</label>
                    <input type='text' id='inputSongPublisher' className='form-control' name='songpublisher' placeholder='Enter song publisher...'></input>
                </FormGroup>
                <FormGroup className='form-group form-group-upload-page mb-4'>
                    <label className='form-group-label' htmlFor='inputSongProducer'>Produced by</label>
                    <input type='text' id='inputSongProducer' className='form-control' name='songproducer' placeholder='Enter song producer...' />
                </FormGroup>
                <FormGroup className='form-group form-group-upload-page mb-4'>
                    <label className='form-group-label' htmlFor='inputSongComposer'>Composed by</label>
                    <input type='text' id='inputSongComposer' className='form-control' name='songcomposer' placeholder='Enter song composer...' />
                </FormGroup>
                <FormGroup className='form-group form-group-upload-page mb-4'>
                    <label className='form-group-label' htmlFor='inputSongDate'>Date of production</label>
                    <input type='date' id='inputSongDate' className='form-control' name='songdate' placeholder='Enter song production date...' />
                </FormGroup>
                <FormGroup className='form-group form-group-upload-page mb-5'>
                    <label className='form-group-label' htmlFor='inputSongFile'>Upload song file</label>
                    <input type='file' id='inputSongFile' className='form-control' name='songfile' onChange={handleFileChange} />
                </FormGroup>
                <Button type='submit' className='btn btn-primary w-25 align-self-center'>Submit</Button>
            </Form>
        </div>
    );
}

export default ArtistUploader;
