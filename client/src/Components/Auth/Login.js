import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../Assets/Css/Layout/layout.css'

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
          email: "",
          password: "",
          errors: {}
        }
      }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault()
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(userData)
    }

    render() {
        const { errors } = this.state;
        
        return (
            <div className='center'>
                <h1>Login</h1>
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
                            type="password"  
                            onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}
                            id="password"
                            placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>                
            </div>
        )
    }
}
