"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = function (_require) {
    _inherits(Text, _require);

    function Text() {
        _classCallCheck(this, Text);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Text).apply(this, arguments));
    }

    _createClass(Text, [{
        key: "convert",
        value: function convert() {
            this.parent.content.appendChild(this.doc.createTextNode(this.wordModel.getText()));
        }
    }]);

    return Text;
}(require("./any"));

exports.default = Text;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBQXFCOzs7Ozs7Ozs7OztrQ0FDUjtBQUNMLGlCQUFLLE1BQUwsQ0FBWSxPQUFaLENBQW9CLFdBQXBCLENBQWdDLEtBQUssR0FBTCxDQUFTLGNBQVQsQ0FBd0IsS0FBSyxTQUFMLENBQWUsT0FBZixFQUF4QixDQUFoQyxFQURLOzs7O1dBRFE7RUFBYSxRQUFRLE9BQVI7O2tCQUFiIiwiZmlsZSI6InRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0IGV4dGVuZHMgcmVxdWlyZShcIi4vYW55XCIpe1xuICAgIGNvbnZlcnQoKXtcbiAgICAgICAgdGhpcy5wYXJlbnQuY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLmRvYy5jcmVhdGVUZXh0Tm9kZSh0aGlzLndvcmRNb2RlbC5nZXRUZXh0KCkpKVxuICAgIH1cbn1cbiJdfQ==