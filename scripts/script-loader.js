import React, { Component } from 'react'
class Loading extends Component {
	render() {
		return (
			<div className="main-overlay">
				<div className="preloader">
					<div className="inner">
						<span>Template is loading...</span>
						<div className="progress-bar">
							<div className="progress-bar_bg">
								<div className="progress-bar-loader" style={{ width: "60px"}}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Loading