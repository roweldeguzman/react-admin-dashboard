import React, { Component, Fragment } from 'react';

import ModuleHeader from '../../../common/module-header';

import { Input } from '../../../components/input'
import Ripple from '../../../components/ripple';
import { Row, Col, Modal, OverlayTrigger } from 'react-bootstrap';
export default class UIModals extends Component {
	constructor(props) {
		super(props)

		this.openDefault = this.openDefault.bind(this);
		this.closeDefault = this.closeDefault.bind(this);

		this.openCustom = this.openCustom.bind(this);
		this.closeCustom = this.closeCustom.bind(this);

		this.state = {
			default: {
				show: false,
				size: ""
			},
			default_with_size: {
				show: false,
				size: "lg",
				title: ""
			},
			custom: {
				default: false,
				txt: false,
				input: false,
				scroll: false,
				entrance: ""
			}
		}
	}
	openDefault(name, size) {
		this.setState({
			[name]: {
				show: true,
				size: size
			}
		});
	}
	closeDefault(name, size) {
		this.setState({
			[name]: {
				show: false,
				size: size
			}
		});
	}

	openCustom(type, entrance) {
		this.setState({
			custom: {
				[type]: true,
				entrance: entrance
			}
		})
	}
	closeCustom(type, entrance) {
		this.setState({
			custom: {
				[type]: false,
				entrance: entrance
			}
		})
	}
	render() {
		return (
			<Fragment>
				<ModuleHeader text="UI Modals">
					<small>
						<a className="c-gray" href="https://react-bootstrap.github.io/components/modal/"> react-bootstrap modals</a>
					</small>
				</ModuleHeader>
				<Row>
					<Col sm={12}>
						<div className="card">
							<div className="card-header">
								<h2>Default Modal</h2>
							</div>
							<div className="card-body card-padding">
								<p>Modals are streamlined, but flexible, dialog prompts with the minimum required functionality and smart defaults.</p>
								<p>
									To be able to open modals from service, inject BsModalService to your constructor. Then, call
									<code>.show()</code> method of modal service. Pass a TemplateRef or a component as a first argument and config as a second (optionally).
									<code>.show()</code> method returns an instance of BsModalRef class with
									<code>.hide()</code> method and
									<code>content</code> property where you'll find a component which you've passed to service.
								</p>
								<br />
								<br />
								<p>Small modal window have small width on screens only above 768px(boostrap3) and 576px(bootstrap4)</p>
								<p className="c-black">Modals have two optional sizes</p>
								<Ripple type="button" className="btn btn-primary" onClick={() => { this.openDefault("default", "") }}>Regular modal</Ripple>&nbsp;
								<Ripple type="button" className="btn btn-primary" onClick={() => { this.openDefault("default_with_size", "lg") }}>Large modal</Ripple>&nbsp;
								<Ripple type="button" className="btn btn-primary" onClick={() => { this.openDefault("default_with_size", "sm") }}>Small modal</Ripple>&nbsp;


								<Modal show={this.state.default.show} onHide={() => { this.closeDefault("default") }}>
									<Modal.Header closeButton>
										<Modal.Title>Regular modal</Modal.Title>
									</Modal.Header>
									<Modal.Body>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan vitae eros sit amet tristique. Nullam scelerisque nunc enim, non dignissim nibh faucibus ullamcorper. Fusce pulvinar libero vel ligula iaculis ullamcorper. Integer dapibus, mi ac tempor varius, purus nibh mattis erat, vitae porta nunc nisi non tellus. Vivamus mollis ante non massa egestas fringilla. Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur nunc. </p>
									</Modal.Body>
									<Modal.Footer>
										<Ripple type="button" className="btn btn-link" onClick={() => { this.closeDefault("default") }} >Close</Ripple>
									</Modal.Footer>
								</Modal>

								<Modal bsSize={this.state.default_with_size.size} show={this.state.default_with_size.show} onHide={() => { this.closeDefault("default_with_size", this.state.default_with_size.size) }}>
									<Modal.Header closeButton>
										<Modal.Title>{this.state.default_with_size.size == "lg" ? "Large": "Small"} modal</Modal.Title>
									</Modal.Header>
									<Modal.Body>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan vitae eros sit amet tristique. Nullam scelerisque nunc enim, non dignissim nibh faucibus ullamcorper. Fusce pulvinar libero vel ligula iaculis ullamcorper. Integer dapibus, mi ac tempor varius, purus nibh mattis erat, vitae porta nunc nisi non tellus. Vivamus mollis ante non massa egestas fringilla. Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur nunc. </p>
									</Modal.Body>
									<Modal.Footer>
										<Ripple type="button" className="btn btn-link" onClick={() => { this.closeDefault("default_with_size", this.state.default_with_size.size) }} >Close</Ripple>
									</Modal.Footer>
								</Modal>
							</div>
						</div>

						<div className="card">
							<div className="card-header">
								<h2>Custome Modal</h2>
							</div>
							<div className="card-body card-padding">
								<p>to enable the custom modal you just have to add class <code>custom</code> to modal parent class and a lil bit modification code</p>
								<p>Default Entrance</p>
								<Ripple type="button" className="btn btn-primary" onClick={() => { this.openCustom("default", "") }}>Custome Regular modal</Ripple>&nbsp;
								<Ripple type="button" className="btn btn-primary" onClick={() => { this.openCustom("txt", "") }}>Modal txt</Ripple>&nbsp;
								<Ripple type="button" className="btn btn-primary" onClick={() => { this.openCustom("input", "") }}>Modal input</Ripple>&nbsp;
								<Ripple type="button" className="btn btn-primary" onClick={() => { this.openCustom("scroll", "") }}>Modal scroll</Ripple>&nbsp;
								<br />
								<br />
								<p>IOS Entrance</p>
								<Ripple type="button" className="btn btn-primary" onClick={() => { this.openCustom("default", "ios") }}>Custome Regular modal</Ripple>&nbsp;
								<Ripple type="button" className="btn btn-primary" onClick={() => { this.openCustom("txt", "ios") }}>Modal txt</Ripple>&nbsp;
								<Ripple type="button" className="btn btn-primary" onClick={() => { this.openCustom("input", "ios") }}>Modal input</Ripple>&nbsp;
								<Ripple type="button" className="btn btn-primary" onClick={() => { this.openCustom("scroll", "ios") }}>Modal scroll</Ripple>&nbsp;
								<br />
								<br />
								<p>Android Entrance</p>
								<Ripple type="button" className="btn btn-primary" onClick={() => { this.openCustom("default", "md") }}>Custome Regular modal</Ripple>&nbsp;
								<Ripple type="button" className="btn btn-primary" onClick={() => { this.openCustom("txt", "md") }}>Modal txt</Ripple>&nbsp;
								<Ripple type="button" className="btn btn-primary" onClick={() => { this.openCustom("input", "md") }}>Modal input</Ripple>&nbsp;
								<Ripple type="button" className="btn btn-primary" onClick={() => { this.openCustom("scroll", "md") }}>Modal scroll</Ripple>&nbsp;
								<br />
								{ /* Custom Regular Entrance */}
								<Modal show={this.state.custom.default}  className="custom" dialogClassName={this.state.custom.entrance}>								
									<div className="modal-header p-0">
										<div className="modal-header-bar">
											<Ripple type="button" className="navbar-toggle" onClick={() => { this.closeCustom("default", this.state.custom.entrance) }}>
												<i className="zmdi zmdi-arrow-left zmdi-hc-fw"></i>
											</Ripple>
											<div className="header-title-bar">Custome Regular modal</div>
										</div>
									</div>
									<div className="card">
										<div className="card-body">
											Regular Modal
										</div>
									</div>									
								</Modal>
								{ /* Custom Modal with text */}
								<Modal show={this.state.custom.txt} className="custom" dialogClassName={this.state.custom.entrance}>
									<div className="modal-header p-0">
										<div className="modal-header-bar">
											<Ripple type="button" className="navbar-toggle" onClick={() => { this.closeCustom("txt", this.state.custom.entrance) }}>
												<i className="zmdi zmdi-arrow-left zmdi-hc-fw"></i>
											</Ripple>
											<div className="header-title-bar">Custome Regular modal</div>
										</div>
									</div>
									<div className="card">
										<div className="card-body">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan
											vitae eros sit amet tristique. Nullam scelerisque nunc enim, non dignissim nibh faucibus ullamcorper. Fusce pulvinar libero
											vel ligula iaculis ullamcorper. Integer dapibus, mi ac tempor varius, purus nibh mattis erat, vitae porta nunc nisi non tellus.
											Vivamus mollis ante non massa egestas fringilla. Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur
											nunc.
										</div>
									</div>
								</Modal>
								{ /* Custom Modal with input */}
								<Modal show={this.state.custom.input} className="custom" dialogClassName={this.state.custom.entrance}>
									<div className="modal-header p-0">
										<div className="modal-header-bar">
											<Ripple type="button" className="navbar-toggle" onClick={() => { this.closeCustom("input", this.state.custom.entrance) }}>
												<i className="zmdi zmdi-arrow-left zmdi-hc-fw"></i>
											</Ripple>
											<div className="header-title-bar">Modal with input</div>
										</div>
									</div>
									<div className="card p-t-10">
										<div className="card-body has-input">
											<div className="col-xs-12 p-t-15">
												<div className="form-group rg-float">
													<Input className="form-control input-sm" float="First Name" />
												</div>
												<div className="form-group rg-float">
													<Input className="form-control input-sm" float="Last Name" />
												</div>
												<div className="form-group rg-float">
													<Input className="form-control input-sm" float="Email" />
												</div>
												
											</div>
										</div>
									</div>
									<div className="modal-footer has-input">
										<Ripple type="button" className="btn btn-primary btn-block">Save</Ripple>
									</div>
								</Modal>
								{ /* Custom Modal with scroll */}
								<Modal show={this.state.custom.scroll} className="custom" dialogClassName={this.state.custom.entrance}>									
									<div className="modal-header p-0">
										<div className="modal-header-bar">
											<Ripple type="button" className="navbar-toggle" onClick={() => { this.closeCustom("scroll", this.state.custom.entrance) }}>
												<i className="zmdi zmdi-arrow-left zmdi-hc-fw"></i>
											</Ripple>
											<div className="header-title-bar">Modal with scroller</div>
										</div>
									</div>
								
									<div className="card">
										<div className="card-body  p-t-10">
											Rowel de Guzman
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan
											vitae eros sit amet tristique. Nullam scelerisque nunc enim, non dignissim nibh faucibus ullamcorper. Fusce pulvinar libero
											vel ligula iaculis ullamcorper. Integer dapibus, mi ac tempor varius, purus nibh mattis erat, vitae porta nunc nisi non tellus.
											Vivamus mollis ante non massa egestas fringilla. Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur
											nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan
											vitae eros sit amet tristique. Nullam scelerisque nunc enim, non dignissim nibh faucibus ullamcorper. Fusce pulvinar libero
											vel ligula iaculis ullamcorper. Integer dapibus, mi ac tempor varius, purus nibh mattis erat, vitae porta nunc nisi non tellus.
											Vivamus mollis ante non massa egestas fringilla. Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur
											nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan
											vitae eros sit amet tristique. Nullam scelerisque nunc enim, non dignissim nibh faucibus ullamcorper. Fusce pulvinar libero
											vel ligula iaculis ullamcorper. Integer dapibus, mi ac tempor varius, purus nibh mattis erat, vitae porta nunc nisi non tellus.
											Vivamus mollis ante non massa egestas fringilla. Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur
											nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan
											vitae eros sit amet tristique. Nullam scelerisque nunc enim, non dignissim nibh faucibus ullamcorper. Fusce pulvinar libero
											vel ligula iaculis ullamcorper. Integer dapibus, mi ac tempor varius, purus nibh mattis erat, vitae porta nunc nisi non tellus.
											Vivamus mollis ante non massa egestas fringilla. Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur
											nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan
											vitae eros sit amet tristique. Nullam scelerisque nunc enim, non dignissim nibh faucibus ullamcorper. Fusce pulvinar libero
											vel ligula iaculis ullamcorper. Integer dapibus, mi ac tempor varius, purus nibh mattis erat, vitae porta nunc nisi non tellus.
											Vivamus mollis ante non massa egestas fringilla. Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur
											nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan
											vitae eros sit amet tristique. Nullam scelerisque nunc enim, non dignissim nibh faucibus ullamcorper. Fusce pulvinar libero
											vel ligula iaculis ullamcorper. Integer dapibus, mi ac tempor varius, purus nibh mattis erat, vitae porta nunc nisi non tellus.
											Vivamus mollis ante non massa egestas fringilla. Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur
											nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan
											vitae eros sit amet tristique. Nullam scelerisque nunc enim, non dignissim nibh faucibus ullamcorper. Fusce pulvinar libero
											vel ligula iaculis ullamcorper. Integer dapibus, mi ac tempor varius, purus nibh mattis erat, vitae porta nunc nisi non tellus.
											Vivamus mollis ante non massa egestas fringilla. Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur
											nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan
											vitae eros sit amet tristique. Nullam scelerisque nunc enim, non dignissim nibh faucibus ullamcorper. Fusce pulvinar libero
											vel ligula iaculis ullamcorper. Integer dapibus, mi ac tempor varius, purus nibh mattis erat, vitae porta nunc nisi non tellus.
											Vivamus mollis ante non massa egestas fringilla. Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur
											nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan
											vitae eros sit amet tristique. Nullam scelerisque nunc enim, non dignissim nibh faucibus ullamcorper. Fusce pulvinar libero
											vel ligula iaculis ullamcorper. Integer dapibus, mi ac tempor varius, purus nibh mattis erat, vitae porta nunc nisi non tellus.
											Vivamus mollis ante non massa egestas fringilla. Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur
											nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan
											vitae eros sit amet tristique. Nullam scelerisque nunc enim, non dignissim nibh faucibus ullamcorper. Fusce pulvinar libero
											vel ligula iaculis ullamcorper. Integer dapibus, mi ac tempor varius, purus nibh mattis erat, vitae porta nunc nisi non tellus.
											Vivamus mollis ante non massa egestas fringilla. Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur
											nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan
											vitae eros sit amet tristique. Nullam scelerisque nunc enim, non dignissim nibh faucibus ullamcorper. Fusce pulvinar libero
											vel ligula iaculis ullamcorper. Integer dapibus, mi ac tempor varius, purus nibh mattis erat, vitae porta nunc nisi non tellus.
											Vivamus mollis ante non massa egestas fringilla. Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur
											nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan
											vitae eros sit amet tristique. Nullam scelerisque nunc enim, non dignissim nibh faucibus ullamcorper. Fusce pulvinar libero
											vel ligula iaculis ullamcorper. Integer dapibus, mi ac tempor varius, purus nibh mattis erat, vitae porta nunc nisi non tellus.
											Vivamus mollis ante non massa egestas fringilla. Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur
											nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan
											vitae eros sit amet tristique. Nullam scelerisque nunc enim, non dignissim nibh faucibus ullamcorper. Fusce pulvinar libero
											vel ligula iaculis ullamcorper. Integer dapibus, mi ac tempor varius, purus nibh mattis erat, vitae porta nunc nisi non tellus.
											Vivamus mollis ante non massa egestas fringilla. Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur
											nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan
											vitae eros sit amet tristique. Nullam scelerisque nunc enim, non dignissim nibh faucibus ullamcorper. Fusce pulvinar libero
											vel ligula iaculis ullamcorper. Integer dapibus, mi ac tempor varius, purus nibh mattis erat, vitae porta nunc nisi non tellus.
											Vivamus mollis ante non massa egestas fringilla. Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur
											nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan
											vitae eros sit amet tristique. Nullam scelerisque nunc enim, non dignissim nibh faucibus ullamcorper. Fusce pulvinar libero
											vel ligula iaculis ullamcorper. Integer dapibus, mi ac tempor varius, purus nibh mattis erat, vitae porta nunc nisi non tellus.
											Vivamus mollis ante non massa egestas fringilla. Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur
											nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan
											vitae eros sit amet tristique. Nullam scelerisque nunc enim, non dignissim nibh faucibus ullamcorper. Fusce pulvinar libero
											vel ligula iaculis ullamcorper. Integer dapibus, mi ac tempor varius, purus nibh mattis erat, vitae porta nunc nisi non tellus.
											Vivamus mollis ante non massa egestas fringilla. Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur
											nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan
											vitae eros sit amet tristique. Nullam scelerisque nunc enim, non dignissim nibh faucibus ullamcorper. Fusce pulvinar libero
											vel ligula iaculis ullamcorper. Integer dapibus, mi ac tempor varius, purus nibh mattis erat, vitae porta nunc nisi non tellus.
											Vivamus mollis ante non massa egestas fringilla. Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur
											nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan
											vitae eros sit amet tristique. Nullam scelerisque nunc enim, non dignissim nibh faucibus ullamcorper. Fusce pulvinar libero
											vel ligula iaculis ullamcorper. Integer dapibus, mi ac tempor varius, purus nibh mattis erat, vitae porta nunc nisi non tellus.
											Vivamus mollis ante non massa egestas fringilla. Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur
											nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan
											vitae eros sit amet tristique. Nullam scelerisque nunc enim, non dignissim nibh faucibus ullamcorper. Fusce pulvinar libero
											vel ligula iaculis ullamcorper. Integer dapibus, mi ac tempor varius, purus nibh mattis erat, vitae porta nunc nisi non tellus.
											Vivamus mollis ante non massa egestas fringilla. Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur
											nunc.
										</div>
									</div>									
								</Modal>
							</div>
						</div>
					</Col>
				</Row>
			</Fragment>
		)
	}
}
