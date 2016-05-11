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

							if (!el.hasAttribute(name)) el.setAttribute(name, value);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kb2N1bWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCOzs7Ozs7Ozs7Ozs0QkFRUjtBQUNMLFFBQUssR0FBTCxHQUFTLEtBQUssV0FBTCxDQUFpQixjQUFqQixFQUFULENBREs7QUFFTCxRQUFLLElBQUwsR0FBVSxLQUFLLEdBQUwsQ0FBUyxJQUFULEdBQWMsS0FBSyxPQUFMLEdBQWEsS0FBSyxHQUFMLENBQVMsZUFBVCxDQUZoQztBQUdMLFFBQUssZUFBTCxHQUFxQixLQUFLLEdBQUwsQ0FBUyxlQUFULEdBQXlCLEtBQUssT0FBTCxDQUFhLFVBQWIsQ0FIekM7QUFJWCxRQUFLLFlBQUwsR0FBa0IsS0FBSyxHQUFMLENBQVMsWUFBVCxHQUFzQixLQUFLLElBQUwsQ0FBVSxhQUFWLENBQXdCLGVBQXhCLENBQXRCLENBSlA7O0FBT0wsT0FBSSxTQUFPLEVBQVA7T0FBVyxXQUFTLElBQUksR0FBSixFQUFULENBUFY7QUFRTCxZQUFTLEdBQVQsQ0FBYSxHQUFiLEVBQWlCLEtBQUssSUFBTCxDQUFqQixDQVJLOztBQVVYLFVBQU8sTUFBUCxDQUFjLEtBQUssR0FBTCxFQUFTO0FBQ3RCLHNDQUFZLElBQUksS0FBSTtBQUNuQixTQUFHLFFBQU8sK0NBQVAsSUFBWSxRQUFaLEVBQXFCOztBQUN2QixVQUFJLEtBQUcsRUFBSDs7QUFEbUIsVUFHdkIsQ0FBSyxZQUFMLENBQWtCLEVBQWxCLEVBQXFCLEdBQXJCLEVBSHVCO0FBSXZCLGFBQU8sRUFBUCxDQUp1QjtNQUF4Qjs7OztBQURtQixTQVVoQixNQUFJLEdBQUosRUFDRixPQUFPLEtBQUssSUFBTCxDQURSOztBQUdBLFNBQUcsU0FBUyxHQUFULENBQWEsRUFBYixDQUFILEVBQ0MsT0FBTyxRQUFRLEdBQVIsQ0FBWSxFQUFaLENBQVAsQ0FERDs7QUFHQSxTQUFJLFVBQVEsS0FBSyxhQUFMLENBQW1CLFNBQW5CLENBQVIsQ0FoQmU7QUFpQlAsU0FBSSxTQUFPLFNBQVMsR0FBVCxDQUFhLEdBQWIsQ0FBUCxDQWpCRztBQWtCUCxTQUFHLE1BQUgsRUFDSSxPQUFPLFdBQVAsQ0FBbUIsT0FBbkIsRUFESixLQUdJLE9BQU8sSUFBUCxDQUFZLE9BQVosRUFISjs7QUFLQSxjQUFTLEdBQVQsQ0FBYSxFQUFiLEVBQWdCLE9BQWhCLEVBdkJPO0FBd0JuQixhQUFRLEdBQVIsR0FBWSxRQUFRLFlBQVIsQ0F4Qk87QUF5QlAsWUFBTyxPQUFQLENBekJPO0tBREU7QUE2QmIsd0NBQWEsSUFBRyxTQUFRO0FBQ3BCLFNBQUksUUFBTSxTQUFTLEdBQVQsQ0FBYSxPQUFiLENBQU4sQ0FEZ0I7QUFFcEIsWUFBTSxLQUFOLEVBQVk7QUFDdkIsWUFBTSxJQUFOLENBQVcsTUFBTSxVQUFOLENBQVgsQ0FBNkIsT0FBN0IsQ0FBcUMsYUFBRztXQUNsQyxPQUFZLEVBQVosS0FEa0M7V0FDN0IsUUFBTyxFQUFQLE1BRDZCOztBQUV2QyxXQUFHLENBQUMsR0FBRyxZQUFILENBQWdCLElBQWhCLENBQUQsRUFDbUIsR0FBRyxZQUFILENBQWdCLElBQWhCLEVBQXFCLEtBQXJCLEVBRHRCO09BRm9DLENBQXJDLENBRHVCO0FBTXZCLGNBQU0sTUFBTSxVQUFOLENBTmlCO01BQVo7Ozs7QUFGb0IsWUFhekIsRUFBUCxDQWJnQztLQTdCWDtJQUF2QixFQVZXOzs7OzRCQXlESDtBQUNSLFdBQVEsUUFBUixFQUFrQixPQUFsQixDQUEwQixJQUExQixFQURROzs7O3NCQTdESTtBQUNOLHlEQUFnRCxLQUFLLElBQUwsQ0FBVSxTQUFWLENBRDFDOzs7O21DQUhhO0FBQ25CLFVBQU8sRUFBRSxRQUFGLDJJQUFQLENBRG1COzs7O1FBRE47RUFBaUIsUUFBUSxPQUFSOztrQkFBakIiLCJmaWxlIjoiZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N1bWVudCBleHRlbmRzIHJlcXVpcmUoXCIuL2FueVwiKXtcbiAgICBzdGF0aWMgY3JlYXRlRG9jdW1lbnQoKXtcbiAgICAgICAgcmV0dXJuICQucGFyc2VYTUwoYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/Pjxyb290IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS9YU0wvRm9ybWF0XCI+PGxheW91dC1tYXN0ZXItc2V0Lz48Ym9va21hcmstdHJlZS8+PC9yb290PmApXG4gICAgfVxuICAgIGdldCBkYXRhKCl7XG4gICAgICAgIHJldHVybiBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+JHt0aGlzLnJvb3Qub3V0ZXJIVE1MfWBcbiAgICB9XG5cbiAgICBjb252ZXJ0KCl7XG4gICAgICAgIHRoaXMuZG9jPXRoaXMuY29uc3RydWN0b3IuY3JlYXRlRG9jdW1lbnQoKVxuICAgICAgICB0aGlzLnJvb3Q9dGhpcy5kb2Mucm9vdD10aGlzLmNvbnRlbnQ9dGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50XG4gICAgICAgIHRoaXMubGF5b3V0TWFzdGVyU2V0PXRoaXMuZG9jLmxheW91dE1hc3RlclNldD10aGlzLmNvbnRlbnQuZmlyc3RDaGlsZFxuXHRcdHRoaXMuYm9va21hcmtUcmVlPXRoaXMuZG9jLmJvb2ttYXJrVHJlZT10aGlzLnJvb3QucXVlcnlTZWxlY3RvcihcImJvb2ttYXJrLXRyZWVcIilcblxuXG4gICAgICAgIGxldCBzdHlsZXM9W10gLHdyYXBwZXJzPW5ldyBNYXAoKVxuICAgICAgICB3cmFwcGVycy5zZXQoJyonLHRoaXMucm9vdClcblxuXHRcdE9iamVjdC5hc3NpZ24odGhpcy5kb2Mse1xuXHRcdFx0Y3JlYXRlU3R5bGUoaWQsIHBpZCl7XG5cdFx0XHRcdGlmKHR5cGVvZihpZCk9PSdvYmplY3QnKXsvL2NyZWF0ZSBkaXJlY3Qgc3R5bGUgZm9yIGVsZW1lbnRcblx0XHRcdFx0XHRsZXQgZWw9aWRcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKGBjcmVhdGluZyBkaXJlY3Qgc3R5bGUke3BpZCA/IGAgd2l0aCBuYW1lZCBzdHlsZSAke3BpZH1gIDogXCJcIn1gKVxuXHRcdFx0XHRcdHRoaXMuYXBwbHlTdHlsZU9uKGVsLHBpZClcblx0XHRcdFx0XHRyZXR1cm4gZWxcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vY29uc29sZS5sb2coYGNyZWF0aW5nIHN0eWxlICR7aWR9JHtwaWQgPyBgIHdpdGggcGFyZW50ICR7cGlkfWAgOiBcIlwifWApXG5cblx0XHRcdFx0aWYoaWQ9PScqJylcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5yb290XG5cblx0XHRcdFx0aWYod3JhcHBlcnMuaGFzKGlkKSlcblx0XHRcdFx0XHRyZXR1cm4gd3JhcHBlci5nZXQoaWQpXG5cblx0XHRcdFx0bGV0IHdyYXBwZXI9dGhpcy5jcmVhdGVFbGVtZW50KFwid3JhcHBlclwiKVxuICAgICAgICAgICAgICAgIGxldCBwYXJlbnQ9d3JhcHBlcnMuZ2V0KHBpZClcbiAgICAgICAgICAgICAgICBpZihwYXJlbnQpXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh3cmFwcGVyKVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzLnB1c2god3JhcHBlcilcblxuICAgICAgICAgICAgICAgIHdyYXBwZXJzLnNldChpZCx3cmFwcGVyKVxuXHRcdFx0XHR3cmFwcGVyLnNldD13cmFwcGVyLnNldEF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgIHJldHVybiB3cmFwcGVyXG5cdFx0XHR9LFxuXG4gICAgICAgICAgICBhcHBseVN0eWxlT24oZWwsc3R5bGVJZCl7XG4gICAgICAgICAgICAgICAgbGV0IHN0eWxlPXdyYXBwZXJzLmdldChzdHlsZUlkKVxuICAgICAgICAgICAgICAgIHdoaWxlKHN0eWxlKXtcblx0XHRcdFx0XHRBcnJheS5mcm9tKHN0eWxlLmF0dHJpYnV0ZXMpLmZvckVhY2goYT0+e1xuXHRcdFx0XHRcdFx0bGV0IHtuYW1lLHZhbHVlfT1hXG5cdFx0XHRcdFx0XHRpZighZWwuaGFzQXR0cmlidXRlKG5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShuYW1lLHZhbHVlKVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0c3R5bGU9c3R5bGUucGFyZW50Tm9kZVxuICAgICAgICAgICAgICAgIH1cblxuXHRcdFx0XHQvL0B0b2RvOiB0b2dnbGUgYXR0cmlidXRlc1xuXG5cdFx0XHRcdHJldHVybiBlbFxuICAgICAgICAgICAgfVxuXHRcdH0pXG4gICAgfVxuXG5cdHJlbGVhc2UoKXtcblx0XHRyZXF1aXJlKFwiLi9saXN0XCIpLnJlbGVhc2UodGhpcylcblx0fVxufVxuIl19