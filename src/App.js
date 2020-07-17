import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Slider from "react-slick";
import About from './about'
import Service from './Service'
import Contact from './Contact'
import Protfolio from './Protfolio'
import TeamSlider from './Team_slider'
import Footer from './Footer'
import Cta from './Cta'
import AboutSlider from './About_slider'
import Policy from './policy'
import Terms from './Terms'
import ServiceSection from './Service_section'
import ModalVideo from 'react-modal-video'

import './css/fontawesome-all.min.css';
import './css/grid.css';
import "slick-carousel/slick/slick.css";
import './css/style.css';
import './App.css';
import './css/responsive.css';

import logo from './img/logo.svg'

import banner from './img/banner.png'
import author1 from './img/testomonial-author/testomonial-author-img-1.jpg'
import author2 from './img/testomonial-author/testomonial-author-img-2.jpg'
import author3 from './img/testomonial-author/testomonial-author-img-3.jpg'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class App extends Component {

    constructor() {
        super();
        this.state = {
            click: ""
        };
        this.toggleMenu = React.createRef();
        this.topscroll = React.createRef();
        this.mainHeader = React.createRef();
        this.navClick = this.navClick.bind(this);
        this.scrlbar = this.scrlbar.bind(this);
    }

    componentDidMount() {
        let mainHeader = document.getElementsByClassName("main-header")[0];
        window.addEventListener("scroll", function () {
            let scrlTop = window.scrollY;
            if (scrlTop > 45) {
                ReactDOM.findDOMNode(mainHeader).classList.add("sticy_header");
            } else {
                ReactDOM.findDOMNode(mainHeader).classList.remove("sticy_header");
            }

        });


        this.scrlbar();


    }


    scrlbar() {

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.

        var lastScrollTop = 0;
        window.addEventListener("scroll", function () {

            let mainHeader = document.getElementsByClassName("main-header")[0];

            let navbtn = document.getElementsByClassName("navbtn")[0];

            var st = window.pageYOffset;
            if (st > lastScrollTop) {
                // Do scroll down code
                ReactDOM.findDOMNode(mainHeader).classList.remove('active');
                ReactDOM.findDOMNode(navbtn).classList.remove('show')
            } else {
                // Do scroll up code
                ReactDOM.findDOMNode(mainHeader).classList.add('active');
                ReactDOM.findDOMNode(navbtn).classList.add('show')
            }
            lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

        }, false);


        let navbtn = document.getElementsByClassName("navbtn")[0];
        if (window.scrollY > 5) {
            ReactDOM.findDOMNode(navbtn).classList.remove('show')
        }

    }


    navClick() {

        let navbtn = document.getElementsByClassName("navbtn")[0];
        this.toggleMenu.current.classList.toggle('active');
        navbtn.classList.toggle('active');

    }

    render() {


        return (
            <Router onUpdate={() => window.scrollTo(0, 0)}>

                <div>
                    <header ref={this.topscroll}>

                        <div className="top-header">
                            <div className="container d-flex justify-content-between align-items-center">
                                <div className="top-header-content">
                                    <a href="tel:(616) 953-6133"><i className="fas fa-phone"></i> (616) 953-6133</a>
                                    <a href="mailto:webapprevolution2020@gmail.com"><i
                                        className="fas fa-envelope"></i> Webapprevolutions@gmail.com</a>
                                </div>
                                <div className="top-header-btn">
                                    <Link className="btn modern-btn" to="/Contact">Get quote ?</Link>
                                </div>
                            </div>
                        </div>
                        <div className="main-header" ref={this.mainHeader} id="box">
                            <div className="container d-flex justify-content-between align-items-center">
                                <div className="header-logo">
                                    <Link to="/"><img src={logo} alt=""/></Link>
                                </div>
                                <nav ref={this.toggleMenu}>
                                    <ul className="navbar">
                                        <li><Link onClick={this.navClick} to='/'>HOME</Link></li>
                                         <li><Link onClick={this.navClick} to='/Protfolio'> PROTFOLIO</Link></li>
                                        <li><Link onClick={this.navClick} to='/service'> SERVICES</Link></li>
                                        <li><Link onClick={this.navClick} to='/About'>ABOUT</Link></li>
                                        <li><Link onClick={this.navClick} to='/Contact'>CONTACT</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </header>

                    <div onClick={this.navClick} className="navbtn show">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>


                    <Switch>
                        <Route exact path="/" component={Home}/>

                        <Route path="/about" component={About}/>

                        <Route path="/service" component={Service}/>

                        <Route path="/Protfolio" component={Protfolio}/>

                        <Route path="/Contact" component={Contact}/>
                        <Route path="/Policy" component={Policy}/>
                        <Route path="/Terms" component={Terms}/>

                    </Switch>


                </div>
            </Router>
        );
    }
}


class Home extends Component {
      constructor() {
        super();
        this.state = {
            isOpen: false
        };
          this.openModal = this.openModal.bind(this)
    }

  openModal () {
    this.setState({isOpen: true})
  }

  render(){
    return (
        <div>

            <section className="banner-area" style={{backgroundImage: "url(" + banner + ")"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 m-auto text-center">
                            <div className="banner-content white-text">
                                <h1>Globalize Your <span>Business</span> With our <span className="block">Innovation</span></h1>

                            </div>
                            <div className="banner-btn">
                                <Link to="/about" className="btn modern-btn">INFORMATION</Link>
                                <Link to="/Contact" className="btn modern-btn white-bg">CONTACT US</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <AboutSlider/>


            <ServiceSection/>

            <section className="video-section-wrapper">
                <div className="container-fluid">
                    <div className="row flex-row-reverse no-gutters">

                        <div className="col-lg-6">
                            <div
                                className="video-area-wrap text-center d-flex align-items-center justify-content-center">
                                <div className="video-content">
                                    <span>We have an excellent story</span>
                                    <h2>Watch Our Video</h2>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='XSvsTSIYkYE' onClose={() => this.setState({isOpen: false})} />

                                    <button type="button" onClick={this.openModal}  className="video-btn js-video-button"><i className="fa fas fa-play"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="video-features-content-wrap">


                                <div className="single-video-features d-md-flex">

                                    <div className="video-features-icon">
                                        <span><i className="fas fa-file-alt"></i></span>
                                    </div>

                                    <div className="video-features-content">
                                        <h4>Easy Customize Documention</h4>
                                        <p>
                                            Our coding is 100% hand-coded. All components are organized as well. We will
                                            provide you with the documentation of all components.
                                          </p>
                                    </div>
                                </div>


                                <div className="single-video-features d-md-flex">

                                    <div className="video-features-icon">
                                        <span><i className="fas fa-th"></i></span>
                                    </div>

                                    <div className="video-features-content">
                                        <h4>Awesome Features</h4>
                                        <p>
                                          We will provide a custom design with the latest technologies and quality standard
                                          coding to give your website the professional, user friendly look that will work with all devices.
                                        </p>
                                    </div>
                                </div>


                                <div className="single-video-features d-md-flex">

                                    <div className="video-features-icon">
                                        <span><i className="fas fa-phone"></i></span>
                                    </div>

                                    <div className="video-features-content">
                                        <h4>After Projects Support</h4>
                                        <p>Customers satisfaction is our number one priority. Email us if you have any questions or concern, we will reply to your email withtin 12 hours.</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>


          <TeamSlider/>


            <section className="testmonial-section-wrapper">
                <div className="container">
                   <div className="section-title text-center">
            <h2><span>Satisfied </span> Customers</h2>

          </div>
                    <TestimonialSlider/>
                </div>
            </section>


            <Cta/>


            <Footer/>


        </div>

    )
  }
}


class TestimonialSlider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }


    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }


    render() {
        var settings = {
            arrows: false,
            dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      autoplay:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
        };

        return (
            <div>
                <Slider {...settings} className="row testomonial-comment-area text-center justify-content-center"
                        asNavFor={this.state.nav2}
                        ref={slider => (this.slider1 = slider)}>

                    <Testmonial name="Petter" review="Putting together a website is a task, finding the right individual or company is even more complex. I did my search around looking for this particular company that has the ability to create, design and optimized my web site. Thanks God I meet Gus at webapprevolution, not only they have great taste in design but they can guide you through the process and beyond." img={author1} />

                       <Testmonial name="Alex" review="Excellent, working with web designer express was great.  Thanks to their knowledge and determination our website looks great and functions really good.  I am recommend anyone that is looking for a custom website to give them a call and speak to Gus, he will guide you to the right direction." img={author2} />

                           <Testmonial name="Matthew Sedaghat " review="Web Designer Express did a great job of not only creating our website how we wanted it to be, but also gave us great insight on what they believed will help boost sales. Their proven experience and excellence is the reason why our company would recommend Web Designer Express to anyone who is looking to create a customized website." img={author3} />

                             <Testmonial name="Andrew Roy" review="My company just wanted to say that we were very impressed with the quality of the website, the price we paid compared to other web design company was extremely low. I love the finished product you provided us. I highly recommend you as a top website designer. Thank you, PS. Gus you are the best!!! Roy Kirchner" img={author1} />



                </Slider>


            </div>
        );

    }


}


function Testmonial(props) {
    return (
        <div className="col-12">
<div className="single-testomonial-slide">
            <div className="testomonial-author d-flex align-items-center">
              <div className="test-author-image">
                <img src={props.img} className="w-100" alt={props.name} />
              </div>
              <div className="test-author-content">
                  <h6>{props.name}</h6>
              </div>
            </div>
            <div className="testomonial-text">
              <p>“{props.review}”
              </p>
            </div>
          </div>

        </div>
    )


}




export default App;
