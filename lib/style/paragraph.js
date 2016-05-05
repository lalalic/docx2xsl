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
					return this[category] = new _inline2.default.Properties(this.style);
				case 'paragraph':
					return this[category] = new this.constructor.Properties(this.style);
				case 'frame':
					this[category] = new this.constructor.Properties(this.style);
					return this[category] = new this.constructor.FrameProperties(this.style);
				case 'numbering':
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9wYXJhZ3JhcGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQjs7Ozs7Ozs7Ozs7MENBQ0ksVUFBUztBQUNoQyxPQUFHLEtBQUssUUFBTCxDQUFILEVBQ0MsT0FBTyxLQUFLLFFBQUwsQ0FBUCxDQUREOztBQUdBLFdBQU8sUUFBUDtBQUNBLFNBQUssUUFBTDtBQUNDLFlBQU8sS0FBSyxRQUFMLElBQWUsSUFBSSxpQkFBTyxVQUFQLENBQWtCLEtBQUssS0FBTCxDQUFyQyxDQURSO0FBREEsU0FHSyxXQUFMO0FBQ0MsWUFBTyxLQUFLLFFBQUwsSUFBZSxJQUFJLEtBQUssV0FBTCxDQUFpQixVQUFqQixDQUE0QixLQUFLLEtBQUwsQ0FBL0MsQ0FEUjtBQUhBLFNBS0ssT0FBTDtBQUNDLFVBQUssUUFBTCxJQUFlLElBQUksS0FBSyxXQUFMLENBQWlCLFVBQWpCLENBQTRCLEtBQUssS0FBTCxDQUEvQyxDQUREO0FBRUMsWUFBTyxLQUFLLFFBQUwsSUFBZSxJQUFJLEtBQUssV0FBTCxDQUFpQixlQUFqQixDQUFpQyxLQUFLLEtBQUwsQ0FBcEQsQ0FGUjtBQUxBLFNBUUssV0FBTDtBQUNDLFVBQUssUUFBTCxJQUFlLElBQUksS0FBSyxXQUFMLENBQWlCLFVBQWpCLENBQTRCLEtBQUssS0FBTCxDQUEvQyxDQUREO0FBRUMsWUFBTyxLQUFLLFFBQUwsSUFBZSxJQUFJLG9CQUFVLFVBQVYsQ0FBcUIsS0FBSyxLQUFMLENBQXhDLENBRlI7QUFSQSxJQUpnQzs7OztRQURiOzs7VUFtQmI7Ozs7Ozs7Ozs7O3FCQUNILEdBQUU7QUFDSixRQUFLLEdBQUwsQ0FBUyxZQUFULEVBQXNCLENBQXRCLEVBREk7Ozs7c0JBR0QsR0FBRTtBQUNMLEtBQUUsSUFBRixJQUFVLEtBQUssR0FBTCxDQUFTLGFBQVQsRUFBdUIsRUFBRSxJQUFGLEdBQU8sSUFBUCxDQUFqQyxDQURLO0FBRUwsS0FBRSxLQUFGLElBQVcsS0FBSyxHQUFMLENBQVMsY0FBVCxFQUF3QixFQUFFLEtBQUYsR0FBUSxJQUFSLENBQW5DLENBRks7QUFHTCxLQUFFLFNBQUYsSUFBZSxLQUFLLEdBQUwsQ0FBUyxhQUFULEVBQXVCLEVBQUUsU0FBRixHQUFZLElBQVosQ0FBdEMsQ0FISztBQUlMLEtBQUUsT0FBRixJQUFhLEtBQUssR0FBTCxDQUFTLGFBQVQsRUFBdUIsTUFBSSxFQUFFLE9BQUYsR0FBVSxJQUFkLENBQXBDLENBSks7Ozs7MEJBTUUsR0FBRTtBQUNULEtBQUUsTUFBRixJQUFZLEtBQUssR0FBTCxDQUFTLGVBQVQsRUFBeUIsRUFBRSxNQUFGLEdBQVMsSUFBVCxDQUFyQyxDQURTO0FBRVQsS0FBRSxHQUFGLElBQVMsS0FBSyxHQUFMLENBQVMsWUFBVCxFQUFzQixFQUFFLEdBQUYsR0FBTSxJQUFOLENBQS9CLENBRlM7O0FBSVQsS0FBRSxVQUFGLElBQWdCLEtBQUssR0FBTCxDQUFTLGFBQVQsRUFBdUIsRUFBRSxVQUFGLENBQXZDLENBSlM7Ozs7O0VBVnFCLG9CQUFNLFVBQU47O0FBbkJaLFVBcUNiOzs7Ozs7Ozs7O0VBQThCLG9CQUFNLFVBQU47O2tCQXJDakIiLCJmaWxlIjoicGFyYWdyYXBoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlIGZyb20gJy4vY29udmVydGVyJ1xuaW1wb3J0IElubGluZSBmcm9tICcuL2lubGluZSdcbmltcG9ydCBOdW1iZXJpbmcgZnJvbSAnLi9udW1iZXJpbmcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmFncmFwaCBleHRlbmRzIFN0eWxle1xuXHRfZ2V0UHJvcGVydGllc0NvbnZlcnRlcihjYXRlZ29yeSl7XG5cdFx0aWYodGhpc1tjYXRlZ29yeV0pXG5cdFx0XHRyZXR1cm4gdGhpc1tjYXRlZ29yeV1cblx0XHRcblx0XHRzd2l0Y2goY2F0ZWdvcnkpe1xuXHRcdGNhc2UgJ2lubGluZSc6XG5cdFx0XHRyZXR1cm4gdGhpc1tjYXRlZ29yeV09bmV3IElubGluZS5Qcm9wZXJ0aWVzKHRoaXMuc3R5bGUpXG5cdFx0Y2FzZSAncGFyYWdyYXBoJzpcblx0XHRcdHJldHVybiB0aGlzW2NhdGVnb3J5XT1uZXcgdGhpcy5jb25zdHJ1Y3Rvci5Qcm9wZXJ0aWVzKHRoaXMuc3R5bGUpXG5cdFx0Y2FzZSAnZnJhbWUnOlxuXHRcdFx0dGhpc1tjYXRlZ29yeV09bmV3IHRoaXMuY29uc3RydWN0b3IuUHJvcGVydGllcyh0aGlzLnN0eWxlKVxuXHRcdFx0cmV0dXJuIHRoaXNbY2F0ZWdvcnldPW5ldyB0aGlzLmNvbnN0cnVjdG9yLkZyYW1lUHJvcGVydGllcyh0aGlzLnN0eWxlKVxuXHRcdGNhc2UgJ251bWJlcmluZyc6XG5cdFx0XHR0aGlzW2NhdGVnb3J5XT1uZXcgdGhpcy5jb25zdHJ1Y3Rvci5Qcm9wZXJ0aWVzKHRoaXMuc3R5bGUpXG5cdFx0XHRyZXR1cm4gdGhpc1tjYXRlZ29yeV09bmV3IE51bWJlcmluZy5Qcm9wZXJ0aWVzKHRoaXMuc3R5bGUpXG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIFByb3BlcnRpZXM9Y2xhc3MgZXh0ZW5kcyBTdHlsZS5Qcm9wZXJ0aWVze1xuXHRcdGpjKHgpe1xuXHRcdFx0dGhpcy5zZXQoXCJ0ZXh0LWFsaWduXCIseClcblx0XHR9XG5cdFx0aW5kKHgpe1xuXHRcdFx0eC5sZWZ0ICYmIHRoaXMuc2V0KFwibWFyZ2luLWxlZnRcIix4LmxlZnQrJ3B0Jylcblx0XHRcdHgucmlnaHQgJiYgdGhpcy5zZXQoXCJtYXJnaW4tcmlnaHRcIix4LnJpZ2h0KydwdCcpXG5cdFx0XHR4LmZpcnN0TGluZSAmJiB0aGlzLnNldChcInRleHQtaW5kZW50XCIseC5maXJzdExpbmUrJ3B0Jylcblx0XHRcdHguaGFuZ2luZyAmJiB0aGlzLnNldChcInRleHQtaW5kZW50XCIsJy0nK3guaGFuZ2luZysncHQnKVxuXHRcdH1cblx0XHRzcGFjaW5nKHgpe1xuXHRcdFx0eC5ib3R0b20gJiYgdGhpcy5zZXQoXCJtYXJnaW4tYm90dG9tXCIseC5ib3R0b20rJ3B0Jylcblx0XHRcdHgudG9wICYmIHRoaXMuc2V0KFwibWFyZ2luLXRvcFwiLHgudG9wKydwdCcpXG5cblx0XHRcdHgubGluZUhlaWdodCAmJiB0aGlzLnNldChcImxpbmUtaGVpZ2h0XCIseC5saW5lSGVpZ2h0KVxuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBGcmFtZVByb3BlcnRpZXM9Y2xhc3MgZXh0ZW5kcyBTdHlsZS5Qcm9wZXJ0aWVze1xuXG5cdH1cbn1cbiJdfQ==