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
	}, {
		key: '_shouldIgnore',
		value: function _shouldIgnore() {
			return false;
		}
	}]);

	return Any;
}();

exports.default = Any;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0ZXIvYW55LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFxQjtBQUNqQixVQURpQixHQUNqQixDQUFZLE1BQVosRUFBb0IsZUFBcEIsRUFBb0M7d0JBRG5CLEtBQ21COztBQUNoQyxPQUFLLFNBQUwsR0FBZSxNQUFmLENBRGdDO0FBRXRDLE9BQUssTUFBTCxHQUFZLGVBQVosQ0FGc0M7QUFHdEMsT0FBSyxHQUFMLEdBQVUsbUJBQW1CLGdCQUFnQixHQUFoQixDQUhTO0FBSXRDLE9BQUssT0FBTCxHQUFhLElBQWIsQ0FKc0M7QUFLaEMsT0FBSyxHQUFMLEdBQVMsSUFBVCxDQUxnQztFQUFwQzs7Ozs7Y0FEaUI7OzBCQVViO0FBQ04sT0FBRyxDQUFDLEtBQUssTUFBTCxJQUFlLEtBQUssTUFBTCxDQUFZLE9BQVosRUFDbEIsT0FBTyxLQUFLLE9BQUwsYUFBZ0IsU0FBaEIsQ0FBUCxDQUREOzs7OzRCQUdRO0FBQ0YsUUFBSyxPQUFMLEdBQWEsS0FBSyxhQUFMLEVBQWIsQ0FERTtBQUVSLE9BQUcsS0FBSyxPQUFMLEVBQWE7QUFDZixTQUFLLE1BQUwsQ0FBWSxPQUFaLENBQW9CLFdBQXBCLENBQWdDLEtBQUssT0FBTCxDQUFoQyxDQURlO0lBQWhCLE1BR0MsS0FBSyxPQUFMLEdBQWEsS0FBSyxNQUFMLElBQWUsS0FBSyxNQUFMLENBQVksT0FBWixJQUF1QixJQUF0QyxDQUhkOztBQUtBLFFBQUssWUFBTCxHQVBROzs7O2tDQVVTO0FBQ2pCLG1CQUFjLEtBQUssR0FBTCxDQUFkO0FBQ0EsU0FBSyxRQUFMO0FBQ0MsWUFBTyxLQUFLLEdBQUwsQ0FBUyxhQUFULENBQXVCLEtBQUssR0FBTCxDQUE5QixDQUREO0FBREEsU0FHSyxVQUFMO0FBQ0MsWUFBTyxLQUFLLEdBQUwsQ0FBUyxhQUFULENBQXVCLEtBQUssR0FBTCxFQUF2QixDQUFQLENBREQ7QUFIQTtBQU1DLFlBQU8sSUFBUCxDQUREO0FBTEEsSUFEaUI7Ozs7aUNBV0Q7OztrQ0FJQztBQUNYLFVBQU8sS0FBUCxDQURXOzs7O1FBdkNFIiwiZmlsZSI6ImFueS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFueXtcbiAgICBjb25zdHJ1Y3Rvcih3TW9kZWwsIHBhcmVudENvbnZlcnRlcil7XG4gICAgICAgIHRoaXMud29yZE1vZGVsPXdNb2RlbFxuXHRcdHRoaXMucGFyZW50PXBhcmVudENvbnZlcnRlclxuXHRcdHRoaXMuZG9jPSBwYXJlbnRDb252ZXJ0ZXIgJiYgcGFyZW50Q29udmVydGVyLmRvY1xuXHRcdHRoaXMuY29udGVudD1udWxsO1xuICAgICAgICB0aGlzLnRhZz1udWxsXG4gICAgfVxuXG4gICAgLyoqaW50ZXJmYWNlIEFQSTogaGFwcGVuIHdoZW4ganVzdCB3b3JkIG1vZGVsIGlkZW50aWZpZWQsIHdpdGhvdXQgY2hpbGRyZW4gYXBwZW5kZWQgeWV0Ki9cblx0dmlzaXQoKXtcblx0XHRpZighdGhpcy5wYXJlbnQgfHwgdGhpcy5wYXJlbnQuY29udGVudClcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnQoLi4uYXJndW1lbnRzKVxuXHR9XG5cdGNvbnZlcnQoKXtcbiAgICAgICAgdGhpcy5jb250ZW50PXRoaXMuY3JlYXRlRWxlbWVudCgpXG5cdFx0aWYodGhpcy5jb250ZW50KXtcblx0XHRcdHRoaXMucGFyZW50LmNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50KVxuXHRcdH1lbHNlXG5cdFx0XHR0aGlzLmNvbnRlbnQ9dGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuY29udGVudCB8fCBudWxsXG5cblx0XHR0aGlzLmNvbnZlcnRTdHlsZSgpXG4gICAgfVxuXG4gICAgY3JlYXRlRWxlbWVudCgpe1xuXHRcdHN3aXRjaCh0eXBlb2YodGhpcy50YWcpKXtcblx0XHRjYXNlICdzdHJpbmcnOlxuXHRcdFx0cmV0dXJuIHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQodGhpcy50YWcpXG5cdFx0Y2FzZSAnZnVuY3Rpb24nOlxuXHRcdFx0cmV0dXJuIHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQodGhpcy50YWcoKSlcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIG51bGxcblx0XHR9XG5cdH1cblxuICAgIGNvbnZlcnRTdHlsZSgpe1xuXG5cdH1cblxuICAgIF9zaG91bGRJZ25vcmUoKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufVxuIl19