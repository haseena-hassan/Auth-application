import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css'

import Navbar from './Components/Layout/Navbar'
import Landing from './Components/Layout/Landing'
import Signup from './Components/Auth/Signup'
import Login from './Components/Auth/Login'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}
export default App;