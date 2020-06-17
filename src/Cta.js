import React from 'react';

import {
  Link
} from "react-router-dom";

export default class Cta extends React.Component {


	render() {
		return (
			<div>


  <section className="cta-section-wrapper">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10">
          <div className="cta-content text-center">
            <h2>Ready To Start a New Project?</h2>
            <p>If you have any questions just click the button below. We love to have conversation with you about your ideas and expectations.</p>
            <Link to="/Contact" className="cta-btn btn modern-btn">Contact US</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
			</div>
		);
	}
}
