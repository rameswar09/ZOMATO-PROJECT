import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Route,Link} from 'react-router-dom'
import './App.css';
import Home from './Component/Home/home.js'
import Mybookings from './Component/Mybookings/MyBooking.js'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home}></Route>
          <Route path="/mybookings" component={Mybookings}></Route>
          <Route path="/user" render={()=><h1>hello user</h1>}></Route>
        </div>

      </BrowserRouter>


    )
  }
}

export default App;
// <Link to="/">home</Link><br></br>
// <Link to="/about">about</Link>
//   <Route path="/" exact render={()=><h1>hello home</h1>}></Route>
//   <Route path="/about" render={()=><h1>hello about</h1>}></Route>
//   <Home/>
