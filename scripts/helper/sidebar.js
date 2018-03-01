import $ from 'jquery'
var _self = {
	expandNav: function () {
		$("aside, footer, .overlay").toggleClass("active");
		if (!$("aside").hasClass("active")) {
			_self.collapseSpandedNav(true);
		} else {
			_self.collapseSpandedNav(false);
		}
		$(".bottom-toggler").toggleClass("active");
		$("main").toggleClass("aside-active");
	},
	expandNavHead: function() {
		$("aside, .overlay").toggleClass("active");
		if ($(".bottom-toggler").hasClass("active")) {
			$(".bottom-toggler").removeClass("active");
		}
		if ($("aside").hasClass("active")) {
			_self.collapseSpandedNav(false);
		} else {
			_self.collapseSpandedNav(true);
		}
	},
	collapseSpandedNav: function (isClose) {
		$(".hamburger--spring").toggleClass("is-active");
		if (isClose) {
			$(".sub-menu.toggled").each(function (i, e) {
				$(e).find('ul').find("a.sub").css("visibility", "hidden");
				$(e).toggleClass("toggled");
				$(e).addClass("toggled-hidden");
				$(e).find('ul:first').slideToggle('fast');
			});
		} else {
			$(".toggled-hidden").each(function (i, e) {
				$(e).removeClass("toggled-hidden");
				$(e).toggleClass("toggled");
				$(e).find('ul:first').slideToggle('fast');
				$(e).find('ul:first').find("a.sub").css("visibility", "visible");
			})
		}
		
	}
}
module.exports.sidebarHelper = _self