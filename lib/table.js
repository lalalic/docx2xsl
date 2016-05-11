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
			table.setAttribute("table-layout", "fixed");
			table.setAttribute("width", "100%");

			var directStyle = this.wordModel.getDirectStyle();

			var style = this.doc.createStyle(this.content);

			if (directStyle) directStyle.parse([new this.constructor.StyleProperties(style, this)]);
		}
	}]);

	return Table;
}(require("./any"));

Table.StyleProperties = _table2.default.Properties;
exports.default = Table;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90YWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJLE1BQUksS0FBSyxHQUFMLEVBQUo7O0lBQ2lCOzs7Ozs7Ozs7Ozs7OztpTUFDcEIsTUFBSSxlQUNKLFdBQVMsWUFDVCxzQkFBa0I7OztjQUhFOztpQ0FNTjtBQUNiLE9BQUksUUFBTSxLQUFLLFNBQUwsQ0FBZSxXQUFmLEVBQU4sQ0FEUztBQUViLFFBQUksSUFBSSxJQUFFLENBQUYsRUFBSSxPQUFLLE1BQU0sSUFBTixFQUFXLE1BQUksTUFBTSxHQUFOLEVBQVUsTUFBSSxLQUFLLE1BQUwsRUFBWSxJQUFFLEdBQUYsRUFBTSxHQUFoRSxFQUFvRTtBQUNuRSxRQUFJLFNBQU8sS0FBSyxHQUFMLENBQVMsYUFBVCxDQUF1QixjQUF2QixDQUFQLENBRCtEO0FBRW5FLFNBQUssT0FBTCxDQUFhLFdBQWIsQ0FBeUIsTUFBekIsRUFGbUU7QUFHbkUsV0FBTyxZQUFQLENBQW9CLGNBQXBCLEVBQXNDLEtBQUssQ0FBTCxJQUFRLEdBQVIsR0FBWSxHQUFaLE1BQXRDLEVBSG1FO0lBQXBFO0FBS0EsT0FBSSxRQUFNLEtBQUssR0FBTCxDQUFTLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBTixDQVBTO0FBUWIsUUFBSyxPQUFMLENBQWEsV0FBYixDQUF5QixLQUF6QixFQVJhOztBQVViLE9BQUksUUFBTSxLQUFLLE9BQUwsQ0FWRztBQVdiLFFBQUssT0FBTCxHQUFhLEtBQWIsQ0FYYTtBQVliLFNBQU0sWUFBTixDQUFtQixjQUFuQixFQUFrQyxPQUFsQyxFQVphO0FBYWIsU0FBTSxZQUFOLENBQW1CLE9BQW5CLEVBQTJCLE1BQTNCLEVBYmE7O0FBZWIsT0FBSSxjQUFZLEtBQUssU0FBTCxDQUFlLGNBQWYsRUFBWixDQWZTOztBQWtCYixPQUFJLFFBQU0sS0FBSyxHQUFMLENBQVMsV0FBVCxDQUFxQixLQUFLLE9BQUwsQ0FBM0IsQ0FsQlM7O0FBb0JiLE9BQUcsV0FBSCxFQUNDLFlBQVksS0FBWixDQUFrQixDQUFDLElBQUksS0FBSyxXQUFMLENBQWlCLGVBQWpCLENBQWlDLEtBQXJDLEVBQTRDLElBQTVDLENBQUQsQ0FBbEIsRUFERDs7OztRQTFCbUI7RUFBYyxRQUFRLE9BQVI7O0FBQWQsTUFJYixrQkFBZ0IsZ0JBQU0sVUFBTjtrQkFKSCIsImZpbGUiOiJ0YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZSBmcm9tIFwiLi9zdHlsZS90YWJsZVwiXHJcblxyXG52YXIgdWlkPURhdGUubm93KClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGUgZXh0ZW5kcyByZXF1aXJlKFwiLi9hbnlcIil7XHJcblx0dGFnPVwidGFibGVcIlxyXG5cdHN0eWxhYmxlPXRydWVcclxuXHRzdHlsZUlkPWBfdGFibGVfJHt1aWQrK31gXHJcblx0c3RhdGljIFN0eWxlUHJvcGVydGllcz1TdHlsZS5Qcm9wZXJ0aWVzXHJcblx0XHJcblx0Y29udmVydFN0eWxlKCl7XHJcblx0XHR2YXIgd2lkdGg9dGhpcy53b3JkTW9kZWwuZ2V0Q29sV2lkdGgoKVxyXG5cdFx0Zm9yKHZhciBpPTAsY29scz13aWR0aC5jb2xzLHN1bT13aWR0aC5zdW0sbGVuPWNvbHMubGVuZ3RoO2k8bGVuO2krKyl7XHJcblx0XHRcdGxldCBjb2x1bW49dGhpcy5kb2MuY3JlYXRlRWxlbWVudChcInRhYmxlLWNvbHVtblwiKVxyXG5cdFx0XHR0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQoY29sdW1uKVxyXG5cdFx0XHRjb2x1bW4uc2V0QXR0cmlidXRlKFwiY29sdW1uLXdpZHRoXCIsYCR7Y29sc1tpXSoxMDAvc3VtfSVgKVxyXG5cdFx0fVxyXG5cdFx0dmFyIHRib2R5PXRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ3RhYmxlLWJvZHknKVxyXG5cdFx0dGhpcy5jb250ZW50LmFwcGVuZENoaWxkKHRib2R5KVxyXG5cdFx0XHJcblx0XHR2YXIgdGFibGU9dGhpcy5jb250ZW50XHJcblx0XHR0aGlzLmNvbnRlbnQ9dGJvZHlcclxuXHRcdHRhYmxlLnNldEF0dHJpYnV0ZShcInRhYmxlLWxheW91dFwiLFwiZml4ZWRcIilcclxuXHRcdHRhYmxlLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsXCIxMDAlXCIpXHJcblx0XHRcclxuXHRcdGxldCBkaXJlY3RTdHlsZT10aGlzLndvcmRNb2RlbC5nZXREaXJlY3RTdHlsZSgpXHJcblx0XHRcclxuXHRcdFxyXG5cdFx0bGV0IHN0eWxlPXRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRoaXMuY29udGVudClcclxuXHRcdFxyXG5cdFx0aWYoZGlyZWN0U3R5bGUpXHJcblx0XHRcdGRpcmVjdFN0eWxlLnBhcnNlKFtuZXcgdGhpcy5jb25zdHJ1Y3Rvci5TdHlsZVByb3BlcnRpZXMoc3R5bGUsIHRoaXMpXSlcclxuXHR9XHJcbn0iXX0=