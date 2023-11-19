import React from 'react'
import { Container, Form, FormGroup, FormLabel, Row, Button } from 'react-bootstrap'
import '../css/user-edit-profile.css';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

function UserEditProfile() {
    let navigate = useNavigate();
    const { isLoggedIn, setIsLoggedIn } = useAuth();

    async function handleDelete() {
        const token = localStorage.getItem('user-token');
        const decodedToken = jwtDecode(token);
        const id = decodedToken.id;
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URI}:2900/user/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('user-token')}`
                },
            });

            if (response.ok) {
                const deletedUserInfo = await response.json();
                alert(deletedUserInfo.message);
                localStorage.removeItem('user-token');
                setIsLoggedIn(false);
                navigate("/login");
            } else {
                console.error('Failed to delete user:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting user:', error.message);
        }
    }

    return (
        <Container className='text-white user-edit-profile-container'>
            <Row className='mb-5'>
                <div className='col-12 col-md-3 user-img-preview-container d-flex align-items-center justify-content-center mb-3 mb-md-0'>
                    <img className='user-img-preview' src={''} />
                </div>
                <div className='col-12 col-md-9 user-img-preview-text d-flex flex-column justify-content-center align-items-center align-items-md-start'>
                    <p>Your photo should follow an aspect ratio of 1:1</p>
                    <input className='form-control w-50 mb-4' type='url' placeholder='Enter a link to your image...' />
                    <Button className='btn-white ps-4 pe-4 pt-2 pb-2'>Upload photo</Button>
                </div>
            </Row>
            <Form className='user-edit-profile-form text-start container'>
                <FormGroup className='mb-3'>
                    <FormLabel htmlFor='userEditUsername'>Edit username</FormLabel>
                    <input id='userEditUsername' type='text' className='form-control' placeholder='Enter new username...' />
                </FormGroup>
                <FormGroup className='mb-3'>
                    <FormLabel htmlFor='userEditEmail'>Edit email address</FormLabel>
                    <input id='userEditEmail' type='email' className='form-control' placeholder='Enter new email...' />
                </FormGroup>
                <FormGroup className='d-flex justify-content-center flex-wrap'>
                    <Button className='user-edit-submit ps-3 pe-4 pt-2 pb-2 me-0 me-sm-3 mb-3 d-flex align-items-center' type='submit'>
                        <span className='material-symbols-outlined symbol-filled m-0 me-sm-2'>check</span> Submit</Button>
                    <Button className='user-edit-delete btn-danger ps-3 pe-4 pt-2 pb-2 ms-0 ms-sm-3 mb-3 d-flex align-items-center' onClick={handleDelete}>
                        <span className='material-symbols-outlined symbol-filled m-0 me-sm-2'>delete</span>Delete account</Button>
                </FormGroup>
            </Form>
        </Container>
    )
}

export default UserEditProfile