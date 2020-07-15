import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react'

export default class Topnav extends Component {
    render() {
        return (
            <div>
                <Navbar  bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Auth-application</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
