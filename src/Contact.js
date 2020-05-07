import React from 'react';
import Footer from './Footer'
import Banner from './Banner'
import contact_banner from './img/contact-bg.png'


 class Contact extends React.Component {
  componentDidMount() {
        window.scrollTo(0, 0);
    }

	render() {
		return (
			<div>

 <Banner bannerImg={contact_banner} bannerTitle="CONTACT US" bannerDescription="Describe your requirement and give the chance to walk together. And Don't be hesitated to send a message we are friendly to keep in touch with you." breadCrumb="Contact Us" />



 <section className="contact-us-section-wrap">
    <div className="container">
      <div className="contact-us-wrap-box">


        <div className="row justify-content-center text-center">
          <div className="col-lg-8 col-xl-6">

            <div className="section-title">
              <h2>Contact <span>Us</span></h2>
              <p>Fill out the form with your information and project description.</p>
            </div>
          </div>
        </div>

        <div className="row">

          <div className="col-lg-8">
            <form action="#" className="contact-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="name" className="d-none">Your Name</label>
                  <input type="text" className="form-control" placeholder="Full Name" />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="email" className="d-none">Your Email</label>
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="col-12 form-group">
                  <label htmlFor="subject" className="d-none">Subject</label>
                  <input type="email" className="form-control" placeholder="Subject" />
                </div>
                <div className="col-12 form-group">
                  <label htmlFor="message" className="d-none">Message</label>
                  <textarea name="message" className="form-control" id="message" placeholder="Describe your project."></textarea>
                </div>
                <div className="col-12 form-btn">
                  <button type="submit" className="btn modern-btn">Send</button>
                </div>
              </div>
            </form>
          </div>


          <div className="col-lg-4">
            <div className="contact-location-box">
              <h3>Our Address</h3>
              <p>Other Contact informations</p>



              <div className="single-location-widget">
                <h4><i className="fas fa-envelope"></i> Email Address</h4>
                <p>webapprevolutions@gmail.com</p>
              </div>

              <div className="single-location-widget">
                <h4><i className="fas fa-phone"></i> Phone Number</h4>
                <p>(616) 953-6133</p>
              </div>

              <div className="single-location-widget">
                <h4><i className="fas fa-map"></i>Location</h4>
                <p>Lansing, Michigan 48911</p>
              </div>



            </div>
          </div>

        </div>


      </div>
    </div>
  </section>



<Footer />

			</div>
		);
	}
}

export default Contact;
