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

		//stylable=true

		value: function convertStyle() {
			var container = this.doc.createElement("block");
			this.content.appendChild(container);
			this.content = container;
			_get(Object.getPrototypeOf(TableCell.prototype), "convertStyle", this).call(this, container.parentNode);
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
			x.left && (this.style.borderLeft = this._border(x.left));
			x.right && (this.style.borderRight = this._border(x.right));
			x.top && (this.style.borderTop = this._border(x.top));
			x.bottom && (this.style.borderBottom = this._border(x.bottom));
		}
	}, {
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
}(_table2.default.CellProperties);

exports.default = TableCell;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90YWJsZS1jZWxsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCOzs7Ozs7Ozs7Ozs7OztxTUFDcEIsTUFBSTs7O2NBRGdCOzs7OztpQ0FJTjtBQUNiLE9BQUksWUFBVSxLQUFLLEdBQUwsQ0FBUyxhQUFULENBQXVCLE9BQXZCLENBQVYsQ0FEUztBQUViLFFBQUssT0FBTCxDQUFhLFdBQWIsQ0FBeUIsU0FBekIsRUFGYTtBQUdiLFFBQUssT0FBTCxHQUFhLFNBQWIsQ0FIYTtBQUliLDhCQVJtQix1REFRQSxVQUFVLFVBQVYsQ0FBbkIsQ0FKYTs7OztRQUpNO0VBQWtCLFFBQVEsT0FBUjs7QUFBbEIsVUFXYjs7Ozs7Ozs7Ozs7NEJBQ0ksR0FBRTtBQUNYLEtBQUUsSUFBRixLQUFXLEtBQUssS0FBTCxDQUFXLFVBQVgsR0FBc0IsS0FBSyxPQUFMLENBQWEsRUFBRSxJQUFGLENBQW5DLENBQVgsQ0FEVztBQUVYLEtBQUUsS0FBRixLQUFZLEtBQUssS0FBTCxDQUFXLFdBQVgsR0FBdUIsS0FBSyxPQUFMLENBQWEsRUFBRSxLQUFGLENBQXBDLENBQVosQ0FGVztBQUdYLEtBQUUsR0FBRixLQUFVLEtBQUssS0FBTCxDQUFXLFNBQVgsR0FBcUIsS0FBSyxPQUFMLENBQWEsRUFBRSxHQUFGLENBQWxDLENBQVYsQ0FIVztBQUlYLEtBQUUsTUFBRixLQUFhLEtBQUssS0FBTCxDQUFXLFlBQVgsR0FBd0IsS0FBSyxPQUFMLENBQWEsRUFBRSxNQUFGLENBQXJDLENBQWIsQ0FKVzs7OzsyQkFNSCxHQUFFO0FBQ1YsT0FBSSxRQUFNLEVBQU47T0FBVSxxQkFBbUIsZ0JBQU0sU0FBTixDQUFnQixrQkFBaEI7T0FBb0MsUUFBTSxDQUFDLENBQUQ7T0FBSSxDQUEvRSxDQURVO0FBRVYsUUFBSSxJQUFJLElBQUUsQ0FBRixFQUFJLElBQUUsRUFBRixFQUFLLEdBQWpCLEVBQXFCO0FBQ3BCLFFBQUcsRUFBRSxNQUFGLENBQVMsQ0FBVCxLQUFhLEdBQWIsRUFBaUI7QUFDbkIsV0FBTSxJQUFOLENBQVcsSUFBRSxnQkFBTSxXQUFOLENBQWtCLENBQWxCLENBQUYsQ0FBWCxDQURtQjtBQUVuQixTQUFHLENBQUMsSUFBRSxtQkFBbUIsT0FBbkIsQ0FBMkIsQ0FBM0IsQ0FBRixDQUFELEdBQWtDLEtBQWxDLEVBQ0YsUUFBTSxDQUFOLENBREQ7S0FGRDtJQUREO0FBT0EsU0FBTSxNQUFOLElBQWdCLEdBQUcsUUFBSCxDQUFZLEtBQUssTUFBTCxDQUFZLE9BQVosRUFBb0IsTUFBTSxJQUFOLENBQVcsR0FBWCxDQUFoQyxDQUFoQixDQVRVO0FBVVYsUUFBSSxJQUFJLElBQUUsQ0FBRixFQUFJLElBQUUsS0FBRixFQUFRLEdBQXBCO0FBQ0MsU0FBSyxNQUFMLENBQVksT0FBWixDQUFvQixZQUFwQixDQUFpQyxNQUFJLENBQUosRUFBTSxDQUF2QztJQUREOzs7OztFQWpCbUMsZ0JBQU0sY0FBTjs7a0JBWGpCIiwiZmlsZSI6InRhYmxlLWNlbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGUgZnJvbSAnLi9zdHlsZS90YWJsZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlQ2VsbCBleHRlbmRzIHJlcXVpcmUoXCIuL2FueVwiKXtcclxuXHR0YWc9XCJ0YWJsZS1jZWxsXCJcclxuXHQvL3N0eWxhYmxlPXRydWVcclxuXHRcclxuXHRjb252ZXJ0U3R5bGUoKXtcclxuXHRcdGxldCBjb250YWluZXI9dGhpcy5kb2MuY3JlYXRlRWxlbWVudChcImJsb2NrXCIpXHJcblx0XHR0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxyXG5cdFx0dGhpcy5jb250ZW50PWNvbnRhaW5lclxyXG5cdFx0c3VwZXIuY29udmVydFN0eWxlKGNvbnRhaW5lci5wYXJlbnROb2RlKVxyXG5cdH1cclxuXHRcclxuXHRzdGF0aWMgU3R5bGVQcm9wZXJ0aWVzPWNsYXNzIGV4dGVuZHMgU3R5bGUuQ2VsbFByb3BlcnRpZXN7XHJcblx0XHR0Y0JvcmRlcnMoeCl7XHJcblx0XHRcdHgubGVmdCAmJiAodGhpcy5zdHlsZS5ib3JkZXJMZWZ0PXRoaXMuX2JvcmRlcih4LmxlZnQpKVxyXG5cdFx0XHR4LnJpZ2h0ICYmICh0aGlzLnN0eWxlLmJvcmRlclJpZ2h0PXRoaXMuX2JvcmRlcih4LnJpZ2h0KSlcclxuXHRcdFx0eC50b3AgJiYgKHRoaXMuc3R5bGUuYm9yZGVyVG9wPXRoaXMuX2JvcmRlcih4LnRvcCkpXHJcblx0XHRcdHguYm90dG9tICYmICh0aGlzLnN0eWxlLmJvcmRlckJvdHRvbT10aGlzLl9ib3JkZXIoeC5ib3R0b20pKVxyXG5cdFx0fVxyXG5cdFx0Y25mU3R5bGUoeCl7XHJcblx0XHRcdHZhciBuYW1lcz1bXSwgUHJpb3JpdGl6aWVkU3R5bGVzPVN0eWxlLnByb3RvdHlwZS5Qcmlvcml0aXppZWRTdHlsZXMsIGxldmVsPS0xLCB0XHJcblx0XHRcdGZvcih2YXIgaT0wO2k8MTI7aSsrKXtcclxuXHRcdFx0XHRpZih4LmNoYXJBdChpKT09JzEnKXtcclxuXHRcdFx0XHRcdG5hbWVzLnB1c2godD1TdHlsZS5UYWJsZVN0eWxlc1tpXSlcclxuXHRcdFx0XHRcdGlmKCh0PVByaW9yaXRpemllZFN0eWxlcy5pbmRleE9mKHQpKT5sZXZlbClcclxuXHRcdFx0XHRcdFx0bGV2ZWw9dFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRuYW1lcy5sZW5ndGggJiYgVGQuYWRkQ2xhc3ModGhpcy5wYXJlbnQuY29udGVudCxuYW1lcy5qb2luKCcgJykpO1xyXG5cdFx0XHRmb3IodmFyIGk9MDtpPGxldmVsO2krKylcclxuXHRcdFx0XHR0aGlzLnBhcmVudC5jb250ZW50LnNldEF0dHJpYnV0ZSgneCcraSwxKVxyXG5cdFx0fVxyXG5cdH1cclxufSJdfQ==