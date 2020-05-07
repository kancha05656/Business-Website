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
    <Banner bannerImg={contactBanner} bannerTitle="ABOUT US" bannerDescription="Familia-IT is a Web Design and Development Company. It was founded in 2017. We are providing Freelance and Outsourcing services with an outstanding team." breadCrumb="About Us" />
    <section class="about-more">
     <div class="container">
            <div class="about-des">
            <div className="section-title text-center">
                <h2><span>WHO </span> WE ARE?</h2>
                <p>We Build Smarter and Highly Usable Stuff!</p>
            </div>
            <p>Technobd Limited is an IT enabled Web and Mobile Application Development service providing company in the market since 2000. Technobd Limited provides two major types of service. One is Web Solution that consists of high quality Web Design & Development, Website Maintenance, Social Networking Platform Development, E-Commerce Solutions, CMS Solutions, e-Prochar as E-mail Marketing Service, Managed Web Hosting Service and Domain Registration Service. Other one is Mobile Application Development in both Android & iOS Platform.</p>
        </div>
          <div class="about-des">
            <div className="section-title text-center">
                <h2><span>We </span>  Believe</h2>
                <p>Unleashing the Possibilities</p>
            </div>
            <p>How? We help individuals/inventors/entrepreneurs/designers/developers/fresh-thinkers to achieve their dream and goal by showing them how to increase their overall productivity, identity and belief in their ability towards success. As you read our testimonials you will find that many of our clients identify our rigorous accountability approach as well as our ability to increase their self-belief as the driving forces behind them remaining focused on pursuing and achieving their dreams and goals.</p>
        </div>
          <div class="about-des">
            <div className="section-title text-center">
                <h2><span>OUR </span>   VISION</h2>
            </div>
            <p>To be the leading company inWeb & Mobile Application Development Company that empowers individuals& companies to transform their ideas to reality.</p>
        </div>
          <div class="about-des pb-0">
            <div className="section-title text-center">
                <h2><span>OUR </span>    MISSION</h2>
            </div>
            <p>Our mission is 100% client satisfaction and we focused on versatile project management with aim to provide Web & Mobile App solutions with global acceptability.</p>
        </div>
     </div>
    </section>
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
    <TeamSlider />
    <Cta />
    <Footer />
</div>
)
}
}
export default Check;