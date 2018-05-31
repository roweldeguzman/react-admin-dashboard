import React, { Component, Fragment } from 'react'

import { Collapse } from 'react-bootstrap'
import { connect } from 'react-redux';

import { NavLink, Router } from 'react-router-dom'

import profile from '../assets/images/profile.jpeg'
import createBrowserHistory from 'history/createBrowserHistory'
import header from './header';
import Ripple from '../components/ripple'
import Scrollbar from '../components/scrollbar'
const sidebarHelper = require('../helper/sidebar').sidebarHelper
const helper = require('../helper/helper').helper


const history = createBrowserHistory()

class SideBar extends Component {
	constructor(props) {
		super(props);
		const extract_path = history.location.pathname.toString().split("/")
		this.state	=	{
			location: extract_path[1],
			profile: false,
			tables: extract_path[1] == "tables" ? true : false,
			widgets: extract_path[1] == "widgets" ? true : false,
			forms: extract_path[1] == "forms" ? true : false,
			"user-interface": extract_path[1] == "user-interface" ? true : false,
			gallery: extract_path[1] == "gallery" ? true : false,
			"sample-pages": extract_path[1] == "sample-pages" ? true : false,
			level_1: false,
			level_2: false,
			level_3: false,
			level_4: false
		}
	}
	componentWillReceiveProps(nextProps) {
		const extract_path = nextProps.state.toString().split("/")
		this.setState({
			location: extract_path[1]
		})
		
		this.resetState(extract_path[1])
	}

	dropheader(){
		this.setState({
			profile: !this.state.profile
		})
		setTimeout(() => {
			if (this.state.profile) {
				document.getElementById("for-scroll").scrollTop = "0px"
			}
		}, 10)
	}
	toggleSubmenu(event){
		let target = event.target.nodeName == "A" ? event.target : helper.parents("A", event.target);
		target.parentNode.classList.toggle("toggled")
		this.setState({
			[target.name]: !this.state[target.name]
		})
	}
	resetState(notInclude) {
		["tables", "widgets", "forms", "user-interface", "gallery", "pages", "level_1", "level_2", "level_3", "level_4"].forEach((e, i) => {
			if (e != notInclude) {
				this.setState({
					[e]: false
				})
			}
		})
		
	}
	setScrollerRef(ref) {}
	render() {
		return (
			<Fragment>
				<aside id="sidebarContainer">
					<Ripple type="div" className="aside-profile" onClick={this.dropheader.bind(this)}>
						<img src={profile}/>
						<div className="labeled">
							<div className="name ellipsis">Rowel de Guzman</div>
							<div className="email ellipsis">rowel.deguzman@roweldev.com</div>
						</div>
						<div className="header-dropdown-icon">
							<i className={`${this.state.profile ? "rotate" : ""} zmdi zmdi-chevron-down zmdi-hc-fw`}></i>
						</div>
					</Ripple>
					<Scrollbar type="nav" id="for-scroll" recieveRef={this.setScrollerRef} >
						<ul className="list-unstyled">
							<Collapse in={this.state.profile}>
								<div className="aside-dropdown">
									<ul className="list-unstyled">
										<li>
											<a>
												<i className="zmdi zmdi-account"></i>
												<span>Profile</span>
											</a>
										</li>
										<li>
											<a>
												<i className="zmdi zmdi-swap"></i>
												<span>Switch account</span>
											</a>
										</li>
										<li>
											<a>
												<i className="zmdi zmdi-time-restore"></i>
												<span>Logout</span>
											</a>
										</li>
									</ul>
								</div>
							</Collapse>
							<li>
								<NavLink to={`/`} activeClassName="active" exact strict={true}>
									<div className="icon-circle">
										<i className="zmdi zmdi-home"></i>
									</div><span>Home</span>
								</NavLink>
							</li>
							<li>
								<NavLink to={`/typography`} activeClassName="active" strict>
									<div className="icon-circle">
										<i className="zmdi zmdi-format-underlined"></i>
									</div><span>Typography</span>
								</NavLink>
							</li>
							<li className={`${this.state.widgets ? "toggled" : ""} sub-menu`}>
								
								<a className={`${this.state.widgets && this.state.location == "widgets" ? "active" : ""} `} onClick={(e) => { this.toggleSubmenu(e) }} name="widgets">
									<div className="icon-circle">
										<i className="zmdi zmdi-lamp"></i>
									</div><span>Widgets</span>
								</a>
								<Collapse in={ this.state.widgets } >
									<ul className="list-unstyled">
										<li>
											<NavLink className="sub" to={`/widgets/template`} activeClassName="active">Templates</NavLink>
										</li>
										<li>
											<NavLink className="sub" to={`/widgets/widget`} activeClassName="active">Widgets</NavLink>
										</li>
									</ul>
								</Collapse>
							</li>
							<li className={`${this.state.tables ? "toggled" : ""} sub-menu`}>
								<a className={`${this.state.tables && this.state.location == "tables" ? "active" : ""} `} onClick={(e) => { this.toggleSubmenu(e) }} name="tables">
									<div className="icon-circle">
										<i className="zmdi zmdi-dialpad"></i>
									</div><span>Tables</span>
								</a>
								<Collapse in={ this.state.tables }>
									<ul className="list-unstyled">
										<li>
											<NavLink className="sub" to={`/tables/table`} activeClassName="active">Tables</NavLink>
										</li>
										<li>
											<NavLink className="sub" to={`/tables/data-table`} >Data Tables</NavLink>
										</li>
									</ul>
								</Collapse>
							</li>
							<li className={`${this.state.forms  ? "toggled" : ""} sub-menu`}>
								<a className={`${this.state.forms && this.state.location == "forms" ? "active" : ""} `} onClick={(e) => { this.toggleSubmenu(e) }} name="forms">
									<div className="icon-circle">
										<i className="zmdi zmdi-badge-check"></i>
									</div><span>Forms</span>
								</a>
								<Collapse in={ this.state.forms }>
									<ul className="list-unstyled">
										<li>
											<NavLink className="sub" to={`/forms/form-basic`} activeClassName="active">Basic Form Elements</NavLink>
										</li>
										<li>
											<NavLink className="sub" to={`/forms/form-component`} activeClassName="active">Form Components</NavLink>
										</li>
										<li>
											<NavLink className="sub" to={`/forms/form-example`} activeClassName="active">Form Example</NavLink>
										</li>
										<li>
											<NavLink className="sub" to={`/forms/form-validation`} activeClassName="active">Form Validation</NavLink>
										</li>
									</ul>
								</Collapse>
							</li>
							<li className={`${this.state["user-interface"] ? "toggled" : ""} sub-menu`}>
								<a className={`${this.state["user-interface"] && this.state.location == "user-interface" ? "active" : ""} `} onClick={(e) => { this.toggleSubmenu(e) }} name="user-interface">
									<div className="icon-circle">
										<i className="zmdi zmdi-desktop-mac"></i>
									</div><span>UI Elements</span>
								</a>
								<Collapse in={this.state["user-interface"]}>
									<ul className="list-unstyled">
										<li>
											<NavLink className="sub" to={`/user-interface/bootstrap`} activeClassName="active">UI Bootstrap</NavLink>
										</li>
										<li>
											<NavLink className="sub" to={`/user-interface/color`} activeClassName="active">Colors</NavLink>
										</li>
										<li>
											<NavLink className="sub" to={`/user-interface/animation`} activeClassName="active">Animation</NavLink>
										</li>
										<li>
											<NavLink className="sub" to={`/user-interface/box-shadow`} activeClassName="active">Box Shadow</NavLink>
										</li>
										<li>
											<NavLink className="sub" to={`/user-interface/button`} activeClassName="active">Buttons</NavLink>
										</li>
										<li>
											<NavLink className="sub" to={`/user-interface/icon`} activeClassName="active">Icons</NavLink>
										</li>
										<li>
											<NavLink className="sub" to={`/user-interface/alert`} activeClassName="active">Alerts</NavLink>
										</li>
										<li>
											<NavLink className="sub" to={`/user-interface/dialog`} activeClassName="active">Notifications & Dialogs</NavLink>
										</li>
										<li>
											<NavLink className="sub" to={`/user-interface/media`} activeClassName="active">Media</NavLink>
										</li>
										<li>
											<NavLink className="sub" to={`/user-interface/modal`} activeClassName="active">Modal</NavLink>
										</li>
										<li>
											<NavLink className="sub" to={`/user-interface/modal`} activeClassName="active">Custom Component</NavLink>
										</li>
									</ul>
								</Collapse>
							</li>
							<li>
								<NavLink to={`/charts`} strict>
									<div className="icon-circle">
										<i className="zmdi zmdi-trending-up"></i>
									</div><span>Charts</span>
								</NavLink>
							</li>
							<li className="sub-menu">
								<a onClick={(e) => { this.toggleSubmenu(e) }} name="gallery">
									<div className="icon-circle">
										<i className="zmdi zmdi-image-alt"></i>
									</div><span>Photo Gallery</span>
								</a>
								<Collapse in={this.state.gallery}>
									<ul className="list-unstyled">
										<li>
											<a className="sub">Default</a>
										</li>
										<li>
											<a className="sub">Timeline</a>
										</li>
									</ul>
								</Collapse>
							</li>
							<li>
								<NavLink to={`/utilities`} strict>
									<div className="icon-circle">
										<i className="zmdi zmdi-layers"></i>
									</div><span>Utilities</span>
								</NavLink>
							</li>
							<li className={`${this.state["sample-pages"] ? "toggled" : ""} sub-menu`}>
								<a className={`${this.state["sample-pages"] && this.state.location == "sample-pages" ? "active" : ""} `} onClick={(e) => { this.toggleSubmenu(e) }} name="sample-pages">
									<div className="icon-circle">
										<i className="zmdi zmdi-collection-bookmark"></i>
									</div><span>Pages</span>
								</a>
								<Collapse in={this.state["sample-pages"]}>
									<ul className="list-unstyled">
										<li>
											<NavLink className="sub" to={`/sample-pages/profile`} activeClassName="active">Profile</NavLink>
										</li>
										<li>
											<NavLink className="sub" to={`/sample-pages/list-view`} activeClassName="active">List View</NavLink>
										</li>
										<li>
											<NavLink className="sub" to={`/sample-pages/pricing-table`} activeClassName="active">Pricing Table</NavLink>
										</li>
										<li className="hidden">
											<a className="sub">Contacts</a>
										</li>
										<li className="hidden">
											<a className="sub">Invoice</a>
										</li>
										<li className="hidden">
											<a className="sub">Wall</a>
										</li>
										<li>
											<NavLink className="sub" to={`/login`}>Login</NavLink>
										</li>
										<li>
											<NavLink className="sub" to={`/signup`}>Sign Up</NavLink>
										</li>
										<li>
											<NavLink className="sub" to={`/forgot-password`}>Forgot Password</NavLink>
										</li>
										<li>
											<a className="sub">Login 2 and Sign Up 2 </a>
										</li>
										<li>
											<a className="sub" >Lock Screen</a>
										</li>
										<li>
											<a className="sub">Error 404</a>
										</li>
									</ul>
								</Collapse>
							</li>
							<li className="sub-menu">
								<a onClick={(e) => { this.toggleSubmenu(e) }} name="level_1">
									<div className="icon-circle">
										<i className="zmdi zmdi-menu"></i>
									</div><span>Multi level menu</span>
								</a>
								<Collapse in={this.state.level_1}>
									<ul className="list-unstyled">
										<li><a className="sub">Level 2</a></li>
										<li><a className="sub">Level 2</a></li>
										<li className="sub-menu multiple">
											<a onClick={(e) => { this.toggleSubmenu(e) }} className="sub" name="level_2">Level 3</a>
											<Collapse in={this.state.level_2}>
												<ul className="list-unstyled">
													<li><a className="sub">Level 3</a></li>
													<li><a className="sub">Level 3</a></li>
													<li className="sub-menu multiple">
														<a onClick={(e) => { this.toggleSubmenu(e) }} className="sub" name="level_3">Level 4</a>
														<Collapse in={this.state.level_3 }>
															<ul className="list-unstyled">
																<li><a className="sub">Level 4</a></li>
																<li><a className="sub">Level 4</a></li>
																<li className="sub-menu multiple">
																	<a onClick={(e) => { this.toggleSubmenu(e) }} className="sub" name="level_4">Level 5</a>
																	<Collapse in={this.state.level_4}>
																		<ul className="list-unstyled">
																			<li><a className="sub">Level 6</a></li>
																			<li><a className="sub">Level 6...</a></li>
																		</ul>
																	</Collapse>
																</li>
															</ul>
														</Collapse>
													</li>
												</ul>
											</Collapse>
										</li>
									</ul>
								</Collapse>
							</li>
							<li>
								<a href="https://github.com/roweldeguzman/react-admin-dashboard" target="_blank">
									<div className="icon-circle">
										<i className="zmdi zmdi-shopping-cart"></i>
									</div><span>Want it</span>
								</a>
							</li>
							<li>
								<a href="https://paypal.me/ngxAdminDashboard" target="_blank">
									<div className="icon-circle">
										<i className="zmdi zmdi-money"></i>
									</div><span>Donate</span>
								</a>
							</li>
						</ul>
						<div className="bottom-collapser">
							<div className="bottom-toggler" onClick={ sidebarHelper.expandNav } >
								<i className="zmdi zmdi-chevron-right"></i>
							</div>
						</div>
					</Scrollbar>
				</aside>
				<div className="overlay" onClick={sidebarHelper.expandNavHead} ></div>
			</Fragment>
		);
	}
}
function mapStateToProps(state) {
	return {
		users: state.users
	};
}
export default connect(mapStateToProps)(SideBar)