'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _p = require('./p');

var _p2 = _interopRequireDefault(_p);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var H = function (_Paragraph) {
	_inherits(H, _Paragraph);

	function H() {
		_classCallCheck(this, H);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(H).apply(this, arguments));
	}

	_createClass(H, [{
		key: 'tag',
		get: function get() {
			return 'h' + (this.wordModel.getOutlineLevel() + 1);
		}
	}]);

	return H;
}(_p2.default);

exports.default = H;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQjs7Ozs7Ozs7Ozs7c0JBQ1g7QUFDUixpQkFBVyxLQUFLLFNBQUwsQ0FBZSxlQUFmLEtBQWlDLENBQWpDLENBQVgsQ0FEUTs7OztRQURXIiwiZmlsZSI6ImguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFyYWdyYXBoIGZyb20gJy4vcCdcdFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIIGV4dGVuZHMgUGFyYWdyYXBoe1xuXHRnZXQgdGFnKCl7XG5cdFx0cmV0dXJuIGBoJHt0aGlzLndvcmRNb2RlbC5nZXRPdXRsaW5lTGV2ZWwoKSsxfWBcblx0fVxufSJdfQ==