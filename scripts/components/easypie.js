import React, { Component } from 'react';

import PropTypes from 'prop-types'

export default class EasypieChart extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {		
		let chart = new EasyPieChart(this.reference, {
			barColor: this.props.barcolor,
			trackColor: this.props.trackcolor,
			scaleColor: this.props.scalecolor,
			scaleLength: this.props.scalelength,
			lineCap: this.props.linecap,
			lineWidth: this.props.linewidth,
			size: this.props.size
		});
		this.props.link(chart);
	}
	render() {
		return (
			<div className={this.props.className} data-percent={this.props["data-percent"]} ref={(ref) => { this.reference = ref }}>
				{this.props.children}
			</div>
		)
	}
}

EasypieChart.defaultProps = {
	barcolor: "#ef1e25",
	trackcolor: "#f2f2f2",
	scalecolor: "#dfe0e0",
	scalelength: 5,
	linecap: "round",
	linewidth: 3,
	size: 110
}

EasypieChart.propTypes = {
	barcolor: PropTypes.string,
	trackcolor: PropTypes.string,
	scalecolor: PropTypes.string,
	scalelength: PropTypes.number,
	linecap: PropTypes.string,
	linewidth: PropTypes.number,
	size: PropTypes.number,
	rotate: PropTypes.number,
	animate: PropTypes.object,
	link: PropTypes.func
}