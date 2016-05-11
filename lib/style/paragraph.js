'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _converter = require('./converter');

var _converter2 = _interopRequireDefault(_converter);

var _inline = require('./inline');

var _inline2 = _interopRequireDefault(_inline);

var _numbering = require('./numbering');

var _numbering2 = _interopRequireDefault(_numbering);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Paragraph = function (_Style) {
	_inherits(Paragraph, _Style);

	function Paragraph() {
		_classCallCheck(this, Paragraph);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Paragraph).apply(this, arguments));
	}

	_createClass(Paragraph, [{
		key: '_getPropertiesConverter',
		value: function _getPropertiesConverter(category) {
			if (this[category]) return this[category];

			switch (category) {
				case 'inline':
					//rPr
					return this[category] = new _inline2.default.Properties(this.style);
				case 'paragraph':
					//pPr
					return this[category] = new this.constructor.Properties(this.style);
				case 'frame':
					//framePr
					this[category] = new this.constructor.Properties(this.style);
					return this[category] = new this.constructor.FrameProperties(this.style);
				case 'numbering':
					//numPr
					this[category] = new this.constructor.Properties(this.style);
					return this[category] = new _numbering2.default.Properties(this.style);
			}
		}
	}]);

	return Paragraph;
}(_converter2.default);

Paragraph.Properties = function (_Style$Properties) {
	_inherits(_class, _Style$Properties);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'jc',
		value: function jc(x) {
			this.set("text-align", x);
		}
	}, {
		key: 'ind',
		value: function ind(x) {
			x.left && this.set("margin-left", x.left + 'pt');
			x.right && this.set("margin-right", x.right + 'pt');
			x.firstLine && this.set("text-indent", x.firstLine + 'pt');
			x.hanging && this.set("text-indent", '-' + x.hanging + 'pt');
		}
	}, {
		key: 'spacing',
		value: function spacing(x) {
			x.bottom && this.set("margin-bottom", x.bottom + 'pt');
			x.top && this.set("margin-top", x.top + 'pt');

			x.lineHeight && this.set("line-height", x.lineHeight);
		}
	}, {
		key: 'pBdr',
		value: function pBdr(x) {
			var _this3 = this;

			Object.keys(x).forEach(function (key) {
				return _this3.set('border-' + key, _this3._border(x[key]));
			});
		}
	}]);

	return _class;
}(_converter2.default.Properties);

Paragraph.FrameProperties = function (_Style$Properties2) {
	_inherits(_class2, _Style$Properties2);

	function _class2() {
		_classCallCheck(this, _class2);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(_class2).apply(this, arguments));
	}

	return _class2;
}(_converter2.default.Properties);

exports.default = Paragraph;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9wYXJhZ3JhcGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQjs7Ozs7Ozs7Ozs7MENBQ0ksVUFBUztBQUNoQyxPQUFHLEtBQUssUUFBTCxDQUFILEVBQ0MsT0FBTyxLQUFLLFFBQUwsQ0FBUCxDQUREOztBQUdBLFdBQU8sUUFBUDtBQUNBLFNBQUssUUFBTDs7QUFDQyxZQUFPLEtBQUssUUFBTCxJQUFlLElBQUksaUJBQU8sVUFBUCxDQUFrQixLQUFLLEtBQUwsQ0FBckMsQ0FEUjtBQURBLFNBR0ssV0FBTDs7QUFDQyxZQUFPLEtBQUssUUFBTCxJQUFlLElBQUksS0FBSyxXQUFMLENBQWlCLFVBQWpCLENBQTRCLEtBQUssS0FBTCxDQUEvQyxDQURSO0FBSEEsU0FLSyxPQUFMOztBQUNDLFVBQUssUUFBTCxJQUFlLElBQUksS0FBSyxXQUFMLENBQWlCLFVBQWpCLENBQTRCLEtBQUssS0FBTCxDQUEvQyxDQUREO0FBRUMsWUFBTyxLQUFLLFFBQUwsSUFBZSxJQUFJLEtBQUssV0FBTCxDQUFpQixlQUFqQixDQUFpQyxLQUFLLEtBQUwsQ0FBcEQsQ0FGUjtBQUxBLFNBUUssV0FBTDs7QUFDQyxVQUFLLFFBQUwsSUFBZSxJQUFJLEtBQUssV0FBTCxDQUFpQixVQUFqQixDQUE0QixLQUFLLEtBQUwsQ0FBL0MsQ0FERDtBQUVDLFlBQU8sS0FBSyxRQUFMLElBQWUsSUFBSSxvQkFBVSxVQUFWLENBQXFCLEtBQUssS0FBTCxDQUF4QyxDQUZSO0FBUkEsSUFKZ0M7Ozs7UUFEYjs7O1VBbUJiOzs7Ozs7Ozs7OztxQkFDSCxHQUFFO0FBQ0osUUFBSyxHQUFMLENBQVMsWUFBVCxFQUFzQixDQUF0QixFQURJOzs7O3NCQUdELEdBQUU7QUFDTCxLQUFFLElBQUYsSUFBVSxLQUFLLEdBQUwsQ0FBUyxhQUFULEVBQXVCLEVBQUUsSUFBRixHQUFPLElBQVAsQ0FBakMsQ0FESztBQUVMLEtBQUUsS0FBRixJQUFXLEtBQUssR0FBTCxDQUFTLGNBQVQsRUFBd0IsRUFBRSxLQUFGLEdBQVEsSUFBUixDQUFuQyxDQUZLO0FBR0wsS0FBRSxTQUFGLElBQWUsS0FBSyxHQUFMLENBQVMsYUFBVCxFQUF1QixFQUFFLFNBQUYsR0FBWSxJQUFaLENBQXRDLENBSEs7QUFJTCxLQUFFLE9BQUYsSUFBYSxLQUFLLEdBQUwsQ0FBUyxhQUFULEVBQXVCLE1BQUksRUFBRSxPQUFGLEdBQVUsSUFBZCxDQUFwQyxDQUpLOzs7OzBCQU1FLEdBQUU7QUFDVCxLQUFFLE1BQUYsSUFBWSxLQUFLLEdBQUwsQ0FBUyxlQUFULEVBQXlCLEVBQUUsTUFBRixHQUFTLElBQVQsQ0FBckMsQ0FEUztBQUVULEtBQUUsR0FBRixJQUFTLEtBQUssR0FBTCxDQUFTLFlBQVQsRUFBc0IsRUFBRSxHQUFGLEdBQU0sSUFBTixDQUEvQixDQUZTOztBQUlULEtBQUUsVUFBRixJQUFnQixLQUFLLEdBQUwsQ0FBUyxhQUFULEVBQXVCLEVBQUUsVUFBRixDQUF2QyxDQUpTOzs7O3VCQU9MLEdBQUU7OztBQUNOLFVBQU8sSUFBUCxDQUFZLENBQVosRUFBZSxPQUFmLENBQXVCO1dBQUssT0FBSyxHQUFMLGFBQW1CLEdBQW5CLEVBQXlCLE9BQUssT0FBTCxDQUFhLEVBQUUsR0FBRixDQUFiLENBQXpCO0lBQUwsQ0FBdkIsQ0FETTs7Ozs7RUFqQndCLG9CQUFNLFVBQU47O0FBbkJaLFVBeUNiOzs7Ozs7Ozs7O0VBQThCLG9CQUFNLFVBQU47O2tCQXpDakIiLCJmaWxlIjoicGFyYWdyYXBoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlIGZyb20gJy4vY29udmVydGVyJ1xuaW1wb3J0IElubGluZSBmcm9tICcuL2lubGluZSdcbmltcG9ydCBOdW1iZXJpbmcgZnJvbSAnLi9udW1iZXJpbmcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmFncmFwaCBleHRlbmRzIFN0eWxle1xuXHRfZ2V0UHJvcGVydGllc0NvbnZlcnRlcihjYXRlZ29yeSl7XG5cdFx0aWYodGhpc1tjYXRlZ29yeV0pXG5cdFx0XHRyZXR1cm4gdGhpc1tjYXRlZ29yeV1cblx0XHRcblx0XHRzd2l0Y2goY2F0ZWdvcnkpe1xuXHRcdGNhc2UgJ2lubGluZSc6Ly9yUHJcblx0XHRcdHJldHVybiB0aGlzW2NhdGVnb3J5XT1uZXcgSW5saW5lLlByb3BlcnRpZXModGhpcy5zdHlsZSlcblx0XHRjYXNlICdwYXJhZ3JhcGgnOi8vcFByXG5cdFx0XHRyZXR1cm4gdGhpc1tjYXRlZ29yeV09bmV3IHRoaXMuY29uc3RydWN0b3IuUHJvcGVydGllcyh0aGlzLnN0eWxlKVxuXHRcdGNhc2UgJ2ZyYW1lJzovL2ZyYW1lUHJcblx0XHRcdHRoaXNbY2F0ZWdvcnldPW5ldyB0aGlzLmNvbnN0cnVjdG9yLlByb3BlcnRpZXModGhpcy5zdHlsZSlcblx0XHRcdHJldHVybiB0aGlzW2NhdGVnb3J5XT1uZXcgdGhpcy5jb25zdHJ1Y3Rvci5GcmFtZVByb3BlcnRpZXModGhpcy5zdHlsZSlcblx0XHRjYXNlICdudW1iZXJpbmcnOi8vbnVtUHJcblx0XHRcdHRoaXNbY2F0ZWdvcnldPW5ldyB0aGlzLmNvbnN0cnVjdG9yLlByb3BlcnRpZXModGhpcy5zdHlsZSlcblx0XHRcdHJldHVybiB0aGlzW2NhdGVnb3J5XT1uZXcgTnVtYmVyaW5nLlByb3BlcnRpZXModGhpcy5zdHlsZSlcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgUHJvcGVydGllcz1jbGFzcyBleHRlbmRzIFN0eWxlLlByb3BlcnRpZXN7XG5cdFx0amMoeCl7XG5cdFx0XHR0aGlzLnNldChcInRleHQtYWxpZ25cIix4KVxuXHRcdH1cblx0XHRpbmQoeCl7XG5cdFx0XHR4LmxlZnQgJiYgdGhpcy5zZXQoXCJtYXJnaW4tbGVmdFwiLHgubGVmdCsncHQnKVxuXHRcdFx0eC5yaWdodCAmJiB0aGlzLnNldChcIm1hcmdpbi1yaWdodFwiLHgucmlnaHQrJ3B0Jylcblx0XHRcdHguZmlyc3RMaW5lICYmIHRoaXMuc2V0KFwidGV4dC1pbmRlbnRcIix4LmZpcnN0TGluZSsncHQnKVxuXHRcdFx0eC5oYW5naW5nICYmIHRoaXMuc2V0KFwidGV4dC1pbmRlbnRcIiwnLScreC5oYW5naW5nKydwdCcpXG5cdFx0fVxuXHRcdHNwYWNpbmcoeCl7XG5cdFx0XHR4LmJvdHRvbSAmJiB0aGlzLnNldChcIm1hcmdpbi1ib3R0b21cIix4LmJvdHRvbSsncHQnKVxuXHRcdFx0eC50b3AgJiYgdGhpcy5zZXQoXCJtYXJnaW4tdG9wXCIseC50b3ArJ3B0JylcblxuXHRcdFx0eC5saW5lSGVpZ2h0ICYmIHRoaXMuc2V0KFwibGluZS1oZWlnaHRcIix4LmxpbmVIZWlnaHQpXG5cdFx0fVxuXHRcdFxuXHRcdHBCZHIoeCl7XG5cdFx0XHRPYmplY3Qua2V5cyh4KS5mb3JFYWNoKGtleT0+dGhpcy5zZXQoYGJvcmRlci0ke2tleX1gLHRoaXMuX2JvcmRlcih4W2tleV0pKSlcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgRnJhbWVQcm9wZXJ0aWVzPWNsYXNzIGV4dGVuZHMgU3R5bGUuUHJvcGVydGllc3tcblxuXHR9XG59XG4iXX0=