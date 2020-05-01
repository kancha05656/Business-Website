import React, { Component } from 'react';
import logo from './img/logo.svg'
import Home from "./App"
import About from './about'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Nav extends Component {


	render(){
		

return(
	<Router>
<div>
  <header>
    <div className="top-header">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="top-header-content">
          <a href="tel:(616) 953-6133"><i className="fas fa-phone"></i> (616) 953-6133</a>
          <a href="mailto:webapprevolution@gmail.com"><i className="fas fa-envelope"></i> webapprevolution@gmail.com</a>
        </div>
        <div className="top-header-btn">
          <a className="btn modern-btn" href="/">get a Quote</a>
        </div>
      </div>
    </div>
    <div className="main-header">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="header-logo">
          <a href="/"><img src={logo} alt=""/></a>
        </div>
        <nav>
          <ul className="navbar">
            <li > <Link  to='/' >Home</Link></li>
            <li > <Link  to='/About' >About</Link></li>
            <li > <Link  to='/' >Services</Link></li>
            <li > <Link  to='/' >CONTACT</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>

  <div className="navbtn show" >
    <span></span>
    <span></span>
    <span></span>
  </div>

<Switch>
          <Route path="/">
            <Home />
          </Route>
            <Route path="/About">
            <About />
          </Route>
        </Switch>


</div>
   </Router>

	)
	}
}


export default Nav;