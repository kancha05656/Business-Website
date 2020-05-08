import React from 'react';
import logo from './img/logo.svg'
import {
  Link
} from "react-router-dom";


export default class Footer extends React.Component {


  render() {
    return (
      <div>
  <footer>
    <div className="container">
      <div className="row">


        <div className="col-sm-6 col-lg-3">
          <div className="single-footer-widget">
            <div className="footer-logo">
              <span><img src={logo} alt="logo"/></span>
            </div>
            <p>We are here to provide a professional services for you to Globalize your business with our innovation. Contact us to talk about your project.</p>
            <ul className="footer-social-list">
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/webapprevolutions"><i className="fab fa-facebook-f"></i></a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/WebappR"><i className="fab fa-twitter"></i></a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/webapprevolution/"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.pinterest.com/webapprevolution2020/"><i className="fab fa-pinterest-p"></i></a></li>

            </ul>
          </div>
        </div>


        <div className="col-sm-6 col-lg-3">
          <div className="single-footer-widget">
            <div className="footer-widget-title">
              <h4>OUR SERVICES</h4>
              <ul className="footer-service-list">
                <li><Link to="/service" >Website Development</Link></li>
                <li><Link to="/service" >Web Design</Link></li>
                <li><Link to="/service">Digital Marketing Expert</Link></li>
                <li><Link to="/service">Search Optimization SEO</Link></li>
                <li><Link to="/service">Wordpress</Link></li>
              </ul>
            </div>
          </div>
        </div>


        <div className="col-sm-6 col-lg-3">
          <div className="single-footer-widget">
            <div className="footer-widget-title">
              <h4>CONTACT US</h4>
              <ul className="footer-contact">
                <li> <i className="fas fa-map-marker-alt"></i>
                  <p>West Jolly Road<br/>Lansing, Michigan </p>
                </li>
                <li> <i className="fas fas fa-envelope"></i>
                  <p>webapprevolutions@gmail.com</p>
                  {/*<p>familiarit.star@gmail.com</p>*/}
                </li>
                <li> <i className="fas fas fa-phone"></i>
                  <p>(616) 953-6133<br/></p>
                </li>
              </ul>
            </div>
          </div>
        </div>



        <div className="col-sm-6 col-lg-3">
          <div className="single-footer-widget">
     <div className="footer-widget-title">
              <h4>USEFUL LINK</h4>
           <ul className="footer-service-list">
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/service" >Service</Link></li>
                <li><Link to="/service">Contact Us</Link></li>
                <li><Link to="/service">Privacy And Policy</Link></li>
                <li><Link to="/service">Terms And Conditions</Link></li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  </footer>


  <div className="footer-copyright text-center">
    <p>Copyright &copy; 2019 <span>Web App Revolution</span> All Rights Reserved</p>
  </div>

      </div>
    );
  }



}
