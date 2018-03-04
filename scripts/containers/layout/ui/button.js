import React, { Component, Fragment } from 'react'
import ModuleHeader from '../../../common/module-header';
import Ripple from '../../../components/ripple';
import { Row, Col } from 'react-bootstrap';

export default class UIButton extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Fragment>
				<ModuleHeader text="Button"/>
				<Row>
					<Col sm={12}>
						<div className="card">
							<div className="card-header">
								<h2>Basic Examples
									<small>Use any of the available button classes to quickly create a styled button.</small>
								</h2>
							</div>

							<div className="card-body card-padding">
								<p className="c-black m-b-20">Bootstrap Color Schemes</p>
								<Ripple type="button" className="btn btn-default" >Default</Ripple>&nbsp;
								<Ripple type="button" className="btn btn-info" >Info</Ripple>&nbsp;
								<Ripple type="button" className="btn btn-primary" >Primary</Ripple>&nbsp;
								<Ripple type="button" className="btn btn-success" >Success</Ripple>&nbsp;
								<Ripple type="button" className="btn btn-warning" >Warning</Ripple>&nbsp;
								<Ripple type="button" className="btn btn-danger" >Danger</Ripple>
								<p className="c-black m-b-20">Optional Material Design Colors</p>
								<div className="btn-colors btn-demo">
									<Ripple type="button" className="btn bgm-cyan" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Cyan</Ripple>
									<Ripple type="button" className="btn bgm-teal" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Teal</Ripple>
									<Ripple type="button" className="btn bgm-amber" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Amber</Ripple>
									<Ripple type="button" className="btn bgm-orange" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Orange</Ripple>
									<Ripple type="button" className="btn bgm-deeporange" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Deep Orange</Ripple>
									<Ripple type="button" className="btn bgm-red" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Red</Ripple>
									<Ripple type="button" className="btn bgm-pink" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Pink</Ripple>
									<Ripple type="button" className="btn bgm-lightblue" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Light Blue</Ripple>
									<Ripple type="button" className="btn bgm-blue" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Blue</Ripple>
									<Ripple type="button" className="btn bgm-indigo" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Indigo</Ripple>
									<Ripple type="button" className="btn bgm-lime" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Lime</Ripple>
									<Ripple type="button" className="btn bgm-lightgreen" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Light Green</Ripple>
									<Ripple type="button" className="btn bgm-green" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Green</Ripple>
									<Ripple type="button" className="btn bgm-purple" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Purple</Ripple>
									<Ripple type="button" className="btn bgm-deeppurple" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Deep Purple</Ripple>
									<Ripple type="button" className="btn bgm-gray" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Gray</Ripple>
									<Ripple type="button" className="btn bgm-bluegray" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Blue Gray</Ripple>
									<Ripple type="button" className="btn bgm-black" style={{ minWidth: "112px", margin: "0 5px 10px 0" }}>Black</Ripple>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Fragment>
		)
	}
}