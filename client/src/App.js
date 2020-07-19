import React, { Component } from "react"
import { BrowserRouter as Router, Route , Switch } from "react-router-dom"

import jwt_decode from "jwt-decode"
import setAuthToken from "./utils/setAuthToken"
import { setCurrentUser, logoutUser } from "./actions/authActions"
import { Provider } from "react-redux"
import store from "./store"

import Navbar from './Components/Layout/Navbar'
import Landing from './Components/Layout/Landing'
import Signup from './Components/Auth/Signup'
import Login from './Components/Auth/Login'
import PrivateRoute from './Components/private-route/PrivateRoute'
import Dashboard from './Components/Dashboard/Dashboard'

import "./App.css"
import 'bootstrap/dist/css/bootstrap.css'


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  const token = localStorage.jwtToken
  setAuthToken(token)
  const decoded = jwt_decode(token)
  store.dispatch(setCurrentUser(decoded))
  const currentTime = Date.now() / 1000 // to get in milliseconds
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser())
    window.location.href = "./login"
  }
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
      </Provider>
    )
  }
}
export default App