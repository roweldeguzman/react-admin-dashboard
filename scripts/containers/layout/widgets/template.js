import React, { Component, Fragment } from 'react';
import Ripple from '../../../components/ripple'

import ModuleHeader from '../../../common/module-header'

import { Row, Col, NavDropdown, MenuItem, } from 'react-bootstrap'
export default class Template extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Fragment>
				<ModuleHeader text="Templates"/>

				<Row>
					<Col sm={4}>
						<div className="card">
							<div className="card-header">
								<h2>Default Example
									<small>You can type anything here...</small>
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
							<div className="card-body card-padding">
								Cras leo sem, egestas a accumsan eget, euismod at nunc. Praesent vel mi blandit, tempus ex gravida, accumsan dui. Sed sed
								aliquam augue. Nullam vel suscipit purus, eu facilisis ante. Mauris nec commodo felis.
							</div>
						</div>
					</Col>
					<Col sm={4}>
						<div className="card">
							<div className="card-header">
								<h2>Default Example
									<small>You can type anything here...</small>
								</h2>
								<ul className="actions">
									<li><a><i className="zmdi zmdi-refresh-alt"></i></a></li>
									<li><a><i className="zmdi zmdi-download"></i></a></li>
									<NavDropdown eventKey={1} title={<i className="zmdi zmdi-more-vert"></i>} className="pull-right" noCaret id="dropdown-action">
										<MenuItem className="dropdown-arrow"></MenuItem>
										<MenuItem>Refresh</MenuItem>
										<MenuItem>Settings</MenuItem>
										<MenuItem>Other Settings</MenuItem>
									</NavDropdown>
								</ul>
							</div>
							<div className="card-body card-padding">
								Cras leo sem, egestas a accumsan eget, euismod at nunc. Praesent vel mi blandit, tempus ex gravida, accumsan dui. Sed sed
								aliquam augue. Nullam vel suscipit purus, eu facilisis ante. Mauris nec commodo felis.
							</div>
						</div>
					</Col>
					<Col sm={4}>
						<div className="card">
							<div className="card-header">
								<h2>Default Example
									<small>You can type anything here...</small>
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
							<div className="card-body card-padding">
								Cras leo sem, egestas a accumsan eget, euismod at nunc. Praesent vel mi blandit, tempus ex gravida, accumsan dui. Sed sed
								aliquam augue. Nullam vel suscipit purus, eu facilisis ante. Mauris nec commodo felis.
							</div>
						</div>
					</Col>
				</Row>

				<Row>
					<Col sm={4}>
						<div className="card">
							<div className="card-header bgm-cyan">
								<h2>Default Example
									<small>You can type anything here...</small>
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
							<div className="card-body card-padding">
								Cras leo sem, egestas a accumsan eget, euismod at nunc. Praesent vel mi blandit, tempus ex gravida, accumsan dui. Sed sed
								aliquam augue. Nullam vel suscipit purus, eu facilisis ante. Mauris nec commodo felis.
							</div>
						</div>
					</Col>
					<Col sm={4}>
						<div className="card">
							<div className="card-header bgm-red">
								<h2>Default Example
									<small>You can type anything here...</small>
								</h2>
								<ul className="actions">
									<li><a><i className="zmdi zmdi-refresh-alt"></i></a></li>
									<li><a><i className="zmdi zmdi-download"></i></a></li>
									<NavDropdown eventKey={1} title={<i className="zmdi zmdi-more-vert"></i>} className="pull-right" noCaret id="dropdown-action">
										<MenuItem className="dropdown-arrow"></MenuItem>
										<MenuItem>Refresh</MenuItem>
										<MenuItem>Settings</MenuItem>
										<MenuItem>Other Settings</MenuItem>
									</NavDropdown>
								</ul>
							</div>
							<div className="card-body card-padding">
								Cras leo sem, egestas a accumsan eget, euismod at nunc. Praesent vel mi blandit, tempus ex gravida, accumsan dui. Sed sed
								aliquam augue. Nullam vel suscipit purus, eu facilisis ante. Mauris nec commodo felis.
							</div>
						</div>
					</Col>
					<Col sm={4}>
						<div className="card">
							<div className="card-header bgm-orange">
								<h2>Default Example
									<small>You can type anything here...</small>
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
							<div className="card-body card-padding">
								Cras leo sem, egestas a accumsan eget, euismod at nunc. Praesent vel mi blandit, tempus ex gravida, accumsan dui. Sed sed
								aliquam augue. Nullam vel suscipit purus, eu facilisis ante. Mauris nec commodo felis.
							</div>
						</div>
					</Col>
				</Row>

				<Row>
					<Col sm={4}>
						<div className="card">
							<div className="card-header bgm-green">
								<h2>Default Example
									<small>You can type anything here...</small>
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
							<div className="card-body card-padding">
								Cras leo sem, egestas a accumsan eget, euismod at nunc. Praesent vel mi blandit, tempus ex gravida, accumsan dui. Sed sed
								aliquam augue. Nullam vel suscipit purus, eu facilisis ante. Mauris nec commodo felis.
							</div>
						</div>
					</Col>
					<Col sm={4}>
						<div className="card">
							<div className="card-header bgm-purple">
								<h2>Default Example
									<small>You can type anything here...</small>
								</h2>
								<ul className="actions">
									<li><a><i className="zmdi zmdi-refresh-alt"></i></a></li>
									<li><a><i className="zmdi zmdi-download"></i></a></li>
									<NavDropdown eventKey={1} title={<i className="zmdi zmdi-more-vert"></i>} className="pull-right" noCaret id="dropdown-action">
										<MenuItem className="dropdown-arrow"></MenuItem>
										<MenuItem>Refresh</MenuItem>
										<MenuItem>Settings</MenuItem>
										<MenuItem>Other Settings</MenuItem>
									</NavDropdown>
								</ul>
							</div>
							<div className="card-body card-padding">
								Cras leo sem, egestas a accumsan eget, euismod at nunc. Praesent vel mi blandit, tempus ex gravida, accumsan dui. Sed sed
								aliquam augue. Nullam vel suscipit purus, eu facilisis ante. Mauris nec commodo felis.
							</div>
						</div>
					</Col>
					<Col sm={4}>
						<div className="card">
							<div className="card-header bgm-bluegray">
								<h2>Default Example
									<small>You can type anything here...</small>
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
							<div className="card-body card-padding">
								Cras leo sem, egestas a accumsan eget, euismod at nunc. Praesent vel mi blandit, tempus ex gravida, accumsan dui. Sed sed
								aliquam augue. Nullam vel suscipit purus, eu facilisis ante. Mauris nec commodo felis.
							</div>
						</div>
					</Col>
				</Row>
				<ModuleHeader text="No Header">
					<small>Please refer 'Colors' page in 'User Interface' for more color classes</small>
				</ModuleHeader>
				<Row>
					<Col sm={4}>
						<div className="card">
							<div className="card-body card-padding">
								Cras leo sem, egestas a accumsan eget, euismod at nunc. Praesent vel mi blandit, tempus ex gravida, accumsan dui. Sed sed
								aliquam augue. Nullam vel suscipit purus, eu facilisis ante. Mauris nec commodo felis.
							</div>
						</div>
					</Col>
					<Col sm={4}>
						<div className="card">
							<div className="card-body card-padding bgm-teal c-white">
								Cras leo sem, egestas a accumsan eget, euismod at nunc. Praesent vel mi blandit, tempus ex gravida, accumsan dui. Sed sed
								aliquam augue. Nullam vel suscipit purus, eu facilisis ante. Mauris nec commodo felis.
							</div>
						</div>
					</Col>
					<Col sm={4}>
						<div className="card">
							<div className="card-body card-padding bgm-lime c-white">
								Cras leo sem, egestas a accumsan eget, euismod at nunc. Praesent vel mi blandit, tempus ex gravida, accumsan dui. Sed sed
								aliquam augue. Nullam vel suscipit purus, eu facilisis ante. Mauris nec commodo felis.
							</div>
						</div>
					</Col>
				</Row>

				<Row>
					<Col sm={4}>
						<div className="card">
							<div className="card-body card-padding bgm-pink c-white">
								Cras leo sem, egestas a accumsan eget, euismod at nunc. Praesent vel mi blandit, tempus ex gravida, accumsan dui. Sed sed
								aliquam augue. Nullam vel suscipit purus, eu facilisis ante. Mauris nec commodo felis.
							</div>
						</div>
					</Col>
					<Col sm={4}>
						<div className="card">
							<div className="card-body card-padding bgm-amber c-white">
								Cras leo sem, egestas a accumsan eget, euismod at nunc. Praesent vel mi blandit, tempus ex gravida, accumsan dui. Sed sed
								aliquam augue. Nullam vel suscipit purus, eu facilisis ante. Mauris nec commodo felis.
							</div>
						</div>
					</Col>
					<Col sm={4}>
						<div className="card">
							<div className="card-body card-padding bgm-gray c-white">
								Cras leo sem, egestas a accumsan eget, euismod at nunc. Praesent vel mi blandit, tempus ex gravida, accumsan dui. Sed sed
								aliquam augue. Nullam vel suscipit purus, eu facilisis ante. Mauris nec commodo felis.
							</div>
						</div>
					</Col>
				</Row>
				<ModuleHeader text="Some Material Design Flavor"/>
				<Row>
					<Col sm={4}>
						<div className="card">
							<div className="card-header ch-alt m-b-20">
								<h2>Some Title 
									<small>Phasellus condimentum ipsum id auctor</small>
								</h2>
								<ul className="actions">
									<NavDropdown eventKey={1} title={<i className="zmdi zmdi-more-vert"></i>} className="pull-right" noCaret id="dropdown-action">
										<MenuItem className="dropdown-arrow"></MenuItem>
										<MenuItem>Refresh</MenuItem>
										<MenuItem>Settings</MenuItem>
										<MenuItem>Other Settings</MenuItem>
									</NavDropdown>
								</ul>
								<Ripple type="button" className="btn bgm-red btn-float waves-circle">
									<i className="zmdi zmdi-plus"></i>
								</Ripple>
							</div>
							<div className="card-body card-padding">
								Cras leo sem, egestas a accumsan eget, euismod at nunc. Praesent vel mi blandit, tempus ex gravida, accumsan dui. Sed sed
								aliquam augue. Nullam vel suscipit purus, eu facilisis ante. Mauris nec commodo felis.
							</div>
						</div>
					</Col>
					<Col sm={4}>
						<div className="card">
							<div className="card-header bgm-bluegray m-b-20">
								<h2>Some Title 
									<small>Phasellus condimentum ipsum id auctor</small>
								</h2>
								<ul className="actions">
									<li><a><i className="zmdi zmdi-refresh-alt"></i></a></li>
									<li><a><i className="zmdi zmdi-download"></i></a></li>
									<NavDropdown eventKey={1} title={<i className="zmdi zmdi-more-vert"></i>} className="pull-right" noCaret id="dropdown-action">
										<MenuItem className="dropdown-arrow"></MenuItem>
										<MenuItem>Refresh</MenuItem>
										<MenuItem>Settings</MenuItem>
										<MenuItem>Other Settings</MenuItem>
									</NavDropdown>
								</ul>
								<Ripple type="button" className="btn bgm-blue btn-float waves-circle">
									<i className="zmdi zmdi-mail-send"></i>
								</Ripple>
							</div>
							<div className="card-body card-padding">
								Cras leo sem, egestas a accumsan eget, euismod at nunc. Praesent vel mi blandit, tempus ex gravida, accumsan dui. Sed sed
								aliquam augue. Nullam vel suscipit purus, eu facilisis ante. Mauris nec commodo felis.
							</div>
						</div>
					</Col>
					<Col sm={4}>
						<div className="card">
							<div className="card-header">
								<h2>Some Title 
									<small>Phasellus condimentum ipsum id auctor</small>
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
							<div className="card-body card-padding">
								Cras leo sem, egestas a accumsan eget, euismod at nunc. Praesent vel mi blandit, tempus ex gravida, accumsan dui. Sed sed
								aliquam augue. Nullam vel suscipit purus, eu facilisis ante. Mauris nec commodo felis.
							</div>
						</div>
					</Col>
				</Row>
			</Fragment>
		)
	}
}