'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _converter = require('./converter');

var _converter2 = _interopRequireDefault(_converter);

var _paragraph = require('./paragraph');

var _paragraph2 = _interopRequireDefault(_paragraph);

var _inline = require('./inline');

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
the priority of css rule should be aligned with word
*/

var gRow = /row|horz/i;

var Table = function (_Style) {
	_inherits(Table, _Style);

	function Table() {
		_classCallCheck(this, Table);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Table).apply(this, arguments));

		_this.target = _this.wordModel.getTarget();
		return _this;
	}

	_createClass(Table, [{
		key: '_getPropertiesConverter',
		value: function _getPropertiesConverter(category) {
			if (this[category]) return this[category];

			switch (category) {
				case 'table':
					return this[category] = new this.constructor.Properties(this.style, this);
				case 'inline':
					//0012
					return this[category] = new _inline2.default.Properties(this.doc.createStyle(this.styleId + ".inline"), this);
				case 'paragraph':
					//0012
					return this[category] = new _paragraph2.default.Properties(this.doc.createStyle(this.styleId + ".block"), this);
				case 'cell':
					//0011
					return this[category] = new this.constructor.CellProperties(this.doc.createStyle(this.styleId + ".table-cell", this.styleId + ".*table-cell"), this);
			}
		}
	}, {
		key: 'getTableSelector',
		value: function getTableSelector() {
			return '.' + _converter2.default.asCssID(this.wordModel.id) + '>tbody';
		}
	}, {
		key: 'getPrioritizedSelector',
		value: function getPrioritizedSelector() {
			var selector = this.target;
			for (var level = this.PrioritiziedStyles.indexOf(this.target), i = 0; i < level; i++) {
				selector = selector + '[x' + i + ']';
			}return selector;
		}
	}, {
		key: 'PrioritiziedStyles',
		get: function get() {
			//low-->high
			return 'nwCell,neCell,swCell,seCell,firstRow,lastRow,firstCol,lastCol,band1Vert,band2Vert,band1Horz,band2Horz'.split(',').reverse();
		}
	}]);

	return Table;
}(_converter2.default);

exports.default = Table;


function findTable(cell) {
	return cell.parentNode.parentNode;
}

function findRow(cell) {
	return cell.parentNode;
}

function is(table, row, cell, condition) {
	return Array.from(table.querySelectorAll(condition)).indexOf(cell) != -1;
}

var Priorities = function Priorities() {
	_classCallCheck(this, Priorities);
};

Table.Properties = function (_Style$Properties) {
	_inherits(Properties, _Style$Properties);

	function Properties() {
		_classCallCheck(this, Properties);

		var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Properties).apply(this, arguments));

		_this2.priorities = new Priorities();
		return _this2;
	}

	_createClass(Properties, [{
		key: 'applyOn',
		value: function applyOn(cell) {
			var _this3 = this;

			var table = findTable(cell),
			    row = findRow(cell);
			'left,right,top,bottom'.split(",").forEach(function (a) {
				var side = 'border-' + a;
				if (_this3.priorities.has(side)) {
					_this3.priorities.get(side).forEach(function (rule) {
						if (!cell.hasAttribute(side)) if (is(table, row, cell, rule.condition)) cell.setAttribute(side, rule.value);
					});
				}
			});
		}
	}, {
		key: 'cellStyle',
		value: function cellStyle(condition, borderSide, value, priority) {
			this.priorities[borderSide][priority].push({ condition: condition, value: value });
			return this.doc.createStyle(this.parent.styleId + ".*table-cell");
		}
	}, {
		key: 'tblBorders',
		value: function tblBorders(x) {
			x.left && this.cellStyle('tr>td:first-child', 'border-left', this._border(x.left), 12); //0012
			x.right && this.cellStyle('tr>td:last-child', 'border-right', this._border(x.right), 12); //0012
			x.top && this.cellStyle('tr:first-of-type>td', 'border-top', this._border(x.top), 12); //0012
			x.bottom && this.cellStyle('tr:last-of-type>td', 'border-bottom', this._border(x.bottom), 12); //0012

			if (x.insideV) {
				var css = this._border(x.insideV);
				this.cellStyle('tr>td:not(:first-child):not(:last-child)', 'border-right', css, 22); //0022
				this.cellStyle('tr>td:not(:first-child):not(:last-child)', 'border-left', css, 22); //0022

				//@todo: are they needed?
				this.cellStyle('tr>td:last-child', 'border-left', css, 12); //0012
				this.cellStyle('tr>td:first-child', 'border-right', css, 12); //0012
			}

			if (x.insideH) {
				var css = this._border(x.insideH);
				this.cellStyle('tr:not(:first-of-type):not(:last-of-type)>td', 'border-Top', css, 22); //0022
				this.cellStyle('tr:not(:first-of-type):not(:last-of-type)>td', 'border-Bottom', css, 22); //0022

				//@todo: are they needed?
				this.cellStyle('tr:last-of-type>td', 'border-left', css, 12); //0012
				this.cellStyle('tr:first-of-type>td', 'border-right', css, 12); //0012
			}
		}
	}, {
		key: 'tblCellMar',
		value: function tblCellMar(x) {
			for (var i in x) {
				this.cellStyle('tr>td', 'padding' + this.upperFirst(i), (x[i] < 1 && x[i] > 0 ? 1 : x[i]) + 'pt', 2);
			} //0002
		}
	}, {
		key: 'tblInd',
		value: function tblInd(x) {
			x && this.set("margin-left", x + 'pt');
		}
	}, {
		key: 'tblW',
		value: function tblW(x) {
			x && x != 'auto' && this.set("width", x);
		}
	}]);

	return Properties;
}(_converter2.default.Properties);

Table.RowProperties = function (_Style$Properties2) {
	_inherits(RowProperties, _Style$Properties2);

	function RowProperties(style, parent) {
		_classCallCheck(this, RowProperties);

		var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(RowProperties).apply(this, arguments));

		_this4.parent = parent;
		_this4.doc = parent.doc;
		return _this4;
	}

	return RowProperties;
}(_converter2.default.Properties);

Table.CellProperties = function (_Style$Properties3) {
	_inherits(CellProperties, _Style$Properties3);

	function CellProperties(style, parent) {
		_classCallCheck(this, CellProperties);

		var _this5 = _possibleConstructorReturn(this, Object.getPrototypeOf(CellProperties).apply(this, arguments));

		_this5.parent = parent;
		_this5.doc = parent.doc;
		return _this5;
	}

	_createClass(CellProperties, [{
		key: 'tcBorders',
		value: function tcBorders(x) {
			var tableSelector = this.parent.getTableSelector(),
			    selector = this.parent.getPrioritizedSelector();
			switch (this.parent.target) {
				case 'firstRow':
				case 'lastRow':
				case 'band1Horz':
				case 'band2Horz':
					var style;
					x.left && (this.doc.createStyle(tableSelector + '>.' + selector + '>td:first-child').borderLeft = this._border(x.left)); //0021
					x.right && (this.doc.createStyle(tableSelector + '>.' + selector + '>td:last-child').borderRight = this._border(x.right)); //0021
					x.top && (this.doc.createStyle(tableSelector + '>.' + selector + '>td').borderTop = this._border(x.top)); //0011
					x.bottom && (this.doc.createStyle(tableSelector + '>.' + selector + '>td').borderBottom = this._border(x.bottom)); ////0011
					x.insideV && ((style = this.doc.createStyle(tableSelector + '>.' + selector + '>td:not(:first-child):not(:last-child)')).borderRight = style.borderLeft = this._border(x.insideV)); //0031
					break;
				case 'firstCol':
				case 'lastCol':
				case 'band2Vert':
				case 'band1Vert':
					x.top && (this.doc.createStyle(tableSelector + '>tr:first-of-type>.' + selector).borderTop = this._border(x.top)); //0021
					x.left && (this.doc.createStyle(tableSelector + '>tr:first-of-type>.' + selector).borderLeft = this._border(x.left)); //0021
					x.right && (this.doc.createStyle(tableSelector + '>tr:first-of-type>.' + selector).borderRight = this._border(x.right)); //0021

					x.bottom && (this.doc.createStyle(tableSelector + '>tr:last-of-type>.' + selector).borderBottom = this._border(x.bottom)); //0021
					x.left && (this.doc.createStyle(tableSelector + '>tr:last-of-type>.' + selector).borderLeft = this._border(x.left)); //0021
					x.right && (this.doc.createStyle(tableSelector + '>tr:last-of-type>.' + selector).borderRight = this._border(x.right)); //0021

					x.left && (this.doc.createStyle(tableSelector + '>tr:not(:first-of-type):not(:last-of-type)>.' + selector).borderLeft = this._border(x.left)); //0031
					x.right && (this.doc.createStyle(tableSelector + '>tr:not(:first-of-type):not(:last-of-type)>.' + selector).borderRight = this._border(x.right)); //0031
					break;
				default:
					x.left && (this.doc.createStyle(tableSelector + '>tr>.' + selector).borderLeft = this._border(x.left)); //0011
					x.right && (this.doc.createStyle(tableSelector + '>tr>.' + selector).borderRight = this._border(x.right)); //0011
					x.top && (this.doc.createStyle(tableSelector + '>tr>.' + selector).borderTop = this._border(x.top)); //0011
					x.bottom && (this.doc.createStyle(tableSelector + '>tr>.' + selector).borderBottom = this._border(x.bottom)); //0011
			}
		}
	}, {
		key: 'shd',
		value: function shd(x) {
			this.style.backgroundColor = x;
		}
	}, {
		key: 'gridSpan',
		value: function gridSpan(x) {
			this.parent.content.setAttribute('colspan', x);
		}
	}]);

	return CellProperties;
}(_converter2.default.Properties);

Table.TableStyles = 'firstRow,lastRow,firstCol,lastCol,band1Vert,band2Vert,band1Horz,band2Horz,neCell,nwCell,seCell,swCell'.split(',');
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS90YWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLElBQUksT0FBSyxXQUFMOztJQUNpQjs7O0FBQ3BCLFVBRG9CLEtBQ3BCLEdBQWE7d0JBRE8sT0FDUDs7cUVBRE8sbUJBRVYsWUFERzs7QUFFWixRQUFLLE1BQUwsR0FBWSxNQUFLLFNBQUwsQ0FBZSxTQUFmLEVBQVosQ0FGWTs7RUFBYjs7Y0FEb0I7OzBDQVNJLFVBQVM7QUFDaEMsT0FBRyxLQUFLLFFBQUwsQ0FBSCxFQUNDLE9BQU8sS0FBSyxRQUFMLENBQVAsQ0FERDs7QUFHQSxXQUFPLFFBQVA7QUFDQSxTQUFLLE9BQUw7QUFDQyxZQUFPLEtBQUssUUFBTCxJQUFlLElBQUksS0FBSyxXQUFMLENBQWlCLFVBQWpCLENBQTRCLEtBQUssS0FBTCxFQUFXLElBQTNDLENBQWYsQ0FEUjtBQURBLFNBR0ssUUFBTDs7QUFDQyxZQUFPLEtBQUssUUFBTCxJQUFlLElBQUksaUJBQU8sVUFBUCxDQUFrQixLQUFLLEdBQUwsQ0FBUyxXQUFULENBQXFCLEtBQUssT0FBTCxHQUFhLFNBQWIsQ0FBM0MsRUFBbUUsSUFBbkUsQ0FBZixDQURSO0FBSEEsU0FLSyxXQUFMOztBQUNDLFlBQU8sS0FBSyxRQUFMLElBQWUsSUFBSSxvQkFBVSxVQUFWLENBQXFCLEtBQUssR0FBTCxDQUFTLFdBQVQsQ0FBcUIsS0FBSyxPQUFMLEdBQWEsUUFBYixDQUE5QyxFQUFxRSxJQUFyRSxDQUFmLENBRFI7QUFMQSxTQU9LLE1BQUw7O0FBQ0MsWUFBTyxLQUFLLFFBQUwsSUFBZSxJQUFJLEtBQUssV0FBTCxDQUFpQixjQUFqQixDQUFnQyxLQUFLLEdBQUwsQ0FBUyxXQUFULENBQXFCLEtBQUssT0FBTCxHQUFhLGFBQWIsRUFBNEIsS0FBSyxPQUFMLEdBQWEsY0FBYixDQUFyRixFQUFrSCxJQUFsSCxDQUFmLENBRFI7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Q1YsUUFBSyxNQUFMLENBQVksT0FBWixDQUFvQixZQUFwQixDQUFpQyxTQUFqQyxFQUEyQyxDQUEzQyxFQURVOzs7O1FBOUNlO0VBQXVCLG9CQUFNLFVBQU4sQ0FBbEQ7O0FBbURBLE1BQU0sV0FBTixHQUFrQix3R0FBd0csS0FBeEcsQ0FBOEcsR0FBOUcsQ0FBbEIiLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGUgZnJvbSAnLi9jb252ZXJ0ZXInXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gJy4vcGFyYWdyYXBoJ1xuaW1wb3J0IElubGluZSBmcm9tICcuL2lubGluZSdcblxuLypcbnRoZSBwcmlvcml0eSBvZiBjc3MgcnVsZSBzaG91bGQgYmUgYWxpZ25lZCB3aXRoIHdvcmRcbiovXG5cbnZhciBnUm93PS9yb3d8aG9yei9pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZSBleHRlbmRzIFN0eWxle1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cylcblx0XHR0aGlzLnRhcmdldD10aGlzLndvcmRNb2RlbC5nZXRUYXJnZXQoKVxuXHR9XG5cdGdldCBQcmlvcml0aXppZWRTdHlsZXMoKXsvL2xvdy0tPmhpZ2hcblx0XHRyZXR1cm4gJ253Q2VsbCxuZUNlbGwsc3dDZWxsLHNlQ2VsbCxmaXJzdFJvdyxsYXN0Um93LGZpcnN0Q29sLGxhc3RDb2wsYmFuZDFWZXJ0LGJhbmQyVmVydCxiYW5kMUhvcnosYmFuZDJIb3J6Jy5zcGxpdCgnLCcpLnJldmVyc2UoKVxuXHR9XG5cdFxuXHRfZ2V0UHJvcGVydGllc0NvbnZlcnRlcihjYXRlZ29yeSl7XG5cdFx0aWYodGhpc1tjYXRlZ29yeV0pXG5cdFx0XHRyZXR1cm4gdGhpc1tjYXRlZ29yeV1cblx0XHRcblx0XHRzd2l0Y2goY2F0ZWdvcnkpe1xuXHRcdGNhc2UgJ3RhYmxlJzpcblx0XHRcdHJldHVybiB0aGlzW2NhdGVnb3J5XT1uZXcgdGhpcy5jb25zdHJ1Y3Rvci5Qcm9wZXJ0aWVzKHRoaXMuc3R5bGUsdGhpcylcblx0XHRjYXNlICdpbmxpbmUnOi8vMDAxMlxuXHRcdFx0cmV0dXJuIHRoaXNbY2F0ZWdvcnldPW5ldyBJbmxpbmUuUHJvcGVydGllcyh0aGlzLmRvYy5jcmVhdGVTdHlsZSh0aGlzLnN0eWxlSWQrXCIuaW5saW5lXCIpLHRoaXMpXG5cdFx0Y2FzZSAncGFyYWdyYXBoJzovLzAwMTJcblx0XHRcdHJldHVybiB0aGlzW2NhdGVnb3J5XT1uZXcgUGFyYWdyYXBoLlByb3BlcnRpZXModGhpcy5kb2MuY3JlYXRlU3R5bGUodGhpcy5zdHlsZUlkK1wiLmJsb2NrXCIpLHRoaXMpXG5cdFx0Y2FzZSAnY2VsbCc6Ly8wMDExXG5cdFx0XHRyZXR1cm4gdGhpc1tjYXRlZ29yeV09bmV3IHRoaXMuY29uc3RydWN0b3IuQ2VsbFByb3BlcnRpZXModGhpcy5kb2MuY3JlYXRlU3R5bGUodGhpcy5zdHlsZUlkK1wiLnRhYmxlLWNlbGxcIiwgdGhpcy5zdHlsZUlkK1wiLip0YWJsZS1jZWxsXCIpLHRoaXMpXG5cdFx0fVxuXHR9XG5cdFxuXHRnZXRUYWJsZVNlbGVjdG9yKCl7XG5cdFx0cmV0dXJuICcuJytTdHlsZS5hc0Nzc0lEKHRoaXMud29yZE1vZGVsLmlkKSsnPnRib2R5J1xuXHR9XG5cdFxuXHRnZXRQcmlvcml0aXplZFNlbGVjdG9yKCl7XG5cdFx0dmFyIHNlbGVjdG9yPXRoaXMudGFyZ2V0XG5cdFx0Zm9yKHZhciBsZXZlbD10aGlzLlByaW9yaXRpemllZFN0eWxlcy5pbmRleE9mKHRoaXMudGFyZ2V0KSxpPTA7aTxsZXZlbDtpKyspXG5cdFx0XHRzZWxlY3Rvcj1zZWxlY3RvcisnW3gnK2krJ10nO1xuXHRcdHJldHVybiBzZWxlY3RvclxuXHR9XG59XG5cbmZ1bmN0aW9uIGZpbmRUYWJsZShjZWxsKXtcblx0cmV0dXJuIGNlbGwucGFyZW50Tm9kZS5wYXJlbnROb2RlXG59XG5cbmZ1bmN0aW9uIGZpbmRSb3coY2VsbCl7XG5cdHJldHVybiBjZWxsLnBhcmVudE5vZGVcbn1cblxuZnVuY3Rpb24gaXModGFibGUscm93LCBjZWxsLCBjb25kaXRpb24pe1xuXHRyZXR1cm4gQXJyYXkuZnJvbSh0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKGNvbmRpdGlvbikpLmluZGV4T2YoY2VsbCkhPS0xXG59XG5cbmNsYXNzIFByaW9yaXRpZXN7XG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0XHRcblx0fVxuXHRcbn1cblx0XG5UYWJsZS5Qcm9wZXJ0aWVzPWNsYXNzIFByb3BlcnRpZXMgZXh0ZW5kcyBTdHlsZS5Qcm9wZXJ0aWVze1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cylcblx0XHR0aGlzLnByaW9yaXRpZXM9bmV3IFByaW9yaXRpZXMoKVxuXHR9XG5cdGFwcGx5T24oY2VsbCl7XG5cdFx0dmFyIHRhYmxlPWZpbmRUYWJsZShjZWxsKSwgcm93PWZpbmRSb3coY2VsbClcblx0XHQnbGVmdCxyaWdodCx0b3AsYm90dG9tJy5zcGxpdChcIixcIikuZm9yRWFjaChhPT57XG5cdFx0XHRsZXQgc2lkZT1gYm9yZGVyLSR7YX1gXG5cdFx0XHRpZih0aGlzLnByaW9yaXRpZXMuaGFzKHNpZGUpKXtcblx0XHRcdFx0dGhpcy5wcmlvcml0aWVzLmdldChzaWRlKS5mb3JFYWNoKHJ1bGU9Pntcblx0XHRcdFx0XHRpZighY2VsbC5oYXNBdHRyaWJ1dGUoc2lkZSkpXG5cdFx0XHRcdFx0XHRpZihpcyh0YWJsZSwgcm93LCBjZWxsLCBydWxlLmNvbmRpdGlvbikpXG5cdFx0XHRcdFx0XHRcdGNlbGwuc2V0QXR0cmlidXRlKHNpZGUscnVsZS52YWx1ZSlcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cdFxuXHRcblx0Y2VsbFN0eWxlKGNvbmRpdGlvbiwgYm9yZGVyU2lkZSwgdmFsdWUsIHByaW9yaXR5KXtcblx0XHR0aGlzLnByaW9yaXRpZXNbYm9yZGVyU2lkZV1bcHJpb3JpdHldLnB1c2goe2NvbmRpdGlvbix2YWx1ZX0pXG5cdFx0cmV0dXJuIHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRoaXMucGFyZW50LnN0eWxlSWQrXCIuKnRhYmxlLWNlbGxcIilcblx0fVxuXHR0YmxCb3JkZXJzKHgpe1xuXHRcdHgubGVmdCAmJiB0aGlzLmNlbGxTdHlsZSgndHI+dGQ6Zmlyc3QtY2hpbGQnLCdib3JkZXItbGVmdCcsdGhpcy5fYm9yZGVyKHgubGVmdCksMTIpIC8vMDAxMlxuXHRcdHgucmlnaHQgJiYgdGhpcy5jZWxsU3R5bGUoJ3RyPnRkOmxhc3QtY2hpbGQnLCdib3JkZXItcmlnaHQnLHRoaXMuX2JvcmRlcih4LnJpZ2h0KSwxMikvLzAwMTJcblx0XHR4LnRvcCAmJiB0aGlzLmNlbGxTdHlsZSgndHI6Zmlyc3Qtb2YtdHlwZT50ZCcsJ2JvcmRlci10b3AnLHRoaXMuX2JvcmRlcih4LnRvcCksMTIpLy8wMDEyXG5cdFx0eC5ib3R0b20gJiYgdGhpcy5jZWxsU3R5bGUoJ3RyOmxhc3Qtb2YtdHlwZT50ZCcsJ2JvcmRlci1ib3R0b20nLHRoaXMuX2JvcmRlcih4LmJvdHRvbSksMTIpLy8wMDEyXG5cdFx0XG5cdFx0aWYoeC5pbnNpZGVWKXtcblx0XHRcdHZhciBjc3M9dGhpcy5fYm9yZGVyKHguaW5zaWRlVilcblx0XHRcdHRoaXMuY2VsbFN0eWxlKCd0cj50ZDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpJywnYm9yZGVyLXJpZ2h0Jyxjc3MsMjIpLy8wMDIyXG5cdFx0XHR0aGlzLmNlbGxTdHlsZSgndHI+dGQ6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKScsJ2JvcmRlci1sZWZ0Jyxjc3MsMjIpLy8wMDIyXG5cdFx0XHRcblx0XHRcdC8vQHRvZG86IGFyZSB0aGV5IG5lZWRlZD9cblx0XHRcdHRoaXMuY2VsbFN0eWxlKCd0cj50ZDpsYXN0LWNoaWxkJywnYm9yZGVyLWxlZnQnLGNzcywxMikvLzAwMTJcblx0XHRcdHRoaXMuY2VsbFN0eWxlKCd0cj50ZDpmaXJzdC1jaGlsZCcsJ2JvcmRlci1yaWdodCcsY3NzLDEyKS8vMDAxMlxuXHRcdH1cblx0XHRcblx0XHRpZih4Lmluc2lkZUgpe1xuXHRcdFx0dmFyIGNzcz10aGlzLl9ib3JkZXIoeC5pbnNpZGVIKVxuXHRcdFx0dGhpcy5jZWxsU3R5bGUoJ3RyOm5vdCg6Zmlyc3Qtb2YtdHlwZSk6bm90KDpsYXN0LW9mLXR5cGUpPnRkJywnYm9yZGVyLVRvcCcsY3NzLDIyKS8vMDAyMlxuXHRcdFx0dGhpcy5jZWxsU3R5bGUoJ3RyOm5vdCg6Zmlyc3Qtb2YtdHlwZSk6bm90KDpsYXN0LW9mLXR5cGUpPnRkJywnYm9yZGVyLUJvdHRvbScsY3NzLDIyKS8vMDAyMlxuXHRcdFx0XG5cdFx0XHQvL0B0b2RvOiBhcmUgdGhleSBuZWVkZWQ/XG5cdFx0XHR0aGlzLmNlbGxTdHlsZSgndHI6bGFzdC1vZi10eXBlPnRkJywnYm9yZGVyLWxlZnQnLGNzcywxMikvLzAwMTJcblx0XHRcdHRoaXMuY2VsbFN0eWxlKCd0cjpmaXJzdC1vZi10eXBlPnRkJywnYm9yZGVyLXJpZ2h0Jyxjc3MsMTIpLy8wMDEyXG5cdFx0fVxuXHR9XG5cdHRibENlbGxNYXIoeCl7XG5cdFx0Zm9yKHZhciBpIGluIHgpXG5cdFx0XHR0aGlzLmNlbGxTdHlsZSgndHI+dGQnLCdwYWRkaW5nJyt0aGlzLnVwcGVyRmlyc3QoaSksKHhbaV08MSAmJiB4W2ldPjAgPyAxIDogeFtpXSkrJ3B0JywyKS8vMDAwMlxuXHR9XG5cdHRibEluZCh4KXtcblx0XHR4ICYmIHRoaXMuc2V0KFwibWFyZ2luLWxlZnRcIix4KydwdCcpXG5cdH1cblx0dGJsVyh4KXtcblx0XHR4ICYmIHghPSdhdXRvJyAmJiB0aGlzLnNldChcIndpZHRoXCIseClcblx0fVxufVxuXHRcdFxuXG5UYWJsZS5Sb3dQcm9wZXJ0aWVzPWNsYXNzIFJvd1Byb3BlcnRpZXMgZXh0ZW5kcyBTdHlsZS5Qcm9wZXJ0aWVze1xuXHRjb25zdHJ1Y3RvcihzdHlsZSxwYXJlbnQpe1xuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cylcblx0XHR0aGlzLnBhcmVudD1wYXJlbnRcblx0XHR0aGlzLmRvYz1wYXJlbnQuZG9jXG5cdH1cbn1cblxuVGFibGUuQ2VsbFByb3BlcnRpZXM9Y2xhc3MgQ2VsbFByb3BlcnRpZXMgZXh0ZW5kcyBTdHlsZS5Qcm9wZXJ0aWVze1xuXHRjb25zdHJ1Y3RvcihzdHlsZSxwYXJlbnQpe1xuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cylcblx0XHR0aGlzLnBhcmVudD1wYXJlbnRcblx0XHR0aGlzLmRvYz1wYXJlbnQuZG9jXG5cdH1cblx0dGNCb3JkZXJzKHgpe1xuXHRcdHZhciB0YWJsZVNlbGVjdG9yPXRoaXMucGFyZW50LmdldFRhYmxlU2VsZWN0b3IoKSwgc2VsZWN0b3I9dGhpcy5wYXJlbnQuZ2V0UHJpb3JpdGl6ZWRTZWxlY3RvcigpXG5cdFx0c3dpdGNoKHRoaXMucGFyZW50LnRhcmdldCl7XG5cdFx0XHRjYXNlICdmaXJzdFJvdyc6XG5cdFx0XHRjYXNlICdsYXN0Um93Jzpcblx0XHRcdGNhc2UgJ2JhbmQxSG9yeic6XG5cdFx0XHRjYXNlICdiYW5kMkhvcnonOlxuXHRcdFx0XHR2YXIgc3R5bGU7XG5cdFx0XHRcdHgubGVmdCAmJiAodGhpcy5kb2MuY3JlYXRlU3R5bGUodGFibGVTZWxlY3RvcisnPi4nK3NlbGVjdG9yKyc+dGQ6Zmlyc3QtY2hpbGQnKS5ib3JkZXJMZWZ0PXRoaXMuX2JvcmRlcih4LmxlZnQpKTsvLzAwMjFcblx0XHRcdFx0eC5yaWdodCAmJiAodGhpcy5kb2MuY3JlYXRlU3R5bGUodGFibGVTZWxlY3RvcisnPi4nK3NlbGVjdG9yKyc+dGQ6bGFzdC1jaGlsZCcpLmJvcmRlclJpZ2h0PXRoaXMuX2JvcmRlcih4LnJpZ2h0KSk7Ly8wMDIxXG5cdFx0XHRcdHgudG9wICYmICh0aGlzLmRvYy5jcmVhdGVTdHlsZSh0YWJsZVNlbGVjdG9yKyc+Licrc2VsZWN0b3IrJz50ZCcpLmJvcmRlclRvcD10aGlzLl9ib3JkZXIoeC50b3ApKTsvLzAwMTFcblx0XHRcdFx0eC5ib3R0b20gJiYgKHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRhYmxlU2VsZWN0b3IrJz4uJytzZWxlY3RvcisnPnRkJykuYm9yZGVyQm90dG9tPXRoaXMuX2JvcmRlcih4LmJvdHRvbSkpOy8vLy8wMDExXG5cdFx0XHRcdHguaW5zaWRlViAmJiAoKHN0eWxlPXRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRhYmxlU2VsZWN0b3IrJz4uJytzZWxlY3RvcisnPnRkOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCknKSkuYm9yZGVyUmlnaHQ9c3R5bGUuYm9yZGVyTGVmdD10aGlzLl9ib3JkZXIoeC5pbnNpZGVWKSk7Ly8wMDMxXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdmaXJzdENvbCc6XG5cdFx0XHRjYXNlICdsYXN0Q29sJzpcblx0XHRcdGNhc2UgJ2JhbmQyVmVydCc6XG5cdFx0XHRjYXNlICdiYW5kMVZlcnQnOlxuXHRcdFx0XHR4LnRvcCAmJiAodGhpcy5kb2MuY3JlYXRlU3R5bGUodGFibGVTZWxlY3RvcisnPnRyOmZpcnN0LW9mLXR5cGU+Licrc2VsZWN0b3IpLmJvcmRlclRvcD10aGlzLl9ib3JkZXIoeC50b3ApKTsvLzAwMjFcblx0XHRcdFx0eC5sZWZ0ICYmICh0aGlzLmRvYy5jcmVhdGVTdHlsZSh0YWJsZVNlbGVjdG9yKyc+dHI6Zmlyc3Qtb2YtdHlwZT4uJytzZWxlY3RvcikuYm9yZGVyTGVmdD10aGlzLl9ib3JkZXIoeC5sZWZ0KSk7Ly8wMDIxXG5cdFx0XHRcdHgucmlnaHQgJiYgKHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRhYmxlU2VsZWN0b3IrJz50cjpmaXJzdC1vZi10eXBlPi4nK3NlbGVjdG9yKS5ib3JkZXJSaWdodD10aGlzLl9ib3JkZXIoeC5yaWdodCkpOy8vMDAyMVxuXHRcdFx0XHRcblx0XHRcdFx0eC5ib3R0b20gJiYgKHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRhYmxlU2VsZWN0b3IrJz50cjpsYXN0LW9mLXR5cGU+Licrc2VsZWN0b3IpLmJvcmRlckJvdHRvbT10aGlzLl9ib3JkZXIoeC5ib3R0b20pKTsvLzAwMjFcblx0XHRcdFx0eC5sZWZ0ICYmICh0aGlzLmRvYy5jcmVhdGVTdHlsZSh0YWJsZVNlbGVjdG9yKyc+dHI6bGFzdC1vZi10eXBlPi4nK3NlbGVjdG9yKS5ib3JkZXJMZWZ0PXRoaXMuX2JvcmRlcih4LmxlZnQpKTsvLzAwMjFcblx0XHRcdFx0eC5yaWdodCAmJiAodGhpcy5kb2MuY3JlYXRlU3R5bGUodGFibGVTZWxlY3RvcisnPnRyOmxhc3Qtb2YtdHlwZT4uJytzZWxlY3RvcikuYm9yZGVyUmlnaHQ9dGhpcy5fYm9yZGVyKHgucmlnaHQpKTsvLzAwMjFcblx0XHRcdFx0XG5cdFx0XHRcdFxuXHRcdFx0XHR4LmxlZnQgJiYgKHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRhYmxlU2VsZWN0b3IrJz50cjpub3QoOmZpcnN0LW9mLXR5cGUpOm5vdCg6bGFzdC1vZi10eXBlKT4uJytzZWxlY3RvcikuYm9yZGVyTGVmdD10aGlzLl9ib3JkZXIoeC5sZWZ0KSk7Ly8wMDMxXG5cdFx0XHRcdHgucmlnaHQgJiYgKHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRhYmxlU2VsZWN0b3IrJz50cjpub3QoOmZpcnN0LW9mLXR5cGUpOm5vdCg6bGFzdC1vZi10eXBlKT4uJytzZWxlY3RvcikuYm9yZGVyUmlnaHQ9dGhpcy5fYm9yZGVyKHgucmlnaHQpKTsvLzAwMzFcblx0XHRcdFx0YnJlYWtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHgubGVmdCAmJiAodGhpcy5kb2MuY3JlYXRlU3R5bGUodGFibGVTZWxlY3RvcisnPnRyPi4nK3NlbGVjdG9yKS5ib3JkZXJMZWZ0PXRoaXMuX2JvcmRlcih4LmxlZnQpKS8vMDAxMVxuXHRcdFx0XHR4LnJpZ2h0ICYmICh0aGlzLmRvYy5jcmVhdGVTdHlsZSh0YWJsZVNlbGVjdG9yKyc+dHI+Licrc2VsZWN0b3IpLmJvcmRlclJpZ2h0PXRoaXMuX2JvcmRlcih4LnJpZ2h0KSkvLzAwMTFcblx0XHRcdFx0eC50b3AgJiYgKHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRhYmxlU2VsZWN0b3IrJz50cj4uJytzZWxlY3RvcikuYm9yZGVyVG9wPXRoaXMuX2JvcmRlcih4LnRvcCkpLy8wMDExXG5cdFx0XHRcdHguYm90dG9tICYmICh0aGlzLmRvYy5jcmVhdGVTdHlsZSh0YWJsZVNlbGVjdG9yKyc+dHI+Licrc2VsZWN0b3IpLmJvcmRlckJvdHRvbT10aGlzLl9ib3JkZXIoeC5ib3R0b20pKS8vMDAxMVxuXHRcdH1cblx0fVxuXHRzaGQoeCl7XG5cdFx0dGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9eFxuXHR9XG5cdGdyaWRTcGFuKHgpe1xuXHRcdHRoaXMucGFyZW50LmNvbnRlbnQuc2V0QXR0cmlidXRlKCdjb2xzcGFuJyx4KVxuXHR9XG59XG5cdFx0XG5UYWJsZS5UYWJsZVN0eWxlcz0nZmlyc3RSb3csbGFzdFJvdyxmaXJzdENvbCxsYXN0Q29sLGJhbmQxVmVydCxiYW5kMlZlcnQsYmFuZDFIb3J6LGJhbmQySG9yeixuZUNlbGwsbndDZWxsLHNlQ2VsbCxzd0NlbGwnLnNwbGl0KCcsJykiXX0=