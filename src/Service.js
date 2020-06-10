import React from 'react';
import contact_banner from './img/Our-Services.jpg'
import Footer from './Footer'
import Cta from './Cta'
import ServiceSection from './Service_section'
import Banner from './Banner'


export default class Service extends React.Component {

  componentDidMount() {
        window.scrollTo(0, 0);
    }

	render() {
		return (
			<div>


  <Banner bannerImg={contact_banner} bannerTitle="OUR SERVICES" bannerDescription="Globalize your business with our innovation. We are here to make your imagination come to live with our latest technologies and innovation." breadCrumb="Our Service" />





{/*// <AboutSlider />*/}

<ServiceSection />

<Cta />

<Footer />
			</div>
		);
	}
}
