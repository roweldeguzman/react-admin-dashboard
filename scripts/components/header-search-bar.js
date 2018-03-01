import React, { Component, Fragment } from 'react'

import $ from 'jquery'

export default class HeaderSearch extends Component {
	constructor(props) {
		super(props)
		this.size = this.props.size;
		this.close = this.props.close;
	}
	componentDidMount() {
		$(".main-search-menu-input").on("click", function () {
			$(this).parents(".seach-container").find(".main-search-menu-dropdown").css("display", "block");
			$(".seach-container").css({
				"border-bottom-left-radius": 0,
				"border-bottom-right-radius": 0,
			});
		});
		$(".main-search-menu-input").on("blur", function (event) {
			var self = $(this);
			if (!event.relatedTarget || !hasClasses(event.relatedTarget, ["prevent-main-search-hide", "search-footer"])) {
				setTimeout(function () {
					self.parents(".seach-container").find('.main-search-menu-dropdown').css('display', 'none');
					$(".seach-container").removeAttr("style");
				}, 300);
			}
		});
		$(".main-search-menu-input").on("keydown", function (event) {
			var self = $(this);
			if (event.keyCode == 38 || event.keyCode == 40) {
				var li = self.parents(".seach-container").find('.search-scroll').find('ul > li');
				var liActive = self.parents(".seach-container").find('.search-scroll').find('ul > li.active');
				if (li.length > 0) {
					if (liActive.length == 0) {
						li[0].classList.add('active');
						$('.search-scroll').scrollTop(0);
					}
					else {
						$('.search-scroll').scrollTop($('.search-scroll li.active').index() * $('.search-scroll li.active').outerHeight() - 100);
						liActive[0].classList.remove('active');
						//Arrow Down
						if (event.keyCode == 40) {
							var nextElemToActive;
							if (liActive.next().length == 0) {
								$('.search-scroll').scrollTop(0);
								nextElemToActive = li[0];
							}
							else { nextElemToActive = liActive.next()[0]; }

							nextElemToActive.classList.add("active");
							//return false;		       
						}
						//Arrow Up
						else if (event.keyCode == 38) {
							var nextElemToActive;
							if (liActive.prev().length == 0) {
								$('.search-scroll').scrollTop($('.search-scroll')[0].scrollHeight);
								nextElemToActive = li[li.length - 1];
							}
							else { nextElemToActive = liActive.prev()[0]; }

							nextElemToActive.classList.add("active");
							//return false;
						}
					}
				}
			}
		});
		$(".prevent-main-search-hide, .search-footer").on("click", function () {
			$(".main-search-menu-dropdown").css("display", "block");
			$(".main-search-menu-input").focus();
			$(".seach-container").css({
				"border-bottom-left-radius": 0,
				"border-bottom-right-radius": 0,
			});
		});
		function hasClasses(ele, classes) {
			for (let i = 0; i < classes.length; i++) {
				if (ele.classList.contains(classes[i])) {
					return true;
				}
			}
			return false;
		}
	}
	render() {
		return (
			<div className="search-div">
				<div className="seach-container">
					<IsMobile mobile={this.props.size == "mobile" ? true : false} close={this.props.close} />
					<input type="search" placeholder="Search..." className="main-search-menu-input" />
					<button className="btn prevent-main-search-hide" tabIndex="0">
						<i className="zmdi zmdi-search prevent-main-search-hide" tabIndex="0"></i>
					</button>
					<div className="main-search-menu-dropdown">
						<div className="search-scroll" >
							<ul className="main-search-menu-result">
								<li><a className="no-hover search-result">Content 1</a></li>
								<li><a className="no-hover search-result">Content 2</a></li>
								<li><a className="no-hover search-result">Content 3</a></li>
								<li><a className="no-hover search-result">Content 4</a></li>
								<li><a className="no-hover search-result">Content 5</a></li>
								<li><a className="no-hover search-result">Content 6</a></li>
								<li><a className="no-hover search-result">Content 7</a></li>
								<li><a className="no-hover search-result">Content 8</a></li>
								<li><a className="no-hover search-result">Content 9</a></li>
								<li><a className="no-hover search-result">Content 10</a></li>
								<li><a className="no-hover search-result">Content 11</a></li>
								<li><a className="no-hover search-result">Content 12</a></li>

								<li><a className="no-hover search-result">Content 13</a></li>
								<li><a className="no-hover search-result">Content 14</a></li>
								<li><a className="no-hover search-result">Content 15</a></li>
								<li><a className="no-hover search-result">Content 16</a></li>
								<li><a className="no-hover search-result">Content 17</a></li>
								<li><a className="no-hover search-result">Content 18</a></li>
								<li><a className="no-hover search-result">Content 19</a></li>
								<li><a className="no-hover search-result">Content 20</a></li>
								<li><a className="no-hover search-result">Content 21</a></li>
								<li><a className="no-hover search-result">Content 22</a></li>
								<li><a className="no-hover search-result">Content 23</a></li>
								<li><a className="no-hover search-result">Content 24</a></li>
							</ul>
						</div>
						<div className="search-footer" tabIndex="0">More result</div>
					</div>
				</div>
			</div>
		)
	}
}
class IsMobile extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		if (this.props.mobile) {
			return (<Fragment>{this.props.close}</Fragment>)
		} else {
			return null
		}
	}
}