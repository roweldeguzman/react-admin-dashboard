import React, { Component, Fragment } from 'react'
import ModuleHeader from '../../../common/module-header';
import Ripple from '../../../components/ripple';
import { Row, Col} from 'react-bootstrap';

const config = require("../../../helper/config").config
export default class UIAnimation extends Component {
	constructor(props) {
		super(props)

		this.state = {
			attentionSeekers : [
				{ animation: 'bounce', target: 'attentionSeeker' },
				{ animation: 'flash', target: 'attentionSeeker' },
				{ animation: 'pulse', target: 'attentionSeeker' },
				{ animation: 'rubberBand', target: 'attentionSeeker' },
				{ animation: 'shake', target: 'attentionSeeker' },
				{ animation: 'swing', target: 'attentionSeeker' },
				{ animation: 'tada', target: 'attentionSeeker' },
				{ animation: 'wobble', target: 'attentionSeeker' }
			],
			flippers : [
				{ animation: 'flip', target: 'flippers' },
				{ animation: 'flipInX', target: 'flippers' },
				{ animation: 'flipInY', target: 'flippers' },
				{ animation: 'flipOutX', target: 'flippers' },
				{ animation: 'flipOutY', target: 'flippers' }
			],
			lightSpeed : [
				{ animation: 'lightSpeedIn', target: 'lightSpeed' },
				{ animation: 'lightSpeedOut', target: 'lightSpeed' }
			],
			special :[
				{ animation: 'hinge', target: 'special' },
				{ animation: 'rollIn', target: 'special' },
				{ animation: 'rollOut', target: 'special' }
			],
			bouncingEntrance :[
				{ animation: 'bounceIn', target: 'bouncingEntrance' },
				{ animation: 'bounceInDown', target: 'bouncingEntrance' },
				{ animation: 'bounceInLeft', target: 'bouncingEntrance' },
				{ animation: 'bounceInRight', target: 'bouncingEntrance' },
				{ animation: 'bounceInUp', target: 'bouncingEntrance' }
			],
			bouncingExits :[
				{ animation: 'bounceOut', target: 'bouncingExits' },
				{ animation: 'bounceOutDown', target: 'bouncingExits' },
				{ animation: 'bounceOutLeft', target: 'bouncingExits' },
				{ animation: 'bounceOutRight', target: 'bouncingExits' },
				{ animation: 'bounceOutUp', target: 'bouncingExits' }
			],
			rotatingEntrances :[
				{ animation: 'rotateIn', target: 'rotatingEntrances' },
				{ animation: 'rotateInDownLeft', target: 'rotatingEntrances' },
				{ animation: 'rotateInDownRight', target: 'rotatingEntrances' },
				{ animation: 'rotateInUpLeft', target: 'rotatingEntrances' },
				{ animation: 'rotateInUpRight', target: 'rotatingEntrances' }
			],
			rotatingExits :[
				{ animation: 'rotateOut', target: 'rotatingExits' },
				{ animation: 'rotateOutDownLeft', target: 'rotatingExits' },
				{ animation: 'rotateOutDownRight', target: 'rotatingExits' },
				{ animation: 'rotateOutUpLeft', target: 'rotatingExits' },
				{ animation: 'rotateOutUpRight', target: 'rotatingExits' }
			],
			fadeingEntrances : [
				{ animation: 'fadeIn', target: 'fadeingEntrances' },
				{ animation: 'fadeInDown', target: 'fadeingEntrances' },
				{ animation: 'fadeInDownBig', target: 'fadeingEntrances' },
				{ animation: 'fadeInLeft', target: 'fadeingEntrances' },
				{ animation: 'fadeInLeftBig', target: 'fadeingEntrances' },
				{ animation: 'fadeInRight', target: 'fadeingEntrances' },
				{ animation: 'fadeInRightBig', target: 'fadeingEntrances' },
				{ animation: 'fadeInUp', target: 'fadeingEntrances' },
				{ animation: 'fadeInBig', target: 'fadeingEntrances' }
			],
			fadeingExits :[
				{ animation: 'fadeOut', target: 'fadeingExits' },
				{ animation: 'fadeOutDown', target: 'fadeingExits' },
				{ animation: 'fadeOutDownBig', target: 'fadeingExits' },
				{ animation: 'fadeOutLeft', target: 'fadeingExits' },
				{ animation: 'fadeOutLeftBig', target: 'fadeingExits' },
				{ animation: 'fadeOutRight', target: 'fadeingExits' },
				{ animation: 'fadeOutRightBig', target: 'fadeingExits' },
				{ animation: 'fadeOutUp', target: 'fadeingExits' },
				{ animation: 'fadeOutUpBig', target: 'fadeingExits' }
			],
			zoomEntrances : [
				{ animation: 'zoomIn', target: 'zoomEntrances' },
				{ animation: 'zoomInDown', target: 'zoomEntrances' },
				{ animation: 'zoomInLeft', target: 'zoomEntrances' },
				{ animation: 'zoomInRight', target: 'zoomEntrances' },
				{ animation: 'zoomInUp', target: 'zoomEntrances' }
			],
			zoomExits :[
				{ animation: 'zoomOut', target: 'zoomExits' },
				{ animation: 'zoomOutDown', target: 'zoomExits' },
				{ animation: 'zoomOutLeft', target: 'zoomExits' },
				{ animation: 'zoomOutRight', target: 'zoomExits' },
				{ animation: 'zoomOutUp', target: 'zoomExits' }
			]
		}
	}
	setAnimation = function (animation, target) {
		let animationDuration = 1200;
		if (animation === "hinge") {
			animationDuration = 2100;
		}
		document.getElementById(target).classList.add(animation)
		setTimeout(function () {
			document.getElementById(target).classList.remove(animation)
		}, animationDuration);
	}
	render() {
		return (
			<Fragment>
				<ModuleHeader text="Animations"/>
				<Row>
					<Col sm={6} md={4}>
						<div className="card animation-demo">
							<div className="card-header">
								<h2>Attention Seekers
									<small>Click on the buttons below to start the animation</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<img src={`${config.asset_url}/assets/img/headers/sm/1.png`} className="animated" id="attentionSeeker"/>

								<Row>
									{this.state.attentionSeekers.map((item, i) => (
										<Col xs={6} key={i}>
											<Ripple type="button" className="btn btn-primary" onClick={() => { this.setAnimation(item.animation, item.target)}} >
												{item.animation}
											</Ripple>
										</Col>
									))}
								</Row>
		
							</div>
						</div>


						<div className="card animation-demo">
							<div className="card-header">
								<h2>Flippers
									<small>Click on the buttons below to start the animation</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<img src={`${config.asset_url}/assets/img/headers/sm/6.png`} className="animated" id="flippers" />

								<Row>
									{this.state.flippers.map((item, i) => (
										<Col xs={6} key={i}>
											<Ripple type="button" className="btn btn-primary" onClick={() => { this.setAnimation(item.animation, item.target) }} >
												{item.animation}
											</Ripple>
										</Col>
									))}
								</Row>
							</div>
						</div>
						
						<div className="card animation-demo">
							<div className="card-header">
								<h2>Light Speed
									<small>Click on the buttons below to start the animation</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<img src={`${config.asset_url}/assets/img/headers/sm/7.png`} className="animated" id="lightSpeed" />

								<Row>
									{this.state.lightSpeed.map((item, i) => (
										<Col xs={6} key={i}>
											<Ripple type="button" className="btn btn-primary" onClick={() => { this.setAnimation(item.animation, item.target) }} >
												{item.animation}
											</Ripple>
										</Col>
									))}
								</Row>
							</div>
						</div>

						<div className="card animation-demo">
							<div className="card-header">
								<h2>Specials
									<small>Click on the buttons below to start the animation</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<img src={`${config.asset_url}/assets/img/headers/sm/1.png`} className="animated" id="special" />

								<Row>
									{this.state.special.map((item, i) => (
										<Col xs={6} key={i}>
											<Ripple type="button" className="btn btn-primary" onClick={() => { this.setAnimation(item.animation, item.target) }} >
												{item.animation}
											</Ripple>
										</Col>
									))}
								</Row>
							</div>
						</div>
					</Col>

					<Col sm={6} md={4}>
						<div className="card animation-demo">
							<div className="card-header">
								<h2>Bouncing Entrances
									<small>Click on the buttons below to start the animation</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<img src={`${config.asset_url}/assets/img/headers/sm/2.png`} className="animated" id="bouncingEntrance" />

								<Row>
									{this.state.bouncingEntrance.map((item, i) => (
										<Col xs={6} key={i}>
											<Ripple type="button" className="btn btn-primary" onClick={() => { this.setAnimation(item.animation, item.target) }} >
												{item.animation}
											</Ripple>
										</Col>
									))}
								</Row>
							</div>
						</div>

						<div className="card animation-demo">
							<div className="card-header">
								<h2>Bouncing Exits
									<small>Click on the buttons below to start the animation</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<img src={`${config.asset_url}/assets/img/headers/sm/3.png`} className="animated" id="bouncingExits" />

								<Row>
									{this.state.bouncingExits.map((item, i) => (
										<Col xs={6} key={i}>
											<Ripple type="button" className="btn btn-primary" onClick={() => { this.setAnimation(item.animation, item.target) }} >
												{item.animation}
											</Ripple>
										</Col>
									))}
								</Row>
							</div>
						</div>

						<div className="card animation-demo">
							<div className="card-header">
								<h2>Rotating Entrances
									<small>Click on the buttons below to start the animation</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<img src={`${config.asset_url}/assets/img/headers/sm/7.png`} className="animated" id="rotatingEntrances" />

								<Row>
									{this.state.rotatingEntrances.map((item, i) => (
										<Col xs={6} key={i}>
											<Ripple type="button" className="btn btn-primary" onClick={() => { this.setAnimation(item.animation, item.target) }} >
												{item.animation}
											</Ripple>
										</Col>
									))}
								</Row>
							</div>
						</div>

						<div className="card animation-demo">
							<div className="card-header">
								<h2>Rotating Exits
									<small>Click on the buttons below to start the animation</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<img src={`${config.asset_url}/assets/img/headers/sm/9.png`} className="animated" id="rotatingExits" />

								<Row>
									{this.state.rotatingExits.map((item, i) => (
										<Col xs={6} key={i}>
											<Ripple type="button" className="btn btn-primary" onClick={() => { this.setAnimation(item.animation, item.target) }} >
												{item.animation}
											</Ripple>
										</Col>
									))}
								</Row>
							</div>
						</div>
					</Col>

					<Col sm={6} md={4}>
						<div className="card animation-demo">
							<div className="card-header">
								<h2>Fading Entrances
									<small>Click on the buttons below to start the animation</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<img src={`${config.asset_url}/assets/img/headers/sm/4.png`} className="animated" id="fadeingEntrances" />

								<Row>
									{this.state.fadeingEntrances.map((item, i) => (
										<Col xs={6} key={i}>
											<Ripple type="button" className="btn btn-primary" onClick={() => { this.setAnimation(item.animation, item.target) }} >
												{item.animation}
											</Ripple>
										</Col>
									))}
								</Row>
							</div>
						</div>

						<div className="card animation-demo">
							<div className="card-header">
								<h2>Fadeing Exits
									<small>Click on the buttons below to start the animation</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<img src={`${config.asset_url}/assets/img/headers/sm/5.png`} className="animated" id="fadeingExits" />

								<Row>
									{this.state.fadeingExits.map((item, i) => (
										<Col xs={6} key={i}>
											<Ripple type="button" className="btn btn-primary" onClick={() => { this.setAnimation(item.animation, item.target) }} >
												{item.animation}
											</Ripple>
										</Col>
									))}
								</Row>
							</div>
						</div>

						<div className="card animation-demo">
							<div className="card-header">
								<h2>Zoom Entrances
									<small>Click on the buttons below to start the animation</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<img src={`${config.asset_url}/assets/img/headers/sm/4.png`} className="animated" id="zoomEntrances" />

								<Row>
									{this.state.zoomEntrances.map((item, i) => (
										<Col xs={6} key={i}>
											<Ripple type="button" className="btn btn-primary" onClick={() => { this.setAnimation(item.animation, item.target) }} >
												{item.animation}
											</Ripple>
										</Col>
									))}
								</Row>
							</div>
						</div>

						<div className="card animation-demo">
							<div className="card-header">
								<h2>Zoom Exits
									<small>Click on the buttons below to start the animation</small>
								</h2>
							</div>
							<div className="card-body card-padding">
								<img src={`${config.asset_url}/assets/img/headers/sm/3.png`} className="animated" id="zoomExits" />

								<Row>
									{this.state.zoomExits.map((item, i) => (
										<Col xs={6} key={i}>
											<Ripple type="button" className="btn btn-primary" onClick={() => { this.setAnimation(item.animation, item.target) }} >
												{item.animation}
											</Ripple>
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