import Loadable from 'react-loadable';
import Loading from './script-loader';

const routes = [
	{
		path: "/login",
		component: Loadable({
			loader: () => import("./containers/login"),
			loading: Loading
		}),
		exact: true,
		resource: {
			title: "Login"
		}
		
	}, {
		path: "/signup",
		component: Loadable({
			loader: () => import("./containers/signup"),
			loading: Loading
		}),
		exact: true,
		resource: {
			title: "Signup"
		}
	}, {
		path: "/forgot-password",
		component: Loadable({
			loader: () => import("./containers/forgot-password"),
			loading: Loading
		}),
		exact: true,
		resource: {
			title: "Forgot Password"
		}
	}
];

module.exports.routes = routes