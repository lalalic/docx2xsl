"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _any = require("./any");

var _any2 = _interopRequireDefault(_any);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Document = function (_Converter) {
	_inherits(Document, _Converter);

	function Document() {
		_classCallCheck(this, Document);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Document).apply(this, arguments));
	}

	_createClass(Document, [{
		key: "convert",
		value: function convert() {
			this.doc = this.constructor.createDocument();
			this.root = this.doc.root = this.content = this.doc.documentElement;
			this.layoutMasterSet = this.doc.layoutMasterSet = this.content.firstChild;

			var styles = this.doc.createElement("wrapper");
			this.root.appendChild(styles);
			Object.assign(this.doc, {
				createStyle: function createStyle(id, pid) {
					return Object.seal(new Style(id, pid));
				},
				getStyle: function getStyle(id) {
					return Style.tree.get(id);
				}
			});
		}
	}, {
		key: "data",
		get: function get() {
			return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" + this.root.outerHTML;
		}
	}], [{
		key: "createDocument",
		value: function createDocument() {
			return $.parseXML("<?xml version=\"1.0\" encoding=\"UTF-8\"?><root xmlns=\"http://www.w3.org/1999/XSL/Format\"><layout-master-set/></root>");
		}
	}]);

	return Document;
}(_any2.default);

exports.default = Document;

var Style = function () {
	function Style(id, pid) {
		_classCallCheck(this, Style);

		this.props = new Map();
		this.categories = new Map();
		this.id = id;
		this.pid = pid;

		id && Style.tree.set(id, this);
	}

	_createClass(Style, [{
		key: "setAttribute",
		value: function setAttribute() {
			// a unified API for element
			this.set.apply(this, arguments);
		}
	}, {
		key: "set",
		value: function set() {
			var _props;

			(_props = this.props).set.apply(_props, arguments);
		}
	}, {
		key: "addCategory",
		value: function addCategory(category, style) {
			this.categories.set(category, style);
			return style;
		}
	}, {
		key: "applyOn",
		value: function applyOn(content) {
			console.log("style " + this.id + " applied");
			this.props.forEach(function (v, k) {
				if (!content.hasAttribute(k)) content.setAttribute(k, v);
			});
			if (this.parent) this.parent.applyOn(content);
		}
	}, {
		key: "parent",
		get: function get() {
			return Style.tree.get(this.pid);
		}
	}]);

	return Style;
}();

Style.tree = new Map();
Style.defaults = new Map();
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0ZXIvZG9jdW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCOzs7Ozs7Ozs7Ozs0QkFRUjtBQUNMLFFBQUssR0FBTCxHQUFTLEtBQUssV0FBTCxDQUFpQixjQUFqQixFQUFULENBREs7QUFFTCxRQUFLLElBQUwsR0FBVSxLQUFLLEdBQUwsQ0FBUyxJQUFULEdBQWMsS0FBSyxPQUFMLEdBQWEsS0FBSyxHQUFMLENBQVMsZUFBVCxDQUZoQztBQUdMLFFBQUssZUFBTCxHQUFxQixLQUFLLEdBQUwsQ0FBUyxlQUFULEdBQXlCLEtBQUssT0FBTCxDQUFhLFVBQWIsQ0FIekM7O0FBS0wsT0FBSSxTQUFPLEtBQUssR0FBTCxDQUFTLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBUCxDQUxDO0FBTUwsUUFBSyxJQUFMLENBQVUsV0FBVixDQUFzQixNQUF0QixFQU5LO0FBT1gsVUFBTyxNQUFQLENBQWMsS0FBSyxHQUFMLEVBQVM7QUFDdEIsc0NBQVksSUFBSSxLQUFJO0FBQ25CLFlBQU8sT0FBTyxJQUFQLENBQVksSUFBSSxLQUFKLENBQVUsRUFBVixFQUFjLEdBQWQsQ0FBWixDQUFQLENBRG1CO0tBREU7QUFLdEIsZ0NBQVMsSUFBRztBQUNYLFlBQU8sTUFBTSxJQUFOLENBQVcsR0FBWCxDQUFlLEVBQWYsQ0FBUCxDQURXO0tBTFU7SUFBdkIsRUFQVzs7OztzQkFKQztBQUNOLHlEQUFnRCxLQUFLLElBQUwsQ0FBVSxTQUFWLENBRDFDOzs7O21DQUhhO0FBQ25CLFVBQU8sRUFBRSxRQUFGLDJIQUFQLENBRG1COzs7O1FBRE47Ozs7O0lBMkJmO0FBQ0wsVUFESyxLQUNMLENBQVksRUFBWixFQUFnQixHQUFoQixFQUFvQjt3QkFEZixPQUNlOztBQUNuQixPQUFLLEtBQUwsR0FBVyxJQUFJLEdBQUosRUFBWCxDQURtQjtBQUVuQixPQUFLLFVBQUwsR0FBZ0IsSUFBSSxHQUFKLEVBQWhCLENBRm1CO0FBR25CLE9BQUssRUFBTCxHQUFRLEVBQVIsQ0FIbUI7QUFJbkIsT0FBSyxHQUFMLEdBQVMsR0FBVCxDQUptQjs7QUFNbkIsUUFBTSxNQUFNLElBQU4sQ0FBVyxHQUFYLENBQWUsRUFBZixFQUFtQixJQUFuQixDQUFOLENBTm1CO0VBQXBCOztjQURLOztpQ0FVUzs7QUFDYixRQUFLLEdBQUwsYUFBWSxTQUFaLEVBRGE7Ozs7d0JBSVQ7OztBQUNKLGtCQUFLLEtBQUwsRUFBVyxHQUFYLGVBQWtCLFNBQWxCLEVBREk7Ozs7OEJBSU8sVUFBUyxPQUFNO0FBQzFCLFFBQUssVUFBTCxDQUFnQixHQUFoQixDQUFvQixRQUFwQixFQUE2QixLQUE3QixFQUQwQjtBQUUxQixVQUFPLEtBQVAsQ0FGMEI7Ozs7MEJBU25CLFNBQVE7QUFDZixXQUFRLEdBQVIsWUFBcUIsS0FBSyxFQUFMLGFBQXJCLEVBRGU7QUFFZixRQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CLFVBQUMsQ0FBRCxFQUFHLENBQUgsRUFBTztBQUN6QixRQUFHLENBQUMsUUFBUSxZQUFSLENBQXFCLENBQXJCLENBQUQsRUFDRixRQUFRLFlBQVIsQ0FBcUIsQ0FBckIsRUFBdUIsQ0FBdkIsRUFERDtJQURrQixDQUFuQixDQUZlO0FBTWYsT0FBRyxLQUFLLE1BQUwsRUFDRixLQUFLLE1BQUwsQ0FBWSxPQUFaLENBQW9CLE9BQXBCLEVBREQ7Ozs7c0JBVlc7QUFDWCxVQUFPLE1BQU0sSUFBTixDQUFXLEdBQVgsQ0FBZSxLQUFLLEdBQUwsQ0FBdEIsQ0FEVzs7OztRQXZCUDs7O01BcUNFLE9BQUssSUFBSSxHQUFKO0FBckNQLE1Bc0NFLFdBQVMsSUFBSSxHQUFKIiwiZmlsZSI6ImRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnZlcnRlciBmcm9tIFwiLi9hbnlcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N1bWVudCBleHRlbmRzIENvbnZlcnRlcntcbiAgICBzdGF0aWMgY3JlYXRlRG9jdW1lbnQoKXtcbiAgICAgICAgcmV0dXJuICQucGFyc2VYTUwoYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/Pjxyb290IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS9YU0wvRm9ybWF0XCI+PGxheW91dC1tYXN0ZXItc2V0Lz48L3Jvb3Q+YClcbiAgICB9XG4gICAgZ2V0IGRhdGEoKXtcbiAgICAgICAgcmV0dXJuIGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz4ke3RoaXMucm9vdC5vdXRlckhUTUx9YFxuICAgIH1cblxuICAgIGNvbnZlcnQoKXtcbiAgICAgICAgdGhpcy5kb2M9dGhpcy5jb25zdHJ1Y3Rvci5jcmVhdGVEb2N1bWVudCgpXG4gICAgICAgIHRoaXMucm9vdD10aGlzLmRvYy5yb290PXRoaXMuY29udGVudD10aGlzLmRvYy5kb2N1bWVudEVsZW1lbnRcbiAgICAgICAgdGhpcy5sYXlvdXRNYXN0ZXJTZXQ9dGhpcy5kb2MubGF5b3V0TWFzdGVyU2V0PXRoaXMuY29udGVudC5maXJzdENoaWxkXG5cbiAgICAgICAgbGV0IHN0eWxlcz10aGlzLmRvYy5jcmVhdGVFbGVtZW50KFwid3JhcHBlclwiKVxuICAgICAgICB0aGlzLnJvb3QuYXBwZW5kQ2hpbGQoc3R5bGVzKVxuXHRcdE9iamVjdC5hc3NpZ24odGhpcy5kb2Mse1xuXHRcdFx0Y3JlYXRlU3R5bGUoaWQsIHBpZCl7XG5cdFx0XHRcdHJldHVybiBPYmplY3Quc2VhbChuZXcgU3R5bGUoaWQsIHBpZCkpXG5cdFx0XHR9LFxuXG5cdFx0XHRnZXRTdHlsZShpZCl7XG5cdFx0XHRcdHJldHVybiBTdHlsZS50cmVlLmdldChpZClcblx0XHRcdH1cblx0XHR9KVxuICAgIH1cbn1cblxuY2xhc3MgU3R5bGV7XG5cdGNvbnN0cnVjdG9yKGlkLCBwaWQpe1xuXHRcdHRoaXMucHJvcHM9bmV3IE1hcCgpXG5cdFx0dGhpcy5jYXRlZ29yaWVzPW5ldyBNYXAoKVxuXHRcdHRoaXMuaWQ9aWRcblx0XHR0aGlzLnBpZD1waWRcblxuXHRcdGlkICYmIFN0eWxlLnRyZWUuc2V0KGlkLCB0aGlzKVxuXHR9XG5cblx0c2V0QXR0cmlidXRlKCl7Ly8gYSB1bmlmaWVkIEFQSSBmb3IgZWxlbWVudFxuXHRcdHRoaXMuc2V0KC4uLmFyZ3VtZW50cylcblx0fVxuXG5cdHNldCgpe1xuXHRcdHRoaXMucHJvcHMuc2V0KC4uLmFyZ3VtZW50cylcblx0fVxuXG5cdGFkZENhdGVnb3J5KGNhdGVnb3J5LHN0eWxlKXtcblx0XHR0aGlzLmNhdGVnb3JpZXMuc2V0KGNhdGVnb3J5LHN0eWxlKVxuXHRcdHJldHVybiBzdHlsZVxuXHR9XG5cblx0Z2V0IHBhcmVudCgpe1xuXHRcdHJldHVybiBTdHlsZS50cmVlLmdldCh0aGlzLnBpZClcblx0fVxuXG5cdGFwcGx5T24oY29udGVudCl7XG5cdFx0Y29uc29sZS5sb2coYHN0eWxlICR7dGhpcy5pZH0gYXBwbGllZGApXG5cdFx0dGhpcy5wcm9wcy5mb3JFYWNoKCh2LGspPT57XG5cdFx0XHRpZighY29udGVudC5oYXNBdHRyaWJ1dGUoaykpXG5cdFx0XHRcdGNvbnRlbnQuc2V0QXR0cmlidXRlKGssdilcblx0XHR9KVxuXHRcdGlmKHRoaXMucGFyZW50KVxuXHRcdFx0dGhpcy5wYXJlbnQuYXBwbHlPbihjb250ZW50KVxuXHR9XG5cblx0c3RhdGljIHRyZWU9bmV3IE1hcCgpXG5cdHN0YXRpYyBkZWZhdWx0cz1uZXcgTWFwKClcbn1cbiJdfQ==