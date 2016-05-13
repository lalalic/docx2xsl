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
			this.parent.targetStyles = targets;
			x.forEach(function (a) {
				return targets[_table2.default.OrderedTargetStyles.indexOf(a)] = a;
			});
		}
	}]);

	return _class;
}(_table2.default.RowProperties);

exports.default = TableRow;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90YWJsZS1yb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCOzs7Ozs7Ozs7Ozs7OztvTUFDcEIsTUFBSTs7O2NBRGdCOztpQ0FPTjs7QUFFYixPQUFJLGNBQVksS0FBSyxTQUFMLENBQWUsY0FBZixFQUFaLENBRlM7O0FBS2IsT0FBSSxRQUFNLEtBQUssR0FBTCxDQUFTLFdBQVQsQ0FBcUIsS0FBSyxPQUFMLENBQTNCLENBTFM7O0FBT2IsT0FBRyxXQUFILEVBQ0MsWUFBWSxLQUFaLENBQWtCLENBQUMsSUFBSSxLQUFLLFdBQUwsQ0FBaUIsZUFBakIsQ0FBaUMsS0FBckMsRUFBNEMsSUFBNUMsQ0FBRCxDQUFsQixFQUREOztBQUdBLFVBQU8sS0FBUCxDQVZhOzs7O3NCQUpJOztBQUNqQixVQUFPLEtBQUssTUFBTCxDQUFZLE9BQVosQ0FEVTs7OztRQUhFO0VBQWlCLFFBQVEsT0FBUjs7QUFBakIsU0FvQmI7Ozs7Ozs7Ozs7OzJCQUNHLEdBQUU7QUFDVixPQUFJLFVBQVEsRUFBUixDQURNO0FBRVYsUUFBSyxNQUFMLENBQVksWUFBWixHQUF5QixPQUF6QixDQUZVO0FBR1YsS0FBRSxPQUFGLENBQVU7V0FBRyxRQUFRLGdCQUFNLG1CQUFOLENBQTBCLE9BQTFCLENBQWtDLENBQWxDLENBQVIsSUFBOEMsQ0FBOUM7SUFBSCxDQUFWLENBSFU7Ozs7O0VBRHlCLGdCQUFNLGFBQU47O2tCQXBCakIiLCJmaWxlIjoidGFibGUtcm93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlIGZyb20gJy4vc3R5bGUvdGFibGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZVJvdyBleHRlbmRzIHJlcXVpcmUoXCIuL2FueVwiKXtcclxuXHR0YWc9XCJ0YWJsZS1yb3dcIlxyXG5cclxuXHRnZXQgdGFibGVTdHlsZUlkKCl7Ly9hc3NlcnQgdGhpcy5wYXJlbnQgaXMgYSB0YWJsZVxyXG5cdFx0cmV0dXJuIHRoaXMucGFyZW50LnN0eWxlSWRcclxuXHR9XHJcblx0XHJcblx0Y29udmVydFN0eWxlKCl7XHJcblxyXG5cdFx0bGV0IGRpcmVjdFN0eWxlPXRoaXMud29yZE1vZGVsLmdldERpcmVjdFN0eWxlKClcclxuXHJcblx0XHRcclxuXHRcdGxldCBzdHlsZT10aGlzLmRvYy5jcmVhdGVTdHlsZSh0aGlzLmNvbnRlbnQpXHJcblx0XHRcclxuXHRcdGlmKGRpcmVjdFN0eWxlKVxyXG5cdFx0XHRkaXJlY3RTdHlsZS5wYXJzZShbbmV3IHRoaXMuY29uc3RydWN0b3IuU3R5bGVQcm9wZXJ0aWVzKHN0eWxlLCB0aGlzKV0pXHJcblx0XHRcclxuXHRcdHJldHVybiBzdHlsZVxyXG5cdH1cclxuXHJcblx0c3RhdGljIFN0eWxlUHJvcGVydGllcz1jbGFzcyBleHRlbmRzIFN0eWxlLlJvd1Byb3BlcnRpZXN7XHJcblx0XHRjbmZTdHlsZSh4KXtcclxuXHRcdFx0bGV0IHRhcmdldHM9W11cclxuXHRcdFx0dGhpcy5wYXJlbnQudGFyZ2V0U3R5bGVzPXRhcmdldHNcclxuXHRcdFx0eC5mb3JFYWNoKGE9PnRhcmdldHNbU3R5bGUuT3JkZXJlZFRhcmdldFN0eWxlcy5pbmRleE9mKGEpXT1hKVxyXG5cdFx0fVxyXG5cdH1cclxufSJdfQ==