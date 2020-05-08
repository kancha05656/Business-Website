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




<section class="policy">
  <div class="container">
     
  </div>
</section>




<Footer />

			</div>
		);
	}
}

export default Contact;
