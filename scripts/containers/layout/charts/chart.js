import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Sparkline from '../../../components/sparkline';
import EasypieChart from '../../../components/easypie';
import ModuleHeader from '../../../common/module-header';

import { Row, Col, Alert, NavDropdown, MenuItem, } from 'react-bootstrap'

// Redux Action
import { sparklineAction } from '../../../actions/sparkling-action';

class Chart extends Component {
	constructor(props){
		super(props);
		this.state = {
			sent_percent: 45,
			sold_percent: 45,
			spam_percent: 45,
			profit_percent: 45,
			sent: {
				chart_ref: {},
				reference: (ref) => {
					this.state.sent.chart_ref = ref;
				}
			},
			sold: {
				chart_ref: {},
				reference: (ref) => {
					this.state.sold.chart_ref = ref;
				}
			},
			spam: {
				chart_ref: {},
				reference: (ref) => {
					this.state.spam.chart_ref = ref;
				}
			},
			profit: {
				chart_ref: {},
				reference: (ref) => {
					this.state.profit.chart_ref = ref;
				}
			}
		}
		this.barPloter;
		this.donutPloter;
		this.piePloter;

		this.barChart = this.barChart.bind(this);
		this.donutChart = this.donutChart.bind(this);
	}

	componentDidMount(){
		this.barChart();
		this.dynamicChart();
		this.donutChart();
	}
	
	barChart() {
		$.plot($("#bar-chart"), this.barPloterData(), {
			grid: {
				borderWidth: 1,
				borderColor: '#eee',
				show: true,
				hoverable: true,
				clickable: true
			},
			tooltip: true,
			tooltipOpts: {
				content: "%s of %x = %y",
				shifts: {
					x: 20,
					y: 0
				},
				defaultTheme: false,
				cssClass: 'flot-tooltip'
			},
			yaxis: {
				tickColor: '#eee',
				tickDecimals: 0,
				font: {
					lineHeight: 13,
					style: "normal",
					color: "#9f9f9f",
				},
				shadowSize: 0
			},

			xaxis: {
				tickColor: '#fff',
				tickDecimals: 0,
				font: {
					lineHeight: 13,
					style: "normal",
					color: "#9f9f9f"
				},
				shadowSize: 0,
			},

			legend: {
				container: '.flc-bar',
				backgroundOpacity: 0.5,
				noColumns: 0,
				backgroundColor: "white",
				lineWidth: 0
			}
		});
	}
	dynamicChart() {
		var data = [],
			totalPoints = 300,
			j = 0;
		function getRandomData() {

			if (data.length > 0)
				data = data.slice(1);
			while (data.length < totalPoints) {
				var prev = data.length > 0 ? data[data.length - 1] : 50,
					y = prev + Math.random() * 10 - 5;

				if (y < 0) {
					y = 0;
				} else if (y > 90) {
					y = 90;
				}
				data.push(y);
			}
			var res = [];
			for (var i = 0; i < data.length; ++i) {
				res.push([j++, data[i]])
			}

			return res;
		}
		var updateInterval = 30;
		var plot = $.plot("#dynamic-chart", [getRandomData()], {
			series: {
				label: "Server Process Data",
				lines: {
					show: true,
					lineWidth: 0.2,
					fill: 0.6
				},

				color: '#00BCD4',
				shadowSize: 0
			},
			yaxis: {
				min: 0,
				max: 100,
				tickColor: '#eee',
				font: {
					lineHeight: 13,
					style: "normal",
					color: "#9f9f9f",
				},
				shadowSize: 0,
			},
			xaxis: {
				show: true,
				tickColor: '#eee',
				font: {
					lineHeight: 13,
					style: "normal",
					color: "#9f9f9f",
				},
				shadowSize: 0,
			},
			grid: {
				borderWidth: 1,
				borderColor: '#eee',
				labelMargin: 10,
				hoverable: true,
				clickable: true,
				mouseActiveRadius: 6,
			},
			legend: {
				container: '.flc-dynamic',
				backgroundOpacity: 0.5,
				noColumns: 0,
				backgroundColor: "white",
				lineWidth: 0
			}
		});

		function update() {
			plot.setData([getRandomData()]);
			plot.setupGrid();
			plot.draw();
			setTimeout(update, updateInterval);
		}
		update();
	}

	donutChart() {
		var pieData = [
			{ data: 1, color: '#F44336', label: 'Toyota' },
			{ data: 2, color: '#03A9F4', label: 'Nissan' },
			{ data: 3, color: '#8BC34A', label: 'Hyundai' },
			{ data: 4, color: '#FFEB3B', label: 'Scion' },
			{ data: 4, color: '#009688', label: 'Daihatsu' },
		];
		$.plot('#pie-chart', this.donutPieChartData(), {
			series: {
				pie: {
					show: true,
					stroke: {
						width: 2,
					},
				},
			},
			legend: {
				container: '.flc-pie',
				backgroundOpacity: 0.5,
				noColumns: 0,
				backgroundColor: "white",
				lineWidth: 0
			},
			grid: {
				hoverable: true,
				clickable: true
			},
			tooltip: true,
			tooltipOpts: {
				content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
				shifts: {
					x: 20,
					y: 0
				},
				defaultTheme: false,
				cssClass: 'flot-tooltip'
			}

		});

		$.plot('#donut-chart', this.donutPieChartData(), {
			series: {
				pie: {
					innerRadius: 0.5,
					show: true,
					stroke: {
						width: 2,
					},
				},
			},
			legend: {
				container: '.flc-donut',
				backgroundOpacity: 0.5,
				noColumns: 0,
				backgroundColor: "white",
				lineWidth: 0
			},
			grid: {
				hoverable: true,
				clickable: true
			},
			tooltip: true,
			tooltipOpts: {
				content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
				shifts: {
					x: 20,
					y: 0
				},
				defaultTheme: false,
				cssClass: 'flot-tooltip'
			}

		});
	}
	donutPieChartData() {
		var pieData = [
			{ data: Math.floor(100 * Math.random()), color: '#F44336', label: 'Toyota' },
			{ data: Math.floor(100 * Math.random()), color: '#03A9F4', label: 'Nissan' },
			{ data: Math.floor(100 * Math.random()), color: '#8BC34A', label: 'Hyundai' },
			{ data: Math.floor(100 * Math.random()), color: '#FFEB3B', label: 'Scion' },
			{ data: Math.floor(100 * Math.random()), color: '#009688', label: 'Daihatsu' },
		];

		return pieData;
	}
	barPloterData() {
		var data1 = [
			[1, Math.floor(100 * Math.random())],
			[2, Math.floor(100 * Math.random())],
			[3, Math.floor(100 * Math.random())],
			[4, Math.floor(100 * Math.random())],
			[5, Math.floor(100 * Math.random())],
			[6, Math.floor(100 * Math.random())],
			[7, Math.floor(100 * Math.random())]
		];
		var data2 = [
			[1, Math.floor(100 * Math.random())],
			[2, Math.floor(100 * Math.random())],
			[3, Math.floor(100 * Math.random())],
			[4, Math.floor(100 * Math.random())],
			[5, Math.floor(100 * Math.random())],
			[6, Math.floor(100 * Math.random())],
			[7, Math.floor(100 * Math.random())]
		];
		var data3 = [
			[1, Math.floor(100 * Math.random())],
			[2, Math.floor(100 * Math.random())],
			[3, Math.floor(100 * Math.random())],
			[4, Math.floor(100 * Math.random())],
			[5, Math.floor(100 * Math.random())],
			[6, Math.floor(100 * Math.random())],
			[7, Math.floor(100 * Math.random())]
		];
		var barData = new Array();
		barData.push({
			data: data1,
			label: 'Tokyo',
			bars: {
				show: true,
				barWidth: 0.08,
				order: 1,
				lineWidth: 0,
				fillColor: '#8BC34A'
			}
		});

		barData.push({
			data: data2,
			label: 'Seoul',
			bars: {
				show: true,
				barWidth: 0.08,
				order: 2,
				lineWidth: 0,
				fillColor: '#00BCD4'
			}
		});

		barData.push({
			data: data3,
			label: 'Beijing',
			bars: {
				show: true,
				barWidth: 0.08,
				order: 3,
				lineWidth: 0,
				fillColor: '#FF9800'
			}
		});

		return barData;
	}

	updateSparkLine(){
		this.props.dispatch(sparklineAction("updae"));
	}
	updatePie(){
		var sent = Math.floor(100 * Math.random()),
			sold = Math.floor(100 * Math.random()),
			spam = Math.floor(100 * Math.random()),
			profit = Math.floor(100 * Math.random());
		this.setState({
			sent_percent: sent,
			sold_percent: sold,
			spam_percent: spam,
			profit_percent: profit
		})
		this.state.sent.chart_ref.update(sent)
		this.state.sold.chart_ref.update(sold)
		this.state.spam.chart_ref.update(spam)
		this.state.profit.chart_ref.update(profit)
	}
	render(){
		const { sparkline } = this.props
		return(
			<Fragment>
				<ModuleHeader text="Charts"/>
				<Row>
					<Col sm={12}>
						<div className="card">
							<div className="card-header">
								<h2>Sparkline Charts
									<small>
										This plugin generates small inline charts using data supplied either inline in the HTML, or via javascript
										<a href="https://omnipotent.net/jquery.sparkline/" target="_blank"> Read more...</a>
									</small>
									<small>For configuration, Please refer to 
										<code>scripts/components/sparkline.js</code>
									</small>
								</h2>
								<ul className="actions">
									<li>
										<a onClick={this.updateSparkLine.bind(this)} >
											<i className="zmdi zmdi-refresh-alt"></i>
										</a>
									</li>
								</ul>
							</div>
							<div className="card-body card-padding">
								<div className="mini-charts">
									<Row>
										<Col sm={6} md={3}>
											<div className="mini-charts-item bgm-cyan">
												<div className="clearfix">
													<Sparkline className="chart stats-bar" type="bar" value={sparkline.bar1} />
													<div className="count">
														<small>Website Traffics</small>
														<h2>987,459</h2>
													</div>
												</div>
											</div>
										</Col>
										<Col sm={6} md={3}>
											<div className="mini-charts-item bgm-lightgreen">
												<div className="clearfix">
													<Sparkline className="chart stats-bar-2" type="bar" value={sparkline.bar2} />
													<div className="count">
														<small>Website Impressions</small>
														<h2>356,785K</h2>
													</div>
												</div>
											</div>
										</Col>

										<Col sm={6} md={3}>
											<div className="mini-charts-item bgm-orange">
												<div className="clearfix">
													<Sparkline className="chart stats-line" type="line" value={sparkline.bar3} width="85px" height="45" />
													<div className="count">
														<small>Total Sales</small>
														<h2>$ 458,778</h2>
													</div>
												</div>
											</div>
										</Col>

										<Col sm={6} md={3}>
											<div className="mini-charts-item bgm-bluegray">
												<div className="clearfix">
													<Sparkline className="chart stats-line-2" type="line" value={sparkline.bar4} width="85px" height="45" />
													<div className="count">
														<small>Support Tickets</small>
														<h2>23,856</h2>
													</div>
												</div>
											</div>
										</Col>


										<Col sm={6} md={3}>
											<div className="mini-charts-item bgm-teal">
												<div className="clearfix">
													<Sparkline className="chart chart-pie stats-pie" type="pie" value={sparkline.pie1} width="85px" height="45" />
													<div className="count">
														<small>Percentage</small>
														<h2>99.87%</h2>
													</div>
												</div>
											</div>
										</Col>

										<Col sm={6} md={3}>
											<div className="mini-charts-item bgm-red">
												<div className="clearfix">
													<Sparkline className="chart stats-line" type="line" value={sparkline.bar1} width="85px" height="45" />
													<div className="count">
														<small>Total Sales</small>
														<h2>$ 458,778</h2>
													</div>
												</div>
											</div>
										</Col>

										<Col sm={6} md={3}>
											<div className="mini-charts-item bgm-blue">
												<div className="clearfix">
													<Sparkline className="chart chart-pie stats-pie" type="pie" value={sparkline.pie2} width="85px" height="45" />
													<div className="count">
														<small>Percentage</small>
														<h2>99.87%</h2>
													</div>
												</div>
											</div>
										</Col>

										<Col sm={6} md={3}>
											<div className="mini-charts-item bgm-pink">
												<div className="clearfix">
													<Sparkline className="chart stats-line" type="line" value={sparkline.bar4} width="85px" height="45" />
													<div className="count">
														<small>Website Traffics</small>
														<h2>987,459</h2>
													</div>
												</div>
											</div>
										</Col>
									</Row>
								</div>
							</div>
						</div>
					</Col>
				</Row>
				<Row>
					<Col sm={12}>
						<div className="card">
							<div className="card-header">
								<h2>EASY PIE CHART
									<small>
										Lightweight jQuery plugin to render and animate nice pie charts with the HTML5 canvas element.
										<a href="https://github.com/rendro/easy-pie-chart#vanilla-js-1" target="_blank"> Read more...</a>
									</small>
									<small>For configuration, Please refer to
										<code>scripts/components/easypie.js</code>
									</small>
								</h2>
								<ul className="actions">
									<li>
										<a onClick={this.updatePie.bind(this)} >
											<i className="zmdi zmdi-refresh-alt"></i>
										</a>
									</li>
								</ul>
							</div>
							<div className="card-body card-padding">
								<Row>
									<Col sm={3}>
										<div className="epc-item bgm-pink">
											<EasypieChart link={this.state.sent.reference} className="easy-pie main-pie" data-percent={this.state.sent_percent} barcolor="#2196F3" trackcolor="#eee" scalecolor="#ccc" linewidth={4} linecap="butt" size={148}>
												<div className="percent">{this.state.sent_percent}</div>
												<div className="pie-title">Total Emails Sent</div>
											</EasypieChart>
										</div>
									</Col>
									<Col sm={3}>
										<div className="epc-item bgm-orange">
											<EasypieChart link={this.state.sold.reference} className="easy-pie main-pie" data-percent={this.state.sold_percent} barcolor="#2196F3" trackcolor="#eee" scalecolor="#ccc" linewidth={4} linecap="butt" size={148}>
												<div className="percent">{this.state.sold_percent}</div>
												<div className="pie-title">Sold Items</div>
											</EasypieChart>
										</div>
									</Col>
									<Col sm={3}>
										<div className="epc-item bgm-green">
											<EasypieChart link={this.state.spam.reference} className="easy-pie main-pie" data-percent={this.state.spam_percent} barcolor="#2196F3" trackcolor="#eee" scalecolor="#ccc" linewidth={4} linecap="butt" size={148}>
												<div className="percent">{this.state.spam_percent}</div>
												<div className="pie-title">Spam Mails</div>
											</EasypieChart>
										</div>
									</Col>
									<Col sm={3}>
										<div className="epc-item bgm-purple">
											<EasypieChart link={this.state.profit.reference} className="easy-pie main-pie" data-percent={this.state.profit_percent} barcolor="#2196F3" trackcolor="#eee" scalecolor="#ccc" linewidth={4} linecap="butt" size={148}>
												<div className="percent">{this.state.profit_percent}</div>
												<div className="pie-title">Profit Rate</div>
											</EasypieChart>
										</div>
									</Col>
								</Row>
							</div>
						</div>
					</Col>					
				</Row>
				<ModuleHeader text="Flot Charts">
					<small>
						Flot is a pure JavaScript plotting library for jQuery, with a focus on simple usage, attractive looks and interactive features
						<a href="http://www.flotcharts.org/flot/examples/series-pie/index.html" target="_blank"> Read more...</a>
					</small>
				</ModuleHeader>
				<Row>
					<Col sm={6}>
						<div className="card">
							<div className="card-header">
								<h2>Bar Chart</h2>
								<ul className="actions">
									<li>
										<a onClick={this.updatePie.bind(this)} >
											<i className="zmdi zmdi-refresh-alt"></i>
										</a>
									</li>
								</ul>
							</div>
							<div className="card-body card-padding">
								<div id="bar-chart" className="flot-chart"></div>
								<div className="flc-bar"></div>
							</div>
						</div>
					</Col>

					<Col sm={6}>
						<div className="card">
							<div className="card-header">
								<h2>Dynamic Chart</h2>
								<ul className="actions">
									<li>
										<a onClick={this.updatePie.bind(this)} >
											<i className="zmdi zmdi-refresh-alt"></i>
										</a>
									</li>
								</ul>
							</div>
							<div className="card-body card-padding">
								<div id="dynamic-chart" className="flot-chart"></div>
								<div className="flc-dynamic"></div>
							</div>
						</div>
					</Col>

					<Col sm={6}>
						<div className="card">
							<div className="card-header">
								<h2>Pie Chart</h2>
								<ul className="actions">
									<li>
										<a onClick={this.updatePie.bind(this)} >
											<i className="zmdi zmdi-refresh-alt"></i>
										</a>
									</li>
								</ul>
							</div>
							<div className="card-body card-padding">
								<div id="pie-chart" className="flot-chart-pie"></div>
								<div className="flc-pie hidden-xs"></div>
							</div>
						</div>
					</Col>

					<Col sm={6}>
						<div className="card">
							<div className="card-header">
								<h2>Donut Chart</h2>
								<ul className="actions">
									<li>
										<a onClick={this.updatePie.bind(this)} >
											<i className="zmdi zmdi-refresh-alt"></i>
										</a>
									</li>
								</ul>
							</div>
							<div className="card-body card-padding">
								<div id="donut-chart" className="flot-chart-pie"></div>
								<div className="flc-donut hidden-xs"></div>
							</div>
						</div>
					</Col>
				</Row>
			</Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		sparkline: state.sparkline
	};
}

export default connect(mapStateToProps)(Chart);