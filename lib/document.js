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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kb2N1bWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCOzs7Ozs7Ozs7Ozs0QkFRUjtBQUNMLFFBQUssR0FBTCxHQUFTLEtBQUssV0FBTCxDQUFpQixjQUFqQixFQUFULENBREs7QUFFTCxRQUFLLElBQUwsR0FBVSxLQUFLLEdBQUwsQ0FBUyxJQUFULEdBQWMsS0FBSyxPQUFMLEdBQWEsS0FBSyxHQUFMLENBQVMsZUFBVCxDQUZoQztBQUdMLFFBQUssZUFBTCxHQUFxQixLQUFLLEdBQUwsQ0FBUyxlQUFULEdBQXlCLEtBQUssT0FBTCxDQUFhLFVBQWIsQ0FIekM7QUFJWCxRQUFLLFlBQUwsR0FBa0IsS0FBSyxHQUFMLENBQVMsWUFBVCxHQUFzQixLQUFLLElBQUwsQ0FBVSxhQUFWLENBQXdCLGVBQXhCLENBQXRCLENBSlA7O0FBT0wsT0FBSSxTQUFPLEVBQVA7T0FBVyxXQUFTLElBQUksR0FBSixFQUFULENBUFY7QUFRTCxZQUFTLEdBQVQsQ0FBYSxHQUFiLEVBQWlCLEtBQUssSUFBTCxDQUFqQixDQVJLOztBQVVYLFVBQU8sTUFBUCxDQUFjLEtBQUssR0FBTCxFQUFTO0FBQ3RCLHNDQUFZLElBQUksS0FBSTtBQUNuQixTQUFHLFFBQU8sK0NBQVAsSUFBWSxRQUFaLEVBQXFCOztBQUN2QixVQUFJLEtBQUcsRUFBSDs7QUFEbUIsVUFHdkIsQ0FBSyxZQUFMLENBQWtCLEVBQWxCLEVBQXFCLEdBQXJCLEVBSHVCO0FBSXZCLGFBQU8sRUFBUCxDQUp1QjtNQUF4Qjs7OztBQURtQixTQVVoQixNQUFJLEdBQUosRUFDRixPQUFPLEtBQUssSUFBTCxDQURSOztBQUdBLFNBQUksVUFBUSxLQUFLLGFBQUwsQ0FBbUIsU0FBbkIsQ0FBUixDQWJlO0FBY1AsU0FBSSxTQUFPLFNBQVMsR0FBVCxDQUFhLEdBQWIsQ0FBUCxDQWRHO0FBZVAsU0FBRyxNQUFILEVBQ0ksT0FBTyxXQUFQLENBQW1CLE9BQW5CLEVBREosS0FHSSxPQUFPLElBQVAsQ0FBWSxPQUFaLEVBSEo7O0FBS0EsY0FBUyxHQUFULENBQWEsRUFBYixFQUFnQixPQUFoQixFQXBCTztBQXFCbkIsYUFBUSxHQUFSLEdBQVksUUFBUSxZQUFSLENBckJPO0FBc0JQLFlBQU8sT0FBUCxDQXRCTztLQURFO0FBMEJiLHdDQUFhLElBQUcsU0FBUTtBQUNwQixTQUFJLFFBQU0sU0FBUyxHQUFULENBQWEsT0FBYixDQUFOLENBRGdCO0FBRXBCLFlBQU0sS0FBTixFQUFZO0FBQ3ZCLFlBQU0sSUFBTixDQUFXLE1BQU0sVUFBTixDQUFYLENBQTZCLE9BQTdCLENBQXFDLGFBQUc7V0FDbEMsT0FBWSxFQUFaLEtBRGtDO1dBQzdCLFFBQU8sRUFBUCxNQUQ2Qjs7QUFFdkMsV0FBRyxDQUFDLEdBQUcsWUFBSCxDQUFnQixJQUFoQixDQUFELEVBQ0YsR0FBRyxZQUFILENBQWdCLElBQWhCLEVBQXFCLEtBQXJCLEVBREQ7T0FGb0MsQ0FBckMsQ0FEdUI7QUFNdkIsY0FBTSxNQUFNLFVBQU4sQ0FOaUI7TUFBWjs7QUFTWixZQUFPLEVBQVAsQ0FYZ0M7S0ExQlg7SUFBdkIsRUFWVzs7Ozs0QkFvREg7QUFDUixXQUFRLFFBQVIsRUFBa0IsT0FBbEIsQ0FBMEIsSUFBMUIsRUFEUTs7OztzQkF4REk7QUFDTix5REFBZ0QsS0FBSyxJQUFMLENBQVUsU0FBVixDQUQxQzs7OzttQ0FIYTtBQUNuQixVQUFPLEVBQUUsUUFBRiwySUFBUCxDQURtQjs7OztRQUROO0VBQWlCLFFBQVEsT0FBUjs7a0JBQWpCIiwiZmlsZSI6ImRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnQgZXh0ZW5kcyByZXF1aXJlKFwiLi9hbnlcIil7XG4gICAgc3RhdGljIGNyZWF0ZURvY3VtZW50KCl7XG4gICAgICAgIHJldHVybiAkLnBhcnNlWE1MKGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz48cm9vdCB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkvWFNML0Zvcm1hdFwiPjxsYXlvdXQtbWFzdGVyLXNldC8+PGJvb2ttYXJrLXRyZWUvPjwvcm9vdD5gKVxuICAgIH1cbiAgICBnZXQgZGF0YSgpe1xuICAgICAgICByZXR1cm4gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PiR7dGhpcy5yb290Lm91dGVySFRNTH1gXG4gICAgfVxuXG4gICAgY29udmVydCgpe1xuICAgICAgICB0aGlzLmRvYz10aGlzLmNvbnN0cnVjdG9yLmNyZWF0ZURvY3VtZW50KClcbiAgICAgICAgdGhpcy5yb290PXRoaXMuZG9jLnJvb3Q9dGhpcy5jb250ZW50PXRoaXMuZG9jLmRvY3VtZW50RWxlbWVudFxuICAgICAgICB0aGlzLmxheW91dE1hc3RlclNldD10aGlzLmRvYy5sYXlvdXRNYXN0ZXJTZXQ9dGhpcy5jb250ZW50LmZpcnN0Q2hpbGRcblx0XHR0aGlzLmJvb2ttYXJrVHJlZT10aGlzLmRvYy5ib29rbWFya1RyZWU9dGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoXCJib29rbWFyay10cmVlXCIpXG5cdFx0XG5cbiAgICAgICAgbGV0IHN0eWxlcz1bXSAsd3JhcHBlcnM9bmV3IE1hcCgpXG4gICAgICAgIHdyYXBwZXJzLnNldCgnKicsdGhpcy5yb290KVxuXG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLmRvYyx7XG5cdFx0XHRjcmVhdGVTdHlsZShpZCwgcGlkKXtcblx0XHRcdFx0aWYodHlwZW9mKGlkKT09J29iamVjdCcpey8vY3JlYXRlIGRpcmVjdCBzdHlsZSBmb3IgZWxlbWVudFxuXHRcdFx0XHRcdGxldCBlbD1pZFxuXHRcdFx0XHRcdC8vY29uc29sZS5sb2coYGNyZWF0aW5nIGRpcmVjdCBzdHlsZSR7cGlkID8gYCB3aXRoIG5hbWVkIHN0eWxlICR7cGlkfWAgOiBcIlwifWApXG5cdFx0XHRcdFx0dGhpcy5hcHBseVN0eWxlT24oZWwscGlkKVxuXHRcdFx0XHRcdHJldHVybiBlbFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhgY3JlYXRpbmcgc3R5bGUgJHtpZH0ke3BpZCA/IGAgd2l0aCBwYXJlbnQgJHtwaWR9YCA6IFwiXCJ9YClcblxuXHRcdFx0XHRpZihpZD09JyonKVxuXHRcdFx0XHRcdHJldHVybiB0aGlzLnJvb3Rcblx0XHRcdFx0XG5cdFx0XHRcdGxldCB3cmFwcGVyPXRoaXMuY3JlYXRlRWxlbWVudChcIndyYXBwZXJcIilcbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50PXdyYXBwZXJzLmdldChwaWQpXG4gICAgICAgICAgICAgICAgaWYocGFyZW50KVxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQod3JhcHBlcilcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcy5wdXNoKHdyYXBwZXIpXG5cbiAgICAgICAgICAgICAgICB3cmFwcGVycy5zZXQoaWQsd3JhcHBlcilcblx0XHRcdFx0d3JhcHBlci5zZXQ9d3JhcHBlci5zZXRBdHRyaWJ1dGVcbiAgICAgICAgICAgICAgICByZXR1cm4gd3JhcHBlclxuXHRcdFx0fSxcblxuICAgICAgICAgICAgYXBwbHlTdHlsZU9uKGVsLHN0eWxlSWQpe1xuICAgICAgICAgICAgICAgIGxldCBzdHlsZT13cmFwcGVycy5nZXQoc3R5bGVJZClcbiAgICAgICAgICAgICAgICB3aGlsZShzdHlsZSl7XG5cdFx0XHRcdFx0QXJyYXkuZnJvbShzdHlsZS5hdHRyaWJ1dGVzKS5mb3JFYWNoKGE9Pntcblx0XHRcdFx0XHRcdGxldCB7bmFtZSx2YWx1ZX09YVxuXHRcdFx0XHRcdFx0aWYoIWVsLmhhc0F0dHJpYnV0ZShuYW1lKSlcblx0XHRcdFx0XHRcdFx0ZWwuc2V0QXR0cmlidXRlKG5hbWUsdmFsdWUpXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRzdHlsZT1zdHlsZS5wYXJlbnROb2RlXG4gICAgICAgICAgICAgICAgfVxuXG5cdFx0XHRcdHJldHVybiBlbFxuICAgICAgICAgICAgfVxuXHRcdH0pXG4gICAgfVxuXHRcblx0cmVsZWFzZSgpe1xuXHRcdHJlcXVpcmUoXCIuL2xpc3RcIikucmVsZWFzZSh0aGlzKVxuXHR9XG59XG4iXX0=