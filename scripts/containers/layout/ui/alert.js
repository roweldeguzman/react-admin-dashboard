import React, { Component, Fragment } from 'react'
import ModuleHeader from '../../../common/module-header';
import Ripple from '../../../components/ripple';

import { Row, Col, Alert } from 'react-bootstrap';

export default class UIAlert extends Component {
	constructor(props) {
		super(props)
		this.alerts = [
			{
				type: "success",
				message: `Well done! You successfully read this important alert message.`
			}, {
				type: "info",
				message: `Heads up! This alert needs your attention, but it's not super important.`
			}, {
				type: "warning",
				message: `Warning! Better check yourself, you're not looking too good.`
			}, {
				type: "danger",
				message: `Oh snap! Change a few things up and try submitting again.`
			}
		]
		this.onDismis = this.onDismis.bind(this)
		this.state = {
			alerts: this.alerts
		}
	}
	onDismis(ctr){
		this.state.alerts.map((item, i) => {
			if (i == ctr) {
				this.state.alerts.splice(i, 1)
				this.setState({
					alerts: this.state.alerts
				});
			}
		})
	}

	reset() {
		this.setState({
			alerts: this.alerts.map((alert) => Object.assign({}, alert))
		})
		
	}
	render() {
		return (
			<Fragment>
				<ModuleHeader text="Alert"/>
				<Row>
					<Col sm={12}>
						<div className="card">
							<div className="card-header">
								<h2>Basic Example 
									<small>Wrap any text and an optional dismiss button in '.alert' and one of the four contextual classes (e.g., .alert-success) for basic alert messages.</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<Alert bsStyle="success">
									<strong>Well done!</strong> You successfully read<a className="alert-link"> this important alert message</a>.
								</Alert>
								<Alert bsStyle="info">
									<strong>Heads up!</strong>This
									<a className="alert-link"> alert needs your attention</a>, but it's not super important.
								</Alert>
								<Alert bsStyle="warning">
									<strong>Warning!</strong> Better check yourself, you're
									<a className="alert-link"> not looking too good</a>.
								</Alert>
								<Alert bsStyle="danger">
									<strong>Oh snap!</strong><a className="alert-link"> Change a few things up</a> and try submitting again.
								</Alert>
							</div>
						</div>

						<div className="card">
							<div className="card-header">
								<h2>Dismissing
									<small>Alerts have <code>onDismis</code> option. Enabling it will show close button to the right of the alert.</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								{this.state.alerts.map((item, i) => (
									<Alert bsStyle={item.type} key={i} onDismiss={() => { this.onDismis(i)}}>
										{item.message}
									</Alert>
								))}
								<Ripple type="button" className="btn btn-primary" onClick={this.reset.bind(this)} >Reset</Ripple>
							</div>
						</div>
					</Col>
				</Row>
			</Fragment>
		)
	}
}