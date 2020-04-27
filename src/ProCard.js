import React from 'react';


export default class ProCard extends React.Component {


	render() {
		return (

              <div className={`col-lg-4 single-port  ${this.props.catagory} `}  >
                <div className="single-portfolio ">
                    <div className="port-img">
                      <a target="_blank" rel="noopener noreferrer" href={this.props.link}><img src={process.env.PUBLIC_URL+this.props.img} alt="Protfolio" /></a>
                    </div>
                    <div className="port-footer  d-flex justify-content-between" style={{backgroundColor:this.props.bgcolor}}>
                      <h4>{this.props.name}</h4>
                      <div className="port-foot-icon">
                        <a href={this.props.link} target="_blank" rel="noopener noreferrer"><i className="far fa-heart"></i></a>
                        <a href={this.props.link} target="_blank" rel="noopener noreferrer"><i className="far fa-eye"></i></a>
                      </div>
                    </div>
                </div>
              </div>
              
		);
	}
}

 











 












