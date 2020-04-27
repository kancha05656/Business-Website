import React from 'react';
import contact_banner from './img/contact-bg.jpg'
import Footer from './Footer'
import Cta from './Cta'
import AboutSlider from './About_slider'
import ServiceSection from './Service_section'
import Banner from './Banner'


export default class Service extends React.Component {

  componentDidMount() {
        window.scrollTo(0, 0);
    }

	render() {
		return (
			<div>


  <Banner bannerImg={contact_banner} bannerTitle="OUR SERVICES" bannerDescription="Your imagination is our innovation. We are here to make your demand complete with all of the modern technology." breadCrumb="Our Service" />





{/*// <AboutSlider />*/}

<ServiceSection />

<Cta />

<Footer />
			</div>
		);
	}
}

 











 












