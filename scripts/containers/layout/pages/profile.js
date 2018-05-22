import React, { Component } from 'react'

import { Row, Col, Tab } from 'react-bootstrap';

import Ripple from '../../../components/ripple';

const config = require("../../../helper/config").config;

export default class Profile extends Component {
	constructor(props){
		super(props)

		this.selectTab = this.selectTab.bind(this)
		this.state = {
			tab: 1
		}
	}
	selectTab(tab){
		this.setState({
			tab: tab
		});
	}
	render() {
		return(
			<Row>
				<Col sm={12}>
					<div className="profile">
						<div className="profile-banner">
							<Ripple type="div" className="banner-left" style={{ "backgroundImage": `url(${config.asset_url}/assets/images/profile.jpeg)` }}>
								<Ripple type="div" className="edit-container">								
									<i className="zmdi zmdi-edit"></i>
								</Ripple>
								<div className="profile-bottom-container">
									<h4 className="c-white">Rowel de Guzman</h4>
									<Ripple type="button" className="btn btn-default btn-sm">									
										<i className="zmdi zmdi-plus"></i>
										<span className="hidden-xs"> Add Friend</span>									
									</Ripple>
								</div>
							</Ripple>
							<Ripple type="div" className="banner-right" style={{ "backgroundImage": `url(${config.asset_url}/assets/img/cal-header.jpg)` }}>
								<Ripple type="div" className="edit-container">								
									<i className="zmdi zmdi-edit"></i>
								</Ripple>
							</Ripple>
						</div>
						<div className="left-pane">
							<ul className="list-unstyled profile-navigator">
								<Ripple type="li">
									<a className={`${this.state.tab == 1 ? "active" : ""}`} onClick={() => { this.selectTab(1) }}>Me</a>
								</Ripple>
								<Ripple type="li">
									<a className={`${this.state.tab == 2 ? "active" : ""}`} onClick={() => { this.selectTab(2) }}>Message</a>
								</Ripple>
								<Ripple type="li">
									<a className={`${this.state.tab == 3 ? "active" : ""}`} onClick={() => { this.selectTab(3) }}>Notifications</a>
								</Ripple>
								<Ripple type="li">
									<a className={`${this.state.tab == 4 ? "active" : ""}`} onClick={() => { this.selectTab(4) }}>Contact</a>
								</Ripple>
							</ul>
						</div>
						{this.state.tab == 1  ?
							<div className="right-pane">
								<div className="extra-nav">
									<ul className="list-unstyled">
										<Ripple type="li">									
											<a>
												<i className="zmdi zmdi-search"></i>
												Search
											</a>
										</Ripple>
										<Ripple type="li">
											<a className="active">
												<span>3,550</span>
												Photos
											</a>
										</Ripple>
										<Ripple type="li">
											<a>
												<span>7,954</span>
												Following
											</a>
										</Ripple>
										<Ripple type="li">
											<a>
												<span>2.17M</span>
												Followers
											</a>
										</Ripple>
										<Ripple type="li">
											<a>
												<span>3,084</span>
												Favorites
											</a>
										</Ripple>
										<Ripple type="li">
											<a>
												<i className="zmdi zmdi-more"></i>
												More
											</a>
										</Ripple>
									</ul>
								</div>
								<div className="profile-container">
									<div className="profile-header">
										<h2>Bio</h2>
									</div>
									<div className="profile-body">
										<div className="profile-view">
											Sed eu est vulputate, fringilla ligula ac, maximus arcu. Donec sed felis vel magna mattis ornare ut non turpis. Sed id arcu
											elit. Sed nec sagittis tortor. Mauris ante urna, ornare sit amet mollis eu, aliquet ac ligula. Nullam dolor metus, suscipit
											ac imperdiet nec, consectetur sed ex. Sed cursus porttitor leo.
										</div>
									</div>
								</div>
								<div className="profile-container">
									<div className="profile-header">
										<h2>Basic Information</h2>
									</div>
									<div className="profile-body">
										<div className="profile-view">
											<dl>
												<dt>Full Name</dt>
												<dd>Rowel de Guzman</dd>
											</dl>
											<dl>
												<dt>Gender</dt>
												<dd>Female</dd>
											</dl>
											<dl>
												<dt>Birthday</dt>
												<dd>Aug. 24, 1992</dd>
											</dl>
											<dl>
												<dt>Martial Status</dt>
												<dd>Single</dd>
											</dl>
											<dl>
												<dt>Address</dt>
												<dd>Rodriguez (Montalban), Rizal, Philippines</dd>
											</dl>
										</div>
									</div>
								</div>
								<div className="profile-container">
									<div className="profile-header">
										<h2>Contact Information</h2>
									</div>
									<div className="profile-body">
										<div className="profile-view">
											<dl>
												<dt>Mobile Phone</dt>
												<dd>0926-673-3656</dd>
											</dl>
											<dl>
												<dt>Email Address</dt>
												<dd>rowel.deguzman@roweldev.com</dd>
											</dl>
											<dl>
												<dt>Facebook</dt>
												<dd>fb.com/rowel.deguzman</dd>
											</dl>
											<dl>
												<dt>Skype</dt>
												<dd>rowel.deguzman</dd>
											</dl>
										</div>
									</div>
								</div>
							</div> : ""
						}
						{this.state.tab == 2 ? 
							<div className="right-pane"></div> : ""
						}
						{this.state.tab == 3 ?
							<div className="right-pane"></div> : ""
						}
						{this.state.tab == 4 ?
							<div className="right-pane"></div> : ""
						}
					</div>
				</Col>
			</Row>
		)
	}
}