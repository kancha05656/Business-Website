import React from 'react';
import {
  Link
} from "react-router-dom";


class Banner extends React.Component {


	render() {
		return (
			<div>
  <section className="banner-area inner-banner-wrapper" style={{backgroundImage:"url("+this.props.bannerImg+")"}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 m-auto text-center">
          <div className="banner-content inner-banner-content white-text">
            <h1>{this.props.bannerTitle}</h1>
            <p>{this.props.bannerDescription}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div className="container text-center">
    <ul className="bread-crumb">
      <li><Link to="/"><i className="fas fa-home"></i>Home</Link></li>
      <li>{this.props.breadCrumb}</li>
    </ul>
  </div>
  </div>
		);
	}
}

export default Banner;