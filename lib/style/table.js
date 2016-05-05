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

			var selector = this.getTableSelector() + '>' + (gRow.test(this.target) ? '.' + this.getPrioritizedSelector() + '>td' : 'tr>.' + this.getPrioritizedSelector());
			switch (category) {
				case 'table':
					return this[category] = new this.constructor.Properties(this.doc.createStyle(this.getTableSelector().replace(/\>\s*tbody$/i, '')), this);
				case 'inline':
					//0012
					return this[category] = new _inline2.default.Properties(this.doc.createStyle(selector + ' span'));
				case 'paragraph':
					//0012
					return this[category] = new _paragraph2.default.Properties(this.doc.createStyle(selector + ' p'));
				case 'cell':
					//0011
					return this[category] = new this.constructor.CellProperties(this.doc.createStyle(selector), this);
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
			return 'nwCell,neCell,swCell,seCell,firstRow,lastRow,firstCol,lastCol,band1Vert,band2Vert,band1Horz,band2Horz'.split(',').reverse();
		}
	}]);

	return Table;
}(_converter2.default);

exports.default = Table;


Table.Properties = function (_Style$Properties) {
	_inherits(Properties, _Style$Properties);

	function Properties(style, parent) {
		_classCallCheck(this, Properties);

		var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Properties).apply(this, arguments));

		_this2.parent = parent;
		_this2.doc = parent.doc;
		_this2.tableSelector = parent.getTableSelector();
		return _this2;
	}

	_createClass(Properties, [{
		key: 'tblBorders',
		value: function tblBorders(x) {
			x.left && (this.doc.createStyle(this.tableSelector + '>tr>td:first-child').borderLeft = this._border(x.left)); //0012
			x.right && (this.doc.createStyle(this.tableSelector + '>tr>td:last-child').borderRight = this._border(x.right)); //0012
			x.top && (this.doc.createStyle(this.tableSelector + '>tr:first-of-type>td').borderTop = this._border(x.top)); //0012
			x.bottom && (this.doc.createStyle(this.tableSelector + '>tr:last-of-type>td').borderBottom = this._border(x.bottom)); //0012

			if (x.insideV) {
				var css = this._border(x.insideV);
				var style = this.doc.createStyle(this.tableSelector + '>tr>td:not(:first-child):not(:last-child)'); //0022
				style.borderRight = style.borderLeft = css;
				this.doc.createStyle(this.tableSelector + '>tr>td:last-child').borderLeft = css; //0012
				this.doc.createStyle(this.tableSelector + '>tr>td:first-child').borderRight = css; //0012
			}

			if (x.insideH) {
				var css = this._border(x.insideH);
				var style = this.doc.createStyle(this.tableSelector + '>tr:not(:first-of-type):not(:last-of-type)>td'); //0022
				style.borderTop = style.borderBottom = css;
				this.doc.createStyle(this.tableSelector + '>tr:last-of-type>td').borderTop = css; //0012
				this.doc.createStyle(this.tableSelector + '>tr:first-of-type>td').borderBottom = css; //0012
			}
		}
	}, {
		key: 'tblCellMar',
		value: function tblCellMar(x) {
			for (var i in x) {
				this.doc.createStyle(this.tableSelector + '>tr>td')['padding' + this.upperFirst(i)] = (x[i] < 1 && x[i] > 0 ? 1 : x[i]) + 'pt';
			} //0002
		}
	}, {
		key: 'tblInd',
		value: function tblInd(x) {
			x && (this.style.marginLeft = x + 'pt');
		}
	}, {
		key: 'tblW',
		value: function tblW(x) {
			x && x != 'auto' && (this.style.width = x);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS90YWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLElBQUksT0FBSyxXQUFMOztJQUNpQjs7O0FBQ3BCLFVBRG9CLEtBQ3BCLEdBQWE7d0JBRE8sT0FDUDs7cUVBRE8sbUJBRVYsWUFERzs7QUFFWixRQUFLLE1BQUwsR0FBWSxNQUFLLFNBQUwsQ0FBZSxTQUFmLEVBQVosQ0FGWTs7RUFBYjs7Y0FEb0I7OzBDQVNJLFVBQVM7QUFDaEMsT0FBRyxLQUFLLFFBQUwsQ0FBSCxFQUNDLE9BQU8sS0FBSyxRQUFMLENBQVAsQ0FERDs7QUFHQSxPQUFJLFdBQVMsS0FBSyxnQkFBTCxLQUF3QixHQUF4QixJQUE2QixLQUFLLElBQUwsQ0FBVSxLQUFLLE1BQUwsQ0FBVixHQUF5QixNQUFJLEtBQUssc0JBQUwsRUFBSixHQUFrQyxLQUFsQyxHQUEwQyxTQUFPLEtBQUssc0JBQUwsRUFBUCxDQUFoRyxDQUptQjtBQUtoQyxXQUFPLFFBQVA7QUFDQSxTQUFLLE9BQUw7QUFDQyxZQUFPLEtBQUssUUFBTCxJQUFlLElBQUksS0FBSyxXQUFMLENBQWlCLFVBQWpCLENBQTRCLEtBQUssR0FBTCxDQUFTLFdBQVQsQ0FBcUIsS0FBSyxnQkFBTCxHQUF3QixPQUF4QixDQUFnQyxjQUFoQyxFQUErQyxFQUEvQyxDQUFyQixDQUFoQyxFQUEwRyxJQUExRyxDQUFmLENBRFI7QUFEQSxTQUdLLFFBQUw7O0FBQ0MsWUFBTyxLQUFLLFFBQUwsSUFBZSxJQUFJLGlCQUFPLFVBQVAsQ0FBa0IsS0FBSyxHQUFMLENBQVMsV0FBVCxDQUFxQixXQUFTLE9BQVQsQ0FBM0MsQ0FBZixDQURSO0FBSEEsU0FLSyxXQUFMOztBQUNDLFlBQU8sS0FBSyxRQUFMLElBQWUsSUFBSSxvQkFBVSxVQUFWLENBQXFCLEtBQUssR0FBTCxDQUFTLFdBQVQsQ0FBcUIsV0FBUyxJQUFULENBQTlD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QixDQUFxRCxTQUFyRCxHQUErRCxLQUFLLE9BQUwsQ0FBYSxFQUFFLEdBQUYsQ0FBNUUsQ0FBVjtBQUhELE1BSUMsQ0FBRSxNQUFGLEtBQWEsS0FBSyxHQUFMLENBQVMsV0FBVCxDQUFxQixnQkFBYyxPQUFkLEdBQXNCLFFBQXRCLENBQXJCLENBQXFELFlBQXJELEdBQWtFLEtBQUssT0FBTCxDQUFhLEVBQUUsTUFBRixDQUEvRSxDQUFiLENBSkQ7QUE1QkQsSUFGVzs7OztzQkFxQ1IsR0FBRTtBQUNMLFFBQUssS0FBTCxDQUFXLGVBQVgsR0FBMkIsQ0FBM0IsQ0FESzs7OzsyQkFHRyxHQUFFO0FBQ1YsUUFBSyxNQUFMLENBQVksT0FBWixDQUFvQixZQUFwQixDQUFpQyxTQUFqQyxFQUEyQyxDQUEzQyxFQURVOzs7O1FBOUNlO0VBQXVCLG9CQUFNLFVBQU4sQ0FBbEQ7O0FBbURBLE1BQU0sV0FBTixHQUFrQix3R0FBd0csS0FBeEcsQ0FBOEcsR0FBOUcsQ0FBbEIiLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGUgZnJvbSAnLi9jb252ZXJ0ZXInXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gJy4vcGFyYWdyYXBoJ1xuaW1wb3J0IElubGluZSBmcm9tICcuL2lubGluZSdcblxuLypcbnRoZSBwcmlvcml0eSBvZiBjc3MgcnVsZSBzaG91bGQgYmUgYWxpZ25lZCB3aXRoIHdvcmRcbiovXG5cbnZhciBnUm93PS9yb3d8aG9yei9pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZSBleHRlbmRzIFN0eWxle1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cylcblx0XHR0aGlzLnRhcmdldD10aGlzLndvcmRNb2RlbC5nZXRUYXJnZXQoKVxuXHR9XG5cdGdldCBQcmlvcml0aXppZWRTdHlsZXMoKXtcblx0XHRyZXR1cm4gJ253Q2VsbCxuZUNlbGwsc3dDZWxsLHNlQ2VsbCxmaXJzdFJvdyxsYXN0Um93LGZpcnN0Q29sLGxhc3RDb2wsYmFuZDFWZXJ0LGJhbmQyVmVydCxiYW5kMUhvcnosYmFuZDJIb3J6Jy5zcGxpdCgnLCcpLnJldmVyc2UoKVxuXHR9XG5cdFxuXHRfZ2V0UHJvcGVydGllc0NvbnZlcnRlcihjYXRlZ29yeSl7XG5cdFx0aWYodGhpc1tjYXRlZ29yeV0pXG5cdFx0XHRyZXR1cm4gdGhpc1tjYXRlZ29yeV1cblx0XHRcblx0XHR2YXIgc2VsZWN0b3I9dGhpcy5nZXRUYWJsZVNlbGVjdG9yKCkrJz4nKyhnUm93LnRlc3QodGhpcy50YXJnZXQpID8gJy4nK3RoaXMuZ2V0UHJpb3JpdGl6ZWRTZWxlY3RvcigpKyc+dGQnIDogJ3RyPi4nK3RoaXMuZ2V0UHJpb3JpdGl6ZWRTZWxlY3RvcigpKVx0XG5cdFx0c3dpdGNoKGNhdGVnb3J5KXtcblx0XHRjYXNlICd0YWJsZSc6XG5cdFx0XHRyZXR1cm4gdGhpc1tjYXRlZ29yeV09bmV3IHRoaXMuY29uc3RydWN0b3IuUHJvcGVydGllcyh0aGlzLmRvYy5jcmVhdGVTdHlsZSh0aGlzLmdldFRhYmxlU2VsZWN0b3IoKS5yZXBsYWNlKC9cXD5cXHMqdGJvZHkkL2ksJycpKSwgdGhpcylcblx0XHRjYXNlICdpbmxpbmUnOi8vMDAxMlxuXHRcdFx0cmV0dXJuIHRoaXNbY2F0ZWdvcnldPW5ldyBJbmxpbmUuUHJvcGVydGllcyh0aGlzLmRvYy5jcmVhdGVTdHlsZShzZWxlY3RvcisnIHNwYW4nKSlcblx0XHRjYXNlICdwYXJhZ3JhcGgnOi8vMDAxMlxuXHRcdFx0cmV0dXJuIHRoaXNbY2F0ZWdvcnldPW5ldyBQYXJhZ3JhcGguUHJvcGVydGllcyh0aGlzLmRvYy5jcmVhdGVTdHlsZShzZWxlY3RvcisnIHAnKSlcblx0XHRjYXNlICdjZWxsJzovLzAwMTFcblx0XHRcdHJldHVybiB0aGlzW2NhdGVnb3J5XT1uZXcgdGhpcy5jb25zdHJ1Y3Rvci5DZWxsUHJvcGVydGllcyh0aGlzLmRvYy5jcmVhdGVTdHlsZShzZWxlY3RvciksdGhpcylcblx0XHR9XG5cdH1cblx0XG5cdGdldFRhYmxlU2VsZWN0b3IoKXtcblx0XHRyZXR1cm4gJy4nK1N0eWxlLmFzQ3NzSUQodGhpcy53b3JkTW9kZWwuaWQpKyc+dGJvZHknXG5cdH1cblx0XG5cdGdldFByaW9yaXRpemVkU2VsZWN0b3IoKXtcblx0XHR2YXIgc2VsZWN0b3I9dGhpcy50YXJnZXRcblx0XHRmb3IodmFyIGxldmVsPXRoaXMuUHJpb3JpdGl6aWVkU3R5bGVzLmluZGV4T2YodGhpcy50YXJnZXQpLGk9MDtpPGxldmVsO2krKylcblx0XHRcdHNlbGVjdG9yPXNlbGVjdG9yKydbeCcraSsnXSc7XG5cdFx0cmV0dXJuIHNlbGVjdG9yXG5cdH1cbn1cblx0XG5UYWJsZS5Qcm9wZXJ0aWVzPWNsYXNzIFByb3BlcnRpZXMgZXh0ZW5kcyBTdHlsZS5Qcm9wZXJ0aWVze1xuXHRjb25zdHJ1Y3RvcihzdHlsZSwgcGFyZW50KXtcblx0XHRzdXBlciguLi5hcmd1bWVudHMpXG5cdFx0dGhpcy5wYXJlbnQ9cGFyZW50XG5cdFx0dGhpcy5kb2M9cGFyZW50LmRvY1xuXHRcdHRoaXMudGFibGVTZWxlY3Rvcj1wYXJlbnQuZ2V0VGFibGVTZWxlY3RvcigpXG5cdH1cblx0dGJsQm9yZGVycyh4KXtcblx0XHR4LmxlZnQgJiYgKHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRoaXMudGFibGVTZWxlY3RvcisnPnRyPnRkOmZpcnN0LWNoaWxkJykuYm9yZGVyTGVmdD10aGlzLl9ib3JkZXIoeC5sZWZ0KSkgLy8wMDEyXG5cdFx0eC5yaWdodCAmJiAodGhpcy5kb2MuY3JlYXRlU3R5bGUodGhpcy50YWJsZVNlbGVjdG9yKyc+dHI+dGQ6bGFzdC1jaGlsZCcpLmJvcmRlclJpZ2h0PXRoaXMuX2JvcmRlcih4LnJpZ2h0KSkvLzAwMTJcblx0XHR4LnRvcCAmJiAodGhpcy5kb2MuY3JlYXRlU3R5bGUodGhpcy50YWJsZVNlbGVjdG9yKyc+dHI6Zmlyc3Qtb2YtdHlwZT50ZCcpLmJvcmRlclRvcD10aGlzLl9ib3JkZXIoeC50b3ApKS8vMDAxMlxuXHRcdHguYm90dG9tICYmICh0aGlzLmRvYy5jcmVhdGVTdHlsZSh0aGlzLnRhYmxlU2VsZWN0b3IrJz50cjpsYXN0LW9mLXR5cGU+dGQnKS5ib3JkZXJCb3R0b209dGhpcy5fYm9yZGVyKHguYm90dG9tKSkvLzAwMTJcblx0XHRcblx0XHRpZih4Lmluc2lkZVYpe1xuXHRcdFx0dmFyIGNzcz10aGlzLl9ib3JkZXIoeC5pbnNpZGVWKVxuXHRcdFx0dmFyIHN0eWxlPXRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRoaXMudGFibGVTZWxlY3RvcisnPnRyPnRkOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCknKS8vMDAyMlxuXHRcdFx0c3R5bGUuYm9yZGVyUmlnaHQ9c3R5bGUuYm9yZGVyTGVmdD1jc3Ncblx0XHRcdHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRoaXMudGFibGVTZWxlY3RvcisnPnRyPnRkOmxhc3QtY2hpbGQnKS5ib3JkZXJMZWZ0PWNzcy8vMDAxMlxuXHRcdFx0dGhpcy5kb2MuY3JlYXRlU3R5bGUodGhpcy50YWJsZVNlbGVjdG9yKyc+dHI+dGQ6Zmlyc3QtY2hpbGQnKS5ib3JkZXJSaWdodD1jc3MvLzAwMTJcblx0XHR9XG5cdFx0XG5cdFx0aWYoeC5pbnNpZGVIKXtcblx0XHRcdHZhciBjc3M9dGhpcy5fYm9yZGVyKHguaW5zaWRlSClcblx0XHRcdHZhciBzdHlsZT10aGlzLmRvYy5jcmVhdGVTdHlsZSh0aGlzLnRhYmxlU2VsZWN0b3IrJz50cjpub3QoOmZpcnN0LW9mLXR5cGUpOm5vdCg6bGFzdC1vZi10eXBlKT50ZCcpLy8wMDIyXG5cdFx0XHRzdHlsZS5ib3JkZXJUb3A9c3R5bGUuYm9yZGVyQm90dG9tPWNzc1xuXHRcdFx0dGhpcy5kb2MuY3JlYXRlU3R5bGUodGhpcy50YWJsZVNlbGVjdG9yKyc+dHI6bGFzdC1vZi10eXBlPnRkJykuYm9yZGVyVG9wPWNzcy8vMDAxMlxuXHRcdFx0dGhpcy5kb2MuY3JlYXRlU3R5bGUodGhpcy50YWJsZVNlbGVjdG9yKyc+dHI6Zmlyc3Qtb2YtdHlwZT50ZCcpLmJvcmRlckJvdHRvbT1jc3MvLzAwMTJcblx0XHR9XG5cdH1cblx0dGJsQ2VsbE1hcih4KXtcblx0XHRmb3IodmFyIGkgaW4geClcblx0XHRcdHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRoaXMudGFibGVTZWxlY3RvcisnPnRyPnRkJylbJ3BhZGRpbmcnK3RoaXMudXBwZXJGaXJzdChpKV09KHhbaV08MSAmJiB4W2ldPjAgPyAxIDogeFtpXSkrJ3B0Jy8vMDAwMlxuXHR9XG5cdHRibEluZCh4KXtcblx0XHR4ICYmICh0aGlzLnN0eWxlLm1hcmdpbkxlZnQ9eCsncHQnKVxuXHR9XG5cdHRibFcoeCl7XG5cdFx0eCAmJiB4IT0nYXV0bycgJiYgKHRoaXMuc3R5bGUud2lkdGg9eClcblx0fVxufVxuXHRcdFxuXG5UYWJsZS5Sb3dQcm9wZXJ0aWVzPWNsYXNzIFJvd1Byb3BlcnRpZXMgZXh0ZW5kcyBTdHlsZS5Qcm9wZXJ0aWVze1xuXHRjb25zdHJ1Y3RvcihzdHlsZSxwYXJlbnQpe1xuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cylcblx0XHR0aGlzLnBhcmVudD1wYXJlbnRcblx0XHR0aGlzLmRvYz1wYXJlbnQuZG9jXG5cdH1cbn1cblxuVGFibGUuQ2VsbFByb3BlcnRpZXM9Y2xhc3MgQ2VsbFByb3BlcnRpZXMgZXh0ZW5kcyBTdHlsZS5Qcm9wZXJ0aWVze1xuXHRjb25zdHJ1Y3RvcihzdHlsZSxwYXJlbnQpe1xuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cylcblx0XHR0aGlzLnBhcmVudD1wYXJlbnRcblx0XHR0aGlzLmRvYz1wYXJlbnQuZG9jXG5cdH1cblx0dGNCb3JkZXJzKHgpe1xuXHRcdHZhciB0YWJsZVNlbGVjdG9yPXRoaXMucGFyZW50LmdldFRhYmxlU2VsZWN0b3IoKSwgc2VsZWN0b3I9dGhpcy5wYXJlbnQuZ2V0UHJpb3JpdGl6ZWRTZWxlY3RvcigpXG5cdFx0c3dpdGNoKHRoaXMucGFyZW50LnRhcmdldCl7XG5cdFx0XHRjYXNlICdmaXJzdFJvdyc6XG5cdFx0XHRjYXNlICdsYXN0Um93Jzpcblx0XHRcdGNhc2UgJ2JhbmQxSG9yeic6XG5cdFx0XHRjYXNlICdiYW5kMkhvcnonOlxuXHRcdFx0XHR2YXIgc3R5bGU7XG5cdFx0XHRcdHgubGVmdCAmJiAodGhpcy5kb2MuY3JlYXRlU3R5bGUodGFibGVTZWxlY3RvcisnPi4nK3NlbGVjdG9yKyc+dGQ6Zmlyc3QtY2hpbGQnKS5ib3JkZXJMZWZ0PXRoaXMuX2JvcmRlcih4LmxlZnQpKTsvLzAwMjFcblx0XHRcdFx0eC5yaWdodCAmJiAodGhpcy5kb2MuY3JlYXRlU3R5bGUodGFibGVTZWxlY3RvcisnPi4nK3NlbGVjdG9yKyc+dGQ6bGFzdC1jaGlsZCcpLmJvcmRlclJpZ2h0PXRoaXMuX2JvcmRlcih4LnJpZ2h0KSk7Ly8wMDIxXG5cdFx0XHRcdHgudG9wICYmICh0aGlzLmRvYy5jcmVhdGVTdHlsZSh0YWJsZVNlbGVjdG9yKyc+Licrc2VsZWN0b3IrJz50ZCcpLmJvcmRlclRvcD10aGlzLl9ib3JkZXIoeC50b3ApKTsvLzAwMTFcblx0XHRcdFx0eC5ib3R0b20gJiYgKHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRhYmxlU2VsZWN0b3IrJz4uJytzZWxlY3RvcisnPnRkJykuYm9yZGVyQm90dG9tPXRoaXMuX2JvcmRlcih4LmJvdHRvbSkpOy8vLy8wMDExXG5cdFx0XHRcdHguaW5zaWRlViAmJiAoKHN0eWxlPXRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRhYmxlU2VsZWN0b3IrJz4uJytzZWxlY3RvcisnPnRkOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCknKSkuYm9yZGVyUmlnaHQ9c3R5bGUuYm9yZGVyTGVmdD10aGlzLl9ib3JkZXIoeC5pbnNpZGVWKSk7Ly8wMDMxXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdmaXJzdENvbCc6XG5cdFx0XHRjYXNlICdsYXN0Q29sJzpcblx0XHRcdGNhc2UgJ2JhbmQyVmVydCc6XG5cdFx0XHRjYXNlICdiYW5kMVZlcnQnOlxuXHRcdFx0XHR4LnRvcCAmJiAodGhpcy5kb2MuY3JlYXRlU3R5bGUodGFibGVTZWxlY3RvcisnPnRyOmZpcnN0LW9mLXR5cGU+Licrc2VsZWN0b3IpLmJvcmRlclRvcD10aGlzLl9ib3JkZXIoeC50b3ApKTsvLzAwMjFcblx0XHRcdFx0eC5sZWZ0ICYmICh0aGlzLmRvYy5jcmVhdGVTdHlsZSh0YWJsZVNlbGVjdG9yKyc+dHI6Zmlyc3Qtb2YtdHlwZT4uJytzZWxlY3RvcikuYm9yZGVyTGVmdD10aGlzLl9ib3JkZXIoeC5sZWZ0KSk7Ly8wMDIxXG5cdFx0XHRcdHgucmlnaHQgJiYgKHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRhYmxlU2VsZWN0b3IrJz50cjpmaXJzdC1vZi10eXBlPi4nK3NlbGVjdG9yKS5ib3JkZXJSaWdodD10aGlzLl9ib3JkZXIoeC5yaWdodCkpOy8vMDAyMVxuXHRcdFx0XHRcblx0XHRcdFx0eC5ib3R0b20gJiYgKHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRhYmxlU2VsZWN0b3IrJz50cjpsYXN0LW9mLXR5cGU+Licrc2VsZWN0b3IpLmJvcmRlckJvdHRvbT10aGlzLl9ib3JkZXIoeC5ib3R0b20pKTsvLzAwMjFcblx0XHRcdFx0eC5sZWZ0ICYmICh0aGlzLmRvYy5jcmVhdGVTdHlsZSh0YWJsZVNlbGVjdG9yKyc+dHI6bGFzdC1vZi10eXBlPi4nK3NlbGVjdG9yKS5ib3JkZXJMZWZ0PXRoaXMuX2JvcmRlcih4LmxlZnQpKTsvLzAwMjFcblx0XHRcdFx0eC5yaWdodCAmJiAodGhpcy5kb2MuY3JlYXRlU3R5bGUodGFibGVTZWxlY3RvcisnPnRyOmxhc3Qtb2YtdHlwZT4uJytzZWxlY3RvcikuYm9yZGVyUmlnaHQ9dGhpcy5fYm9yZGVyKHgucmlnaHQpKTsvLzAwMjFcblx0XHRcdFx0XG5cdFx0XHRcdFxuXHRcdFx0XHR4LmxlZnQgJiYgKHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRhYmxlU2VsZWN0b3IrJz50cjpub3QoOmZpcnN0LW9mLXR5cGUpOm5vdCg6bGFzdC1vZi10eXBlKT4uJytzZWxlY3RvcikuYm9yZGVyTGVmdD10aGlzLl9ib3JkZXIoeC5sZWZ0KSk7Ly8wMDMxXG5cdFx0XHRcdHgucmlnaHQgJiYgKHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRhYmxlU2VsZWN0b3IrJz50cjpub3QoOmZpcnN0LW9mLXR5cGUpOm5vdCg6bGFzdC1vZi10eXBlKT4uJytzZWxlY3RvcikuYm9yZGVyUmlnaHQ9dGhpcy5fYm9yZGVyKHgucmlnaHQpKTsvLzAwMzFcblx0XHRcdFx0YnJlYWtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHgubGVmdCAmJiAodGhpcy5kb2MuY3JlYXRlU3R5bGUodGFibGVTZWxlY3RvcisnPnRyPi4nK3NlbGVjdG9yKS5ib3JkZXJMZWZ0PXRoaXMuX2JvcmRlcih4LmxlZnQpKS8vMDAxMVxuXHRcdFx0XHR4LnJpZ2h0ICYmICh0aGlzLmRvYy5jcmVhdGVTdHlsZSh0YWJsZVNlbGVjdG9yKyc+dHI+Licrc2VsZWN0b3IpLmJvcmRlclJpZ2h0PXRoaXMuX2JvcmRlcih4LnJpZ2h0KSkvLzAwMTFcblx0XHRcdFx0eC50b3AgJiYgKHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRhYmxlU2VsZWN0b3IrJz50cj4uJytzZWxlY3RvcikuYm9yZGVyVG9wPXRoaXMuX2JvcmRlcih4LnRvcCkpLy8wMDExXG5cdFx0XHRcdHguYm90dG9tICYmICh0aGlzLmRvYy5jcmVhdGVTdHlsZSh0YWJsZVNlbGVjdG9yKyc+dHI+Licrc2VsZWN0b3IpLmJvcmRlckJvdHRvbT10aGlzLl9ib3JkZXIoeC5ib3R0b20pKS8vMDAxMVxuXHRcdH1cblx0fVxuXHRzaGQoeCl7XG5cdFx0dGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9eFxuXHR9XG5cdGdyaWRTcGFuKHgpe1xuXHRcdHRoaXMucGFyZW50LmNvbnRlbnQuc2V0QXR0cmlidXRlKCdjb2xzcGFuJyx4KVxuXHR9XG59XG5cdFx0XG5UYWJsZS5UYWJsZVN0eWxlcz0nZmlyc3RSb3csbGFzdFJvdyxmaXJzdENvbCxsYXN0Q29sLGJhbmQxVmVydCxiYW5kMlZlcnQsYmFuZDFIb3J6LGJhbmQySG9yeixuZUNlbGwsbndDZWxsLHNlQ2VsbCxzd0NlbGwnLnNwbGl0KCcsJykiXX0=