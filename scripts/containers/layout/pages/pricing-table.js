import React, { Component, Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';

import ModuleHeader from '../../../common/module-header';
import Ripple from '../../../components/ripple';

import './pricing-table.scss';

export default class PricingTable extends Component {
	constructor(props) {
		super(props);
		
	}

	componentWillUnmount(){}
	
	render() {
		return (
			<Fragment>
				<ModuleHeader text="Pricing Table"/>
				
				<Row>
					<Col sm={12} md={3}>
						<div className="pricing-container">
							<h4>Freelancer</h4>
							<div className="icon-container">
								<i className="zmdi zmdi-print zmdi-hc-fw"></i>
							</div>
							<div className="price-desc-container">
								<span>FREE</span>
								<p>This is good if your company size is bewtween 2 and 10 persons</p>
							</div>
							<ul className="list-unstyled">
								<li>Module A</li>
								<li>Module B</li>
								<li>Module D</li>
								<li>Module E</li>
							</ul>
							<Ripple type="button" className="btn btn-primary prcing-btn">Choose Plan</Ripple>
							
						</div>
					</Col>
					<Col sm={12} md={3}>
						<div className="pricing-container">
							<h4>Small Company</h4>
							<div className="icon-container">
								<i className="zmdi zmdi-home zmdi-hc-fw"></i>
							</div>
							<div className="price-desc-container">
								<span>$29</span>
								<p>This is good if your company size is bewtween 2 and 10 persons</p>
							</div>
							<ul className="list-unstyled">
								<li>Module A</li>
								<li>Module B</li>
								<li>Module D</li>
								<li>Module E</li>
							</ul>
							<Ripple type="button" className="btn btn-primary prcing-btn">Choose Plan</Ripple>
						</div>
					</Col>
					<Col sm={12} md={3}>
						<div className="pricing-container">
							<h4>Medium Company</h4>
							<div className="icon-container">
								<i className="zmdi zmdi-city-alt zmdi-hc-fw"></i>
							</div>
							<div className="price-desc-container">
								<span>$69</span>
								<p>This is good if your company size is bewtween 2 and 10 persons</p>
							</div>
							<ul className="list-unstyled">
								<li>Module A</li>
								<li>Module B</li>
								<li>Module D</li>
								<li>Module E</li>
							</ul>
							<Ripple type="button" className="btn btn-primary prcing-btn">Choose Plan</Ripple>
						</div>
					</Col>
					<Col sm={12} md={3}>
						<div className="pricing-container">
							<h4>Enterprise</h4>
							<div className="icon-container">
								<i className="zmdi zmdi-balance zmdi-hc-fw"></i>
							</div>
							<div className="price-desc-container">
								<span>$159</span>
								<p>This is good if your company size is bewtween 2 and 10 persons</p>
							</div>
							<ul className="list-unstyled">
								<li>Module A</li>
								<li>Module B</li>
								<li>Module D</li>
								<li>Module E</li>
							</ul>
							<Ripple type="button" className="btn btn-primary prcing-btn">Choose Plan</Ripple>
						</div>
					</Col>
				</Row>

				<Row className="pricing" ref={(ref) => { this.pricingRef = ref }}>
					{/* Free */}
					<Col sm={12} md={4} id="pricing-first-main" style={{padding: 0}} >
						<div className="pricing-first-holder">
							<div className="pricing-first-head">
								<div className="pricing-first-head-text">Free Forever</div>
								<hr/>
								<div className="text-center m-t-10">
									<div className="pricing-first-type">FREE</div>
									<div className="text-center p-b-10 p-t-5">(no credit card required)</div>
								</div>
								<div>
									<p className="text-center">Up to</p>
									<ul className="list-unstyled">
										<li className="p-5">
											<span className="pull-left" style={{marginLeft: "10%"}}>3</span>
											<span className="pull-right" style={{marginRight: "10%"}}>Users</span>
											<span className="clearfix"></span>
										</li>
										<li className="p-5" >
											<span className="pull-left" style={{ marginLeft: "10%" }}>20</span>
											<span className="pull-right" style={{ marginRight: "10%" }}>Companies</span>
											<span className="clearfix"></span>
										</li>
										<li></li>
										<li className="p-5">
											<span className="pull-left" style={{ marginLeft: "10%" }}>199&nbsp;MB</span>
											<span className="pull-right" style={{ marginRight: "10%" }}>Storage</span>
											<span className="clearfix"></span>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="clearfix">
							<div style={{ height: "auto" }}>
								<ul className="list-unstyled list-striped">
									<li style={{ padding: 10 }}>
										<i className="zmdi zmdi-check zmdi-hc-fw"></i>
										<span style={{ float: "right", marginRight: "10%" }}>Leads</span>
										<span className="clearfix"></span>
									</li>
									<li style={{ padding: 10 }}>
										<i className="zmdi zmdi-check zmdi-hc-fw"></i>
										<span style={{ float: "right", marginRight: "10%" }}>Opportunities</span>
										<span className="clearfix"></span>
									</li>
									<li style={{ padding: 10 }}>
										<i className="zmdi zmdi-check zmdi-hc-fw"></i>
										<span style={{ float: "right", marginRight: "10%" }}>Account</span>
										<span className="clearfix"></span>
									</li>
									<li style={{ padding: 10 }}>
										<i className="zmdi zmdi-check zmdi-hc-fw"></i>
										<span style={{ float: "right", marginRight: "10%" }}>Contact</span>
										<span className="clearfix"></span>
									</li>
									<li style={{ padding: 10 }}>
										<i className="zmdi zmdi-check zmdi-hc-fw"></i>
										<span style={{ float: "right", marginRight: "10%" }}>Forecast</span>
										<span className="clearfix"></span>
									</li>
									<li style={{ padding: 10 }}>
										<i className="zmdi zmdi-check zmdi-hc-fw"></i>
										<span style={{ float: "right", marginRight: "10%" }}>Products</span>
										<span className="clearfix"></span>
									</li>
									<li style={{ padding: 10 }}>
										<i className="zmdi zmdi-close zmdi-hc-fw"></i>
										<span style={{ float: "right", marginRight: "10%" }}>Report</span>
										<span className="clearfix"></span>
									</li>
								</ul>
							</div>
							<div className="pricing-first-footer">
								<div className="text-center">
									<Ripple type="button" className="btn btn-primary pricing-btn">Choose Plan</Ripple>
								</div>
							</div>
						</div>
					</Col>
					{/* Team */}
					<Col sm={12} md={4} id="pricing-third-main">
						<div className="pricing-third-holder">
							<div className="pricing-third-head">
								<div className="pricing-third-head-text">Enterprise plan</div>
								<hr/>
								<div className="text-center p-t-10">
									<div className="pricing-third-type">$ 99.00</div>
									<div className="text-center p-b-10 p-t-5">Monthly Subscription</div>
								</div>
								<div>
									<p className="text-center">Up to</p>
									<ul className="list-unstyled">
										<li className="p-5">
											<span className="pull-left" style={{ marginLeft: "10%" }}>25</span>
											<span className="pull-right" style={{ marginRight: "10%" }}>Users</span>
											<span className="clearfix"></span>
										</li>
										<li className="p-5">
											<span className="pull-left" style={{ marginLeft: "10%" }}>Unlimited</span>
											<span className="pull-right" style={{ marginRight: "10%" }}>Companies</span>
											<span className="clearfix"></span>
										</li>
										<li></li>
										<li className="p-5 p-b-10">
											<span className="pull-left" style={{ marginLeft: "10%" }}>10&nbsp;GB</span>
											<span className="pull-right" style={{ marginRight: "10%" }}>Storage</span>
											<span className="clearfix"></span>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="clearfix">
							<div style={{ height: "auto" }}>
								<ul className="list-unstyled list-striped">
									<li className="p-10">
										<i className="zmdi zmdi-check zmdi-hc-fw"></i>
										<span style={{ float: "right", marginRight: "10%" }}>Leads</span>
										<span className="clearfix"></span>
									</li>
									<li className="p-10">
										<i className="zmdi zmdi-check zmdi-hc-fw"></i>
										<span style={{ float: "right", marginRight: "10%" }}>Opportunities</span>
										<span className="clearfix"></span>
									</li>
									<li className="p-10">
										<i className="zmdi zmdi-check zmdi-hc-fw"></i>
										<span style={{ float: "right", marginRight: "10%" }}>Account</span>
										<span className="clearfix"></span>
									</li>
									<li className="p-10">
										<i className="zmdi zmdi-check zmdi-hc-fw"></i>
										<span style={{ float: "right", marginRight: "10%" }}>Contact</span>
										<span className="clearfix"></span>
									</li>
									<li className="p-10">
										<i className="zmdi zmdi-check zmdi-hc-fw"></i>
										<span style={{ float: "right", marginRight: "10%" }}>Forecast</span>
										<span className="clearfix"></span>
									</li>
									<li className="p-10">
										<i className="zmdi zmdi-check zmdi-hc-fw"></i>
										<span style={{ float: "right", marginRight: "10%" }}>Products</span>
										<span className="clearfix"></span>
									</li>
									<li className="p-10">
										<i className="zmdi zmdi-check zmdi-hc-fw"></i>
										<span style={{ float: "right", marginRight: "10%" }}>Report</span>
										<span className="clearfix"></span>
									</li>
								</ul>
							</div>
							<div className="pricing-third-footer">
								<div className="text-center">
									<Ripple type="button" className="btn btn-primary pricing-btn">Choose Plan</Ripple>
								</div>
							</div>
						</div>
					</Col>
					{/* Enterprise */}
					<Col sm={12} md={4} id="pricing-second-main" style={{padding: 0, zIndex: 1}} >
						<div className="pricing-second-holder">
							<div className="pricing-second-head">
								<div className="pricing-second-head-text">Team plan</div>
								<hr/>
								<div className="text-center m-t-10">
									<div className="pricing-second-type">$ 52.00</div>
									<div className="text-center p-b-10 p-t-5">Monthly Subscription</div>
								</div>
								<div>
									<p className="text-center">Up to</p>
									<ul className="list-unstyled">
										<li className="p-5">
											<span className="pull-left" style={{ marginLeft: "10%" }}>10</span>
											<span className="pull-right" style={{ marginRight: "10%" }}>Users</span>
											<span className="clearfix"></span>
										</li>
										<li className="p-5">
											<span className="pull-left" style={{ marginLeft: "10%" }}>500</span>
											<span className="pull-right" style={{ marginRight: "10%" }}>Companies</span>
											<span className="clearfix"></span>
										</li>
										<li></li>
										<li className="p-5">
											<span className="pull-left" style={{ marginLeft: "10%" }}>4&nbsp;GB</span>
											<span className="pull-right" style={{ marginRight: "10%" }}>Storage</span>
											<span className="clearfix"></span>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="clearfix">
							<div style={{ height: "auto" }}>
								<ul className="list-unstyled list-striped">
									<li className="p-10">
										<i className="zmdi zmdi-check zmdi-hc-fw"></i>
										<span style={{ float: "right", marginRight: "10%" }}>Leads</span>
										<span className="clearfix"></span>
									</li>
									<li className="p-10">
										<i className="zmdi zmdi-check zmdi-hc-fw"></i>
										<span style={{ float: "right", marginRight: "10%" }}>Opportunities</span>
										<span className="clearfix"></span>
									</li>
									<li className="p-10">
										<i className="zmdi zmdi-check zmdi-hc-fw"></i>
										<span style={{ float: "right", marginRight: "10%" }}>Account</span>
										<span className="clearfix"></span>
									</li>
									<li className="p-10">
										<i className="zmdi zmdi-check zmdi-hc-fw"></i>
										<span style={{ float: "right", marginRight: "10%" }}>Contact</span>
										<span className="clearfix"></span>
									</li>
									<li className="p-10">
										<i className="zmdi zmdi-check zmdi-hc-fw"></i>
										<span style={{ float: "right", marginRight: "10%" }}>Forecast</span>
										<span className="clearfix"></span>
									</li>
									<li className="p-10">
										<i className="zmdi zmdi-check zmdi-hc-fw"></i>
										<span style={{ float: "right", marginRight: "10%" }}>Products</span>
										<span className="clearfix"></span>
									</li>
									<li className="p-10">
										<i className="zmdi zmdi-check zmdi-hc-fw"></i>
										<span style={{ float: "right", marginRight: "10%" }}>Report</span>
										<span className="clearfix"></span>
									</li>
								</ul>
							</div>
							<div className="pricing-second-footer">
								<div className="text-center">
									<Ripple type="button" className="btn btn-primary pricing-btn">Choose Plan</Ripple>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Fragment>
		)
	}
}