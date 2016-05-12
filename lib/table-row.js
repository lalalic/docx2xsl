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
		key: "tableStyleId",
		get: function get() {
			//assert this.parent is a table
			return this.parent.styleId;
		}
	}, {
		key: "tableNamedStyleId",
		get: function get() {
			return this.parent.wordModel.getStyleId();
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
		value: function cnfStyle(x) {}
	}]);

	return _class;
}(_table2.default.RowProperties);

exports.default = TableRow;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90YWJsZS1yb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCOzs7Ozs7Ozs7Ozs7OztvTUFDcEIsTUFBSTs7O2NBRGdCOztzQkFHRjs7QUFDakIsVUFBTyxLQUFLLE1BQUwsQ0FBWSxPQUFaLENBRFU7Ozs7c0JBSUs7QUFDdEIsVUFBTyxLQUFLLE1BQUwsQ0FBWSxTQUFaLENBQXNCLFVBQXRCLEVBQVAsQ0FEc0I7Ozs7UUFQSDtFQUFpQixRQUFRLE9BQVI7O0FBQWpCLFNBWWI7Ozs7Ozs7Ozs7OzJCQUNHLEdBQUU7Ozs7RUFEeUIsZ0JBQU0sYUFBTjs7a0JBWmpCIiwiZmlsZSI6InRhYmxlLXJvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZSBmcm9tICcuL3N0eWxlL3RhYmxlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGVSb3cgZXh0ZW5kcyByZXF1aXJlKFwiLi9hbnlcIil7XHJcblx0dGFnPVwidGFibGUtcm93XCJcclxuXHRcclxuXHRnZXQgdGFibGVTdHlsZUlkKCl7Ly9hc3NlcnQgdGhpcy5wYXJlbnQgaXMgYSB0YWJsZVxyXG5cdFx0cmV0dXJuIHRoaXMucGFyZW50LnN0eWxlSWRcclxuXHR9XHJcblx0XHJcblx0Z2V0IHRhYmxlTmFtZWRTdHlsZUlkKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5wYXJlbnQud29yZE1vZGVsLmdldFN0eWxlSWQoKVxyXG5cdH1cclxuXHJcblx0XHJcblx0c3RhdGljIFN0eWxlUHJvcGVydGllcz1jbGFzcyBleHRlbmRzIFN0eWxlLlJvd1Byb3BlcnRpZXN7XHJcblx0XHRjbmZTdHlsZSh4KXtcclxuXHRcdFx0XHJcblx0XHR9XHJcblx0fVxyXG59Il19