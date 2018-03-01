import React, { Component } from 'react'

import $ from 'jquery'

export default class Sparkline extends Component {
	constructor(props) {
		super(props)
		this.state = {
			type: this.props.type,
			value: this.props.value,
			width: this.props.width,
			height: this.props.height
		}
	}
	
	componentDidMount(){ this.doChecking() }

	componentWillReceiveProps(nextProps) {
		this.setState({
			type: nextProps.type,
			value: nextProps.value,
			width: nextProps.width
		})
		setTimeout(() => {
			this.doChecking()	
		}, 0);		
	}
	doChecking() {
		if (this.state.type == "bar") {
			this.sparkLineBar(this.state.value, '45px', 3, '#fff', 2);
		} else if (this.state.type == "line") {
			this.sparkLineLine(this.state.value, this.state.width, this.state.height, '#fff', 'rgba(0,0,0,0)', 1.25, 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.4)', 3, '#fff', 'rgba(255,255,255,0.4)');
		} else if (this.state.type == "pie") {
			this.sparkLinePie(this.state.value, this.state.width, this.state.height, ['#fff', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.2)']);
		} else {
			console.error("Error in SparkLineDirective: ", "Invalid sparkline type. available is bar, line or pie");
		}
	}
	sparkLineBar(values, height, barWidth, barColor, barSpacing){
		$(this.reference).sparkline(values, {
			type: 'bar',
			height: height,
			barWidth: barWidth,
			barColor: barColor,
			barSpacing: barSpacing
		});
	}
	sparkLineLine(values, width, height, lineColor, fillColor, lineWidth, maxSpotColor, minSpotColor, spotColor, spotRadius, hSpotColor, hLineColor){
		$(this.reference).sparkline(values, {
			type: 'line',
			width: width,
			height: height,
			lineColor: lineColor,
			fillColor: fillColor,
			lineWidth: lineWidth,
			maxSpotColor: maxSpotColor,
			minSpotColor: minSpotColor,
			spotColor: spotColor,
			spotRadius: spotRadius,
			highlightSpotColor: hSpotColor,
			highlightLineColor: hLineColor
		});
	}
	sparkLinePie(values, width, height, sliceColors){
		$(this.reference).sparkline(values, {
			type: 'pie',
			width: width,
			height: height,
			sliceColors: sliceColors,
			offset: 0,
			borderWidth: 0
		});
	}
	render() {
		return (
			<div { ...this.props } ref={(ref) => { this.reference = ref }} />
		)
	}
}