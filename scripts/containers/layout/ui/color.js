import React, { Component, Fragment } from 'react';
import ModuleHeader from '../../../common/module-header';
import {Row, Col } from 'react-bootstrap';
export default class UIColors extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Fragment>
				<ModuleHeader text="Colors" />
				<div className="card">
					<div className="card-header">
						<h2>Colors from Material Design 
							<small>These colors are inspired by bold color statements juxtaposed with muted environments, taking cues from contemporary architecture, road signs, pavement marking tape, and sports courts. Emphasize bold shadows and highlights. Introduce unexpected and vibrant colors. (Taken by Google's color page)</small>
						</h2>
					</div>
					<div className="card-body card-padding">
						<Row>
							<Col xs={6} sm={3} >
								<div className="color-block bgm-red">
									<span className="color">Red</span>
									<span className="code">#F44336</span>
									<span className="less">@bgm-red</span>
								</div>
							</Col>
							<Col xs={6} sm={3} >
								<div className="color-block bgm-pink">
									<span className="color">Pink</span>
									<span className="code">#E91E63</span>
									<span className="less">@bgm-pink</span>
								</div>
							</Col>
							<Col xs={6} sm={3} >
								<div className="color-block bgm-purple">
									<span className="color">Purple</span>
									<span className="code">#9C27B0</span>
									<span className="less">@bgm-purple</span>
								</div>
							</Col>
							<Col xs={6} sm={3} >
								<div className="color-block bgm-deeppurple">
									<span className="color">Deep Purple</span>
									<span className="code">#673AB7</span>
									<span className="less">@bgm-deeppurple</span>
								</div>
							</Col>

							<Col xs={6} sm={3} >
								<div className="color-block bgm-indigo">
									<span className="color">Indigo</span>
									<span className="code">#3F51B5</span>
									<span className="less">@bgm-indigo</span>
								</div>
							</Col>
							<Col xs={6} sm={3} >
								<div className="color-block bgm-blue">
									<span className="color">Blue</span>
									<span className="code">#2196F3</span>
									<span className="less">@bgm-blue</span>
								</div>
							</Col>
							<Col xs={6} sm={3} >
								<div className="color-block bgm-lightblue">
									<span className="color">Light Blue</span>
									<span className="code">#03A9F4</span>
									<span className="less">@bgm-lightblue</span>
								</div>
							</Col>
							<Col xs={6} sm={3} >
								<div className="color-block bgm-cyan">
									<span className="color">Cyan</span>
									<span className="code">#00BCD4</span>
									<span className="less">@bgm-cyan</span>
								</div>
							</Col>

							<Col xs={6} sm={3} >
								<div className="color-block bgm-teal">
									<span className="color">Teal</span>
									<span className="code">#009688</span>
									<span className="less">@bgm-teal</span>
								</div>
							</Col>
							<Col xs={6} sm={3} >
								<div className="color-block bgm-green">
									<span className="color">Green</span>
									<span className="code">#4CAF50</span>
									<span className="less">@bgm-green</span>
								</div>
							</Col>
							<Col xs={6} sm={3} >
								<div className="color-block bgm-lightgreen">
									<span className="color">Light Green</span>
									<span className="code">#8BC34A</span>
									<span className="less">@bgm-lightgreen</span>
								</div>
							</Col>
							<Col xs={6} sm={3} >
								<div className="color-block bgm-lime">
									<span className="color">Lime</span>
									<span className="code">#CDDC39</span>
									<span className="less">@bgm-lime</span>
								</div>
							</Col>

							<Col xs={6} sm={3} >
								<div className="color-block bgm-yellow">
									<span className="color">Yellow</span>
									<span className="code">#FFEB3B</span>
									<span className="less">@bgm-yellow</span>
								</div>
							</Col>
							<Col xs={6} sm={3} >
								<div className="color-block bgm-amber">
									<span className="color">Amber</span>
									<span className="code">#FFC107</span>
									<span className="less">@bgm-amber</span>
								</div>
							</Col>
							<Col xs={6} sm={3} >
								<div className="color-block bgm-orange">
									<span className="color">Orange</span>
									<span className="code">#FF9800</span>
									<span className="less">@bgm-orange</span>
								</div>
							</Col>
							<Col xs={6} sm={3} >
								<div className="color-block bgm-deeporange">
									<span className="color">Deep Orange</span>
									<span className="code">#FF5722</span>
									<span className="less">@bgm-deeporange</span>
								</div>
							</Col>

							<Col xs={6} sm={3} >
								<div className="color-block bgm-brown">
									<span className="color">Brown</span>
									<span className="code">#795548</span>
									<span className="less">@bgm-brown</span>
								</div>
							</Col>
							<Col xs={6} sm={3} >
								<div className="color-block bgm-gray">
									<span className="color">Gray</span>
									<span className="code">#9E9E9E</span>
									<span className="less">@bgm-gray</span>
								</div>
							</Col>
							<Col xs={6} sm={3} >
								<div className="color-block bgm-bluegray">
									<span className="color">Blue Gray</span>
									<span className="code">#607D8B</span>
									<span className="less">@bgm-bluegray</span>
								</div>
							</Col>
							<Col xs={6} sm={3} >
								<div className="color-block bgm-black">
									<span className="color">Black</span>
									<span className="code">#000000</span>
									<span className="less">@bgm-black</span>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</Fragment>
		)
	}
}