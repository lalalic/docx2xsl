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

var TableRow = function (_require) {
	_inherits(TableRow, _require);

	function TableRow() {
		var _Object$getPrototypeO;

		var _temp, _this, _ret;

		_classCallCheck(this, TableRow);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(TableRow)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.tag = "table-row", _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(TableRow, [{
		key: "convertStyle",
		value: function convertStyle() {
			var directStyle = this.wordModel.getDirectStyle();

			var style = this.doc.createStyle(this.content, this.tableStyleId + ".row");

			if (directStyle) directStyle.parse([new this.constructor.StyleProperties(style, this)]);

			return style;
		}
	}, {
		key: "tableStyleId",
		get: function get() {
			//assert this.parent is a table
			return this.parent.styleId;
		}
	}]);

	return TableRow;
}(require("./any"));

TableRow.StyleProperties = function (_Style$RowProperties) {
	_inherits(_class, _Style$RowProperties);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
	}

	_createClass(_class, [{
		key: "cnfStyle",
		value: function cnfStyle(x) {
			var names = [],
			    PrioritiziedStyles = _table2.default.prototype.PrioritiziedStyles,
			    level = -1,
			    t;
			for (var i = 0; i < 12; i++) {
				if (x.charAt(i) == '1') {
					names.push(t = _table2.default.TableStyles[i]);
					if ((t = PrioritiziedStyles.indexOf(t)) > level) level = t;
				}
			}
			names.length && Td.addClass(this.parent.content, names.join(' '));
			for (var i = 0; i < level; i++) {
				this.parent.content.setAttribute('x' + i, 1);
			}
		}
	}]);

	return _class;
}(_table2.default.RowProperties);

exports.default = TableRow;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90YWJsZS1yb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCOzs7Ozs7Ozs7Ozs7OztvTUFDcEIsTUFBSTs7O2NBRGdCOztpQ0FPTjtBQUNiLE9BQUksY0FBWSxLQUFLLFNBQUwsQ0FBZSxjQUFmLEVBQVosQ0FEUzs7QUFHYixPQUFJLFFBQU0sS0FBSyxHQUFMLENBQVMsV0FBVCxDQUFxQixLQUFLLE9BQUwsRUFBYyxLQUFLLFlBQUwsR0FBa0IsTUFBbEIsQ0FBekMsQ0FIUzs7QUFLYixPQUFHLFdBQUgsRUFDQyxZQUFZLEtBQVosQ0FBa0IsQ0FBQyxJQUFJLEtBQUssV0FBTCxDQUFpQixlQUFqQixDQUFpQyxLQUFyQyxFQUE0QyxJQUE1QyxDQUFELENBQWxCLEVBREQ7O0FBR0EsVUFBTyxLQUFQLENBUmE7Ozs7c0JBSkk7O0FBQ2pCLFVBQU8sS0FBSyxNQUFMLENBQVksT0FBWixDQURVOzs7O1FBSEU7RUFBaUIsUUFBUSxPQUFSOztBQUFqQixTQW1CYjs7Ozs7Ozs7Ozs7MkJBQ0csR0FBRTtBQUNWLE9BQUksUUFBTSxFQUFOO09BQVUscUJBQW1CLGdCQUFNLFNBQU4sQ0FBZ0Isa0JBQWhCO09BQW9DLFFBQU0sQ0FBQyxDQUFEO09BQUksQ0FBL0UsQ0FEVTtBQUVWLFFBQUksSUFBSSxJQUFFLENBQUYsRUFBSSxJQUFFLEVBQUYsRUFBSyxHQUFqQixFQUFxQjtBQUNwQixRQUFHLEVBQUUsTUFBRixDQUFTLENBQVQsS0FBYSxHQUFiLEVBQWlCO0FBQ25CLFdBQU0sSUFBTixDQUFXLElBQUUsZ0JBQU0sV0FBTixDQUFrQixDQUFsQixDQUFGLENBQVgsQ0FEbUI7QUFFbkIsU0FBRyxDQUFDLElBQUUsbUJBQW1CLE9BQW5CLENBQTJCLENBQTNCLENBQUYsQ0FBRCxHQUFrQyxLQUFsQyxFQUNGLFFBQU0sQ0FBTixDQUREO0tBRkQ7SUFERDtBQU9BLFNBQU0sTUFBTixJQUFnQixHQUFHLFFBQUgsQ0FBWSxLQUFLLE1BQUwsQ0FBWSxPQUFaLEVBQW9CLE1BQU0sSUFBTixDQUFXLEdBQVgsQ0FBaEMsQ0FBaEIsQ0FUVTtBQVVWLFFBQUksSUFBSSxJQUFFLENBQUYsRUFBSSxJQUFFLEtBQUYsRUFBUSxHQUFwQjtBQUNDLFNBQUssTUFBTCxDQUFZLE9BQVosQ0FBb0IsWUFBcEIsQ0FBaUMsTUFBSSxDQUFKLEVBQU0sQ0FBdkM7SUFERDs7Ozs7RUFYbUMsZ0JBQU0sYUFBTjs7a0JBbkJqQiIsImZpbGUiOiJ0YWJsZS1yb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGUgZnJvbSAnLi9zdHlsZS90YWJsZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlUm93IGV4dGVuZHMgcmVxdWlyZShcIi4vYW55XCIpe1xyXG5cdHRhZz1cInRhYmxlLXJvd1wiXHJcblx0XHJcblx0Z2V0IHRhYmxlU3R5bGVJZCgpey8vYXNzZXJ0IHRoaXMucGFyZW50IGlzIGEgdGFibGVcclxuXHRcdHJldHVybiB0aGlzLnBhcmVudC5zdHlsZUlkXHJcblx0fVxyXG5cdFxyXG5cdGNvbnZlcnRTdHlsZSgpe1xyXG5cdFx0bGV0IGRpcmVjdFN0eWxlPXRoaXMud29yZE1vZGVsLmdldERpcmVjdFN0eWxlKClcclxuXHRcdFxyXG5cdFx0bGV0IHN0eWxlPXRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRoaXMuY29udGVudCwgdGhpcy50YWJsZVN0eWxlSWQrXCIucm93XCIpXHJcblx0XHRcclxuXHRcdGlmKGRpcmVjdFN0eWxlKVxyXG5cdFx0XHRkaXJlY3RTdHlsZS5wYXJzZShbbmV3IHRoaXMuY29uc3RydWN0b3IuU3R5bGVQcm9wZXJ0aWVzKHN0eWxlLCB0aGlzKV0pXHJcblx0XHRcclxuXHRcdHJldHVybiBzdHlsZVxyXG5cdH1cclxuXHJcblx0XHJcblx0c3RhdGljIFN0eWxlUHJvcGVydGllcz1jbGFzcyBleHRlbmRzIFN0eWxlLlJvd1Byb3BlcnRpZXN7XHJcblx0XHRjbmZTdHlsZSh4KXtcclxuXHRcdFx0dmFyIG5hbWVzPVtdLCBQcmlvcml0aXppZWRTdHlsZXM9U3R5bGUucHJvdG90eXBlLlByaW9yaXRpemllZFN0eWxlcywgbGV2ZWw9LTEsIHRcclxuXHRcdFx0Zm9yKHZhciBpPTA7aTwxMjtpKyspe1xyXG5cdFx0XHRcdGlmKHguY2hhckF0KGkpPT0nMScpe1xyXG5cdFx0XHRcdFx0bmFtZXMucHVzaCh0PVN0eWxlLlRhYmxlU3R5bGVzW2ldKVxyXG5cdFx0XHRcdFx0aWYoKHQ9UHJpb3JpdGl6aWVkU3R5bGVzLmluZGV4T2YodCkpPmxldmVsKVxyXG5cdFx0XHRcdFx0XHRsZXZlbD10XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdG5hbWVzLmxlbmd0aCAmJiBUZC5hZGRDbGFzcyh0aGlzLnBhcmVudC5jb250ZW50LG5hbWVzLmpvaW4oJyAnKSk7XHJcblx0XHRcdGZvcih2YXIgaT0wO2k8bGV2ZWw7aSsrKVxyXG5cdFx0XHRcdHRoaXMucGFyZW50LmNvbnRlbnQuc2V0QXR0cmlidXRlKCd4JytpLDEpXHJcblx0XHR9XHJcblx0fVxyXG59Il19