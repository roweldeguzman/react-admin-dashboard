import React, { Component, Fragment, createElement } from 'react'
const helper = require("../helper/helper").helper
export default class Ripple extends Component {
	constructor(props){
		super(props)
		this.state = {
			allowed: ["button", "div", "li", "a", "span"]
		}
		this.reference;
	}
	componentDidMount() {
		this.reference.classList.add("waves-effect");
		let classes = this.reference.classList
		if (classes.contains("btn-float") || classes.contains("btn-icon")) {
			Waves.attach(this.reference, ['waves-circle'])
		} else if (classes.contains("btn-light")) {
			Waves.attach(this.reference, ['waves-light'])
		} else {
			Waves.attach(this.reference)
		}
		Waves.init()
	}
	propsToConf(){
		let obj = {};
		obj.ref = (node) => {
			this.reference = node;
		}
		for (const key in this.props) {
			obj[key] = this.props[key]
		}
		return obj;
	}
	render() {
		if (helper.in_array(this.props.type, this.state.allowed)) {
			return(
				createElement(this.props.type, this.propsToConf())
			)
		} else {
			console.error(" Riple Component has No correct props type is provided allowes type are: ", this.state.allowed.toString())
			return null
		}		
	}
}