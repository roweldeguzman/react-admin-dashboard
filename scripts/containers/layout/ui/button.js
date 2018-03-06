import React, { Component, Fragment } from 'react'
import ModuleHeader from '../../../common/module-header';
import Ripple from '../../../components/ripple';
import { Row, Col, ButtonToolbar, Dropdown, MenuItem } from 'react-bootstrap';

const btn_stye = {
	margin: "0 5px 10px 0"
}
export default class UIButton extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Fragment>
				<ModuleHeader text="Button"/>
				<Ripple type="button" className="btn btn-primary btn-float mat-btn">
					<i className="zmdi zmdi-plus"></i>
				</Ripple>
				<Row>
					<Col sm={12}>
						<div className="card">
							<div className="card-header">
								<h2>Basic Examples
									<small>Use any of the available button classes to quickly create a styled button.</small>
								</h2>
							</div>

							<div className="card-body card-padding">
								<p className="c-black m-b-20">Bootstrap Color Schemes</p>
								<Ripple type="button" className="btn btn-default" >Default</Ripple>&nbsp;
								<Ripple type="button" className="btn btn-info" >Info</Ripple>&nbsp;
								<Ripple type="button" className="btn btn-primary" >Primary</Ripple>&nbsp;
								<Ripple type="button" className="btn btn-success" >Success</Ripple>&nbsp;
								<Ripple type="button" className="btn btn-warning" >Warning</Ripple>&nbsp;
								<Ripple type="button" className="btn btn-danger" >Danger</Ripple>
								<p className="c-black m-b-20">Optional Material Design Colors</p>
								<div className="btn-colors btn-demo">
									<Ripple type="button" className="btn bgm-cyan" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Cyan</Ripple>
									<Ripple type="button" className="btn bgm-teal" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Teal</Ripple>
									<Ripple type="button" className="btn bgm-amber" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Amber</Ripple>
									<Ripple type="button" className="btn bgm-orange" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Orange</Ripple>
									<Ripple type="button" className="btn bgm-deeporange" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Deep Orange</Ripple>
									<Ripple type="button" className="btn bgm-red" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Red</Ripple>
									<Ripple type="button" className="btn bgm-pink" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Pink</Ripple>
									<Ripple type="button" className="btn bgm-lightblue" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Light Blue</Ripple>
									<Ripple type="button" className="btn bgm-blue" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Blue</Ripple>
									<Ripple type="button" className="btn bgm-indigo" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Indigo</Ripple>
									<Ripple type="button" className="btn bgm-lime" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Lime</Ripple>
									<Ripple type="button" className="btn bgm-lightgreen" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Light Green</Ripple>
									<Ripple type="button" className="btn bgm-green" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Green</Ripple>
									<Ripple type="button" className="btn bgm-purple" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Purple</Ripple>
									<Ripple type="button" className="btn bgm-deeppurple" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Deep Purple</Ripple>
									<Ripple type="button" className="btn bgm-gray" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Gray</Ripple>
									<Ripple type="button" className="btn bgm-bluegray" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Blue Gray</Ripple>
									<Ripple type="button" className="btn bgm-black" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Black</Ripple>
								</div>
								<p className="c-black m-b-20">Button Sizes</p>
								<small>Fancy larger or smaller buttons? Add the button sizing classes. </small>
								<div>
									<Ripple type="button" className="btn btn-primary btn-lg" style={btn_stye}>Large</Ripple>
									<Ripple type="button" className="btn btn-primary" style={btn_stye}>Default</Ripple>
									<Ripple type="button" className="btn btn-primary btn-sm" style={btn_stye}>Small</Ripple>
									<Ripple type="button" className="btn btn-primary btn-xs" style={btn_stye}>Extra Small</Ripple>
								</div>
								<p className="c-black m-b-20">Disable Stat</p>
								<div>
									<Ripple type="button" className="btn btn-default" disabled="disabled" style={btn_stye}>Default </Ripple>
									<Ripple type="button" className="btn btn-info" disabled="disabled" style={btn_stye}>INFO </Ripple>
									<Ripple type="button" className="btn btn-primary" disabled="disabled" style={btn_stye}>Primary </Ripple>
									<Ripple type="button" className="btn btn-success" disabled="disabled" style={btn_stye}>Success </Ripple>
									<Ripple type="button" className="btn btn-warning" disabled="disabled" style={btn_stye}>Warning </Ripple>
									<Ripple type="button" className="btn btn-danger" disabled="disabled" style={btn_stye}>Danger </Ripple>
									
								</div>
							</div>
						</div>

						<div className="card">
							<div className="card-header">
								<h2>Button Icons
									<small>You can refer the Icons page for the complete list of Font Icons which are inspired by Material Design</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<div className="btn-demo">
									<Ripple type="button" className="btn btn-default btn-icon-text" style={btn_stye}>
										<i className="zmdi zmdi-home" />Home
									</Ripple>
									<Ripple type="button" className="btn btn-default btn-icon-text" style={btn_stye}>
										<i className="zmdi zmdi-search" /> Search
									</Ripple>
									<Ripple type="button" className="btn btn-default btn-icon-text" style={btn_stye}>
										<i className="zmdi zmdi-more-vert" /> More
									</Ripple>
									<Ripple type="button" className="btn btn-default btn-icon-text" style={btn_stye}>
										<i className="zmdi zmdi-arrow-forward" /> Forward
									</Ripple>
									<Ripple type="button" className="btn btn-default btn-icon-text" style={btn_stye}>
										<i className="zmdi zmdi-arrow-back" /> Back
									</Ripple>
									<Ripple type="button" className="btn btn-default btn-icon-text" style={btn_stye}>
										<i className="zmdi zmdi-refresh" /> Sync
									</Ripple>
									<Ripple type="button" className="btn btn-default btn-icon-text" style={btn_stye}>
										<i className="zmdi zmdi-check" /> Check
									</Ripple>
									<Ripple type="button" className="btn btn-default btn-icon-text" style={btn_stye}>
										<i className="zmdi zmdi-close" /> Check
									</Ripple>
									<Ripple type="button" className="btn btn-default btn-icon-text" style={btn_stye}>
										<i className="zmdi zmdi-menu" /> Menu
									</Ripple>
									<Ripple type="button" className="btn btn-default btn-icon-text" style={btn_stye}>
										<i className="zmdi zmdi-apps" /> Apps
									</Ripple>
									<Ripple type="button" className="btn btn-default btn-icon-text" style={btn_stye}>
										<i className="zmdi zmdi-check-all" /> Done
									</Ripple>
									<Ripple type="button" className="btn btn-default btn-icon-text" style={btn_stye}>
										<i className="zmdi zmdi-trending-up" /> Up
									</Ripple>
									<Ripple type="button" className="btn btn-default btn-icon-text" style={btn_stye}>
										<i className="zmdi zmdi-apps" /> Get
									</Ripple>
									<Ripple type="button" className="btn btn-default btn-icon-text" style={btn_stye}>
										<i className="zmdi zmdi-phone" /> Call
									</Ripple>
									<br/>
									<br/>
									<br/>
									<Ripple type="button" className="btn btn-default" style={btn_stye}>
										<i className="zmdi zmdi-home" />
									</Ripple>
									<Ripple type="button" className="btn btn-default" style={btn_stye}>
										<i className="zmdi zmdi-search" />
									</Ripple>
									<Ripple type="button" className="btn btn-default" style={btn_stye}>
										<i className="zmdi zmdi-more-vert" />
									</Ripple>
									<Ripple type="button" className="btn btn-default" style={btn_stye}>
										<i className="zmdi zmdi-arrow-forward" />
									</Ripple>
									<Ripple type="button" className="btn btn-default" style={btn_stye}>
										<i className="zmdi zmdi-arrow-back" />
									</Ripple>
									<Ripple type="button" className="btn btn-default" style={btn_stye}>
										<i className="zmdi zmdi-refresh" />
									</Ripple>
									<Ripple type="button" className="btn btn-default" style={btn_stye}>
										<i className="zmdi zmdi-check"/>
									</Ripple>
									<Ripple type="button" className="btn btn-default" style={btn_stye}>
										<i className="zmdi zmdi-close" />
									</Ripple>
									<Ripple type="button" className="btn btn-default" style={btn_stye}>
										<i className="zmdi zmdi-menu" />
									</Ripple>
									<Ripple type="button" className="btn btn-default" style={btn_stye}>
										<i className="zmdi zmdi-apps" />
									</Ripple>
									<Ripple type="button" className="btn btn-default" style={btn_stye}>
										<i className="zmdi zmdi-check-all" />
									</Ripple>
									<Ripple type="button" className="btn btn-default" style={btn_stye}>
										<i className="zmdi zmdi-trending-up" />
									</Ripple>
									<Ripple type="button" className="btn btn-default" style={btn_stye}>
										<i className="zmdi zmdi-apps" />
									</Ripple>
									<Ripple type="button" className="btn btn-default" style={btn_stye}>
										<i className="zmdi zmdi-phone"/>
									</Ripple>
									<br />
									<br />
									<br />
									<Ripple type="button" className="btn btn-primary" style={btn_stye}>
										<i className="zmdi zmdi-home" />
									</Ripple>
									<Ripple type="button" className="btn btn-info" style={btn_stye}>
										<i className="zmdi zmdi-search" />
									</Ripple>
									<Ripple type="button" className="btn btn-success" style={btn_stye}>
										<i className="zmdi zmdi-more-vert" />
									</Ripple>
									<Ripple type="button" className="btn btn-warning" style={btn_stye}>
										<i className="zmdi zmdi-arrow-forward" />
									</Ripple>
									<Ripple type="button" className="btn btn-danger" style={btn_stye}>
										<i className="zmdi zmdi-arrow-back" />
									</Ripple>
									<Ripple type="button" className="btn bgm-teal" style={btn_stye}>
										<i className="zmdi zmdi-refresh" />
									</Ripple>
									<Ripple type="button" className="btn bgm-orange" style={btn_stye}>
										<i className="zmdi zmdi-check" />
									</Ripple>
									<Ripple type="button" className="btn bgm-cyan" style={btn_stye}>
										<i className="zmdi zmdi-close" />
									</Ripple>
									<Ripple type="button" className="btn bgm-lightgreen" style={btn_stye}>
										<i className="zmdi zmdi-menu" />
									</Ripple>
									<Ripple type="button" className="btn bgm-lime" style={btn_stye}>
										<i className="zmdi zmdi-apps" />
									</Ripple>
									<Ripple type="button" className="btn bgm-amber" style={btn_stye}>
										<i className="zmdi zmdi-check-all" />
									</Ripple>
									<Ripple type="button" className="btn bgm-gray" style={btn_stye}>
										<i className="zmdi zmdi-trending-up" />
									</Ripple>
									<Ripple type="button" className="btn bgm-lightblue" style={btn_stye}>
										<i className="zmdi zmdi-apps" />
									</Ripple>
									<Ripple type="button" className="btn bgm-deeporange" style={btn_stye}>
										<i className="zmdi zmdi-phone" />
									</Ripple>
									<br />
									<br />
									<br />
									<Ripple type="button" className="btn btn-default btn-icon" style={btn_stye}>
										<i className="zmdi zmdi-home" />
									</Ripple>
									<Ripple type="button" className="btn btn-default btn-icon" style={btn_stye}>
										<i className="zmdi zmdi-search" />
									</Ripple>
									<Ripple type="button" className="btn btn-default btn-icon" style={btn_stye}>
										<i className="zmdi zmdi-more-vert" />
									</Ripple>
									<Ripple type="button" className="btn btn-default btn-icon" style={btn_stye}>
										<i className="zmdi zmdi-arrow-forward" />
									</Ripple>
									<Ripple type="button" className="btn btn-default btn-icon" style={btn_stye}>
										<i className="zmdi zmdi-arrow-back" />
									</Ripple>
									<Ripple type="button" className="btn btn-default btn-icon" style={btn_stye}>
										<i className="zmdi zmdi-refresh" />
									</Ripple>
									<Ripple type="button" className="btn btn-default btn-icon" style={btn_stye}>
										<i className="zmdi zmdi-check" />
									</Ripple>
									<Ripple type="button" className="btn btn-default btn-icon" style={btn_stye}>
										<i className="zmdi zmdi-close" />
									</Ripple>
									<Ripple type="button" className="btn btn-default btn-icon" style={btn_stye}>
										<i className="zmdi zmdi-menu" />
									</Ripple>
									<Ripple type="button" className="btn btn-default btn-icon" style={btn_stye}>
										<i className="zmdi zmdi-apps" />
									</Ripple>
									<Ripple type="button" className="btn btn-default btn-icon" style={btn_stye}>
										<i className="zmdi zmdi-check-all" />
									</Ripple>
									<Ripple type="button" className="btn btn-default btn-icon" style={btn_stye}>
										<i className="zmdi zmdi-trending-up" />
									</Ripple>
									<Ripple type="button" className="btn btn-default btn-icon" style={btn_stye}>
										<i className="zmdi zmdi-apps" />
									</Ripple>
									<Ripple type="button" className="btn btn-default btn-icon" style={btn_stye}>
										<i className="zmdi zmdi-phone" />
									</Ripple>
									<br />
									<br />
									<br />
									<Ripple type="button" className="btn btn-primary btn-icon" style={btn_stye}>
										<i className="zmdi zmdi-home" />
									</Ripple>
									<Ripple type="button" className="btn btn-info btn-icon" style={btn_stye}>
										<i className="zmdi zmdi-search" />
									</Ripple>
									<Ripple type="button" className="btn btn-success btn-icon" style={btn_stye}>
										<i className="zmdi zmdi-more-vert" />
									</Ripple>
									<Ripple type="button" className="btn btn-warning btn-icon" style={btn_stye}>
										<i className="zmdi zmdi-arrow-forward" />
									</Ripple>
									<Ripple type="button" className="btn btn-danger btn-icon" style={btn_stye}>
										<i className="zmdi zmdi-arrow-back" />
									</Ripple>
									<Ripple type="button" className="btn bgm-teal btn-icon" style={btn_stye}>
										<i className="zmdi zmdi-refresh" />
									</Ripple>
									<Ripple type="button" className="btn bgm-orange btn-icon" style={btn_stye}>
										<i className="zmdi zmdi-check" />
									</Ripple>
									<Ripple type="button" className="btn bgm-cyan btn-icon" style={btn_stye}>
										<i className="zmdi zmdi-close" />
									</Ripple>
									<Ripple type="button" className="btn bgm-lightgreen btn-icon" style={btn_stye}>
										<i className="zmdi zmdi-menu" />
									</Ripple>
									<Ripple type="button" className="btn bgm-lime btn-icon" style={btn_stye}>
										<i className="zmdi zmdi-apps" />
									</Ripple>
									<Ripple type="button" className="btn bgm-amber btn-icon" style={btn_stye}>
										<i className="zmdi zmdi-check-all" />
									</Ripple>
									<Ripple type="button" className="btn bgm-gray btn-icon" style={btn_stye}>
										<i className="zmdi zmdi-trending-up" />
									</Ripple>
									<Ripple type="button" className="btn bgm-lightblue btn-icon" style={btn_stye}>
										<i className="zmdi zmdi-apps" />
									</Ripple>
									<Ripple type="button" className="btn bgm-deeporange btn-icon" style={btn_stye}>
										<i className="zmdi zmdi-phone" />
									</Ripple>
								</div>
							</div>
						</div>

						<div className="card">
							<div className="card-header">
								<h2>Button Groups
									<small>Group a series of buttons together on a single line with the button group</small>
								</h2>
							</div>

							<div className="card-body card-padding">
								<p className="c-black m-b-20">Basic Example</p>
								<div className="btn-group-demo">
									<div className="btn-group m-r-5">
										<Ripple type="button" className="btn btn-default">Left</Ripple>
										<Ripple type="button" className="btn btn-default">Middle</Ripple>
										<Ripple type="button" className="btn btn-default">Right</Ripple>
									</div>
									<div className="btn-group m-r-5">
										<Ripple type="button" className="btn btn-primary">Left</Ripple>
										<Ripple type="button" className="btn btn-primary">Middle</Ripple>
										<Ripple type="button" className="btn btn-primary">Right</Ripple>
									</div>
									<div className="btn-group m-r-5">
										<Ripple type="button" className="btn btn-info">Left</Ripple>
										<Ripple type="button" className="btn btn-info">Middle</Ripple>
										<Ripple type="button" className="btn btn-info">Right</Ripple>
									</div>
									<div className="btn-group m-r-5">
										<Ripple type="button" className="btn btn-success">Left</Ripple>
										<Ripple type="button" className="btn btn-success">Middle</Ripple>
										<Ripple type="button" className="btn btn-success">Right</Ripple>
									</div>
									<div className="btn-group m-r-5">
										<Ripple type="button" className="btn btn-warning">Left</Ripple>
										<Ripple type="button" className="btn btn-warning">Middle</Ripple>
										<Ripple type="button" className="btn btn-warning">Right</Ripple>
									</div>
								</div>
								<p className="c-black m-b-20">Button Toolbars</p>
								<small>Combine sets of '.btn-group.' into a '.btn-toolbar' for more complex components.</small>

								<div className="btn-toolbar" role="toolbar">
									<div className="btn-group m-r-5">
										<Ripple type="button" className="btn btn-default">1</Ripple>
										<Ripple type="button" className="btn btn-default">2</Ripple>
										<Ripple type="button" className="btn btn-default">3</Ripple>
									</div>
									<div className="btn-group m-r-5">
										<Ripple type="button" className="btn btn-default">4</Ripple>
										<Ripple type="button" className="btn btn-default">5</Ripple>
										<Ripple type="button" className="btn btn-default">6</Ripple>
									</div>
									<div className="btn-group m-r-5">
										<Ripple type="button" className="btn btn-default">7</Ripple>
										<Ripple type="button" className="btn btn-default">8</Ripple>
										<Ripple type="button" className="btn btn-default">9</Ripple>
									</div>
								</div>
								<br/>
								<div className="btn-toolbar" role="toolbar">
									<div className="btn-group m-r-5">
										<Ripple type="button" className="btn btn-primary">1</Ripple>
										<Ripple type="button" className="btn btn-primary">2</Ripple>
										<Ripple type="button" className="btn btn-primary">3</Ripple>
									</div>
									<div className="btn-group m-r-5">
										<Ripple type="button" className="btn btn-primary">4</Ripple>
										<Ripple type="button" className="btn btn-primary">5</Ripple>
										<Ripple type="button" className="btn btn-primary">6</Ripple>
									</div>
									<div className="btn-group m-r-5">
										<Ripple type="button" className="btn btn-primary">7</Ripple>
										<Ripple type="button" className="btn btn-primary">8</Ripple>
										<Ripple type="button" className="btn btn-primary">9</Ripple>
									</div>
								</div>
								<br/>
								<br/>
								<p className="c-black m-b-20">Button Group Sizing</p>
								<small> Instead of applying button sizing classes to every button in a group, just add '.btn-group-*' to each '.btn-group', including when nesting multiple groups. </small>
								<div className="btn-toolbar" role="toolbar">
									<div className="btn-group m-r-5">
										<Ripple type="button" className="btn btn-lg btn-default">Left</Ripple>
										<Ripple type="button" className="btn btn-lg btn-default">Middle</Ripple>
										<Ripple type="button" className="btn btn-lg btn-default">Right</Ripple>
									</div>
									<div className="btn-group m-r-5">
										<Ripple type="button" className="btn btn-lg btn-primary">Left</Ripple>
										<Ripple type="button" className="btn btn-lg btn-primary">Middle</Ripple>
										<Ripple type="button" className="btn btn-lg btn-primary">Right</Ripple>
									</div>
								</div>
								<br/>
								<div className="btn-toolbar" role="toolbar">
									<div className="btn-group m-r-5">
										<Ripple type="button" className="btn btn-md btn-default">Left</Ripple>
										<Ripple type="button" className="btn btn-md btn-default">Middle</Ripple>
										<Ripple type="button" className="btn btn-md btn-default">Right</Ripple>
									</div>
									<div className="btn-group m-r-5">
										<Ripple type="button" className="btn btn-md btn-primary">Left</Ripple>
										<Ripple type="button" className="btn btn-md btn-primary">Middle</Ripple>
										<Ripple type="button" className="btn btn-md btn-primary">Right</Ripple>
									</div>
								</div>
								<br />
								<div className="btn-toolbar" role="toolbar">
									<div className="btn-group m-r-5">
										<Ripple type="button" className="btn btn-default">Left</Ripple>
										<Ripple type="button" className="btn btn-default">Middle</Ripple>
										<Ripple type="button" className="btn btn-default">Right</Ripple>
									</div>
									<div className="btn-group m-r-5">
										<Ripple type="button" className="btn btn-primary">Left</Ripple>
										<Ripple type="button" className="btn btn-primary">Middle</Ripple>
										<Ripple type="button" className="btn btn-primary">Right</Ripple>
									</div>
								</div>
								<br />
								<div className="btn-toolbar" role="toolbar">
									<div className="btn-group m-r-5">
										<Ripple type="button" className="btn btn-sm btn-default">Left</Ripple>
										<Ripple type="button" className="btn btn-sm btn-default">Middle</Ripple>
										<Ripple type="button" className="btn btn-sm btn-default">Right</Ripple>
									</div>
									<div className="btn-group m-r-5">
										<Ripple type="button" className="btn btn-sm btn-primary">Left</Ripple>
										<Ripple type="button" className="btn btn-sm btn-primary">Middle</Ripple>
										<Ripple type="button" className="btn btn-sm btn-primary">Right</Ripple>
									</div>
								</div>
								<br />
								<div className="btn-toolbar" role="toolbar">
									<div className="btn-group m-r-5">
										<Ripple type="button" className="btn btn-xs btn-default">Left</Ripple>
										<Ripple type="button" className="btn btn-xs btn-default">Middle</Ripple>
										<Ripple type="button" className="btn btn-xs btn-default">Right</Ripple>
									</div>
									<div className="btn-group m-r-5">
										<Ripple type="button" className="btn btn-xs btn-primary">Left</Ripple>
										<Ripple type="button" className="btn btn-xs btn-primary">Middle</Ripple>
										<Ripple type="button" className="btn btn-xs btn-primary">Right</Ripple>
									</div>
								</div>
								<br />
								<p className="c-black m-b-20">Nesting</p>
								<small> Place a '.btn-group' within another '.btn-group' when you want dropdown menus mixed with a series of buttons. </small>
								<br />
								<ButtonToolbar>
								{["default", "primary", "info", "success", "warning", "danger"].map((btn, i) => (
									
									<div className="btn-group m-r-5" key={i}>
										<Ripple type="button" className={`btn btn-${btn}`}>1</Ripple>
										<Ripple type="button" className={`btn btn-${btn}`}>2</Ripple>
										<Dropdown id={`dropdown-group-${btn}`} key={i}>
											<Dropdown.Toggle className={`btn-${btn}`} >{btn}</Dropdown.Toggle>
											<Dropdown.Menu className="pull-left">
												<MenuItem eventKey="1">Action</MenuItem>
												<MenuItem eventKey="2">Another action</MenuItem>
												<MenuItem eventKey="3">Something else here</MenuItem>
												<MenuItem divider />
												<MenuItem eventKey="4">Separated link</MenuItem>
											</Dropdown.Menu>
										</Dropdown>
									</div>
									
								))}
								</ButtonToolbar>

							</div>
						</div>
						
					</Col>
				</Row>
			</Fragment>
		)
	}
}