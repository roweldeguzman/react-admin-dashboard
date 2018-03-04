import React, { Component, Fragment } from 'react';
import ModuleHeader from '../../../common/module-header';

import { Input, Textarea, Select, AddOn, Inputmask, InputDate } from '../../../components/input'
import Switch from '../../../components/switch'

import { Row, Col } from 'react-bootstrap';
import moment from 'moment';
import DatePicker from 'react-datepicker';

export default class FormComponent extends Component {
	constructor(props) {
		super(props)

		this.state = {
			start_date_green: moment(),
			start_date_blue: moment(),
			start_date_red: moment(),

			start_date_input_a: moment(),
			start_date_input_b: moment(),
			start_date_input_c: moment(),
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleChange_green	=	this.handleChange_green.bind(this)
		this.handleChange_blue	=	this.handleChange_blue.bind(this)
		this.handleChange_red 	= 	this.handleChange_red.bind(this)

	}
	handleChange(date) {
		this.setState({
			start_date_input_a: date
		});
	}
	handleChange_green(date) {
		this.setState({
			start_date_green: date
		});
	}
	handleChange_blue(date) {
		this.setState({
			start_date_blue: date
		});
	}
	handleChange_red(date) {
		this.setState({
			start_date_red: date
		});
	}
	render() {
		return (
			<Fragment>
				<ModuleHeader text="Form Components" />
				<Row>
					<Col sm={12}>
						<div className="card">
							<div className="card-header">
								<h2>Input Text
									<small>Text Inputs with different sizes by height and column.</small>
								</h2>
							</div>

							<div className="card-body card-padding">
								<p className="c-black f-500 m-b-5">Basic Example</p>
								<small>Place one add-on or button on either side of an input. You may also place one on both sides of an input.</small>

								<br />
								<br />
								<Row>
									<Col sm={4}>
										<div className="input-group">
											<AddOn className="input-group-addon" icon="zmdi zmdi-account"/>
											<Input className="form-control" placeholder="Full Name" />
										</div>
										<br/>

										<div className="input-group">
											<AddOn className="input-group-addon" icon="zmdi zmdi-phone" />
											<Input className="form-control" placeholder="Contact Number" />
										</div>
										<br />

										<div className="input-group">
											<AddOn className="input-group-addon" icon="zmdi zmdi-email" />
											<Input className="form-control" placeholder="Email Address" />
										</div>
										<br />

										<div className="input-group">
											<AddOn className="input-group-addon" icon="zmdi zmdi-pin" />
											<Input className="form-control" placeholder="Home Address" />
										</div>
									</Col>
									<Col sm={4}>
										<div className="input-group">
											<Input className="form-control" placeholder="Landscape" />
											<AddOn className="input-group-addon last" icon="zmdi zmdi-landscape" />											
										</div>
										<br />

										<div className="input-group">
											<Input className="form-control" placeholder="Weather" />
											<AddOn className="input-group-addon last" icon="zmdi zmdi-sun" />
										</div>
										<br />

										<div className="input-group">
											<Input className="form-control" placeholder="Flight" />
											<AddOn className="input-group-addon last" icon="zmdi zmdi-airplane" />
										</div>
										<br />

										<div className="input-group">
											<Input className="form-control" placeholder="Location" />
											<AddOn className="input-group-addon last" icon="zmdi zmdi-my-location" />
										</div>
									</Col>
									<Col sm={4}>
										<div className="input-group">
											<AddOn className="input-group-addon last" icon="zmdi zmdi-arrow-missed" />
											<Input className="form-control" placeholder="Internet" />
											<AddOn className="input-group-addon last" icon="zmdi zmdi-globe" />
										</div>
										<br />

										<div className="input-group">
											<AddOn className="input-group-addon last" icon="zmdi zmdi-money" />
											<Input className="form-control" placeholder="Notification" />
											<AddOn className="input-group-addon last" icon="zmdi zmdi-circle-o" />
										</div>
										<br />

										<div className="input-group">
											<AddOn className="input-group-addon last" icon="zmdi zmdi-mail-send" />
											<Input className="form-control" placeholder="Layer" />
											<AddOn className="input-group-addon last" icon="zmdi zmdi-layers" />
										</div>
										<br />

										<div className="input-group">
											<AddOn className="input-group-addon last" icon="zmdi zmdi-portable-wifi" />
											<Input className="form-control" placeholder="Message" />
											<AddOn className="input-group-addon last" icon="zmdi zmdi-dialpad" />
										</div>
									</Col>
								</Row>
								<br />
								<br />
								<p className="c-black f-500 m-b-5 m-t-20">Multiple Elements</p>
								<small>You may add 2 or more possible input elements. Use grid classes to define the width of each elements.</small>

								<br />
								<br />
								<div className="input-group">
					
									<AddOn className="input-group-addon last" icon="zmdi zmdi-account" />
									<div className="col-sm-4">
										<Input className="form-control" placeholder="First Name" />
									</div>
									<div className="col-sm-4">
										<Input className="form-control" placeholder="Last Name" />
									</div>
								</div>
								<br />
								<br />

								<div className="input-group">
									<AddOn className="input-group-addon" icon="zmdi zmdi-phone" />
									<div className="col-sm-2">
										<Select className="form-control">
											<option value="">-- Select an Option--</option>
											<option>055</option>
											<option>056</option>
											<option>057</option>
											<option>058</option>
										</Select>
									</div>
									<div className="col-sm-2 p-r-0">
										<Select className="form-control">
											<option value="">-- Select an Option--</option>
											<option>812</option>
											<option>813</option>
											<option>814</option>
											<option>815</option>
										</Select>
									</div>
									<div className="col-sm-4">
										<Input className="form-control" placeholder="Phone Number" />
									</div>
								</div>
								<br />
								<br />
								<p className="c-black f-500 m-b-5 m-t-20">Different Sizes</p>
								<small>You may use the extra sizing classes to change size of the feilds.</small>

								<br />
								<br />
								<div className="input-group input-group-lg">
									<AddOn className="input-group-addon" icon="zmdi zmdi-sun" />
									<Input className="form-control input-lg" placeholder="Weather" />
									
								</div>
						
								<br/>
						
								<div className="input-group">
									
									<AddOn className="input-group-addon" icon="zmdi zmdi-sun" />
									<Input className="form-control" placeholder="Weather" />					
								</div>
						
								<br/>
						
								<div className="input-group input-group-sm">
								<AddOn className="input-group-addon" icon="zmdi zmdi-sun" />
									<Input className="form-control input-sm" placeholder="Weather" />	
								</div>
							</div>
						</div>

						<div className="card">
							<div className="card-header">
								<h2>Input Mask
								<small>An inputmask helps the user with the input by ensuring a predefined format. This can be useful for dates, numerics, phone numbers etc...</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<Row>
									<Col sm={3}>
										<div className="form-group">
											<label>Date</label>
											<Inputmask className="form-control" mask="99/99/9999" placeholder="dd/mm/yyyy"/>
										</div>
									</Col>
									<Col sm={3}>
										<div className="form-group">
											<label>Time</label>
											<Inputmask className="form-control" mask="99:99:99" placeholder="hh:mm:ss" />
										</div>
									</Col>
									<Col sm={3}>
										<div className="form-group">
											<label>Date Time</label>
											<Inputmask className="form-control" mask="99-99-9999 99:99:99" placeholder="dd-mm-yyyy hh:mm:ss" />
										</div>
									</Col>
									<Col sm={3}>
										<div className="form-group">
											<label>CEP</label>
											<Inputmask className="form-control" mask="99999-999" placeholder="00000-000" />
										</div>
									</Col>


									<Col sm={3}>
										<div className="form-group">
											<label>Phone Number</label>
											<Inputmask className="form-control" mask="999-99-9999999" placeholder="000-00-0000000" />
										</div>
									</Col>
									<Col sm={3}>
										<div className="form-group">
											<label>Phone with Odd</label>
											<Inputmask className="form-control" mask="+(63) 999 999 9999" placeholder="+(63) 999 999 9999" />
										</div>
									</Col>
									<Col sm={3}>
										<div className="form-group">
											<label>US Phone Number</label>
											<Inputmask className="form-control" mask="(999) 9999-9999" placeholder="(000) 0000-0000" />
										</div>
									</Col>
									<Col sm={3}>
										<div className="form-group">
											<label>CPF</label>
											<Inputmask className="form-control" mask="999.999.999-99" placeholder="000.000.000-00" />
										</div>
									</Col>


									<Col sm={3}>
										<div className="form-group">
											<label>Money</label>
											<Inputmask className="form-control" mask="999,999,999,999,999.99" placeholder="000,000,000,000,000.00" />
										</div>
									</Col>
									<Col sm={3}>
										<div className="form-group">
											<label>IP Address</label>
											<Inputmask className="form-control" mask="999.999.999.999" placeholder="000.000.000.000" />
										</div>
									</Col>
									<Col sm={3}>
										<div className="form-group">
											<label>Percentage</label>
											<Inputmask className="form-control" mask="99999.99%" placeholder="00000,00%" />
										</div>
									</Col>
									<Col sm={3}>
										<div className="form-group">
											<label>Credit Card</label>
											<Inputmask className="form-control" mask="9999 9999 9999 9999" placeholder="0000 0000 0000 0000" />
										</div>
									</Col>
								</Row>
							</div>
						</div>

						<div className="card">
							<div className="card-header">
								<h2>Toggle Switch
									<small>Material Desing look alike Toggle Switches based on Radio Box.</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<p className="f-500 c-black m-b-5">Basic Examples</p>
								<small>Default and Disabled options</small>
								<br />
								<br />
								<br />
								<Row className="m-b-20">
									<Col sm={4} className="m-b-20">
										<Switch className="toggle-switch">
											<label className="ts-label" htmlFor="ts-default">Toggle Swith Default</label>
											<input type="checkbox" id="ts-default" hidden="hidden"/>
											<label className="ts-helper" htmlFor="ts-default"></label>
										</Switch>
									</Col>
									<Col sm={4} className="m-b-20">
										<Switch className="toggle-switch disabled" switcher="switch-disabled" switchColor="rgba(33,150,243,0.5)" switchActive="#2196f3">
											<label className="ts-label" htmlFor="ts-disabled">Toggle Swith Disabled</label>
											<input type="checkbox" id="ts-disabled" hidden="hidden" disabled="disabled"/>
											<label className="ts-helper" htmlFor="ts-disabled"></label>
										</Switch>
									</Col>
								</Row>
								<p className="f-500 c-black m-b-5">Optional Color schemes</p>
								<small>You can use any color you want just add attribute switcher it must have a unique value, switchColor with color value amd switchActive with color value.</small>
								<br />
								<br />
								<br />
								<Row>
									<Col sm={4} className="m-b-20">
										<Switch className="toggle-switch" switcher="switch-red" switchColor="rgba(244,67,54,0.5)" switchActive="#f44336">
											<label className="ts-label" htmlFor="ts-red">Toggle Swith Red</label>
											<input type="checkbox" id="ts-red" hidden="hidden" />
											<label className="ts-helper" htmlFor="ts-red"></label>
										</Switch>
									</Col>

									<Col sm={4} className="m-b-20">
										<Switch className="toggle-switch" switcher="switch-blue" switchColor="rgba(33,150,243,0.5)" switchActive="#2196f3">
											<label className="ts-label" htmlFor="ts-blue">Toggle Swith Blue</label>
											<input type="checkbox" id="ts-blue" hidden="hidden" />
											<label className="ts-helper" htmlFor="ts-blue"></label>
										</Switch>
									</Col>

									<Col sm={4} className="m-b-20">
										<Switch className="toggle-switch" switcher="switch-green" switchColor="rgba(76,175,80,0.5)" switchActive="#4caf50">
											<label className="ts-label" htmlFor="ts-green">Toggle Swith Green</label>
											<input type="checkbox" id="ts-green" hidden="hidden" />
											<label className="ts-helper" htmlFor="ts-green"></label>
										</Switch>
									</Col>

									<Col sm={4} className="m-b-20">
										<Switch className="toggle-switch" switcher="switch-cyan" switchColor="rgba(0,188,212,0.5)" switchActive="#00bcd4">
											<label className="ts-label" htmlFor="ts-cyan">Toggle Swith Cyan</label>
											<input type="checkbox" id="ts-cyan" hidden="hidden" />
											<label className="ts-helper" htmlFor="ts-cyan"></label>
										</Switch>
									</Col>

									<Col sm={4} className="m-b-20">
										<Switch className="toggle-switch" switcher="switch-lime" switchColor="rgba(205,220,57,0.5)" switchActive="#cddc39">
											<label className="ts-label" htmlFor="ts-lime">Toggle Swith Lime</label>
											<input type="checkbox" id="ts-lime" hidden="hidden" />
											<label className="ts-helper" htmlFor="ts-lime"></label>
										</Switch>
									</Col>

									<Col sm={4} className="m-b-20">
										<Switch className="toggle-switch" switcher="switch-amber" switchColor="rgba(255,193,7,0.5)" switchActive="#ffc107">
											<label className="ts-label" htmlFor="ts-amber">Toggle Swith Amber</label>
											<input type="checkbox" id="ts-amber" hidden="hidden" />
											<label className="ts-helper" htmlFor="ts-amber"></label>
										</Switch>
									</Col>

									<Col sm={4} className="m-b-20">
										<Switch className="toggle-switch" switcher="switch-purple" switchColor="rgba(156,39,176,0.5)" switchActive="#9c27b0">
											<label className="ts-label" htmlFor="ts-purple">Toggle Swith Purple</label>
											<input type="checkbox" id="ts-purple" hidden="hidden" />
											<label className="ts-helper" htmlFor="ts-purple"></label>
										</Switch>
									</Col>

									<Col sm={4} className="m-b-20">
										<Switch className="toggle-switch" switcher="switch-pink" switchColor="rgba(233,30,99,0.5)" switchActive="#e91e63">
											<label className="ts-label" htmlFor="ts-pink">Toggle Swith Pink</label>
											<input type="checkbox" id="ts-pink" hidden="hidden" />
											<label className="ts-helper" htmlFor="ts-pink"></label>
										</Switch>
									</Col>

								</Row>
							</div>
						</div>

						<div className="card">
							<div className="card-header">
								<h2>Datepicker
									<small>
										<a href="https://reactdatepicker.com">react-datepicker</a>
									</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<p className="c-black">Inline Examples</p>
								<small>Displaying the Datepicker by default</small>
								<br /><br />
								<Row>
									<Col sm={12} md={4}>
										<div className="dp-green">
											<DatePicker todayButton={"Today"} inline showMonthDropdown showYearDropdown dropdownMode="select" selected={this.state.start_date_green} name="start_date_green" onChange={this.handleChange_green} />
										</div>
									</Col>
									<Col sm={12} md={4}>
										<div className="dp-blue">
											<DatePicker todayButton={"Today"} inline showMonthDropdown showYearDropdown dropdownMode="select"  selected={this.state.start_date_blue} name="start_date_blue" onChange={this.handleChange_blue} />
										</div>
									</Col>
									<Col sm={12} md={4}>
										<div className="dp-red">
											<DatePicker todayButton={"Today"} inline showMonthDropdown showYearDropdown dropdownMode="select"  selected={this.state.start_date_red} name="start_date_red" onChange={this.handleChange_red} />
										</div>
									</Col>
								</Row>
								<br/>
								<p className="c-black">Multiple Popup Examples</p>
								<small>Displaying on focus</small>

								<Row>
									<Col sm={12} md={4}>
										<div className="picker-input">
											<DatePicker popperClassName="dp-green" todayButton={"Today"} showMonthDropdown showYearDropdown customInput={<InputDate />} name="start_date_input_a" selected={this.state.start_date_input_a} onChange={this.handleChange} />
										</div>
									</Col>
									<Col sm={12} md={4}>
										<div className="picker-input">
											<DatePicker popperClassName="dp-blue" todayButton={"Today"} showMonthDropdown showYearDropdown customInput={<InputDate />} name="start_date_input_a" selected={this.state.start_date_input_a} onChange={this.handleChange} />
										</div>
									</Col>
									<Col sm={12} md={4}>
										<div className="picker-input">
											<DatePicker popperClassName="dp-red" todayButton={"Today"} showMonthDropdown showYearDropdown customInput={<InputDate />} name="start_date_input_a" selected={this.state.start_date_input_a} onChange={this.handleChange} />
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
