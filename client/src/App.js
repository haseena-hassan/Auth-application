import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css'

import { Provider } from "react-redux"
import store from "./store"


import Navbar from './Components/Layout/Navbar'
import Landing from './Components/Layout/Landing'
import Signup from './Components/Auth/Signup'
import Login from './Components/Auth/Login'


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
        </div>
      </Router>
      </Provider>
    );
  }
}
export default App;