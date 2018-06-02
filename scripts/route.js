import Loadable from 'react-loadable';
import Loading from './script-loader';

const routes = {
	notLogged: [
		{
			path: "/login",
			component: Loadable({
				loader: () => import("./containers/login"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/signup",
			component: Loadable({
				loader: () => import("./containers/signup"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/forgot-password",
			component: Loadable({
				loader: () => import("./containers/forgot-password"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/lock-screen",
			component: Loadable({
				loader: () => import("./containers/lock-screen"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/page404",
			component: Loadable({
				loader: () => import("./containers/page404"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/loginSecond",
			component: Loadable({
				loader: () => import("./containers/loginSecond"),
				loading: Loading
			}),
			exact: true
		}
	],
	logged: [
		{
			path: "/",
			component: Loadable({
				loader: () => import("./containers/layout/home/home"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/typography",
			component: Loadable({
				loader: () => import("./containers/layout/typography/typography"),
				loading: Loading
			}),
			exact: true
		}
	]
}

module.exports.routes = routes