import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { withRouter } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { registerUser } from "../../actions/authActions"
import classnames from "classnames"

import '../../Assets/Css/Layout/layout.css'
import { red } from 'color-name'

class Register extends Component {
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

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          })
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault()
        const newUser = {
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password,
            password2: this.state.password2
        }
        console.log(newUser)
        this.props.registerUser(newUser, this.props.history) 

    }
    
    render() {
        const { errors } = this.state
        
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
                            placeholder="Enter email"
                            className={classnames("", {
                                invalid: errors.email
                            })}
                        />
                        <span style={{color: "red"}}>{errors.email}</span>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control 
                            type="text"  
                            onChange={this.onChange}
                            value={this.state.phone}
                            error={errors.phone}
                            id="phone"
                            placeholder="Phone Number" 
                            className={classnames("", {
                                invalid: errors.phone
                            })}
                        />
                        <span style={{color: "red"}}>{errors.phone}</span>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control 
                            type="password"  
                            onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}
                            id="password"
                            placeholder="Password"
                            className={classnames("", {
                                invalid: errors.password
                            })} 
                        />
                        <span style={{color: "red"}}>{errors.password}</span>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control 
                            type="password"  
                            onChange={this.onChange}
                            value={this.state.password2}
                            error={errors.password2}
                            id="password2"
                            placeholder="Confirm Password" 
                            className={classnames("", {
                                invalid: errors.password2
                            })}
                        />
                        <span style={{color: "red"}}>{errors.password2}</span>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register))