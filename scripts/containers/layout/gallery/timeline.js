import React, { Component, Fragment } from 'react';

import ModuleHeader from '../../../common/module-header';

import { Row, Col } from 'react-bootstrap';

const config = require("../../../helper/config").config;

export default class Timeline extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listviewSearch: false,
			site: [
				"1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", 
				"11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg"
			],
			trip: [
				"10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg"
			],
			purchased: [
				"4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg",
				"11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg"
			],
			website: [
				"1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg",
				"11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg"
			],
			print: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]
		}
		this.lightGallery;
	}
	componentDidMount() {
		this.lightGallery = $(".lightbox").lightGallery({
			enableTouch: true
		});
	}
	componentWillUnmount() {
		this.lightGallery.destroy(true);
	}
	showSearch() {
		this.setState({
			listviewSearch: !this.state.listviewSearch
		})
	}
	render() {
		return (
			<Fragment>
				<ModuleHeader text="Timeline Gallery"/>

				<Row>
					<Col sm={12}>
						<div className="card">
							<div className="lv-header-alt clearfix m-b-5">
								<h2 className="lvh-label hidden-xs">19,453 Records</h2>
								{this.state.listviewSearch ?
									<div className="lvh-search" >
										<input type="text" placeholder="Start typing..." className="lvhs-input" />
										<i className="lvh-search-close" onClick={this.showSearch.bind(this)}>&times;</i>
									</div>
									: ""
								}
								<ul className="lv-actions actions">
									<li>
										<a onClick={this.showSearch.bind(this)}>
											<i className="zmdi zmdi-search"></i>
										</a>
									</li>
								</ul>
							</div>

							<div className="card-body card-padding">
								<div className="p-timeline">
									<div className="pt-line c-gray text-right">
										<span className="d-block">2015</span>
										05/08
									</div>

									<div className="pt-body">
										<h2 className="ptb-title">Site's Collection</h2>
										<div className="lightbox clearfix">
											{this.state.site.map((photo, index) => (
												<div key={index} data-src={`${config.asset_url}/assets/media/gallery/${photo}`}>
													<div className="lightbox-item">
														<img src={`${config.asset_url}/assets/media/gallery/thumbs/${photo}`} alt="" />
													</div>
												</div>
											))}
										</div>
									</div>
								</div>

								<div className="p-timeline">
									<div className="pt-line c-gray text-right">
										<span className="d-block">2015</span>
										10/07
									</div>

									<div className="pt-body">
										<h2 className="ptb-title">Trip to Orbit</h2>
										<div className="lightbox clearfix">
											{this.state.trip.map((photo, index) => (
												<div key={index} data-src={`${config.asset_url}/assets/media/gallery/${photo}`}>
													<div className="lightbox-item">
														<img src={`${config.asset_url}/assets/media/gallery/thumbs/${photo}`} alt="" />
													</div>
												</div>
											))}
										</div>
									</div>
								</div>

								<div className="p-timeline">
									<div className="pt-line c-gray text-right">
										<span className="d-block">2015</span>
										12/06
									</div>

									<div className="pt-body">
										<h2 className="ptb-title">Purchased for print</h2>
										<div className="lightbox clearfix">
											{this.state.purchased.map((photo, index) => (
												<div key={index} data-src={`${config.asset_url}/assets/media/gallery/${photo}`}>
													<div className="lightbox-item">
														<img src={`${config.asset_url}/assets/media/gallery/thumbs/${photo}`} alt="" />
													</div>
												</div>
											))}
										</div>
									</div>
								</div>

								<div className="p-timeline">
									<div className="pt-line c-gray text-right">
										<span className="d-block">2015</span>
										01/06
									</div>

									<div className="pt-body">
										<h2 className="ptb-title">For Website</h2>
										<div className="lightbox clearfix">
											{this.state.website.map((photo, index) => (
												<div key={index} data-src={`${config.asset_url}/assets/media/gallery/${photo}`}>
													<div className="lightbox-item">
														<img src={`${config.asset_url}/assets/media/gallery/thumbs/${photo}`} alt="" />
													</div>
												</div>
											))}
										</div>
									</div>
								</div>

								<div className="p-timeline">
									<div className="pt-line c-gray text-right">
										<span className="d-block">2015</span>
										22/04
									</div>

									<div className="pt-body">
										<h2 className="ptb-title">To Print and Review</h2>
										<div className="lightbox clearfix">
											{this.state.print.map((photo, index) => (
												<div key={index} data-src={`${config.asset_url}/assets/media/gallery/${photo}`}>
													<div className="lightbox-item">
														<img src={`${config.asset_url}/assets/media/gallery/thumbs/${photo}`} alt="" />
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</Col>
				</Row>

			</Fragment>
		)
	}
}