import React, {Component} from 'react';
import TeamSlider from './Team_slider'
import Footer from './Footer'
import Cta from './Cta'
import AboutSlider from './About_slider'
import Banner from './Banner'

import contactBanner from './img/About-us.png'


class Check extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>

                <Banner bannerImg={contactBanner} bannerTitle="ABOUT US"
                        bannerDescription="Familia-IT is a Web Design and Development Company. It was founded in 2017. We are providing Freelance and Outsourcing services with an outstanding team."
                        breadCrumb="About Us"/>


                <AboutSlider/>


                <section className="counter-section-wrapper">
                    <div className="container-fluid">
                        <div className="row align-items-center">

                            <div className="col-lg-4 offset-xl-1">
                                <div className="counter-section-titile">
                                    <h2><span>Our</span> Achievement</h2>
                                    <p>We have complete more than 1000 projects. We have about 200 satisfied clients because we focus on client satisfaction first. The proudest thing is we got 3 national awards. And that's happened for our great team.</p>
                                </div>
                            </div>

                            <div className="col-lg-8 col-xl-7">
                                <div className="counter-section-content">

                                    <div className="singel-counter-box">
                                        <div className="counter-icon">
                                            <span><i className="fas fa-id-card-alt"></i></span>
                                        </div>
                                        <span className="counter">1000</span>
                                        <p>Project Complate</p>
                                    </div>

                                    <div className="singel-counter-box">
                                        <div className="counter-icon">
                                            <span><i className="far fa-heart"></i></span>
                                        </div>
                                        <span className="counter">200</span>
                                        <p>Satisfied Clients</p>
                                    </div>

                                    <div className="singel-counter-box">
                                        <div className="counter-icon">
                                            <span><i className="fas fa-trophy"></i></span>
                                        </div>
                                        <span className="counter">3</span>
                                        <p>Win Awards</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <TeamSlider/>

                <Cta/>

                <Footer/>

            </div>

        )
    }
}


export default Check;