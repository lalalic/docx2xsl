"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Location = function (_require) {
	_inherits(Location, _require);

	function Location() {
		_classCallCheck(this, Location);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Location).apply(this, arguments));
	}

	_createClass(Location, [{
		key: "convert",
		value: function convert() {
			var el = this.parent.content.lastChild || this.parent.content;
			if (!el.hasAttribute("id")) el.setAttribute("id", this.wordModel.getName());
		}
	}]);

	return Location;
}(require("./any"));

exports.default = Location;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ib29rbWFyay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUFxQjs7Ozs7Ozs7Ozs7NEJBQ1g7QUFDUixPQUFJLEtBQUcsS0FBSyxNQUFMLENBQVksT0FBWixDQUFvQixTQUFwQixJQUErQixLQUFLLE1BQUwsQ0FBWSxPQUFaLENBRDlCO0FBRVIsT0FBRyxDQUFDLEdBQUcsWUFBSCxDQUFnQixJQUFoQixDQUFELEVBQ0YsR0FBRyxZQUFILENBQWdCLElBQWhCLEVBQXFCLEtBQUssU0FBTCxDQUFlLE9BQWYsRUFBckIsRUFERDs7OztRQUhtQjtFQUFpQixRQUFRLE9BQVI7O2tCQUFqQiIsImZpbGUiOiJib29rbWFyay5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2F0aW9uIGV4dGVuZHMgcmVxdWlyZShcIi4vYW55XCIpe1xyXG5cdGNvbnZlcnQoKXtcclxuXHRcdHZhciBlbD10aGlzLnBhcmVudC5jb250ZW50Lmxhc3RDaGlsZHx8dGhpcy5wYXJlbnQuY29udGVudFxyXG5cdFx0aWYoIWVsLmhhc0F0dHJpYnV0ZShcImlkXCIpKVxyXG5cdFx0XHRlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLHRoaXMud29yZE1vZGVsLmdldE5hbWUoKSlcclxuXHR9XHJcbn0iXX0=