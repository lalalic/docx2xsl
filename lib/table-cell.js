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
			this.targetStyles = Array.from(this.parent.targetStyles ? this.parent.targetStyles : []);
			var directStyle = this.wordModel.getDirectStyle();
			//direct style
			if (directStyle) directStyle.parse([new this.constructor.StyleProperties(this.doc.createStyle(this.content), this)]);

			var isFirstRow = this.targetStyles.includes("firstRow") || this.wordModel.isFirstRow();
			var isFirstCol = this.targetStyles.includes("firstCol") || this.wordModel.isFirstCol();
			var isLastRow = this.targetStyles.includes("lastRow") || this.wordModel.isLastRow();
			var isLastCol = this.targetStyles.includes("lastCol") || this.wordModel.isLastCol();

			Object.assign(this.content, { isFirstRow: isFirstRow, isFirstCol: isFirstCol, isLastRow: isLastRow, isLastCol: isLastCol });

			return this.doc.createStyle(this.content, this.tableStyleId, this.targetStyles.reverse());
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

TableCell.inheritStyle = inheritStyle;

TableCell.StyleProperties = function (_Style$CellProperties) {
	_inherits(_class, _Style$CellProperties);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
	}

	_createClass(_class, [{
		key: "cnfStyle",
		value: function cnfStyle(x) {
			var targets = this.parent.targetStyles;
			x.forEach(function (a) {
				return targets[_table2.default.OrderedTargetStyles.indexOf(a)] = a;
			});
			this.parent.targetStyles = targets.filter(function (a) {
				return a;
			});
		}
	}]);

	return _class;
}(_table2.default.CellProperties);

exports.default = TableCell;


function inheritStyle(styleId, cell, doc) {
	var targetStyles = arguments.length <= 3 || arguments[3] === undefined ? [] : arguments[3];

	if (!styleId) return;

	targetStyles.forEach(function (a) {
		return inheritStyle(styleId + "." + a, cell, doc);
	});

	if (cell.isFirstRow) doc.createStyle(cell, styleId + ".*firstRow");else doc.createStyle(cell, styleId + ".*!firstRow");

	if (cell.isFirstCol) doc.createStyle(cell, styleId + ".*firstCol");else doc.createStyle(cell, styleId + ".*!firstCol");

	if (cell.isLastRow) doc.createStyle(cell, styleId + ".*lastRow");

	if (cell.isLastCol) doc.createStyle(cell, styleId + ".*lastCol");

	doc.createStyle(cell, styleId + ".*cell");
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,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QSxLQUFHLEtBQUssU0FBTCxFQUNGLElBQUksV0FBSixDQUFnQixJQUFoQixFQUFzQixVQUFRLFdBQVIsQ0FBdEIsQ0FERDs7QUFHQSxLQUFHLEtBQUssU0FBTCxFQUNGLElBQUksV0FBSixDQUFnQixJQUFoQixFQUFzQixVQUFRLFdBQVIsQ0FBdEIsQ0FERDs7QUFHQSxLQUFJLFdBQUosQ0FBZ0IsSUFBaEIsRUFBc0IsVUFBUSxRQUFSLENBQXRCLENBckJ5RDtDQUExRCIsImZpbGUiOiJ0YWJsZS1jZWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlIGZyb20gJy4vc3R5bGUvdGFibGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZUNlbGwgZXh0ZW5kcyByZXF1aXJlKFwiLi9hbnlcIil7XHJcblx0dGFnPVwidGFibGUtY2VsbFwiXHJcblx0XHJcblxyXG5cdGdldCB0YWJsZVN0eWxlSWQoKXsvL2Fzc2VydCB0aGlzLnBhcmVudCBpcyBhIGNlbGxcclxuXHRcdHJldHVybiB0aGlzLnBhcmVudC50YWJsZVN0eWxlSWRcclxuXHR9XHJcblx0Y29udmVydFN0eWxlKCl7XHJcblx0XHR0aGlzLnRhcmdldFN0eWxlcz1BcnJheS5mcm9tKHRoaXMucGFyZW50LnRhcmdldFN0eWxlcyA/IHRoaXMucGFyZW50LnRhcmdldFN0eWxlcyA6IFtdKVxyXG5cdFx0bGV0IGRpcmVjdFN0eWxlPXRoaXMud29yZE1vZGVsLmdldERpcmVjdFN0eWxlKClcclxuXHRcdC8vZGlyZWN0IHN0eWxlXHJcblx0XHRpZihkaXJlY3RTdHlsZSlcclxuXHRcdFx0ZGlyZWN0U3R5bGUucGFyc2UoW25ldyB0aGlzLmNvbnN0cnVjdG9yLlN0eWxlUHJvcGVydGllcyh0aGlzLmRvYy5jcmVhdGVTdHlsZSh0aGlzLmNvbnRlbnQpLCB0aGlzKV0pXHJcblxyXG5cdFx0bGV0IGlzRmlyc3RSb3c9dGhpcy50YXJnZXRTdHlsZXMuaW5jbHVkZXMoXCJmaXJzdFJvd1wiKSB8fCB0aGlzLndvcmRNb2RlbC5pc0ZpcnN0Um93KClcclxuXHRcdGxldCBpc0ZpcnN0Q29sPXRoaXMudGFyZ2V0U3R5bGVzLmluY2x1ZGVzKFwiZmlyc3RDb2xcIikgfHwgdGhpcy53b3JkTW9kZWwuaXNGaXJzdENvbCgpXHJcblx0XHRsZXQgaXNMYXN0Um93PXRoaXMudGFyZ2V0U3R5bGVzLmluY2x1ZGVzKFwibGFzdFJvd1wiKSB8fCB0aGlzLndvcmRNb2RlbC5pc0xhc3RSb3coKVxyXG5cdFx0bGV0IGlzTGFzdENvbD10aGlzLnRhcmdldFN0eWxlcy5pbmNsdWRlcyhcImxhc3RDb2xcIikgfHwgdGhpcy53b3JkTW9kZWwuaXNMYXN0Q29sKClcclxuXHJcblx0XHRPYmplY3QuYXNzaWduKHRoaXMuY29udGVudCx7aXNGaXJzdFJvdywgaXNGaXJzdENvbCwgaXNMYXN0Um93LCBpc0xhc3RDb2x9KVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcy5kb2MuY3JlYXRlU3R5bGUodGhpcy5jb250ZW50LCB0aGlzLnRhYmxlU3R5bGVJZCwgdGhpcy50YXJnZXRTdHlsZXMucmV2ZXJzZSgpKVxyXG5cdH1cclxuXHRcclxuXHRzdGF0aWMgaW5oZXJpdFN0eWxlPWluaGVyaXRTdHlsZVxyXG5cclxuXHRzdGF0aWMgU3R5bGVQcm9wZXJ0aWVzPWNsYXNzIGV4dGVuZHMgU3R5bGUuQ2VsbFByb3BlcnRpZXN7XHJcblx0XHRjbmZTdHlsZSh4KXtcdFx0XHRcdFx0XHRcclxuXHRcdFx0dmFyIHRhcmdldHM9dGhpcy5wYXJlbnQudGFyZ2V0U3R5bGVzXHJcblx0XHRcdHguZm9yRWFjaChhPT50YXJnZXRzW1N0eWxlLk9yZGVyZWRUYXJnZXRTdHlsZXMuaW5kZXhPZihhKV09YSlcclxuXHRcdFx0dGhpcy5wYXJlbnQudGFyZ2V0U3R5bGVzPXRhcmdldHMuZmlsdGVyKGE9PmEpXHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbmhlcml0U3R5bGUoc3R5bGVJZCwgY2VsbCwgZG9jLCB0YXJnZXRTdHlsZXM9W10pe1xyXG5cdGlmKCFzdHlsZUlkKSByZXR1cm5cclxuXHRcclxuXHR0YXJnZXRTdHlsZXMuZm9yRWFjaChhPT5pbmhlcml0U3R5bGUoc3R5bGVJZCtcIi5cIithLCBjZWxsLCBkb2MpKVxyXG5cdFxyXG5cdGlmKGNlbGwuaXNGaXJzdFJvdylcclxuXHRcdGRvYy5jcmVhdGVTdHlsZShjZWxsLCBzdHlsZUlkK1wiLipmaXJzdFJvd1wiKVxyXG5cdGVsc2VcclxuXHRcdGRvYy5jcmVhdGVTdHlsZShjZWxsLCBzdHlsZUlkK1wiLiohZmlyc3RSb3dcIilcclxuXHJcblx0aWYoY2VsbC5pc0ZpcnN0Q29sKVxyXG5cdFx0ZG9jLmNyZWF0ZVN0eWxlKGNlbGwsIHN0eWxlSWQrXCIuKmZpcnN0Q29sXCIpXHJcblx0ZWxzZVxyXG5cdFx0ZG9jLmNyZWF0ZVN0eWxlKGNlbGwsIHN0eWxlSWQrXCIuKiFmaXJzdENvbFwiKVxyXG5cclxuXHRpZihjZWxsLmlzTGFzdFJvdylcclxuXHRcdGRvYy5jcmVhdGVTdHlsZShjZWxsLCBzdHlsZUlkK1wiLipsYXN0Um93XCIpXHJcblxyXG5cdGlmKGNlbGwuaXNMYXN0Q29sKVxyXG5cdFx0ZG9jLmNyZWF0ZVN0eWxlKGNlbGwsIHN0eWxlSWQrXCIuKmxhc3RDb2xcIilcclxuXHRcclxuXHRkb2MuY3JlYXRlU3R5bGUoY2VsbCwgc3R5bGVJZCtcIi4qY2VsbFwiKVxyXG59XHJcbiJdfQ==