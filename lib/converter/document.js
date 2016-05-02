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

            this.doc.stylePath = this.stylePath.bind(this);
        }
    }, {
        key: "stylePath",
        value: function stylePath() {}
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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0ZXIvZG9jdW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCOzs7Ozs7Ozs7OztrQ0FRUjtBQUNMLGlCQUFLLEdBQUwsR0FBUyxLQUFLLFdBQUwsQ0FBaUIsY0FBakIsRUFBVCxDQURLO0FBRUwsaUJBQUssSUFBTCxHQUFVLEtBQUssR0FBTCxDQUFTLElBQVQsR0FBYyxLQUFLLE9BQUwsR0FBYSxLQUFLLEdBQUwsQ0FBUyxlQUFULENBRmhDO0FBR0wsaUJBQUssZUFBTCxHQUFxQixLQUFLLEdBQUwsQ0FBUyxlQUFULEdBQXlCLEtBQUssT0FBTCxDQUFhLFVBQWIsQ0FIekM7O0FBS0wsaUJBQUssR0FBTCxDQUFTLFNBQVQsR0FBbUIsS0FBSyxTQUFMLENBQWUsSUFBZixDQUFvQixJQUFwQixDQUFuQixDQUxLOzs7O29DQVFFOzs7NEJBWkQ7QUFDTixrRUFBZ0QsS0FBSyxJQUFMLENBQVUsU0FBVixDQUQxQzs7Ozt5Q0FIYTtBQUNuQixtQkFBTyxFQUFFLFFBQUYsMkhBQVAsQ0FEbUI7Ozs7V0FETiIsImZpbGUiOiJkb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb252ZXJ0ZXIgZnJvbSBcIi4vYW55XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnQgZXh0ZW5kcyBDb252ZXJ0ZXJ7XG4gICAgc3RhdGljIGNyZWF0ZURvY3VtZW50KCl7XG4gICAgICAgIHJldHVybiAkLnBhcnNlWE1MKGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz48cm9vdCB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkvWFNML0Zvcm1hdFwiPjxsYXlvdXQtbWFzdGVyLXNldC8+PC9yb290PmApXG4gICAgfVxuICAgIGdldCBkYXRhKCl7XG4gICAgICAgIHJldHVybiBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+JHt0aGlzLnJvb3Qub3V0ZXJIVE1MfWBcbiAgICB9XG5cbiAgICBjb252ZXJ0KCl7XG4gICAgICAgIHRoaXMuZG9jPXRoaXMuY29uc3RydWN0b3IuY3JlYXRlRG9jdW1lbnQoKVxuICAgICAgICB0aGlzLnJvb3Q9dGhpcy5kb2Mucm9vdD10aGlzLmNvbnRlbnQ9dGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50XG4gICAgICAgIHRoaXMubGF5b3V0TWFzdGVyU2V0PXRoaXMuZG9jLmxheW91dE1hc3RlclNldD10aGlzLmNvbnRlbnQuZmlyc3RDaGlsZFxuXG4gICAgICAgIHRoaXMuZG9jLnN0eWxlUGF0aD10aGlzLnN0eWxlUGF0aC5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgc3R5bGVQYXRoKCl7XG5cbiAgICB9XG59XG4iXX0=