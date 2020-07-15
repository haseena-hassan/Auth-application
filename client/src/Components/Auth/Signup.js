import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../Assets/Css/Layout/layout.css'

export default class Register extends Component {
    render() {
        return (
            <div className='center'>
                <h1>SignUp</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label></Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" placeholder="Phone Number" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label></Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}
