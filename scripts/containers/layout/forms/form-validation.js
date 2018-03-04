import React, { Component, Fragment } from 'react'
import ModuleHeader from '../../../common/module-header'

import { Row, Col } from 'react-bootstrap';
import { Input } from '../../../components/input';

export default class FormValidation extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Fragment>
				<ModuleHeader text="Form Validation" />

				<Row>
					<Col sm={12}>
						<div className="card">
							<div className="card-header">
								<h2>Basic Example 
									<small>Bootstrap includes validation styles for error, warning, and success states on form controls. To use, add .has-warning, .has-error, or .has-success to the parent element. Any .control-label, .form-control, and .help-block within that element will receive the validation styles.</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<div className="form-group has-success">
									<label className="control-label">Input with success</label>
									<Input className="form-control" defaultValue="Vestibulum ante ipsum primis in faucibus orci luctus" />
									<small className="help-block">This is a successfull help block</small>
								</div>
								<br/>
								<div className="form-group has-warning">
									<label className="control-label">Input with warning</label>
									<Input className="form-control" defaultValue="Vestibulum ante ipsum primis in faucibus orci luctus" />
									<small className="help-block">This is a warning help block</small>
								</div>
								<br />
								<div className="form-group has-error">
									<label className="control-label">Input with error</label>
									<Input className="form-control" defaultValue="Vestibulum ante ipsum primis in faucibus orci luctus" />
									<small className="help-block">This is a error help block</small>
								</div>
								<br />
								<div className="has-success">
									<div className="checkbox">
										<label>
											<input type="checkbox"/>
											<i className="input-helper"></i>
											Checkbox with success
										</label>
									</div>
								</div>
								<div className="has-warning">
									<div className="checkbox">
										<label>
											<input type="checkbox"/>
											<i className="input-helper"></i>
											Checkbox with warning
										</label>
									</div>
								</div>
								<div className="has-error">
									<div className="checkbox">
										<label>
											<input type="checkbox"/>
											<i className="input-helper"></i>
											Checkbox with error
										</label>
									</div>
								</div>
							</div>
						</div>

						<div className="card">
							<div className="card-header">
								<h2>Validation Stats with Icon 
									<small>You can also add optional feedback icons with the addition of .has-feedback and the right icon.</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<div className="form-group has-success has-feedback">
									<label className="control-label">Input with success</label>
									<Input className="form-control" defaultValue="Vestibulum ante ipsum primis in faucibus orci luctus" />
									<span className="zmdi zmdi-alert-triangle form-control-feedback"/>
								</div>
								<br />
								<div className="form-group has-warning has-feedback">
									<label className="control-label">Input with warning</label>
									<Input className="form-control" defaultValue="Vestibulum ante ipsum primis in faucibus orci luctus" />
									<span className="zmdi zmdi-check form-control-feedback" />
								</div>
								<br />
								<div className="form-group has-error has-feedback">
									<label className="control-label">Input with error</label>
									<Input className="form-control" defaultValue="Vestibulum ante ipsum primis in faucibus orci luctus" />
									<span className="zmdi zmdi-close form-control-feedback" />
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Fragment>
		)
	}
}