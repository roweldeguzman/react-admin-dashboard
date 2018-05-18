import React, { Component, Fragment } from 'react'

import ModuleHeader from '../../../common/module-header';

import { 
	Row, Col, ButtonToolbar, ToggleButtonGroup, ToggleButton, 
	OverlayTrigger, Carousel, Collapse, Well, Clearfix, MenuItem, 
	Pagination, Pager, Popover, ProgressBar, Tabs, Tab, Tooltip } from 'react-bootstrap';
import Ripple from '../../../components/ripple';
const config = require("../../../helper/config").config;

export default class UIBootstrap extends Component {
	constructor(props, context) {
		super(props, context);

		this.selectCheckbox = this.selectCheckbox.bind(this);
		this.selectRadio = this.selectRadio.bind(this);		
		this.setPage = this.setPage.bind(this);

		this.state = {
			checkbox: ["left", "right"],
			radio: "left",
			toggle: true,
			pageActive: 1,
			noOfPage: 10,
			dynamic: 22,
			stack: 100 / 3
		};
	}

	selectCheckbox(e) {
		this.setState({ checkbox: e });
	}
	selectRadio(e){
		this.setState({ radio: e })
	}
	onSelectAlert(eventKey) {
		alert(`Alert from menu item.\neventKey: ${eventKey}`);
	}
	
	setPageFirst(){
		this.setState({pageActive: 1});
	}
	setPageNext(){
		if (this.state.pageActive != 10){
			this.setState({pageActive: this.state.pageActive + 1 });
		}
	}
	setPagePrev(){
		if (this.state.pageActive != 1){
			this.setState({pageActive: this.state.pageActive - 1});
		}
	}
	setPageLast() {
		this.setState({pageActive: 10})
	}
	setPage(page){
		this.setState({ pageActive: page })
	}
	random() {
		this.setState({
			dynamic: Math.floor(Math.random() * 100 + 1)
		})
	}
	randomStack(){
		this.setState({
			stack: Math.floor(Math.random() * (100 / 3) + 1)
		})
	}
	render() {
		let items = [];
		var pageHtml = '';
		var pmin = 0;
		var pmax = 0;
		var adjacents = 2;
		items.push(
			<Fragment key="left">
				<Pagination.First onClick={this.setPageFirst.bind(this)} disabled={this.state.pageActive == 1}/>
				<Pagination.Prev onClick={this.setPagePrev.bind(this)} disabled={this.state.pageActive == 1}/>
			</Fragment>
		);
		if (this.state.pageActive > (adjacents)) {
			items.push(<Pagination.Ellipsis key="ellipsis-left" />)
		}
		pmin = (this.state.pageActive > adjacents) ? (this.state.pageActive - adjacents) : 1;
		pmax = (this.state.pageActive < (this.state.noOfPage - adjacents)) ? (this.state.pageActive + adjacents) : this.state.noOfPage

		for (let i = pmin; i <= pmax; i++) {
			if (i == this.state.pageActive) {
				items.push(<Pagination.Item active key={i} >{i}</Pagination.Item>)				
			}
			else {
				items.push(
					<Pagination.Item key={i} onClick={() => { this.setPage(i) }} >{i}</Pagination.Item>
				)
			}
		}

		if (this.state.pageActive < ((this.state.noOfPage - adjacents) - 1)) {
			items.push(<Pagination.Ellipsis key="ellipsis-right"/>)
		}
		items.push(
			<Fragment key="right">
				<Pagination.Next onClick={this.setPageNext.bind(this)} disabled={this.state.pageActive == 10 } />
				<Pagination.Last onClick={this.setPageLast.bind(this)} disabled={this.state.pageActive == 10} />
			</Fragment>
		);
		return (
			<Fragment>
				<ModuleHeader text="UI Bootstrap"/>
				<Row>
					{ /* Buttons Checkbox */}
					<Col sm={12}>
						<div className="card">
							<div className="card-header">
								<h2>Buttons Checkbox
									<small>
										<a className="c-gray" target="_blank" href="https://react-bootstrap.github.io/components/button-group/#btn-groups-checkbox-radio">React-Bootstrap Checkbox / Radio</a>
									</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<Row>
									<Col sm={12} md={6} className="p-t-5">
										<p className="f-500 c-black m-b-5">Checkbox</p>
										<small>Checkbox-like buttons set with variable states</small><br/>
										<small className="c-gray">
											Value - {JSON.stringify(this.state.checkbox)}
										</small><br/><br/>
										<ButtonToolbar>
											<ToggleButtonGroup type="checkbox" value={this.state.checkbox} onChange={this.selectCheckbox}>
												<ToggleButton value="left">Checkbox 1 (pre-checked)</ToggleButton>
												<ToggleButton value="center">Checkbox 2</ToggleButton>
												<ToggleButton value="right">Checkbox 3 (pre-checked)</ToggleButton>
											</ToggleButtonGroup>
										</ButtonToolbar>
									</Col>
									<Col sm={12} md={6} className="p-t-5">
										<p className="f-500 c-black m-b-5">Radio & Uncheckable Radio</p>
										<small>Radio buttons with checked/unchecked states</small><br />
										<small className="c-gray">
											Value - {JSON.stringify(this.state.radio)}
										</small><br /><br />
										<ButtonToolbar>
											<ToggleButtonGroup type="radio" name="options" value={this.state.radio} onChange={this.selectRadio}>
												<ToggleButton value="left">Radio 1 (pre-checked)</ToggleButton>
												<ToggleButton value="center">Radio 2</ToggleButton>
												<ToggleButton value="right">Radio 3</ToggleButton>
											</ToggleButtonGroup>
										</ButtonToolbar>
									</Col>
								</Row>
							</div>
						</div>
					</Col>
					{ /* Carousel */}
					<Col sm={12}>
						<div className="card">
							<div className="card-header">
								<h2>Carousel
									<small>
										<a className="c-gray" target="_blank" href="https://react-bootstrap.github.io/components/carousel/#carousels-uncontrolled">React-Bootstrap Carousel</a>
									</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<Carousel>
									<Carousel.Item>
										<img alt="c-1.jpg" src={`${config.asset_url}/assets/media/carousel/c-1.jpg`} />
										<Carousel.Caption>
											<h3>First slide label</h3>
											<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
										</Carousel.Caption>
									</Carousel.Item>
									<Carousel.Item>
										<img alt="c-2.jpg" src={`${config.asset_url}/assets/media/carousel/c-2.jpg`} />
										<Carousel.Caption>
											<h3>Second slide label</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
										</Carousel.Caption>
									</Carousel.Item>
									<Carousel.Item>
										<img alt="c-3.jpg" src={`${config.asset_url}/assets/media/carousel/c-3.jpg`} />
										<Carousel.Caption>
											<h3>Third slide label</h3>
											<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
										</Carousel.Caption>
									</Carousel.Item>
								</Carousel>
							</div>
						</div>
					</Col>
					{ /* Collapse */}
					<Col sm={12}>
						<div className="card">
							<div className="card-header">
								<h2>Collapse
									<small>
										<a className="c-gray" target="_blank" href="https://react-bootstrap.github.io/utilities/transitions/#transitions-collapse">React-Bootstrap Transitions</a>
									</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<Ripple type="button" className="btn btn-primary" onClick={() => this.setState({ toggle: !this.state.toggle })}>
									Toggle Collapse
        						</Ripple>
								<hr/>
								<Collapse in={this.state.toggle}>
									<div>
										<Well>
											Nunc nec porta felis. Curabitur non fringilla ipsum, quis mollis metus. Etiam mauris elit, iaculis quis dapibus et, luctus id erat. Sed ac rutrum est, a bibendum nibh. Phasellus rhoncus imperdiet neque in tincidunt. Fusce nibh tellus, laoreet a orci in, auctor semper leo. Sed turpis odio, lobortis in orci et, finibus placerat nulla. Maecenas vehicula ante sit amet lacus placerat, non congue nibh tristique.
            							</Well>
									</div>
								</Collapse>
							</div>
						</div>
					</Col>
					{ /* Dropdown / Menu items */}
					<Col sm={12}>
						<div className="card">
							<div className="card-header">
								<h2>Dropdown / Menu items
									<small>
										<a className="c-gray" target="_blank" href="https://react-bootstrap.github.io/components/dropdowns/#menu-items">React-Bootstrap Menu items</a>
									</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<Clearfix className="dropdown-basic-demo dropdown open">									
									<ul className="dropdown-menu">
										<MenuItem header>Header</MenuItem>
										<MenuItem>link</MenuItem>
										<MenuItem divider />
										<MenuItem header>Header</MenuItem>
										<MenuItem>link</MenuItem>
										<MenuItem disabled>disabled</MenuItem>
										<MenuItem title="See? I have a title.">link with title</MenuItem>
										<MenuItem eventKey={1} onSelect={this.onSelectAlert}>
											link that alerts
										</MenuItem>
									</ul>									
								</Clearfix>
								{["blue", "teal", "orange", "bluegray", "green"].map((color, i) => (
									<Clearfix className="dropdown-basic-demo dropdown open" key={i}>
											<ul className={`dropdown-menu bgm-${color}`}>
											<MenuItem header>Header</MenuItem>
											<MenuItem>link</MenuItem>
											<MenuItem divider />
											<MenuItem header>Header</MenuItem>
											<MenuItem>link</MenuItem>
											<MenuItem disabled>disabled</MenuItem>
											<MenuItem title="See? I have a title.">link with title</MenuItem>
											<MenuItem eventKey={1} onSelect={this.onSelectAlert}>
												link that alerts
											</MenuItem>
										</ul>
									</Clearfix>		
								))}
								<p className="f-500 c-black m-b-5">Dropdown links with icon </p>
								<small>
									Adding <code>.dm-icon</code> class to the <code>.dropdown-menu</code> will enable extra room for icons in dropdown links.	
								</small>
								<br /><br />
								<Clearfix className="dropdown-basic-demo dropdown open">
									<ul className="dropdown-menu dm-icon">
										<MenuItem header>Header</MenuItem>
										<MenuItem>
											<i className="zmdi zmdi-home" />
											link
										</MenuItem>
										<MenuItem divider />
										<MenuItem header>Header</MenuItem>
										<MenuItem>
											<i className="zmdi zmdi-account"/>
											link
										</MenuItem>
										<MenuItem disabled>
											<i className="zmdi zmdi-alert-circle" />
											disabled
										</MenuItem>
										<MenuItem title="See? I have a title.">
											<i className="zmdi zmdi-email"/>
											link with title
										</MenuItem>
										<MenuItem eventKey={1} onSelect={this.onSelectAlert}>
											<i className="zmdi zmdi-pin"/>
											link that alerts
										</MenuItem>
									</ul>
								</Clearfix>
								{["blue", "teal", "orange", "bluegray", "green"].map((color, i) => (
									<Clearfix className="dropdown-basic-demo dropdown open" key={i}>
										<ul className={`dropdown-menu dm-icon bgm-${color}`}>
											<MenuItem header>Header</MenuItem>
											<MenuItem>
												<i className="zmdi zmdi-home" />
												link
											</MenuItem>
											<MenuItem divider />
											<MenuItem header>Header</MenuItem>
											<MenuItem>
												<i className="zmdi zmdi-account"/>
												link
											</MenuItem>
											<MenuItem disabled>
												<i className="zmdi zmdi-alert-circle" />
												disabled
											</MenuItem>
											<MenuItem title="See? I have a title.">
												<i className="zmdi zmdi-email"/>
												link with title
											</MenuItem>
											<MenuItem eventKey={1} onSelect={this.onSelectAlert}>
												<i className="zmdi zmdi-pin" />
												link that alerts
											</MenuItem>
										</ul>
									</Clearfix>
								))}
													
							</div>
						</div>
					</Col>
					{ /* Pagination */ }
					<Col sm={12}>
						<div className="card">
							<div className="card-header">
								<h2>Pagination
									<small>
										<a className="c-gray" target="_blank" href="https://react-bootstrap.github.io/components/pagination/">React-Bootstrap Pagination</a>
									</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<p>
									<b>Pagination</b> - provide pagination links for your site or app with the multi-page pagination component, or the simpler pager alternative.
								</p>
								<Pagination bsSize="large">{items}</Pagination>
								<br />

								<Pagination bsSize="medium">{items}</Pagination>
								<br />

								<Pagination bsSize="small">{items}</Pagination>
								<br/>
								<p> <b>Cutom</b> - Add <code>.custom</code> to <code>Pagination</code> bootstrap component </p>
								<Pagination bsSize="small" className="custom">{items}</Pagination>
								<p>
									<b>Pager</b> - quick previous and next links for simple pagination implementations with light markup and styles. It's great for simple sites like blogs or magazines.
								</p>
								<Pager>
									<Pager.Item onClick={this.setPagePrev.bind(this)}>Previous</Pager.Item>{' '}
									<Pager.Item onClick={this.setPageNext.bind(this)}>Next</Pager.Item>
								</Pager>
							</div>
						</div>
					</Col>
					{/* Popover */}
					<Col sm={12}>
						<div className="card">
							<div className="card-header">
								<h2>Popover
									<small>
										<a className="c-gray" target="_blank" href="https://react-bootstrap.github.io/components/popovers/#popovers-overlay-trigger">React-Bootstrap popovers</a>
									</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<p>Add small overlay content, like those found in iOS, to any element for housing secondary information.</p>

								<small> Four positioning options are available: top, right, bottom, and left aligned. Besides that, auto option may be used to detect a position that fits the component on screen. </small>

								<ButtonToolbar>
									<OverlayTrigger trigger="click" placement="left" overlay={
										<Popover id="popover-positioned-left" title="Popover left">
											<strong>Holy guacamole!</strong> Check this info.
  										</Popover>
									}>
										<Ripple type="button" className="btn btn-primary">Popover on Left</Ripple>
									</OverlayTrigger>
									<OverlayTrigger trigger="click" placement="top" overlay={
										<Popover id="popover-positioned-top" title="Popover top">
											<strong>Holy guacamole!</strong> Check this info.
  										</Popover>
									}>
										<Ripple type="button" className="btn btn-primary">Popover on Top</Ripple>
									</OverlayTrigger>
									<OverlayTrigger trigger="click" placement="bottom" overlay={
										<Popover id="popover-positioned-bottom" title="Popover bottom">
											<strong>Holy guacamole!</strong> Check this info.
  										</Popover>
									}>
										<Ripple type="button" className="btn btn-primary">Popover on Bottom</Ripple>
									</OverlayTrigger>
									<OverlayTrigger trigger="click" placement="right" overlay={
										<Popover id="popover-positioned-right" title="Popover right">
											<strong>Holy guacamole!</strong> Check this info.
  										</Popover>
									}>
										<Ripple type="button" className="btn btn-primary">Popover on Right</Ripple>
									</OverlayTrigger>
								</ButtonToolbar>
								<p>Popover on Mouse Hover</p>
								<ButtonToolbar>
									<OverlayTrigger trigger={['hover', 'focus']} placement="left" overlay={
										<Popover id="popover-positioned-left" title="Popover left">
											<strong>Holy guacamole!</strong> Check this info.
  										</Popover>
									}>
										<Ripple type="button" className="btn btn-primary">Popover on Left</Ripple>
									</OverlayTrigger>
									<OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={
										<Popover id="popover-positioned-top" title="Popover top">
											<strong>Holy guacamole!</strong> Check this info.
  										</Popover>
									}>
										<Ripple type="button" className="btn btn-primary">Popover on Top</Ripple>
									</OverlayTrigger>
									<OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={
										<Popover id="popover-positioned-bottom" title="Popover bottom">
											<strong>Holy guacamole!</strong> Check this info.
  										</Popover>
									}>
										<Ripple type="button" className="btn btn-primary">Popover on Bottom</Ripple>
									</OverlayTrigger>
									<OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={
										<Popover id="popover-positioned-right" title="Popover right">
											<strong>Holy guacamole!</strong> Check this info.
  										</Popover>
									}>
										<Ripple type="button" className="btn btn-primary">Popover on Right</Ripple>
									</OverlayTrigger>
								</ButtonToolbar>
							</div>
						</div>
					</Col>
					{/* Progressbar */}
					<Col sm={12}>
						<div className="card">
							<div className="card-header">
								<h2>Progressbar
									<small>
										<a className="c-gray" target="_blank" href="https://react-bootstrap.github.io/components/progress/#progress">React-Bootstrap Progress bars</a>
									</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<p className="c-black">Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.</p>
								<p className="c-black">Static Value</p>
								<Row>
									<Col sm={4}>
										<ProgressBar now={55} />
									</Col>
									<Col sm={4}>
										<ProgressBar now={22} bsStyle="warning"/>
									</Col>
									<Col sm={4}>
										<ProgressBar now={82} bsStyle="danger"/>
									</Col>
								</Row>
								<br /><br />
								<p className="c-black">Dynamic Value</p>
								<ProgressBar now={this.state.dynamic} /><br />
								<ProgressBar striped now={this.state.dynamic} bsStyle="success"/><br />
								<ProgressBar active now={this.state.dynamic} bsStyle="warning"/><br />
								<Ripple type="button" className="btn btn-primary" onClick={this.random.bind(this)} >Random</Ripple>
								<br/><br/>
								<p className="c-black">Stacked Value</p>								
								<ProgressBar>
									<ProgressBar striped bsStyle="success" now={this.state.stack} key={1} />
									<ProgressBar bsStyle="warning" now={this.state.stack} key={2} />
									<ProgressBar active bsStyle="danger" now={this.state.stack} key={3} />
								</ProgressBar>
								<br />
								<Ripple type="button" className="btn btn-primary" onClick={this.randomStack.bind(this)} >Random</Ripple>
							</div>
						</div>
					</Col>
					<Col sm={12}>
						<div className="card">
							<div className="card-header">
								<h2>Tabs
									<small>
										<a className="c-gray" target="_blank" href="https://react-bootstrap.github.io/components/tabs/#tabs-controlled">Togglable tabs</a>
									</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<p className="c-black">Allow the component to control its own state.</p>
								<p className="c-black">Default tab</p>
								<Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
									<Tab eventKey={1} title="Tab 1">
										Tab 1 content
  									</Tab>
									<Tab eventKey={2} title="Tab 2">
										Tab 2 content
  									</Tab>
									<Tab eventKey={3} title="Tab 3" disabled>
										Tab 3 content
  									</Tab>
								</Tabs>
								<br/>
								<p className="c-black">Custom tab</p>
								<small>Add <code>.custom-tab</code> to <code>Tabs</code> bootstrap component </small>
								<br/><br/>
								<Tabs defaultActiveKey={2} id="uncontrolled-tab-example" className="custom-tab" animation={false} >
									<Tab eventKey={1} title="Home">
										Tab 1 content
  									</Tab>
									<Tab eventKey={2} title="Profile">
										Tab 2 content
  									</Tab>
									<Tab eventKey={3} title="Message" disabled>
										Tab 3 content
  									</Tab>
								</Tabs>
								<p className="c-black">Custom tab with full width</p>
								<small>Add <code>.custom-tab</code> & <code>.full-width</code> to <code>Tabs</code> bootstrap component </small>
								<br /><br />
								<Tabs defaultActiveKey={2} id="uncontrolled-tab-example" className="custom-tab full-width" animation={false} >
									<Tab eventKey={1} title="Home">
										Tab 1 content
  									</Tab>
									<Tab eventKey={2} title="Profile">
										Tab 2 content
  									</Tab>
									<Tab eventKey={4} title="Message" disabled>
										Tab 3 content
  									</Tab>
								</Tabs>
							</div>
						</div>
					</Col>
					<Col sm={12}>
						<div className="card">
							<div className="card-header">
								<h2>Pagination
									<small>
										<a className="c-gray" target="_blank" href="https://react-bootstrap.github.io/components/dropdowns/#menu-items">React-Bootstrap Menu items</a>
									</small>
								</h2>
							</div>
							<div className="card-body card-padding">
							</div>
						</div>
					</Col>					
				</Row>
			</Fragment>
		)
	}
}