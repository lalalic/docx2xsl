"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inline = require("./style/inline");

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Inline = function (_require) {
	_inherits(Inline, _require);

	function Inline() {
		var _Object$getPrototypeO;

		var _temp, _this, _ret;

		_classCallCheck(this, Inline);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Inline)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.tag = "inline", _this.stylable = true, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Inline, [{
		key: "_shouldIgnore",
		value: function _shouldIgnore() {
			return this.wordModel.isWebHidden() || this.wordModel.isHidden();
		}
	}]);

	return Inline;
}(require("./any"));

Inline.StyleProperties = _inline2.default.Properties;
exports.default = Inline;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmxpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCOzs7Ozs7Ozs7Ozs7OztrTUFDakIsTUFBSSxnQkFDUCxXQUFTOzs7Y0FGVzs7a0NBS0w7QUFDZCxVQUFPLEtBQUssU0FBTCxDQUFlLFdBQWYsTUFBZ0MsS0FBSyxTQUFMLENBQWUsUUFBZixFQUFoQyxDQURPOzs7O1FBTEs7RUFBZSxRQUFRLE9BQVI7O0FBQWYsT0FHYixrQkFBZ0IsaUJBQU0sVUFBTjtrQkFISCIsImZpbGUiOiJpbmxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGUgZnJvbSBcIi4vc3R5bGUvaW5saW5lXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5saW5lIGV4dGVuZHMgcmVxdWlyZShcIi4vYW55XCIpe1xuICAgIHRhZz1cImlubGluZVwiXG5cdHN0eWxhYmxlPXRydWVcblx0c3RhdGljIFN0eWxlUHJvcGVydGllcz1TdHlsZS5Qcm9wZXJ0aWVzXG5cdFxuXHRfc2hvdWxkSWdub3JlKCl7XG5cdFx0cmV0dXJuIHRoaXMud29yZE1vZGVsLmlzV2ViSGlkZGVuKCkgfHwgdGhpcy53b3JkTW9kZWwuaXNIaWRkZW4oKVxuXHR9XG59XG4iXX0=