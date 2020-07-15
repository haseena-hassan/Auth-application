import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import '../../Assets/Css/Layout/layout.css'

export default class Landing extends Component {
    render() {
        return (
            <div>
                
                    <h1>Welcome to Auth-aaplication!</h1>
                    <p>
                        If you are a new user, please register. If you already have an account then login :)
                    </p>
                    <Button variant="primary" className="b1">Register</Button>
                    
                    <Button variant="primary" className="b2">Login</Button>
                
            </div>
        )
    }
}
