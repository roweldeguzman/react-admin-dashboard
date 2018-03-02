import React, { Component, Fragment } from 'react';
import ModuleHeader from '../../../common/module-header';

import { Input, Textarea, Select, AddOn } from '../../../components/input'


import { Row, Col } from 'react-bootstrap';
import moment from 'moment';
import DatePicker from 'react-datepicker';

export default class FormComponent extends Component {
	constructor(props) {
		super(props)

		this.state = {
			startDate: moment()
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(date) {
		this.setState({
			startDate: date
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


							</div>
						</div>
					</Col>
				</Row>
				<Row>{/* <DatePicker customInput={<ExampleCustomInput />} selected={this.state.startDate} onChange={this.handleChange} /> */}</Row>
			</Fragment>
		)
	}
}

class ExampleCustomInput extends Component {
	handleChangeDate (){}
	render() {
		return (
			<Input className="form-control" onClick={this.props.onClick} value={this.props.value} onChange={this.handleChangeDate}/>
			// <button
			// 	className="example-custom-input"
			// 	onClick={this.props.onClick}>
			// 	{this.props.value}
			// </button>
		)
	}
}