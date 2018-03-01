import React, { Component, Fragment } from 'react';
import ModuleHeader from '../../../common/module-header';
import { Input, Textare } from '../../../components/input'
import {Row, Col } from 'react-bootstrap';
export default class FormBasic extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Fragment>
				<ModuleHeader text="Form Basic"/>
				<Row>
					<Col sm={12}>
						<div className="card">
							<div className="card-header">
								<h2>Input Text
									<small>Text Inputs with different sizes by height and column.</small>
								</h2>
							</div>
							
							<div className="card-body card-padding">
								<p className="c-black f-500">Basic Text Feilds with different sizes by height and column.</p>

								<div className="form-group">
									<Input className="form-control input-sm" placeholder="Input Small"/>
								</div>
								<div className="form-group">
									<Input className="form-control " placeholder="Input Defaul"/>
								</div>
								<div className="form-group">
									<Input className="form-control input-lg" placeholder="Input Large"/>
								</div>

								<Row>
									<Col sm={4}>
										<div className="form-group">
											<Input className="form-control input-sm" placeholder="col-sm-4" />
										</div>
									</Col>
									<Col sm={4}>
										<div className="form-group">
											<Input className="form-control input-sm" placeholder="col-sm-4" />
										</div>
									</Col>
									<Col sm={4}>
										<div className="form-group">
											<Input className="form-control input-sm" placeholder="col-sm-4" />
										</div>
									</Col>
								</Row>

								<Row>
									<Col sm={3}>
										<div className="form-group">
											<Input className="form-control input-sm" placeholder="col-sm-3" />
										</div>
									</Col>
									<Col sm={3}>
										<div className="form-group">
											<Input className="form-control input-sm" placeholder="col-sm-3" />
										</div>
									</Col>
									<Col sm={3}>
										<div className="form-group">
											<Input className="form-control input-sm" placeholder="col-sm-3" />
										</div>
									</Col>
									<Col sm={3}>
										<div className="form-group">
											<Input className="form-control input-sm" placeholder="col-sm-3" />
										</div>
									</Col>
								</Row>

								<Row>
									<Col sm={6}>
										<div className="form-group">
											<Input className="form-control input-sm" placeholder="col-sm-6" />
										</div>
									</Col>
									<Col sm={6}>
										<div className="form-group">
											<Input className="form-control input-sm" placeholder="col-sm-6" />
										</div>
									</Col>
								</Row>

								<p className="m-b-25 m-t-25 c-black f-500">Floating Label - Floating animation for label when Input feild is active.</p>

								<div className="form-group rg-float">
									<Input className="form-control input-sm" float="Input Small" />
								</div>
								<div className="form-group rg-float">
									<Input className="form-control" float="Input Defaul" />
								</div>
								<div className="form-group rg-float">
									<Input className="form-control input-lg" float="Input Large" />
								</div>

								<p className="m-b-25 m-t-25 c-black f-500">Input Status - Focused and Disabled</p>
								<Row>
									<Col sm={6}>
										<div className="form-group rg-float">
											<Input className="form-control input-sm" placeholder="This is Focused" autofocus="autofocus" />
										</div>
									</Col>
									<Col sm={6}>
										<div className="form-group rg-float">
											<Input className="form-control" placeholder="This is Disabled" disabled="disabled" />
										</div>
									</Col>
								</Row>								
							</div>							
						</div>
					</Col>
				</Row>
			</Fragment>
		)
	}
}