import React, { Component } from 'react';

import Ripple from '../components/ripple';
import { Input } from '../components/input';

const config = require("../helper/config").config;


export default class LockScreen extends Component {
	constructor(props) {
		super(props)
		this.state = {
			password: "admin"
		}
	}
	inFocus(ev){
		this.lock_image.classList.add("active")
	}
	inBlur(ev) {
		if (this.state.password.trim().length == 0) {
			this.lock_image.classList.remove("active");
		}
	}
	change(ev) {
		this.setState({
			[ev.target.name]: ev.target.value
		})
	}
	render() {
		return (
			<div className="container-fluid">
				<div className="login-container">
					<div className="login-flex">
						<div className="login-holder">
							<div className="login-box">
								<div className="card">
									<img ref={(ref) => { this.lock_image = ref }} className="lock-img active" src={`${config.asset_url}/assets/images/profile.jpeg`} />
									<div className="card-header">
										<h2 className="no-content"></h2>
									</div>
									<div className="card-body card-padding ch-alt">
										<div className="form-group rg-float">
											<Input
												type="password" 
												className="form-control input-sm text-center" 
												placeholder="Password" 
												name="password"
												active="rg-toggled"
												onFocus={this.inFocus.bind(this)} 
												onBlur={this.inBlur.bind(this)}
												onChange={this.change.bind(this)}
												value={this.state.password}												
											/>
										</div>
										<Ripple type="button" className="btn btn-block login-btn">UNLOCK</Ripple>											
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