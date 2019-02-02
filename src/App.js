import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'
import './App.css';
import Home from './Component/Home/home.js'
import Mybookings from './Component/Mybookings/MyBooking.js'
import User from './Component/user/User.js'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home}></Route>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/mybookings" component={Mybookings}></Route>
          <Route path="/user"  component={User} ></Route>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;
