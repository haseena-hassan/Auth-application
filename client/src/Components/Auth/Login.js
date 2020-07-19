import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import PropTypes from "prop-types"
import { connect } from "react-redux"
import { loginUser } from "../../actions/authActions"
import classnames from "classnames"

import '../../Assets/Css/Layout/layout.css'


class Login extends Component {
    constructor() {
        super()
        this.state = {
          email: "",
          password: "",
          errors: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push("/dashboard") // push user to dashboard when they login
    }

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
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(userData)
    }

    render() {
        const { errors } = this.state
        
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
                            placeholder="Enter email"
                            className={classnames("", {
                                invalid: errors.email || errors.emailnotfound
                            })}
                        />
                        <span style={{color: "red"}}>{errors.email}  {errors.emailnotfound}</span>
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
                                invalid: errors.password || errors.passwordincorrect
                            })}
                        />
                        <span style={{color: "red"}}>{errors.password}  {errors.passwordincorrect}</span>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>                
            </div>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(
    mapStateToProps,
    { loginUser }
)(Login)