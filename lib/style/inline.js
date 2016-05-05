'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _converter = require('./converter');

var _converter2 = _interopRequireDefault(_converter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Inline = function (_Style) {
	_inherits(Inline, _Style);

	function Inline() {
		_classCallCheck(this, Inline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Inline).apply(this, arguments));
	}

	_createClass(Inline, [{
		key: '_getPropertiesConverter',
		value: function _getPropertiesConverter() {
			if (typeof this.inline == 'undefined') this.inline = new this.constructor.Properties(this.style);
			return this.inline;
		}
	}]);

	return Inline;
}(_converter2.default);

Inline.Properties = function (_Style$Properties) {
	_inherits(_class, _Style$Properties);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'rFonts',
		value: function rFonts(x) {
			x.ascii && this.set("font-family", x.ascii);
		}
	}, {
		key: 'b',
		value: function b(x) {
			this.set("font-weight", 700);
		}
	}, {
		key: 'sz',
		value: function sz(x) {
			this.set("font-size", x + 'pt');
		}
	}, {
		key: 'color',
		value: function color(x) {
			this.set("color", x);
		}
	}, {
		key: 'i',
		value: function i(x) {
			this.set("font-style", 'italics');
		}
	}, {
		key: 'u',
		value: function u(x) {
			this.set("text-decoration", 'underline');
		}
	}, {
		key: 'bdr',
		value: function bdr(x) {
			this.set("border", this._border(x));
		}
	}, {
		key: 'lang',
		value: function lang(x) {}
	}, {
		key: 'vertAlign',
		value: function vertAlign(x) {
			switch (x) {
				case 'superscript':
					this.set("vertical-align", 'super');
					break;
				case 'subscript':
					this.set("vertical-align", 'sub');
					break;
			}
		}
	}, {
		key: 'highlight',
		value: function highlight(x) {
			this.set("background-color", x);
		}
	}]);

	return _class;
}(_converter2.default.Properties);

exports.default = Inline;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9pbmxpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCOzs7Ozs7Ozs7Ozs0Q0FDSztBQUN4QixPQUFHLE9BQU8sS0FBSyxNQUFMLElBQWMsV0FBckIsRUFDRixLQUFLLE1BQUwsR0FBWSxJQUFJLEtBQUssV0FBTCxDQUFpQixVQUFqQixDQUE0QixLQUFLLEtBQUwsQ0FBNUMsQ0FERDtBQUVBLFVBQU8sS0FBSyxNQUFMLENBSGlCOzs7O1FBREw7OztPQU9iOzs7Ozs7Ozs7Ozt5QkFDQyxHQUFFO0FBQ1IsS0FBRSxLQUFGLElBQVcsS0FBSyxHQUFMLENBQVMsYUFBVCxFQUF1QixFQUFFLEtBQUYsQ0FBbEMsQ0FEUTs7OztvQkFHUCxHQUFFO0FBQ0gsUUFBSyxHQUFMLENBQVMsYUFBVCxFQUF1QixHQUF2QixFQURHOzs7O3FCQUdELEdBQUU7QUFDSixRQUFLLEdBQUwsQ0FBUyxXQUFULEVBQXNCLElBQUUsSUFBRixDQUF0QixDQURJOzs7O3dCQUdDLEdBQUU7QUFDUCxRQUFLLEdBQUwsQ0FBUyxPQUFULEVBQWlCLENBQWpCLEVBRE87Ozs7b0JBR04sR0FBRTtBQUNILFFBQUssR0FBTCxDQUFTLFlBQVQsRUFBc0IsU0FBdEIsRUFERzs7OztvQkFHRixHQUFFO0FBQ0gsUUFBSyxHQUFMLENBQVMsaUJBQVQsRUFBMkIsV0FBM0IsRUFERzs7OztzQkFHQSxHQUFFO0FBQ0wsUUFBSyxHQUFMLENBQVMsUUFBVCxFQUFrQixLQUFLLE9BQUwsQ0FBYSxDQUFiLENBQWxCLEVBREs7Ozs7dUJBR0QsR0FBRTs7OzRCQUdHLEdBQUU7QUFDWCxXQUFPLENBQVA7QUFDQSxTQUFLLGFBQUw7QUFDQyxVQUFLLEdBQUwsQ0FBUyxnQkFBVCxFQUEwQixPQUExQixFQUREO0FBRUEsV0FGQTtBQURBLFNBSUssV0FBTDtBQUNDLFVBQUssR0FBTCxDQUFTLGdCQUFULEVBQTBCLEtBQTFCLEVBREQ7QUFFQSxXQUZBO0FBSkEsSUFEVzs7Ozs0QkFVRixHQUFFO0FBQ1gsUUFBSyxHQUFMLENBQVMsa0JBQVQsRUFBNEIsQ0FBNUIsRUFEVzs7Ozs7RUFuQ21CLG9CQUFNLFVBQU47O2tCQVBaIiwiZmlsZSI6ImlubGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZSBmcm9tICcuL2NvbnZlcnRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElubGluZSBleHRlbmRzIFN0eWxle1xyXG5cdF9nZXRQcm9wZXJ0aWVzQ29udmVydGVyKCl7XHJcblx0XHRpZih0eXBlb2YodGhpcy5pbmxpbmUpPT0ndW5kZWZpbmVkJylcclxuXHRcdFx0dGhpcy5pbmxpbmU9bmV3IHRoaXMuY29uc3RydWN0b3IuUHJvcGVydGllcyh0aGlzLnN0eWxlKVxyXG5cdFx0cmV0dXJuIHRoaXMuaW5saW5lXHJcblx0fVxyXG5cdFxyXG5cdHN0YXRpYyBQcm9wZXJ0aWVzPWNsYXNzIGV4dGVuZHMgU3R5bGUuUHJvcGVydGllc3tcclxuXHRcdHJGb250cyh4KXtcclxuXHRcdFx0eC5hc2NpaSAmJiB0aGlzLnNldChcImZvbnQtZmFtaWx5XCIseC5hc2NpaSlcclxuXHRcdH1cclxuXHRcdGIoeCl7XHJcblx0XHRcdHRoaXMuc2V0KFwiZm9udC13ZWlnaHRcIiw3MDApXHJcblx0XHR9XHJcblx0XHRzeih4KXtcclxuXHRcdFx0dGhpcy5zZXQoXCJmb250LXNpemVcIiwgeCsncHQnKVxyXG5cdFx0fVxyXG5cdFx0Y29sb3IoeCl7XHJcblx0XHRcdHRoaXMuc2V0KFwiY29sb3JcIix4KVxyXG5cdFx0fVxyXG5cdFx0aSh4KXtcclxuXHRcdFx0dGhpcy5zZXQoXCJmb250LXN0eWxlXCIsJ2l0YWxpY3MnKVxyXG5cdFx0fVxyXG5cdFx0dSh4KXtcclxuXHRcdFx0dGhpcy5zZXQoXCJ0ZXh0LWRlY29yYXRpb25cIiwndW5kZXJsaW5lJylcclxuXHRcdH1cclxuXHRcdGJkcih4KXtcclxuXHRcdFx0dGhpcy5zZXQoXCJib3JkZXJcIix0aGlzLl9ib3JkZXIoeCkpXHJcblx0XHR9XHJcblx0XHRsYW5nKHgpe1xyXG5cdFx0XHRcclxuXHRcdH1cclxuXHRcdHZlcnRBbGlnbih4KXtcclxuXHRcdFx0c3dpdGNoKHgpe1xyXG5cdFx0XHRjYXNlICdzdXBlcnNjcmlwdCc6XHJcblx0XHRcdFx0dGhpcy5zZXQoXCJ2ZXJ0aWNhbC1hbGlnblwiLCdzdXBlcicpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRcdGNhc2UgJ3N1YnNjcmlwdCc6XHJcblx0XHRcdFx0dGhpcy5zZXQoXCJ2ZXJ0aWNhbC1hbGlnblwiLCdzdWInKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRoaWdobGlnaHQoeCl7XHJcblx0XHRcdHRoaXMuc2V0KFwiYmFja2dyb3VuZC1jb2xvclwiLHgpXHJcblx0XHR9XHJcblx0fVxyXG59Il19