import React, { Component, Fragment } from 'react'
import ModuleHeader from '../../../common/module-header'

import { Row, Col, Tab, NavDropdown, MenuItem } from 'react-bootstrap';

const config = require("../../../helper/config").config;
export default class ListView extends Component {
	constructor(props) {
		super(props)

		this.state = {
			listviewSearch: false
		}
	}
	showSearch(){
		this.setState({
			listviewSearch: !this.state.listviewSearch
		})
	}
	render() {
		const DropdownShort = () => {
			return (
				<div className="lv-actions actions">
					<ul className="actions">
						<NavDropdown eventKey={1} title={<i className="zmdi zmdi-more-vert"></i>} className="pull-right" noCaret id="dropdown-action">
							<MenuItem className="dropdown-arrow"></MenuItem>
							<MenuItem>Edit</MenuItem>
							<MenuItem>Delete</MenuItem>
						</NavDropdown>
					</ul>
				</div>
			)
		};
		return(
			<Fragment>
				<ModuleHeader text="Listview" />
					
				<Row>
					<Col sm={12}>
						<div className="card">
							<div className="listview lv-bordered lv-lg">
								<div className="lv-header-alt clearfix m-b-5">
									<h2 className="lvh-label hidden-xs">Add text here...</h2>
									{this.state.listviewSearch ?
										<div className="lvh-search" >
											<input type="text" placeholder="Start typing..." className="lvhs-input"/>
											<i className="lvh-search-close" onClick={this.showSearch.bind(this)}>&times;</i>
										</div>
										: ""
									}
									<ul className="lv-actions actions">
										<li>
											<a onClick={this.showSearch.bind(this)}>
												<i className="zmdi zmdi-search"></i>
											</a>
										</li>
									</ul>
								</div>

								<div className="lv-body">
									<div className="lv-item media">
										<div className="checkbox pull-left">
											<label>
												<input type="checkbox"/>
												<i className="input-helper"></i>
											</label>
										</div>
										<div className="media-body">
											<div className="lv-title">Per an error perpetua, fierent fastidii recteque ad pro. Mei id brute intellegam</div>
											
											<DropdownShort/>
										</div>
									</div>
								
									<div className="lv-item media">
										<div className="checkbox pull-left">
											<label>
												<input type="checkbox" />
												<i className="input-helper"></i>
											</label>
										</div>
										<div className="media-body">
											<div className="lv-title">Dulla vel metus scelerisque ante sollicitudin commodo purus odio</div>
											<small className="lv-small">Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel</small>

											<DropdownShort/>
										</div>
									</div>
								
									<div className="lv-item media">
										<div className="checkbox pull-left">
											<label>
												<input type="checkbox" />
												<i className="input-helper"></i>
											</label>
										</div>
										<div className="media-body">
											<div className="lv-title">Dulla vel metus scelerisque ante sollicitudin commodo purus odio</div>
											<ul className="lv-attrs">
												<li>Date Created: 09/06/1988</li>
												<li>Members: 78954</li>
												<li>Published: No</li>
											</ul>

											<DropdownShort />
										</div>
									</div>
								
									<div className="lv-item media">
										<div className="checkbox pull-left">
											<label>
												<input type="checkbox" />
												<i className="input-helper"></i>
											</label>
										</div>
										<div className="media-body">
											<div className="lv-title">Dulla vel metus scelerisque ante sollicitudin commodo purus odio</div>
											<small className="lv-small">Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel</small>
											<ul className="lv-attrs">
												<li>Date Created: 09/06/1988</li>
												<li>Members: 78954</li>
												<li>Published: No</li>
											</ul>

											<DropdownShort />
										</div>
									</div>
								
									<div className="lv-item media">
										<div className="checkbox pull-left">
											<label>
												<input type="checkbox" />
												<i className="input-helper"></i>
											</label>
										</div>
										<div className="pull-left">											
											<img className="lv-img-sm" src={`${config.asset_url}/assets/img/profile-pics/1.jpg`} />
										</div>
										<div className="media-body">
											<div className="lv-title">Dulla vel metus scelerisque ante sollicitudin commodo purus odio</div>
											<small className="lv-small">Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel</small>

											<DropdownShort />
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