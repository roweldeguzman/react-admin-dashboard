var util = {
	renderToast: function (msg, config) {
		var className = 'notify_toast',
			toast = document.querySelector('.' + className);
		if (toast !== null) {
			console.error('className conflict')
		} 
		toast = toast
		if (toast) {
			document.body.removeChild(toast)
			toast = null
		}
		if (util.timeoutId) {
			clearTimeout(util.timeoutId)
		}

		toast = this.getDom('div', className, []);
		if (config && config.class) {
			toast.className += " " + config.class
		}
		toast.classList.add("notify_toast", "show")
		toast.innerHTML = msg;
		document.body.appendChild(toast);
		this.attachAnimation(toast)
		util.timeoutId = setTimeout(function () {
			document.body.removeChild(toast);
			if (config && config.fn && typeof config.fn === 'function') {
				config.fn()
			}
			toast = null			
		}, 3000)
		
	},
	renderAlert: function (msg) {
		this.renderConfirm({
			'title': msg,
			'left': 'Ok'
		})
	},
	renderConfirm: function (config) {
		var wrapperClassName = 'notify_confirm_wrapper'
		var wrapperConfirm = document.getElementsByClassName(wrapperClassName)
		if (wrapperConfirm.length > 1) {
			console.error('className conflict')
		}
		wrapperConfirm = wrapperConfirm[0]
		if (wrapperConfirm) {
			document.body.removeChild(wrapperConfirm)
			wrapperConfirm = null
		}
		wrapperConfirm = this.getDom('div', wrapperClassName)
		if (config.class) {
			wrapperConfirm.className += ' ' + config.class
		}
		var confirmDom = this.getDom('div', 'notify_confirm', [

		])
		// render modal
		if (config.modal) {
			var modal = this.getDom('div', 'notify_confirm_modal', [
				'position: fixed',
				'top: 0',
				'bottom: 0',
				'right: 0',
				'left: 0',
				'background-color: #000',
				'opacity: 0.7'
			])
			wrapperConfirm.appendChild(modal)
		}
		wrapperConfirm.appendChild(confirmDom)
		// render title
		var titleDom = this.getDom('div', 'notify_confirm_title', [])
		titleDom.innerText = config.title
		confirmDom.appendChild(titleDom)

		// render button
		let lb, rb;
		
		if (config.right) {
			lb = this.getDom('div', 'notify_confirm_rb', [])
			lb.innerText = config.left
			lb.dataset.index = 'fail'
			confirmDom.appendChild(lb)
			rb = this.getDom('div', 'notify_confirm_lb', [])
			rb.dataset.index = 'success'
			rb.innerText = config.right
			confirmDom.appendChild(rb)
		} else {
			lb = this.getDom('div', 'notify_confirm_bb', [
				'height: 44px',
				'line-height: 44px',
				'cursor: pointer'
			])
			lb.innerText = config.left
			lb.dataset.index = 1
			confirmDom.appendChild(lb)
		}
		var self = this;
		if (rb){
			rb.addEventListener('click', function (e) {

				if (config.fn) {
					config.fn(e.target.dataset.index)
				}
				if (e.target.dataset.index || config.modal) {
					confirmDom.classList.add("animated", "zoomOut")
					setTimeout(function () {
						document.body.removeChild(wrapperConfirm)
					}, 200);

				}
			})
		}
		if (lb){
			lb.addEventListener('click', function (e) {
				if (e.target.dataset.index || config.modal) {
					confirmDom.classList.add("animated", "zoomOut")
					setTimeout(function () {
						document.body.removeChild(wrapperConfirm)
					}, 200);
				}
			})
		}
		// animation
		document.body.appendChild(wrapperConfirm)
		this.attachAnimation(confirmDom)
	},
	attachAnimation: function (confirmDom) {
		var scale = 5;
		var duration = '300ms';
		var timeFunction = 'ease';
		confirmDom.style[this.detectTransition[0]] = this.detectTransform
		confirmDom.style[this.detectTransform] = 'scale(' + 1 / scale + ')'
		confirmDom.style[this.detectTransition[0] + 'TimingFunction'] = timeFunction
		confirmDom.style[this.detectTransition[0] + 'Duration'] = duration
		confirmDom.getBoundingClientRect()
		confirmDom.style.visibility = 'visible'
		confirmDom.style[this.detectTransform] = 'scale(1) translate(0, 0)'
	},
	getDom: function (tagName, className, styles) {
		var dom = document.createElement(tagName)
		if (styles && styles.length > 0) {
			this.addCssRule('.' + className + '[notify]', styles)
		}
		dom.className = className
		dom.setAttribute('notify', '')
		return dom
	},
	detectTransition: (function () {
		var t
		var el = document.createElement('surface')
		var transitions = {
			'transition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'MozTransition': 'transitionend',
			'WebkitTransition': 'webkitTransitionEnd'
		}
		for (t in transitions) {
			if (el.style[t] !== undefined) {
				return [t, transitions[t]]
			}
		}
	})(),
	detectTransform: (function () {
		var t
		var el = document.createElement('surface')
		var transforms = [
			'transform',
			'OTransform',
			'MozTransform',
			'WebkitTransform'
		]
		for (t in transforms) {
			if (el.style[transforms[t]] !== undefined) {
				return transforms[t]
			}
		}
	})(),
	addCssRule: (function () {
		function createStyleSheet() {
			var head = document.head || document.getElementsByTagName('head')[0];
			var style = document.createElement('style');
			style.type = 'text/css';
			if (!head.contains(sheet)) {
				var before = head.querySelector('style')
				head.insertBefore(style, before)
			}
			return style;
		}
		var sheet = createStyleSheet();
		return function (selector, rules, index) {
			index = index || 0;
			rules = selector + " {" + rules.join(';') + "}"
			if (document.all) {
				if (sheet.styleSheet.cssText.indexOf(rules) === -1) {
					sheet.styleSheet.cssText += rules
				}
			} else {
				if (sheet.innerHTML.indexOf(rules) === -1) {
					sheet.innerHTML += rules
				}
			}
		}
	})(),
	timeoutId: ''
}
var _growl = {
	init: function (settings, plugin){
		var base = {
			settings: settings,
			element: settings.element,
			template: settings.template
		};

		if (typeof settings.offset == 'number') {
			settings.offset = {
				x: settings.offset,
				y: settings.offset
			};
		}
		var $template = _growl.buildGrowl(base);

		plugin.$template = $template;
		plugin.settings = settings;
		
		_growl.addContent($template, base.settings);
		_growl.placement($template, base.settings);
		_growl.bindControls($template, base.settings, plugin);
	},
	growlContainer: function(){
		var container = document.createElement("div");
			container.setAttribute("data-growl", "container");
			container.setAttribute("role", "alert");
			container.classList.add("alert");
		return container;
	},
	buildGrowl: function (base) {
		var $template = _growl.growlContainer();
		$template.innerHTML = base.settings.template;
		$template.classList.add('alert-' + base.settings.type);
		$template.setAttribute('data-growl-position', base.settings.placement.from + '-' + base.settings.placement.align);

		$template.querySelector('[data-growl="dismiss"]').style.display = "none";
		$template.classList.remove('alert-dismissable');
		
		if (base.settings.allow_dismiss) {
			$template.classList.add('alert-dismissable');
			$template.querySelector('[data-growl="dismiss"]').style.display = 'block';
		}
		return $template;
	},
	addContent: function ($template, settings) {
		var z_index = ((settings.z_index - 1) >= 1 ? (settings.z_index - 1) : 1);
		$template.querySelector('[data-growl="dismiss"]').style.zIndex = z_index;
		if (settings.icon) {
			if (settings.icon_type.toLowerCase() == 'class') {
				settings.icon.split(" ").forEach(function(e, i){
					$template.querySelector('[data-growl="icon"]').classList.add(e)
				})				
			} else {
				if ($template.querySelector('[data-growl="icon"]').tagName === 'IMG') {
					$template.querySelector('[data-growl="icon"]').setAttribute("src", settings.icon)
				} else {
					var mkImg = util.getDom('img', "", [])
					mkImg.setAttribute("src", settings.icon)
					$template.querySelector('[data-growl="icon"]').appendChild(mkImg)
				}
			}
		}

		if (settings.title) {
			$template.querySelector('[data-growl="title"]').innerHTML = settings.title
		}

		if (settings.message) {
			$template.querySelector('[data-growl="message"]').innerHTML = settings.message;
		}

		if (settings.url) {
			var urlContainer = $template.querySelector('[data-growl="url"]');
			if (urlContainer !== null) {				
				var styles = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: ' + ((settings.z_index - 2) >= 1 ? (settings.z_index - 2) : 1);
				urlContainer.setAttribute("style", styles);
				urlContainer.setAttribute("href", settings.url);
				urlContainer.setAttribute("target", settings.url_target);
				
			}
		}
	},
	placement: function ($template, settings){
		var offsetAmt = settings.offset.y,
			gCSS = 'position: ' + (settings.element === 'body' ? 'fixed' : 'absolute') + ';margin: 0; z-index: ' + settings.z_index + ';display: inline-block;',
			hasAnimation = false;
		var dataPos = document.querySelectorAll('[data-growl-position="' + settings.placement.from + '-' + settings.placement.align + '"]')
		dataPos.forEach(function(e, i) {
			return offsetAmt = Math.max(offsetAmt, parseInt(e.style[settings.placement.from]) + e.offsetHeight + settings.spacing)
		});
		
		gCSS += settings.placement.from + ":" + offsetAmt + "px;";
		
		$template.setAttribute("style", gCSS)

		if (settings.onShow) {
			settings.onShow($template);
		}
		
		document.body.appendChild($template)
		
		switch (settings.placement.align) {
			case 'center':
				let outer = $template.offsetWidth / 2;
				$template.style.left = '50%';
				$template.style.marginLeft = -outer + 'px';
				break;
			case 'left':
				$template.style.left = settings.offset.x + 'px'; 
				break;
			case 'right':
				$template.style.right = settings.offset.x + 'px' 
				break;
		}
		$template.classList.add('growl-animated');
		["webkitAnimationStart", "oanimationstart", "MSAnimationStart", "animationstart"].forEach(function(e, i){
			_growl.one($template, e, function(){
				hasAnimation = true;
			});
		});
		["webkitAnimationEnd", "oanimationend", "MSAnimationEnd", "animationend"].forEach(function(e, i) {
			_growl.one($template, e, function (event) {
				if (settings.onShown) {
					settings.onShown(event);
				}
			});
		});
		setTimeout(function () {
			if (!hasAnimation) {
				if (settings.onShown) {
					settings.onShown(event);
				}
			}
		}, 600);
	},
	bindControls: function ($template, settings, plugin){
		settings.animate.enter.split(" ").forEach(function(e, i){
			$template.classList.add(e)
		});
		$template.querySelector('[data-growl="dismiss"]').addEventListener("click", function(){
			plugin.close();
		}, false)

		$template.addEventListener("mouseover", function(e){
			$template.classList.add("hovering");
		}, false)
		$template.addEventListener("mouseout", function (e) {
			$template.classList.remove("hovering");
		}, false)
		
		if (settings.delay >= 1) {
			$template.setAttribute("data-delay", settings.delay);
			var timer = setInterval(function () {
				var delay = parseInt($template.getAttribute("data-delay")) - settings.timer;
				if ((!$template.classList.contains('hovering') && settings.mouse_over == 'pause') || settings.mouse_over != 'pause') {
					$template.setAttribute("data-delay", delay);
				}

				if (delay <= 0) {
					clearInterval(timer);
					plugin.close();
				}
			}, settings.timer);
		}
	},
	one: function (dom, event, callback){
		function handler(e) {
			callback.call(this, e);
			this.removeEventListener(event, handler);
		}
		dom.addEventListener(event, handler);
	},
	getNextAll: function(dom){
		var list = [];

		while(dom.nextSibling !== null){
			list.push(dom.nextSibling);
			dom = dom.nextSibling;
		}
		
		return list;
	}
}
Plugin = function (_config){
	_growl.init(_config, this);
}
Plugin.prototype = {
	update: function (command, update) {
		switch (command) {
			case 'icon':
				var $self = this;
				if ($self.settings.icon_type.toLowerCase() == 'class') {
					var target = $self.$template.querySelector('[data-growl="icon"]');
					if (target !== null){
						target.className = update;
					}
				} else {
					if (!$self.$template.querySelector('[data-growl="icon"]').tagName == "IMG") {
						var changeSrc = $self.$template.querySelectorA('[data-growl="icon"]');
						if (changeSrc !== null) {
							changeSrc.querySelector("img").setAttribute("src", update);
						}
					}
				}
				break;
			case 'url':
				var dataPos = this.$template.querySelector('[data-growl="url"]');
				if (dataPos !== null){
					dataPos.setAttribute("href", update);
				}
				break;
			case 'type':
				this.$template.classList.remove("alert-" + this.settings.type);
				this.$template.classList.add("alert-"+update)
				break;
			default:
				var dataPos = this.$template.querySelector('[data-growl="' + command + '"]');
				if (dataPos !== null) {
					dataPos.innerHTML = update;
				}
		}
		if (this.settings.placement.align == "center"){
			let outer = this.$template.offsetWidth / 2;
			this.$template.style.left = '50%';
			this.$template.style.marginLeft = -outer + 'px';
		}
		return this;
	},
	close: function () {
		var $template = this.$template,
			settings = this.settings,
			posX = $template.style[settings.placement.from],
			hasAnimation = false;
		if (settings.onHide) {
			settings.onHide(event);
		}
		settings.animate.exit.split(" ").forEach(function(e, i){
			$template.classList.add(e)
		});

		["webkitAnimationStart", "oanimationstart", "MSAnimationStart", "animationstart"].forEach(function (e, i) {
			_growl.one($template, e, function () {
				hasAnimation = true;
			});
		});
		["webkitAnimationEnd", "oanimationend", "MSAnimationEnd", "animationend"].forEach(function (e, i) {
			_growl.one($template, e, function (event) {
				$template.remove();
				reAlign()
				if (settings.onHidden) {
					settings.onHidden(event);
				}
			});
		});
		setTimeout(function () {
			if (!hasAnimation) {
				$template.remove();
				reAlign()
				if (settings.onHidden) {
					settings.onHidden(event);
				}
			}
		}, 100);
		
		function reAlign(){
			var offsetAmt = settings.offset.y;
			var dataPos = document.querySelectorAll('[data-growl-position="' + settings.placement.from + '-' + settings.placement.align + '"]')
			
			dataPos.forEach(function(e, i) {
				e.style[settings.placement.from] = offsetAmt +"px";
				offsetAmt = Math.max(offsetAmt, parseInt(e.style[settings.placement.from]) + e.offsetHeight + settings.spacing)
			});
		}
		return this;
	}
}
var _self = {
	alert: function (msg) {
		util.renderAlert(msg)
	},
	toast: function (msg, config) {
		util.renderToast(msg, config)
	},
	confirm: function (config) {
		if (Object.prototype.toString.call(config) !== '[object Object]') {
			throw new SyntaxError('argument config error')
		}
		var _config = {
			title: 'Title',
			left: 'Cancel',
			right: 'Okey',
			modal: false,
			fn: function () { }
		}
		for (var k in _config) {
			if (config[k]) {
				_config[k] = config[k]
			}
		}
		util.renderConfirm(_config)
	},
	growl: function(content, config){
		if (Object.prototype.toString.call(config) !== '[object Object]') {
			throw new SyntaxError('argument config error')
		}
		var _config = {
			message: content.message,
			icon: content.icon,
			title: content.title,
			url: content.url,


			element: 'body',
			type: "info",
			allow_dismiss: true,
			placement: {
				from: "top",
				align: "right"
			},
			offset: 20,
			spacing: 10,
			z_index: 1031,
			delay: 5000,
			timer: 1000,
			url_target: '_blank',
			mouse_over: false,
			animate: {
				enter: 'animated fadeInDown',
				exit: 'animated fadeOutUp'
			},
			onShow: null,
			onShown: null,
			onHide: null,
			onHidden: null,
			icon_type: 'class',
			template: '<button type="button" aria-hidden="true" class="close" data-growl="dismiss">&times;</button><span data-growl="icon"></span><span data-growl="title"></span><span data-growl="message"></span><a href="#" data-growl="url"></a>'
		}
		for (var k in _config) {
			if (config[k] !== undefined) {
				_config[k] = config[k]
			} else {
				_config[k] = _config[k]
			}
		}
		var growler = new Plugin(_config);
		return growler;	
	},
	growlClose: function(selector){
		if (selector === undefined || selector == "all") {
			var openGrowl = document.querySelectorAll(".alert-dismissable");
			if (openGrowl.length > 0) {
				openGrowl.forEach(function (e, i) {
					e.querySelector('[data-growl="dismiss"]').click();
				});
			}
		} else if (selector === 'success' || selector === 'info' || selector === 'warning' || selector === 'danger' || selector === 'inverse') {
			var openGrowl = document.querySelectorAll(".alert-dismissable.alert-" + selector);
			if (openGrowl.length > 0) {
				openGrowl.forEach(function (e, i) {
					e.querySelector('[data-growl="dismiss"]').click();
				});
			}
		}
	}
}
module.exports.notify = _self