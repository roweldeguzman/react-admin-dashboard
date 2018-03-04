import React, { Component, Fragment } from 'react';
import ModuleHeader from '../../../common/module-header';
import { Input, Textarea, Select } from '../../../components/input'
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
											<Input className="form-control input-sm" placeholder="This is Focused" autoFocus="autofocus" />
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
						
						<div className="card">
							<div className="card-header">
								<h2>Textarea
									<small>Form control which supports multiple lines of text. Change 'rows' attribute as necessary.</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<p className="c-black f-500 m-b-20">Basic Example</p>

								<div className="form-group">
									<Textarea className="form-control" rows="5" placeholder="Let us type some lorem ipsum...." />
								</div>
								<p className="c-black f-500 m-b-20">Disabled State</p>
								<div className="form-group">
									<Textarea className="form-control" rows="5" placeholder="Let us type some lorem ipsum...." disabled />
								</div>
							</div>
						</div>


						<div className="card">
							<div className="card-header">
								<h2>Select
									<small>Use the default option, or add multiple to show multiple options at once.</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<Row>
									<Col sm={6}>
										<p className="c-black f-500 m-b-20">Basic Example</p>
										<div className="form-group">
											<Select className="form-control">
												<option value="">-- Select an Option--</option>
												<option>Option 1</option>
												<option>Option 2</option>
												<option>Option 3</option>
												<option>Option 4</option>
												<option>Option 5</option>
											</Select>
										</div>
									</Col>
									<Col sm={6}>
										<p className="c-black f-500 m-b-20">Disabled Stat</p>
										<div className="form-group">
											<Select className="form-control" disabled>
												<option value="">-- Select an Option--</option>
												<option>Option 1</option>
												<option>Option 2</option>
												<option>Option 3</option>
												<option>Option 4</option>
												<option>Option 5</option>
											</Select>
										</div>
									</Col>
								</Row>
							</div>
						</div>


						<div className="card">
							<div className="card-header">
								<h2>Checkbox and Radio 
									<small>Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<p className="c-black f-500 m-b-20">Basic Example</p>
		
								<div className="checkbox m-b-15">
									<label>
										<input type="checkbox" value=""/>
										<i className="input-helper"></i>
										Option one is this and that-be sure to include why it's great
									</label>
								</div>
						
								<div className="checkbox disabled">
									<label>
										<input type="checkbox" value="" disabled=""/>
										<i className="input-helper"></i>
										Option two is disabled
									</label>
								</div>
						
								<br/>
						
								<div className="radio m-b-15">
									<label>
										<input type="radio" name="sample" value=""/>
										<i className="input-helper"></i>
										Option one is this and that-be sure to include why it's great
									</label>
								</div>
						
								<div className="radio m-b-15">
									<label>
										<input type="radio" name="sample" value=""/>
										<i className="input-helper"></i>
										Option two can be something else and selecting it will deselect option one
									</label>
								</div>
						
								<div className="radio disabled">
									<label>
										<input type="radio" value="" disabled=""/>
										<i className="input-helper"></i>
										Option three is disabled
									</label>
								</div>
						
								<br/>
								<p className="c-black f-500 m-b-20 m-t-20">Inline Checkboxes and Radios - Use the '.checkbox-inline' or '.radio-inline' classes on a series of checkboxes or radios
									for controls that appear on the same line.</p>
						
								<label className="checkbox checkbox-inline m-r-20">
									<input type="checkbox" value="option1"/>
									<i className="input-helper"></i>
									1
								</label>
								<label className="checkbox checkbox-inline m-r-20">
									<input type="checkbox" value="option2"/>
									<i className="input-helper"></i>
									2
								</label>
								<label className="checkbox checkbox-inline m-r-20">
									<input type="checkbox" value="option3"/>
									<i className="input-helper"></i>
									3
								</label>
						
								<br/>
								<br/>
						
								<label className="radio radio-inline m-r-20">
									<input type="radio" name="inlineRadioOptions" value="option1"/>
									<i className="input-helper"></i>
									1
								</label>
						
								<label className="radio radio-inline m-r-20">
									<input type="radio" name="inlineRadioOptions" value="option2"/>
									<i className="input-helper"></i>
									2
								</label>
						
								<label className="radio radio-inline m-r-20">
									<input type="radio" name="inlineRadioOptions" value="option3"/>
									<i className="input-helper"></i>
									3
								</label>
							</div>
						</div>
					</Col>
				</Row>
			</Fragment>
		)
	}
}