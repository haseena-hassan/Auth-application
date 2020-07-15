import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import '../../Assets/Css/Layout/layout.css'

export default class Landing extends Component {
    render() {
        return (
            <div className='center'>
                <h1>Welcome to Auth-application!</h1>
                <p>If you are a new user, please signup. If you already have an account then login :)</p>
                <Button href="/signup" variant="primary" className="b1">Signup</Button>
                <Button href="/login" variant="primary" className="b2">Login</Button>
            </div>
        )
    }
}
