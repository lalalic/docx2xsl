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
		key: 'styleId',
		get: function get() {
			return this.wordModel.id + (this.target ? '.' + this.target : "");
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

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Properties).apply(this, arguments));
	}

	_createClass(Properties, [{
		key: 'tblBorders',
		value: function tblBorders(x) {
			var parentStyleId = this.parent.styleId;
			x.left && this.doc.createStyle(parentStyleId + ".*firstCol").set("border-left", this._border(x.left));

			x.right && this.doc.createStyle(parentStyleId + ".*lastCol").set("border-right", this._border(x.right));

			x.top && this.doc.createStyle(parentStyleId + ".*firstRow").set("border-top", this._border(x.top));

			x.bottom && this.doc.createStyle(parentStyleId + ".*lastRow").set("border-bottom", this._border(x.bottom));

			x.insideV && this.doc.createStyle(parentStyleId + ".*!firstCol").set("border-left", this._border(x.insideV));

			x.insideH && this.doc.createStyle(parentStyleId + ".*!firstRow").set("border-top", this._border(x.insideH));
		}
	}, {
		key: 'tblCellMar',
		value: function tblCellMar(x) {
			var style = this.doc.createStyle(this.parent.styleId + ".*cell");
			Object.keys(x).forEach(function (i) {
				return style.set('padding-' + i, (x[i] < 1 && x[i] > 0 ? 1 : x[i]) + 'pt');
			});
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

		var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(RowProperties).apply(this, arguments));

		_this3.parent = parent;
		_this3.doc = parent.doc;
		return _this3;
	}

	return RowProperties;
}(_converter2.default.Properties);

Table.CellProperties = function (_Style$Properties3) {
	_inherits(CellProperties, _Style$Properties3);

	function CellProperties(style, parent) {
		_classCallCheck(this, CellProperties);

		var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(CellProperties).apply(this, arguments));

		_this4.parent = parent;
		_this4.doc = parent.doc;
		return _this4;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS90YWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLElBQUksT0FBSyxXQUFMOztJQUNpQjs7O0FBQ3BCLFVBRG9CLEtBQ3BCLEdBQWE7d0JBRE8sT0FDUDs7cUVBRE8sbUJBRVYsWUFERzs7QUFFWixRQUFLLE1BQUwsR0FBWSxNQUFLLFNBQUwsQ0FBZSxTQUFmLEVBQVosQ0FGWTs7RUFBYjs7Y0FEb0I7OzBDQWNJLFVBQVM7QUFDaEMsT0FBRyxLQUFLLFFBQUwsQ0FBSCxFQUNDLE9BQU8sS0FBSyxRQUFMLENBQVAsQ0FERDs7QUFHQSxXQUFPLFFBQVA7QUFDQSxTQUFLLE9BQUw7QUFDQyxZQUFPLEtBQUssUUFBTCxJQUFlLElBQUksS0FBSyxXQUFMLENBQWlCLFVBQWpCLENBQTRCLEtBQUssS0FBTCxFQUFXLElBQTNDLENBQWYsQ0FEUjtBQURBLFNBR0ssUUFBTDs7QUFDQyxZQUFPLEtBQUssUUFBTCxJQUFlLElBQUksaUJBQU8sVUFBUCxDQUFrQixLQUFLLEdBQUwsQ0FBUyxXQUFULENBQXFCLEtBQUssT0FBTCxHQUFhLFNBQWIsQ0FBM0MsRUFBbUUsSUFBbkUsQ0FBZixDQURSO0FBSEEsU0FLSyxXQUFMOztBQUNDLFlBQU8sS0FBSyxRQUFMLElBQWUsSUFBSSxvQkFBVSxVQUFWLENBQXFCLEtBQUssR0FBTCxDQUFTLFdBQVQsQ0FBcUIsS0FBSyxPQUFMLEdBQWEsUUFBYixDQUE5QyxFQUFxRSxJQUFyRSxDQUFmLENBRFI7QUFMQSxTQU9LLE1BQUw7O0FBQ0MsWUFBTyxLQUFLLFFBQUwsSUFBZSxJQUFJLEtBQUssV0FBTCxDQUFpQixjQUFqQixDQUFnQyxLQUFLLEdBQUwsQ0FBUyxXQUFULENBQXFCLEtBQUssT0FBTCxHQUFhLGFBQWIsRUFBNEIsS0FBSyxPQUFMLEdBQWEsY0FBYixDQUFyRixFQUFrSCxJQUFsSCxDQUFmLENBRFI7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WUFBcEIsQ0FBaUMsU0FBakMsRUFBMkMsQ0FBM0MsRUFEVTs7OztRQTlDZTtFQUF1QixvQkFBTSxVQUFOLENBQWxEOztBQW1EQSxNQUFNLFdBQU4sR0FBa0Isd0dBQXdHLEtBQXhHLENBQThHLEdBQTlHLENBQWxCIiwiZmlsZSI6InRhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlIGZyb20gJy4vY29udmVydGVyJ1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tICcuL3BhcmFncmFwaCdcbmltcG9ydCBJbmxpbmUgZnJvbSAnLi9pbmxpbmUnXG5cbi8qXG50aGUgcHJpb3JpdHkgb2YgY3NzIHJ1bGUgc2hvdWxkIGJlIGFsaWduZWQgd2l0aCB3b3JkXG4qL1xuXG52YXIgZ1Jvdz0vcm93fGhvcnovaVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGUgZXh0ZW5kcyBTdHlsZXtcblx0Y29uc3RydWN0b3IoKXtcblx0XHRzdXBlciguLi5hcmd1bWVudHMpXG5cdFx0dGhpcy50YXJnZXQ9dGhpcy53b3JkTW9kZWwuZ2V0VGFyZ2V0KClcblx0fVxuXG5cdGdldCBzdHlsZUlkKCl7XG5cdFx0cmV0dXJuIHRoaXMud29yZE1vZGVsLmlkKyh0aGlzLnRhcmdldCA/IGAuJHt0aGlzLnRhcmdldH1gIDogXCJcIilcblx0fVxuXG5cdGdldCBQcmlvcml0aXppZWRTdHlsZXMoKXsvL2xvdy0tPmhpZ2hcblx0XHRyZXR1cm4gJ253Q2VsbCxuZUNlbGwsc3dDZWxsLHNlQ2VsbCxmaXJzdFJvdyxsYXN0Um93LGZpcnN0Q29sLGxhc3RDb2wsYmFuZDFWZXJ0LGJhbmQyVmVydCxiYW5kMUhvcnosYmFuZDJIb3J6Jy5zcGxpdCgnLCcpLnJldmVyc2UoKVxuXHR9XG5cblx0X2dldFByb3BlcnRpZXNDb252ZXJ0ZXIoY2F0ZWdvcnkpe1xuXHRcdGlmKHRoaXNbY2F0ZWdvcnldKVxuXHRcdFx0cmV0dXJuIHRoaXNbY2F0ZWdvcnldXG5cblx0XHRzd2l0Y2goY2F0ZWdvcnkpe1xuXHRcdGNhc2UgJ3RhYmxlJzpcblx0XHRcdHJldHVybiB0aGlzW2NhdGVnb3J5XT1uZXcgdGhpcy5jb25zdHJ1Y3Rvci5Qcm9wZXJ0aWVzKHRoaXMuc3R5bGUsdGhpcylcblx0XHRjYXNlICdpbmxpbmUnOi8vMDAxMlxuXHRcdFx0cmV0dXJuIHRoaXNbY2F0ZWdvcnldPW5ldyBJbmxpbmUuUHJvcGVydGllcyh0aGlzLmRvYy5jcmVhdGVTdHlsZSh0aGlzLnN0eWxlSWQrXCIuaW5saW5lXCIpLHRoaXMpXG5cdFx0Y2FzZSAncGFyYWdyYXBoJzovLzAwMTJcblx0XHRcdHJldHVybiB0aGlzW2NhdGVnb3J5XT1uZXcgUGFyYWdyYXBoLlByb3BlcnRpZXModGhpcy5kb2MuY3JlYXRlU3R5bGUodGhpcy5zdHlsZUlkK1wiLmJsb2NrXCIpLHRoaXMpXG5cdFx0Y2FzZSAnY2VsbCc6Ly8wMDExXG5cdFx0XHRyZXR1cm4gdGhpc1tjYXRlZ29yeV09bmV3IHRoaXMuY29uc3RydWN0b3IuQ2VsbFByb3BlcnRpZXModGhpcy5kb2MuY3JlYXRlU3R5bGUodGhpcy5zdHlsZUlkK1wiLnRhYmxlLWNlbGxcIiwgdGhpcy5zdHlsZUlkK1wiLip0YWJsZS1jZWxsXCIpLHRoaXMpXG5cdFx0fVxuXHR9XG5cblx0Z2V0VGFibGVTZWxlY3Rvcigpe1xuXHRcdHJldHVybiAnLicrU3R5bGUuYXNDc3NJRCh0aGlzLndvcmRNb2RlbC5pZCkrJz50Ym9keSdcblx0fVxuXG5cdGdldFByaW9yaXRpemVkU2VsZWN0b3IoKXtcblx0XHR2YXIgc2VsZWN0b3I9dGhpcy50YXJnZXRcblx0XHRmb3IodmFyIGxldmVsPXRoaXMuUHJpb3JpdGl6aWVkU3R5bGVzLmluZGV4T2YodGhpcy50YXJnZXQpLGk9MDtpPGxldmVsO2krKylcblx0XHRcdHNlbGVjdG9yPXNlbGVjdG9yKydbeCcraSsnXSc7XG5cdFx0cmV0dXJuIHNlbGVjdG9yXG5cdH1cbn1cblxuZnVuY3Rpb24gZmluZFRhYmxlKGNlbGwpe1xuXHRyZXR1cm4gY2VsbC5wYXJlbnROb2RlLnBhcmVudE5vZGVcbn1cblxuZnVuY3Rpb24gZmluZFJvdyhjZWxsKXtcblx0cmV0dXJuIGNlbGwucGFyZW50Tm9kZVxufVxuXG5mdW5jdGlvbiBpcyh0YWJsZSxyb3csIGNlbGwsIGNvbmRpdGlvbil7XG5cdHJldHVybiBBcnJheS5mcm9tKHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoY29uZGl0aW9uKSkuaW5kZXhPZihjZWxsKSE9LTFcbn1cblxuY2xhc3MgUHJpb3JpdGllc3tcblx0Y29uc3RydWN0b3IoKXtcblxuXHR9XG5cbn1cblxuVGFibGUuUHJvcGVydGllcz1jbGFzcyBQcm9wZXJ0aWVzIGV4dGVuZHMgU3R5bGUuUHJvcGVydGllc3tcblx0dGJsQm9yZGVycyh4KXtcblx0XHRsZXQgcGFyZW50U3R5bGVJZD10aGlzLnBhcmVudC5zdHlsZUlkXG5cdFx0eC5sZWZ0ICYmIHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHBhcmVudFN0eWxlSWQrXCIuKmZpcnN0Q29sXCIpLnNldChcImJvcmRlci1sZWZ0XCIsdGhpcy5fYm9yZGVyKHgubGVmdCkpXG5cblx0XHR4LnJpZ2h0ICYmIHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHBhcmVudFN0eWxlSWQrXCIuKmxhc3RDb2xcIikuc2V0KFwiYm9yZGVyLXJpZ2h0XCIsdGhpcy5fYm9yZGVyKHgucmlnaHQpKVxuXG5cdFx0eC50b3AgJiYgdGhpcy5kb2MuY3JlYXRlU3R5bGUocGFyZW50U3R5bGVJZCtcIi4qZmlyc3RSb3dcIikuc2V0KFwiYm9yZGVyLXRvcFwiLHRoaXMuX2JvcmRlcih4LnRvcCkpXG5cblx0XHR4LmJvdHRvbSAmJiB0aGlzLmRvYy5jcmVhdGVTdHlsZShwYXJlbnRTdHlsZUlkK1wiLipsYXN0Um93XCIpLnNldChcImJvcmRlci1ib3R0b21cIix0aGlzLl9ib3JkZXIoeC5ib3R0b20pKVxuXG5cdFx0eC5pbnNpZGVWICYmIHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHBhcmVudFN0eWxlSWQrXCIuKiFmaXJzdENvbFwiKS5zZXQoXCJib3JkZXItbGVmdFwiLHRoaXMuX2JvcmRlcih4Lmluc2lkZVYpKVxuXG5cdFx0eC5pbnNpZGVIICYmIHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHBhcmVudFN0eWxlSWQrXCIuKiFmaXJzdFJvd1wiKS5zZXQoXCJib3JkZXItdG9wXCIsdGhpcy5fYm9yZGVyKHguaW5zaWRlSCkpXG5cdH1cblx0dGJsQ2VsbE1hcih4KXtcblx0XHRsZXQgc3R5bGU9dGhpcy5kb2MuY3JlYXRlU3R5bGUodGhpcy5wYXJlbnQuc3R5bGVJZCtcIi4qY2VsbFwiKVxuXHRcdE9iamVjdC5rZXlzKHgpLmZvckVhY2goaT0+c3R5bGUuc2V0KGBwYWRkaW5nLSR7aX1gLCh4W2ldPDEgJiYgeFtpXT4wID8gMSA6IHhbaV0pKydwdCcpKVxuXHR9XG5cdHRibEluZCh4KXtcblx0XHR4ICYmIHRoaXMuc2V0KFwibWFyZ2luLWxlZnRcIix4KydwdCcpXG5cdH1cblx0dGJsVyh4KXtcblx0XHR4ICYmIHghPSdhdXRvJyAmJiB0aGlzLnNldChcIndpZHRoXCIseClcblx0fVxufVxuXG5cblRhYmxlLlJvd1Byb3BlcnRpZXM9Y2xhc3MgUm93UHJvcGVydGllcyBleHRlbmRzIFN0eWxlLlByb3BlcnRpZXN7XG5cdGNvbnN0cnVjdG9yKHN0eWxlLHBhcmVudCl7XG5cdFx0c3VwZXIoLi4uYXJndW1lbnRzKVxuXHRcdHRoaXMucGFyZW50PXBhcmVudFxuXHRcdHRoaXMuZG9jPXBhcmVudC5kb2Ncblx0fVxufVxuXG5UYWJsZS5DZWxsUHJvcGVydGllcz1jbGFzcyBDZWxsUHJvcGVydGllcyBleHRlbmRzIFN0eWxlLlByb3BlcnRpZXN7XG5cdGNvbnN0cnVjdG9yKHN0eWxlLHBhcmVudCl7XG5cdFx0c3VwZXIoLi4uYXJndW1lbnRzKVxuXHRcdHRoaXMucGFyZW50PXBhcmVudFxuXHRcdHRoaXMuZG9jPXBhcmVudC5kb2Ncblx0fVxuXHR0Y0JvcmRlcnMoeCl7XG5cdFx0dmFyIHRhYmxlU2VsZWN0b3I9dGhpcy5wYXJlbnQuZ2V0VGFibGVTZWxlY3RvcigpLCBzZWxlY3Rvcj10aGlzLnBhcmVudC5nZXRQcmlvcml0aXplZFNlbGVjdG9yKClcblx0XHRzd2l0Y2godGhpcy5wYXJlbnQudGFyZ2V0KXtcblx0XHRcdGNhc2UgJ2ZpcnN0Um93Jzpcblx0XHRcdGNhc2UgJ2xhc3RSb3cnOlxuXHRcdFx0Y2FzZSAnYmFuZDFIb3J6Jzpcblx0XHRcdGNhc2UgJ2JhbmQySG9yeic6XG5cdFx0XHRcdHZhciBzdHlsZTtcblx0XHRcdFx0eC5sZWZ0ICYmICh0aGlzLmRvYy5jcmVhdGVTdHlsZSh0YWJsZVNlbGVjdG9yKyc+Licrc2VsZWN0b3IrJz50ZDpmaXJzdC1jaGlsZCcpLmJvcmRlckxlZnQ9dGhpcy5fYm9yZGVyKHgubGVmdCkpOy8vMDAyMVxuXHRcdFx0XHR4LnJpZ2h0ICYmICh0aGlzLmRvYy5jcmVhdGVTdHlsZSh0YWJsZVNlbGVjdG9yKyc+Licrc2VsZWN0b3IrJz50ZDpsYXN0LWNoaWxkJykuYm9yZGVyUmlnaHQ9dGhpcy5fYm9yZGVyKHgucmlnaHQpKTsvLzAwMjFcblx0XHRcdFx0eC50b3AgJiYgKHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRhYmxlU2VsZWN0b3IrJz4uJytzZWxlY3RvcisnPnRkJykuYm9yZGVyVG9wPXRoaXMuX2JvcmRlcih4LnRvcCkpOy8vMDAxMVxuXHRcdFx0XHR4LmJvdHRvbSAmJiAodGhpcy5kb2MuY3JlYXRlU3R5bGUodGFibGVTZWxlY3RvcisnPi4nK3NlbGVjdG9yKyc+dGQnKS5ib3JkZXJCb3R0b209dGhpcy5fYm9yZGVyKHguYm90dG9tKSk7Ly8vLzAwMTFcblx0XHRcdFx0eC5pbnNpZGVWICYmICgoc3R5bGU9dGhpcy5kb2MuY3JlYXRlU3R5bGUodGFibGVTZWxlY3RvcisnPi4nK3NlbGVjdG9yKyc+dGQ6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKScpKS5ib3JkZXJSaWdodD1zdHlsZS5ib3JkZXJMZWZ0PXRoaXMuX2JvcmRlcih4Lmluc2lkZVYpKTsvLzAwMzFcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2ZpcnN0Q29sJzpcblx0XHRcdGNhc2UgJ2xhc3RDb2wnOlxuXHRcdFx0Y2FzZSAnYmFuZDJWZXJ0Jzpcblx0XHRcdGNhc2UgJ2JhbmQxVmVydCc6XG5cdFx0XHRcdHgudG9wICYmICh0aGlzLmRvYy5jcmVhdGVTdHlsZSh0YWJsZVNlbGVjdG9yKyc+dHI6Zmlyc3Qtb2YtdHlwZT4uJytzZWxlY3RvcikuYm9yZGVyVG9wPXRoaXMuX2JvcmRlcih4LnRvcCkpOy8vMDAyMVxuXHRcdFx0XHR4LmxlZnQgJiYgKHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRhYmxlU2VsZWN0b3IrJz50cjpmaXJzdC1vZi10eXBlPi4nK3NlbGVjdG9yKS5ib3JkZXJMZWZ0PXRoaXMuX2JvcmRlcih4LmxlZnQpKTsvLzAwMjFcblx0XHRcdFx0eC5yaWdodCAmJiAodGhpcy5kb2MuY3JlYXRlU3R5bGUodGFibGVTZWxlY3RvcisnPnRyOmZpcnN0LW9mLXR5cGU+Licrc2VsZWN0b3IpLmJvcmRlclJpZ2h0PXRoaXMuX2JvcmRlcih4LnJpZ2h0KSk7Ly8wMDIxXG5cblx0XHRcdFx0eC5ib3R0b20gJiYgKHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRhYmxlU2VsZWN0b3IrJz50cjpsYXN0LW9mLXR5cGU+Licrc2VsZWN0b3IpLmJvcmRlckJvdHRvbT10aGlzLl9ib3JkZXIoeC5ib3R0b20pKTsvLzAwMjFcblx0XHRcdFx0eC5sZWZ0ICYmICh0aGlzLmRvYy5jcmVhdGVTdHlsZSh0YWJsZVNlbGVjdG9yKyc+dHI6bGFzdC1vZi10eXBlPi4nK3NlbGVjdG9yKS5ib3JkZXJMZWZ0PXRoaXMuX2JvcmRlcih4LmxlZnQpKTsvLzAwMjFcblx0XHRcdFx0eC5yaWdodCAmJiAodGhpcy5kb2MuY3JlYXRlU3R5bGUodGFibGVTZWxlY3RvcisnPnRyOmxhc3Qtb2YtdHlwZT4uJytzZWxlY3RvcikuYm9yZGVyUmlnaHQ9dGhpcy5fYm9yZGVyKHgucmlnaHQpKTsvLzAwMjFcblxuXG5cdFx0XHRcdHgubGVmdCAmJiAodGhpcy5kb2MuY3JlYXRlU3R5bGUodGFibGVTZWxlY3RvcisnPnRyOm5vdCg6Zmlyc3Qtb2YtdHlwZSk6bm90KDpsYXN0LW9mLXR5cGUpPi4nK3NlbGVjdG9yKS5ib3JkZXJMZWZ0PXRoaXMuX2JvcmRlcih4LmxlZnQpKTsvLzAwMzFcblx0XHRcdFx0eC5yaWdodCAmJiAodGhpcy5kb2MuY3JlYXRlU3R5bGUodGFibGVTZWxlY3RvcisnPnRyOm5vdCg6Zmlyc3Qtb2YtdHlwZSk6bm90KDpsYXN0LW9mLXR5cGUpPi4nK3NlbGVjdG9yKS5ib3JkZXJSaWdodD10aGlzLl9ib3JkZXIoeC5yaWdodCkpOy8vMDAzMVxuXHRcdFx0XHRicmVha1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0eC5sZWZ0ICYmICh0aGlzLmRvYy5jcmVhdGVTdHlsZSh0YWJsZVNlbGVjdG9yKyc+dHI+Licrc2VsZWN0b3IpLmJvcmRlckxlZnQ9dGhpcy5fYm9yZGVyKHgubGVmdCkpLy8wMDExXG5cdFx0XHRcdHgucmlnaHQgJiYgKHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRhYmxlU2VsZWN0b3IrJz50cj4uJytzZWxlY3RvcikuYm9yZGVyUmlnaHQ9dGhpcy5fYm9yZGVyKHgucmlnaHQpKS8vMDAxMVxuXHRcdFx0XHR4LnRvcCAmJiAodGhpcy5kb2MuY3JlYXRlU3R5bGUodGFibGVTZWxlY3RvcisnPnRyPi4nK3NlbGVjdG9yKS5ib3JkZXJUb3A9dGhpcy5fYm9yZGVyKHgudG9wKSkvLzAwMTFcblx0XHRcdFx0eC5ib3R0b20gJiYgKHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRhYmxlU2VsZWN0b3IrJz50cj4uJytzZWxlY3RvcikuYm9yZGVyQm90dG9tPXRoaXMuX2JvcmRlcih4LmJvdHRvbSkpLy8wMDExXG5cdFx0fVxuXHR9XG5cdHNoZCh4KXtcblx0XHR0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvcj14XG5cdH1cblx0Z3JpZFNwYW4oeCl7XG5cdFx0dGhpcy5wYXJlbnQuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLHgpXG5cdH1cbn1cblxuVGFibGUuVGFibGVTdHlsZXM9J2ZpcnN0Um93LGxhc3RSb3csZmlyc3RDb2wsbGFzdENvbCxiYW5kMVZlcnQsYmFuZDJWZXJ0LGJhbmQxSG9yeixiYW5kMkhvcnosbmVDZWxsLG53Q2VsbCxzZUNlbGwsc3dDZWxsJy5zcGxpdCgnLCcpXG4iXX0=