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
            <p>We work to meet our client's expectation. We build business website from ground up to finished.</p>
          </div>
        </div>
      </div>
      <div className="row text-center">

        <div className="col-md-6 col-lg-4">
          <div className="single-service">


            <span><i className="fas fa-desktop"></i></span>

            <h3>Web Development</h3>
            <p>We are experts in building web applications. We create the business website’s with core structure for make your business dynamic in online presence. </p>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="single-service">


            <span><i className="fas fa-pen-nib"></i></span>

            <h3>Web Design</h3>
            <p>Our design will makes your website look professional. We focus on the style and overall feel of the page with
          		new and latest technologies.</p>
          </div>
        </div>



        <div className="col-md-6 col-lg-4">
          <div className="single-service">


            <span><i className="fas fa-mobile-alt"></i></span>
            <h3>Fully Responsive</h3>
            <p>Most of the people will be accessing website from their phone, so build responsive designs that work in all kinds of devices.</p>
          </div>
        </div>


        <div className="col-md-6 col-lg-4">
          <div className="single-service">

            <span><i className="fa fa-bug"></i></span>
            <h3>Bug Fixing</h3>
          <p>Don't worries if you have any problems in your website! we will find out the problem and  fix it all. Connect to us and let talk about the your problems and our solutions.  </p>

          </div>
        </div>


        <div className="col-md-6 col-lg-4">
          <div className="single-service">


            <span><i className="fab fa-wordpress-simple"></i></span>

            <h3>Wordpress</h3>
            <p>We create WordPress websites using the latest techniques, trends, and tools. When we're finished, you can
              manage your content with ease.</p>
          </div>
        </div>


        <div className="col-md-6 col-lg-4">
          <div className="single-service">


            <span><i className="fas fa-headset"></i></span>

            <h3>Full Support</h3>
            <p>Let us take the business of maintaining your site out of your hands. Don't worry we will give you 24/7 support whenever you need</p>
          </div>
        </div>
      </div>
    </div>
  </section>

			</div>
		);
	}
}
