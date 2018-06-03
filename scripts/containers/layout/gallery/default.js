import React, { Component, Fragment } from 'react';

import ModuleHeader from '../../../common/module-header';
import { Row, Col } from 'react-bootstrap';

const config = require("../../../helper/config").config;

export default class Default extends Component {
	constructor(props) {
		super(props);		
		this.state = {
			listviewSearch: false,
			photoColumnSize: 2,
			photoColumn: "col-sm-2",
			photoOptions: [
				{ value: 1, column: 12 },
				{ value: 2, column: 6 },
				{ value: 3, column: 4 },
				{ value: 4, column: 3 },
				
			],
			photos: [
				"1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg",
				"11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg",
				"20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg",

				"1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg",
				"11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg",
				"20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg",
			],

		}

		this.updateGrid = this.updateGrid.bind(this);
		this.lightGallery;
	}
	componentDidMount() {
		this.lightGallery = $(this.reference).lightGallery({
			enableTouch: true
		});
	}
	componentWillUnmount(){
		this.lightGallery.destroy(true);
	}

	showSearch() {
		this.setState({
			listviewSearch: !this.state.listviewSearch
		})
	}
	updateGrid(column) {
		this.setState({
			photoColumn: "col-sm-" + column,
			photoColumnSize: column
		})
	}
	render() {
		return (
			<Fragment>
				<ModuleHeader text="Default Gallery"/>
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
								<ul className="p-grid">
									{this.state.photoOptions.map((option, index) => (
										<li key={index} className={`${this.state.photoColumnSize == option.value ? "active" : ""}`} onClick={() => { this.updateGrid(option.value) }}>
											{option.column}
										</li>
									))}									
								</ul>

								<div className="lightbox photos" ref={ (ref) => { this.reference = ref}}>
									{this.state.photos.map((photo, index) => (
										<div key={index} data-src={`${config.asset_url}/assets/media/gallery/${photo}`} className={`${this.state.photoColumn} col-sm-4 col-xs-6`}>
											<div className="lightbox-item p-item">
												<img src={`${config.asset_url}/assets/media/gallery/thumbs/${photo}`} alt="" />
											</div>
										</div>
									))}
									
								</div>
								<div className="clearfix"></div>
							</div>
						</div>
					</Col>
				</Row>
			</Fragment>
		)
	}
}