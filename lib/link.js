"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = function (_require) {
	_inherits(Link, _require);

	function Link() {
		var _Object$getPrototypeO;

		var _temp, _this, _ret;

		_classCallCheck(this, Link);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Link)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.tag = "basic-link", _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Link, [{
		key: "convert",
		value: function convert() {
			_get(Object.getPrototypeOf(Link.prototype), "convert", this).apply(this, arguments);
			var link = this.wordModel.getLink();
			switch (typeof link === "undefined" ? "undefined" : _typeof(link)) {
				case 'string':
					if (link.startsWith('#')) this.content.setAttribute("internal-destination", link.substring(1));else this.content.setAttribute("external-destination", link);
					break;
				default:

					break;
			}
		}
	}]);

	return Link;
}(require("./any"));

exports.default = Link;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9saW5rLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFxQjs7Ozs7Ozs7Ozs7Ozs7Z01BQ3BCLE1BQUk7OztjQURnQjs7NEJBR1g7QUFDUiw4QkFKbUIsOENBSUYsVUFBakIsQ0FEUTtBQUVSLE9BQUksT0FBSyxLQUFLLFNBQUwsQ0FBZSxPQUFmLEVBQUwsQ0FGSTtBQUdSLGtCQUFjLGtEQUFkO0FBQ0EsU0FBSyxRQUFMO0FBQ0MsU0FBRyxLQUFLLFVBQUwsQ0FBZ0IsR0FBaEIsQ0FBSCxFQUNDLEtBQUssT0FBTCxDQUFhLFlBQWIsQ0FBMEIsc0JBQTFCLEVBQWlELEtBQUssU0FBTCxDQUFlLENBQWYsQ0FBakQsRUFERCxLQUdDLEtBQUssT0FBTCxDQUFhLFlBQWIsQ0FBMEIsc0JBQTFCLEVBQWlELElBQWpELEVBSEQ7QUFJRCxXQUxBO0FBREE7O0FBU0EsV0FGQTtBQVBBLElBSFE7Ozs7UUFIVztFQUFhLFFBQVEsT0FBUjs7a0JBQWIiLCJmaWxlIjoibGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmsgZXh0ZW5kcyByZXF1aXJlKFwiLi9hbnlcIil7XHJcblx0dGFnPVwiYmFzaWMtbGlua1wiXHJcblx0XHJcblx0Y29udmVydCgpe1xyXG5cdFx0c3VwZXIuY29udmVydCguLi5hcmd1bWVudHMpXHJcblx0XHR2YXIgbGluaz10aGlzLndvcmRNb2RlbC5nZXRMaW5rKClcclxuXHRcdHN3aXRjaCh0eXBlb2YobGluaykpe1xyXG5cdFx0Y2FzZSAnc3RyaW5nJzpcclxuXHRcdFx0aWYobGluay5zdGFydHNXaXRoKCcjJykpXHJcblx0XHRcdFx0dGhpcy5jb250ZW50LnNldEF0dHJpYnV0ZShcImludGVybmFsLWRlc3RpbmF0aW9uXCIsbGluay5zdWJzdHJpbmcoMSkpXHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKFwiZXh0ZXJuYWwtZGVzdGluYXRpb25cIixsaW5rKVxyXG5cdFx0YnJlYWtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcclxuXHRcdGJyZWFrXHJcblx0XHR9XHJcblx0fVxyXG59Il19