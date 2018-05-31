import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import Ripple from '../components/ripple';
import { Input } from '../components/input';

export default class Signup extends Component {
	constructor(props) {
		super(props)
		
	}
	componentWillMount(){
		
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
										<h2>Register now to start in template</h2>
									</div>
									<div className="card-body card-padding ch-alt">
										<div className="form-group rg-float">
											<Input type="email" className="form-control" float="First Name" />
										</div>
										<div className="form-group rg-float">
											<Input type="email" className="form-control" float="Last Name" />
										</div>
										<div className="form-group rg-float">
											<Input type="email" className="form-control" float="Email" />
										</div>
										<div className="form-group rg-float">
											<Input type="password" className="form-control" float="Password" />
										</div>
										<div className="form-group rg-float">
											<Input type="password" className="form-control" float="Confirm Password" />
										</div>
										
										<Ripple type="button" className="btn btn-block login-btn">SIGNUP</Ripple>
									</div>
									<div className="card-footer p-0">
										<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 p-10" style={{ color: "#FFF" }}>
											<NavLink to={`/login`}>Registered?</NavLink>
										</div>
										<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 p-10" style={{ color: "#FFF" }}>											
											<NavLink to={`/forgot-password`}>Forgot password?</NavLink>
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