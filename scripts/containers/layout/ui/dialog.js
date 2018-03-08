import React, { Component } from 'react'

import swal from 'sweetalert';

export default class UIDialog extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount(){
		swal("Hello world!");
		//https://sweetalert.js.org/guides/
	}
	render() {
		return (
			<div> UI Dialog </div>
		)
	}
}