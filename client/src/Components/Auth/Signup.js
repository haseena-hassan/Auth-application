import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../Assets/Css/Layout/layout.css'

export default class Register extends Component {
    constructor() {
        super()
        this.state = {
          email: "",
          phone: "",
          password: "",
          password2: "",
          errors: {}
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password,
            password2: this.state.password2
        }
        console.log(newUser);
    }

    render() {
        const { errors } = this.state;
        
        return (
            <div className='center'>
                <h1>SignUp</h1>
                <Form noValidate onSubmit={this.onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control 
                            type="email" 
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                            id="email"
                            placeholder="Enter email"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control 
                            type="text"  
                            onChange={this.onChange}
                            value={this.state.phone}
                            error={errors.phone}
                            id="phone"
                            placeholder="Phone Number" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control 
                            type="password"  
                            onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}
                            id="password"
                            placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control 
                            type="password"  
                            onChange={this.onChange}
                            value={this.state.password2}
                            error={errors.password2}
                            id="password2"
                            placeholder="Confirm Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}
