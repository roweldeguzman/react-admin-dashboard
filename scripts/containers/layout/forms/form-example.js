import React, { Component, Fragment } from 'react'
import ModuleHeader from '../../../common/module-header'


import { Row, Col } from 'react-bootstrap';
import { Input } from '../../../components/input';
import Ripple from '../../../components/ripple';

export default class FormExample extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Fragment>
				<ModuleHeader text="Form Example" />

				<Row>
					<Col sm={12}>
						<div className="card">
							<div className="card-header">
								<h2>Basic Example 
									<small>Individual form controls automatically receive some global styling. All textual 'input', 'textarea', and 'select' elements with .form-control are set to width: 100%; by default. Wrap labels and controls in .form-group for optimum spacing. </small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<form role="form">
									<div className="form-group">
										<label htmlFor="exampleInputEmail1">Email address</label>
										<Input className="form-control" placeholder="Enter Email" />
									</div>
									<div className="form-group">
										<label htmlFor="exampleInputEmail1">Password</label>
										<Input className="form-control" placeholder="Enter Password" />
									</div>
									<div className="checkbox">
										<label>
											<input type="checkbox"/>
											<i className="input-helper"></i>
											Don't forget to check me out
										</label>
									</div>

									<Ripple type="button" className="btn btn-primary btn-sm m-t-10" >Submit</Ripple>
								</form>
							</div>
						</div>

						<div className="card">
							<div className="card-header">
								<h2>Inline Form 
									<small>Add '.form-inline' to your 'form' for left-aligned and inline-block controls. This only applies to forms within viewports that are at least 768px wide.</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<form className="row" role="form">
									<Col sm={3}>
										<div className="form-group">
											<Input className="form-control" placeholder="Enter Email" />
										</div>
									</Col>
									<Col sm={3}>
										<div className="form-group">
											<Input className="form-control" placeholder="Enter Password" />
										</div>
									</Col>
									<Col sm={2}>
										<div className="checkbox">
											<label>
												<input type="checkbox" />
												<i className="input-helper"></i>
												Don't forget to check me out
											</label>
										</div>
									</Col>
									<Col sm={4}>
										<Ripple type="button" className="btn btn-primary btn-sm m-t-10" >Submit</Ripple>
									</Col>
								</form>
							</div>
						</div>

						<div className="card">
							<div className="card-header">
								<h2>Horizontal Form 
									<small>Use Bootstrap's predefined grid classes to align labels and groups of form controls in a horizontal layout by adding '.form-horizontal' to the form. Doing so changes '.form-groups' to behave as grid rows, so no need for '.row'.</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<form className="form-horizontal" role="form">
									<div className="form-group">
										<label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
										<div className="col-sm-10">
											<Input className="form-control" placeholder="Email" />
										</div>
									</div>
									
									<div className="form-group">
										<label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
										<div className="col-sm-10">
											<Input className="form-control" placeholder="Password" />
										</div>
									</div>

									<div className="form-group">
										<div className="col-sm-offset-2 col-sm-10">
											<div className="checkbox">
												<label>
													<input type="checkbox"/>
													<i className="input-helper"></i>
													Remember me
												</label>
											</div>
										</div>
									</div>
									<div className="form-group">
										<div className="col-sm-offset-2 col-sm-10">
											<Ripple type="button" className="btn btn-primary btn-sm">Sign in</Ripple>
										</div>
									</div>
								</form>
							</div>
						</div>
					</Col>
				</Row>
			</Fragment>
		)
	}
}