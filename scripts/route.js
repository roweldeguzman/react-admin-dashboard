/* For lazy loading / Code Split */
import Loadable from 'react-loadable';
/* Loading template */
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
		}, {
			path: "/widgets/widget",
			component: Loadable({
				loader: () => import("./containers/layout/widgets/widget"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/widgets/template",
			component: Loadable({
				loader: () => import("./containers/layout/widgets/template"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/tables/table",
			component: Loadable({
				loader: () => import("./containers/layout/tables/table"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/tables/data-table",
			component: Loadable({
				loader: () => import("./containers/layout/tables/data-table"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/forms/form-basic",
			component: Loadable({
				loader: () => import("./containers/layout/forms/form-basic"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/forms/form-component",
			component: Loadable({
				loader: () => import("./containers/layout/forms/form-component"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/forms/form-example",
			component: Loadable({
				loader: () => import("./containers/layout/forms/form-example"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/forms/form-validation",
			component: Loadable({
				loader: () => import("./containers/layout/forms/form-validation"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/user-interface/bootstrap",
			component: Loadable({
				loader: () => import("./containers/layout/ui/bootstrap"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/user-interface/color",
			component: Loadable({
				loader: () => import("./containers/layout/ui/color"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/user-interface/animation",
			component: Loadable({
				loader: () => import("./containers/layout/ui/animation"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/user-interface/box-shadow",
			component: Loadable({
				loader: () => import("./containers/layout/ui/box-shadow"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/user-interface/button",
			component: Loadable({
				loader: () => import("./containers/layout/ui/button"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/user-interface/icon",
			component: Loadable({
				loader: () => import("./containers/layout/ui/icon"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/user-interface/alert",
			component: Loadable({
				loader: () => import("./containers/layout/ui/alert"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/user-interface/dialog",
			component: Loadable({
				loader: () => import("./containers/layout/ui/dialog"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/user-interface/media",
			component: Loadable({
				loader: () => import("./containers/layout/ui/media"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/user-interface/modal",
			component: Loadable({
				loader: () => import("./containers/layout/ui/modal"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/user-interface/pagination",
			component: Loadable({
				loader: () => import("./containers/layout/ui/pagination"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/charts",
			component: Loadable({
				loader: () => import("./containers/layout/charts/chart"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/gallery/default",
			component: Loadable({
				loader: () => import("./containers/layout/gallery/default"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/gallery/timeline",
			component: Loadable({
				loader: () => import("./containers/layout/gallery/timeline"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/utilities",
			component: Loadable({
				loader: () => import("./containers/layout/utilities/utility"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/contact",
			component: Loadable({
				loader: () => import("./containers/contact"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/about",
			component: Loadable({
				loader: () => import("./containers/about"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/sample-pages/profile",
			component: Loadable({
				loader: () => import("./containers/layout/pages/profile"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/sample-pages/list-view",
			component: Loadable({
				loader: () => import("./containers/layout/pages/list-view"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/sample-pages/pricing-table",
			component: Loadable({
				loader: () => import("./containers/layout/pages/pricing-table"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "*",
			component: Loadable({
				loader: () => import("./containers/page-not-found"),
				loading: Loading
			}),
			exact: true
		}
	]
}

module.exports.routes = routes