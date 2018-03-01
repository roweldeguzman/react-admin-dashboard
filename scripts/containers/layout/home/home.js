import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux';

const config = require("../../../helper/config").config

import Input from '../../../components/input'
import Sparkline from '../../../components/sparkline'
import ModuleHeader from '../../../common/module-header'
import Ripple from '../../../components/ripple'

import { Row, Col, Alert, NavDropdown, MenuItem, } from 'react-bootstrap'

import samsungImg from '../../../assets/img/widgets/alpha.jpg'
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			show: false,
			bestSelling: [
				{
					"id": 1,
					"img": "note4.jpg",
					"name": "Samsung Galaxy Note 4",
					"range": "$850.00 - $1199.99"
				}, {
					"id": 2,
					"img": "mate7.jpg",
					"name": "Huawei Ascend Mate",
					"range": "$649.59 - $749.99"
				}, {
					"id": 3,
					"img": "535.jpg",
					"name": "Nokia Lumia 535",
					"range": "$189.99 - $250.00"
				}
			],
			resentItems: [
				{
					"id": 2569,
					"name": "Samsung Galaxy Mega",
					"price": 521
				}, {
					"id": 9658,
					"name": "Huawei Ascend P6",
					"price": 440
				}, {
					"id": 1101,
					"name": "HTC One M8",
					"price": 680
				}, {
					"id": 2569,
					"name": "Samsung Galaxy Alpha",
					"price": 870
				}, {
					"id": 6598,
					"name": "LG G3",
					"price": 690
				}
			]
		}
		this.sparkline = this.props.sparkline;
		this.setAction = this.setAction.bind(this);
		this.changeValue = this.changeValue.bind(this);
	}
	getAction(ev) {
		this.setState({
			bar1: [7, 7, 6, 2, 5, 3, 8, 6, 6, 4, 8, 6, 5, 8, 2, 4, 7]
		})
		let aa = new URLSearchParams(
			Object.entries({
				name: "Rowel de Guzman",
				"a": "b",
				"c": "d"
			})
		).toString()
		console.log(aa)
		fetch("http://127.0.0.1:8000/howdy/test/?" + aa)
			.then(res => res.json())
			.then((result) => {
				console.log(result)
			}, (error) => {
				console.log(error)
			})
			.catch((e) => {
				console.log(e)
			})
	}
	setAction(ev) {
		fetch("http://127.0.0.1:8000/howdy/post/", {
			method: "POST",
			headers: {
				'X-CSRFToken': 'ItpdY2t6pBWXpN1Rx0V8fYROCgpj3ClYB24Q72Vow6nme6CYLrPhyqzIdpkg3vAc',
				'X-Requested-With': 'XMLHttpRequest',
				'Content-Type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify({
				firstParam: 'yourValue',
				secondParam: 'yourOtherValue',
			})
		})
			.then(res => res.json())
			.then((result) => {
				console.log(result)
			}, (error) => {
				console.log(error)
			})
			.catch((e) => {
				console.log(e)
			})
	}
	changeValue(event) {
		const name = event.target.name
		this.setState({
			[name]: event.target.value
		})
	}
	render() {
		/* Sparkline is from reducer */
		const { sparkline } = this.props
		return (
			<Fragment>
				<ModuleHeader text="Overview"/>
				<div className="row">
					<div className="col-sm-12">
						<div className="mini-charts">
							<div className="row">
								<div className="col-sm-6 col-md-3">
									<div className="mini-charts-item bgm-cyan">
										<div className="clearfix">
											<Sparkline className="chart stats-bar" type="bar" value={sparkline.bar1}/>
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
											<Sparkline className="chart stats-bar-2" type="bar" value={sparkline.bar2}/>
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
											<Sparkline className="chart stats-line" type="line" value={sparkline.bar3} width="85px" height="45"/>
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
											<Sparkline className="chart stats-line-2" type="line" value={sparkline.bar4} width="85px" height="45"/>
											<div className="count">
												<small>Support Tickets</small>
												<h2>23,856</h2>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="dash-widgets">
							<Row>
								<Col sm={6} md={3}>
									<div id="site-visits" className="dash-widget-item bgm-teal">
										<div className="dash-widget-header">
											<div className="p-20">
												<Sparkline className="chart stats-line-2" type="line" value={sparkline.bar3} width="100%" height="95px" />
											</div>
											<div className="dash-widget-title">For the past 30 days</div>
											<ul className="actions actions-alt">
												<NavDropdown eventKey={1} title={<i className="zmdi zmdi-more-vert"></i>} className="pull-right" noCaret id="dropdown-action">
													<MenuItem className="dropdown-arrow"></MenuItem>
													<MenuItem>You can add anything here</MenuItem>
												</NavDropdown>
											</ul>
										</div>
										<div className="p-20">
											<small>Page Views</small>
											<h3 className="m-0 f-400">47,896,536</h3>
											<br />
											<small>Site Visitors</small>
											<h3 className="m-0 f-400">24,456,799</h3>
											<br />
											<small>Total Clicks</small>
											<h3 className="m-0 f-400">13,965</h3>
										</div>
									</div>
								</Col>
								<Col sm={6} md={3}>
									<div id="best-selling" className="dash-widget-item">
										<div className="dash-widget-header">
											<div className="dash-widget-title">Best Sellings</div>
											<img src={samsungImg} alt=""/>
											<div className="main-item">
												<small>Samsung Galaxy Alpha</small>
												<h2>$799.99</h2>
											</div>
										</div>
										<div className="listview p-t-5">
											{this.state.bestSelling.map((item, i) =>
												<a className="lv-item" key={i}>
													<div className="media">
														<div className="pull-left">
															<img className="lv-img-sm" src={`${config.asset_url}/assets/img/widgets/${item.img}`}/>
														</div>
														<div className="media-body">
															<div className="lv-title">{item.name}</div>
															<small className="lv-small">{item.range}</small>
														</div>
													</div>
												</a>
											)}
											<div className="clearfix"></div>
											<a className="lv-footer">View All</a>
										</div>
									</div>
								</Col>
								<Col sm={12} md={6} lg={6}>
									<div className="card">
										<div className="card-header bgm-teal">
											<h2>Recent Items
												<small>Phasellus condimentum ipsum id auctor imperdie</small>
											</h2>
											<ul className="actions">
												<NavDropdown eventKey={1} title={<i className="zmdi zmdi-more-vert"></i>} className="pull-right" noCaret id="dropdown-action">
													<MenuItem className="dropdown-arrow"></MenuItem>
													<MenuItem>Refresh</MenuItem>
													<MenuItem>Settings</MenuItem>
													<MenuItem>Other Settings</MenuItem>
												</NavDropdown>
											</ul>
										</div>
										<div className="card-body m-t-0">
											<table className="table table-inner table-vmiddle">
												<thead>
													<tr>
														<th>ID</th>
														<th>Name</th>
														<th style={{ width: "60px"}}>Price</th>
													</tr>
												</thead>
												<tbody>
													{this.state.resentItems.map((item, i) =>(
														<tr key={i}>
															<td className="f-500 c-cyan">{item.id}</td>
															<td>{item.name}</td>
															<td className="f-500 c-cyan">{item.price}</td>
														</tr>
													))}
												</tbody>
											</table>
										</div>
									</div>
								</Col>
							</Row>
						</div>



						<div className="form-group">
							<Input className="form-control input-sm" placeholder="Input Small" name="firstName" onChange={this.changeValue} />
						</div>
						<div className="form-group">
							<Input className="form-control input-sm" placeholder="Input Small" name="lastName" onChange={this.changeValue} />
						</div>
						<div className="form-group">
							<Ripple type="button" className="btn btn-primary" onClick={(e) => this.getAction(e)}>
								<span>GET REQUEST</span>
							</Ripple>&nbsp;

							<Ripple type="button" className="btn btn-primary" onClick={(e) => this.setAction(e)}>
								<span>POST REQUEST</span>
							</Ripple>
							<Alert onDismiss={this.dismiss}>
								<strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
							</Alert>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}
function mapStateToProps(state) {
	return {
		sparkline: state.sparkline
	};
}
// function matchDispatchToProps(dispatch) {
// 	return bindActionCreators({ selectUser: selectUser }, dispatch);
// }

export default connect(mapStateToProps)(Home);