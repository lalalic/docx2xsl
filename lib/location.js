"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Location = function (_require) {
	_inherits(Location, _require);

	function Location() {
		var _Object$getPrototypeO;

		var _temp, _this, _ret;

		_classCallCheck(this, Location);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Location)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.tag = "inline", _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Location, [{
		key: "convert",
		value: function convert() {
			if (this.parent.content.childNodes.length == 0 && !this.parent.content.id) {
				this.parent.content.setAttribute("id", this.wordModel.getName());
			} else {
				_get(Object.getPrototypeOf(Location.prototype), "convert", this).apply(this, arguments);
				this.content.setAttribute("id", this.wordModel.getName());
			}
		}
	}]);

	return Location;
}(require("./any"));

exports.default = Location;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2NhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCOzs7Ozs7Ozs7Ozs7OztvTUFDcEIsTUFBSTs7O2NBRGdCOzs0QkFFWDtBQUNSLE9BQUcsS0FBSyxNQUFMLENBQVksT0FBWixDQUFvQixVQUFwQixDQUErQixNQUEvQixJQUF1QyxDQUF2QyxJQUE0QyxDQUFDLEtBQUssTUFBTCxDQUFZLE9BQVosQ0FBb0IsRUFBcEIsRUFBdUI7QUFDdEUsU0FBSyxNQUFMLENBQVksT0FBWixDQUFvQixZQUFwQixDQUFpQyxJQUFqQyxFQUFzQyxLQUFLLFNBQUwsQ0FBZSxPQUFmLEVBQXRDLEVBRHNFO0lBQXZFLE1BRUs7QUFDSiwrQkFOa0Isa0RBTUQsVUFBakIsQ0FESTtBQUVKLFNBQUssT0FBTCxDQUFhLFlBQWIsQ0FBMEIsSUFBMUIsRUFBK0IsS0FBSyxTQUFMLENBQWUsT0FBZixFQUEvQixFQUZJO0lBRkw7Ozs7UUFIbUI7RUFBaUIsUUFBUSxPQUFSOztrQkFBakIiLCJmaWxlIjoibG9jYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhdGlvbiBleHRlbmRzIHJlcXVpcmUoXCIuL2FueVwiKXtcclxuXHR0YWc9XCJpbmxpbmVcIlxyXG5cdGNvbnZlcnQoKXtcclxuXHRcdGlmKHRoaXMucGFyZW50LmNvbnRlbnQuY2hpbGROb2Rlcy5sZW5ndGg9PTAgJiYgIXRoaXMucGFyZW50LmNvbnRlbnQuaWQpe1xyXG5cdFx0XHR0aGlzLnBhcmVudC5jb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsdGhpcy53b3JkTW9kZWwuZ2V0TmFtZSgpKVxyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHN1cGVyLmNvbnZlcnQoLi4uYXJndW1lbnRzKVxyXG5cdFx0XHR0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIix0aGlzLndvcmRNb2RlbC5nZXROYW1lKCkpXHJcblx0XHR9XHJcblx0XHRcdFxyXG5cdH1cclxufSJdfQ==