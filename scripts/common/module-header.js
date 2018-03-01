import React, { Component, Fragment } from 'react'
import { NavDropdown, MenuItem } from 'react-bootstrap'


export default class HeaderModule extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Fragment>
				<div className="module-head">
					<h2>{this.props.text ? this.props.text : "Empty Title"}</h2>
					<ul className="list-unstyled module-action" >
						<li><a className="active"><i className="zmdi zmdi-trending-up"></i></a></li>
						<li><a><i className="zmdi zmdi-check-all"></i></a></li>
						<NavDropdown eventKey={1} title={<i className="zmdi zmdi-more-vert"></i>} noCaret className="pull-right" id="dropdown-module-head">
							<MenuItem className="dropdown-arrow"></MenuItem>
							<MenuItem>Refresh</MenuItem>
							<MenuItem>Action A</MenuItem>
							<MenuItem>Action A</MenuItem>
						</NavDropdown>
					</ul>
					{this.props.children}
				</div>
			</Fragment>
		)
	}
}