import React, { Component } from 'react';

import { Input, AddOn } from '../components/input';
import Ripple from '../components/ripple';

import '../../vendors/OwlCarousel2/owl.carousel.js';
import '../../vendors/OwlCarousel2/assets/owl.carousel.min.css';
import '../../vendors/OwlCarousel2/assets/owl.theme.default.css';

export default class LoginSecond extends Component {
	constructor(props) {
		super(props)

		this.state = {
			active: "login"
		}
		this.showtab = this.showtab.bind(this)
	}

	componentDidMount() {
		$(".owl-carousel").owlCarousel({
			loop: true,
			autoplay: true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			items: 1,
			slideSpeed: 3000,
			paginationSpeed: 3000,
			freeDrag: false,
			pullDrag: false,
			nav: true,
			dots: false,
			navElement: "div",
			navText: [
				"<i class='zmdi zmdi-chevron-left zmdi-hc-fw'></i>",
				"<i class='zmdi zmdi-chevron-right zmdi-hc-fw'></i>"
			],
		});
	}
	
	showtab(tab) {
		this.setState({
			active: tab
		});
	}
	render() {
		return(
			<div>
				<div className="container-fluid">
					<div className="container-absolute">
						<div className="container-flexbox">
							<div className="left container-flex">
								<div className="header-txt">ReactJS Admin Dashboard</div>
								<div className="container-holder">
									<div className="container-box">
										<div className="owl-carousel owl-theme">
											<div className="slide">
												<div className="slide-1 clearfix">
													<div className="carousel-content">
														<div className="content-text">
															<h2>Welcome</h2>
															<p>
																Pellentesque lacinia sagittis libero et feugiat. Etiam volutpat adipiscing tortor non luctus. Vivamus venenatis vitae metus
																et aliquet. Praesent vitae justo purus. In hendrerit lorem nisl, ac lacinia urna aliquet non. Quisque nisi tellus, rhoncus
																quis est sit amet, lacinia euismod nunc. Aenean nec nibh velit. Fusce quis ante in nisl molestie fringilla. Nunc vitae
																ante id magna feugiat condimentum. Maecenas sit amet urna massa. Integer eu lectus sollicitudin, hendrerit est ac, sollicitudin
																nisl. Quisque viverra sodales lectus nec ultrices. Fusce elit dolor, dignissim a nunc id, varius suscipit turpis. Cras
																porttitor turpis vitae leo accumsan molestie. Morbi vitae luctus leo. Sed nec scelerisque magna, et adipiscing est. Proin
																lobortis lectus eu sem ullamcorper, commodo malesuada quam fringilla. Curabitur ac nunc dui. Class aptent taciti sociosqu
																ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sagittis enim eu est lacinia, ut egestas ligula imperdiet.
															</p>
														</div>
													</div>
												</div>
											</div>
											<div className="slide">
												<div className="slide-2 clearfix">
													<div className="carousel-content">
														<div className="content-text">
															<h2>Welcome</h2>
															<p>
																Pellentesque lacinia sagittis libero et feugiat. Etiam volutpat adipiscing tortor non luctus. Vivamus venenatis vitae metus
																et aliquet. Praesent vitae justo purus. In hendrerit lorem nisl, ac lacinia urna aliquet non. Quisque
																nisi tellus, rhoncus quis est sit amet, lacinia euismod nunc. Aenean nec nibh velit. Fusce quis
																ante in nisl molestie fringilla. Nunc vitae ante id magna feugiat condimentum. Maecenas sit amet
																urna massa. Integer eu lectus sollicitudin, hendrerit est ac, sollicitudin nisl. Quisque viverra
																sodales lectus nec ultrices. Fusce elit dolor, dignissim a nunc id, varius suscipit turpis. Cras
																porttitor turpis vitae leo accumsan molestie. Morbi vitae luctus leo. Sed nec scelerisque magna,
																et adipiscing est. Proin lobortis lectus eu sem ullamcorper, commodo malesuada quam fringilla.
																Curabitur ac nunc dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
																inceptos himenaeos. Fusce sagittis enim eu est lacinia, ut egestas ligula imperdiet.
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="right container-flex">
								<div className="container-holder">
									<div className="container-box">
										<RenderCondition />
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

export class RenderCondition extends LoginSecond {
	constructor(props) {
		super(props)
	}

	render() {
		if (this.state.active == "login") {
			return (
				<div className="box-block" style={{ padding: 29 }}>
					<div className="block-txt">ReactJS Admin Dashboard</div>
					<div className="input-group m-b-20">
						<AddOn className="input-group-addon" icon="zmdi zmdi-account" />
						<Input className="form-control" placeholder="Email" />
					</div>
					<div className="input-group m-b-20">
						<AddOn className="input-group-addon" icon="zmdi zmdi-male" />
						<Input className="form-control" placeholder="Password" />
					</div>
					<div className="col-xs-8 col-sm-6 col-md-6 col-lg-6">
						<a className="pull-left m-t-5 p-r-10" onClick={() => { this.showtab("forgot") }} >Forgot Password?</a>
						<a className="pull-left m-t-5 p-r-10" onClick={() => { this.showtab("register") }}>Not registered?</a>
					</div>
					<div className="col-xs-4 col-sm-6 col-md-6 col-lg-6 p-r-0">
						<Ripple type="button" className="btn btn-block login-btn btn-primary">LOGIN</Ripple>
					</div>
				</div>
			)
		} else if (this.state.active == "register") {
			return (
				<div className="box-block" style={{ padding: 29 }}>
					<div className="block-txt">ReactJS Admin Dashboard</div>
					<div className="input-group m-b-20">
						<AddOn className="input-group-addon" icon="zmdi zmdi-account" />
						<Input className="form-control" placeholder="First name" />
					</div>

					<div className="input-group m-b-20">
						<AddOn className="input-group-addon" icon="zmdi zmdi-account" />
						<Input className="form-control" placeholder="Last Name" />
					</div>

					<div className="input-group m-b-20">
						<AddOn className="input-group-addon" icon="zmdi zmdi-email" />
						<Input className="form-control" placeholder="Email Address" />
					</div>

					<div className="input-group m-b-20">
						<AddOn className="input-group-addon" icon="zmdi zmdi-lock" />
						<Input className="form-control" placeholder="Password" />
					</div>
					<div className="col-xs-8 col-sm-6 col-md-6 col-lg-6">
						<a id="to-login" className="pull-left m-t-5 p-r-10" onClick={() => { this.showtab("login") }}>Login</a>
					</div>
					<div className="col-xs-4 col-sm-6 col-md-6 col-lg-6 p-r-0">
						<Ripple type="button" className="btn btn-block login-btn btn-primary">REGISTER</Ripple>
					</div>
				</div>
			)
		} else if (this.state.active == "forgot") { 
			return (				
				<div className="box-block" style={{ padding: 29 }}>
					<div className="block-txt">ReactJS Admin Dashboard</div>
					<div className="input-group m-b-20">
						<AddOn className="input-group-addon" icon="zmdi zmdi-email" />
						<Input className="form-control" placeholder="Email Address" />
					</div>
					<div className="clear"></div>
					<div className="col-xs-8 col-sm-6 col-md-6 col-lg-6" style={{ marginTop: -5 }}>
						<a id="to-login" className="pull-left m-t-5 p-r-10" onClick={() => { this.showtab("login") }}>Login</a>
					</div>

					<div className="col-xs-4 col-sm-6 col-md-6 col-lg-6 p-r-0">
						<Ripple type="button" className="btn btn-block login-btn btn-primary">SUBMIT</Ripple>
					</div>
				</div>
			)
		}
	}
}
