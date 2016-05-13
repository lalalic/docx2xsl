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
		if (_this.target == "table") _this.target = "";
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
					return this[category] = new _inline2.default.Properties(this.doc.createStyle(this.styleId + ".*inline"), this);
				case 'paragraph':
					//0012
					return this[category] = new _paragraph2.default.Properties(this.doc.createStyle(this.styleId + ".*block"), this);
				case 'cell':
					//0011
					return this[category] = new this.constructor.CellProperties(this.doc.createStyle(this.styleId + ".*cell"), this);
			}
		}
	}, {
		key: 'styleId',
		get: function get() {
			return this.wordModel.id + (this.target ? '.' + this.target : "");
		}
	}]);

	return Table;
}(_converter2.default);

Table.OrderedTargetStyles = "band1Vert,band2Vert,band1Horz,band2Horz,firstRow,lastRow,firstCol,lastCol,nwCell,neCell,swCell,seCell".split(",");
exports.default = Table;


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
			var parentStyleId = this.parent.styleId;
			switch (this.parent.target) {
				case 'firstRow':
				case 'lastRow':
				case 'band1Horz':
				case 'band2Horz':
					x.top && this.set("border-top", this._border(x.top));
					x.bottom && this.set("border-bottom", this._border(x.bottom));
					x.left && this.doc.createStyle(parentStyleId + '.*firstCol').set("border-left", this._border(x.left));
					x.right && this.doc.createStyle(parentStyleId + '.*lastCol').set("border-right", this._border(x.right));
					x.insideV && this.doc.createStyle(parentStyleId + ".*!firstCol").set("border-left", this._border(x.insideV));
					break;
				case 'firstCol':
				case 'lastCol':
				case 'band2Vert':
				case 'band1Vert':
					x.right && this.set("border-right", this._border(x.right));
					x.left && this.set("border-left", this._border(x.left));
					x.top && this.doc.createStyle(parentStyleId + ".*firstRow").set("border-top", this._border(x.top));
					x.bottom && this.doc.createStyle(parentStyleId + ".*lastRow").set("border-bottom", this._border(x.bottom));
					x.insideV && this.doc.createStyle(parentStyleId + ".*!firstCol").set("border-left", this._border(x.insideV));
					break;
				default:
					x.top && this.set("border-top", this._border(x.top));
					x.bottom && this.set("border-bottom", this._border(x.bottom));
					x.right && this.set("border-right", this._border(x.right));
					x.left && this.set("border-left", this._border(x.left));
					break;
			}
		}
	}, {
		key: 'shd',
		value: function shd(x) {
			this.set("background-color", x);
		}
	}, {
		key: 'gridSpan',
		value: function gridSpan(x) {
			this.parent.content.setAttribute('cols-pan', x);
		}
	}]);

	return CellProperties;
}(_converter2.default.Properties);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS90YWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLElBQUksT0FBSyxXQUFMOztJQUNpQjs7O0FBQ3BCLFVBRG9CLEtBQ3BCLEdBQWE7d0JBRE8sT0FDUDs7cUVBRE8sbUJBRVYsWUFERzs7QUFFWixRQUFLLE1BQUwsR0FBWSxNQUFLLFNBQUwsQ0FBZSxTQUFmLEVBQVosQ0FGWTtBQUdaLE1BQUcsTUFBSyxNQUFMLElBQWEsT0FBYixFQUNGLE1BQUssTUFBTCxHQUFZLEVBQVosQ0FERDtlQUhZO0VBQWI7O2NBRG9COzswQ0FZSSxVQUFTO0FBQ2hDLE9BQUcsS0FBSyxRQUFMLENBQUgsRUFDQyxPQUFPLEtBQUssUUFBTCxDQUFQLENBREQ7O0FBR0EsV0FBTyxRQUFQO0FBQ0EsU0FBSyxPQUFMO0FBQ0MsWUFBTyxLQUFLLFFBQUwsSUFBZSxJQUFJLEtBQUssV0FBTCxDQUFpQixVQUFqQixDQUE0QixLQUFLLEtBQUwsRUFBVyxJQUEzQyxDQUFmLENBRFI7QUFEQSxTQUdLLFFBQUw7O0FBQ0MsWUFBTyxLQUFLLFFBQUwsSUFBZSxJQUFJLGlCQUFPLFVBQVAsQ0FBa0IsS0FBSyxHQUFMLENBQVMsV0FBVCxDQUFxQixLQUFLLE9BQUwsR0FBYSxVQUFiLENBQTNDLEVBQW9FLElBQXBFLENBQWYsQ0FEUjtBQUhBLFNBS0ssV0FBTDs7QUFDQyxZQUFPLEtBQUssUUFBTCxJQUFlLElBQUksb0JBQVUsVUFBVixDQUFxQixLQUFLLEdBQUwsQ0FBUyxXQUFULENBQXFCLEtBQUssT0FBTCxHQUFhLFNBQWIsQ0FBOUMsRUFBc0UsSUFBdEUsQ0FBZixDQURSO0FBTEEsU0FPSyxNQUFMOztBQUNDLFlBQU8sS0FBSyxRQUFMLElBQWUsSUFBSSxLQUFLLFdBQUwsQ0FBaUIsY0FBakIsQ0FBZ0MsS0FBSyxHQUFMLENBQVMsV0FBVCxDQUFxQixLQUFLLE9BQUws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QUFYLENBSEQ7QUFJQyxPQUFFLElBQUYsSUFBVSxLQUFLLEdBQUwsQ0FBUyxhQUFULEVBQXdCLEtBQUssT0FBTCxDQUFhLEVBQUUsSUFBRixDQUFyQyxDQUFWLENBSkQ7QUFLQSxXQUxBO0FBckJELElBRlc7Ozs7c0JBK0JSLEdBQUU7QUFDTCxRQUFLLEdBQUwsQ0FBUyxrQkFBVCxFQUE0QixDQUE1QixFQURLOzs7OzJCQUdHLEdBQUU7QUFDVixRQUFLLE1BQUwsQ0FBWSxPQUFaLENBQW9CLFlBQXBCLENBQWlDLFVBQWpDLEVBQTRDLENBQTVDLEVBRFU7Ozs7UUF4Q2U7RUFBdUIsb0JBQU0sVUFBTixDQUFsRCIsImZpbGUiOiJ0YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZSBmcm9tICcuL2NvbnZlcnRlcidcbmltcG9ydCBQYXJhZ3JhcGggZnJvbSAnLi9wYXJhZ3JhcGgnXG5pbXBvcnQgSW5saW5lIGZyb20gJy4vaW5saW5lJ1xuXG4vKlxudGhlIHByaW9yaXR5IG9mIGNzcyBydWxlIHNob3VsZCBiZSBhbGlnbmVkIHdpdGggd29yZFxuKi9cblxudmFyIGdSb3c9L3Jvd3xob3J6L2lcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlIGV4dGVuZHMgU3R5bGV7XG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0c3VwZXIoLi4uYXJndW1lbnRzKVxuXHRcdHRoaXMudGFyZ2V0PXRoaXMud29yZE1vZGVsLmdldFRhcmdldCgpXG5cdFx0aWYodGhpcy50YXJnZXQ9PVwidGFibGVcIilcblx0XHRcdHRoaXMudGFyZ2V0PVwiXCJcblx0fVxuXG5cdGdldCBzdHlsZUlkKCl7XG5cdFx0cmV0dXJuIHRoaXMud29yZE1vZGVsLmlkKyh0aGlzLnRhcmdldCA/IGAuJHt0aGlzLnRhcmdldH1gIDogXCJcIilcblx0fVxuXG5cdF9nZXRQcm9wZXJ0aWVzQ29udmVydGVyKGNhdGVnb3J5KXtcblx0XHRpZih0aGlzW2NhdGVnb3J5XSlcblx0XHRcdHJldHVybiB0aGlzW2NhdGVnb3J5XVxuXG5cdFx0c3dpdGNoKGNhdGVnb3J5KXtcblx0XHRjYXNlICd0YWJsZSc6XG5cdFx0XHRyZXR1cm4gdGhpc1tjYXRlZ29yeV09bmV3IHRoaXMuY29uc3RydWN0b3IuUHJvcGVydGllcyh0aGlzLnN0eWxlLHRoaXMpXG5cdFx0Y2FzZSAnaW5saW5lJzovLzAwMTJcblx0XHRcdHJldHVybiB0aGlzW2NhdGVnb3J5XT1uZXcgSW5saW5lLlByb3BlcnRpZXModGhpcy5kb2MuY3JlYXRlU3R5bGUodGhpcy5zdHlsZUlkK1wiLippbmxpbmVcIiksdGhpcylcblx0XHRjYXNlICdwYXJhZ3JhcGgnOi8vMDAxMlxuXHRcdFx0cmV0dXJuIHRoaXNbY2F0ZWdvcnldPW5ldyBQYXJhZ3JhcGguUHJvcGVydGllcyh0aGlzLmRvYy5jcmVhdGVTdHlsZSh0aGlzLnN0eWxlSWQrXCIuKmJsb2NrXCIpLHRoaXMpXG5cdFx0Y2FzZSAnY2VsbCc6Ly8wMDExXG5cdFx0XHRyZXR1cm4gdGhpc1tjYXRlZ29yeV09bmV3IHRoaXMuY29uc3RydWN0b3IuQ2VsbFByb3BlcnRpZXModGhpcy5kb2MuY3JlYXRlU3R5bGUodGhpcy5zdHlsZUlkK1wiLipjZWxsXCIpLHRoaXMpXG5cdFx0fVxuXHR9XG5cdFxuXHRzdGF0aWMgT3JkZXJlZFRhcmdldFN0eWxlcz1cImJhbmQxVmVydCxiYW5kMlZlcnQsYmFuZDFIb3J6LGJhbmQySG9yeixmaXJzdFJvdyxsYXN0Um93LGZpcnN0Q29sLGxhc3RDb2wsbndDZWxsLG5lQ2VsbCxzd0NlbGwsc2VDZWxsXCIuc3BsaXQoXCIsXCIpXG59XG5cblRhYmxlLlByb3BlcnRpZXM9Y2xhc3MgUHJvcGVydGllcyBleHRlbmRzIFN0eWxlLlByb3BlcnRpZXN7XG5cdHRibEJvcmRlcnMoeCl7XG5cdFx0bGV0IHBhcmVudFN0eWxlSWQ9dGhpcy5wYXJlbnQuc3R5bGVJZFxuXHRcdHgubGVmdCAmJiB0aGlzLmRvYy5jcmVhdGVTdHlsZShwYXJlbnRTdHlsZUlkK1wiLipmaXJzdENvbFwiKS5zZXQoXCJib3JkZXItbGVmdFwiLHRoaXMuX2JvcmRlcih4LmxlZnQpKVxuXG5cdFx0eC5yaWdodCAmJiB0aGlzLmRvYy5jcmVhdGVTdHlsZShwYXJlbnRTdHlsZUlkK1wiLipsYXN0Q29sXCIpLnNldChcImJvcmRlci1yaWdodFwiLHRoaXMuX2JvcmRlcih4LnJpZ2h0KSlcblxuXHRcdHgudG9wICYmIHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHBhcmVudFN0eWxlSWQrXCIuKmZpcnN0Um93XCIpLnNldChcImJvcmRlci10b3BcIix0aGlzLl9ib3JkZXIoeC50b3ApKVxuXG5cdFx0eC5ib3R0b20gJiYgdGhpcy5kb2MuY3JlYXRlU3R5bGUocGFyZW50U3R5bGVJZCtcIi4qbGFzdFJvd1wiKS5zZXQoXCJib3JkZXItYm90dG9tXCIsdGhpcy5fYm9yZGVyKHguYm90dG9tKSlcblxuXHRcdHguaW5zaWRlViAmJiB0aGlzLmRvYy5jcmVhdGVTdHlsZShwYXJlbnRTdHlsZUlkK1wiLiohZmlyc3RDb2xcIikuc2V0KFwiYm9yZGVyLWxlZnRcIix0aGlzLl9ib3JkZXIoeC5pbnNpZGVWKSlcblxuXHRcdHguaW5zaWRlSCAmJiB0aGlzLmRvYy5jcmVhdGVTdHlsZShwYXJlbnRTdHlsZUlkK1wiLiohZmlyc3RSb3dcIikuc2V0KFwiYm9yZGVyLXRvcFwiLHRoaXMuX2JvcmRlcih4Lmluc2lkZUgpKVxuXHR9XG5cdHRibENlbGxNYXIoeCl7XG5cdFx0bGV0IHN0eWxlPXRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRoaXMucGFyZW50LnN0eWxlSWQrXCIuKmNlbGxcIilcblx0XHRPYmplY3Qua2V5cyh4KS5mb3JFYWNoKGk9PnN0eWxlLnNldChgcGFkZGluZy0ke2l9YCwoeFtpXTwxICYmIHhbaV0+MCA/IDEgOiB4W2ldKSsncHQnKSlcblx0fVxuXHR0YmxJbmQoeCl7XG5cdFx0eCAmJiB0aGlzLnNldChcIm1hcmdpbi1sZWZ0XCIseCsncHQnKVxuXHR9XG5cdHRibFcoeCl7XG5cdFx0eCAmJiB4IT0nYXV0bycgJiYgdGhpcy5zZXQoXCJ3aWR0aFwiLHgpXG5cdH1cbn1cblxuXG5UYWJsZS5Sb3dQcm9wZXJ0aWVzPWNsYXNzIFJvd1Byb3BlcnRpZXMgZXh0ZW5kcyBTdHlsZS5Qcm9wZXJ0aWVze1xuXHRjb25zdHJ1Y3RvcihzdHlsZSxwYXJlbnQpe1xuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cylcblx0XHR0aGlzLnBhcmVudD1wYXJlbnRcblx0XHR0aGlzLmRvYz1wYXJlbnQuZG9jXG5cdH1cbn1cblxuVGFibGUuQ2VsbFByb3BlcnRpZXM9Y2xhc3MgQ2VsbFByb3BlcnRpZXMgZXh0ZW5kcyBTdHlsZS5Qcm9wZXJ0aWVze1xuXHRjb25zdHJ1Y3RvcihzdHlsZSxwYXJlbnQpe1xuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cylcblx0XHR0aGlzLnBhcmVudD1wYXJlbnRcblx0XHR0aGlzLmRvYz1wYXJlbnQuZG9jXG5cdH1cblx0dGNCb3JkZXJzKHgpe1xuXHRcdGxldCBwYXJlbnRTdHlsZUlkPXRoaXMucGFyZW50LnN0eWxlSWRcblx0XHRzd2l0Y2godGhpcy5wYXJlbnQudGFyZ2V0KXtcblx0XHRcdGNhc2UgJ2ZpcnN0Um93Jzpcblx0XHRcdGNhc2UgJ2xhc3RSb3cnOlxuXHRcdFx0Y2FzZSAnYmFuZDFIb3J6Jzpcblx0XHRcdGNhc2UgJ2JhbmQySG9yeic6XG5cdFx0XHRcdHgudG9wICYmIHRoaXMuc2V0KFwiYm9yZGVyLXRvcFwiLCB0aGlzLl9ib3JkZXIoeC50b3ApKVxuXHRcdFx0XHR4LmJvdHRvbSAmJiB0aGlzLnNldChcImJvcmRlci1ib3R0b21cIiwgdGhpcy5fYm9yZGVyKHguYm90dG9tKSlcblx0XHRcdFx0eC5sZWZ0ICYmIHRoaXMuZG9jLmNyZWF0ZVN0eWxlKGAke3BhcmVudFN0eWxlSWR9LipmaXJzdENvbGApLnNldChcImJvcmRlci1sZWZ0XCIsdGhpcy5fYm9yZGVyKHgubGVmdCkpXG5cdFx0XHRcdHgucmlnaHQgJiYgdGhpcy5kb2MuY3JlYXRlU3R5bGUoYCR7cGFyZW50U3R5bGVJZH0uKmxhc3RDb2xgKS5zZXQoXCJib3JkZXItcmlnaHRcIix0aGlzLl9ib3JkZXIoeC5yaWdodCkpXG5cdFx0XHRcdHguaW5zaWRlViAmJiB0aGlzLmRvYy5jcmVhdGVTdHlsZShwYXJlbnRTdHlsZUlkK1wiLiohZmlyc3RDb2xcIikuc2V0KFwiYm9yZGVyLWxlZnRcIix0aGlzLl9ib3JkZXIoeC5pbnNpZGVWKSlcblx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdmaXJzdENvbCc6XG5cdFx0XHRjYXNlICdsYXN0Q29sJzpcblx0XHRcdGNhc2UgJ2JhbmQyVmVydCc6XG5cdFx0XHRjYXNlICdiYW5kMVZlcnQnOlxuXHRcdFx0XHR4LnJpZ2h0ICYmIHRoaXMuc2V0KFwiYm9yZGVyLXJpZ2h0XCIsIHRoaXMuX2JvcmRlcih4LnJpZ2h0KSlcblx0XHRcdFx0eC5sZWZ0ICYmIHRoaXMuc2V0KFwiYm9yZGVyLWxlZnRcIiwgdGhpcy5fYm9yZGVyKHgubGVmdCkpXG5cdFx0XHRcdHgudG9wICYmIHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHBhcmVudFN0eWxlSWQrXCIuKmZpcnN0Um93XCIpLnNldChcImJvcmRlci10b3BcIix0aGlzLl9ib3JkZXIoeC50b3ApKVxuXHRcdFx0XHR4LmJvdHRvbSAmJiB0aGlzLmRvYy5jcmVhdGVTdHlsZShwYXJlbnRTdHlsZUlkK1wiLipsYXN0Um93XCIpLnNldChcImJvcmRlci1ib3R0b21cIix0aGlzLl9ib3JkZXIoeC5ib3R0b20pKVxuXHRcdFx0XHR4Lmluc2lkZVYgJiYgdGhpcy5kb2MuY3JlYXRlU3R5bGUocGFyZW50U3R5bGVJZCtcIi4qIWZpcnN0Q29sXCIpLnNldChcImJvcmRlci1sZWZ0XCIsdGhpcy5fYm9yZGVyKHguaW5zaWRlVikpXG5cdFx0XHRicmVha1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0eC50b3AgJiYgdGhpcy5zZXQoXCJib3JkZXItdG9wXCIsIHRoaXMuX2JvcmRlcih4LnRvcCkpXG5cdFx0XHRcdHguYm90dG9tICYmIHRoaXMuc2V0KFwiYm9yZGVyLWJvdHRvbVwiLCB0aGlzLl9ib3JkZXIoeC5ib3R0b20pKVxuXHRcdFx0XHR4LnJpZ2h0ICYmIHRoaXMuc2V0KFwiYm9yZGVyLXJpZ2h0XCIsIHRoaXMuX2JvcmRlcih4LnJpZ2h0KSlcblx0XHRcdFx0eC5sZWZ0ICYmIHRoaXMuc2V0KFwiYm9yZGVyLWxlZnRcIiwgdGhpcy5fYm9yZGVyKHgubGVmdCkpXG5cdFx0XHRicmVha1xuXHRcdH1cblx0fVxuXHRzaGQoeCl7XG5cdFx0dGhpcy5zZXQoXCJiYWNrZ3JvdW5kLWNvbG9yXCIseClcblx0fVxuXHRncmlkU3Bhbih4KXtcblx0XHR0aGlzLnBhcmVudC5jb250ZW50LnNldEF0dHJpYnV0ZSgnY29scy1wYW4nLHgpXG5cdH1cbn0iXX0=