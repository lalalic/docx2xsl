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
			this.priorities.set(borderSide, pripriority.push({ condition: condition, value: value }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS90YWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLElBQUksT0FBSyxXQUFMOztJQUNpQjs7O0FBQ3BCLFVBRG9CLEtBQ3BCLEdBQWE7d0JBRE8sT0FDUDs7cUVBRE8sbUJBRVYsWUFERzs7QUFFWixRQUFLLE1BQUwsR0FBWSxNQUFLLFNBQUwsQ0FBZSxTQUFmLEVBQVosQ0FGWTs7RUFBYjs7Y0FEb0I7OzBDQVNJLFVBQVM7QUFDaEMsT0FBRyxLQUFLLFFBQUwsQ0FBSCxFQUNDLE9BQU8sS0FBSyxRQUFMLENBQVAsQ0FERDs7QUFHQSxXQUFPLFFBQVA7QUFDQSxTQUFLLE9BQUw7QUFDQyxZQUFPLEtBQUssUUFBTCxJQUFlLElBQUksS0FBSyxXQUFMLENBQWlCLFVBQWpCLENBQTRCLEtBQUssS0FBTCxFQUFXLElBQTNDLENBQWYsQ0FEUjtBQURBLFNBR0ssUUFBTDs7QUFDQyxZQUFPLEtBQUssUUFBTCxJQUFlLElBQUksaUJBQU8sVUFBUCxDQUFrQixLQUFLLEdBQUwsQ0FBUyxXQUFULENBQXFCLEtBQUssT0FBTCxHQUFhLFNBQWIsQ0FBM0MsRUFBbUUsSUFBbkUsQ0FBZixDQURSO0FBSEEsU0FLSyxXQUFMOztBQUNDLFlBQU8sS0FBSyxRQUFMLElBQWUsSUFBSSxvQkFBVSxVQUFWLENBQXFCLEtBQUssR0FBTCxDQUFTLFdBQVQsQ0FBcUIsS0FBSyxPQUFMLEdBQWEsUUFBYixDQUE5QyxFQUFxRSxJQUFyRSxDQUFmLENBRFI7QUFMQSxTQU9LLE1BQUw7O0FBQ0MsWUFBTyxLQUFLLFFBQUwsSUFBZSxJQUFJLEtBQUssV0FBTCxDQUFpQixjQUFqQixDQUFnQyxLQUFLLEdBQUwsQ0FBUyxXQUFULENBQXFCLEtBQUssT0FBTCxHQUFhLGFBQWIsRUFBNEIsS0FBSyxPQUFMLEdBQWEsY0FBYixDQUFyRixFQUFrSCxJQUFsSCxDQUFmLENBRFI7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R0csR0FBRTtBQUNWLFFBQUssTUFBTCxDQUFZLE9BQVosQ0FBb0IsWUFBcEIsQ0FBaUMsU0FBakMsRUFBMkMsQ0FBM0MsRUFEVTs7OztRQTlDZTtFQUF1QixvQkFBTSxVQUFOLENBQWxEOztBQW1EQSxNQUFNLFdBQU4sR0FBa0Isd0dBQXdHLEtBQXhHLENBQThHLEdBQTlHLENBQWxCIiwiZmlsZSI6InRhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlIGZyb20gJy4vY29udmVydGVyJ1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tICcuL3BhcmFncmFwaCdcbmltcG9ydCBJbmxpbmUgZnJvbSAnLi9pbmxpbmUnXG5cbi8qXG50aGUgcHJpb3JpdHkgb2YgY3NzIHJ1bGUgc2hvdWxkIGJlIGFsaWduZWQgd2l0aCB3b3JkXG4qL1xuXG52YXIgZ1Jvdz0vcm93fGhvcnovaVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGUgZXh0ZW5kcyBTdHlsZXtcblx0Y29uc3RydWN0b3IoKXtcblx0XHRzdXBlciguLi5hcmd1bWVudHMpXG5cdFx0dGhpcy50YXJnZXQ9dGhpcy53b3JkTW9kZWwuZ2V0VGFyZ2V0KClcblx0fVxuXHRnZXQgUHJpb3JpdGl6aWVkU3R5bGVzKCl7Ly9sb3ctLT5oaWdoXG5cdFx0cmV0dXJuICdud0NlbGwsbmVDZWxsLHN3Q2VsbCxzZUNlbGwsZmlyc3RSb3csbGFzdFJvdyxmaXJzdENvbCxsYXN0Q29sLGJhbmQxVmVydCxiYW5kMlZlcnQsYmFuZDFIb3J6LGJhbmQySG9yeicuc3BsaXQoJywnKS5yZXZlcnNlKClcblx0fVxuXHRcblx0X2dldFByb3BlcnRpZXNDb252ZXJ0ZXIoY2F0ZWdvcnkpe1xuXHRcdGlmKHRoaXNbY2F0ZWdvcnldKVxuXHRcdFx0cmV0dXJuIHRoaXNbY2F0ZWdvcnldXG5cdFx0XG5cdFx0c3dpdGNoKGNhdGVnb3J5KXtcblx0XHRjYXNlICd0YWJsZSc6XG5cdFx0XHRyZXR1cm4gdGhpc1tjYXRlZ29yeV09bmV3IHRoaXMuY29uc3RydWN0b3IuUHJvcGVydGllcyh0aGlzLnN0eWxlLHRoaXMpXG5cdFx0Y2FzZSAnaW5saW5lJzovLzAwMTJcblx0XHRcdHJldHVybiB0aGlzW2NhdGVnb3J5XT1uZXcgSW5saW5lLlByb3BlcnRpZXModGhpcy5kb2MuY3JlYXRlU3R5bGUodGhpcy5zdHlsZUlkK1wiLmlubGluZVwiKSx0aGlzKVxuXHRcdGNhc2UgJ3BhcmFncmFwaCc6Ly8wMDEyXG5cdFx0XHRyZXR1cm4gdGhpc1tjYXRlZ29yeV09bmV3IFBhcmFncmFwaC5Qcm9wZXJ0aWVzKHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRoaXMuc3R5bGVJZCtcIi5ibG9ja1wiKSx0aGlzKVxuXHRcdGNhc2UgJ2NlbGwnOi8vMDAxMVxuXHRcdFx0cmV0dXJuIHRoaXNbY2F0ZWdvcnldPW5ldyB0aGlzLmNvbnN0cnVjdG9yLkNlbGxQcm9wZXJ0aWVzKHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRoaXMuc3R5bGVJZCtcIi50YWJsZS1jZWxsXCIsIHRoaXMuc3R5bGVJZCtcIi4qdGFibGUtY2VsbFwiKSx0aGlzKVxuXHRcdH1cblx0fVxuXHRcblx0Z2V0VGFibGVTZWxlY3Rvcigpe1xuXHRcdHJldHVybiAnLicrU3R5bGUuYXNDc3NJRCh0aGlzLndvcmRNb2RlbC5pZCkrJz50Ym9keSdcblx0fVxuXHRcblx0Z2V0UHJpb3JpdGl6ZWRTZWxlY3Rvcigpe1xuXHRcdHZhciBzZWxlY3Rvcj10aGlzLnRhcmdldFxuXHRcdGZvcih2YXIgbGV2ZWw9dGhpcy5Qcmlvcml0aXppZWRTdHlsZXMuaW5kZXhPZih0aGlzLnRhcmdldCksaT0wO2k8bGV2ZWw7aSsrKVxuXHRcdFx0c2VsZWN0b3I9c2VsZWN0b3IrJ1t4JytpKyddJztcblx0XHRyZXR1cm4gc2VsZWN0b3Jcblx0fVxufVxuXG5mdW5jdGlvbiBmaW5kVGFibGUoY2VsbCl7XG5cdHJldHVybiBjZWxsLnBhcmVudE5vZGUucGFyZW50Tm9kZVxufVxuXG5mdW5jdGlvbiBmaW5kUm93KGNlbGwpe1xuXHRyZXR1cm4gY2VsbC5wYXJlbnROb2RlXG59XG5cbmZ1bmN0aW9uIGlzKHRhYmxlLHJvdywgY2VsbCwgY29uZGl0aW9uKXtcblx0cmV0dXJuIEFycmF5LmZyb20odGFibGUucXVlcnlTZWxlY3RvckFsbChjb25kaXRpb24pKS5pbmRleE9mKGNlbGwpIT0tMVxufVxuXG5jbGFzcyBQcmlvcml0aWVze1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdFx0XG5cdH1cblx0XG59XG5cdFxuVGFibGUuUHJvcGVydGllcz1jbGFzcyBQcm9wZXJ0aWVzIGV4dGVuZHMgU3R5bGUuUHJvcGVydGllc3tcblx0Y29uc3RydWN0b3IoKXtcblx0XHRzdXBlciguLi5hcmd1bWVudHMpXG5cdFx0dGhpcy5wcmlvcml0aWVzPW5ldyBQcmlvcml0aWVzKClcblx0fVxuXHRhcHBseU9uKGNlbGwpe1xuXHRcdHZhciB0YWJsZT1maW5kVGFibGUoY2VsbCksIHJvdz1maW5kUm93KGNlbGwpXG5cdFx0J2xlZnQscmlnaHQsdG9wLGJvdHRvbScuc3BsaXQoXCIsXCIpLmZvckVhY2goYT0+e1xuXHRcdFx0bGV0IHNpZGU9YGJvcmRlci0ke2F9YFxuXHRcdFx0aWYodGhpcy5wcmlvcml0aWVzLmhhcyhzaWRlKSl7XG5cdFx0XHRcdHRoaXMucHJpb3JpdGllcy5nZXQoc2lkZSkuZm9yRWFjaChydWxlPT57XG5cdFx0XHRcdFx0aWYoIWNlbGwuaGFzQXR0cmlidXRlKHNpZGUpKVxuXHRcdFx0XHRcdFx0aWYoaXModGFibGUsIHJvdywgY2VsbCwgcnVsZS5jb25kaXRpb24pKVxuXHRcdFx0XHRcdFx0XHRjZWxsLnNldEF0dHJpYnV0ZShzaWRlLHJ1bGUudmFsdWUpXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXHRcblx0XG5cdGNlbGxTdHlsZShjb25kaXRpb24sIGJvcmRlclNpZGUsIHZhbHVlLCBwcmlvcml0eSl7XG5cdFx0dGhpcy5wcmlvcml0aWVzLnNldChib3JkZXJTaWRlLCBwcmlwcmlvcml0eS5wdXNoKHtjb25kaXRpb24sdmFsdWV9KSlcblx0XHRyZXR1cm4gdGhpcy5kb2MuY3JlYXRlU3R5bGUodGhpcy5wYXJlbnQuc3R5bGVJZCtcIi4qdGFibGUtY2VsbFwiKVxuXHR9XG5cdHRibEJvcmRlcnMoeCl7XG5cdFx0eC5sZWZ0ICYmIHRoaXMuY2VsbFN0eWxlKCd0cj50ZDpmaXJzdC1jaGlsZCcsJ2JvcmRlci1sZWZ0Jyx0aGlzLl9ib3JkZXIoeC5sZWZ0KSwxMikgLy8wMDEyXG5cdFx0eC5yaWdodCAmJiB0aGlzLmNlbGxTdHlsZSgndHI+dGQ6bGFzdC1jaGlsZCcsJ2JvcmRlci1yaWdodCcsdGhpcy5fYm9yZGVyKHgucmlnaHQpLDEyKS8vMDAxMlxuXHRcdHgudG9wICYmIHRoaXMuY2VsbFN0eWxlKCd0cjpmaXJzdC1vZi10eXBlPnRkJywnYm9yZGVyLXRvcCcsdGhpcy5fYm9yZGVyKHgudG9wKSwxMikvLzAwMTJcblx0XHR4LmJvdHRvbSAmJiB0aGlzLmNlbGxTdHlsZSgndHI6bGFzdC1vZi10eXBlPnRkJywnYm9yZGVyLWJvdHRvbScsdGhpcy5fYm9yZGVyKHguYm90dG9tKSwxMikvLzAwMTJcblx0XHRcblx0XHRpZih4Lmluc2lkZVYpe1xuXHRcdFx0dmFyIGNzcz10aGlzLl9ib3JkZXIoeC5pbnNpZGVWKVxuXHRcdFx0dGhpcy5jZWxsU3R5bGUoJ3RyPnRkOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCknLCdib3JkZXItcmlnaHQnLGNzcywyMikvLzAwMjJcblx0XHRcdHRoaXMuY2VsbFN0eWxlKCd0cj50ZDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpJywnYm9yZGVyLWxlZnQnLGNzcywyMikvLzAwMjJcblx0XHRcdFxuXHRcdFx0Ly9AdG9kbzogYXJlIHRoZXkgbmVlZGVkP1xuXHRcdFx0dGhpcy5jZWxsU3R5bGUoJ3RyPnRkOmxhc3QtY2hpbGQnLCdib3JkZXItbGVmdCcsY3NzLDEyKS8vMDAxMlxuXHRcdFx0dGhpcy5jZWxsU3R5bGUoJ3RyPnRkOmZpcnN0LWNoaWxkJywnYm9yZGVyLXJpZ2h0Jyxjc3MsMTIpLy8wMDEyXG5cdFx0fVxuXHRcdFxuXHRcdGlmKHguaW5zaWRlSCl7XG5cdFx0XHR2YXIgY3NzPXRoaXMuX2JvcmRlcih4Lmluc2lkZUgpXG5cdFx0XHR0aGlzLmNlbGxTdHlsZSgndHI6bm90KDpmaXJzdC1vZi10eXBlKTpub3QoOmxhc3Qtb2YtdHlwZSk+dGQnLCdib3JkZXItVG9wJyxjc3MsMjIpLy8wMDIyXG5cdFx0XHR0aGlzLmNlbGxTdHlsZSgndHI6bm90KDpmaXJzdC1vZi10eXBlKTpub3QoOmxhc3Qtb2YtdHlwZSk+dGQnLCdib3JkZXItQm90dG9tJyxjc3MsMjIpLy8wMDIyXG5cdFx0XHRcblx0XHRcdC8vQHRvZG86IGFyZSB0aGV5IG5lZWRlZD9cblx0XHRcdHRoaXMuY2VsbFN0eWxlKCd0cjpsYXN0LW9mLXR5cGU+dGQnLCdib3JkZXItbGVmdCcsY3NzLDEyKS8vMDAxMlxuXHRcdFx0dGhpcy5jZWxsU3R5bGUoJ3RyOmZpcnN0LW9mLXR5cGU+dGQnLCdib3JkZXItcmlnaHQnLGNzcywxMikvLzAwMTJcblx0XHR9XG5cdH1cblx0dGJsQ2VsbE1hcih4KXtcblx0XHRmb3IodmFyIGkgaW4geClcblx0XHRcdHRoaXMuY2VsbFN0eWxlKCd0cj50ZCcsJ3BhZGRpbmcnK3RoaXMudXBwZXJGaXJzdChpKSwoeFtpXTwxICYmIHhbaV0+MCA/IDEgOiB4W2ldKSsncHQnLDIpLy8wMDAyXG5cdH1cblx0dGJsSW5kKHgpe1xuXHRcdHggJiYgdGhpcy5zZXQoXCJtYXJnaW4tbGVmdFwiLHgrJ3B0Jylcblx0fVxuXHR0YmxXKHgpe1xuXHRcdHggJiYgeCE9J2F1dG8nICYmIHRoaXMuc2V0KFwid2lkdGhcIix4KVxuXHR9XG59XG5cdFx0XG5cblRhYmxlLlJvd1Byb3BlcnRpZXM9Y2xhc3MgUm93UHJvcGVydGllcyBleHRlbmRzIFN0eWxlLlByb3BlcnRpZXN7XG5cdGNvbnN0cnVjdG9yKHN0eWxlLHBhcmVudCl7XG5cdFx0c3VwZXIoLi4uYXJndW1lbnRzKVxuXHRcdHRoaXMucGFyZW50PXBhcmVudFxuXHRcdHRoaXMuZG9jPXBhcmVudC5kb2Ncblx0fVxufVxuXG5UYWJsZS5DZWxsUHJvcGVydGllcz1jbGFzcyBDZWxsUHJvcGVydGllcyBleHRlbmRzIFN0eWxlLlByb3BlcnRpZXN7XG5cdGNvbnN0cnVjdG9yKHN0eWxlLHBhcmVudCl7XG5cdFx0c3VwZXIoLi4uYXJndW1lbnRzKVxuXHRcdHRoaXMucGFyZW50PXBhcmVudFxuXHRcdHRoaXMuZG9jPXBhcmVudC5kb2Ncblx0fVxuXHR0Y0JvcmRlcnMoeCl7XG5cdFx0dmFyIHRhYmxlU2VsZWN0b3I9dGhpcy5wYXJlbnQuZ2V0VGFibGVTZWxlY3RvcigpLCBzZWxlY3Rvcj10aGlzLnBhcmVudC5nZXRQcmlvcml0aXplZFNlbGVjdG9yKClcblx0XHRzd2l0Y2godGhpcy5wYXJlbnQudGFyZ2V0KXtcblx0XHRcdGNhc2UgJ2ZpcnN0Um93Jzpcblx0XHRcdGNhc2UgJ2xhc3RSb3cnOlxuXHRcdFx0Y2FzZSAnYmFuZDFIb3J6Jzpcblx0XHRcdGNhc2UgJ2JhbmQySG9yeic6XG5cdFx0XHRcdHZhciBzdHlsZTtcblx0XHRcdFx0eC5sZWZ0ICYmICh0aGlzLmRvYy5jcmVhdGVTdHlsZSh0YWJsZVNlbGVjdG9yKyc+Licrc2VsZWN0b3IrJz50ZDpmaXJzdC1jaGlsZCcpLmJvcmRlckxlZnQ9dGhpcy5fYm9yZGVyKHgubGVmdCkpOy8vMDAyMVxuXHRcdFx0XHR4LnJpZ2h0ICYmICh0aGlzLmRvYy5jcmVhdGVTdHlsZSh0YWJsZVNlbGVjdG9yKyc+Licrc2VsZWN0b3IrJz50ZDpsYXN0LWNoaWxkJykuYm9yZGVyUmlnaHQ9dGhpcy5fYm9yZGVyKHgucmlnaHQpKTsvLzAwMjFcblx0XHRcdFx0eC50b3AgJiYgKHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRhYmxlU2VsZWN0b3IrJz4uJytzZWxlY3RvcisnPnRkJykuYm9yZGVyVG9wPXRoaXMuX2JvcmRlcih4LnRvcCkpOy8vMDAxMVxuXHRcdFx0XHR4LmJvdHRvbSAmJiAodGhpcy5kb2MuY3JlYXRlU3R5bGUodGFibGVTZWxlY3RvcisnPi4nK3NlbGVjdG9yKyc+dGQnKS5ib3JkZXJCb3R0b209dGhpcy5fYm9yZGVyKHguYm90dG9tKSk7Ly8vLzAwMTFcblx0XHRcdFx0eC5pbnNpZGVWICYmICgoc3R5bGU9dGhpcy5kb2MuY3JlYXRlU3R5bGUodGFibGVTZWxlY3RvcisnPi4nK3NlbGVjdG9yKyc+dGQ6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKScpKS5ib3JkZXJSaWdodD1zdHlsZS5ib3JkZXJMZWZ0PXRoaXMuX2JvcmRlcih4Lmluc2lkZVYpKTsvLzAwMzFcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2ZpcnN0Q29sJzpcblx0XHRcdGNhc2UgJ2xhc3RDb2wnOlxuXHRcdFx0Y2FzZSAnYmFuZDJWZXJ0Jzpcblx0XHRcdGNhc2UgJ2JhbmQxVmVydCc6XG5cdFx0XHRcdHgudG9wICYmICh0aGlzLmRvYy5jcmVhdGVTdHlsZSh0YWJsZVNlbGVjdG9yKyc+dHI6Zmlyc3Qtb2YtdHlwZT4uJytzZWxlY3RvcikuYm9yZGVyVG9wPXRoaXMuX2JvcmRlcih4LnRvcCkpOy8vMDAyMVxuXHRcdFx0XHR4LmxlZnQgJiYgKHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRhYmxlU2VsZWN0b3IrJz50cjpmaXJzdC1vZi10eXBlPi4nK3NlbGVjdG9yKS5ib3JkZXJMZWZ0PXRoaXMuX2JvcmRlcih4LmxlZnQpKTsvLzAwMjFcblx0XHRcdFx0eC5yaWdodCAmJiAodGhpcy5kb2MuY3JlYXRlU3R5bGUodGFibGVTZWxlY3RvcisnPnRyOmZpcnN0LW9mLXR5cGU+Licrc2VsZWN0b3IpLmJvcmRlclJpZ2h0PXRoaXMuX2JvcmRlcih4LnJpZ2h0KSk7Ly8wMDIxXG5cdFx0XHRcdFxuXHRcdFx0XHR4LmJvdHRvbSAmJiAodGhpcy5kb2MuY3JlYXRlU3R5bGUodGFibGVTZWxlY3RvcisnPnRyOmxhc3Qtb2YtdHlwZT4uJytzZWxlY3RvcikuYm9yZGVyQm90dG9tPXRoaXMuX2JvcmRlcih4LmJvdHRvbSkpOy8vMDAyMVxuXHRcdFx0XHR4LmxlZnQgJiYgKHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRhYmxlU2VsZWN0b3IrJz50cjpsYXN0LW9mLXR5cGU+Licrc2VsZWN0b3IpLmJvcmRlckxlZnQ9dGhpcy5fYm9yZGVyKHgubGVmdCkpOy8vMDAyMVxuXHRcdFx0XHR4LnJpZ2h0ICYmICh0aGlzLmRvYy5jcmVhdGVTdHlsZSh0YWJsZVNlbGVjdG9yKyc+dHI6bGFzdC1vZi10eXBlPi4nK3NlbGVjdG9yKS5ib3JkZXJSaWdodD10aGlzLl9ib3JkZXIoeC5yaWdodCkpOy8vMDAyMVxuXHRcdFx0XHRcblx0XHRcdFx0XG5cdFx0XHRcdHgubGVmdCAmJiAodGhpcy5kb2MuY3JlYXRlU3R5bGUodGFibGVTZWxlY3RvcisnPnRyOm5vdCg6Zmlyc3Qtb2YtdHlwZSk6bm90KDpsYXN0LW9mLXR5cGUpPi4nK3NlbGVjdG9yKS5ib3JkZXJMZWZ0PXRoaXMuX2JvcmRlcih4LmxlZnQpKTsvLzAwMzFcblx0XHRcdFx0eC5yaWdodCAmJiAodGhpcy5kb2MuY3JlYXRlU3R5bGUodGFibGVTZWxlY3RvcisnPnRyOm5vdCg6Zmlyc3Qtb2YtdHlwZSk6bm90KDpsYXN0LW9mLXR5cGUpPi4nK3NlbGVjdG9yKS5ib3JkZXJSaWdodD10aGlzLl9ib3JkZXIoeC5yaWdodCkpOy8vMDAzMVxuXHRcdFx0XHRicmVha1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0eC5sZWZ0ICYmICh0aGlzLmRvYy5jcmVhdGVTdHlsZSh0YWJsZVNlbGVjdG9yKyc+dHI+Licrc2VsZWN0b3IpLmJvcmRlckxlZnQ9dGhpcy5fYm9yZGVyKHgubGVmdCkpLy8wMDExXG5cdFx0XHRcdHgucmlnaHQgJiYgKHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRhYmxlU2VsZWN0b3IrJz50cj4uJytzZWxlY3RvcikuYm9yZGVyUmlnaHQ9dGhpcy5fYm9yZGVyKHgucmlnaHQpKS8vMDAxMVxuXHRcdFx0XHR4LnRvcCAmJiAodGhpcy5kb2MuY3JlYXRlU3R5bGUodGFibGVTZWxlY3RvcisnPnRyPi4nK3NlbGVjdG9yKS5ib3JkZXJUb3A9dGhpcy5fYm9yZGVyKHgudG9wKSkvLzAwMTFcblx0XHRcdFx0eC5ib3R0b20gJiYgKHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRhYmxlU2VsZWN0b3IrJz50cj4uJytzZWxlY3RvcikuYm9yZGVyQm90dG9tPXRoaXMuX2JvcmRlcih4LmJvdHRvbSkpLy8wMDExXG5cdFx0fVxuXHR9XG5cdHNoZCh4KXtcblx0XHR0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvcj14XG5cdH1cblx0Z3JpZFNwYW4oeCl7XG5cdFx0dGhpcy5wYXJlbnQuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLHgpXG5cdH1cbn1cblx0XHRcblRhYmxlLlRhYmxlU3R5bGVzPSdmaXJzdFJvdyxsYXN0Um93LGZpcnN0Q29sLGxhc3RDb2wsYmFuZDFWZXJ0LGJhbmQyVmVydCxiYW5kMUhvcnosYmFuZDJIb3J6LG5lQ2VsbCxud0NlbGwsc2VDZWxsLHN3Q2VsbCcuc3BsaXQoJywnKSJdfQ==