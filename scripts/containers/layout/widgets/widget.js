import React, { Component, Fragment } from 'react'
import ModuleHeader from '../../../common/module-header'
import Ripple from '../../../components/ripple';
import { Input, Textarea } from '../../../components/input'

const config = require("../../../helper/config").config;
const helper = require("../../../helper/helper").helper;

import { Row, Col, NavDropdown, MenuItem, ProgressBar, Tabs, Tab} from 'react-bootstrap'

export default class Widget extends Component {
	constructor(props) {
		super(props)

		this.state = {
			active_tab: 1,
			todoValue: "",
			initLastId: 6,
			lists: [
				{
					"id": 1,
					"todo": "Duis vitae nibh molestie pharetra augue vitae"
				}, {
					"id": 2,
					"todo": "In vel imperdiet leoorbi mollis leo sit amet quam fringilla varius mauris orci turpis"
				}, {
					"id": 3,
					"todo": "Suspendisse quis sollicitudin erosvel dictum nunc"
				}, {
					"id": 4,
					"todo": "Curabitur egestas finibus sapien quis faucibusras bibendum ut justo at sagittis. In hac habitasse platea dictumst"
				}, {
					"id": 5,
					"todo": "Suspendisse potenti. Cras dolor augue, tincidunt sit amet lorem id, blandit rutrum libero"
				}, {
					"id": 6,
					"todo": "Proin luctus dictum nisl id auctor. Nullam lobortis condimentum arcu sit amet gravida"
				}
			]
		}

		this.toggleTodo = this.toggleTodo.bind(this)
		this.addTodo = this.addTodo.bind(this)
	}

	updateState(event){
		const name = event.target.name
		this.setState({
			[name]: event.target.value
		})
	}
	toggleTodo(){
		let parent = helper.parents("add-tl-item", document.querySelector(".add-new-item"), "id")
		parent.classList.toggle("toggled")
	}
	addTodo(event){
		if(this.state.todoValue.trim().length > 0) {
			this.state.initLastId++;
			this.state.lists.push({
				"id": this.state.initLastId,
				"todo": this.state.todoValue
			})
			this.toggleTodo()
			this.setState({todoValue: ""})
		}
	}
	removeTodo(todoId) {
		this.state.lists.map((item, i)=>{
			if (item.id == todoId){
				this.state.lists.splice(i, 1)
				this.setState({
					lists: this.state.lists
				});
			}
		});
	}
	render () {
		return (
			<Fragment>
				<ModuleHeader text="Widgets"/>
				<Row>
					<Col sm={4}>
						<div className="card picture-list">
							<div className="card-header">
								<h2>
									Augue laoreet rutrum<small>Cras congue nec lorem eget posuere</small>
								</h2>
							</div>
							<div className="pl-body">
								<Col xs={3}>
									<a><img src={`${config.asset_url}/assets/img/headers/square/1.png`}/></a>
								</Col>
								<Col xs={3}>
									<a><img src={`${config.asset_url}/assets/img/headers/square/2.png`} /></a>
								</Col>
								<Col xs={3}>
									<a><img src={`${config.asset_url}/assets/img/headers/square/3.png`} /></a>
								</Col>
								<Col xs={3}>
									<a><img src={`${config.asset_url}/assets/img/headers/square/4.png`} /></a>
								</Col>

								<Col xs={3}>
									<a><img src={`${config.asset_url}/assets/img/headers/square/5.png`} /></a>
								</Col>
								<Col xs={3}>
									<a><img src={`${config.asset_url}/assets/img/headers/square/6.png`} /></a>
								</Col>
								<Col xs={3}>
									<a><img src={`${config.asset_url}/assets/img/headers/square/7.png`} /></a>
								</Col>
								<Col xs={3}>
									<a><img src={`${config.asset_url}/assets/img/headers/square/8.png`} /></a>
								</Col>

								<Col xs={3}>
									<a><img src={`${config.asset_url}/assets/img/headers/square/9.png`} /></a>
								</Col>
								<Col xs={3}>
									<a><img src={`${config.asset_url}/assets/img/headers/square/1.png`} /></a>
								</Col>
								<Col xs={3}>
									<a><img src={`${config.asset_url}/assets/img/headers/square/2.png`} /></a>
								</Col>
								<Col xs={3}>
									<a><img src={`${config.asset_url}/assets/img/headers/square/3.png`} /></a>
								</Col>
							</div>
						</div>
						<div className="card blog-post">
							<div className="bp-header">
								<img src={`${config.asset_url}/assets/img/widgets/preview.jpg`}/>

								<a className="bp-title">
									<h2>Samsung Galaxy Alpha</h2>
									<small>Vivamus sagittis lacus vel augue laoreet rutrum</small>
								</a>
							</div>
							<div className="p-20">
								Pellentesque lacinia sagittis libero. Praesent vitae justo purus. In hendrerit lorem nisl, ac lacinia urna aliquet non. Quisque
								nisi tellus, rhoncus quis est sit amete in nisl molestie fringilla. Nunc vitae ante id magna feugiat condimentum. Maecenas
								sit amet urna massa.
							</div>
						</div>
						<div className="card">
							<div className="listview">
								<div className="lv-header">
									Tasks
								</div>
								<div className="lv-body">
									<div className="lv-item">
										<div className="lv-title m-b-5">HTML5 Validation Report</div>
										<div className="progress">
											<ProgressBar now={95}/>
										</div>
									</div>
									<div className="lv-item">
										<div className="lv-title m-b-5">Google Chrome Extension</div>

										<div className="progress">
											<ProgressBar now={80} bsStyle="success" />
										</div>
									</div>
									<div className="lv-item">
										<div className="lv-title m-b-5">Social Intranet Projects</div>

										<div className="progress">
											<ProgressBar now={20} bsStyle="info" />
										</div>
									</div>
									<div className="lv-item">
										<div className="lv-title m-b-5">Bootstrap Admin Template</div>

										<div className="progress">
											<ProgressBar now={60} bsStyle="warning" />
										</div>
									</div>
									<div className="lv-item">
										<div className="lv-title m-b-5">Youtube Client App</div>
										<div className="progress">
											<ProgressBar now={80} bsStyle="danger"/>
										</div>
									</div>
								</div>

								<div className="clearfix"></div>

								<a className="lv-footer">View All</a>
							</div>
						</div>
						<div className="card">
							<div className="card-header ch-alt">
								<h2>
									Contact Information
									<small>Fusce eget dolor id justo luctus commodo vel pharetra nisi. Donec velit libero</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<div className="pmo-contact">
									<ul>
										<li className="ng-binding">
											<i className="zmdi zmdi-phone"></i> 0949-344-3812</li>
										<li className="ng-binding">
											<i className="zmdi zmdi-email"></i> rowel.deguzman@roweldev.com</li>
										<li className="ng-binding">
											<i className="zmdi zmdi-facebook-box"></i> rowel.deguzman</li>
										<li className="ng-binding">
											<i className="zmdi zmdi-twitter"></i> @roweldg (twitter.com/roweldg)</li>
										<li>
											<i className="zmdi zmdi-pin"></i>
											<address className="m-b-0 ng-binding">
												213 E. Manuel St.,<br/> San Jose,<br/> Montalban, Rizal, Philippines
											</address>
										</li>
									</ul>
								</div>
								<a className="pmo-map">
									<img src={`${config.asset_url}/assets/img/demo/map.png`}/>
								</a>
							</div>
						</div>
					</Col>
					
					<Col sm={4}>
						<div className="card">
							<div className="card-header">
								<h2>
									Praesent vitae justo purus
									<small>In hendrerit lorem nislac lacinia</small>
								</h2>
							</div>
							<Tabs defaultActiveKey={1} id="uncontrolled-tab-example" className="custom-tab full-width" animation={false} >
								<Tab eventKey={1} title="Home" className="p-l-25 p-r-25">
									In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
									Nam eget dui. In ac felis quis tortor malesuada pretium. Phasellus consectetuer vestibulum elit. Duis lobortis massa imperdiet
									quam. Pellentesque commodo eros a enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
									Curae; In ac dui quis mi consectetuer lacinia. Phasellus a est. Pellentesque commodo eros a enim. Cras ultricies mi eu turpis
									hendrerit fringilla. Donec mollis hendrerit risus. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu,
									nisl. Praesent egestas neque eu enim. In hac habitasse platea dictumst.
  								</Tab>
								<Tab eventKey={2} title="Profile" className="p-l-25 p-r-25">
									Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Vestibulum purus quam, scelerisque ut, mollis sed,
									nonummy id, metus. Nulla sit amet est. Praesent ac massa at ligula laoreet iaculis. Vivamus aliquet elit ac nisl.
									Nulla porta dolor. Cras dapibus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
  								</Tab>
								<Tab eventKey={3} title="Message" className="p-l-25 p-r-25">
									Etiam rhoncus. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Cras id dui. Curabitur turpis. Etiam ut
									purus mattis mauris sodales aliquam. Aenean viverra rhoncus pede. Nulla sit amet est. Donec mi odio, faucibus at,
									scelerisque quis, convallis in, nisi. Praesent ac sem eget est egestas volutpat. Cras varius. Morbi mollis tellus
									ac sapien. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nam ipsum risus, rutrum vitae, vestibulum
									eu, molestie vel, lacus. Fusce vel dui.Morbi mattis ullamcorper velit. Etiam rhoncus. Phasellus leo dolor, tempus
									non, auctor et, hendrerit quis, nisi. Cras id dui. Curabitur turpis. Etiam ut purus mattis mauris sodales aliquam.
									Aenean viverra rhoncus pede. Nulla sit amet est. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi.
									Praesent ac sem eget est egestas volutpat. Cras varius. Morbi mollis tellus ac sapien. In enim justo, rhoncus ut,
									imperdiet a, venenatis vitae, justo. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Fusce vel
									dui.
  								</Tab>								
							</Tabs>
						</div>

						<div id="todo-lists">
							<div className="tl-header">
								<h2>Todo Lists</h2>
								<small>Add, edit and manage your Todo Lists</small>
								<ul className="actions actions-alt">
									<NavDropdown eventKey={1} title={<i className="zmdi zmdi-more-vert"></i>} className="pull-right" noCaret id="dropdown-action">
										<MenuItem className="dropdown-arrow"></MenuItem>
										<MenuItem>Refresh</MenuItem>
										<MenuItem>Settings</MenuItem>
										<MenuItem>Other Settings</MenuItem>
									</NavDropdown>
								</ul>
							</div>
							<div className="clearfix"></div>

							<div className="tl-body">
								<div id="add-tl-item" >
									<i className="add-new-item zmdi zmdi-plus" onClick={this.toggleTodo} ></i>

									<div className="add-tl-body">
										<textarea placeholder="What you want to do..." name="todoValue" onChange={this.updateState.bind(this)} value={this.state.todoValue }></textarea>
										<div className="add-tl-actions">
											<a data-tl-action="dismiss" className="a-prevent" onClick={this.toggleTodo} >
												<i className="zmdi zmdi-close"></i>
											</a>
											<a data-tl-action="save" className="a-prevent" onClick={(event) => { this.addTodo(event)}} >
												<i className="zmdi zmdi-check"></i>
											</a>
										</div>
									</div>
								</div>

								{this.state.lists.map((item, i) => (
									<div className="checkbox media" key={i}>
										<div className="pull-right">
											<ul className="actions actions-alt">
												<NavDropdown eventKey={1} title={<i className="zmdi zmdi-more-vert"></i>} className="pull-right" noCaret id="dropdown-action">
													<MenuItem className="dropdown-arrow"></MenuItem>
													<MenuItem onClick={() => { this.removeTodo(`${item.id}`) }}>Delete</MenuItem>
													<MenuItem onClick={() => { this.removeTodo(`${item.id}`) }}>Archive</MenuItem>
												</NavDropdown>
											</ul>
										</div>
										<div className="media-body">
											<label>
												<input type="checkbox" />
												<i className="input-helper"></i>
												<span> {item.todo} </span>
											</label>
										</div>
									</div>									
								))}
							</div>
						</div>

						<div className="card go-social">
							<div className="card-header">
								<h2>Social with us
									<small>Nunc sit amet dapibus tellus</small>
								</h2>
							</div>
							<div className="card-body clearfix">
								<div className="col-xs-4">
									<img className="img-responsive" src={`${config.asset_url}/assets/img/social/facebook-128.png`}/>
								</div>
								<div className="col-xs-4">
									<img className="img-responsive" src={`${config.asset_url}/assets/img/social/twitter-128.png`} />
								</div>
								<div className="col-xs-4">
									<img className="img-responsive" src={`${config.asset_url}/assets/img/social/googleplus-128.png`} />
								</div>

								<div className="col-xs-4">
									<img className="img-responsive" src={`${config.asset_url}/assets/img/social/linkedin-128.png`} />
								</div>
								<div className="col-xs-4">
									<img className="img-responsive" src={`${config.asset_url}/assets/img/social/youtube-128.png`} />
								</div>
								<div className="col-xs-4">
									<img className="img-responsive" src={`${config.asset_url}/assets/img/social/blogger-128.png`} />
								</div>
							</div>
						</div>


						<div className="card">
							<div className="card-header ch-alt">
								<h2>Sample Form
									<small>Pellentesque ac lectus sed elit dictum vehicula</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<div className="form-group rg-float">
									<Input className="form-control input-sm" float="Name" name="lastName" onChange={this.changeValue} />
								</div>
								<div className="form-group rg-float">
									<Input className="form-control input-sm" float="Email Address" name="email" type="email" validate="true" onChange={this.changeValue} />
								</div>
								<div className="form-group rg-float">
									<Input className="form-control input-sm" float="Contact Number" name="number" onChange={this.changeValue} />
								</div>
								<div className="form-group rg-float">
									<Textarea className="form-control input-sm" float="Message" name="message" onChange={this.changeValue} />
								</div>
								<Ripple className="btn btn-primary" type="button">Submit</Ripple>
								<Ripple className="btn btn-link" type="button">Cancel</Ripple>
							</div>
						</div>
					</Col>

					<Col sm={4}>
						<div className="card rating-list">
							<div className="listview">
								<div className="lv-header">
									<div className="m-t-5">Average Rating 3.0</div>
									<div className="clearfix"></div>
									<div className="rl-star">
										<i className="zmdi zmdi-star active"></i>
										<i className="zmdi zmdi-star active"></i>
										<i className="zmdi zmdi-star active"></i>
										<i className="zmdi zmdi-star"></i>
										<i className="zmdi zmdi-star"></i>
									</div>
								</div>

								<div className="lv-body">
									<div className="p-15">
										<div className="lv-item">
											<div className="media">
												<div className="pull-left">
													1<i className="zmdi zmdi-star"></i>
												</div>
												<div className="pull-right">20</div>
												<div className="media-body">
													<div className="progress">
														<ProgressBar now={20} bsStyle="danger" />
													</div>
												</div>
											</div>
										</div>
										<div className="lv-item">
											<div className="media">
												<div className="pull-left">
													2<i className="zmdi zmdi-star"></i>
												</div>
												<div className="pull-right">45</div>
												<div className="media-body">
													<div className="progress">
														<ProgressBar now={45} bsStyle="warning"/>
													</div>
												</div>
											</div>
										</div>

										<div className="lv-item">
											<div className="media">
												<div className="pull-left">
													3<i className="zmdi zmdi-star"></i>
												</div>

												<div className="pull-right">60</div>

												<div className="media-body">
													<div className="progress">
														<ProgressBar now={60} bsStyle="warning" />
													</div>
												</div>
											</div>
										</div>

										<div className="lv-item">
											<div className="media">
												<div className="pull-left">
													4<i className="zmdi zmdi-star"></i>
												</div>

												<div className="pull-right">78</div>

												<div className="media-body">
													<div className="progress">
														<ProgressBar now={78} bsStyle="success" />
													</div>
												</div>
											</div>
										</div>

										<div className="lv-item">
											<div className="media">
												<div className="pull-left">
													5<i className="zmdi zmdi-star"></i>
												</div>

												<div className="pull-right">22</div>

												<div className="media-body">
													<div className="progress">
														<ProgressBar now={22} bsStyle="info" />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								
							</div>
						</div>
						<div className="card profile-view">
							<div className="pv-header">
								<img className="pv-main" src={`${config.asset_url}/assets/images/profile.jpeg`} />
							</div>
							<div className="pv-body">
								<h2>Rowel de Guzman</h2>
								<small>Praesent vitae justo purus. In hendrerit lorem nislac lacinia urnaunc vitae ante id magna </small>
								<ul className="pv-contact">
									<li>
										<i className="zmdi zmdi-room"></i> Smart</li>
									<li>
										<i className="zmdi zmdi-phone"></i> 0949-344-3812</li>
								</ul>
								<ul className="pv-follow">
									<li>589 Followers</li>
									<li>8545 Followings</li>
								</ul>
								<Ripple className="pv-follow-btn" type="a">Follow</Ripple>
							</div>
						</div>

						<div className="card">
							<div className="listview">
								<div className="lv-header">
									Messages
								</div>
								<div className="lv-body">
									<a className="lv-item">
										<div className="media">
											<div className="pull-left">
												<img className="lv-img-sm" src={`${config.asset_url}/assets/img/profile-pics/1.jpg`} alt=""/>
											</div>
											<div className="media-body">
												<div className="lv-title">David Belle</div>
												<small className="lv-small">Cum sociis natoque penatibus et magnis dis parturient montes</small>
											</div>
										</div>
									</a>
									<a className="lv-item">
										<div className="media">
											<div className="pull-left">
												<img className="lv-img-sm" src={`${config.asset_url}/assets/img/profile-pics/2.jpg`} alt=""/>
											</div>
											<div className="media-body">
												<div className="lv-title">Jonathan Morris</div>
												<small className="lv-small">Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel</small>
											</div>
										</div>
									</a>
									<a className="lv-item">
										<div className="media">
											<div className="pull-left">
												<img className="lv-img-sm" src={`${config.asset_url}/assets/img/profile-pics/3.jpg`} alt=""/>
											</div>
											<div className="media-body">
												<div className="lv-title">Fredric Mitchell Jr.</div>
												<small className="lv-small">Phasellus a ante et est ornare accumsan at vel magnauis blandit turpis at augue ultricies</small>
											</div>
										</div>
									</a>
									<a className="lv-item">
										<div className="media">
											<div className="pull-left">
												<img className="lv-img-sm" src={`${config.asset_url}/assets/img/profile-pics/4.jpg`} alt=""/>
											</div>
											<div className="media-body">
												<div className="lv-title">Glenn Jecobs</div>
												<small className="lv-small">Ut vitae lacus sem ellentesque maximus, nunc sit amet varius dignissim, dui est consectetur neque</small>
											</div>
										</div>
									</a>
									<a className="lv-item">
										<div className="media">
											<div className="pull-left">
												<img className="lv-img-sm" src={`${config.asset_url}/assets/img/profile-pics/4.jpg`} alt="" />
											</div>
											<div className="media-body">
												<div className="lv-title">Bill Phillips</div>
												<small className="lv-small">Ut vitae lacus sem ellentesque maximus, nunc sit amet varius dignissim, dui est consectetur neque</small>
											</div>
										</div>
									</a>
								</div>
								<a className="lv-footer">View All</a>
							</div>
						</div>

						<div className="card">
							<div className="card-header bgm-cyan">
								<h2>Text with custom header <small>Nam at dui sed lacus lacinia lobortis</small></h2>
							</div>

							<div className="card-body card-padding">
								Cras leo sem, egestas a accumsan eget, euismod at nunc. Praesent vel mi blandit, tempus ex gravida, accumsan dui. Sed sed aliquam augue. Nullam vel suscipit purus, eu facilisis ante. Mauris nec commodo felis. Donec eget felis et sem scelerisque euismod eget sit amet nunc.
							</div>
						</div>
					</Col>
				</Row>
			</Fragment>
		)
	}
}