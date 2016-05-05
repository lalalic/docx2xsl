'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _converter = require('./converter');

var _converter2 = _interopRequireDefault(_converter);

var _inline = require('./inline');

var _inline2 = _interopRequireDefault(_inline);

var _paragraph = require('./paragraph');

var _paragraph2 = _interopRequireDefault(_paragraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListStyleType = { lowerLetter: 'lower-latin', upperLetter: 'upper-latin', lowerRoman: 'lower-roman', upperRoman: 'upper-roman' };
var cssID = _converter2.default.asCssID;

var List = function (_Style) {
	_inherits(List, _Style);

	function List() {
		_classCallCheck(this, List);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(List).apply(this, arguments));

		_this.levelStyles = {};
		return _this;
	}

	_createClass(List, [{
		key: '_getPropertiesConverter',
		value: function _getPropertiesConverter(category) {
			if (!category) return null;
			var info = category.split(' '),
			    level = parseInt(info[0]),
			    type = info.length == 1 ? 'list' : info[1],
			    style = this.levelStyles[level],
			    levelSelector = '.' + cssID(this.wordModel.id) + '[level="' + level + '"]';

			if (!style) style = this.levelStyles[level] = {};

			if (style[type]) return style[type];

			switch (type) {
				case 'inline':
					style.inline = new _inline2.default.Properties(this.doc.createStyle(levelSelector + '>li>p>.marker:before'));
					break;
				case 'paragraph':
					style.paragraph = new this.constructor.Pr(this.doc.createStyle(levelSelector + '>li>p'), this, levelSelector);
					break;
				case 'list':
					style.list = new this.constructor.Properties(this.doc.createStyle(levelSelector + '>li>p>.marker:before'), this, levelSelector, cssID(this.wordModel.id) + '_' + level, level);
					break;
			}
			return style[type];
		}
	}]);

	return List;
}(_converter2.default);

exports.default = List;


List.Pr = function (_Paragraph$Properties) {
	_inherits(Pr, _Paragraph$Properties);

	function Pr(style, parent, levelSelector) {
		_classCallCheck(this, Pr);

		var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Pr).apply(this, arguments));

		_this2.doc = parent.doc;
		_this2.levelSelector = levelSelector;
		return _this2;
	}

	_createClass(Pr, [{
		key: 'ind',
		value: function ind(x) {
			var hanging = x.hanging;
			delete x.hanging;
			_paragraph2.default.Properties.prototype.ind.call(this, x);
			x.hanging = hanging;
			x.hanging && (this.doc.createStyle(this.levelSelector + '>li>p>.marker').left = -x.hanging + 'pt');
		}
	}]);

	return Pr;
}(_paragraph2.default.Properties);

List.Properties = function (_Style$Properties) {
	_inherits(Properties, _Style$Properties);

	function Properties(style, parent, levelSelector, counter, level) {
		_classCallCheck(this, Properties);

		var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(Properties).apply(this, arguments));

		_this3.doc = parent.doc;
		_this3.levelSelector = levelSelector;
		_this3.level = level;
		_this3.counter = counter;
		_this3.doc.createStyle(levelSelector).counterReset = counter;
		_this3.doc.createStyle(levelSelector + '>li').counterIncrement = counter;
		return _this3;
	}

	_createClass(Properties, [{
		key: 'start',
		value: function start(x) {
			this.doc.createStyle(this.levelSelector).counterReset = this.counter + ' ' + (x - 1);
		}
	}, {
		key: 'numFmt',
		value: function numFmt(x) {
			this.type = ListStyleType[x] || x;
		}
	}, {
		key: 'lvlText',
		value: function lvlText(x) {
			this.style.content = '"' + x.replace('%' + (this.level + 1), '" counter(' + this.counter + (!this.type ? '' : ',' + this.type) + ') "') + '"';
		}
	}, {
		key: 'lvlJc',
		value: function lvlJc(x) {}
	}, {
		key: 'lvlPicBulletId',
		value: function lvlPicBulletId(x) {}
	}]);

	return Properties;
}(_converter2.default.Properties);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9saXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJLGdCQUFjLEVBQUMsYUFBWSxhQUFaLEVBQTBCLGFBQVksYUFBWixFQUEwQixZQUFXLGFBQVgsRUFBeUIsWUFBVyxhQUFYLEVBQTVGO0FBQ0osSUFBSSxRQUFNLG9CQUFNLE9BQU47O0lBRVc7OztBQUNwQixVQURvQixJQUNwQixHQUFhO3dCQURPLE1BQ1A7O3FFQURPLGtCQUVWLFlBREc7O0FBRVosUUFBSyxXQUFMLEdBQWlCLEVBQWpCLENBRlk7O0VBQWI7O2NBRG9COzswQ0FNSSxVQUFTO0FBQ2hDLE9BQUcsQ0FBQyxRQUFELEVBQ0YsT0FBTyxJQUFQLENBREQ7QUFFQSxPQUFJLE9BQUssU0FBUyxLQUFULENBQWUsR0FBZixDQUFMO09BQ0gsUUFBTSxTQUFTLEtBQUssQ0FBTCxDQUFULENBQU47T0FDQSxPQUFLLEtBQUssTUFBTCxJQUFhLENBQWIsR0FBaUIsTUFBakIsR0FBMEIsS0FBSyxDQUFMLENBQTFCO09BQ0wsUUFBTSxLQUFLLFdBQUwsQ0FBaUIsS0FBakIsQ0FBTjtPQUNBLGdCQUFjLE1BQUksTUFBTSxLQUFLLFNBQUwsQ0FBZSxFQUFmLENBQVYsR0FBNkIsVUFBN0IsR0FBd0MsS0FBeEMsR0FBOEMsSUFBOUMsQ0FQaUI7O0FBU2hDLE9BQUcsQ0FBQyxLQUFELEVBQ0YsUUFBTSxLQUFLLFdBQUwsQ0FBaUIsS0FBakIsSUFBd0IsRUFBeEIsQ0FEUDs7QUFHQSxPQUFHLE1BQU0sSUFBTixDQUFILEVBQ0MsT0FBTyxNQUFNLElBQU4sQ0FBUCxDQUREOztBQUdBLFdBQU8sSUFBUDtBQUNBLFNBQUssUUFBTDtBQUNDLFdBQU0sTUFBTixHQUFhLElBQUksaUJBQU8sVUFBUCxDQUFrQixLQUFLLEdBQUwsQ0FBUyxXQUFULENBQXFCLGdCQUFjLHNCQUFkLENBQTNDLENBQWIsQ0FERDtBQUVDLFdBRkQ7QUFEQSxTQUlLLFdBQUw7QUFDQyxXQUFNLFNBQU4sR0FBZ0IsSUFBSSxLQUFLLFdBQUwsQ0FBaUIsRUFBakIsQ0FBb0IsS0FBSyxHQUFMLENBQVMsV0FBVCxDQUFxQixnQkFBYyxPQUFkLENBQTdDLEVBQXFFLElBQXJFLEVBQTJFLGFBQTNFLENBQWhCLENBREQ7QUFFQyxXQUZEO0FBSkEsU0FPSyxNQUFMO0FBQ0MsV0FBTSxJQUFOLEdBQVcsSUFBSSxLQUFLLFdBQUwsQ0FBaUIsVUFBakIsQ0FBNEIsS0FBSyxHQUFMLENBQVMsV0FBVCxDQUFxQixnQkFBYyxzQkFBZCxDQUFyRCxFQUE0RixJQUE1RixFQUFrRyxhQUFsRyxFQUFpSCxNQUFNLEtBQUssU0FBTCxDQUFlLEVBQWYsQ0FBTixHQUF5QixHQUF6QixHQUE2QixLQUE3QixFQUFvQyxLQUFySixDQUFYLENBREQ7QUFFQyxXQUZEO0FBUEEsSUFmZ0M7QUEwQmhDLFVBQU8sTUFBTSxJQUFOLENBQVAsQ0ExQmdDOzs7O1FBTmI7Ozs7OztBQW9DckIsS0FBSyxFQUFMO1dBQWM7O0FBQ2IsVUFEYSxFQUNiLENBQVksS0FBWixFQUFrQixNQUFsQixFQUEwQixhQUExQixFQUF3Qzt3QkFEM0IsSUFDMkI7O3NFQUQzQixnQkFFSCxZQUQ4Qjs7QUFFdkMsU0FBSyxHQUFMLEdBQVMsT0FBTyxHQUFQLENBRjhCO0FBR3ZDLFNBQUssYUFBTCxHQUFtQixhQUFuQixDQUh1Qzs7RUFBeEM7O2NBRGE7O3NCQU1ULEdBQUU7QUFDTCxPQUFJLFVBQVEsRUFBRSxPQUFGLENBRFA7QUFFTCxVQUFPLEVBQUUsT0FBRixDQUZGO0FBR0wsdUJBQVUsVUFBVixDQUFxQixTQUFyQixDQUErQixHQUEvQixDQUFtQyxJQUFuQyxDQUF3QyxJQUF4QyxFQUE2QyxDQUE3QyxFQUhLO0FBSUwsS0FBRSxPQUFGLEdBQVUsT0FBVixDQUpLO0FBS0wsS0FBRSxPQUFGLEtBQWMsS0FBSyxHQUFMLENBQVMsV0FBVCxDQUFxQixLQUFLLGFBQUwsR0FBbUIsZUFBbkIsQ0FBckIsQ0FBeUQsSUFBekQsR0FBOEQsQ0FBQyxFQUFFLE9BQUYsR0FBVSxJQUFYLENBQTVFLENBTEs7Ozs7UUFOTztFQUFXLG9CQUFVLFVBQVYsQ0FBekI7O0FBZUEsS0FBSyxVQUFMO1dBQXNCOztBQUNyQixVQURxQixVQUNyQixDQUFZLEtBQVosRUFBbUIsTUFBbkIsRUFBMkIsYUFBM0IsRUFBMEMsT0FBMUMsRUFBbUQsS0FBbkQsRUFBeUQ7d0JBRHBDLFlBQ29DOztzRUFEcEMsd0JBRVgsWUFEK0M7O0FBRXhELFNBQUssR0FBTCxHQUFTLE9BQU8sR0FBUCxDQUYrQztBQUd4RCxTQUFLLGFBQUwsR0FBbUIsYUFBbkIsQ0FId0Q7QUFJeEQsU0FBSyxLQUFMLEdBQVcsS0FBWCxDQUp3RDtBQUt4RCxTQUFLLE9BQUwsR0FBYSxPQUFiLENBTHdEO0FBTXhELFNBQUssR0FBTCxDQUFTLFdBQVQsQ0FBcUIsYUFBckIsRUFBb0MsWUFBcEMsR0FBaUQsT0FBakQsQ0FOd0Q7QUFPeEQsU0FBSyxHQUFMLENBQVMsV0FBVCxDQUFxQixnQkFBYyxLQUFkLENBQXJCLENBQTBDLGdCQUExQyxHQUEyRCxPQUEzRCxDQVB3RDs7RUFBekQ7O2NBRHFCOzt3QkFVZixHQUFFO0FBQ1AsUUFBSyxHQUFMLENBQVMsV0FBVCxDQUFxQixLQUFLLGFBQUwsQ0FBckIsQ0FBeUMsWUFBekMsR0FBc0QsS0FBSyxPQUFMLEdBQWEsR0FBYixJQUFrQixJQUFFLENBQUYsQ0FBbEIsQ0FEL0M7Ozs7eUJBR0QsR0FBRTtBQUNSLFFBQUssSUFBTCxHQUFVLGNBQWMsQ0FBZCxLQUFrQixDQUFsQixDQURGOzs7OzBCQUdELEdBQUU7QUFDVCxRQUFLLEtBQUwsQ0FBVyxPQUFYLEdBQW1CLE1BQUksRUFBRSxPQUFGLENBQVUsT0FBSyxLQUFLLEtBQUwsR0FBVyxDQUFYLENBQUwsRUFBbUIsZUFBYSxLQUFLLE9BQUwsSUFBYyxDQUFDLEtBQUssSUFBTCxHQUFZLEVBQWIsR0FBa0IsTUFBSSxLQUFLLElBQUwsQ0FBakQsR0FBNEQsS0FBNUQsQ0FBakMsR0FBb0csR0FBcEcsQ0FEVjs7Ozt3QkFHSixHQUFFOzs7aUNBR08sR0FBRTs7O1FBdEJJO0VBQW1CLG9CQUFNLFVBQU4sQ0FBekMiLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZSBmcm9tICcuL2NvbnZlcnRlcidcbmltcG9ydCBJbmxpbmUgZnJvbSAnLi9pbmxpbmUnXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gJy4vcGFyYWdyYXBoJ1xuXG52YXIgTGlzdFN0eWxlVHlwZT17bG93ZXJMZXR0ZXI6J2xvd2VyLWxhdGluJyx1cHBlckxldHRlcjondXBwZXItbGF0aW4nLGxvd2VyUm9tYW46J2xvd2VyLXJvbWFuJyx1cHBlclJvbWFuOid1cHBlci1yb21hbid9XG52YXIgY3NzSUQ9U3R5bGUuYXNDc3NJRFxuXHRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBTdHlsZXtcblx0Y29uc3RydWN0b3IoKXtcblx0XHRzdXBlciguLi5hcmd1bWVudHMpXG5cdFx0dGhpcy5sZXZlbFN0eWxlcz17fVxuXHR9XG5cdFxuXHRfZ2V0UHJvcGVydGllc0NvbnZlcnRlcihjYXRlZ29yeSl7XG5cdFx0aWYoIWNhdGVnb3J5KVxuXHRcdFx0cmV0dXJuIG51bGxcblx0XHR2YXIgaW5mbz1jYXRlZ29yeS5zcGxpdCgnICcpLFxuXHRcdFx0bGV2ZWw9cGFyc2VJbnQoaW5mb1swXSksXG5cdFx0XHR0eXBlPWluZm8ubGVuZ3RoPT0xID8gJ2xpc3QnIDogaW5mb1sxXSxcblx0XHRcdHN0eWxlPXRoaXMubGV2ZWxTdHlsZXNbbGV2ZWxdLFxuXHRcdFx0bGV2ZWxTZWxlY3Rvcj0nLicrY3NzSUQodGhpcy53b3JkTW9kZWwuaWQpKydbbGV2ZWw9XCInK2xldmVsKydcIl0nO1xuXHRcdFxuXHRcdGlmKCFzdHlsZSlcblx0XHRcdHN0eWxlPXRoaXMubGV2ZWxTdHlsZXNbbGV2ZWxdPXt9XG5cdFx0XHRcblx0XHRpZihzdHlsZVt0eXBlXSlcblx0XHRcdHJldHVybiBzdHlsZVt0eXBlXTtcblx0XHRcdFxuXHRcdHN3aXRjaCh0eXBlKXtcblx0XHRjYXNlICdpbmxpbmUnOlxuXHRcdFx0c3R5bGUuaW5saW5lPW5ldyBJbmxpbmUuUHJvcGVydGllcyh0aGlzLmRvYy5jcmVhdGVTdHlsZShsZXZlbFNlbGVjdG9yKyc+bGk+cD4ubWFya2VyOmJlZm9yZScpKVxuXHRcdFx0YnJlYWtcblx0XHRjYXNlICdwYXJhZ3JhcGgnOlxuXHRcdFx0c3R5bGUucGFyYWdyYXBoPW5ldyB0aGlzLmNvbnN0cnVjdG9yLlByKHRoaXMuZG9jLmNyZWF0ZVN0eWxlKGxldmVsU2VsZWN0b3IrJz5saT5wJyksIHRoaXMsIGxldmVsU2VsZWN0b3IpXG5cdFx0XHRicmVha1xuXHRcdGNhc2UgJ2xpc3QnOlxuXHRcdFx0c3R5bGUubGlzdD1uZXcgdGhpcy5jb25zdHJ1Y3Rvci5Qcm9wZXJ0aWVzKHRoaXMuZG9jLmNyZWF0ZVN0eWxlKGxldmVsU2VsZWN0b3IrJz5saT5wPi5tYXJrZXI6YmVmb3JlJyksIHRoaXMsIGxldmVsU2VsZWN0b3IsIGNzc0lEKHRoaXMud29yZE1vZGVsLmlkKSsnXycrbGV2ZWwsIGxldmVsKTtcblx0XHRcdGJyZWFrXG5cdFx0fVxuXHRcdHJldHVybiBzdHlsZVt0eXBlXVxuXHR9XG59XG5cdFxuTGlzdC5Qcj1jbGFzcyBQciBleHRlbmRzIFBhcmFncmFwaC5Qcm9wZXJ0aWVze1xuXHRjb25zdHJ1Y3RvcihzdHlsZSxwYXJlbnQsIGxldmVsU2VsZWN0b3Ipe1xuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cylcblx0XHR0aGlzLmRvYz1wYXJlbnQuZG9jXG5cdFx0dGhpcy5sZXZlbFNlbGVjdG9yPWxldmVsU2VsZWN0b3Jcblx0fVxuXHRpbmQoeCl7XG5cdFx0dmFyIGhhbmdpbmc9eC5oYW5naW5nXG5cdFx0ZGVsZXRlIHguaGFuZ2luZ1xuXHRcdFBhcmFncmFwaC5Qcm9wZXJ0aWVzLnByb3RvdHlwZS5pbmQuY2FsbCh0aGlzLHgpXG5cdFx0eC5oYW5naW5nPWhhbmdpbmdcblx0XHR4LmhhbmdpbmcgJiYgKHRoaXMuZG9jLmNyZWF0ZVN0eWxlKHRoaXMubGV2ZWxTZWxlY3RvcisnPmxpPnA+Lm1hcmtlcicpLmxlZnQ9LXguaGFuZ2luZysncHQnKVxuXHR9XG59XG5cdFx0XG5MaXN0LlByb3BlcnRpZXM9Y2xhc3MgUHJvcGVydGllcyBleHRlbmRzIFN0eWxlLlByb3BlcnRpZXN7XG5cdGNvbnN0cnVjdG9yKHN0eWxlLCBwYXJlbnQsIGxldmVsU2VsZWN0b3IsIGNvdW50ZXIsIGxldmVsKXtcblx0XHRzdXBlciguLi5hcmd1bWVudHMpXG5cdFx0dGhpcy5kb2M9cGFyZW50LmRvY1xuXHRcdHRoaXMubGV2ZWxTZWxlY3Rvcj1sZXZlbFNlbGVjdG9yXG5cdFx0dGhpcy5sZXZlbD1sZXZlbFxuXHRcdHRoaXMuY291bnRlcj1jb3VudGVyXG5cdFx0dGhpcy5kb2MuY3JlYXRlU3R5bGUobGV2ZWxTZWxlY3RvcikuY291bnRlclJlc2V0PWNvdW50ZXJcblx0XHR0aGlzLmRvYy5jcmVhdGVTdHlsZShsZXZlbFNlbGVjdG9yKyc+bGknKS5jb3VudGVySW5jcmVtZW50PWNvdW50ZXJcblx0fVxuXHRzdGFydCh4KXtcblx0XHR0aGlzLmRvYy5jcmVhdGVTdHlsZSh0aGlzLmxldmVsU2VsZWN0b3IpLmNvdW50ZXJSZXNldD10aGlzLmNvdW50ZXIrJyAnKyh4LTEpXG5cdH1cblx0bnVtRm10KHgpe1xuXHRcdHRoaXMudHlwZT1MaXN0U3R5bGVUeXBlW3hdfHx4XG5cdH1cblx0bHZsVGV4dCh4KXtcblx0XHR0aGlzLnN0eWxlLmNvbnRlbnQ9J1wiJyt4LnJlcGxhY2UoJyUnKyh0aGlzLmxldmVsKzEpLCdcIiBjb3VudGVyKCcrdGhpcy5jb3VudGVyKyghdGhpcy50eXBlID8gJycgOiAnLCcrdGhpcy50eXBlKSsnKSBcIicpKydcIidcblx0fVxuXHRsdmxKYyh4KXtcblx0XHRcblx0fVxuXHRsdmxQaWNCdWxsZXRJZCh4KXtcblx0XHRcblx0fVxufSJdfQ==