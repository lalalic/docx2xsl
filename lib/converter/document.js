"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _any = require("any");

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
            this.root = this.content = this.doc.documentElement;
            this.layoutMasterSet = this.content.firstChild;
        }
    }, {
        key: "data",
        get: function get() {
            return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" + this.root.outerHTML;
        }
    }], [{
        key: "createDocument",
        value: function createDocument() {
            return $.parseXML("<?xml version=\"1.0\" encoding=\"UTF-8\"?><root xmlns=\"http://www.w3.org/1999/XSL/Format\"><layout-masert-set/></root>");
        }
    }]);

    return Document;
}(_any2.default);

exports.default = Document;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0ZXIvZG9jdW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCOzs7Ozs7Ozs7OztrQ0FRUjtBQUNMLGlCQUFLLEdBQUwsR0FBUyxLQUFLLFdBQUwsQ0FBaUIsY0FBakIsRUFBVCxDQURLO0FBRUwsaUJBQUssSUFBTCxHQUFVLEtBQUssT0FBTCxHQUFhLEtBQUssR0FBTCxDQUFTLGVBQVQsQ0FGbEI7QUFHTCxpQkFBSyxlQUFMLEdBQXFCLEtBQUssT0FBTCxDQUFhLFVBQWIsQ0FIaEI7Ozs7NEJBSkM7QUFDTixrRUFBZ0QsS0FBSyxJQUFMLENBQVUsU0FBVixDQUQxQzs7Ozt5Q0FIYTtBQUNuQixtQkFBTyxFQUFFLFFBQUYsMkhBQVAsQ0FEbUI7Ozs7V0FETiIsImZpbGUiOiJkb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb252ZXJ0ZXIgZnJvbSBcImFueVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50IGV4dGVuZHMgQ29udmVydGVye1xuICAgIHN0YXRpYyBjcmVhdGVEb2N1bWVudCgpe1xuICAgICAgICByZXR1cm4gJC5wYXJzZVhNTChgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+PHJvb3QgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L1hTTC9Gb3JtYXRcIj48bGF5b3V0LW1hc2VydC1zZXQvPjwvcm9vdD5gKVxuICAgIH1cbiAgICBnZXQgZGF0YSgpe1xuICAgICAgICByZXR1cm4gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PiR7dGhpcy5yb290Lm91dGVySFRNTH1gXG4gICAgfVxuXG4gICAgY29udmVydCgpe1xuICAgICAgICB0aGlzLmRvYz10aGlzLmNvbnN0cnVjdG9yLmNyZWF0ZURvY3VtZW50KClcbiAgICAgICAgdGhpcy5yb290PXRoaXMuY29udGVudD10aGlzLmRvYy5kb2N1bWVudEVsZW1lbnRcbiAgICAgICAgdGhpcy5sYXlvdXRNYXN0ZXJTZXQ9dGhpcy5jb250ZW50LmZpcnN0Q2hpbGRcbiAgICB9XG59XG4iXX0=