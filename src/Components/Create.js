import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container, Form } from 'react-bootstrap';
import { API_URL } from '../Constants/URL';
import { useNavigate } from 'react-router-dom';


function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const postData = async() =>{
        await axios.post(API_URL, {
            firstName,
            lastName,
            content
        })
        navigate('/read');
    }

    return (
        <Container fluid>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="input" placeholder="John..." onChange={event => setFirstName(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="input" placeholder="Peter..." onChange={event => setLastName(event.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Contents</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={event => setContent(event.target.value)}/>
                </Form.Group>
                <Button onClick={postData}> Submit </Button>
            </Form>
        </Container>
    )
}
export default Create;