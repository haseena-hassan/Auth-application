import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react'

export default class Topnav extends Component {
    render() {
        return (
            <div>
                <Navbar  bg="dark" variant="dark">
                    <Navbar.Brand href="/">Auth-application</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                        
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
