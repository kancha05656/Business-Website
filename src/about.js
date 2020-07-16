import React, {Component} from 'react';
import TeamSlider from './Team_slider'
import Footer from './Footer'
import Cta from './Cta'
import Banner from './Banner'
import contactBanner from './img/About-us.jpg'
class Check extends Component {
componentDidMount() {
window.scrollTo(0, 0);
}
render() {
return (
<div>
    <Banner bannerImg={contactBanner} bannerTitle="ABOUT US" bannerDescription="Web Apps Revolutioni is a Web Design and Development Company founded in 2020. We will provide website development and design for small to large companies." breadCrumb="About Us" />
    <section class="about-more">
     <div class="container">
            <div class="about-des">
            <div className="section-title text-center">
                <h2><span>WHO </span> WE ARE?</h2>
                <p>We Build Web Applications with latest technologies and innovation.</p>
            </div>
            <p>
              Web Apps Revolution, We will help businesses through aquiring website design services. We make customized answers for each customer after an in-depth understanding of their
              business destinations. Working in close relationship with our client's, we help them make a vigorous online nearness for broad brand mindfulness. We edge sway inbound showcasing efforts
              which draw in immediate and more noteworthy traffic to the customer's website.
            </p>
        </div>
          <div class="about-des">
            <div className="section-title text-center">
                <h2><span>We </span>  Believe</h2>
                <p>Unleashing the Possibilities</p>
            </div>
            <p>We help individuals, inventors, entrepreneurs, designers, developers and fresh-thinkers to achieve their dreams and goals by showing them how to increase their overall productivity, identity and belief in their ability towards success. As you read our testimonials you will find that many of our clients identify our rigorous accountability approach as well as our ability to increase their self-belief as the driving forces behind them remaining focused on pursuing and achieving their dreams and goals.</p>
        </div>
          <div class="about-des">
            <div className="section-title text-center">
                <h2><span>OUR </span> VISION</h2>
            </div>
            <p>Our vision is to set up a standard and world class website for our clients, whose services will not only be accepted in local areas, but also in all parts of the world.</p>
        </div>
          <div class="about-des pb-0">
            <div className="section-title text-center">
                <h2><span>OUR </span>    MISSION</h2>
            </div>
            <p>
              Our mission is to provide professional and highly creative web design services that will assist business,
              individuals and non-profit organizations in promoting their brands and reaching out to a wide range of potential customers all over the world.
            </p>
        </div>
     </div>
    </section>
    <section className="counter-section-wrapper">
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-lg-4 offset-xl-1">
                    <div className="counter-section-titile">
                        <h2><span>Our</span> Achievement</h2>
                        <p>We have completed more than 100 projects. We have about 20 satisfied clients because we focus on client satisfaction first. The proudest thing is we got 1 national awards.</p>
                    </div>
                </div>
                <div className="col-lg-8 col-xl-7">
                    <div className="counter-section-content">
                        <div className="singel-counter-box">
                            <div className="counter-icon">
                                <span><i className="fas fa-id-card-alt"></i></span>
                            </div>
                            <span className="counter">100</span>
                            <p>Project Complate</p>
                        </div>
                        <div className="singel-counter-box">
                            <div className="counter-icon">
                                <span><i className="far fa-heart"></i></span>
                            </div>
                            <span className="counter">20</span>
                            <p>Satisfied Clients</p>
                        </div>
                        <div className="singel-counter-box">
                            <div className="counter-icon">
                                <span><i className="fas fa-trophy"></i></span>
                            </div>
                            <span className="counter">1</span>
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
