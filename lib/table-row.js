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

			var style = this.doc.createStyle(this.content);

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
			var targets = [];
			var styles = 'nwCell,neCell,swCell,seCell,firstRow,lastRow,firstCol,lastCol,band1Vert,band2Vert,band1Horz,band2Horz'.split(',');
			for (var i = 0; i < 12; i++) {
				if (x.charAt(i) == '1') targets[i] = styles[i];
			}
			this.parent.targetStyles = targets;
		}
	}]);

	return _class;
}(_table2.default.RowProperties);

exports.default = TableRow;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90YWJsZS1yb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCOzs7Ozs7Ozs7Ozs7OztvTUFDcEIsTUFBSTs7O2NBRGdCOztpQ0FPTjs7QUFFYixPQUFJLGNBQVksS0FBSyxTQUFMLENBQWUsY0FBZixFQUFaLENBRlM7O0FBS2IsT0FBSSxRQUFNLEtBQUssR0FBTCxDQUFTLFdBQVQsQ0FBcUIsS0FBSyxPQUFMLENBQTNCLENBTFM7O0FBT2IsT0FBRyxXQUFILEVBQ0MsWUFBWSxLQUFaLENBQWtCLENBQUMsSUFBSSxLQUFLLFdBQUwsQ0FBaUIsZUFBakIsQ0FBaUMsS0FBckMsRUFBNEMsSUFBNUMsQ0FBRCxDQUFsQixFQUREOztBQUdBLFVBQU8sS0FBUCxDQVZhOzs7O3NCQUpJOztBQUNqQixVQUFPLEtBQUssTUFBTCxDQUFZLE9BQVosQ0FEVTs7OztRQUhFO0VBQWlCLFFBQVEsT0FBUjs7QUFBakIsU0FvQmI7Ozs7Ozs7Ozs7OzJCQUNHLEdBQUU7QUFDVixPQUFJLFVBQVEsRUFBUixDQURNO0FBRVYsT0FBSSxTQUFPLHdHQUF3RyxLQUF4RyxDQUE4RyxHQUE5RyxDQUFQLENBRk07QUFHVixRQUFJLElBQUksSUFBRSxDQUFGLEVBQUksSUFBRSxFQUFGLEVBQUssR0FBakIsRUFBcUI7QUFDcEIsUUFBRyxFQUFFLE1BQUYsQ0FBUyxDQUFULEtBQWEsR0FBYixFQUNGLFFBQVEsQ0FBUixJQUFXLE9BQU8sQ0FBUCxDQUFYLENBREQ7SUFERDtBQUlBLFFBQUssTUFBTCxDQUFZLFlBQVosR0FBeUIsT0FBekIsQ0FQVTs7Ozs7RUFEeUIsZ0JBQU0sYUFBTjs7a0JBcEJqQiIsImZpbGUiOiJ0YWJsZS1yb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGUgZnJvbSAnLi9zdHlsZS90YWJsZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlUm93IGV4dGVuZHMgcmVxdWlyZShcIi4vYW55XCIpe1xyXG5cdHRhZz1cInRhYmxlLXJvd1wiXHJcblxyXG5cdGdldCB0YWJsZVN0eWxlSWQoKXsvL2Fzc2VydCB0aGlzLnBhcmVudCBpcyBhIHRhYmxlXHJcblx0XHRyZXR1cm4gdGhpcy5wYXJlbnQuc3R5bGVJZFxyXG5cdH1cclxuXHRcclxuXHRjb252ZXJ0U3R5bGUoKXtcclxuXHJcblx0XHRsZXQgZGlyZWN0U3R5bGU9dGhpcy53b3JkTW9kZWwuZ2V0RGlyZWN0U3R5bGUoKVxyXG5cclxuXHRcdFxyXG5cdFx0bGV0IHN0eWxlPXRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRoaXMuY29udGVudClcclxuXHRcdFxyXG5cdFx0aWYoZGlyZWN0U3R5bGUpXHJcblx0XHRcdGRpcmVjdFN0eWxlLnBhcnNlKFtuZXcgdGhpcy5jb25zdHJ1Y3Rvci5TdHlsZVByb3BlcnRpZXMoc3R5bGUsIHRoaXMpXSlcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHN0eWxlXHJcblx0fVxyXG5cclxuXHRzdGF0aWMgU3R5bGVQcm9wZXJ0aWVzPWNsYXNzIGV4dGVuZHMgU3R5bGUuUm93UHJvcGVydGllc3tcclxuXHRcdGNuZlN0eWxlKHgpe1xyXG5cdFx0XHR2YXIgdGFyZ2V0cz1bXVxyXG5cdFx0XHR2YXIgc3R5bGVzPSdud0NlbGwsbmVDZWxsLHN3Q2VsbCxzZUNlbGwsZmlyc3RSb3csbGFzdFJvdyxmaXJzdENvbCxsYXN0Q29sLGJhbmQxVmVydCxiYW5kMlZlcnQsYmFuZDFIb3J6LGJhbmQySG9yeicuc3BsaXQoJywnKVxyXG5cdFx0XHRmb3IodmFyIGk9MDtpPDEyO2krKyl7XHJcblx0XHRcdFx0aWYoeC5jaGFyQXQoaSk9PScxJylcclxuXHRcdFx0XHRcdHRhcmdldHNbaV09c3R5bGVzW2ldXHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5wYXJlbnQudGFyZ2V0U3R5bGVzPXRhcmdldHNcclxuXHRcdH1cclxuXHR9XHJcbn0iXX0=