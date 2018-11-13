'use strict';

/**

 * http://pgsuae.com

 */
{
	// Helper vars and functions.
	var extend = function extend(a, b) {
		for (var key in b) {
			if (b.hasOwnProperty(key)) {
				a[key] = b[key];
			}
		}
		return a;
	};

	// from http://www.quirksmode.org/js/events_properties.html#position
	var getMousePos = function getMousePos(ev) {
		var posx = 0;
		var posy = 0;
		if (!ev) ev = window.event;
		if (ev.pageX || ev.pageY) {
			posx = ev.pageX;
			posy = ev.pageY;
		} else if (ev.clientX || ev.clientY) {
			posx = ev.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			posy = ev.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}
		return { x: posx, y: posy };
	};

	var TiltObj = function TiltObj(el, options) {
		this.el = el;
		this.options = extend({}, this.options);
		extend(this.options, options);
		this.DOM = {};
		this.DOM.img = this.el.querySelector('.content__img');
		this.DOM.title = this.el.querySelector('.content__title');
		this._initEvents();
	};

	TiltObj.prototype.options = {
		movement: {
			img: { translation: { x: -10, y: -10 } },
			title: { translation: { x: 25, y: 25 } }
		}
	};

	TiltObj.prototype._initEvents = function () {
		var _this = this;

		this.mouseenterFn = function (ev) {
			anime.remove(_this.DOM.img);
			anime.remove(_this.DOM.title);
		};

		this.mousemoveFn = function (ev) {
			requestAnimationFrame(function () {
				return _this._layout(ev);
			});
		};

		this.mouseleaveFn = function (ev) {
			requestAnimationFrame(function () {
				anime({
					targets: [_this.DOM.img, _this.DOM.title],
					duration: 1500,
					easing: 'easeOutElastic',
					elasticity: 400,
					translateX: 0,
					translateY: 0
				});
			});
		};

		this.el.addEventListener('mousemove', this.mousemoveFn);
		this.el.addEventListener('mouseleave', this.mouseleaveFn);
		this.el.addEventListener('mouseenter', this.mouseenterFn);
	};

	TiltObj.prototype._layout = function (ev) {
		// Mouse position relative to the document.
		var mousepos = getMousePos(ev);
		// Document scrolls.
		var docScrolls = { left: document.body.scrollLeft + document.documentElement.scrollLeft, top: document.body.scrollTop + document.documentElement.scrollTop };
		var bounds = this.el.getBoundingClientRect();
		// Mouse position relative to the main element (this.DOM.el).
		var relmousepos = { x: mousepos.x - bounds.left - docScrolls.left, y: mousepos.y - bounds.top - docScrolls.top };

		// Movement settings for the animatable elements.
		var t = {
			img: this.options.movement.img.translation,
			title: this.options.movement.title.translation
		};

		var transforms = {
			img: {
				x: (-1 * t.img.x - t.img.x) / bounds.width * relmousepos.x + t.img.x,
				y: (-1 * t.img.y - t.img.y) / bounds.height * relmousepos.y + t.img.y
			},
			title: {
				x: (-1 * t.title.x - t.title.x) / bounds.width * relmousepos.x + t.title.x,
				y: (-1 * t.title.y - t.title.y) / bounds.height * relmousepos.y + t.title.y
			}
		};
		this.DOM.img.style.WebkitTransform = this.DOM.img.style.transform = 'translateX(' + transforms.img.x + 'px) translateY(' + transforms.img.y + 'px)';
		this.DOM.title.style.WebkitTransform = this.DOM.title.style.transform = 'translateX(' + transforms.title.x + 'px) translateY(' + transforms.title.y + 'px)';
	};

	var DOM = {};
	DOM.svg = document.querySelector('.morph');
	DOM.shapeEl = DOM.svg.querySelector('path');
	DOM.contentElems = Array.from(document.querySelectorAll('.content-wrap'));
	DOM.contentLinks = Array.from(document.querySelectorAll('.content__link'));
	DOM.footer = document.querySelector('.content--related');
	var contentElemsTotal = DOM.contentElems.length;
	var shapes = [{
		path: 'M125,303c-49.2,106.9-108,321,5,391c137.2,85,326.3,14.3,511-26.3c286.8-63.2,319,23,449,90.3c164.4,85.1,317-156,260-396c-39.6-166.9-204-335-452-241c-156.8,59.4-277.5-60.5-431-66C355,51,217,103,125,303z',
		pathAlt: 'M102.1,290.1c-49.2,106.9-84.5,320,28.5,390c137.2,85,325.7,28.3,510.4-12.4c286.8-63.2,319,23,449,90.3c164.4,85.1,338.1-167.9,281.1-407.9C1331.4,183.2,1146,27,898,121c-156.8,59.4-312.4-75.9-465.9-81.4C320.1,35.6,194.1,90.1,102.1,290.1z',
		scaleX: 1.4,
		scaleY: 1.2,
		rotate: 48,
		tx: 710,
		ty: -25,
		fill: {
			color: '#38586c',
			duration: 500,
			easing: 'linear'
		},
		animation: {
			path: {
				duration: 3000,
				easing: 'easeOutElastic',
				elasticity: 600
			},
			svg: {
				duration: 2000,
				easing: 'easeOutElastic'
			}
		}
	}, {
		path: 'M96.1,273.1c-43.7,109.3-45.2,325.8,55.5,387c110.2,67,256.8,4.4,405-24c153.7-29.4,363.6,111.5,517.5,101.7c152-9.7,337.7-231.4,282-464.7c-33.9-141.9-120-246-510-183c-156,61.5-286.6-84.2-531-22.5C213.2,93.3,145.5,149.3,96.1,273.1z',
		pathAlt: 'M82.6,240.1c-43.7,109.3-31.7,358.8,69,420c110.2,67,274.8,29.9,423,1.5c153.7-29.4,405.6,59.3,559.5,49.5c152-9.7,297.2-203.2,241.5-436.5c-33.9-141.9-138-177-528-114c-240,21-312.1-167.9-556.5-106.2C189.2,80.1,132,116.3,82.6,240.1z',
		scaleX: 1.2,
		scaleY: 1,
		rotate: 100,
		tx: 600,
		ty: -100,
		fill: {
			color: '#a6bdcc',
			duration: 500,
			easing: 'linear'
		},
		animation: {
			path: {
				duration: 2000,
				easing: 'easeOutElastic',
				elasticity: 600
			},
			svg: {
				duration: 2000,
				easing: 'easeOutElastic'
			}
		}
	}, {
		path: 'M82.6,240.1c-43.7,109.3-31.7,358.8,69,420c110.2,67,255.3-7.6,403.5-36c153.7-29.4,464.1,97.3,618,87.5c152-9.7,249.7-232.6,194.1-465.8c-33.9-141.9-129.6-148.2-519.5-85.2c-240,21-285.1-193.7-529.5-132C216.2,54.3,132,116.3,82.6,240.1z',
		pathAlt: 'M96.1,237.1c-43.7,109.3-58.7,315.3,42,376.5c110.2,67,313.7,28.4,462,0c153.7-29.4,419.1,107.8,573,98c152-9.7,249.7-232.6,194.1-465.8c-66.6-152.7-129.6-148.2-519.5-85.2c-240,21-306.1-182.1-550.5-120.3C195.2,66,145.5,113.3,96.1,237.1z',
		scaleX: 1.5,
		scaleY: 1.1,
		rotate: 10,
		tx: 500,
		ty: 100,
		fill: {
			color: '#afc6d5',
			duration: 500,
			easing: 'linear'
		},
		animation: {
			path: {
				duration: 3000,
				easing: 'easeOutElastic',
				elasticity: 600
			},
			svg: {
				duration: 2500,
				easing: 'easeOutElastic'
			}
		}
	}, {
		path: 'M81.1,214.6c-43.7,109.3-43.7,337.8,57,399c110.2,67,325.7,20.9,474-7.5c153.7-29.4,411.6,135.8,565.5,126c152-9.7,245.2-253,189.6-486.3c-66.6-152.7-116.1-211.2-506-148.2c-240,21-334.6-135.2-579-73.5C180.2,49.8,130.5,90.8,81.1,214.6z',
		pathAlt: 'M61.6,208.6c-43.7,109.3-24.2,343.8,76.5,405c110.2,67,298.8,44.9,447,16.5c153.7-29.4,456.6,120.8,610.5,111c152-9.7,227.2-262,171.6-495.3c-66.6-152.7-113.1-208.2-503-145.2c-240,21-337.6-138.2-582-76.5C180.2,49.8,111,84.8,61.6,208.6z',
		scaleX: 1,
		scaleY: 1,
		rotate: -89,
		tx: 780,
		ty: -10,
		fill: {
			color: '#a6c9e0',
			duration: 500,
			easing: 'linear'
		},
		animation: {
			path: {
				duration: 3000,
				easing: 'easeOutQuad',
				elasticity: 600
			},
			svg: {
				duration: 3000,
				easing: 'easeOutElastic'
			}
		}
	}, {
		path: 'M 247.6,239.6 C 174.3,404.5 245.5,601.9 358.5,624.3 471.5,646.6 569.1,611.6 659.7,655.7 750.4,699.7 1068,687.6 1153,534.4 1237,381.1 1114,328.4 1127,227.4 1140,126.3 1016,51.08 924.6,116.8 833.8,182.5 928.4,393.8 706.8,283.5 485.2,173.1 320.8,74.68 247.6,239.6 Z',
		pathAlt: 'M 247.6,239.6 C 174.3,404.5 271.3,550.3 358.5,624.3 445.7,698.3 569.1,611.6 659.7,655.7 750.4,699.7 1145,699 1153,534.4 1161,369.8 1114,328.4 1127,227.4 1140,126.3 1016,51.08 924.6,116.8 833.8,182.5 894.5,431 706.8,283.5 519.1,136 320.8,74.68 247.6,239.6 Z',
		scaleX: 1.8,
		scaleY: 1.5,
		rotate: 0,
		tx: 250,
		ty: 50,
		fill: {
			color: '#466e87',
			duration: 500,
			easing: 'linear'
		},
		animation: {
			path: {
				duration: 3000,
				easing: 'easeOutElastic',
				elasticity: 600
			},
			svg: {
				duration: 2000,
				easing: 'easeOutExpo'
			}
		}
	},
	// footer shape:
	{
		path: 'M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z',
		pathAlt: 'M 262.9,252.2 C 210.1,338.2 273.3,400.5 298.5,520 323.7,639.6 511.2,537.2 620.3,555.7 750.6,577.8 872.2,707.4 987.3,686.5 1102,665.6 1218,547.8 1173,429.2 1128,310.6 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z',
		scaleX: 2.5,
		scaleY: 2,
		rotate: 0,
		tx: 0,
		ty: -50,
		fill: {
			color: '#34576e',
			duration: 500,
			easing: 'linear'
		},
		animation: {
			path: {
				duration: 3000,
				easing: 'easeOutQuad',
				elasticity: 600
			},
			svg: {
				duration: 3000,
				easing: 'easeOutElastic'
			}
		}
	}];
	var step = void 0;

	var initShapeLoop = function initShapeLoop(pos) {
		pos = pos || 0;
		anime.remove(DOM.shapeEl);
		anime({
			targets: DOM.shapeEl,
			easing: 'linear',
			d: [{ value: shapes[pos].pathAlt, duration: 3500 }, { value: shapes[pos].path, duration: 3500 }],
			loop: true,
			fill: {
				value: shapes[pos].fill.color,
				duration: shapes[pos].fill.duration,
				easing: shapes[pos].fill.easing
			},
			direction: 'alternate'
		});
	};

	var initShapeEl = function initShapeEl() {
		anime.remove(DOM.svg);
		anime({
			targets: DOM.svg,
			duration: 1,
			easing: 'linear',
			scaleX: shapes[0].scaleX,
			scaleY: shapes[0].scaleY,
			translateX: shapes[0].tx + 'px',
			translateY: shapes[0].ty + 'px',
			rotate: shapes[0].rotate + 'deg'
		});

		initShapeLoop();
	};

	var createScrollWatchers = function createScrollWatchers() {
		DOM.contentElems.forEach(function (el, pos) {
			var scrollElemToWatch = pos ? DOM.contentElems[pos] : DOM.footer;
			pos = pos ? pos : contentElemsTotal;
			var watcher = scrollMonitor.create(scrollElemToWatch, -300);

			watcher.enterViewport(function () {
				step = pos;
				anime.remove(DOM.shapeEl);
				anime({
					targets: DOM.shapeEl,
					duration: shapes[pos].animation.path.duration,
					easing: shapes[pos].animation.path.easing,
					elasticity: shapes[pos].animation.path.elasticity || 0,
					d: shapes[pos].path,
					fill: {
						value: shapes[pos].fill.color,
						duration: shapes[pos].fill.duration,
						easing: shapes[pos].fill.easing
					},
					complete: function complete() {
						initShapeLoop(pos);
					}
				});

				anime.remove(DOM.svg);
				anime({
					targets: DOM.svg,
					duration: shapes[pos].animation.svg.duration,
					easing: shapes[pos].animation.svg.easing,
					elasticity: shapes[pos].animation.svg.elasticity || 0,
					scaleX: shapes[pos].scaleX,
					scaleY: shapes[pos].scaleY,
					translateX: shapes[pos].tx + 'px',
					translateY: shapes[pos].ty + 'px',
					rotate: shapes[pos].rotate + 'deg'
				});
			});

			watcher.exitViewport(function () {
				var idx = !watcher.isAboveViewport ? pos - 1 : pos + 1;

				if (idx <= contentElemsTotal && step !== idx) {
					step = idx;
					anime.remove(DOM.shapeEl);
					anime({
						targets: DOM.shapeEl,
						duration: shapes[idx].animation.path.duration,
						easing: shapes[idx].animation.path.easing,
						elasticity: shapes[idx].animation.path.elasticity || 0,
						d: shapes[idx].path,
						fill: {
							value: shapes[idx].fill.color,
							duration: shapes[idx].fill.duration,
							easing: shapes[idx].fill.easing
						},
						complete: function complete() {
							initShapeLoop(idx);
						}
					});

					anime.remove(DOM.svg);
					anime({
						targets: DOM.svg,
						duration: shapes[idx].animation.svg.duration,
						easing: shapes[idx].animation.svg.easing,
						elasticity: shapes[idx].animation.svg.elasticity || 0,
						scaleX: shapes[idx].scaleX,
						scaleY: shapes[idx].scaleY,
						translateX: shapes[idx].tx + 'px',
						translateY: shapes[idx].ty + 'px',
						rotate: shapes[idx].rotate + 'deg'
					});
				}
			});
		});
	};

	var init = function init() {
		imagesLoaded(document.body, function () {
			initShapeEl();
			createScrollWatchers();
			Array.from(document.querySelectorAll('.content--layout')).forEach(function (el) {
				return new TiltObj(el);
			});
			// Remove loading class from body
			document.body.classList.remove('loading');
			document.body.classList.add('loaded');
		});
	};

	init();
};