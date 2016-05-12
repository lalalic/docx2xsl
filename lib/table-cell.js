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
			this.targetStyles = [];
			var directStyle = this.wordModel.getDirectStyle();
			//direct style
			if (directStyle) directStyle.parse([new this.constructor.StyleProperties(this.doc.createStyle(this.content), this)]);

			var isFirstRow = this.targetStyles.includes("firstRow") || this.wordModel.isFirstRow();
			var isFirstCol = this.targetStyles.includes("firstCol") || this.wordModel.isFirstCol();
			var isLastRow = this.targetStyles.includes("lastRow") || this.wordModel.isLastRow();
			var isLastCol = this.targetStyles.includes("lastCol") || this.wordModel.isLastCol();

			Object.assign(this.content, { isFirstRow: isFirstRow, isFirstCol: isFirstCol, isLastRow: isLastRow, isLastCol: isLastCol });

			return this.doc.createStyle(this.content, this.tableStyleId, this.targetStyles);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90YWJsZS1jZWxsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQjs7Ozs7Ozs7Ozs7Ozs7cU1BQ3BCLE1BQUk7OztjQURnQjs7aUNBV047QUFDYixRQUFLLFlBQUwsR0FBa0IsRUFBbEIsQ0FEYTtBQUViLE9BQUksY0FBWSxLQUFLLFNBQUwsQ0FBZSxjQUFmLEVBQVo7O0FBRlMsT0FJVixXQUFILEVBQ0MsWUFBWSxLQUFaLENBQWtCLENBQUMsSUFBSSxLQUFLLFdBQUwsQ0FBaUIsZUFBakIsQ0FBaUMsS0FBSyxHQUFMLENBQVMsV0FBVCxDQUFxQixLQUFLLE9BQUwsQ0FBMUQsRUFBeUUsSUFBekUsQ0FBRCxDQUFsQixFQUREOztBQUdBLE9BQUksYUFBVyxLQUFLLFlBQUwsQ0FBa0IsUUFBbEIsQ0FBMkIsVUFBM0IsS0FBMEMsS0FBSyxTQUFMLENBQWUsVUFBZixFQUExQyxDQVBGO0FBUWIsT0FBSSxhQUFXLEtBQUssWUFBTCxDQUFrQixRQUFsQixDQUEyQixVQUEzQixLQUEwQyxLQUFLLFNBQUwsQ0FBZSxVQUFmLEVBQTFDLENBUkY7QUFTYixPQUFJLFlBQVUsS0FBSyxZQUFMLENBQWtCLFFBQWxCLENBQTJCLFNBQTNCLEtBQXlDLEtBQUssU0FBTCxDQUFlLFNBQWYsRUFBekMsQ0FURDtBQVViLE9BQUksWUFBVSxLQUFLLFlBQUwsQ0FBa0IsUUFBbEIsQ0FBMkIsU0FBM0IsS0FBeUMsS0FBSyxTQUFMLENBQWUsU0FBZixFQUF6QyxDQVZEOztBQVliLFVBQU8sTUFBUCxDQUFjLEtBQUssT0FBTCxFQUFhLEVBQUMsc0JBQUQsRUFBYSxzQkFBYixFQUF5QixvQkFBekIsRUFBb0Msb0JBQXBDLEVBQTNCLEVBWmE7O0FBY2IsVUFBTyxLQUFLLEdBQUwsQ0FBUyxXQUFULENBQXFCLEtBQUssT0FBTCxFQUFjLEtBQUssWUFBTCxFQUFtQixLQUFLLFlBQUwsQ0FBN0QsQ0FkYTs7OztzQkFSSTs7QUFDakIsVUFBTyxLQUFLLE1BQUwsQ0FBWSxZQUFaLENBRFU7Ozs7c0JBSUs7QUFDdEIsVUFBTyxLQUFLLE1BQUwsQ0FBWSxpQkFBWixDQURlOzs7O1FBUEg7RUFBa0IsUUFBUSxPQUFSOztBQUFsQixVQTRCYixlQUFhOztBQTVCQSxVQThCYjs7Ozs7Ozs7Ozs7MkJBQ0csR0FBRTtBQUNWLE9BQUksVUFBUSxFQUFSLENBRE07QUFFVixPQUFJLFNBQU8sd0dBQXdHLEtBQXhHLENBQThHLEdBQTlHLENBQVAsQ0FGTTtBQUdWLFFBQUksSUFBSSxJQUFFLENBQUYsRUFBSSxJQUFFLEVBQUYsRUFBSyxHQUFqQixFQUFxQjtBQUNwQixRQUFHLEVBQUUsTUFBRixDQUFTLENBQVQsS0FBYSxHQUFiLEVBQ0YsUUFBUSxPQUFSLENBQWdCLE9BQU8sQ0FBUCxDQUFoQixFQUREO0lBREQ7QUFJQSxRQUFLLE1BQUwsQ0FBWSxZQUFaLEdBQXlCLE9BQXpCLENBUFU7Ozs7O0VBRHlCLGdCQUFNLGNBQU47O2tCQTlCakI7OztBQTJDckIsU0FBUyxZQUFULENBQXNCLE9BQXRCLEVBQStCLElBQS9CLEVBQXFDLEdBQXJDLEVBQTBEO0tBQWhCLHFFQUFhLGtCQUFHOztBQUN6RCxLQUFHLENBQUMsT0FBRCxFQUFVLE9BQWI7O0FBRUEsY0FBYSxPQUFiLENBQXFCO1NBQUcsYUFBYSxVQUFRLEdBQVIsR0FBWSxDQUFaLEVBQWUsSUFBNUIsRUFBa0MsR0FBbEM7RUFBSCxDQUFyQixDQUh5RDs7QUFLekQsS0FBRyxLQUFLLFVBQUwsRUFDRixJQUFJLFdBQUosQ0FBZ0IsSUFBaEIsRUFBc0IsVUFBUSxZQUFSLENBQXRCLENBREQsS0FHQyxJQUFJLFdBQUosQ0FBZ0IsSUFBaEIsRUFBc0IsVUFBUSxhQUFSLENBQXRCLENBSEQ7O0FBS0EsS0FBRyxLQUFLLFVBQUwsRUFDRixJQUFJLFdBQUosQ0FBZ0IsSUFBaEIsRUFBc0IsVUFBUSxZQUFSLENBQXRCLENBREQsS0FHQyxJQUFJLFdBQUosQ0FBZ0IsSUFBaEIsRUFBc0IsVUFBUSxhQUFSLENBQXRCLENBSEQ7O0FBS0EsS0FBRyxLQUFLLFNBQUwsRUFDRixJQUFJLFdBQUosQ0FBZ0IsSUFBaEIsRUFBc0IsVUFBUSxXQUFSLENBQXRCLENBREQ7O0FBR0EsS0FBRyxLQUFLLFNBQUwsRUFDRixJQUFJLFdBQUosQ0FBZ0IsSUFBaEIsRUFBc0IsVUFBUSxXQUFSLENBQXRCLENBREQ7O0FBR0EsS0FBSSxXQUFKLENBQWdCLElBQWhCLEVBQXNCLFVBQVEsUUFBUixDQUF0QixDQXJCeUQ7Q0FBMUQiLCJmaWxlIjoidGFibGUtY2VsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZSBmcm9tICcuL3N0eWxlL3RhYmxlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGVDZWxsIGV4dGVuZHMgcmVxdWlyZShcIi4vYW55XCIpe1xyXG5cdHRhZz1cInRhYmxlLWNlbGxcIlxyXG5cclxuXHRnZXQgdGFibGVTdHlsZUlkKCl7Ly9hc3NlcnQgdGhpcy5wYXJlbnQgaXMgYSBjZWxsXHJcblx0XHRyZXR1cm4gdGhpcy5wYXJlbnQudGFibGVTdHlsZUlkXHJcblx0fVxyXG5cclxuXHRnZXQgdGFibGVOYW1lZFN0eWxlSWQoKXtcclxuXHRcdHJldHVybiB0aGlzLnBhcmVudC50YWJsZU5hbWVkU3R5bGVJZFxyXG5cdH1cclxuXHJcblx0Y29udmVydFN0eWxlKCl7XHJcblx0XHR0aGlzLnRhcmdldFN0eWxlcz1bXVxyXG5cdFx0bGV0IGRpcmVjdFN0eWxlPXRoaXMud29yZE1vZGVsLmdldERpcmVjdFN0eWxlKClcclxuXHRcdC8vZGlyZWN0IHN0eWxlXHJcblx0XHRpZihkaXJlY3RTdHlsZSlcclxuXHRcdFx0ZGlyZWN0U3R5bGUucGFyc2UoW25ldyB0aGlzLmNvbnN0cnVjdG9yLlN0eWxlUHJvcGVydGllcyh0aGlzLmRvYy5jcmVhdGVTdHlsZSh0aGlzLmNvbnRlbnQpLCB0aGlzKV0pXHJcblxyXG5cdFx0bGV0IGlzRmlyc3RSb3c9dGhpcy50YXJnZXRTdHlsZXMuaW5jbHVkZXMoXCJmaXJzdFJvd1wiKSB8fCB0aGlzLndvcmRNb2RlbC5pc0ZpcnN0Um93KClcclxuXHRcdGxldCBpc0ZpcnN0Q29sPXRoaXMudGFyZ2V0U3R5bGVzLmluY2x1ZGVzKFwiZmlyc3RDb2xcIikgfHwgdGhpcy53b3JkTW9kZWwuaXNGaXJzdENvbCgpXHJcblx0XHRsZXQgaXNMYXN0Um93PXRoaXMudGFyZ2V0U3R5bGVzLmluY2x1ZGVzKFwibGFzdFJvd1wiKSB8fCB0aGlzLndvcmRNb2RlbC5pc0xhc3RSb3coKVxyXG5cdFx0bGV0IGlzTGFzdENvbD10aGlzLnRhcmdldFN0eWxlcy5pbmNsdWRlcyhcImxhc3RDb2xcIikgfHwgdGhpcy53b3JkTW9kZWwuaXNMYXN0Q29sKClcclxuXHJcblx0XHRPYmplY3QuYXNzaWduKHRoaXMuY29udGVudCx7aXNGaXJzdFJvdywgaXNGaXJzdENvbCwgaXNMYXN0Um93LCBpc0xhc3RDb2x9KVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcy5kb2MuY3JlYXRlU3R5bGUodGhpcy5jb250ZW50LCB0aGlzLnRhYmxlU3R5bGVJZCwgdGhpcy50YXJnZXRTdHlsZXMpXHJcblx0fVxyXG5cdFxyXG5cdHN0YXRpYyBpbmhlcml0U3R5bGU9aW5oZXJpdFN0eWxlXHJcblxyXG5cdHN0YXRpYyBTdHlsZVByb3BlcnRpZXM9Y2xhc3MgZXh0ZW5kcyBTdHlsZS5DZWxsUHJvcGVydGllc3tcclxuXHRcdGNuZlN0eWxlKHgpe1xyXG5cdFx0XHR2YXIgdGFyZ2V0cz1bXVxyXG5cdFx0XHR2YXIgc3R5bGVzPSdud0NlbGwsbmVDZWxsLHN3Q2VsbCxzZUNlbGwsZmlyc3RSb3csbGFzdFJvdyxmaXJzdENvbCxsYXN0Q29sLGJhbmQxVmVydCxiYW5kMlZlcnQsYmFuZDFIb3J6LGJhbmQySG9yeicuc3BsaXQoJywnKVxyXG5cdFx0XHRmb3IodmFyIGk9MDtpPDEyO2krKyl7XHJcblx0XHRcdFx0aWYoeC5jaGFyQXQoaSk9PScxJylcclxuXHRcdFx0XHRcdHRhcmdldHMudW5zaGlmdChzdHlsZXNbaV0pXHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5wYXJlbnQudGFyZ2V0U3R5bGVzPXRhcmdldHNcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaGVyaXRTdHlsZShzdHlsZUlkLCBjZWxsLCBkb2MsIHRhcmdldFN0eWxlcz1bXSl7XHJcblx0aWYoIXN0eWxlSWQpIHJldHVyblxyXG5cdFxyXG5cdHRhcmdldFN0eWxlcy5mb3JFYWNoKGE9PmluaGVyaXRTdHlsZShzdHlsZUlkK1wiLlwiK2EsIGNlbGwsIGRvYykpXHJcblx0XHJcblx0aWYoY2VsbC5pc0ZpcnN0Um93KVxyXG5cdFx0ZG9jLmNyZWF0ZVN0eWxlKGNlbGwsIHN0eWxlSWQrXCIuKmZpcnN0Um93XCIpXHJcblx0ZWxzZVxyXG5cdFx0ZG9jLmNyZWF0ZVN0eWxlKGNlbGwsIHN0eWxlSWQrXCIuKiFmaXJzdFJvd1wiKVxyXG5cclxuXHRpZihjZWxsLmlzRmlyc3RDb2wpXHJcblx0XHRkb2MuY3JlYXRlU3R5bGUoY2VsbCwgc3R5bGVJZCtcIi4qZmlyc3RDb2xcIilcclxuXHRlbHNlXHJcblx0XHRkb2MuY3JlYXRlU3R5bGUoY2VsbCwgc3R5bGVJZCtcIi4qIWZpcnN0Q29sXCIpXHJcblxyXG5cdGlmKGNlbGwuaXNMYXN0Um93KVxyXG5cdFx0ZG9jLmNyZWF0ZVN0eWxlKGNlbGwsIHN0eWxlSWQrXCIuKmxhc3RSb3dcIilcclxuXHJcblx0aWYoY2VsbC5pc0xhc3RDb2wpXHJcblx0XHRkb2MuY3JlYXRlU3R5bGUoY2VsbCwgc3R5bGVJZCtcIi4qbGFzdENvbFwiKVxyXG5cdFxyXG5cdGRvYy5jcmVhdGVTdHlsZShjZWxsLCBzdHlsZUlkK1wiLipjZWxsXCIpXHJcbn1cclxuIl19