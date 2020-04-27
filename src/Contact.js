import React from 'react';
import Footer from './Footer'
import Banner from './Banner'
import contact_banner from './img/contact-bg.jpg'


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
              <p>Fillup the form with the imagination of yours. We will make it true.</p>
            </div>
          </div>
        </div>

        <div className="row">
          
          <div className="col-lg-8">
            <form action="#" className="contact-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="name" className="d-none">Your Name</label>
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="email" className="d-none">Your Email</label>
                  <input type="email" className="form-control" placeholder="Your Email" />
                </div>
                <div className="col-12 form-group">
                  <label htmlFor="subject" className="d-none">Subject</label>
                  <input type="email" className="form-control" placeholder="Subject" />
                </div>
                <div className="col-12 form-group">
                  <label htmlFor="message" className="d-none">Message</label>
                  <textarea name="message" className="form-control" id="message" placeholder="Write your message"></textarea>
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
              <p>You may also contact us. We are always with you</p>

              
             
              <div className="single-location-widget">
                <h4><i className="fas fa-envelope"></i> Email Address</h4>
                <p>familiarit.star@gmail.com</p>
                <p>alaminislam9172@gmail.com</p>
              </div>
        
              <div className="single-location-widget">
                <h4><i className="fas fa-phone"></i> Phone Number</h4>
                <p>+8801727900653</p>
                <p>+8801872-399762</p>
              </div>
             
              <div className="single-location-widget">
                <h4><i className="fas fa-map"></i> Our Location</h4>
                <p>1702-Solmaid, Vatara, Dhaka, Bangladesh</p>
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