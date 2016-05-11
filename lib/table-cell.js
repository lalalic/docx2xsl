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

var TableCell = function (_require) {
	_inherits(TableCell, _require);

	function TableCell() {
		var _Object$getPrototypeO;

		var _temp, _this, _ret;

		_classCallCheck(this, TableCell);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(TableCell)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.tag = "table-cell", _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(TableCell, [{
		key: "convertStyle",
		value: function convertStyle() {
			var directStyle = this.wordModel.getDirectStyle();

			var style = this.doc.createStyle(this.content, this.tableStyleId + ".table-cell");

			if (directStyle) directStyle.parse([new this.constructor.StyleProperties(style, this)]);

			return style;
		}
	}, {
		key: "tableStyleId",
		get: function get() {
			//assert this.parent is a cell
			return this.parent.tableStyleId;
		}
	}]);

	return TableCell;
}(require("./any"));

TableCell.StyleProperties = function (_Style$CellProperties) {
	_inherits(_class, _Style$CellProperties);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
	}

	_createClass(_class, [{
		key: "tcBorders",
		value: function tcBorders(x) {
			var _this3 = this;

			Object.keys(x).forEach(function (a) {
				return _this3.set("border-" + a, _this3._border(x[a]));
			});
		}
	}, {
		key: "cnfStyle",
		value: function cnfStyle(x) {}
	}]);

	return _class;
}(_table2.default.CellProperties);

exports.default = TableCell;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90YWJsZS1jZWxsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQjs7Ozs7Ozs7Ozs7Ozs7cU1BQ3BCLE1BQUk7OztjQURnQjs7aUNBT047QUFDYixPQUFJLGNBQVksS0FBSyxTQUFMLENBQWUsY0FBZixFQUFaLENBRFM7O0FBR2IsT0FBSSxRQUFNLEtBQUssR0FBTCxDQUFTLFdBQVQsQ0FBcUIsS0FBSyxPQUFMLEVBQWMsS0FBSyxZQUFMLEdBQWtCLGFBQWxCLENBQXpDLENBSFM7O0FBS2IsT0FBRyxXQUFILEVBQ0MsWUFBWSxLQUFaLENBQWtCLENBQUMsSUFBSSxLQUFLLFdBQUwsQ0FBaUIsZUFBakIsQ0FBaUMsS0FBckMsRUFBNEMsSUFBNUMsQ0FBRCxDQUFsQixFQUREOztBQUdBLFVBQU8sS0FBUCxDQVJhOzs7O3NCQUpJOztBQUNqQixVQUFPLEtBQUssTUFBTCxDQUFZLFlBQVosQ0FEVTs7OztRQUhFO0VBQWtCLFFBQVEsT0FBUjs7QUFBbEIsVUFrQmI7Ozs7Ozs7Ozs7OzRCQUNJLEdBQUU7OztBQUNYLFVBQU8sSUFBUCxDQUFZLENBQVosRUFBZSxPQUFmLENBQXVCO1dBQUcsT0FBSyxHQUFMLGFBQW1CLENBQW5CLEVBQXVCLE9BQUssT0FBTCxDQUFhLEVBQUUsQ0FBRixDQUFiLENBQXZCO0lBQUgsQ0FBdkIsQ0FEVzs7OzsyQkFJSCxHQUFFOzs7O0VBTHlCLGdCQUFNLGNBQU47O2tCQWxCakIiLCJmaWxlIjoidGFibGUtY2VsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZSBmcm9tICcuL3N0eWxlL3RhYmxlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGVDZWxsIGV4dGVuZHMgcmVxdWlyZShcIi4vYW55XCIpe1xyXG5cdHRhZz1cInRhYmxlLWNlbGxcIlxyXG5cdFxyXG5cdGdldCB0YWJsZVN0eWxlSWQoKXsvL2Fzc2VydCB0aGlzLnBhcmVudCBpcyBhIGNlbGxcclxuXHRcdHJldHVybiB0aGlzLnBhcmVudC50YWJsZVN0eWxlSWRcclxuXHR9XHJcblx0XHJcblx0Y29udmVydFN0eWxlKCl7XHJcblx0XHRsZXQgZGlyZWN0U3R5bGU9dGhpcy53b3JkTW9kZWwuZ2V0RGlyZWN0U3R5bGUoKVxyXG5cdFx0XHJcblx0XHRsZXQgc3R5bGU9dGhpcy5kb2MuY3JlYXRlU3R5bGUodGhpcy5jb250ZW50LCB0aGlzLnRhYmxlU3R5bGVJZCtcIi50YWJsZS1jZWxsXCIpXHJcblx0XHRcclxuXHRcdGlmKGRpcmVjdFN0eWxlKVxyXG5cdFx0XHRkaXJlY3RTdHlsZS5wYXJzZShbbmV3IHRoaXMuY29uc3RydWN0b3IuU3R5bGVQcm9wZXJ0aWVzKHN0eWxlLCB0aGlzKV0pXHJcblx0XHRcclxuXHRcdHJldHVybiBzdHlsZVxyXG5cdH1cclxuXHRcclxuXHRzdGF0aWMgU3R5bGVQcm9wZXJ0aWVzPWNsYXNzIGV4dGVuZHMgU3R5bGUuQ2VsbFByb3BlcnRpZXN7XHJcblx0XHR0Y0JvcmRlcnMoeCl7XHJcblx0XHRcdE9iamVjdC5rZXlzKHgpLmZvckVhY2goYT0+dGhpcy5zZXQoYGJvcmRlci0ke2F9YCx0aGlzLl9ib3JkZXIoeFthXSkpKVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRjbmZTdHlsZSh4KXtcclxuXHRcdFx0XHJcblx0XHR9XHJcblx0fVxyXG59Il19