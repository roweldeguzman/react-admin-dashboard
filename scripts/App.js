import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom'
/* Redux */
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';
/* For lazy loading / Code Split */
import Loadable from 'react-loadable';
/* Common Component */
import Header from './common/header';
import SideBar from './common/sidebar';
/* Not found Component */
import PageNotFound from './containers/page-not-found';

/* Waves */
require('./vendors/Waves/waves.min.js')
require('./vendors/Waves/waves.min.css')

/* Sparkline */
require('./vendors/sparklines/jquery.sparkline.min.js')
/* perfect-scrollbar  */
require('perfect-scrollbar/css/perfect-scrollbar.css')


import Loading from './script-loader'

import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()
const store = createStore(allReducers)

class Applayout extends Component {
	constructor(props) {
		super(props)
		this.state = { state_location: "/" }
	}
	componentWillMount() {
		this.unsubscribeFromHistory = history.listen(this.handleLocationChange);
		this.handleLocationChange(history.location);
	}
	componentWillUnmount() {
		if (this.unsubscribeFromHistory) this.unsubscribeFromHistory();
	}
	handleLocationChange = (location) => {
		let aside = document.querySelector("aside");
		if (aside !== null){
			if (window.innerWidth <= 767) {
				if (aside.classList.contains("active")) {
					setTimeout(function () {
						document.querySelector("aside").classList.remove("active")
						document.querySelector(".overlay").classList.remove("active")
						document.querySelector(".hamburger--spring").classList.toggle("is-active")
					}, 300);
				}
			} else if (window.innerWidth > 768) {
				if (aside.classList.contains("active")) {
					setTimeout(function () {
						document.querySelector("aside").classList.remove("active")
						document.querySelector(".overlay").classList.remove("active")
						document.querySelector(".bottom-toggler").classList.remove("active")
						document.querySelector(".hamburger--spring").classList.toggle("is-active")
					}, 50);
				}
			}
		}
		this.setState({
			state_location: location.pathname
		})
	}
	componentDidMount(){
		document.querySelector(".preloader-base").remove()
	}
	
	render() {
		return (
			<Provider store={store}>
				<Router history={history}>
					<div className="App">
						<Header />
						<SideBar state={this.state.state_location}/>
						<main className="container">
							<Switch>
								
								<Route exact strict={true} path="/" component={Loadable({
									loader: () => import('./containers/layout/home/home'),
									loading: Loading
								})} />
								<Route path="/typography" component={Loadable({
									loader: () => import('./containers/layout/typography/typography'),
									loading: Loading
								})} />
								{/* For Widget Route */}
								<Route path="/widgets/widget" component={Loadable({
									loader: () => import('./containers/layout/widgets/widget'),
									loading: Loading
								})} />
								<Route path="/widgets/template" component={Loadable({
									loader: () => import('./containers/layout/widgets/template'),
									loading: Loading
								})} />
								{/* For Table Route */}
								<Route path="/tables/table" component={Loadable({
									loader: () => import('./containers/layout/tables/table'),
									loading: Loading
								})} />
								<Route path="/tables/data-table" component={Loadable({
									loader: () => import('./containers/layout/tables/data-table'),
									loading: Loading
								})} />
								{/* For Form Route */}
								<Route path="/forms/form-basic" component={Loadable({
									loader: () => import('./containers/layout/forms/form-basic'),
									loading: Loading
								})} />
								<Route path="/forms/form-component" component={Loadable({
									loader: () => import('./containers/layout/forms/form-component'),
									loading: Loading
								})} />
								<Route path="/forms/form-example" component={Loadable({
									loader: () => import('./containers/layout/forms/form-example'),
									loading: Loading
								})} />
								<Route path="/forms/form-validation" component={Loadable({
									loader: () => import('./containers/layout/forms/form-validation'),
									loading: Loading
								})} />
								{/* For Form UI Bootstrap */}
								<Route path="/user-interface/bootstrap" component={Loadable({
									loader: () => import('./containers/layout/ui/bootstrap'),
									loading: Loading
								})} />
								<Route path="/user-interface/color" component={Loadable({
									loader: () => import('./containers/layout/ui/color'),
									loading: Loading
								})} />
								<Route path="/user-interface/animation" component={Loadable({
									loader: () => import('./containers/layout/ui/animation'),
									loading: Loading
								})} />
								<Route path="/user-interface/box-shadow" component={Loadable({
									loader: () => import('./containers/layout/ui/box-shadow'),
									loading: Loading
								})} />
								<Route path="/user-interface/button" component={Loadable({
									loader: () => import('./containers/layout/ui/button'),
									loading: Loading
								})} />
								<Route path="/user-interface/icon" component={Loadable({
									loader: () => import('./containers/layout/ui/icon'),
									loading: Loading
								})} />
								<Route path="/user-interface/alert" component={Loadable({
									loader: () => import('./containers/layout/ui/alert'),
									loading: Loading
								})} />
								<Route path="/user-interface/dialog" component={Loadable({
									loader: () => import('./containers/layout/ui/dialog'),
									loading: Loading
								})} />
								<Route path="/user-interface/media" component={Loadable({
									loader: () => import('./containers/layout/ui/media'),
									loading: Loading
								})} />
								<Route path="/user-interface/modal" component={Loadable({
									loader: () => import('./containers/layout/ui/modal'),
									loading: Loading
								})} />




								<Route exact path="/contact" component={Loadable({
									loader: () => import('./containers/contact'),
									loading: Loading,
								})} />
								<Route path="/about" component={Loadable({
									loader: () => import('./containers/about'),
									loading: Loading,
								})}/>
								<Route path="*" component={PageNotFound} />

							</Switch>
							<footer className="text-center" id="footer">
								<span className="ng-scope">React Admin Dashboard</span>
								<ul className="f-menu list-unstyled">
									<li><a>Home</a></li>
								</ul>
							</footer>
						</main>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default Applayout;