import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../Constants/URL';
import { Button, Card, Container } from 'react-bootstrap';

function Read() {
    const [apiData, setApiData] = useState([]);

    const deleteUser = async (id) =>{
        await axios.delete(API_URL + id)
        callGetAPI();
    }

    const callGetAPI = async () => {
        const res = await axios.get(API_URL);
        setApiData(res.data);
    }
    useEffect(() => {
        callGetAPI();
    })

    return (
        <Container fluid>
            <div className='row'>
                <div className='col-md-4 col-lg-3'>
                    {
                        apiData.map(data => (
                            <Card>
                                <Card.Body>
                                    <Card.Title className='text-center'>{data.firstName}</Card.Title>
                                    <Card.Subtitle className="text-center mb-2 text-muted">{data.lastName}</Card.Subtitle>
                                    <Card.Text>
                                        {data.content}
                                    </Card.Text>
                                    <Button onClick={() =>deleteUser(data.id)}>Delete</Button>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </Container>
    )
}


export default Read;