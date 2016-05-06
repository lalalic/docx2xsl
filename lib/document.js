"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Document = function (_require) {
	_inherits(Document, _require);

	function Document() {
		_classCallCheck(this, Document);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Document).apply(this, arguments));
	}

	_createClass(Document, [{
		key: "convert",
		value: function convert() {
			this.doc = this.constructor.createDocument();
			this.root = this.doc.root = this.content = this.doc.documentElement;
			this.layoutMasterSet = this.doc.layoutMasterSet = this.content.firstChild;
			this.bookmarkTree = this.doc.bookmarkTree = this.root.querySelector("bookmark-tree");

			var styles = [],
			    wrappers = new Map();
			wrappers.set('*', this.root);

			Object.assign(this.doc, {
				createStyle: function createStyle(id, pid) {
					if ((typeof id === "undefined" ? "undefined" : _typeof(id)) == 'object') {
						//create direct style for element
						var el = id;
						//console.log(`creating direct style${pid ? ` with named style ${pid}` : ""}`)
						this.applyStyleOn(el, pid);
						return el;
					}

					//console.log(`creating style ${id}${pid ? ` with parent ${pid}` : ""}`)

					if (id == '*') return this.root;

					if (wrappers.has(id)) return wrapper.get(id);

					var wrapper = this.createElement("wrapper");
					var parent = wrappers.get(pid);
					if (parent) parent.appendChild(wrapper);else styles.push(wrapper);

					wrappers.set(id, wrapper);
					wrapper.set = wrapper.setAttribute;
					return wrapper;
				},
				applyStyleOn: function applyStyleOn(el, styleId) {
					var style = wrappers.get(styleId);
					while (style) {
						Array.from(style.attributes).forEach(function (a) {
							var name = a.name;
							var value = a.value;

							if (!el.hasAttribute(name)) {
								if (typeof value == 'function') value(el);else el.setAttribute(name, value);
							}
						});
						style = style.parentNode;
					}

					//@todo: toggle attributes

					return el;
				}
			});
		}
	}, {
		key: "release",
		value: function release() {
			require("./list").release(this);
		}
	}, {
		key: "data",
		get: function get() {
			return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" + this.root.outerHTML;
		}
	}], [{
		key: "createDocument",
		value: function createDocument() {
			return $.parseXML("<?xml version=\"1.0\" encoding=\"UTF-8\"?><root xmlns=\"http://www.w3.org/1999/XSL/Format\"><layout-master-set/><bookmark-tree/></root>");
		}
	}]);

	return Document;
}(require("./any"));

exports.default = Document;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,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ZW50IGV4dGVuZHMgcmVxdWlyZShcIi4vYW55XCIpe1xuICAgIHN0YXRpYyBjcmVhdGVEb2N1bWVudCgpe1xuICAgICAgICByZXR1cm4gJC5wYXJzZVhNTChgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+PHJvb3QgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L1hTTC9Gb3JtYXRcIj48bGF5b3V0LW1hc3Rlci1zZXQvPjxib29rbWFyay10cmVlLz48L3Jvb3Q+YClcbiAgICB9XG4gICAgZ2V0IGRhdGEoKXtcbiAgICAgICAgcmV0dXJuIGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz4ke3RoaXMucm9vdC5vdXRlckhUTUx9YFxuICAgIH1cblxuICAgIGNvbnZlcnQoKXtcbiAgICAgICAgdGhpcy5kb2M9dGhpcy5jb25zdHJ1Y3Rvci5jcmVhdGVEb2N1bWVudCgpXG4gICAgICAgIHRoaXMucm9vdD10aGlzLmRvYy5yb290PXRoaXMuY29udGVudD10aGlzLmRvYy5kb2N1bWVudEVsZW1lbnRcbiAgICAgICAgdGhpcy5sYXlvdXRNYXN0ZXJTZXQ9dGhpcy5kb2MubGF5b3V0TWFzdGVyU2V0PXRoaXMuY29udGVudC5maXJzdENoaWxkXG5cdFx0dGhpcy5ib29rbWFya1RyZWU9dGhpcy5kb2MuYm9va21hcmtUcmVlPXRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKFwiYm9va21hcmstdHJlZVwiKVxuXHRcdFxuXG4gICAgICAgIGxldCBzdHlsZXM9W10gLHdyYXBwZXJzPW5ldyBNYXAoKVxuICAgICAgICB3cmFwcGVycy5zZXQoJyonLHRoaXMucm9vdClcblxuXHRcdE9iamVjdC5hc3NpZ24odGhpcy5kb2Mse1xuXHRcdFx0Y3JlYXRlU3R5bGUoaWQsIHBpZCl7XG5cdFx0XHRcdGlmKHR5cGVvZihpZCk9PSdvYmplY3QnKXsvL2NyZWF0ZSBkaXJlY3Qgc3R5bGUgZm9yIGVsZW1lbnRcblx0XHRcdFx0XHRsZXQgZWw9aWRcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKGBjcmVhdGluZyBkaXJlY3Qgc3R5bGUke3BpZCA/IGAgd2l0aCBuYW1lZCBzdHlsZSAke3BpZH1gIDogXCJcIn1gKVxuXHRcdFx0XHRcdHRoaXMuYXBwbHlTdHlsZU9uKGVsLHBpZClcblx0XHRcdFx0XHRyZXR1cm4gZWxcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vY29uc29sZS5sb2coYGNyZWF0aW5nIHN0eWxlICR7aWR9JHtwaWQgPyBgIHdpdGggcGFyZW50ICR7cGlkfWAgOiBcIlwifWApXG5cblx0XHRcdFx0aWYoaWQ9PScqJylcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5yb290XG5cdFx0XHRcdFxuXHRcdFx0XHRpZih3cmFwcGVycy5oYXMoaWQpKVxuXHRcdFx0XHRcdHJldHVybiB3cmFwcGVyLmdldChpZClcblx0XHRcdFx0XG5cdFx0XHRcdGxldCB3cmFwcGVyPXRoaXMuY3JlYXRlRWxlbWVudChcIndyYXBwZXJcIilcbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50PXdyYXBwZXJzLmdldChwaWQpXG4gICAgICAgICAgICAgICAgaWYocGFyZW50KVxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQod3JhcHBlcilcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcy5wdXNoKHdyYXBwZXIpXG5cbiAgICAgICAgICAgICAgICB3cmFwcGVycy5zZXQoaWQsd3JhcHBlcilcblx0XHRcdFx0d3JhcHBlci5zZXQ9d3JhcHBlci5zZXRBdHRyaWJ1dGVcbiAgICAgICAgICAgICAgICByZXR1cm4gd3JhcHBlclxuXHRcdFx0fSxcblxuICAgICAgICAgICAgYXBwbHlTdHlsZU9uKGVsLHN0eWxlSWQpe1xuICAgICAgICAgICAgICAgIGxldCBzdHlsZT13cmFwcGVycy5nZXQoc3R5bGVJZClcbiAgICAgICAgICAgICAgICB3aGlsZShzdHlsZSl7XG5cdFx0XHRcdFx0QXJyYXkuZnJvbShzdHlsZS5hdHRyaWJ1dGVzKS5mb3JFYWNoKGE9Pntcblx0XHRcdFx0XHRcdGxldCB7bmFtZSx2YWx1ZX09YVxuXHRcdFx0XHRcdFx0aWYoIWVsLmhhc0F0dHJpYnV0ZShuYW1lKSl7XG5cdFx0XHRcdFx0XHRcdGlmKHR5cGVvZih2YWx1ZSk9PSdmdW5jdGlvbicpXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWUoZWwpXG5cdFx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0XHRlbC5zZXRBdHRyaWJ1dGUobmFtZSx2YWx1ZSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdHN0eWxlPXN0eWxlLnBhcmVudE5vZGVcbiAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdFxuXHRcdFx0XHQvL0B0b2RvOiB0b2dnbGUgYXR0cmlidXRlc1xuXG5cdFx0XHRcdHJldHVybiBlbFxuICAgICAgICAgICAgfVxuXHRcdH0pXG4gICAgfVxuXHRcblx0cmVsZWFzZSgpe1xuXHRcdHJlcXVpcmUoXCIuL2xpc3RcIikucmVsZWFzZSh0aGlzKVxuXHR9XG59XG4iXX0=