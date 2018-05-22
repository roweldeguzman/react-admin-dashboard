import React, { Component, Fragment } from 'react';

import ModuleHeade from '../../../common/module-header';
import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
export default class Utility extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Fragment>
				<ModuleHeade text="Utilities">
					<small>
						Following are the custom generic classes available with the template and can be used alongside with any elements. To modify or delete, please refer <code>_generic.scss</code> and <code>_colors.scss</code>
					</small>
				</ModuleHeade>
				<Row>
					<Col sm={6}>
						<div className="card">
							<div className="card-header ch-alt">
								<h2>Margin
									<small>eg:
										<code>&lt;div class="m-10 m-b-0"&gt;&lt;div&gt;</code>
									</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<strong className="d-block m-b-10">Margin</strong>

								<code>.m-0</code>
								<code>.m-5</code>
								<code>.m-10</code>
								<code>.m-15</code>
								<code>.m-20</code>
								<code>.m-25</code>

								<br />
								<br />

								<strong className="d-block m-b-10">Margin Top</strong>

								<code>.m-t-0</code>
								<code>.m-t-5</code>
								<code>.m-t-10</code>
								<code>.m-t-15</code>
								<code>.m-t-20</code>
								<code>.m-t-25</code>

								<br />
								<br />

								<strong className="d-block m-b-10">Margin Right</strong>

								<code>.m-r-0</code>
								<code>.m-r-5</code>
								<code>.m-r-10</code>
								<code>.m-r-15</code>
								<code>.m-r-20</code>
								<code>.m-r-25</code>

								<br />
								<br />

								<strong className="d-block m-b-10">Margin Bottom</strong>

								<code>.m-b-0</code>
								<code>.m-b-5</code>
								<code>.m-b-10</code>
								<code>.m-b-15</code>
								<code>.m-b-20</code>
								<code>.m-b-25</code>

								<br />
								<br />

								<strong className="d-block m-b-10">Margin Left</strong>

								<code>.m-l-0</code>
								<code>.m-l-5</code>
								<code>.m-l-10</code>
								<code>.m-l-15</code>
								<code>.m-l-20</code>
								<code>.m-l-25</code>
							</div>
						</div>

						<div className="card">
							<div className="card-header ch-alt">
								<h2>Text Color 
									<small>eg:
										<code>&lt;div class="c-blue"&gt;&lt;div&gt;</code>
									</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<p>To see the color previews, please head on to
								<NavLink to={`/user-interface/color`} > Colors</NavLink>
								</p>

								<code>.c-red</code>
								<code>.c-pink</code>
								<code>.c-purple</code>
								<code>.c-deeppurple</code>
								<code>.c-indigo</code>
								<code>.c-blue</code>
								<code>.c-lightblue</code>
								<code>.c-cyan</code>
								<code>.c-teal</code>
								<code>.c-green</code>
								<code>.c-lightgreen</code>
								<code>.c-lime</code>
								<code>.c-yellow</code>
								<code>.c-amber</code>
								<code>.c-orange</code>
								<code>.c-deeporange</code>
								<code>.c-brown</code>
								<code>.c-gray</code>
								<code>.c-bluegray</code>
								<code>.c-black</code>
								<code>.c-white</code>

								<br />
								<br />

								<code>.text-muted</code>
							</div>
						</div>

						<div className="card">
							<div className="card-header ch-alt">
								<h2>Text Align 
									<small>eg:
										<code>&lt;div class="text-center"&gt;&lt;div&gt;</code>
									</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<code>.text-center</code>
								<code>.text-right</code>
								<code>.text-left</code>
								<code>.text-justify</code>
							</div>
						</div>
					</Col>
					<Col sm={6}>
						<div className="card">
							<div className="card-header ch-alt">
								<h2>Padding
									<small>eg:
										<code>&lt;div class="p-10 p	-b-0"&gt;&lt;div&gt;</code>
									</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<strong className="d-block m-b-10">Padding</strong>

								<code>.p-0</code>
								<code>.p-5</code>
								<code>.p-10</code>
								<code>.p-15</code>
								<code>.p-20</code>
								<code>.p-25</code>

								<br />
								<br />

								<strong className="d-block m-b-10">Padding Top</strong>

								<code>.p-t-0</code>
								<code>.p-t-5</code>
								<code>.p-t-10</code>
								<code>.p-t-15</code>
								<code>.p-t-20</code>
								<code>.p-t-25</code>

								<br />
								<br />

								<strong className="d-block m-b-10">Padding Right</strong>

								<code>.p-r-0</code>
								<code>.p-r-5</code>
								<code>.p-r-10</code>
								<code>.p-r-15</code>
								<code>.p-r-20</code>
								<code>.p-r-25</code>

								<br />
								<br />

								<strong className="d-block m-b-10">Padding Bottom</strong>

								<code>.p-b-0</code>
								<code>.p-b-5</code>
								<code>.p-b-10</code>
								<code>.p-b-15</code>
								<code>.p-b-20</code>
								<code>.p-b-25</code>

								<br />
								<br />

								<strong className="d-block m-b-10">Padding Left</strong>

								<code>.p-l-0</code>
								<code>.p-l-5</code>
								<code>.p-l-10</code>
								<code>.p-l-15</code>
								<code>.p-l-20</code>
								<code>.p-l-25</code>
							</div>
						</div>

						<div className="card">
							<div className="card-header ch-alt">
								<h2>Background Color 
									<small>eg:
										<code>&lt;div class="bgm-blue"&gt;&lt;div&gt;</code>
									</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<p>To see the color previews, please head on to
									<NavLink to={`/user-interface/color`} > Colors</NavLink>
								</p>

								<code>.bgm-red</code>
								<code>.bgm-pink</code>
								<code>.bgm-purple</code>
								<code>.bgm-deeppurple</code>
								<code>.bgm-indigo</code>
								<code>.bgm-blue</code>
								<code>.bgm-lightblue</code>
								<code>.bgm-cyan</code>
								<code>.bgm-teal</code>
								<code>.bgm-green</code>
								<code>.bgm-lightgreen</code>
								<code>.bgm-lime</code>
								<code>.bgm-yellow</code>
								<code>.bgm-amber</code>
								<code>.bgm-orange</code>
								<code>.bgm-deeporange</code>
								<code>.bgm-brown</code>
								<code>.bgm-gray</code>
								<code>.bgm-bluegray</code>
								<code>.bgm-black</code>
								<code>.bgm-white</code>
							</div>
						</div>

						<div className="card">
							<div className="card-header ch-alt">
								<h2>Float
									<small>eg:
										<code>&lt;div class="pull-right"&gt;&lt;div&gt;</code>
									</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<code>.pull-right</code>
								<code>.pull-left</code>
							</div>
						</div>
					</Col>
				</Row>
			</Fragment>
		)
	}
}