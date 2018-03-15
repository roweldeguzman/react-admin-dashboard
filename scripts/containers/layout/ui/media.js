import React, { Component, Fragment } from 'react'

import ModuleHeader from '../../../common/module-header';
import Ripple from '../../../components/ripple';

import { Row, Col } from 'react-bootstrap';

const config = require("../../../helper/config").config

export default class UIMedia extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Fragment>
				<ModuleHeader text="Media"/>

				<Row>
					<Col sm={12}>
						<div className="card">
							<div className="card-header">
								<h2>Thumbnail
									<small>Extend Bootstrap's grid system with the thumbnail component to easily display grids of images, videos, text, and more.</small>
								</h2>
							</div>

							<div className="card-body card-padding">
								<p className="f-500 c-black m-b-5">Basic Example</p>
								<small> By default, thumbnails are designed to showcase linked images with minimal required markup. </small>

								<Row>
									{[0,1,2,3,4,5].map((item)=>(
										<Col xs={6} md={2} key={item}>
											<div className="thumbnail">
												<img src={`${config.asset_url}/assets/img/300x200.gif`} />
											</div>
										</Col>
									))}
								</Row>
								<br />

								<p className="f-500 c-black m-b-5">Custom content</p>
								<small>With a bit of extra markup, it's possible to add any kind of HTML content like headings, paragraphs, or buttons into thumbnails.</small>

								<br />
								<br />

								<Row>
									{[0,1,2,3].map((item)=>(
										<Col sm={6} md={3} key={item}>
											<div className="thumbnail">
												<img src={`${config.asset_url}/assets/img/300x200.gif`} />
												<div className="caption">
													<h4>Thumbnail label</h4>
													<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
													<div className="m-b-5">
														<Ripple type="button" className="btn btn-sm btn-primary m-r-5" role="button">Button</Ripple>
													</div>
												</div>
											</div>
										</Col>
									))}
								</Row>
							</div>
						</div>
					</Col>
				</Row>
			</Fragment>
		)
	}
}