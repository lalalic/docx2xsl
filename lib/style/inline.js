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
			var fonts = "";

			x.ascii && (fonts = '\'' + x.ascii + '\'');
			x.asia && (fonts = fonts + ', \'' + x.asia + '\'');

			fonts.length && this.set("font-family", fonts);
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
			this.set("font-style", 'italic');
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
	}, {
		key: 'kern',
		value: function kern(x) {
			//word spacing
			this.set("word-spacing", x);
		}
	}, {
		key: 'w',
		value: function w(x) {//char scale

		}
	}, {
		key: 'spacing',
		value: function spacing(x) {
			//char spacing
			this.set("letter-spacing", x + 'pt');
		}
	}, {
		key: 'position',
		value: function position(x) {} //baseline shift

		/* toggle properties
  smallCaps(){
  	this.set("font-variant","small-caps")
  }
  
  caps(x){
  	switch(x){
  	case '1':
  		this.set("text-transform","uppercase")
  	break
  	}
  		
  }
  */

	}]);

	return _class;
}(_converter2.default.Properties);

exports.default = Inline;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9pbmxpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCOzs7Ozs7Ozs7Ozs0Q0FDSztBQUN4QixPQUFHLE9BQU8sS0FBSyxNQUFMLElBQWMsV0FBckIsRUFDRixLQUFLLE1BQUwsR0FBWSxJQUFJLEtBQUssV0FBTCxDQUFpQixVQUFqQixDQUE0QixLQUFLLEtBQUwsQ0FBNUMsQ0FERDtBQUVBLFVBQU8sS0FBSyxNQUFMLENBSGlCOzs7O1FBREw7OztPQU9iOzs7Ozs7Ozs7Ozt5QkFDQyxHQUFFO0FBQ1IsT0FBSSxRQUFNLEVBQU4sQ0FESTs7QUFHUixLQUFFLEtBQUYsS0FBWSxlQUFVLEVBQUUsS0FBRixPQUFWLENBQVosQ0FIUTtBQUlSLEtBQUUsSUFBRixLQUFXLFFBQVMsaUJBQVcsRUFBRSxJQUFGLE9BQXBCLENBQVgsQ0FKUTs7QUFNUixTQUFNLE1BQU4sSUFBZ0IsS0FBSyxHQUFMLENBQVMsYUFBVCxFQUF1QixLQUF2QixDQUFoQixDQU5ROzs7O29CQVFQLEdBQUU7QUFDSCxRQUFLLEdBQUwsQ0FBUyxhQUFULEVBQXVCLEdBQXZCLEVBREc7Ozs7cUJBR0QsR0FBRTtBQUNKLFFBQUssR0FBTCxDQUFTLFdBQVQsRUFBc0IsSUFBRSxJQUFGLENBQXRCLENBREk7Ozs7d0JBR0MsR0FBRTtBQUNQLFFBQUssR0FBTCxDQUFTLE9BQVQsRUFBaUIsQ0FBakIsRUFETzs7OztvQkFHTixHQUFFO0FBQ0gsUUFBSyxHQUFMLENBQVMsWUFBVCxFQUFzQixRQUF0QixFQURHOzs7O29CQUdGLEdBQUU7QUFDSCxRQUFLLEdBQUwsQ0FBUyxpQkFBVCxFQUEyQixXQUEzQixFQURHOzs7O3NCQUdBLEdBQUU7QUFDTCxRQUFLLEdBQUwsQ0FBUyxRQUFULEVBQWtCLEtBQUssT0FBTCxDQUFhLENBQWIsQ0FBbEIsRUFESzs7Ozt1QkFHRCxHQUFFOzs7NEJBR0csR0FBRTtBQUNYLFdBQU8sQ0FBUDtBQUNBLFNBQUssYUFBTDtBQUNDLFVBQUssR0FBTCxDQUFTLGdCQUFULEVBQTBCLE9BQTFCLEVBREQ7QUFFQSxXQUZBO0FBREEsU0FJSyxXQUFMO0FBQ0MsVUFBSyxHQUFMLENBQVMsZ0JBQVQsRUFBMEIsS0FBMUIsRUFERDtBQUVBLFdBRkE7QUFKQSxJQURXOzs7OzRCQVVGLEdBQUU7QUFDWCxRQUFLLEdBQUwsQ0FBUyxrQkFBVCxFQUE0QixDQUE1QixFQURXOzs7O3VCQUlQLEdBQUU7O0FBQ04sUUFBSyxHQUFMLENBQVMsY0FBVCxFQUF5QixDQUF6QixFQURNOzs7O29CQUlMLEdBQUU7Ozs7OzBCQUlJLEdBQUU7O0FBQ1QsUUFBSyxHQUFMLENBQVMsZ0JBQVQsRUFBMEIsSUFBRSxJQUFGLENBQTFCLENBRFM7Ozs7MkJBSUQsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF4RG9CLG9CQUFNLFVBQU47O2tCQVBaIiwiZmlsZSI6ImlubGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZSBmcm9tICcuL2NvbnZlcnRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElubGluZSBleHRlbmRzIFN0eWxle1xyXG5cdF9nZXRQcm9wZXJ0aWVzQ29udmVydGVyKCl7XHJcblx0XHRpZih0eXBlb2YodGhpcy5pbmxpbmUpPT0ndW5kZWZpbmVkJylcclxuXHRcdFx0dGhpcy5pbmxpbmU9bmV3IHRoaXMuY29uc3RydWN0b3IuUHJvcGVydGllcyh0aGlzLnN0eWxlKVxyXG5cdFx0cmV0dXJuIHRoaXMuaW5saW5lXHJcblx0fVxyXG5cdFxyXG5cdHN0YXRpYyBQcm9wZXJ0aWVzPWNsYXNzIGV4dGVuZHMgU3R5bGUuUHJvcGVydGllc3tcclxuXHRcdHJGb250cyh4KXtcclxuXHRcdFx0bGV0IGZvbnRzPVwiXCJcclxuXHRcdFx0XHJcblx0XHRcdHguYXNjaWkgJiYgKGZvbnRzPWAnJHt4LmFzY2lpfSdgKVxyXG5cdFx0XHR4LmFzaWEgJiYgKGZvbnRzPWAke2ZvbnRzfSwgJyR7eC5hc2lhfSdgKVxyXG5cclxuXHRcdFx0Zm9udHMubGVuZ3RoICYmIHRoaXMuc2V0KFwiZm9udC1mYW1pbHlcIixmb250cylcclxuXHRcdH1cclxuXHRcdGIoeCl7XHJcblx0XHRcdHRoaXMuc2V0KFwiZm9udC13ZWlnaHRcIiw3MDApXHJcblx0XHR9XHJcblx0XHRzeih4KXtcclxuXHRcdFx0dGhpcy5zZXQoXCJmb250LXNpemVcIiwgeCsncHQnKVxyXG5cdFx0fVxyXG5cdFx0Y29sb3IoeCl7XHJcblx0XHRcdHRoaXMuc2V0KFwiY29sb3JcIix4KVxyXG5cdFx0fVxyXG5cdFx0aSh4KXtcclxuXHRcdFx0dGhpcy5zZXQoXCJmb250LXN0eWxlXCIsJ2l0YWxpYycpXHJcblx0XHR9XHJcblx0XHR1KHgpe1xyXG5cdFx0XHR0aGlzLnNldChcInRleHQtZGVjb3JhdGlvblwiLCd1bmRlcmxpbmUnKVxyXG5cdFx0fVxyXG5cdFx0YmRyKHgpe1xyXG5cdFx0XHR0aGlzLnNldChcImJvcmRlclwiLHRoaXMuX2JvcmRlcih4KSlcclxuXHRcdH1cclxuXHRcdGxhbmcoeCl7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0dmVydEFsaWduKHgpe1xyXG5cdFx0XHRzd2l0Y2goeCl7XHJcblx0XHRcdGNhc2UgJ3N1cGVyc2NyaXB0JzpcclxuXHRcdFx0XHR0aGlzLnNldChcInZlcnRpY2FsLWFsaWduXCIsJ3N1cGVyJylcclxuXHRcdFx0YnJlYWtcclxuXHRcdFx0Y2FzZSAnc3Vic2NyaXB0JzpcclxuXHRcdFx0XHR0aGlzLnNldChcInZlcnRpY2FsLWFsaWduXCIsJ3N1YicpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGhpZ2hsaWdodCh4KXtcclxuXHRcdFx0dGhpcy5zZXQoXCJiYWNrZ3JvdW5kLWNvbG9yXCIseClcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0a2Vybih4KXsvL3dvcmQgc3BhY2luZ1xyXG5cdFx0XHR0aGlzLnNldChcIndvcmQtc3BhY2luZ1wiLCB4KVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHR3KHgpey8vY2hhciBzY2FsZVxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0c3BhY2luZyh4KXsvL2NoYXIgc3BhY2luZ1xyXG5cdFx0XHR0aGlzLnNldChcImxldHRlci1zcGFjaW5nXCIseCsncHQnKVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRwb3NpdGlvbih4KXsvL2Jhc2VsaW5lIHNoaWZ0XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKiB0b2dnbGUgcHJvcGVydGllc1xyXG5cdFx0c21hbGxDYXBzKCl7XHJcblx0XHRcdHRoaXMuc2V0KFwiZm9udC12YXJpYW50XCIsXCJzbWFsbC1jYXBzXCIpXHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGNhcHMoeCl7XHJcblx0XHRcdHN3aXRjaCh4KXtcclxuXHRcdFx0Y2FzZSAnMSc6XHJcblx0XHRcdFx0dGhpcy5zZXQoXCJ0ZXh0LXRyYW5zZm9ybVwiLFwidXBwZXJjYXNlXCIpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdH1cclxuXHRcdCovXHJcblx0fVxyXG59Il19