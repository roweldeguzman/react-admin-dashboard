import React, { Component, Fragment } from 'react'
import ModuleHeader from '../../../common/module-header'
export default class FormExample extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Fragment>
				<ModuleHeader text="Form Example" />
			</Fragment>
		)
	}
}