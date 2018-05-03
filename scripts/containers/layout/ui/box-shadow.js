import React, { Component, Fragment } from 'react'

import ModuleHeader from '../../../common/module-header';
import { Row, Col } from 'react-bootstrap';

export default class UIBoxShadow extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Fragment>
				<ModuleHeader text="Box Shadow"/>
				<Row>
					<Col sm={6} md={4}>
						<div className="bs-item z-depth-1">
							.z-depth-1 / .z-depth(1)
						</div>
					</Col>
					<Col sm={6} md={4}>
						<div className="bs-item z-depth-2">
							.z-depth-2 / .z-depth(2)
						</div>
					</Col>
					<Col sm={6} md={4}>
						<div className="bs-item z-depth-3">
							.z-depth-3 / .z-depth(3)
						</div>
					</Col>
					<Col sm={6} md={4}>
						<div className="bs-item z-depth-5">
							.z-depth-4 / .z-depth(4)
						</div>
					</Col>
					<Col sm={6} md={4}>
						<div className="bs-item z-depth-5">
							.z-depth-5 / .z-depth(5)
						</div>
					</Col>
				</Row>

				<Row>
					<Col sm={6} md={4}>
						<div className="bs-item z-depth-1-top">
							.z-depth-1-top / .z-depth(1)
						</div>
					</Col>
					<Col sm={6} md={4}>
						<div className="bs-item z-depth-2-top">
							.z-depth-2-top / .z-depth-top(2)
						</div>
					</Col>
					<Col sm={6} md={4}>
						<div className="bs-item z-depth-3-top">
							.z-depth-3-top / .z-depth-top(3)
						</div>
					</Col>
					<Col sm={6} md={4}>
						<div className="bs-item z-depth-4-top">
							.z-depth-4-top / .z-depth-top(4)
						</div>
					</Col>
					<Col sm={6} md={4}>
						<div className="bs-item z-depth-5-top">
							.z-depth-5-top / .z-depth-top(5)
						</div>
					</Col>
				</Row>

				<Row>
					<Col sm={6} md={4}>
						<div className="bs-item z-depth-1-bottom">
							.z-depth-1-bottom / .z-depth(1)
						</div>
					</Col>
					<Col sm={6} md={4}>
						<div className="bs-item z-depth-2-bottom">
							.z-depth-2-bottom / .z-depth-bottom(2)
						</div>
					</Col>
					<Col sm={6} md={4}>
						<div className="bs-item z-depth-3-bottom">
							.z-depth-3-bottom / .z-depth-bottom(3)
						</div>
					</Col>
					<Col sm={6} md={4}>
						<div className="bs-item z-depth-4-bottom">
							.z-depth-4-bottom / .z-depth-bottom(4)
						</div>
					</Col>
					<Col sm={6} md={4}>
						<div className="bs-item z-depth-5-bottom">
							.z-depth-5-bottom / .z-depth-bottom(5)
						</div>
					</Col>
				</Row>

			</Fragment>
		)
	}
}