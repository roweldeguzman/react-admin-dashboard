import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../style/page404.scss'
export default class Page404 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container-fluid" id="page-404">
				<div className="not-found-container">
					<div className="not-found-flex">
						<div className="not-found-holder">
							<div className="not-found-box">
								<div className="main">
									<div className="panel">
										<div className="header">
											<h1>Page Not found</h1>
										</div>
										<div className="body">
											<p>
												Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
												<NavLink to={`/`}>← Back to our site</NavLink>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}