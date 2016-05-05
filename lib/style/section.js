"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _converter = require("./converter");

var _converter2 = _interopRequireDefault(_converter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Section = function (_Style$Properties) {
	_inherits(Section, _Style$Properties);

	function Section() {
		_classCallCheck(this, Section);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Section).apply(this, arguments));
	}

	_createClass(Section, [{
		key: "size",
		value: function size(x) {
			this.set("page-width", x.width + "pt");
			this.set("page-height", x.height + "pt");
		}
	}, {
		key: "margin",
		value: function margin(x) {
			this.set("margin-left", x.left + 'pt');
			this.set("margin-right", x.right + 'pt');
			this.set("margin-top", x.top + 'pt');
			this.set("margin-bottom", x.bottom + 'pt');

			if (x.gutter) {
				var gutter = 'padding' + (x.gutterAtRight ? 'Right' : 'Left');
				this.set(gutter, x[x.gutterAtRight ? 'right' : 'left'] + x.gutter + 'pt');
			}
		}
	}, {
		key: "cols",
		value: function cols(x) {}
	}]);

	return Section;
}(_converter2.default.Properties);

exports.default = Section;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9zZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQjs7Ozs7Ozs7Ozs7dUJBQ2YsR0FBRTtBQUNOLFFBQUssR0FBTCxDQUFTLFlBQVQsRUFBeUIsRUFBRSxLQUFGLE9BQXpCLEVBRE07QUFFTixRQUFLLEdBQUwsQ0FBUyxhQUFULEVBQTJCLEVBQUUsTUFBRixPQUEzQixFQUZNOzs7O3lCQUlBLEdBQUU7QUFDUixRQUFLLEdBQUwsQ0FBUyxhQUFULEVBQXVCLEVBQUUsSUFBRixHQUFPLElBQVAsQ0FBdkIsQ0FEUTtBQUVSLFFBQUssR0FBTCxDQUFTLGNBQVQsRUFBd0IsRUFBRSxLQUFGLEdBQVEsSUFBUixDQUF4QixDQUZRO0FBR1IsUUFBSyxHQUFMLENBQVMsWUFBVCxFQUFzQixFQUFFLEdBQUYsR0FBTSxJQUFOLENBQXRCLENBSFE7QUFJUixRQUFLLEdBQUwsQ0FBUyxlQUFULEVBQXlCLEVBQUUsTUFBRixHQUFTLElBQVQsQ0FBekIsQ0FKUTs7QUFNUixPQUFHLEVBQUUsTUFBRixFQUFTO0FBQ1gsUUFBSSxTQUFPLGFBQVcsRUFBRSxhQUFGLEdBQWtCLE9BQWxCLEdBQTRCLE1BQTVCLENBQVgsQ0FEQTtBQUVYLFNBQUssR0FBTCxDQUFTLE1BQVQsRUFBZ0IsRUFBRyxFQUFFLGFBQUYsR0FBa0IsT0FBbEIsR0FBNEIsTUFBNUIsQ0FBSCxHQUF3QyxFQUFFLE1BQUYsR0FBUyxJQUFqRCxDQUFoQixDQUZXO0lBQVo7Ozs7dUJBTUksR0FBRTs7O1FBakJhO0VBQWdCLG9CQUFNLFVBQU47O2tCQUFoQiIsImZpbGUiOiJzZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlIGZyb20gJy4vY29udmVydGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIGV4dGVuZHMgU3R5bGUuUHJvcGVydGllc3tcblx0c2l6ZSh4KXtcblx0XHR0aGlzLnNldChcInBhZ2Utd2lkdGhcIixgJHt4LndpZHRofXB0YClcblx0XHR0aGlzLnNldChcInBhZ2UtaGVpZ2h0XCIsIGAke3guaGVpZ2h0fXB0YClcblx0fVxuXHRtYXJnaW4oeCl7XG5cdFx0dGhpcy5zZXQoXCJtYXJnaW4tbGVmdFwiLHgubGVmdCsncHQnKVxuXHRcdHRoaXMuc2V0KFwibWFyZ2luLXJpZ2h0XCIseC5yaWdodCsncHQnKVxuXHRcdHRoaXMuc2V0KFwibWFyZ2luLXRvcFwiLHgudG9wKydwdCcpXG5cdFx0dGhpcy5zZXQoXCJtYXJnaW4tYm90dG9tXCIseC5ib3R0b20rJ3B0JylcblxuXHRcdGlmKHguZ3V0dGVyKXtcblx0XHRcdGxldCBndXR0ZXI9J3BhZGRpbmcnKyh4Lmd1dHRlckF0UmlnaHQgPyAnUmlnaHQnIDogJ0xlZnQnKVxuXHRcdFx0dGhpcy5zZXQoZ3V0dGVyLHhbKHguZ3V0dGVyQXRSaWdodCA/ICdyaWdodCcgOiAnbGVmdCcpXSt4Lmd1dHRlcisncHQnKVxuXHRcdH1cblx0fVxuXG5cdGNvbHMoeCl7XG5cblx0fVxufVxuIl19