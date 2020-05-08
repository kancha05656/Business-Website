import React from 'react';
import Slider from "react-slick";
import madhav from './img/team/madhav.jpg'
import alamin from './img/team/alamin.jpg'
import rasel from './img/team/rasel.jpg'
import akash from './img/team/akash.jpg'
// import redwan from './img/team/redwan.jpg'

export default class Team_slider extends React.Component {



	render() {
		return (
    <section className="our-team-slider-wrapper bg-dot">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-xl-6">

            <div className="section-title">
              <h2><span>Our </span>Team</h2>
              <p>Meet our passionated and dedicated team members in Web App Revolution</p>
            </div>
          </div>
        </div>

             <Member />
      </div>
    </section>

		);
	}
}

class Member extends React.Component {
  render() {
    var settings = {
       dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]

    };

    return (
      <Slider {...settings} className="row team-slider-active">
        <TeamCard name="Madhav Pokhrel" title="Founder/ Full Stack Developer" facebook="https://www.facebook.com/webapprevolutions/" github="https://github.com/kancha05656" linkedin="https://www.linkedin.com/in/madhavpokhrel/" img={madhav}/>

   <TeamCard name="Md. Alamin" title="Full Stact Developer" facebook="https://www.facebook.com/alaminislam05" github="https://github.com/alaminAB" linkedin="https://www.linkedin.com/in/familiar-it-5b1a67128/" img={alamin}/>

        <TeamCard name="Md. Rasel" title="Full Stact Developer" facebook="https://www.facebook.com/rslahmed383/" github="https://github.com/rslahmed" linkedin="https://www.linkedin.com/in/rslahmed/" img={rasel}/>

        <TeamCard name="Akash Hawladar" title="Developer" facebook="https://www.facebook.com/shanboy.akash" github="https://github.com/r-yan-akash" linkedin="https://www.linkedin.com/mwlite/in/shanboy-jisan-7a1111175" img={akash}/>


      </Slider>
    );

  }


}


function TeamCard(props){
  return (
<div className="col-12">
       <div className="single-team-slider">
              <div className="team-slider-img">
               <img src={props.img} className="img-fluid" alt="Alamiln Islam" />

                {/*<div className="team-social-icons">
                  <a target="_blank" rel="noopener noreferrer" href={props.facebook}><i className="fab fa-facebook-f"></i></a>
                  <a target="_blank" rel="noopener noreferrer" href={props.github}><i className="fab fa-github"></i></a>
                  <a target="_blank" rel="noopener noreferrer" href={props.linkedin}><i className="fab fa-linkedin-in"></i></a>
                </div>*/}

              </div>
       
                <h4>{props.name}</h4>
           
              <p>{props.title}</p>
            </div>
     </div>
  )



}
