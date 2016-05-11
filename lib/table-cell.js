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

			if (this.wordModel.isFirstRow()) this.doc.createStyle(this.content, styleId + ".*firstRow");else this.doc.createStyle(this.content, styleId + ".*!firstRow");

			if (this.wordModel.isFirstCol()) this.doc.createStyle(this.content, styleId + ".*firstCol");else this.doc.createStyle(this.content, styleId + ".*!firstCol");

			if (this.wordModel.isLastRow()) this.doc.createStyle(this.content, styleId + ".*lastRow");

			if (this.wordModel.isLastCol()) this.doc.createStyle(this.content, styleId + ".*lastCol");
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
				if (x.charAt(i) == '1') targets.push(styles[i]);
			}
			this.parent.targetStyles = targets;
		}
	}]);

	return _class;
}(_table2.default.CellProperties);

exports.default = TableCell;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,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ZnJvbSAnLi9zdHlsZS90YWJsZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlQ2VsbCBleHRlbmRzIHJlcXVpcmUoXCIuL2FueVwiKXtcclxuXHR0YWc9XCJ0YWJsZS1jZWxsXCJcclxuXHRcclxuXHRnZXQgdGFibGVTdHlsZUlkKCl7Ly9hc3NlcnQgdGhpcy5wYXJlbnQgaXMgYSBjZWxsXHJcblx0XHRyZXR1cm4gdGhpcy5wYXJlbnQudGFibGVTdHlsZUlkXHJcblx0fVxyXG5cdFxyXG5cdGdldCB0YWJsZU5hbWVkU3R5bGVJZCgpe1xyXG5cdFx0cmV0dXJuIHRoaXMucGFyZW50LnRhYmxlTmFtZWRTdHlsZUlkXHJcblx0fVxyXG5cdFxyXG5cdGNvbnZlcnRTdHlsZSgpe1xyXG5cdFx0dGhpcy50YXJnZXRTdHlsZXM9W11cclxuXHRcdFxyXG5cdFx0bGV0IGRpcmVjdFN0eWxlPXRoaXMud29yZE1vZGVsLmdldERpcmVjdFN0eWxlKClcclxuXHRcdFxyXG5cdFx0bGV0IHN0eWxlPXRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRoaXMuY29udGVudClcclxuXHRcdFxyXG5cdFx0Ly9kaXJlY3Qgc3R5bGVcclxuXHRcdGlmKGRpcmVjdFN0eWxlKVxyXG5cdFx0XHRkaXJlY3RTdHlsZS5wYXJzZShbbmV3IHRoaXMuY29uc3RydWN0b3IuU3R5bGVQcm9wZXJ0aWVzKHN0eWxlLCB0aGlzKV0pXHJcblx0XHRcclxuXHRcdC8vZGlyZWN0IHRhYmxlIHN0eWxlXHJcblx0XHR0aGlzLmluaGVyaXRTdHlsZSh0aGlzLnRhYmxlU3R5bGVJZClcclxuXHRcdFxyXG5cdFx0Ly9uYW1lZCB0YWJsZSBzdHlsZSA6MTIgdGFyZ2V0IHN0eWxlc1xyXG5cdFx0dGhpcy50YXJnZXRTdHlsZXMuZm9yRWFjaChhPT57XHJcblx0XHRcdHRoaXMuaW5oZXJpdFN0eWxlKHRoaXMudGFibGVOYW1lZFN0eWxlSWQrXCIuXCIrYSlcclxuXHRcdH0pXHJcblx0XHRcclxuXHRcdC8vbmFtZWQgdGFibGUgc3R5bGU6IHRhYmxlIGxldmVsXHJcblx0XHR0aGlzLmluaGVyaXRTdHlsZSh0aGlzLnRhYmxlTmFtZWRTdHlsZUlkKVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gc3R5bGVcclxuXHR9XHJcblx0XHJcblx0aW5oZXJpdFN0eWxlKHN0eWxlSWQpe1xyXG5cdFx0aWYoIXN0eWxlSWQpIHJldHVyblxyXG5cdFx0Ly9kaXJlY3QgdGFibGUgc3R5bGVcclxuXHRcdHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRoaXMuY29udGVudCwgc3R5bGVJZCtcIi4qY2VsbFwiKVxyXG5cdFx0XHJcblx0XHRpZih0aGlzLndvcmRNb2RlbC5pc0ZpcnN0Um93KCkpXHJcblx0XHRcdHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRoaXMuY29udGVudCwgc3R5bGVJZCtcIi4qZmlyc3RSb3dcIilcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5kb2MuY3JlYXRlU3R5bGUodGhpcy5jb250ZW50LCBzdHlsZUlkK1wiLiohZmlyc3RSb3dcIilcclxuXHRcdFxyXG5cdFx0aWYodGhpcy53b3JkTW9kZWwuaXNGaXJzdENvbCgpKVxyXG5cdFx0XHR0aGlzLmRvYy5jcmVhdGVTdHlsZSh0aGlzLmNvbnRlbnQsIHN0eWxlSWQrXCIuKmZpcnN0Q29sXCIpXHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRoaXMuY29udGVudCwgc3R5bGVJZCtcIi4qIWZpcnN0Q29sXCIpXHJcblx0XHRcclxuXHRcdGlmKHRoaXMud29yZE1vZGVsLmlzTGFzdFJvdygpKVxyXG5cdFx0XHR0aGlzLmRvYy5jcmVhdGVTdHlsZSh0aGlzLmNvbnRlbnQsIHN0eWxlSWQrXCIuKmxhc3RSb3dcIilcclxuXHRcdFxyXG5cdFx0aWYodGhpcy53b3JkTW9kZWwuaXNMYXN0Q29sKCkpXHJcblx0XHRcdHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRoaXMuY29udGVudCwgc3R5bGVJZCtcIi4qbGFzdENvbFwiKVxyXG5cdH1cclxuXHRcclxuXHRzdGF0aWMgU3R5bGVQcm9wZXJ0aWVzPWNsYXNzIGV4dGVuZHMgU3R5bGUuQ2VsbFByb3BlcnRpZXN7XHJcblx0XHRjbmZTdHlsZSh4KXtcclxuXHRcdFx0dmFyIHRhcmdldHM9W11cclxuXHRcdFx0dmFyIHN0eWxlcz0nbndDZWxsLG5lQ2VsbCxzd0NlbGwsc2VDZWxsLGZpcnN0Um93LGxhc3RSb3csZmlyc3RDb2wsbGFzdENvbCxiYW5kMVZlcnQsYmFuZDJWZXJ0LGJhbmQxSG9yeixiYW5kMkhvcnonLnNwbGl0KCcsJylcclxuXHRcdFx0Zm9yKHZhciBpPTA7aTwxMjtpKyspe1xyXG5cdFx0XHRcdGlmKHguY2hhckF0KGkpPT0nMScpXHJcblx0XHRcdFx0XHR0YXJnZXRzLnB1c2goc3R5bGVzW2ldKVxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMucGFyZW50LnRhcmdldFN0eWxlcz10YXJnZXRzXHJcblx0XHR9XHJcblx0fVxyXG59Il19