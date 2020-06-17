import React from 'react';

export default class Service extends React.Component {


	render() {
		return (
			<div>
  <section className="service-section-wrapper bg-dot">
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-lg-8 col-xl-6">

          <div className="section-title">
            <h2><span>Our </span>Service</h2>
            <p>We work to to fulfill our customer's expectations. We build business website from ground up.</p>
          </div>
        </div>
      </div>
      <div className="row text-center">

        <div className="col-md-6 col-lg-4">
          <div className="single-service">


            <span><i className="fas fa-desktop"></i></span>

            <h3>Web Development</h3>
            <p>We are experts in building web applications. We create the website’s with core structure to make your business dynamic with online presence. </p>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="single-service">


            <span><i className="fas fa-pen-nib"></i></span>

            <h3>Web Design</h3>
            <p>Our design will makes your website look professional. We focus on the style and overall feel of the page with the
          		newest and latest technologies.</p>
          </div>
        </div>



        <div className="col-md-6 col-lg-4">
          <div className="single-service">


            <span><i className="fas fa-mobile-alt"></i></span>
            <h3>Fully Responsive</h3>
            <p>Many people will be accessing the website from their phone, so we build responsive designs that work with all kinds of devices.</p>
          </div>
        </div>


        <div className="col-md-6 col-lg-4">
          <div className="single-service">

            <span><i className="fa fa-bug"></i></span>
            <h3>Bug Fixing</h3>
          <p>No worries. If you have any problems with your website we will find the problem and fix it. Contact us and lets talk.  </p>

          </div>
        </div>


        <div className="col-md-6 col-lg-4">
          <div className="single-service">


            <span><i className="fab fa-wordpress-simple"></i></span>

            <h3>Wordpress</h3>
            <p>We create WordPress websites using the latest techniques, trends and tools. When we're finished, you can
              manage your content with ease.</p>
          </div>
        </div>


        <div className="col-md-6 col-lg-4">
          <div className="single-service">


            <span><i className="fas fa-headset"></i></span>

            <h3>Full Support</h3>
            <p>Hassle free 24/7 support</p>
          </div>
        </div>
      </div>
    </div>
  </section>

			</div>
		);
	}
}
