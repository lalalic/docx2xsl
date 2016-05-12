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

					//console.log(`creating style ${id}${pid ? ` with parent ${pid}` : ""}`)

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
//# sourceMappingURL=data:application/json;base64,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QU4sQ0FKNkM7QUFLakQsU0FBSSxlQUFhLFFBQVEsY0FBUixFQUF3QixZQUF4QixDQUxnQztBQU1qRCxZQUFNLEtBQU4sRUFBWTtBQUNYLG1CQUFhLE1BQU0sR0FBTixFQUFXLElBQXhCLEVBQThCLElBQTlCLEVBQW9DLFlBQXBDLEVBRFc7QUFFWCxjQUFNLE1BQU0sVUFBTixDQUZLO01BQVo7QUFJQSxZQUFPLElBQVAsQ0FWaUQ7S0FyRDVCO0lBQXZCLEVBVlc7Ozs7NEJBOEVIO0FBQ1IsV0FBUSxRQUFSLEVBQWtCLE9BQWxCLENBQTBCLElBQTFCLEVBRFE7Ozs7c0JBbEZJO0FBQ04seURBQWdELEtBQUssSUFBTCxDQUFVLFNBQVYsQ0FEMUM7Ozs7bUNBSGE7QUFDbkIsVUFBTyxFQUFFLFFBQUYsMklBQVAsQ0FEbUI7Ozs7UUFETjtFQUFpQixRQUFRLE9BQVI7O2tCQUFqQiIsImZpbGUiOiJkb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50IGV4dGVuZHMgcmVxdWlyZShcIi4vYW55XCIpe1xuICAgIHN0YXRpYyBjcmVhdGVEb2N1bWVudCgpe1xuICAgICAgICByZXR1cm4gJC5wYXJzZVhNTChgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+PHJvb3QgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L1hTTC9Gb3JtYXRcIj48bGF5b3V0LW1hc3Rlci1zZXQvPjxib29rbWFyay10cmVlLz48L3Jvb3Q+YClcbiAgICB9XG4gICAgZ2V0IGRhdGEoKXtcbiAgICAgICAgcmV0dXJuIGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz4ke3RoaXMucm9vdC5vdXRlckhUTUx9YFxuICAgIH1cblxuICAgIGNvbnZlcnQoKXtcbiAgICAgICAgdGhpcy5kb2M9dGhpcy5jb25zdHJ1Y3Rvci5jcmVhdGVEb2N1bWVudCgpXG4gICAgICAgIHRoaXMucm9vdD10aGlzLmRvYy5yb290PXRoaXMuY29udGVudD10aGlzLmRvYy5kb2N1bWVudEVsZW1lbnRcbiAgICAgICAgdGhpcy5sYXlvdXRNYXN0ZXJTZXQ9dGhpcy5kb2MubGF5b3V0TWFzdGVyU2V0PXRoaXMuY29udGVudC5maXJzdENoaWxkXG5cdFx0dGhpcy5ib29rbWFya1RyZWU9dGhpcy5kb2MuYm9va21hcmtUcmVlPXRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKFwiYm9va21hcmstdHJlZVwiKVxuXHRcdFxuXG4gICAgICAgIGxldCBzdHlsZXM9W10gLHdyYXBwZXJzPW5ldyBNYXAoKVxuICAgICAgICB3cmFwcGVycy5zZXQoJyonLHRoaXMucm9vdClcblxuXHRcdE9iamVjdC5hc3NpZ24odGhpcy5kb2Mse1xuXHRcdFx0Y3JlYXRlU3R5bGUoaWQsIHBpZCl7XG5cdFx0XHRcdGlmKHR5cGVvZihpZCk9PSdvYmplY3QnKXsvL2NyZWF0ZSBkaXJlY3Qgc3R5bGUgZm9yIGVsZW1lbnRcblx0XHRcdFx0XHRsZXQgZWw9aWRcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKGBjcmVhdGluZyBkaXJlY3Qgc3R5bGUke3BpZCA/IGAgd2l0aCBuYW1lZCBzdHlsZSAke3BpZH1gIDogXCJcIn1gKVxuXHRcdFx0XHRcdGlmKGVsLnRhZ05hbWU9PVwidGFibGUtY2VsbFwiKVxuXHRcdFx0XHRcdFx0dGhpcy5hcHBseVRhYmxlU3R5bGVPbkNlbGwoLi4uYXJndW1lbnRzKVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHRoaXMuYXBwbHlTdHlsZU9uKC4uLmFyZ3VtZW50cylcblx0XHRcdFx0XHRyZXR1cm4gZWxcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vY29uc29sZS5sb2coYGNyZWF0aW5nIHN0eWxlICR7aWR9JHtwaWQgPyBgIHdpdGggcGFyZW50ICR7cGlkfWAgOiBcIlwifWApXG5cblx0XHRcdFx0aWYoaWQ9PScqJylcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5yb290XG5cdFx0XHRcdFxuXHRcdFx0XHRpZih3cmFwcGVycy5oYXMoaWQpKVxuXHRcdFx0XHRcdHJldHVybiB3cmFwcGVycy5nZXQoaWQpXG5cdFx0XHRcdFxuXHRcdFx0XHRsZXQgd3JhcHBlcj10aGlzLmNyZWF0ZUVsZW1lbnQoXCJ3cmFwcGVyXCIpXG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudD13cmFwcGVycy5nZXQocGlkKVxuICAgICAgICAgICAgICAgIGlmKHBhcmVudClcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHdyYXBwZXIpXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBzdHlsZXMucHVzaCh3cmFwcGVyKVxuXG4gICAgICAgICAgICAgICAgd3JhcHBlcnMuc2V0KGlkLHdyYXBwZXIpXG5cdFx0XHRcdHdyYXBwZXIuc2V0PXdyYXBwZXIuc2V0QXR0cmlidXRlXG5cdFx0XHRcdHdyYXBwZXIuc2lkPWlkXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdyYXBwZXJcblx0XHRcdH0sXG5cbiAgICAgICAgICAgIGFwcGx5U3R5bGVPbihlbCxzdHlsZUlkKXtcbiAgICAgICAgICAgICAgICBsZXQgc3R5bGU9d3JhcHBlcnMuZ2V0KHN0eWxlSWQpXG4gICAgICAgICAgICAgICAgd2hpbGUoc3R5bGUpe1xuXHRcdFx0XHRcdEFycmF5LmZyb20oc3R5bGUuYXR0cmlidXRlcykuZm9yRWFjaChhPT57XG5cdFx0XHRcdFx0XHRsZXQge25hbWUsdmFsdWV9PWFcblx0XHRcdFx0XHRcdGlmKCFlbC5oYXNBdHRyaWJ1dGUobmFtZSkpe1xuXHRcdFx0XHRcdFx0XHRpZih0eXBlb2YodmFsdWUpPT0nZnVuY3Rpb24nKVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlKGVsKVxuXHRcdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdFx0ZWwuc2V0QXR0cmlidXRlKG5hbWUsdmFsdWUpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRzdHlsZT1zdHlsZS5wYXJlbnROb2RlXG4gICAgICAgICAgICAgICAgfVxuXHRcdFx0XHRcblx0XHRcdFx0Ly9AdG9kbzogdG9nZ2xlIGF0dHJpYnV0ZXNcblxuXHRcdFx0XHRyZXR1cm4gZWxcbiAgICAgICAgICAgIH0sXG5cdFx0XHRcblx0XHRcdGFwcGx5VGFibGVTdHlsZU9uQ2VsbChjZWxsLCBzdHlsZUlkLCB0YXJnZXRTdHlsZXMpe1xuXHRcdFx0XHRpZihzdHlsZUlkICYmIHN0eWxlSWQuaW5kZXhPZihcIi4qXCIpIT0tMSlcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5hcHBseVN0eWxlT24oY2VsbCxzdHlsZUlkKVxuXHRcdFx0XHRcblx0XHRcdFx0bGV0IHN0eWxlPXdyYXBwZXJzLmdldChzdHlsZUlkKVxuXHRcdFx0XHRsZXQgaW5oZXJpdFN0eWxlPXJlcXVpcmUoXCIuL3RhYmxlLWNlbGxcIikuaW5oZXJpdFN0eWxlXG5cdFx0XHRcdHdoaWxlKHN0eWxlKXtcblx0XHRcdFx0XHRpbmhlcml0U3R5bGUoc3R5bGUuc2lkLCBjZWxsLCB0aGlzLCB0YXJnZXRTdHlsZXMpXG5cdFx0XHRcdFx0c3R5bGU9c3R5bGUucGFyZW50Tm9kZVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBjZWxsXG5cdFx0XHR9XG5cdFx0fSlcbiAgICB9XG5cdFxuXHRyZWxlYXNlKCl7XG5cdFx0cmVxdWlyZShcIi4vbGlzdFwiKS5yZWxlYXNlKHRoaXMpXG5cdH1cbn1cbiJdfQ==