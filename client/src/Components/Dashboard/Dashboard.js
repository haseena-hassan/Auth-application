import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

import PropTypes from "prop-types"
import { connect } from "react-redux"
import { logoutUser } from "../../actions/authActions"

class Dashboard extends Component {

    onLogoutClick = e => {
        e.preventDefault()
        this.props.logoutUser()
    }

    render() {
        const { user } = this.props.auth
        return (
            <div className='center'>
                <h1>Welcome {user.email.split("@")[0]}</h1>
                <Button onClick={this.onLogoutClick} variant="primary" >Logout</Button>
            </div>
        )
    }
}


Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard)
