import React, { Component, Fragment } from 'react';

import ModuleHeade from '../../../common/module-header';
import { Row, Col } from 'react-bootstrap';

export default class Chart extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Fragment>
				<ModuleHeade text="Charts"/>
				<Row>
					<Col sm={12}>
						<p>Comming Soon...</p>
					</Col>
				</Row>
			</Fragment>
		)
	}
}