import { useState } from 'react'
import { Button, Container, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'
import '../components/css/artist-profile-edit.css';

function ArtistProfileEdit() {

    var [bioTextCount, setBioTextCount] = useState(0);

    function handleBioTextCount()
    {
        var bioText = document.getElementById('artistBio').value;
        var bioTextArray = bioText.trim().split(/\s+/);
        setBioTextCount(bioTextArray.filter(word => (word != ' ')).length);
    }

    return (
        <Container className='text-white artist-edit-profile-container'>
            <Row className='mb-4'>
                <div className='col-12 col-md-3 artist-img-preview-container d-flex align-items-center justify-content-center mb-3 mb-md-0'>
                    <img className='artist-img-preview' src={''} />
                </div>
                <div className='col-12 col-md-9 artist-img-preview-text d-flex flex-column justify-content-center align-items-center align-items-md-start'>
                    <p>Your photo should follow an aspect ratio of 1:1</p>
                    <input className='form-control w-50 mb-4' type='url' placeholder='Enter a link to your image...' />
                    <Button className='btn-white ps-4 pe-4 pt-2 pb-2'>Upload photo</Button>
                </div>
            </Row>
            <Form>
                <Row className='mb-4'>
                    <FormGroup>
                        <FormLabel htmlFor='artistBio'>Profile Bio</FormLabel>
                        <textarea id='artistBio' className='form-control profile-bio-text' name='artistBioText' rows={5} placeholder='Tell us about yourself in 100 words...' required='true' onChange={() => handleBioTextCount()} />
                        <p id='profileBioTextCount' className='mt-2 text-end'>{bioTextCount}/100</p>
                    </FormGroup>
                </Row>
                <Row className='mb-4'>
                    <div className='col-12 col-md-6 mb-3'>
                        <FormGroup>
                            <FormLabel htmlFor='artistEmail'>Email Address</FormLabel>
                            <input id='artistEmail' className='form-control' name='artistEmailText' type='email' placeholder='Enter email address...' required />
                        </FormGroup>
                    </div>
                    <div className='col-12 col-md-6 mb-3'>
                        <FormGroup>
                            <FormLabel htmlFor='artistUsername'>Username</FormLabel>
                            <input id='artistUsername' className='form-control' name='artistUsernameText' type='text' placeholder='Enter username...' required />
                        </FormGroup>
                    </div>
                </Row>
                <Row className='mb-4'>
                    <div className='col-12 col-md-6 mb-3'>
                        <FormGroup>
                            <FormLabel htmlFor='artistStageName'>Stage Name</FormLabel>
                            <input id='artistStageName' className='form-control' name='artistStageNameText' type='text' placeholder='Enter stage/display name...' required />
                        </FormGroup>
                    </div>
                    <div className='col-12 col-md-6 mb-3'>
                        <FormGroup>
                            <FormLabel htmlFor='artistLegalName'>Full Legal Name</FormLabel>
                            <input id='artistLegalName' className='form-control' name='artistLegalNameText' type='text' placeholder='Enter legal name...' required />
                        </FormGroup>
                    </div>
                </Row>
                <Row className='mb-4'>
                    <div className='col-12 col-md-6 mb-3'>
                        <FormGroup>
                            <FormLabel htmlFor='artistNationality'>Nationality</FormLabel>
                            <input id='artistNationality' className='form-control' name='artistNationalityText' type='text' placeholder='Enter nationality...' required />
                        </FormGroup>
                    </div>
                    <div className='col-12 col-md-6 mb-3'>
                        <FormGroup>
                            <FormLabel htmlFor='artistContact'>Contact Number</FormLabel>
                            <input id='artistContact' className='form-control' name='artistContactText' type='text' placeholder='Enter contact number...' required />
                        </FormGroup>
                    </div>
                </Row>
                <Row className='justify-content-center mb-4'>
                    <Button className='artist-edit-submit-btn' type='submit'>Submit</Button>
                </Row>
            </Form>
        </Container>
    )
}

export default ArtistProfileEdit