import React, { Component, Fragment } from 'react'
import ModuleHeader from '../../../common/module-header';

import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

export default class UIIcon extends Component {
	constructor(props) {
		super(props)

		this.state = {
			icon: {
				web: [
					"3d-rotation", "airplane-off", "airplane", "album", "archive", "assignment-account",
					"assignment-alert", "assignment-check", "assignment-o", "assignment-return", "assignment-returned",
					"assignment", "attachment-alt", "attachment", "audio", "badge-check", "balance-wallet", "balance",
					"battery-alert","battery-flash", "battery-unknown", "battery", "bike", "block-alt", "block",
					"boat", "book-image", "book", "bookmark-outline", "bookmark", "brush", "bug", "bus", "cake", "car-taxi",
					"car-wash", "car", "card-giftcard", "card-membership", "card-travel", "card", "case-check", "case-download",
					"case-play", "case", "cast-connected", "cast", "chart-donut", "chart", "city-alt", "city", "close-circle-o",
					"close-circle", "close", "cocktail", "code-setting", "code-smartphone", "code", "coffee", "collection-bookmark",
					"collection-case-play", "collection-folder-image", "collection-image-o", "collection-image", "collection-item-1",
					"collection-item-2", "collection-item-3", " collection-item-4", "collection-item-5", "collection-item-6",
					"collection-item-7", "collection-item-8", "collection-item-9", "collection-item-9-plus", "collection-item",
					"collection-music", "collection-pdf", "collection-plus", "collection-speaker", " collection-text", " collection-video",
					"compass", "cutlery", "delete", "dialpad", "dns", "drink", "edit", "email-open", "email", "eye-off", "eye", "eyedropper",
					"favorite-outline", "favorite", "filter-list", "fire", "flag", "flare", "flash-auto", "flash-off", "flash", "flip", "flower-alt",
					"flower", "font", "fullscreen-alt", "fullscreen-exit", "fullscreen", "functions", "gas-station", "gesture", "globe-alt", "globe-lock",
					"globe", " graduation-cap", "home", "hospital-alt", "hospital", "hotel", "hourglass-alt", "hourglass-outline", "hourglass",
					"http", "image-alt", "image-o", "image", "inbox", "invert-colors-off", "invert-colors", "key", "label-alt-outline", "label-alt",
					"label-heart", "label", "labels", "lamp", "landscape", "layers-off", "layers", "library", "link", "lock-open", "lock-outline",
					"lock", "mail-reply-all", "mail-reply", "mail-send", "mall", "map", "menu", "money-box", "money-off", "money", "more-vert", "more",
					"movie-alt", "movie", "nature-people", "nature", "navigation", "open-in-browser", "open-in-new", "palette", "parking",
					"pin-account", "pin-assistant", "pin-drop", "pin-help", "pin-off", "pin", "pizza", "plaster", "power-setting", "power",
					"print", "puzzle-piece", "quote", "railway", "receipt", "refresh-alt", "refresh-sync-alert", "refresh-sync-off", "refresh-sync",
					"refresh", "roller", "ruler", "scissors", "screen-rotation-lock", "screen-rotation", "search-for", "search-in-file",
					"search-in-page", "search-replace", "search", "seat", "settings-square", "settings", "shield-check", "shield-security",
					"shopping-basket", "shopping-cart-plus", "shopping-cart", "sign-in", "sort-amount-asc", "sort-amount-desc", "sort-asc",
					"sort-desc", "spellcheck", "storage", "store-24", "store", "subway", "sun", "tab-unselected", "tab", "tag-close", "tag-more",
					"tag", "thumb-down", "thumb-up-down", "thumb-up", "ticket-star", "toll", "toys", "traffic", "translate", "triangle-down",
					"triangle-up", "truck", "turning-sign", "wallpaper", "washing-machine", "window-maximize", "window-minimize", "window-restore",
					"wrench", "zoom-in", "zoom-out"
				],
				notification: [
					"alert-circle-o", "alert-circle", "alert-octagon", "alert-polygon", "alert-triangle", "help-outline",
					"help", "info-outline", "info", "notifications-active", "notifications-add", "notifications-none",
					"notifications-off", "notifications-paused", "notifications"
				],
				person: [
					"account-add", "account-box-mail", "account-box-o", "account-box-phone", "account-box", "account-calendar",
					"account-circle", "account-o", "account", "accounts-add", "accounts-alt", "accounts-list-alt",
					"accounts-list", "accounts-outline", "accounts", "face", "female", "male-alt", "male-female", "male", "mood-bad",
					"mood", "run", "walk"
				],
				file: [
					"cloud-box", "cloud-circle", "cloud-done", "cloud-download", "cloud-off", "cloud-outline-alt", "cloud-outline",
					"cloud-upload", "cloud", "download", "file-plus", "file-text", "file", "folder-outline", "folder-person",
					"folder-star-alt", "folder-star", "folder", "gif", "upload"
				],
				editor: [
					"border-all", "border-bottom", "border-clear", "border-color", "border-horizontal", "border-inner",
					"border-left", "border-outer", "border-right", "border-style", "border-top", "border-vertical",
					"copy", "crop", "format-align-center", "format-align-justify", "format-align-left", "format-align-right",
					"format-bold", "format-clear-all", "format-clear", "format-color-fill", "format-color-reset", "format-color-text",
					"format-indent-decrease", "format-indent-increase", "format-italic", "format-line-spacing", "format-list-bulleted",
					"format-list-numbered", "format-ltr", "format-rtl", "format-size", "format-strikethrough-s", "format-strikethrough",
					"format-subject", "format-underlined", "format-valign-bottom", "format-valign-center", "format-valign-top", "redo",
					"select-all", "space-bar", "text-format", "transform", "undo", "wrap-text"
				],
				comment: [
					"comment-alert", "comment-alt-text", "comment-alt", "comment-edit", "comment-image", "comment-list", "comment-more",
					"comment-outline", "comment-text-alt", "comment-text", "comment-video", "comment", "comments"
				],
				forms: [
					"check-all", "check-circle-u", "check-circle", "check-square", "check", "circle-o", "circle", "dot-circle-alt", "dot-circle",
					"minus-circle-outline", "minus-circle", "minus-square", "minus", "plus-circle-o-duplicate", "plus-circle-o", "plus-circle",
					"plus-square", "plus", "square-o", "star-circle", "star-half", "star-outline", "star"
				],
				hardware: [
					"bluetooth-connected", "bluetooth-off", "bluetooth-search", "bluetooth-setting", "bluetooth", "camera-add", "camera-alt", "camera-bw",
					"camera-front", "camera-mic", "camera-party-mode", "camera-rear", "camera-roll", "camera-switch", "camera", "card-alert", 
					"card-off", "card-sd", "card-sim", "desktop-mac", "desktop-windows", "device-hub", "devices-off", "devices", "dock", "floppy", 
					"gamepad", "gps-dot", "gps-off", "gps", "headset-mic", "headset", "input-antenna", "input-composite", "input-hdmi", 
					"input-power", "input-svideo", "keyboard-hide", "keyboard", "laptop-chromebook", "laptop-mac", "laptop", "mic-off", 
					"mic-outline", "mic-setting", "mic", "mouse", "network-alert", "network-locked", "network-off", "network-outline", 
					"network-setting", "network", "phone-bluetooth", "phone-end", "phone-forwarded", "phone-in-talk", "phone-locked", 
					"phone-missed", "phone-msg", "phone-paused", "phone-ring", "phone-setting", "phone-sip", "phone", "portable-wifi-changes", 
					"portable-wifi-off", "portable-wifi", "radio", "reader", "remote-control-alt", "remote-control", "router", "scanner", 
					"smartphone-android", "smartphone-download", "smartphone-erase", "smartphone-info", "smartphone-iphone", 
					"smartphone-landscape-lock", "smartphone-landscape", "smartphone-lock", "smartphone-portrait-lock", "smartphone-ring", 
					"smartphone-setting", "smartphone-setup", "smartphone", "speaker", "tablet-android", "tablet-mac", "tablet", "tv-alt-play", 
					"tv-list", "tv-play", "tv", "usb", "videocam-off", "videocam-switch", "videocam", "watch", "wifi-alt-2", "wifi-alt", 
					"wifi-info", "wifi-lock", "wifi-off", "wifi-outline", "wifi"
				],
				directional: [
					"arrow-left-bottom", "arrow-left", "arrow-merge", "arrow-missed", "arrow-right-top", "arrow-right", "arrow-split", "arrows", 
					"caret-down-circle", "caret-down", "caret-left-circle", "caret-left", "caret-right-circle", "caret-right", "caret-up-circle", 
					"caret-up", "chevron-down", "chevron-left", "chevron-right", "chevron-up", "forward", "long-arrow-down", "long-arrow-left", 
					"long-arrow-return", "long-arrow-right", "long-arrow-tab", "long-arrow-up", "rotate-ccw", "rotate-cw", "rotate-left", 
					"rotate-right", "square-down", "square-right", "swap-alt", "swap-vertical-circle", "swap-vertical", "swap", "trending-down", 
					"trending-flat", "trending-up", "unfold-less", "unfold-more"
				],
				maps:[
					"directions-bike", "directions-boat", "directions-bus", "directions-car", "directions-railway", 
					"directions-run", "directions-subway", "directions-walk", "directions", "layers-off", "layers", 
					"local-activity", "local-airport", "local-atm", "local-bar", "local-cafe", "local-car-wash", 
					"local-convenience-store", "local-dining", "local-drink", "local-florist", "local-gas-station", 
					"local-grocery-store", "local-hospital", "local-hotel", "local-laundry-service", "local-library", 
					"local-mall", "local-movies", "local-offer", "local-parking", "local-pharmacy", "local-phone", 
					"local-pizza", "local-activity", "local-post-office", "local-printshop", "local-see", 
					"local-shipping", "local-store", "local-taxi", "local-wc", "map", "my-location", 
					"nature-people", "nature", "navigation", "pin-account", "pin-assistant", "pin-drop", 
					"pin-help", "pin-off", "pin", "traffic"
				],
				view: [
					"apps", "grid-off", "grid", "view-agenda", "view-array", "view-carousel", "view-column", "view-comfy", "view-compact", "view-dashboard", 
					"view-day", "view-headline", "view-list-alt", "view-list", "view-module", "view-quilt", "view-stream", "view-subtitles", 
					"view-toc", "view-web", "view-week", "widgets"
				],
				data_time: [
					"alarm-check", "alarm-off", "alarm-plus", "alarm-snooze", "alarm", "calendar-alt", "calendar-check", "calendar-close", "calendar-note", 
					"calendar", "time-countdown", "time-interval", "time-restore-setting", "time-restore", "time", "timer-off", "timer"
				],
				social: [
					"android-alt", "android", "apple", "behance", "codepen", "dribbble", "dropbox", "evernote", "facebook-box", "facebook", "github-box", 
					"github", "google-drive", "google-earth", "google-glass", "google-maps", "google-pages", "google-play", "google-plus-box", 
					"google-plus", "google", "instagram", "language-css3", "language-html5", "language-javascript", "language-python-alt", 
					"language-python", "lastfm", "linkedin-box", "paypal", "pinterest-box", "pocket", "polymer", "share", "stack-overflow", 
					"steam-square", "steam", "twitter-box", "twitter", "vk", "wikipedia", "windows"
				]
			}
		}
	}

	render() {
		const TooltipIcon = ({ id, tooltip, children }) => {
			return (
				<OverlayTrigger overlay={<Tooltip id={id}>{tooltip}</Tooltip>} placement="top">
					<p> {children} <span>{tooltip}</span> </p>
				</OverlayTrigger>
			)
		}

		return (
			<Fragment>
				<ModuleHeader text="Icons"/>
				<Row>
					<Col sm={12}>
						<div className="card icons-demo">
							<div className="card">
								<div className="card-header">
									<h2>Web Application
										<small>
											<a className="c-gray" target="_blank" href="http://zavoloklom.github.io/material-design-iconic-font/icons.html">material-design-iconic-font</a>
										</small>
									</h2>
								</div>
								<div className="card-body card-padding">
									<Row>
										{this.state.icon.web.map((icon, i) => (
											<Col sm={4} key={i}>
												<TooltipIcon id={`icon-${i}`} tooltip={`zmdi-${icon}`} >
													<i className={`zmdi zmdi-${icon.trim()} zmdi-hc-fw`}></i>
												</TooltipIcon>
											</Col>	
										))}
									</Row>
								</div>
							</div>
						</div>
						<div className="card icons-demo">
							<div className="card">
								<div className="card-header">
									<h2>Notification</h2>
								</div>
								<div className="card-body card-padding">
									<Row>
										{this.state.icon.notification.map((icon, i) => (
											<Col sm={4} key={i}>
												<TooltipIcon id={`icon-${i}`} tooltip={`zmdi-${icon}`} >
													<i className={`zmdi zmdi-${icon.trim()} zmdi-hc-fw`}></i>
												</TooltipIcon>
											</Col>
										))}
									</Row>
								</div>
							</div>
						</div>
						<div className="card icons-demo">
							<div className="card">
								<div className="card-header">
									<h2>Person</h2>
								</div>
								<div className="card-body card-padding">
									<Row>
										{this.state.icon.person.map((icon, i) => (
											<Col sm={4} key={i}>
												<TooltipIcon id={`icon-${i}`} tooltip={`zmdi-${icon}`} >
													<i className={`zmdi zmdi-${icon.trim()} zmdi-hc-fw`}></i>
												</TooltipIcon>
											</Col>
										))}
									</Row>
								</div>
							</div>
						</div>
						<div className="card icons-demo">
							<div className="card">
								<div className="card-header">
									<h2>Files</h2>
								</div>
								<div className="card-body card-padding">
									<Row>
										{this.state.icon.file.map((icon, i) => (
											<Col sm={4} key={i}>
												<TooltipIcon id={`icon-${i}`} tooltip={`zmdi-${icon}`} >
													<i className={`zmdi zmdi-${icon.trim()} zmdi-hc-fw`}></i>
												</TooltipIcon>
											</Col>
										))}
									</Row>
								</div>
							</div>
						</div>
						<div className="card icons-demo">
							<div className="card">
								<div className="card-header">
									<h2>Editor</h2>
								</div>
								<div className="card-body card-padding">
									<Row>
										{this.state.icon.editor.map((icon, i) => (
											<Col sm={4} key={i}>
												<TooltipIcon id={`icon-${i}`} tooltip={`zmdi-${icon}`} >
													<i className={`zmdi zmdi-${icon.trim()} zmdi-hc-fw`}></i>
												</TooltipIcon>
											</Col>
										))}
									</Row>
								</div>
							</div>
						</div>
						<div className="card icons-demo">
							<div className="card">
								<div className="card-header">
									<h2>Comments</h2>
								</div>
								<div className="card-body card-padding">
									<Row>
										{this.state.icon.comment.map((icon, i) => (
											<Col sm={4} key={i}>
												<TooltipIcon id={`icon-${i}`} tooltip={`zmdi-${icon}`} >
													<i className={`zmdi zmdi-${icon.trim()} zmdi-hc-fw`}></i>
												</TooltipIcon>
											</Col>
										))}
									</Row>
								</div>
							</div>
						</div>
						<div className="card icons-demo">
							<div className="card">
								<div className="card-header">
									<h2>Form</h2>
								</div>
								<div className="card-body card-padding">
									<Row>
										{this.state.icon.forms.map((icon, i) => (
											<Col sm={4} key={i}>
												<TooltipIcon id={`icon-${i}`} tooltip={`zmdi-${icon}`} >
													<i className={`zmdi zmdi-${icon.trim()} zmdi-hc-fw`}></i>
												</TooltipIcon>
											</Col>
										))}
									</Row>
								</div>
							</div>
						</div>
						<div className="card icons-demo">
							<div className="card">
								<div className="card-header">
									<h2>Hardware</h2>
								</div>
								<div className="card-body card-padding">
									<Row>
										{this.state.icon.hardware.map((icon, i) => (
											<Col sm={4} key={i}>
												<TooltipIcon id={`icon-${i}`} tooltip={`zmdi-${icon}`} >
													<i className={`zmdi zmdi-${icon.trim()} zmdi-hc-fw`}></i>
												</TooltipIcon>
											</Col>
										))}
									</Row>
								</div>
							</div>
						</div>
						<div className="card icons-demo">
							<div className="card">
								<div className="card-header">
									<h2>Directional</h2>
								</div>
								<div className="card-body card-padding">
									<Row>
										{this.state.icon.directional.map((icon, i) => (
											<Col sm={4} key={i}>
												<TooltipIcon id={`icon-${i}`} tooltip={`zmdi-${icon}`} >
													<i className={`zmdi zmdi-${icon.trim()} zmdi-hc-fw`}></i>
												</TooltipIcon>
											</Col>
										))}
									</Row>
								</div>
							</div>
						</div>
						<div className="card icons-demo">
							<div className="card">
								<div className="card-header">
									<h2>Map (aliases)</h2>
								</div>
								<div className="card-body card-padding">
									<Row>
										{this.state.icon.maps.map((icon, i) => (
											<Col sm={4} key={i}>
												<TooltipIcon id={`icon-${i}`} tooltip={`zmdi-${icon}`} >
													<i className={`zmdi zmdi-${icon.trim()} zmdi-hc-fw`}></i>
												</TooltipIcon>
											</Col>
										))}
									</Row>
								</div>
							</div>
						</div>
						<div className="card icons-demo">
							<div className="card">
								<div className="card-header">
									<h2>View</h2>
								</div>
								<div className="card-body card-padding">
									<Row>
										{this.state.icon.view.map((icon, i) => (
											<Col sm={4} key={i}>
												<TooltipIcon id={`icon-${i}`} tooltip={`zmdi-${icon}`} >
													<i className={`zmdi zmdi-${icon.trim()} zmdi-hc-fw`}></i>
												</TooltipIcon>
											</Col>
										))}
									</Row>
								</div>
							</div>
						</div>
						<div className="card icons-demo">
							<div className="card">
								<div className="card-header">
									<h2>Date / Time</h2>
								</div>
								<div className="card-body card-padding">
									<Row>
										{this.state.icon.data_time.map((icon, i) => (
											<Col sm={4} key={i}>
												<TooltipIcon id={`icon-${i}`} tooltip={`zmdi-${icon}`} >
													<i className={`zmdi zmdi-${icon.trim()} zmdi-hc-fw`}></i>
												</TooltipIcon>
											</Col>
										))}
									</Row>
								</div>
							</div>
						</div>
						<div className="card icons-demo">
							<div className="card">
								<div className="card-header">
									<h2>Social</h2>
								</div>
								<div className="card-body card-padding">
									<Row>
										{this.state.icon.social.map((icon, i) => (
											<Col sm={4} key={i}>
												<TooltipIcon id={`icon-${i}`} tooltip={`zmdi-${icon}`} >
													<i className={`zmdi zmdi-${icon.trim()} zmdi-hc-fw`}></i>
												</TooltipIcon>
											</Col>
										))}
									</Row>
								</div>
							</div>
						</div>
						
					</Col>
				</Row>
			</Fragment>
		)
	}
}