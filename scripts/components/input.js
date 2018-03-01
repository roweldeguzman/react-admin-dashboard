import React, { Component, Fragment } from 'react'
const helper = require('../helper/helper').helper

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
		let classes =	ev.target.parentElement.classList,
			parent = helper.parents("form-group", ev.target, 'class')

		if (classes.contains('rg-toggled')) {
			if (parent !== null && parent.classList.contains('rg-float') && ev.target.value.trim().length > 0) { }
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
	
	render() {
		return (
			<Fragment>
				<div className="rg-line">
					<input { ...this.props } onFocus={(e) => this.focus(e)} onBlur={(e) => this.blur(e)} />
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

	render() {
		return (
			<Fragment>
				<div className="rg-line">
					<textarea { ...this.props } onFocus={(e) => this.focus(e)} onBlur={(e) => this.blur(e)} ></textarea>
					<div className="rg-input-underline">
						<span className="rg-input-ripple"></span>
					</div>
				</div>
				{this.props.float ? <label className="rg-label">{this.props.float}</label> : ""}
			</Fragment>

		)
	}
}