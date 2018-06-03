import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Sparkline from '../../../components/sparkline';
import EasypieChart from '../../../components/easypie';
import ModuleHeader from '../../../common/module-header';

import { Row, Col, Alert, NavDropdown, MenuItem, } from 'react-bootstrap'

// Redux Action
import { sparklineAction } from '../../../actions/sparkling-action';

class Chart extends Component {
	constructor(props){
		super(props);
		this.state = {
			sent_percent: 45,
			sold_percent: 45,
			spam_percent: 45,
			profit_percent: 45,
			sent: {
				chart_ref: {},
				reference: (ref) => {
					this.state.sent.chart_ref = ref;
				}
			},
			sold: {
				chart_ref: {},
				reference: (ref) => {
					this.state.sold.chart_ref = ref;
				}
			},
			spam: {
				chart_ref: {},
				reference: (ref) => {
					this.state.spam.chart_ref = ref;
				}
			},
			profit: {
				chart_ref: {},
				reference: (ref) => {
					this.state.profit.chart_ref = ref;
				}
			}
		}
	}
	updateSparkLine(){
		this.props.dispatch(sparklineAction("updae"));
	}
	updatePie(){
		var sent = Math.floor(100 * Math.random()),
			sold = Math.floor(100 * Math.random()),
			spam = Math.floor(100 * Math.random()),
			profit = Math.floor(100 * Math.random());
		this.setState({
			sent_percent: sent,
			sold_percent: sold,
			spam_percent: spam,
			profit_percent: profit
		})
		this.state.sent.chart_ref.update(sent)
		this.state.sold.chart_ref.update(sold)
		this.state.spam.chart_ref.update(spam)
		this.state.profit.chart_ref.update(profit)
	}
	render(){
		const { sparkline } = this.props
		return(
			<Fragment>
				<ModuleHeader text="Charts"/>
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
								<ul className="actions">
									<li>
										<a onClick={this.updateSparkLine.bind(this)} >
											<i className="zmdi zmdi-refresh-alt"></i>
										</a>
									</li>
								</ul>
							</div>
							<div className="card-body card-padding">
								<div className="mini-charts">
									<Row>
										<Col sm={6} md={3}>
											<div className="mini-charts-item bgm-cyan">
												<div className="clearfix">
													<Sparkline className="chart stats-bar" type="bar" value={sparkline.bar1} />
													<div className="count">
														<small>Website Traffics</small>
														<h2>987,459</h2>
													</div>
												</div>
											</div>
										</Col>
										<Col sm={6} md={3}>
											<div className="mini-charts-item bgm-lightgreen">
												<div className="clearfix">
													<Sparkline className="chart stats-bar-2" type="bar" value={sparkline.bar2} />
													<div className="count">
														<small>Website Impressions</small>
														<h2>356,785K</h2>
													</div>
												</div>
											</div>
										</Col>

										<Col sm={6} md={3}>
											<div className="mini-charts-item bgm-orange">
												<div className="clearfix">
													<Sparkline className="chart stats-line" type="line" value={sparkline.bar3} width="85px" height="45" />
													<div className="count">
														<small>Total Sales</small>
														<h2>$ 458,778</h2>
													</div>
												</div>
											</div>
										</Col>

										<Col sm={6} md={3}>
											<div className="mini-charts-item bgm-bluegray">
												<div className="clearfix">
													<Sparkline className="chart stats-line-2" type="line" value={sparkline.bar4} width="85px" height="45" />
													<div className="count">
														<small>Support Tickets</small>
														<h2>23,856</h2>
													</div>
												</div>
											</div>
										</Col>


										<Col sm={6} md={3}>
											<div className="mini-charts-item bgm-teal">
												<div className="clearfix">
													<Sparkline className="chart chart-pie stats-pie" type="pie" value={sparkline.pie1} width="85px" height="45" />
													<div className="count">
														<small>Percentage</small>
														<h2>99.87%</h2>
													</div>
												</div>
											</div>
										</Col>

										<Col sm={6} md={3}>
											<div className="mini-charts-item bgm-red">
												<div className="clearfix">
													<Sparkline className="chart stats-line" type="line" value={sparkline.bar1} width="85px" height="45" />
													<div className="count">
														<small>Total Sales</small>
														<h2>$ 458,778</h2>
													</div>
												</div>
											</div>
										</Col>

										<Col sm={6} md={3}>
											<div className="mini-charts-item bgm-blue">
												<div className="clearfix">
													<Sparkline className="chart chart-pie stats-pie" type="pie" value={sparkline.pie2} width="85px" height="45" />
													<div className="count">
														<small>Percentage</small>
														<h2>99.87%</h2>
													</div>
												</div>
											</div>
										</Col>

										<Col sm={6} md={3}>
											<div className="mini-charts-item bgm-pink">
												<div className="clearfix">
													<Sparkline className="chart stats-line" type="line" value={sparkline.bar4} width="85px" height="45" />
													<div className="count">
														<small>Website Traffics</small>
														<h2>987,459</h2>
													</div>
												</div>
											</div>
										</Col>
									</Row>
								</div>
							</div>
						</div>
					</Col>
				</Row>
				<Row>
					<Col sm={12}>
						<div className="card">
							<div className="card-header">
								<h2>EASY PIE CHART
									<small>
										Lightweight jQuery plugin to render and animate nice pie charts with the HTML5 canvas element.
										<a href="https://github.com/rendro/easy-pie-chart#vanilla-js-1" target="_blank"> Read more...</a>
									</small>
									<small>For configuration, Please refer to
										<code>scripts/components/easypie.js</code>
									</small>
								</h2>
								<ul className="actions">
									<li>
										<a onClick={this.updatePie.bind(this)} >
											<i className="zmdi zmdi-refresh-alt"></i>
										</a>
									</li>
								</ul>
							</div>
							<div className="card-body card-padding">
								<Row>
									<Col sm={3}>
										<div className="epc-item bgm-pink">
											<EasypieChart link={this.state.sent.reference} className="easy-pie main-pie" data-percent={this.state.sent_percent} barcolor="#2196F3" trackcolor="#eee" scalecolor="#ccc" linewidth={4} linecap="butt" size={148}>
												<div className="percent">{this.state.sent_percent}</div>
												<div className="pie-title">Total Emails Sent</div>
											</EasypieChart>
										</div>
									</Col>
									<Col sm={3}>
										<div className="epc-item bgm-orange">
											<EasypieChart link={this.state.sold.reference} className="easy-pie main-pie" data-percent={this.state.sold_percent} barcolor="#2196F3" trackcolor="#eee" scalecolor="#ccc" linewidth={4} linecap="butt" size={148}>
												<div className="percent">{this.state.sold_percent}</div>
												<div className="pie-title">Sold Items</div>
											</EasypieChart>
										</div>
									</Col>
									<Col sm={3}>
										<div className="epc-item bgm-green">
											<EasypieChart link={this.state.spam.reference} className="easy-pie main-pie" data-percent={this.state.spam_percent} barcolor="#2196F3" trackcolor="#eee" scalecolor="#ccc" linewidth={4} linecap="butt" size={148}>
												<div className="percent">{this.state.spam_percent}</div>
												<div className="pie-title">Spam Mails</div>
											</EasypieChart>
										</div>
									</Col>
									<Col sm={3}>
										<div className="epc-item bgm-purple">
											<EasypieChart link={this.state.profit.reference} className="easy-pie main-pie" data-percent={this.state.profit_percent} barcolor="#2196F3" trackcolor="#eee" scalecolor="#ccc" linewidth={4} linecap="butt" size={148}>
												<div className="percent">{this.state.profit_percent}</div>
												<div className="pie-title">Profit Rate</div>
											</EasypieChart>
										</div>
									</Col>
								</Row>
							</div>
						</div>
					</Col>					
				</Row>
			</Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		sparkline: state.sparkline
	};
}

export default connect(mapStateToProps)(Chart);