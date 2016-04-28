'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Any = function () {
	function Any(wModel, parentConverter) {
		_classCallCheck(this, Any);

		this.wordModel = wModel;
		this.parent = parentConverter;
		this.doc = parentConverter && parentConverter.doc;
		this.content = null;
		this.tag = null;
	}

	/**interface API: happen when just word model identified, without children appended yet*/


	_createClass(Any, [{
		key: 'visit',
		value: function visit() {
			if (!this.parent || this.parent.content) return this.convert.apply(this, arguments);
		}
	}, {
		key: 'convert',
		value: function convert() {
			this.content = this.createElement();
			if (this.content) {
				this.parent.content.appendChild(this.content);
			} else this.content = this.parent && this.parent.content || null;

			this.convertStyle();
		}
	}, {
		key: 'createElement',
		value: function createElement() {
			switch (_typeof(this.tag)) {
				case 'string':
					return this.doc.createElement(this.tag);
				case 'function':
					return this.doc.createElement(this.tag());
				default:
					return null;
			}
		}
	}, {
		key: 'convertStyle',
		value: function convertStyle() {}
	}]);

	return Any;
}();

exports.default = Any;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0ZXIvYW55LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFxQjtBQUNqQixVQURpQixHQUNqQixDQUFZLE1BQVosRUFBb0IsZUFBcEIsRUFBb0M7d0JBRG5CLEtBQ21COztBQUNoQyxPQUFLLFNBQUwsR0FBZSxNQUFmLENBRGdDO0FBRXRDLE9BQUssTUFBTCxHQUFZLGVBQVosQ0FGc0M7QUFHdEMsT0FBSyxHQUFMLEdBQVUsbUJBQW1CLGdCQUFnQixHQUFoQixDQUhTO0FBSXRDLE9BQUssT0FBTCxHQUFhLElBQWIsQ0FKc0M7QUFLaEMsT0FBSyxHQUFMLEdBQVMsSUFBVCxDQUxnQztFQUFwQzs7Ozs7Y0FEaUI7OzBCQVViO0FBQ04sT0FBRyxDQUFDLEtBQUssTUFBTCxJQUFlLEtBQUssTUFBTCxDQUFZLE9BQVosRUFDbEIsT0FBTyxLQUFLLE9BQUwsYUFBZ0IsU0FBaEIsQ0FBUCxDQUREOzs7OzRCQUdRO0FBQ0YsUUFBSyxPQUFMLEdBQWEsS0FBSyxhQUFMLEVBQWIsQ0FERTtBQUVSLE9BQUcsS0FBSyxPQUFMLEVBQWE7QUFDZixTQUFLLE1BQUwsQ0FBWSxPQUFaLENBQW9CLFdBQXBCLENBQWdDLEtBQUssT0FBTCxDQUFoQyxDQURlO0lBQWhCLE1BR0MsS0FBSyxPQUFMLEdBQWEsS0FBSyxNQUFMLElBQWUsS0FBSyxNQUFMLENBQVksT0FBWixJQUF1QixJQUF0QyxDQUhkOztBQUtBLFFBQUssWUFBTCxHQVBROzs7O2tDQVVTO0FBQ2pCLG1CQUFjLEtBQUssR0FBTCxDQUFkO0FBQ0EsU0FBSyxRQUFMO0FBQ0MsWUFBTyxLQUFLLEdBQUwsQ0FBUyxhQUFULENBQXVCLEtBQUssR0FBTCxDQUE5QixDQUREO0FBREEsU0FHSyxVQUFMO0FBQ0MsWUFBTyxLQUFLLEdBQUwsQ0FBUyxhQUFULENBQXVCLEtBQUssR0FBTCxFQUF2QixDQUFQLENBREQ7QUFIQTtBQU1DLFlBQU8sSUFBUCxDQUREO0FBTEEsSUFEaUI7Ozs7aUNBV0Q7OztRQW5DRyIsImZpbGUiOiJhbnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBbnl7XG4gICAgY29uc3RydWN0b3Iod01vZGVsLCBwYXJlbnRDb252ZXJ0ZXIpe1xuICAgICAgICB0aGlzLndvcmRNb2RlbD13TW9kZWxcblx0XHR0aGlzLnBhcmVudD1wYXJlbnRDb252ZXJ0ZXJcblx0XHR0aGlzLmRvYz0gcGFyZW50Q29udmVydGVyICYmIHBhcmVudENvbnZlcnRlci5kb2Ncblx0XHR0aGlzLmNvbnRlbnQ9bnVsbDtcbiAgICAgICAgdGhpcy50YWc9bnVsbFxuICAgIH1cblxuICAgIC8qKmludGVyZmFjZSBBUEk6IGhhcHBlbiB3aGVuIGp1c3Qgd29yZCBtb2RlbCBpZGVudGlmaWVkLCB3aXRob3V0IGNoaWxkcmVuIGFwcGVuZGVkIHlldCovXG5cdHZpc2l0KCl7XG5cdFx0aWYoIXRoaXMucGFyZW50IHx8IHRoaXMucGFyZW50LmNvbnRlbnQpXG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0KC4uLmFyZ3VtZW50cylcblx0fVxuXHRjb252ZXJ0KCl7XG4gICAgICAgIHRoaXMuY29udGVudD10aGlzLmNyZWF0ZUVsZW1lbnQoKVxuXHRcdGlmKHRoaXMuY29udGVudCl7XG5cdFx0XHR0aGlzLnBhcmVudC5jb250ZW50LmFwcGVuZENoaWxkKHRoaXMuY29udGVudClcblx0XHR9ZWxzZVxuXHRcdFx0dGhpcy5jb250ZW50PXRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmNvbnRlbnQgfHwgbnVsbFxuXG5cdFx0dGhpcy5jb252ZXJ0U3R5bGUoKVxuICAgIH1cblxuICAgIGNyZWF0ZUVsZW1lbnQoKXtcblx0XHRzd2l0Y2godHlwZW9mKHRoaXMudGFnKSl7XG5cdFx0Y2FzZSAnc3RyaW5nJzpcblx0XHRcdHJldHVybiB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KHRoaXMudGFnKVxuXHRcdGNhc2UgJ2Z1bmN0aW9uJzpcblx0XHRcdHJldHVybiB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KHRoaXMudGFnKCkpXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBudWxsXG5cdFx0fVxuXHR9XG5cbiAgICBjb252ZXJ0U3R5bGUoKXtcblxuXHR9XG59XG4iXX0=