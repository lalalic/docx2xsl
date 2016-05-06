'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _any = require('../any');

var _any2 = _interopRequireDefault(_any);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lines = 'dotted,dashed,inset,outset,solid'.split();

var StyleConverter = function (_Converter) {
	_inherits(StyleConverter, _Converter);

	function StyleConverter() {
		_classCallCheck(this, StyleConverter);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StyleConverter).apply(this, arguments));

		_this.style = _this.doc.createStyle(_this.styleId, _this.parentStyleId);
		return _this;
	}

	_createClass(StyleConverter, [{
		key: 'convert',
		value: function convert(value, name, category) {
			var converter = this._getPropertiesConverter(category);
			converter && converter[name] && converter[name](value);
		}
	}, {
		key: '_getPropertiesConverter',
		value: function _getPropertiesConverter(category) {}
	}, {
		key: 'styleId',
		get: function get() {
			return this.wordModel.id;
		}
	}, {
		key: 'parentStyleId',
		get: function get() {
			var _ref = this.wordModel.getParentStyle() || {};

			var pid = _ref.id;

			return pid;
		}
	}]);

	return StyleConverter;
}(_any2.default);

StyleConverter.Properties = function () {
	function _class(style, parent) {
		_classCallCheck(this, _class);

		this.style = style;
		this.parent = parent;
		parent && (this.doc = parent.doc);
	}

	_createClass(_class, [{
		key: 'visit',
		value: function visit() {
			this.convert.apply(this, arguments);
		}
	}, {
		key: 'convert',
		value: function convert(value, name) {
			this[name] && this[name](value);
		}
	}, {
		key: 'set',
		value: function set(name, value) {
			this.style.setAttribute(name, value);
		}
	}, {
		key: '_border',
		value: function _border(border) {
			if (border.val == 'none' || border.val == 'nil') return 'none';else return (border.sz < 1 && border.sz > 0 ? 1 : border.sz) + 'pt ' + (Lines.indexOf(border.val.toLowerCase()) != -1 ? border.val : 'solid') + ' ' + (border.color || '');
		}
	}, {
		key: 'equalObj',
		value: function equalObj(a, b) {
			var keys = Object.keys(a);
			if (!b || keys.length != Object.keys(b).length) return false;
			if (keys.length != 0) {
				for (var i = 0, len = keys.length; i < len; i++) {
					if (a[keys[i]] != b[keys[i]]) return false;
				}
			}

			for (var i = 2, len = arguments.length; i < len; i++) {
				if (!this.equalObj(a, arguments[i])) return false;
			}return true;
		}
	}, {
		key: 'upperFirst',
		value: function upperFirst(type) {
			return type[0].toUpperCase() + type.slice(1);
		}
	}, {
		key: 'lineStyle',
		value: function lineStyle(x) {
			if (!x) return 'solid';
			x = x.toLowerCase();
			if (x.indexOf('dot') != -1) return 'dotted';else if (x.indexOf('dash') != -1) return 'dashed';else if (x.indexOf('double') != -1 || x.indexOf('gap') != -1) return 'double';else if (x.indexOf('emboss') != -1) return 'ridge';else if (x.indexOf('grave') != -1) return 'groove';else if (x.indexOf('outset') != -1) return 'outset';else if (x.indexOf('inset') != -1) return 'inset';else return 'solid';
		}
	}]);

	return _class;
}();

exports.default = StyleConverter;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9jb252ZXJ0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSSxRQUFNLG1DQUFtQyxLQUFuQyxFQUFOOztJQUVpQjs7O0FBQ3BCLFVBRG9CLGNBQ3BCLEdBQWE7d0JBRE8sZ0JBQ1A7O3FFQURPLDRCQUVWLFlBREc7O0FBRVosUUFBSyxLQUFMLEdBQVcsTUFBSyxHQUFMLENBQVMsV0FBVCxDQUFxQixNQUFLLE9BQUwsRUFBYyxNQUFLLGFBQUwsQ0FBOUMsQ0FGWTs7RUFBYjs7Y0FEb0I7OzBCQWVaLE9BQU0sTUFBSyxVQUFTO0FBQzNCLE9BQUksWUFBVSxLQUFLLHVCQUFMLENBQTZCLFFBQTdCLENBQVYsQ0FEdUI7QUFFM0IsZ0JBQWEsVUFBVSxJQUFWLENBQWIsSUFBZ0MsVUFBVSxJQUFWLEVBQWdCLEtBQWhCLENBQWhDLENBRjJCOzs7OzBDQUtKLFVBQVM7OztzQkFkcEI7QUFDWixVQUFPLEtBQUssU0FBTCxDQUFlLEVBQWYsQ0FESzs7OztzQkFJTTtjQUNKLEtBQUssU0FBTCxDQUFlLGNBQWYsTUFBaUMsRUFBakMsQ0FESTs7T0FDVixXQUFILEdBRGE7O0FBRWxCLFVBQU8sR0FBUCxDQUZrQjs7OztRQVZDOzs7ZUF3QmI7QUFDTixpQkFBWSxLQUFaLEVBQWtCLE1BQWxCLEVBQXlCOzs7QUFDeEIsT0FBSyxLQUFMLEdBQVcsS0FBWCxDQUR3QjtBQUV4QixPQUFLLE1BQUwsR0FBWSxNQUFaLENBRndCO0FBR3hCLGFBQVcsS0FBSyxHQUFMLEdBQVMsT0FBTyxHQUFQLENBQXBCLENBSHdCO0VBQXpCOzs7OzBCQUtPO0FBQ04sUUFBSyxPQUFMLGFBQWdCLFNBQWhCLEVBRE07Ozs7MEJBSUMsT0FBTyxNQUFLO0FBQ25CLFFBQUssSUFBTCxLQUFjLEtBQUssSUFBTCxFQUFXLEtBQVgsQ0FBZCxDQURtQjs7OztzQkFJaEIsTUFBSyxPQUFNO0FBQ2QsUUFBSyxLQUFMLENBQVcsWUFBWCxDQUF3QixJQUF4QixFQUE2QixLQUE3QixFQURjOzs7OzBCQUlQLFFBQU87QUFDZCxPQUFHLE9BQU8sR0FBUCxJQUFZLE1BQVosSUFBc0IsT0FBTyxHQUFQLElBQVksS0FBWixFQUN4QixPQUFPLE1BQVAsQ0FERCxLQUdDLE9BQU8sQ0FBQyxPQUFPLEVBQVAsR0FBVSxDQUFWLElBQWUsT0FBTyxFQUFQLEdBQVUsQ0FBVixHQUFjLENBQTdCLEdBQWlDLE9BQU8sRUFBUCxDQUFsQyxHQUE2QyxLQUE3QyxJQUFvRCxNQUFNLE9BQU4sQ0FBYyxPQUFPLEdBQVAsQ0FBVyxXQUFYLEVBQWQsS0FBeUMsQ0FBQyxDQUFELEdBQUssT0FBTyxHQUFQLEdBQWEsT0FBM0QsQ0FBcEQsR0FBd0gsR0FBeEgsSUFBNkgsT0FBTyxLQUFQLElBQWMsRUFBZCxDQUE3SCxDQUhSOzs7OzJCQU1RLEdBQUUsR0FBRTtBQUNaLE9BQUksT0FBSyxPQUFPLElBQVAsQ0FBWSxDQUFaLENBQUwsQ0FEUTtBQUVaLE9BQUcsQ0FBQyxDQUFELElBQU0sS0FBSyxNQUFMLElBQWEsT0FBTyxJQUFQLENBQVksQ0FBWixFQUFlLE1BQWYsRUFDckIsT0FBTyxLQUFQLENBREQ7QUFFQSxPQUFHLEtBQUssTUFBTCxJQUFhLENBQWIsRUFBZTtBQUNqQixTQUFJLElBQUksSUFBRSxDQUFGLEVBQUksTUFBSSxLQUFLLE1BQUwsRUFBWSxJQUFFLEdBQUYsRUFBTSxHQUFsQyxFQUFzQztBQUNyQyxTQUFHLEVBQUUsS0FBSyxDQUFMLENBQUYsS0FBWSxFQUFFLEtBQUssQ0FBTCxDQUFGLENBQVosRUFDRixPQUFPLEtBQVAsQ0FERDtLQUREO0lBREQ7O0FBT0EsUUFBSSxJQUFJLElBQUUsQ0FBRixFQUFJLE1BQUksVUFBVSxNQUFWLEVBQWlCLElBQUUsR0FBRixFQUFNLEdBQXZDO0FBQ0MsUUFBRyxDQUFDLEtBQUssUUFBTCxDQUFjLENBQWQsRUFBZ0IsVUFBVSxDQUFWLENBQWhCLENBQUQsRUFDRixPQUFPLEtBQVAsQ0FERDtJQURELE9BR08sSUFBUCxDQWRZOzs7OzZCQWlCRixNQUFLO0FBQ2YsVUFBTyxLQUFLLENBQUwsRUFBUSxXQUFSLEtBQXdCLEtBQUssS0FBTCxDQUFXLENBQVgsQ0FBeEIsQ0FEUTs7Ozs0QkFJTixHQUFFO0FBQ1gsT0FBRyxDQUFDLENBQUQsRUFDRixPQUFPLE9BQVAsQ0FERDtBQUVBLE9BQUUsRUFBRSxXQUFGLEVBQUYsQ0FIVztBQUlYLE9BQUcsRUFBRSxPQUFGLENBQVUsS0FBVixLQUFrQixDQUFDLENBQUQsRUFDcEIsT0FBTyxRQUFQLENBREQsS0FFSyxJQUFHLEVBQUUsT0FBRixDQUFVLE1BQVYsS0FBbUIsQ0FBQyxDQUFELEVBQzFCLE9BQU8sUUFBUCxDQURJLEtBRUEsSUFBRyxFQUFFLE9BQUYsQ0FBVSxRQUFWLEtBQXFCLENBQUMsQ0FBRCxJQUFNLEVBQUUsT0FBRixDQUFVLEtBQVYsS0FBa0IsQ0FBQyxDQUFELEVBQ3BELE9BQU8sUUFBUCxDQURJLEtBRUEsSUFBRyxFQUFFLE9BQUYsQ0FBVSxRQUFWLEtBQXFCLENBQUMsQ0FBRCxFQUM1QixPQUFPLE9BQVAsQ0FESSxLQUVBLElBQUcsRUFBRSxPQUFGLENBQVUsT0FBVixLQUFvQixDQUFDLENBQUQsRUFDM0IsT0FBTyxRQUFQLENBREksS0FFQSxJQUFHLEVBQUUsT0FBRixDQUFVLFFBQVYsS0FBcUIsQ0FBQyxDQUFELEVBQzVCLE9BQU8sUUFBUCxDQURJLEtBRUEsSUFBRyxFQUFFLE9BQUYsQ0FBVSxPQUFWLEtBQW9CLENBQUMsQ0FBRCxFQUMzQixPQUFPLE9BQVAsQ0FESSxLQUdKLE9BQU8sT0FBUCxDQUhJOzs7Ozs7O2tCQXRGYSIsImZpbGUiOiJjb252ZXJ0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udmVydGVyIGZyb20gJy4uL2FueSdcblxudmFyIExpbmVzPSdkb3R0ZWQsZGFzaGVkLGluc2V0LG91dHNldCxzb2xpZCcuc3BsaXQoKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZUNvbnZlcnRlciBleHRlbmRzIENvbnZlcnRlcntcblx0Y29uc3RydWN0b3IoKXtcblx0XHRzdXBlciguLi5hcmd1bWVudHMpXG5cdFx0dGhpcy5zdHlsZT10aGlzLmRvYy5jcmVhdGVTdHlsZSh0aGlzLnN0eWxlSWQsIHRoaXMucGFyZW50U3R5bGVJZClcblx0fVxuXHRcblx0Z2V0IHN0eWxlSWQoKXtcblx0XHRyZXR1cm4gdGhpcy53b3JkTW9kZWwuaWRcblx0fVxuXHRcblx0Z2V0IHBhcmVudFN0eWxlSWQoKXtcblx0XHR2YXIge2lkOnBpZH09KHRoaXMud29yZE1vZGVsLmdldFBhcmVudFN0eWxlKCl8fHt9KVxuXHRcdHJldHVybiBwaWRcblx0fVxuXG5cdGNvbnZlcnQodmFsdWUsbmFtZSxjYXRlZ29yeSl7XG5cdFx0dmFyIGNvbnZlcnRlcj10aGlzLl9nZXRQcm9wZXJ0aWVzQ29udmVydGVyKGNhdGVnb3J5KTtcblx0XHRjb252ZXJ0ZXIgJiYgY29udmVydGVyW25hbWVdICYmIGNvbnZlcnRlcltuYW1lXSh2YWx1ZSlcblx0fVxuXG5cdF9nZXRQcm9wZXJ0aWVzQ29udmVydGVyKGNhdGVnb3J5KXtcblxuXHR9XG5cblx0c3RhdGljIFByb3BlcnRpZXM9Y2xhc3Mge1xuXHRcdGNvbnN0cnVjdG9yKHN0eWxlLHBhcmVudCl7XG5cdFx0XHR0aGlzLnN0eWxlPXN0eWxlXG5cdFx0XHR0aGlzLnBhcmVudD1wYXJlbnRcblx0XHRcdHBhcmVudCAmJiAodGhpcy5kb2M9cGFyZW50LmRvYylcblx0XHR9XG5cdFx0dmlzaXQoKXtcblx0XHRcdHRoaXMuY29udmVydCguLi5hcmd1bWVudHMpXG5cdFx0fVxuXG5cdFx0Y29udmVydCh2YWx1ZSwgbmFtZSl7XG5cdFx0XHR0aGlzW25hbWVdICYmIHRoaXNbbmFtZV0odmFsdWUpXG5cdFx0fVxuXG5cdFx0c2V0KG5hbWUsdmFsdWUpe1xuXHRcdFx0dGhpcy5zdHlsZS5zZXRBdHRyaWJ1dGUobmFtZSx2YWx1ZSlcblx0XHR9XG5cblx0XHRfYm9yZGVyKGJvcmRlcil7XG5cdFx0XHRpZihib3JkZXIudmFsPT0nbm9uZScgfHwgYm9yZGVyLnZhbD09J25pbCcpXG5cdFx0XHRcdHJldHVybiAnbm9uZSdcblx0XHRcdGVsc2Vcblx0XHRcdFx0cmV0dXJuIChib3JkZXIuc3o8MSAmJiBib3JkZXIuc3o+MCA/IDEgOiBib3JkZXIuc3opKydwdCAnKyhMaW5lcy5pbmRleE9mKGJvcmRlci52YWwudG9Mb3dlckNhc2UoKSkhPS0xID8gYm9yZGVyLnZhbCA6ICdzb2xpZCcpKycgJysoYm9yZGVyLmNvbG9yfHwnJylcblx0XHR9XG5cblx0XHRlcXVhbE9iaihhLGIpe1xuXHRcdFx0dmFyIGtleXM9T2JqZWN0LmtleXMoYSlcblx0XHRcdGlmKCFiIHx8IGtleXMubGVuZ3RoIT1PYmplY3Qua2V5cyhiKS5sZW5ndGgpXG5cdFx0XHRcdHJldHVybiBmYWxzZVxuXHRcdFx0aWYoa2V5cy5sZW5ndGghPTApe1xuXHRcdFx0XHRmb3IodmFyIGk9MCxsZW49a2V5cy5sZW5ndGg7aTxsZW47aSsrKXtcblx0XHRcdFx0XHRpZihhW2tleXNbaV1dIT1iW2tleXNbaV1dKVxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Zm9yKHZhciBpPTIsbGVuPWFyZ3VtZW50cy5sZW5ndGg7aTxsZW47aSsrKVxuXHRcdFx0XHRpZighdGhpcy5lcXVhbE9iaihhLGFyZ3VtZW50c1tpXSkpXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdH1cblxuXHRcdHVwcGVyRmlyc3QodHlwZSl7XG5cdFx0XHRyZXR1cm4gdHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKVxuXHRcdH1cblxuXHRcdGxpbmVTdHlsZSh4KXtcblx0XHRcdGlmKCF4KVxuXHRcdFx0XHRyZXR1cm4gJ3NvbGlkJ1xuXHRcdFx0eD14LnRvTG93ZXJDYXNlKClcblx0XHRcdGlmKHguaW5kZXhPZignZG90JykhPS0xKVxuXHRcdFx0XHRyZXR1cm4gJ2RvdHRlZCdcblx0XHRcdGVsc2UgaWYoeC5pbmRleE9mKCdkYXNoJykhPS0xKVxuXHRcdFx0XHRyZXR1cm4gJ2Rhc2hlZCdcblx0XHRcdGVsc2UgaWYoeC5pbmRleE9mKCdkb3VibGUnKSE9LTEgfHwgeC5pbmRleE9mKCdnYXAnKSE9LTEpXG5cdFx0XHRcdHJldHVybiAnZG91YmxlJ1xuXHRcdFx0ZWxzZSBpZih4LmluZGV4T2YoJ2VtYm9zcycpIT0tMSlcblx0XHRcdFx0cmV0dXJuICdyaWRnZSdcblx0XHRcdGVsc2UgaWYoeC5pbmRleE9mKCdncmF2ZScpIT0tMSlcblx0XHRcdFx0cmV0dXJuICdncm9vdmUnXG5cdFx0XHRlbHNlIGlmKHguaW5kZXhPZignb3V0c2V0JykhPS0xKVxuXHRcdFx0XHRyZXR1cm4gJ291dHNldCdcblx0XHRcdGVsc2UgaWYoeC5pbmRleE9mKCdpbnNldCcpIT0tMSlcblx0XHRcdFx0cmV0dXJuICdpbnNldCdcblx0XHRcdGVsc2Vcblx0XHRcdFx0cmV0dXJuICdzb2xpZCdcblx0XHR9XG5cdH1cbn1cbiJdfQ==