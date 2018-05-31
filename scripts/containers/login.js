import React, { Component } from 'react';
import { Router, Route, NavLink } from 'react-router-dom'


import Ripple from '../components/ripple';
import { Input } from '../components/input';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "rowel.deguzman@roweldev.com",
			password: "password"
		}
		console.log(this.props.location)		
	}

	onChange(ev){
		this.setState({
			[ev.target.name]: ev.target.value
		})
	}
	render() {
		return(
			<div className="container-fluid">
				<div className="login-container">
					<div className="login-flex">
						<div className="login-holder">
							<div className="login-box">
								<div className="card">
									<div className="card-header">
										<h2> Sign in with your account to continue</h2>
									</div>
									<div className="card-body card-padding ch-alt">
										<div className="form-group rg-float">
											<Input type="email" active="rg-toggled" className="form-control" float="Email" name="email" value={this.state.email} onChange={this.onChange.bind(this)}/>
										</div>
										<div className="form-group rg-float">
											<Input type="password" active="rg-toggled" className="form-control" float="Password" name="password" value={this.state.password} onChange={this.onChange.bind(this)} />
										</div>										
										<Ripple type="button" className="btn btn-block login-btn">LOGIN</Ripple>
									</div>
									<div className="card-footer p-0">
										<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 p-10" style={{ color: "#FFF" }} >
											<NavLink to={`/signup`}>Not registered?</NavLink>
										</div>
										<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 p-10" style={{ color: "#FFF" }}>
											<NavLink to={`/forgot-password`}>Forgot password?</NavLink>
										</div>
										<div style={{ clear: "both"}} ></div>
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