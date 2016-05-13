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
						if (el.tagName == "table-cell") this.applyTableStyleOnCell.apply(this, arguments);else this.applyStyleOn.apply(this, arguments);
						return el;
					}

					if (id == '*') return this.root;

					if (wrappers.has(id)) return wrappers.get(id);

					var wrapper = this.createElement("wrapper");
					var parent = wrappers.get(pid);
					if (parent) parent.appendChild(wrapper);else styles.push(wrapper);

					wrappers.set(id, wrapper);
					wrapper.set = wrapper.setAttribute;
					wrapper.sid = id;
					return wrapper;
				},
				applyStyleOn: function applyStyleOn(el, styleId) {
					var style = wrappers.get(styleId);
					while (style) {
						console.log("applying style " + style.sid);
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
				},
				applyTableStyleOnCell: function applyTableStyleOnCell(cell, styleId, targetStyles) {
					if (styleId && styleId.indexOf(".*") != -1) return this.applyStyleOn(cell, styleId);

					var style = wrappers.get(styleId);
					var inheritStyle = require("./table-cell").inheritStyle;
					while (style) {
						inheritStyle(style.sid, cell, this, targetStyles);
						style = style.parentNode;
					}
					return cell;
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
//# sourceMappingURL=data:application/json;base64,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REQ7O0FBR0EsU0FBSSxRQUFNLFNBQVMsR0FBVCxDQUFhLE9BQWIsQ0FBTixDQUo2QztBQUtqRCxTQUFJLGVBQWEsUUFBUSxjQUFSLEVBQXdCLFlBQXhCLENBTGdDO0FBTWpELFlBQU0sS0FBTixFQUFZO0FBQ1gsbUJBQWEsTUFBTSxHQUFOLEVBQVcsSUFBeEIsRUFBOEIsSUFBOUIsRUFBb0MsWUFBcEMsRUFEVztBQUVYLGNBQU0sTUFBTSxVQUFOLENBRks7TUFBWjtBQUlBLFlBQU8sSUFBUCxDQVZpRDtLQXBENUI7SUFBdkIsRUFWVzs7Ozs0QkE2RUg7QUFDUixXQUFRLFFBQVIsRUFBa0IsT0FBbEIsQ0FBMEIsSUFBMUIsRUFEUTs7OztzQkFqRkk7QUFDTix5REFBZ0QsS0FBSyxJQUFMLENBQVUsU0FBVixDQUQxQzs7OzttQ0FIYTtBQUNuQixVQUFPLEVBQUUsUUFBRiwySUFBUCxDQURtQjs7OztRQUROO0VBQWlCLFFBQVEsT0FBUjs7a0JBQWpCIiwiZmlsZSI6ImRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnQgZXh0ZW5kcyByZXF1aXJlKFwiLi9hbnlcIil7XG4gICAgc3RhdGljIGNyZWF0ZURvY3VtZW50KCl7XG4gICAgICAgIHJldHVybiAkLnBhcnNlWE1MKGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz48cm9vdCB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkvWFNML0Zvcm1hdFwiPjxsYXlvdXQtbWFzdGVyLXNldC8+PGJvb2ttYXJrLXRyZWUvPjwvcm9vdD5gKVxuICAgIH1cbiAgICBnZXQgZGF0YSgpe1xuICAgICAgICByZXR1cm4gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PiR7dGhpcy5yb290Lm91dGVySFRNTH1gXG4gICAgfVxuXG4gICAgY29udmVydCgpe1xuICAgICAgICB0aGlzLmRvYz10aGlzLmNvbnN0cnVjdG9yLmNyZWF0ZURvY3VtZW50KClcbiAgICAgICAgdGhpcy5yb290PXRoaXMuZG9jLnJvb3Q9dGhpcy5jb250ZW50PXRoaXMuZG9jLmRvY3VtZW50RWxlbWVudFxuICAgICAgICB0aGlzLmxheW91dE1hc3RlclNldD10aGlzLmRvYy5sYXlvdXRNYXN0ZXJTZXQ9dGhpcy5jb250ZW50LmZpcnN0Q2hpbGRcblx0XHR0aGlzLmJvb2ttYXJrVHJlZT10aGlzLmRvYy5ib29rbWFya1RyZWU9dGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoXCJib29rbWFyay10cmVlXCIpXG5cdFx0XG5cbiAgICAgICAgbGV0IHN0eWxlcz1bXSAsd3JhcHBlcnM9bmV3IE1hcCgpXG4gICAgICAgIHdyYXBwZXJzLnNldCgnKicsdGhpcy5yb290KVxuXG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLmRvYyx7XG5cdFx0XHRjcmVhdGVTdHlsZShpZCwgcGlkKXtcblx0XHRcdFx0aWYodHlwZW9mKGlkKT09J29iamVjdCcpey8vY3JlYXRlIGRpcmVjdCBzdHlsZSBmb3IgZWxlbWVudFxuXHRcdFx0XHRcdGxldCBlbD1pZFxuXHRcdFx0XHRcdC8vY29uc29sZS5sb2coYGNyZWF0aW5nIGRpcmVjdCBzdHlsZSR7cGlkID8gYCB3aXRoIG5hbWVkIHN0eWxlICR7cGlkfWAgOiBcIlwifWApXG5cdFx0XHRcdFx0aWYoZWwudGFnTmFtZT09XCJ0YWJsZS1jZWxsXCIpXG5cdFx0XHRcdFx0XHR0aGlzLmFwcGx5VGFibGVTdHlsZU9uQ2VsbCguLi5hcmd1bWVudHMpXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0dGhpcy5hcHBseVN0eWxlT24oLi4uYXJndW1lbnRzKVxuXHRcdFx0XHRcdHJldHVybiBlbFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoaWQ9PScqJylcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5yb290XG5cdFx0XHRcdFxuXHRcdFx0XHRpZih3cmFwcGVycy5oYXMoaWQpKVxuXHRcdFx0XHRcdHJldHVybiB3cmFwcGVycy5nZXQoaWQpXG5cdFx0XHRcdFxuXHRcdFx0XHRsZXQgd3JhcHBlcj10aGlzLmNyZWF0ZUVsZW1lbnQoXCJ3cmFwcGVyXCIpXG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudD13cmFwcGVycy5nZXQocGlkKVxuICAgICAgICAgICAgICAgIGlmKHBhcmVudClcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHdyYXBwZXIpXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBzdHlsZXMucHVzaCh3cmFwcGVyKVxuXG4gICAgICAgICAgICAgICAgd3JhcHBlcnMuc2V0KGlkLHdyYXBwZXIpXG5cdFx0XHRcdHdyYXBwZXIuc2V0PXdyYXBwZXIuc2V0QXR0cmlidXRlXG5cdFx0XHRcdHdyYXBwZXIuc2lkPWlkXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdyYXBwZXJcblx0XHRcdH0sXG5cbiAgICAgICAgICAgIGFwcGx5U3R5bGVPbihlbCxzdHlsZUlkKXtcbiAgICAgICAgICAgICAgICBsZXQgc3R5bGU9d3JhcHBlcnMuZ2V0KHN0eWxlSWQpXG4gICAgICAgICAgICAgICAgd2hpbGUoc3R5bGUpe1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGBhcHBseWluZyBzdHlsZSAke3N0eWxlLnNpZH1gKVxuXHRcdFx0XHRcdEFycmF5LmZyb20oc3R5bGUuYXR0cmlidXRlcykuZm9yRWFjaChhPT57XG5cdFx0XHRcdFx0XHRsZXQge25hbWUsdmFsdWV9PWFcblx0XHRcdFx0XHRcdGlmKCFlbC5oYXNBdHRyaWJ1dGUobmFtZSkpe1xuXHRcdFx0XHRcdFx0XHRpZih0eXBlb2YodmFsdWUpPT0nZnVuY3Rpb24nKVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlKGVsKVxuXHRcdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdFx0ZWwuc2V0QXR0cmlidXRlKG5hbWUsdmFsdWUpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRzdHlsZT1zdHlsZS5wYXJlbnROb2RlXG4gICAgICAgICAgICAgICAgfVxuXHRcdFx0XHRcblx0XHRcdFx0Ly9AdG9kbzogdG9nZ2xlIGF0dHJpYnV0ZXNcblxuXHRcdFx0XHRyZXR1cm4gZWxcbiAgICAgICAgICAgIH0sXG5cdFx0XHRcblx0XHRcdGFwcGx5VGFibGVTdHlsZU9uQ2VsbChjZWxsLCBzdHlsZUlkLCB0YXJnZXRTdHlsZXMpe1xuXHRcdFx0XHRpZihzdHlsZUlkICYmIHN0eWxlSWQuaW5kZXhPZihcIi4qXCIpIT0tMSlcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5hcHBseVN0eWxlT24oY2VsbCxzdHlsZUlkKVxuXHRcdFx0XHRcblx0XHRcdFx0bGV0IHN0eWxlPXdyYXBwZXJzLmdldChzdHlsZUlkKVxuXHRcdFx0XHRsZXQgaW5oZXJpdFN0eWxlPXJlcXVpcmUoXCIuL3RhYmxlLWNlbGxcIikuaW5oZXJpdFN0eWxlXG5cdFx0XHRcdHdoaWxlKHN0eWxlKXtcblx0XHRcdFx0XHRpbmhlcml0U3R5bGUoc3R5bGUuc2lkLCBjZWxsLCB0aGlzLCB0YXJnZXRTdHlsZXMpXG5cdFx0XHRcdFx0c3R5bGU9c3R5bGUucGFyZW50Tm9kZVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBjZWxsXG5cdFx0XHR9XG5cdFx0fSlcbiAgICB9XG5cdFxuXHRyZWxlYXNlKCl7XG5cdFx0cmVxdWlyZShcIi4vbGlzdFwiKS5yZWxlYXNlKHRoaXMpXG5cdH1cbn1cbiJdfQ==