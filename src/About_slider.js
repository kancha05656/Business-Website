import React from 'react';
import Slider from "react-slick";
import about_img1 from './img/about-us-slider/about-1.jpg'
import about_img2 from './img/about-us-slider/about-2.jpg'
import {
  Link
} from "react-router-dom";


export default class About_slider extends React.Component {


	render() {
		return (
			<div>
 <section className="about-us-section">
    <div className="container">
      <div className="row flex-row-reve flex-row-reverse">
         
            <SimpleSlider />

        <div className="col-lg-5">
          <div className="about-us-content">
            <h2>About <span>US</span></h2>
            <h4>We’re a team of curious people that share a passion for creating digital experiences.</h4>
            <p>Familiar-IT is a full-service web design &amp; development company founded in 2017. The company
              develops and improves professional websites for customers across a wide range of industries.</p>
            <p> The company’s expertise is its commitment to offer custom-made website for every client, from
              small business websites to all websites.</p>
            <Link to="/about" className="btn modern-btn dark">More About Us</Link>
          </div>
        </div>
        

      </div>
    </div>
  </section>
			</div>
		);
	}
}


function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
 
      
    
    <button className={className}
     
      onClick={onClick}><i className="fas fa-angle-right"></i></button>
    
  );
}


function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (

    <button className={className}
     
      onClick={onClick}><i className="fas fa-angle-left"></i></button>
   
  );
}

 
class SimpleSlider extends React.Component {


  render() {

    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow:<SampleNextArrow />,
      prevArrow:<SamplePrevArrow />

    };
    
    return (
         <div className="col-lg-7">
          <div className="about-us-slider">
      <Slider {...settings}  >
        <div>
        <img src={about_img1} className="img-fluid"
                  alt="comment author" />
        </div>
        <div>
          <img src={about_img1} className="img-fluid"
                  alt="comment author" />
        </div>
        <div>
        <img src={about_img2} className="img-fluid"
                  alt="comment author" />
        </div>
        
      </Slider>
    </div>
    </div>
    );

  }

}











 












