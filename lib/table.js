"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _table = require("./style/table");

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_require) {
	_inherits(Table, _require);

	function Table() {
		var _Object$getPrototypeO;

		var _temp, _this, _ret;

		_classCallCheck(this, Table);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Table)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.tag = "table", _this.stylable = true, _temp), _possibleConstructorReturn(_this, _ret);
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

			return _get(Object.getPrototypeOf(Table.prototype), "convertStyle", this).call(this, table);
		}
	}]);

	return Table;
}(require("./any"));

Table.StyleProperties = _table2.default.Properties;
exports.default = Table;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90YWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQjs7Ozs7Ozs7Ozs7Ozs7aU1BQ3BCLE1BQUksZUFDSixXQUFTOzs7Y0FGVzs7aUNBS047QUFDYixPQUFJLFFBQU0sS0FBSyxTQUFMLENBQWUsV0FBZixFQUFOLENBRFM7QUFFYixRQUFJLElBQUksSUFBRSxDQUFGLEVBQUksT0FBSyxNQUFNLElBQU4sRUFBVyxNQUFJLE1BQU0sR0FBTixFQUFVLE1BQUksS0FBSyxNQUFMLEVBQVksSUFBRSxHQUFGLEVBQU0sR0FBaEUsRUFBb0U7QUFDbkUsUUFBSSxTQUFPLEtBQUssR0FBTCxDQUFTLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBUCxDQUQrRDtBQUVuRSxTQUFLLE9BQUwsQ0FBYSxXQUFiLENBQXlCLE1BQXpCLEVBRm1FO0FBR25FLFdBQU8sWUFBUCxDQUFvQixjQUFwQixFQUFzQyxLQUFLLENBQUwsSUFBUSxHQUFSLEdBQVksR0FBWixNQUF0QyxFQUhtRTtJQUFwRTtBQUtBLE9BQUksUUFBTSxLQUFLLEdBQUwsQ0FBUyxhQUFULENBQXVCLFlBQXZCLENBQU4sQ0FQUztBQVFiLFFBQUssT0FBTCxDQUFhLFdBQWIsQ0FBeUIsS0FBekIsRUFSYTs7QUFVYixPQUFJLFFBQU0sS0FBSyxPQUFMLENBVkc7QUFXYixRQUFLLE9BQUwsR0FBYSxLQUFiLENBWGE7QUFZYixTQUFNLFlBQU4sQ0FBbUIsY0FBbkIsRUFBa0MsT0FBbEMsRUFaYTtBQWFiLFNBQU0sWUFBTixDQUFtQixPQUFuQixFQUEyQixNQUEzQixFQWJhOztBQWViLHFDQXBCbUIsbURBb0JPLE1BQTFCLENBZmE7Ozs7UUFMTTtFQUFjLFFBQVEsT0FBUjs7QUFBZCxNQUdiLGtCQUFnQixnQkFBTSxVQUFOO2tCQUhIIiwiZmlsZSI6InRhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlIGZyb20gXCIuL3N0eWxlL3RhYmxlXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlIGV4dGVuZHMgcmVxdWlyZShcIi4vYW55XCIpe1xyXG5cdHRhZz1cInRhYmxlXCJcclxuXHRzdHlsYWJsZT10cnVlXHJcblx0c3RhdGljIFN0eWxlUHJvcGVydGllcz1TdHlsZS5Qcm9wZXJ0aWVzXHJcblx0XHJcblx0Y29udmVydFN0eWxlKCl7XHJcblx0XHR2YXIgd2lkdGg9dGhpcy53b3JkTW9kZWwuZ2V0Q29sV2lkdGgoKVxyXG5cdFx0Zm9yKHZhciBpPTAsY29scz13aWR0aC5jb2xzLHN1bT13aWR0aC5zdW0sbGVuPWNvbHMubGVuZ3RoO2k8bGVuO2krKyl7XHJcblx0XHRcdGxldCBjb2x1bW49dGhpcy5kb2MuY3JlYXRlRWxlbWVudChcInRhYmxlLWNvbHVtblwiKVxyXG5cdFx0XHR0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQoY29sdW1uKVxyXG5cdFx0XHRjb2x1bW4uc2V0QXR0cmlidXRlKFwiY29sdW1uLXdpZHRoXCIsYCR7Y29sc1tpXSoxMDAvc3VtfSVgKVxyXG5cdFx0fVxyXG5cdFx0dmFyIHRib2R5PXRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ3RhYmxlLWJvZHknKVxyXG5cdFx0dGhpcy5jb250ZW50LmFwcGVuZENoaWxkKHRib2R5KVxyXG5cdFx0XHJcblx0XHR2YXIgdGFibGU9dGhpcy5jb250ZW50XHJcblx0XHR0aGlzLmNvbnRlbnQ9dGJvZHlcclxuXHRcdHRhYmxlLnNldEF0dHJpYnV0ZShcInRhYmxlLWxheW91dFwiLFwiZml4ZWRcIilcclxuXHRcdHRhYmxlLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsXCIxMDAlXCIpXHJcblx0XHRcclxuXHRcdHJldHVybiBzdXBlci5jb252ZXJ0U3R5bGUodGFibGUpXHJcblx0fVxyXG59Il19