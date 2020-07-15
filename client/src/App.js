import React, { Component } from "react";
import Navbar from './Components/Layout/Navbar'
import Landing from './Components/Layout/Landing'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className='center'>
          <center>
            <Landing />
          </center>
        </div>
      </div>
    );
  }
}
export default App;