import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Sparkline from '../../../components/sparkline'
import ModuleHeade from '../../../common/module-header';

const notify = require("../../../helper/notify").notify;
import samsungImg from '../../../assets/img/widgets/alpha.jpg'

import { Row, Col, Alert, NavDropdown, MenuItem, } from 'react-bootstrap'
class Chart extends Component {
	constructor(props){
		super(props);
		
	}

	render(){
		const { sparkline } = this.props
		return(
			<Fragment>
				<ModuleHeade text="Charts"/>
				<Row>
					<Col sm={12}>
						<div className="card">
							<div className="card-header">
								<h2>Sparkline Charts
									<small>
										This plugin generates small inline charts using data supplied either inline in the HTML, or via javascript
										<a href="https://omnipotent.net/jquery.sparkline/" target="_blank"> Read more...</a>
									</small>
									<small>For configuration, Please refer to 
										<code>scripts/components/sparkline.js</code>
									</small>
								</h2>
							</div>
							<div className="card-body card-padding">								
								<div className="mini-charts">
									<div className="row">
										<div className="col-sm-6 col-md-3">
											<div className="mini-charts-item bgm-cyan">
												<div className="clearfix">
													<Sparkline className="chart stats-bar" type="bar" value={sparkline.bar1} />
													<div className="count">
														<small>Website Traffics</small>
														<h2>987,459</h2>
													</div>
												</div>
											</div>
										</div>
										<div className="col-sm-6 col-md-3">
											<div className="mini-charts-item bgm-lightgreen">
												<div className="clearfix">
													<Sparkline className="chart stats-bar-2" type="bar" value={sparkline.bar2} />
													<div className="count">
														<small>Website Impressions</small>
														<h2>356,785K</h2>
													</div>
												</div>
											</div>
										</div>

										<div className="col-sm-6 col-md-3">
											<div className="mini-charts-item bgm-orange">
												<div className="clearfix">
													<Sparkline className="chart stats-line" type="line" value={sparkline.bar3} width="85px" height="45" />
													<div className="count">
														<small>Total Sales</small>
														<h2>$ 458,778</h2>
													</div>
												</div>
											</div>
										</div>

										<div className="col-sm-6 col-md-3">
											<div className="mini-charts-item bgm-bluegray">
												<div className="clearfix">
													<Sparkline className="chart stats-line-2" type="line" value={sparkline.bar4} width="85px" height="45" />
													<div className="count">
														<small>Support Tickets</small>
														<h2>23,856</h2>
													</div>
												</div>
											</div>
										</div>


										<div className="col-sm-3">
											<div className="mini-charts-item bgm-teal">
												<div className="clearfix">
													<Sparkline className="chart chart-pie stats-pie" type="pie" value={sparkline.pie1} width="85px" height="45" />
													<div className="count">
														<small>Percentage</small>
														<h2>99.87%</h2>
													</div>
												</div>
											</div>
										</div>

										<div className="col-sm-3">
											<div className="mini-charts-item bgm-red">
												<div className="clearfix">
													<Sparkline className="chart stats-line" type="line" value={sparkline.bar1} width="85px" height="45" />
													<div className="count">
														<small>Total Sales</small>
														<h2>$ 458,778</h2>
													</div>
												</div>
											</div>
										</div>

										<div className="col-sm-3">
											<div className="mini-charts-item bgm-blue">
												<div className="clearfix">
													<Sparkline className="chart chart-pie stats-pie" type="pie" value={sparkline.pie2} width="85px" height="45" />
													<div className="count">
														<small>Percentage</small>
														<h2>99.87%</h2>
													</div>
												</div>
											</div>
										</div>

										<div className="col-sm-3">
											<div className="mini-charts-item bgm-pink">
												<div className="clearfix">
													<Sparkline className="chart stats-line" type="line" value={sparkline.bar4} width="85px" height="45" />
													<div className="count">
														<small>Website Traffics</small>
														<h2>987,459</h2>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Fragment>
		)
	}
}


function mapStateToProps(state) {
	return {
		sparkline: state.sparkline
	};
}
export default connect(mapStateToProps)(Chart);