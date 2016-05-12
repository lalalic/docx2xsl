"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _table = require("./style/table");

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var uid = Date.now();

var Table = function (_require) {
	_inherits(Table, _require);

	function Table() {
		var _Object$getPrototypeO;

		var _temp, _this, _ret;

		_classCallCheck(this, Table);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Table)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.tag = "table", _this.stylable = true, _this.styleId = "_table_" + uid++, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Table, [{
		key: "convertStyle",
		value: function convertStyle() {
			//make table structure
			var width = this.wordModel.getColWidth();
			for (var i = 0, cols = width.cols, sum = width.sum, len = cols.length; i < len; i++) {
				var column = this.doc.createElement("table-column");
				this.content.appendChild(column);
				column.setAttribute("column-width", cols[i] * 100 / sum + "%");
			}

			var tbody = this.doc.createElement('table-body');
			this.content.appendChild(tbody);

			var table = this.content;
			this.content = tbody;

			//default table style
			table.setAttribute("table-layout", "fixed");
			table.setAttribute("width", "100%");

			var directStyle = this.wordModel.getDirectStyle();
			var namedStyleId = this.wordModel.getStyleId();

			/**create named style tree for table-cell inheritance
   * key: make this direct table style as a named style based on its named style
   * : so table cell can apply direct and named table style in a normal hirarchy inheritance
   */
			this.doc.createStyle(this.styleId, namedStyleId);

			var style = this.doc.createStyle(this.content, namedStyleId);
			if (directStyle) {
				//here will create *[cell] styles, and table cell will use it later
				directStyle.parse([new this.constructor.StyleProperties(style, this)]);
			}
		}
	}]);

	return Table;
}(require("./any"));

Table.StyleProperties = _table2.default.Properties;
exports.default = Table;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90YWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJLE1BQUksS0FBSyxHQUFMLEVBQUo7O0lBQ2lCOzs7Ozs7Ozs7Ozs7OztpTUFDcEIsTUFBSSxlQUNKLFdBQVMsWUFDVCxzQkFBa0I7OztjQUhFOztpQ0FNTjs7QUFFYixPQUFJLFFBQU0sS0FBSyxTQUFMLENBQWUsV0FBZixFQUFOLENBRlM7QUFHYixRQUFJLElBQUksSUFBRSxDQUFGLEVBQUksT0FBSyxNQUFNLElBQU4sRUFBVyxNQUFJLE1BQU0sR0FBTixFQUFVLE1BQUksS0FBSyxNQUFMLEVBQVksSUFBRSxHQUFGLEVBQU0sR0FBaEUsRUFBb0U7QUFDbkUsUUFBSSxTQUFPLEtBQUssR0FBTCxDQUFTLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBUCxDQUQrRDtBQUVuRSxTQUFLLE9BQUwsQ0FBYSxXQUFiLENBQXlCLE1BQXpCLEVBRm1FO0FBR25FLFdBQU8sWUFBUCxDQUFvQixjQUFwQixFQUFzQyxLQUFLLENBQUwsSUFBUSxHQUFSLEdBQVksR0FBWixNQUF0QyxFQUhtRTtJQUFwRTs7QUFNQSxPQUFJLFFBQU0sS0FBSyxHQUFMLENBQVMsYUFBVCxDQUF1QixZQUF2QixDQUFOLENBVFM7QUFVYixRQUFLLE9BQUwsQ0FBYSxXQUFiLENBQXlCLEtBQXpCLEVBVmE7O0FBWWIsT0FBSSxRQUFNLEtBQUssT0FBTCxDQVpHO0FBYWIsUUFBSyxPQUFMLEdBQWEsS0FBYjs7O0FBYmEsUUFnQmIsQ0FBTSxZQUFOLENBQW1CLGNBQW5CLEVBQWtDLE9BQWxDLEVBaEJhO0FBaUJiLFNBQU0sWUFBTixDQUFtQixPQUFuQixFQUEyQixNQUEzQixFQWpCYTs7QUFvQmIsT0FBSSxjQUFZLEtBQUssU0FBTCxDQUFlLGNBQWYsRUFBWixDQXBCUztBQXFCYixPQUFJLGVBQWEsS0FBSyxTQUFMLENBQWUsVUFBZixFQUFiOzs7Ozs7QUFyQlMsT0EyQmIsQ0FBSyxHQUFMLENBQVMsV0FBVCxDQUFxQixLQUFLLE9BQUwsRUFBYSxZQUFsQyxFQTNCYTs7QUE2QmIsT0FBSSxRQUFNLEtBQUssR0FBTCxDQUFTLFdBQVQsQ0FBcUIsS0FBSyxPQUFMLEVBQWEsWUFBbEMsQ0FBTixDQTdCUztBQThCYixPQUFHLFdBQUgsRUFBZTs7QUFFZCxnQkFBWSxLQUFaLENBQWtCLENBQUMsSUFBSSxLQUFLLFdBQUwsQ0FBaUIsZUFBakIsQ0FBaUMsS0FBckMsRUFBNEMsSUFBNUMsQ0FBRCxDQUFsQixFQUZjO0lBQWY7Ozs7UUFwQ21CO0VBQWMsUUFBUSxPQUFSOztBQUFkLE1BSWIsa0JBQWdCLGdCQUFNLFVBQU47a0JBSkgiLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGUgZnJvbSBcIi4vc3R5bGUvdGFibGVcIlxyXG5cclxudmFyIHVpZD1EYXRlLm5vdygpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlIGV4dGVuZHMgcmVxdWlyZShcIi4vYW55XCIpe1xyXG5cdHRhZz1cInRhYmxlXCJcclxuXHRzdHlsYWJsZT10cnVlXHJcblx0c3R5bGVJZD1gX3RhYmxlXyR7dWlkKyt9YFxyXG5cdHN0YXRpYyBTdHlsZVByb3BlcnRpZXM9U3R5bGUuUHJvcGVydGllc1xyXG5cdFxyXG5cdGNvbnZlcnRTdHlsZSgpe1xyXG5cdFx0Ly9tYWtlIHRhYmxlIHN0cnVjdHVyZVxyXG5cdFx0dmFyIHdpZHRoPXRoaXMud29yZE1vZGVsLmdldENvbFdpZHRoKClcclxuXHRcdGZvcih2YXIgaT0wLGNvbHM9d2lkdGguY29scyxzdW09d2lkdGguc3VtLGxlbj1jb2xzLmxlbmd0aDtpPGxlbjtpKyspe1xyXG5cdFx0XHRsZXQgY29sdW1uPXRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZS1jb2x1bW5cIilcclxuXHRcdFx0dGhpcy5jb250ZW50LmFwcGVuZENoaWxkKGNvbHVtbilcclxuXHRcdFx0Y29sdW1uLnNldEF0dHJpYnV0ZShcImNvbHVtbi13aWR0aFwiLGAke2NvbHNbaV0qMTAwL3N1bX0lYClcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgdGJvZHk9dGhpcy5kb2MuY3JlYXRlRWxlbWVudCgndGFibGUtYm9keScpXHJcblx0XHR0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQodGJvZHkpXHJcblx0XHRcclxuXHRcdHZhciB0YWJsZT10aGlzLmNvbnRlbnRcclxuXHRcdHRoaXMuY29udGVudD10Ym9keVxyXG5cdFx0XHJcblx0XHQvL2RlZmF1bHQgdGFibGUgc3R5bGVcclxuXHRcdHRhYmxlLnNldEF0dHJpYnV0ZShcInRhYmxlLWxheW91dFwiLFwiZml4ZWRcIilcclxuXHRcdHRhYmxlLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsXCIxMDAlXCIpXHJcblx0XHRcclxuXHRcdFxyXG5cdFx0bGV0IGRpcmVjdFN0eWxlPXRoaXMud29yZE1vZGVsLmdldERpcmVjdFN0eWxlKClcclxuXHRcdGxldCBuYW1lZFN0eWxlSWQ9dGhpcy53b3JkTW9kZWwuZ2V0U3R5bGVJZCgpXHJcblx0XHRcclxuXHRcdC8qKmNyZWF0ZSBuYW1lZCBzdHlsZSB0cmVlIGZvciB0YWJsZS1jZWxsIGluaGVyaXRhbmNlXHJcblx0XHQqIGtleTogbWFrZSB0aGlzIGRpcmVjdCB0YWJsZSBzdHlsZSBhcyBhIG5hbWVkIHN0eWxlIGJhc2VkIG9uIGl0cyBuYW1lZCBzdHlsZVxyXG5cdFx0KiA6IHNvIHRhYmxlIGNlbGwgY2FuIGFwcGx5IGRpcmVjdCBhbmQgbmFtZWQgdGFibGUgc3R5bGUgaW4gYSBub3JtYWwgaGlyYXJjaHkgaW5oZXJpdGFuY2VcclxuXHRcdCovXHJcblx0XHR0aGlzLmRvYy5jcmVhdGVTdHlsZSh0aGlzLnN0eWxlSWQsbmFtZWRTdHlsZUlkKVxyXG5cdFx0XHRcclxuXHRcdGxldCBzdHlsZT10aGlzLmRvYy5jcmVhdGVTdHlsZSh0aGlzLmNvbnRlbnQsbmFtZWRTdHlsZUlkKVxyXG5cdFx0aWYoZGlyZWN0U3R5bGUpe1xyXG5cdFx0XHQvL2hlcmUgd2lsbCBjcmVhdGUgKltjZWxsXSBzdHlsZXMsIGFuZCB0YWJsZSBjZWxsIHdpbGwgdXNlIGl0IGxhdGVyXHJcblx0XHRcdGRpcmVjdFN0eWxlLnBhcnNlKFtuZXcgdGhpcy5jb25zdHJ1Y3Rvci5TdHlsZVByb3BlcnRpZXMoc3R5bGUsIHRoaXMpXSlcclxuXHRcdH1cclxuXHR9XHJcbn0iXX0=