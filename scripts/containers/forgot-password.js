import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import Ripple from '../components/ripple';
import { Input } from '../components/input';

export default class ForgotPassowrd extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="login-container">
					<div className="login-flex">
						<div className="login-holder">
							<div className="login-box">
								<div className="card">
									<div className="card-header">
										<h2> Enter Email</h2>
									</div>
									<div className="card-body card-padding ch-alt">																			
										<div className="form-group rg-float">
											<Input type="email" className="form-control" float="Email"/>
										</div>
										<Ripple type="button" className="btn btn-block login-btn">RETRIEVE PASSWORD</Ripple>
									</div>
									<div className="card-footer p-0">
										<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 p-10" style={{ color: "#FFF" }}>
											<NavLink to={`/login`}>Registered?</NavLink>
										</div>
										<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 p-10" style={{ color: "#FFF" }}>
											<NavLink to={`/signup`}>Not registered?</NavLink>
										</div>
										<div style={{ clear: "both" }}></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}