import React from 'react';
import Footer from './Footer'
import Banner from './Banner'
import contact_banner from './img/contact-bg.png'
import axios from 'axios';

 class Contact extends React.Component {

    constructor(props) {
  super(props);
  this.state = {
    fname: '',
    subject: '',
    email: '',
    message: '',
    mailSent:''
  }
  this.handleFormSubmit= this.handleFormSubmit.bind(this)
  this.handleChange= this.handleChange.bind(this)
  this.animaiton= this.animaiton.bind(this)
}
 
  componentDidMount() {
        window.scrollTo(0, 0);
    }

handleChange(e){
  this.setState({[e.target.name]:e.target.value})
}

animaiton(){
   document.querySelector(".messages-show").style.opacity ='1'
    document.querySelector(".messages-show").style.zIndex ='999990';

  setTimeout(()=>{
 document.querySelector(".messages-show").style.opacity ='0';
 document.querySelector(".messages-show").style.zIndex ='-999990';

  },3000)
}

handleFormSubmit( event ) {
  event.preventDefault();
 axios({
    method: 'post',
    url: '../mail.php',
    data:this.state

  })
    .then(result => {

      if(result){
       this.animaiton()
      }
    })
    .catch(error => this.setState({ error: error.message }));
    event.target.reset();
     
}


	render() {
		return (
			<div>

 <Banner bannerImg={contact_banner} bannerTitle="CONTACT US" bannerDescription="Describe your projects and requirements to start bring your imagination to live. Contact us if you have any questions" breadCrumb="Contact Us" />



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
            <div className="messages-show">
              <h3>Thanks for message us. We will content you very soon.</h3>
              </div>
            <form action="/Contact" method="GET" className="contact-form" onSubmit={e => this.handleFormSubmit(e)}>

              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="fname" className="d-none">Your Name</label>
                  <input type="text" name="fname" onChange={this.handleChange} className="form-control" placeholder="Full Name" />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="email" className="d-none">Your Email</label>
                  <input type="email" name="email" onChange={this.handleChange} className="form-control" placeholder="Email" />
                </div>
                <div className="col-12 form-group">
                  <label htmlFor="subject" className="d-none">Subject</label>
                  <input type="text" name="subject" onChange={this.handleChange} className="form-control" placeholder="Subject" />
                </div>
                <div className="col-12 form-group">
                  <label htmlFor="message" className="d-none">Message</label>
                  <textarea name="message" onChange={this.handleChange} className="form-control" id="message" placeholder="Describe your project."></textarea>
                </div>
                <div className="col-12 form-btn">
                  <button type="submit" className="btn modern-btn" >Send</button>
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


<section className="map">
  <div className="container">
    <div className="row">
      <div className="col-12">
       <div className="map-area">
          <iframe title="our company location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1254.536986626985!2d-84.58913156988861!3d42.68293530337446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8822c091498150df%3A0xc7a051c50d5128a8!2sW%20Jolly%20Rd%2C%20Lansing%2C%20MI%2C%20USA!5e1!3m2!1sen!2sbd!4v1588964666694!5m2!1sen!2sbd" width="100%" height="450"    ></iframe>
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



