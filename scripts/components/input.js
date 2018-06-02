import React, { Component, Fragment } from 'react'
import InputMask from 'react-input-mask';

const helper = require('../helper/helper').helper

import PropTypes from 'prop-types'

export default class UI extends Component {
	constructor(props) {
		super(props)
	}

	focus(ev) {
		let classes = ev.target.parentElement.classList
		if (classes.contains('rg-line')) { classes.add('rg-toggled'); }

		if (ev.target.tagName == "SELECT") {
			if (classes.contains('rg-line') || classes.contains("select")) { classes.add('select-open'); }
		}

	}
	blur(ev) {
		let classes 	=	ev.target.parentElement.classList,
			testParent 	= 	helper.parents("form-group", ev.target, 'class'),
			parent 		= 	testParent ? testParent : helper.parents("input-group", ev.target, 'class') 
		if (classes.contains('rg-toggled')) {
			if (parent !== null && ev.target.value.trim().length > 0) { }
			else { classes.remove('rg-toggled'); }
		}
		if (ev.target.tagName == "SELECT") {
			if (classes.contains('select-open')) { classes.remove('select-open'); }
		}

		if (this.props.validate == "true" && ev.target.type == "email"){
			if (!helper.validate.email(ev.target.value)){
				parent.classList.add("has-error");
			} else {
				parent.classList.remove("has-error");
			}
		}
	}
	
	render(){
		return null;
	}
}

export class Input extends UI {
	constructor(props) {
		super(props)
	}
	componentDidMount(){
		this.input.onfocus = (ev) => {
			this.focus(ev)
		}
		this.input.onblur = (ev) => {
			this.blur(ev)
		}
	}
	render() {
		const { float, active } = this.props
		return (
			<Fragment>
				<div className={`${active} rg-line`}>
					<input { ...this.props } ref={(ref)=>{this.input = ref}} />
					<div className="rg-input-underline">
						<span className="rg-input-ripple"></span>
					</div>
				</div>
				{float !== "" ? <label className="rg-label">{float}</label> : ""}
			</Fragment>
			
		)
	}
}
Input.defaultProps = {
	float: ""
}
Input.propTypes = {
	float: PropTypes.string,
	active: PropTypes.string
}

export class Inputmask extends UI{
	constructor(props){
		super(props)
	}
	componentDidMount() {
		this.input.onfocus = (ev) => {
			this.focus(ev)
		}
		this.input.onblur = (ev) => {
			this.blur(ev)
		}
	}
	render(){
		return (
			<Fragment>
				<div className="rg-line">
					<InputMask {...this.props} ref={(ref) => { this.input = ref }} />
					<div className="rg-input-underline">
						<span className="rg-input-ripple"></span>
					</div>
				</div>
				{this.props.float ? <label className="rg-label">{this.props.float}</label> : ""}
			</Fragment>
		)
	}
}

export class InputDate extends UI{
	constructor(props) {
		super(props)
	}

	handleChangeDate() { }
	render() {
		return (
			<div className="form-group">
				<Input className="form-control" onClick={this.props.onClick} value={this.props.value} onChange={this.handleChangeDate} />
			</div>
		)
	}
}
export class Select extends UI {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		this.input.onfocus = (ev) => {
			this.focus(ev)
		}
		this.input.onblur = (ev) => {
			this.blur(ev)
		}
	}
	render() {
		return (
			<Fragment>
				<div className="rg-line select">
					<select {...this.props} ref={(ref) => { this.input = ref }}>
						{this.props.children}
					</select>
					<div className="rg-input-underline">
						<span className="rg-input-ripple"></span>
					</div>
				</div>
				{this.props.float ? <label className="rg-label">{this.props.float}</label> : ""}
			</Fragment>

		)
	}
}

export class Textarea extends UI {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		this.input.onfocus = (ev) => {
			this.focus(ev)
		}
		this.input.onblur = (ev) => {
			this.blur(ev)
		}
	}
	render() {
		return (
			<Fragment>
				<div className="rg-line">
					<textarea {...this.props} ref={(ref) => { this.input = ref }}></textarea>
					<div className="rg-input-underline">
						<span className="rg-input-ripple"></span>
					</div>
				</div>
				{this.props.float ? <label className="rg-label">{this.props.float}</label> : ""}
			</Fragment>

		)
	}
}

export class AddOn extends UI {
	constructor(props){
		super(props)
	}

	render() {
		return(
			<span className={this.props.className}>
				<i className={this.props.icon}></i>
			</span>
		)
	}
}