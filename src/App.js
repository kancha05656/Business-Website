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
import ServiceSection from './Service_section'


import './css/fontawesome-all.min.css';
import './css/grid.css';
import "slick-carousel/slick/slick.css";
import './css/style.css';
import './App.css';
import './css/responsive.css';

import logo from './img/logo.svg'

import banner from './img/banner.jpg'
// import author1 from './img/testomonial-author/testomonial-author-img-1.jpg'
// import author2 from './img/testomonial-author/testomonial-author-img-2.jpg'
// import author3 from './img/testomonial-author/testomonial-author-img-3.jpg'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            click: ""
        };
        this.toggleMenu = React.createRef();
        this.topscroll = React.createRef();
        this.mainHeader = React.createRef();
        this.navClick = this.navClick.bind(this);
        this.scrlbar = this.scrlbar.bind(this)
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
                                    <a href="tel:+8801727-900653"><i className="fas fa-phone"></i> +8801727-900653</a>
                                    <a href="mailto:familiarit.star@gmail.com"><i
                                        className="fas fa-envelope"></i> familiarit.star@gmail.com</a>
                                </div>
                                <div className="top-header-btn">
                                    <Link className="btn modern-btn" to="/Contact">get a quoat</Link>
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
                                        <li><Link onClick={this.navClick} to='/About'>ABOUT</Link></li>
                                        <li><Link onClick={this.navClick} to='/service'> SERVICES</Link></li>
                                        <li><Link onClick={this.navClick} to='/Protfolio'> PROTFOLIO</Link></li>
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

                    </Switch>


                </div>
            </Router>
        );
    }
}


function Home() {
    return (
        <div>

            <section className="banner-area" style={{backgroundImage: "url(" + banner + ")"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 m-auto text-center">
                            <div className="banner-content white-text">
                                <h1>WE WILL MAKE YOUR <span>BUSSINES</span> <span className="block">MODERN</span></h1>
                                <h3> Your Imagination and our Innovation will create a modern world.</h3>
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
                                    <button type="button" className="video-btn"><i className="fa fas fa-play"></i>
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
                                        <p>Our coding will 100% hand-coded and part by part organized as well as we will
                                            provide you the
                                            documentation of every part. So everybody can read and make changes
                                            easily.</p>
                                    </div>
                                </div>


                                <div className="single-video-features d-md-flex">

                                    <div className="video-features-icon">
                                        <span><i className="fas fa-th"></i></span>
                                    </div>

                                    <div className="video-features-content">
                                        <h4>Awesome Features</h4>
                                        <p>We provide the modern design with the latest technology and standard quality
                                            coding. For that, your
                                            website will be so
                                            much user-friendly.</p>
                                    </div>
                                </div>


                                <div className="single-video-features d-md-flex">

                                    <div className="video-features-icon">
                                        <span><i className="fas fa-phone"></i></span>
                                    </div>

                                    <div className="video-features-content">
                                        <h4>24/7 Support</h4>
                                        <p>Client satisfaction is our first priority. We are here with you every time to
                                            help.</p>
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
                    <TestimonialSlider/>
                </div>
            </section>


            <Cta/>


            <Footer/>


        </div>

    )
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
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false,
            fade: true,
            infinite: true

        };

        return (
            <div>
                <Slider {...settings} className="row testomonial-comment-area text-center justify-content-center"
                        asNavFor={this.state.nav2}
                        ref={slider => (this.slider1 = slider)}>

                    <Testmonial
                        description="One of the best developer. Awesome communication, attention to details and project way before the due date. I would recommend  to everyone who is looking to get their web development done. Highly Recommended."
                        name="Madav pal" title="CEO"/>

                    <Testmonial
                        description="I have worked with him for couple of projects. familiarit is one of the best. I am very happy for  service and I will talk to them 1st for any project that I have to do. Awesome communication, very hardworking, polite and his hard work shows in the project. Thank you so much."
                        name="Petter" title="Director"/>

                    <Testmonial
                        description="familiarit Did a great job in a very short time. Needed some urgent help and he delivered on time with clean codes. Recommended."
                        name="Hasan" title="Assistant "/>
                    <Testmonial
                        description="Very professional and reliable, exceptional work quality and accuracy, excellent communication, high interest and very skilled in finding solutions and ways to fix bug issues at hand"
                        name="Babar" title="Manager"/>

                </Slider>


            </div>
        );

    }


}


function Testmonial(props) {
    return (
        <div className="col-12">
            <div className="single-testomonial-comment">
                <p>{props.description}</p>
                <h4>{props.name}</h4>
                <span>{props.title}</span>
            </div>
        </div>
    )


}




export default App;
