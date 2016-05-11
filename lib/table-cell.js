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
			var _this2 = this;

			this.targetStyles = [];

			var directStyle = this.wordModel.getDirectStyle();

			var style = this.doc.createStyle(this.content);

			//direct style
			if (directStyle) directStyle.parse([new this.constructor.StyleProperties(style, this)]);

			//direct table style
			this.inheritStyle(this.tableStyleId);

			//named table style :12 target styles
			this.targetStyles.forEach(function (a) {
				_this2.inheritStyle(_this2.tableNamedStyleId + "." + a);
			});

			//named table style: table level
			this.inheritStyle(this.tableNamedStyleId);

			return style;
		}
	}, {
		key: "inheritStyle",
		value: function inheritStyle(styleId) {
			if (!styleId) return;
			//direct table style
			this.doc.createStyle(this.content, styleId + ".*cell");

			if (this.targetStyles.contains("firstRow") || this.wordModel.isFirstRow()) this.doc.createStyle(this.content, styleId + ".*firstRow");else this.doc.createStyle(this.content, styleId + ".*!firstRow");

			if (this.targetStyles.contains("firstCol") || this.wordModel.isFirstCol()) this.doc.createStyle(this.content, styleId + ".*firstCol");else this.doc.createStyle(this.content, styleId + ".*!firstCol");

			if (this.targetStyles.contains("lastCol") || this.wordModel.isLastRow()) this.doc.createStyle(this.content, styleId + ".*lastRow");

			if (this.targetStyles.contains("lastCol") || this.wordModel.isLastCol()) this.doc.createStyle(this.content, styleId + ".*lastCol");
		}
	}, {
		key: "tableStyleId",
		get: function get() {
			//assert this.parent is a cell
			return this.parent.tableStyleId;
		}
	}, {
		key: "tableNamedStyleId",
		get: function get() {
			return this.parent.tableNamedStyleId;
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
		key: "cnfStyle",
		value: function cnfStyle(x) {
			var targets = [];
			var styles = 'nwCell,neCell,swCell,seCell,firstRow,lastRow,firstCol,lastCol,band1Vert,band2Vert,band1Horz,band2Horz'.split(',');
			for (var i = 0; i < 12; i++) {
				if (x.charAt(i) == '1') targets.unshift(styles[i]);
			}
			this.parent.targetStyles = targets;
		}
	}]);

	return _class;
}(_table2.default.CellProperties);

exports.default = TableCell;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,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LE9BQVIsQ0FBZ0IsT0FBTyxDQUFQLENBQWhCLEVBREQ7SUFERDtBQUlBLFFBQUssTUFBTCxDQUFZLFlBQVosR0FBeUIsT0FBekIsQ0FQVTs7Ozs7RUFEeUIsZ0JBQU0sY0FBTjs7a0JBMURqQiIsImZpbGUiOiJ0YWJsZS1jZWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlIGZyb20gJy4vc3R5bGUvdGFibGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZUNlbGwgZXh0ZW5kcyByZXF1aXJlKFwiLi9hbnlcIil7XHJcblx0dGFnPVwidGFibGUtY2VsbFwiXHJcblxyXG5cdGdldCB0YWJsZVN0eWxlSWQoKXsvL2Fzc2VydCB0aGlzLnBhcmVudCBpcyBhIGNlbGxcclxuXHRcdHJldHVybiB0aGlzLnBhcmVudC50YWJsZVN0eWxlSWRcclxuXHR9XHJcblxyXG5cdGdldCB0YWJsZU5hbWVkU3R5bGVJZCgpe1xyXG5cdFx0cmV0dXJuIHRoaXMucGFyZW50LnRhYmxlTmFtZWRTdHlsZUlkXHJcblx0fVxyXG5cclxuXHRjb252ZXJ0U3R5bGUoKXtcclxuXHRcdHRoaXMudGFyZ2V0U3R5bGVzPVtdXHJcblxyXG5cdFx0bGV0IGRpcmVjdFN0eWxlPXRoaXMud29yZE1vZGVsLmdldERpcmVjdFN0eWxlKClcclxuXHJcblx0XHRsZXQgc3R5bGU9dGhpcy5kb2MuY3JlYXRlU3R5bGUodGhpcy5jb250ZW50KVxyXG5cclxuXHRcdC8vZGlyZWN0IHN0eWxlXHJcblx0XHRpZihkaXJlY3RTdHlsZSlcclxuXHRcdFx0ZGlyZWN0U3R5bGUucGFyc2UoW25ldyB0aGlzLmNvbnN0cnVjdG9yLlN0eWxlUHJvcGVydGllcyhzdHlsZSwgdGhpcyldKVxyXG5cclxuXHRcdC8vZGlyZWN0IHRhYmxlIHN0eWxlXHJcblx0XHR0aGlzLmluaGVyaXRTdHlsZSh0aGlzLnRhYmxlU3R5bGVJZClcclxuXHJcblx0XHQvL25hbWVkIHRhYmxlIHN0eWxlIDoxMiB0YXJnZXQgc3R5bGVzXHJcblx0XHR0aGlzLnRhcmdldFN0eWxlcy5mb3JFYWNoKGE9PntcclxuXHRcdFx0dGhpcy5pbmhlcml0U3R5bGUodGhpcy50YWJsZU5hbWVkU3R5bGVJZCtcIi5cIithKVxyXG5cdFx0fSlcclxuXHJcblx0XHQvL25hbWVkIHRhYmxlIHN0eWxlOiB0YWJsZSBsZXZlbFxyXG5cdFx0dGhpcy5pbmhlcml0U3R5bGUodGhpcy50YWJsZU5hbWVkU3R5bGVJZClcclxuXHJcblx0XHRyZXR1cm4gc3R5bGVcclxuXHR9XHJcblxyXG5cdGluaGVyaXRTdHlsZShzdHlsZUlkKXtcclxuXHRcdGlmKCFzdHlsZUlkKSByZXR1cm5cclxuXHRcdC8vZGlyZWN0IHRhYmxlIHN0eWxlXHJcblx0XHR0aGlzLmRvYy5jcmVhdGVTdHlsZSh0aGlzLmNvbnRlbnQsIHN0eWxlSWQrXCIuKmNlbGxcIilcclxuXHJcblx0XHRpZih0aGlzLnRhcmdldFN0eWxlcy5jb250YWlucyhcImZpcnN0Um93XCIpIHx8IHRoaXMud29yZE1vZGVsLmlzRmlyc3RSb3coKSlcclxuXHRcdFx0dGhpcy5kb2MuY3JlYXRlU3R5bGUodGhpcy5jb250ZW50LCBzdHlsZUlkK1wiLipmaXJzdFJvd1wiKVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmRvYy5jcmVhdGVTdHlsZSh0aGlzLmNvbnRlbnQsIHN0eWxlSWQrXCIuKiFmaXJzdFJvd1wiKVxyXG5cclxuXHRcdGlmKHRoaXMudGFyZ2V0U3R5bGVzLmNvbnRhaW5zKFwiZmlyc3RDb2xcIikgfHwgdGhpcy53b3JkTW9kZWwuaXNGaXJzdENvbCgpKVxyXG5cdFx0XHR0aGlzLmRvYy5jcmVhdGVTdHlsZSh0aGlzLmNvbnRlbnQsIHN0eWxlSWQrXCIuKmZpcnN0Q29sXCIpXHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRoaXMuY29udGVudCwgc3R5bGVJZCtcIi4qIWZpcnN0Q29sXCIpXHJcblxyXG5cdFx0aWYodGhpcy50YXJnZXRTdHlsZXMuY29udGFpbnMoXCJsYXN0Q29sXCIpIHx8IHRoaXMud29yZE1vZGVsLmlzTGFzdFJvdygpKVxyXG5cdFx0XHR0aGlzLmRvYy5jcmVhdGVTdHlsZSh0aGlzLmNvbnRlbnQsIHN0eWxlSWQrXCIuKmxhc3RSb3dcIilcclxuXHJcblx0XHRpZih0aGlzLnRhcmdldFN0eWxlcy5jb250YWlucyhcImxhc3RDb2xcIikgfHwgdGhpcy53b3JkTW9kZWwuaXNMYXN0Q29sKCkpXHJcblx0XHRcdHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRoaXMuY29udGVudCwgc3R5bGVJZCtcIi4qbGFzdENvbFwiKVxyXG5cdH1cclxuXHJcblx0c3RhdGljIFN0eWxlUHJvcGVydGllcz1jbGFzcyBleHRlbmRzIFN0eWxlLkNlbGxQcm9wZXJ0aWVze1xyXG5cdFx0Y25mU3R5bGUoeCl7XHJcblx0XHRcdHZhciB0YXJnZXRzPVtdXHJcblx0XHRcdHZhciBzdHlsZXM9J253Q2VsbCxuZUNlbGwsc3dDZWxsLHNlQ2VsbCxmaXJzdFJvdyxsYXN0Um93LGZpcnN0Q29sLGxhc3RDb2wsYmFuZDFWZXJ0LGJhbmQyVmVydCxiYW5kMUhvcnosYmFuZDJIb3J6Jy5zcGxpdCgnLCcpXHJcblx0XHRcdGZvcih2YXIgaT0wO2k8MTI7aSsrKXtcclxuXHRcdFx0XHRpZih4LmNoYXJBdChpKT09JzEnKVxyXG5cdFx0XHRcdFx0dGFyZ2V0cy51bnNoaWZ0KHN0eWxlc1tpXSlcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnBhcmVudC50YXJnZXRTdHlsZXM9dGFyZ2V0c1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0=