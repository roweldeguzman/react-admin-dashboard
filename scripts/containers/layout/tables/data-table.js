import React, { Component, Fragment } from 'react';

import HeaderModule from '../../../common/module-header';
import { Row, Col } from 'react-bootstrap';

export default class DataTable extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Fragment>
				<HeaderModule text="Data Tables"/>
				<Row>
					<Col sm={12}>
						<p>Comming Soon...</p>
					</Col>
				</Row>
			</Fragment>
		)
	}
}