import React, { Component } from 'react'

export default class Switch extends Component {
	constructor(props) {
		super(props)
		this.switcher = this.props.switcher
		this.switchColor = this.props.switchColor
		this.switchActive = this.props.switchActive
		
	}
	componentDidMount() {
		this.reference.classList.add(this.switcher);
		
		var css = ".toggle-switch." + this.switcher + " input:checked:not(:disabled) + .ts-helper{ background: " + this.switchColor + ";}";
		css += ".toggle-switch." + this.switcher + " input:checked:not(:disabled) + .ts-helper::before{background: " + this.switchActive + ";}";

		var style = document.createElement("style");
		style.type = "text/css",
		style.appendChild(document.createTextNode(css));
		document.getElementsByTagName("head")[0].appendChild(style);

	}
	render() {
		return (
			<div className={this.props.className} ref={(ref) => { this.reference = ref }} >
				{this.props.children}
			</div>
		)
	}
}