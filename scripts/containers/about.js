import React, { Component } from 'react'
import {
	BrowserRouter as Router,
	IndexRoute,
	Route,
	Switch,
	Link
} from 'react-router-dom'

class About extends Component {
	constructor(props) {
		super(props);
		this.state = { isToggleOn: true };

		this.testClick = this.testClick.bind(this);
		
	}
	testClick() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));

		fetch("http://roweldev.dev/action.php",{
			method: "get"
		})
		.then(res => res.json())
		.then(
			(result) => {
				console.log(result)
			},
			(error) => {
				console.log(error)
			}
		)
	}
	render() {
		const { match } = this.props;
		return (
			
			<div className="row">
					<div className="col-sm-12">
					<p>This is my about page</p>
					<button className="btn btn-default" onClick={this.testClick}>
						test click
						{this.state.isToggleOn ? 'ON' : 'OFF'}
					</button>
					<Link to={`${match.url}/rowel`}>About</Link>
				</div>
				
				<Route path={`${match.url}/rowel`} component={Rowel} />
				<Route exact path={match.url}/>
				
			</div>
			
		);
	}
}


const Rowel = () => (
	<h2>Rowel de Guzman</h2>
)
export default About