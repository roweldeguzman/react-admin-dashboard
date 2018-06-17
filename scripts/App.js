import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom'
/* Redux */
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';

/* Common Component */
import Header from './common/header';
import SideBar from './common/sidebar';

import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()
const store = createStore(allReducers)

const routes = require('./route').routes;
const helper = require('./helper/helper').helper

class Applayout extends Component {
	constructor(props) {
		super(props)
		this.state = {
			state_location: "/",
			pathname: window.location.pathname,
		}
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
		if (aside !== null) {
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
			state_location: location.pathname,
			pathname: location.pathname
		})
		ga('set', 'page', location.pathname);
		ga('send', 'pageview');
	}
	componentDidMount() {
		document.querySelector(".preloader-base").remove()
	}

	render() {
		if (helper.in_array(this.state.pathname, ["/login", "/signup", "/forgot-password", "/lock-screen", "/page404", "/loginSecond"])){
			return (
				<Router history={history}>
					<Switch>
						{routes.notLogged.map((route, index) => (
							<Route key={index} path={route.path} exact={route.exact} component={route.component} />
						))}
					</Switch>
				</Router>
			)
		} else {
			return (
				<Provider store={store}>
					<Router history={history}>
						<div className="App">
							<Header />
							<SideBar state={this.state.state_location} />
							<main className="container">
								<Switch>
									{routes.logged.map((route, index) => (
										<Route key={index} path={route.path} exact={route.exact} component={route.component} />
									))}
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
}

export default Applayout;