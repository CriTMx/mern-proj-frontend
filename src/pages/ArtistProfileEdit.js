import { useState, useEffect } from 'react'
import { Button, Container, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'
import '../components/css/artist-profile-edit.css';
import { jwtDecode } from 'jwt-decode';

function ArtistProfileEdit() {

    var [bioTextCount, setBioTextCount] = useState(0);

    const [userDetails, setUserDetails] = useState({
        username: '',
        profilePic: '',
        email: '',
        firstName: '',
        lastName: '',
        nationality: '',
        contactNo: '',
        bio: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('user-token');
            const decoded = jwtDecode(token);
            const userId = decoded.id;
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URI}/user/${userId}/details`, {
                    method: 'GET'
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserDetails(data);
                } else {
                    console.error('Failed to fetch song details:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching song details:', error.message);
            }
        };

        fetchData();

    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify(userDetails));
        const token = localStorage.getItem('user-token');
        const decoded = jwtDecode(token);
        const userId = decoded.id;
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URI}/user/update/${userId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('user-token')}`
                },
                body: JSON.stringify(userDetails)
            });

            if (response.ok) {
                const updatedSongInfo = await response.json();
                alert(updatedSongInfo.message);
            } else {
                console.error('Failed to update song:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating song:', error.message);
        }
    };

    function handleBioTextCount() {
        var bioText = document.getElementById('artistBio').value;
        var bioTextArray = bioText.trim().split(/\s+/);
        setBioTextCount(bioTextArray.filter(word => (word != ' ')).length);
    }

    return (
        <Container className='text-white artist-edit-profile-container'>
            <Row className='mb-4'>
                <div className='col-12 col-md-3 artist-img-preview-container d-flex align-items-center justify-content-center mb-3 mb-md-0'>
                    <img className='artist-img-preview' src={userDetails.profilePic} alt='Profile Preview' />
                </div>
                <div className='col-12 col-md-9 artist-img-preview-text d-flex flex-column justify-content-center align-items-center align-items-md-start'>
                    <p>Your photo should follow an aspect ratio of 1:1</p>
                    <input
                        className='form-control w-50 mb-4'
                        type='url'
                        name='profilePic'
                        placeholder='Enter a link to your image...'
                        value={userDetails.profilePic}
                        onChange={handleChange}
                    />
                    <Button className='btn-white ps-4 pe-4 pt-2 pb-2'>Upload photo</Button>
                </div>
            </Row>
            <Form onSubmit={handleSubmit}>
                <Row className='mb-4'>
                    <div className='col-12'>
                        <FormGroup>
                            <FormLabel htmlFor='artistBio'>Profile Bio</FormLabel>
                            <textarea
                                id='artistBio'
                                className='form-control profile-bio-text'
                                name='bio'
                                rows={5}
                                placeholder='Tell us about yourself in 100 words...'
                                onChange={(e) => {
                                    handleChange(e);
                                    handleBioTextCount();
                                }}
                                value={userDetails.bio}
                            />
                            <p id='profileBioTextCount' className='mt-2 text-end'>{bioTextCount}/100</p>
                        </FormGroup>
                    </div>
                </Row>
                <Row className='mb-4'>
                    <div className='col-12 col-md-6 mb-3'>
                        <FormGroup>
                            <FormLabel htmlFor='artistEmail'>Email Address</FormLabel>
                            <input
                                id='artistEmail'
                                className='form-control'
                                name='email'
                                type='email'
                                placeholder='Enter email address...'
                                required
                                value={userDetails.email}
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </div>
                    <div className='col-12 col-md-6 mb-3'>
                        <FormGroup>
                            <FormLabel htmlFor='artistUsername'>Username</FormLabel>
                            <input
                                id='artistUsername'
                                className='form-control'
                                name='username'
                                type='text'
                                placeholder='Enter username...'
                                disabled
                                value={userDetails.username}
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </div>
                </Row>
                <Row className='mb-4'>
                    <div className='col-12 col-md-6 mb-3'>
                        <FormGroup>
                            <FormLabel htmlFor='artistFirstName'>First Name</FormLabel>
                            <input
                                id='artistFirstName'
                                className='form-control'
                                name='firstName'
                                type='text'
                                placeholder='Enter first name...'
                                required
                                value={userDetails.firstName}
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </div>
                    <div className='col-12 col-md-6 mb-3'>
                        <FormGroup>
                            <FormLabel htmlFor='artistLastName'>Last Name</FormLabel>
                            <input
                                id='artistLastName'
                                className='form-control'
                                name='lastName'
                                type='text'
                                placeholder='Enter last name...'
                                required
                                value={userDetails.lastName}
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </div>
                </Row>
                <Row className='mb-4'>
                    <div className='col-12 col-md-6 mb-3'>
                        <FormGroup>
                            <FormLabel htmlFor='artistNationality'>Nationality</FormLabel>
                            <input
                                id='artistNationality'
                                className='form-control'
                                name='nationality'
                                type='text'
                                placeholder='Enter nationality...'
                                value={userDetails.nationality}
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </div>
                    <div className='col-12 col-md-6 mb-3'>
                        <FormGroup>
                            <FormLabel htmlFor='artistContact'>Contact Number</FormLabel>
                            <input
                                id='artistContact'
                                className='form-control'
                                name='contactNo'
                                type='text'
                                placeholder='Enter contact number...'
                                value={userDetails.contactNo}
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </div>
                </Row>
                <Row className='justify-content-center mb-4'>
                    <Button className='artist-edit-submit-btn' type='submit'>Submit</Button>
                </Row>
            </Form>
        </Container>
    )
};


export default ArtistProfileEdit