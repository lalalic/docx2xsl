"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Document = function (_require) {
    _inherits(Document, _require);

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
            this.bookmarkTree = this.doc.bookmarkTree = this.root.querySelector("bookmark-tree");

            var styles = [],
                wrappers = new Map();
            wrappers.set('*', this.root);

            Object.assign(this.doc, {
                createStyle: function createStyle(id, pid) {
                    if ((typeof id === "undefined" ? "undefined" : _typeof(id)) == 'object') {
                        //create direct style for element
                        var el = id;
                        //console.log(`creating direct style${pid ? ` with named style ${pid}` : ""}`)
                        this.applyStyleOn(el, pid);
                        return el;
                    }

                    //console.log(`creating style ${id}${pid ? ` with parent ${pid}` : ""}`)

                    if (id == '*') return this.root;

                    var wrapper = this.createElement("wrapper");
                    var parent = wrappers.get(pid);
                    if (parent) parent.appendChild(wrapper);else styles.push(wrapper);

                    wrappers.set(id, wrapper);
                    wrapper.set = wrapper.setAttribute;
                    return wrapper;
                },
                applyStyleOn: function applyStyleOn(el, styleId) {

                    var style = wrappers.get(styleId);
                    var outerWrapper = void 0,
                        innerWrapper = void 0;
                    if (style) {
                        outerWrapper = innerWrapper = style.cloneNode();
                        var current = innerWrapper;
                        while (style.parentNode) {
                            outerWrapper = style.parentNode.cloneNode();
                            outerWrapper.appendChild(current);
                            current = outerWrapper;
                            style = style.parentNode;
                        }
                        el.parentNode.appendChild(outerWrapper);
                        innerWrapper.appendChild(el);
                    }

                    return el;
                }
            });
        }
    }, {
        key: "release",
        value: function release() {
            require("./list").release(this);
        }
    }, {
        key: "data",
        get: function get() {
            return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" + this.root.outerHTML;
        }
    }], [{
        key: "createDocument",
        value: function createDocument() {
            return $.parseXML("<?xml version=\"1.0\" encoding=\"UTF-8\"?><root xmlns=\"http://www.w3.org/1999/XSL/Format\"><layout-master-set/><bookmark-tree/></root>");
        }
    }]);

    return Document;
}(require("./any"));

exports.default = Document;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kb2N1bWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCOzs7Ozs7Ozs7OztrQ0FRUjtBQUNMLGlCQUFLLEdBQUwsR0FBUyxLQUFLLFdBQUwsQ0FBaUIsY0FBakIsRUFBVCxDQURLO0FBRUwsaUJBQUssSUFBTCxHQUFVLEtBQUssR0FBTCxDQUFTLElBQVQsR0FBYyxLQUFLLE9BQUwsR0FBYSxLQUFLLEdBQUwsQ0FBUyxlQUFULENBRmhDO0FBR0wsaUJBQUssZUFBTCxHQUFxQixLQUFLLEdBQUwsQ0FBUyxlQUFULEdBQXlCLEtBQUssT0FBTCxDQUFhLFVBQWIsQ0FIekM7QUFJWCxpQkFBSyxZQUFMLEdBQWtCLEtBQUssR0FBTCxDQUFTLFlBQVQsR0FBc0IsS0FBSyxJQUFMLENBQVUsYUFBVixDQUF3QixlQUF4QixDQUF0QixDQUpQOztBQU9MLGdCQUFJLFNBQU8sRUFBUDtnQkFBVyxXQUFTLElBQUksR0FBSixFQUFULENBUFY7QUFRTCxxQkFBUyxHQUFULENBQWEsR0FBYixFQUFpQixLQUFLLElBQUwsQ0FBakIsQ0FSSzs7QUFVWCxtQkFBTyxNQUFQLENBQWMsS0FBSyxHQUFMLEVBQVM7QUFDdEIsa0RBQVksSUFBSSxLQUFJO0FBQ25CLHdCQUFHLFFBQU8sK0NBQVAsSUFBWSxRQUFaLEVBQXFCOztBQUN2Qiw0QkFBSSxLQUFHLEVBQUg7O0FBRG1CLDRCQUd2QixDQUFLLFlBQUwsQ0FBa0IsRUFBbEIsRUFBcUIsR0FBckIsRUFIdUI7QUFJdkIsK0JBQU8sRUFBUCxDQUp1QjtxQkFBeEI7Ozs7QUFEbUIsd0JBVWhCLE1BQUksR0FBSixFQUNGLE9BQU8sS0FBSyxJQUFMLENBRFI7O0FBR0Esd0JBQUksVUFBUSxLQUFLLGFBQUwsQ0FBbUIsU0FBbkIsQ0FBUixDQWJlO0FBY1Asd0JBQUksU0FBTyxTQUFTLEdBQVQsQ0FBYSxHQUFiLENBQVAsQ0FkRztBQWVQLHdCQUFHLE1BQUgsRUFDSSxPQUFPLFdBQVAsQ0FBbUIsT0FBbkIsRUFESixLQUdJLE9BQU8sSUFBUCxDQUFZLE9BQVosRUFISjs7QUFLQSw2QkFBUyxHQUFULENBQWEsRUFBYixFQUFnQixPQUFoQixFQXBCTztBQXFCbkIsNEJBQVEsR0FBUixHQUFZLFFBQVEsWUFBUixDQXJCTztBQXNCUCwyQkFBTyxPQUFQLENBdEJPO2lCQURFO0FBMEJiLG9EQUFhLElBQUcsU0FBUTs7QUFFcEIsd0JBQUksUUFBTSxTQUFTLEdBQVQsQ0FBYSxPQUFiLENBQU4sQ0FGZ0I7QUFHcEIsd0JBQUkscUJBQUo7d0JBQWtCLHFCQUFsQixDQUhvQjtBQUlwQix3QkFBRyxLQUFILEVBQVM7QUFDcEIsdUNBQWEsZUFBYSxNQUFNLFNBQU4sRUFBYixDQURPO0FBRUwsNEJBQUksVUFBUSxZQUFSLENBRkM7QUFHTCwrQkFBTSxNQUFNLFVBQU4sRUFBaUI7QUFDbkIsMkNBQWEsTUFBTSxVQUFOLENBQWlCLFNBQWpCLEVBQWIsQ0FEbUI7QUFFbkIseUNBQWEsV0FBYixDQUF5QixPQUF6QixFQUZtQjtBQUduQixzQ0FBUSxZQUFSLENBSG1CO0FBSW5CLG9DQUFNLE1BQU0sVUFBTixDQUphO3lCQUF2QjtBQU1mLDJCQUFHLFVBQUgsQ0FBYyxXQUFkLENBQTBCLFlBQTFCLEVBVG9CO0FBVXBCLHFDQUFhLFdBQWIsQ0FBeUIsRUFBekIsRUFWb0I7cUJBQVQ7O0FBYVosMkJBQU8sRUFBUCxDQWpCZ0M7aUJBMUJYO2FBQXZCLEVBVlc7Ozs7a0NBMERIO0FBQ1Isb0JBQVEsUUFBUixFQUFrQixPQUFsQixDQUEwQixJQUExQixFQURROzs7OzRCQTlESTtBQUNOLGtFQUFnRCxLQUFLLElBQUwsQ0FBVSxTQUFWLENBRDFDOzs7O3lDQUhhO0FBQ25CLG1CQUFPLEVBQUUsUUFBRiwySUFBUCxDQURtQjs7OztXQUROO0VBQWlCLFFBQVEsT0FBUjs7a0JBQWpCIiwiZmlsZSI6ImRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnQgZXh0ZW5kcyByZXF1aXJlKFwiLi9hbnlcIil7XG4gICAgc3RhdGljIGNyZWF0ZURvY3VtZW50KCl7XG4gICAgICAgIHJldHVybiAkLnBhcnNlWE1MKGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz48cm9vdCB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkvWFNML0Zvcm1hdFwiPjxsYXlvdXQtbWFzdGVyLXNldC8+PGJvb2ttYXJrLXRyZWUvPjwvcm9vdD5gKVxuICAgIH1cbiAgICBnZXQgZGF0YSgpe1xuICAgICAgICByZXR1cm4gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PiR7dGhpcy5yb290Lm91dGVySFRNTH1gXG4gICAgfVxuXG4gICAgY29udmVydCgpe1xuICAgICAgICB0aGlzLmRvYz10aGlzLmNvbnN0cnVjdG9yLmNyZWF0ZURvY3VtZW50KClcbiAgICAgICAgdGhpcy5yb290PXRoaXMuZG9jLnJvb3Q9dGhpcy5jb250ZW50PXRoaXMuZG9jLmRvY3VtZW50RWxlbWVudFxuICAgICAgICB0aGlzLmxheW91dE1hc3RlclNldD10aGlzLmRvYy5sYXlvdXRNYXN0ZXJTZXQ9dGhpcy5jb250ZW50LmZpcnN0Q2hpbGRcblx0XHR0aGlzLmJvb2ttYXJrVHJlZT10aGlzLmRvYy5ib29rbWFya1RyZWU9dGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoXCJib29rbWFyay10cmVlXCIpXG5cdFx0XG5cbiAgICAgICAgbGV0IHN0eWxlcz1bXSAsd3JhcHBlcnM9bmV3IE1hcCgpXG4gICAgICAgIHdyYXBwZXJzLnNldCgnKicsdGhpcy5yb290KVxuXG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLmRvYyx7XG5cdFx0XHRjcmVhdGVTdHlsZShpZCwgcGlkKXtcblx0XHRcdFx0aWYodHlwZW9mKGlkKT09J29iamVjdCcpey8vY3JlYXRlIGRpcmVjdCBzdHlsZSBmb3IgZWxlbWVudFxuXHRcdFx0XHRcdGxldCBlbD1pZFxuXHRcdFx0XHRcdC8vY29uc29sZS5sb2coYGNyZWF0aW5nIGRpcmVjdCBzdHlsZSR7cGlkID8gYCB3aXRoIG5hbWVkIHN0eWxlICR7cGlkfWAgOiBcIlwifWApXG5cdFx0XHRcdFx0dGhpcy5hcHBseVN0eWxlT24oZWwscGlkKVxuXHRcdFx0XHRcdHJldHVybiBlbFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhgY3JlYXRpbmcgc3R5bGUgJHtpZH0ke3BpZCA/IGAgd2l0aCBwYXJlbnQgJHtwaWR9YCA6IFwiXCJ9YClcblxuXHRcdFx0XHRpZihpZD09JyonKVxuXHRcdFx0XHRcdHJldHVybiB0aGlzLnJvb3Rcblx0XHRcdFx0XG5cdFx0XHRcdGxldCB3cmFwcGVyPXRoaXMuY3JlYXRlRWxlbWVudChcIndyYXBwZXJcIilcbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50PXdyYXBwZXJzLmdldChwaWQpXG4gICAgICAgICAgICAgICAgaWYocGFyZW50KVxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQod3JhcHBlcilcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcy5wdXNoKHdyYXBwZXIpXG5cbiAgICAgICAgICAgICAgICB3cmFwcGVycy5zZXQoaWQsd3JhcHBlcilcblx0XHRcdFx0d3JhcHBlci5zZXQ9d3JhcHBlci5zZXRBdHRyaWJ1dGVcbiAgICAgICAgICAgICAgICByZXR1cm4gd3JhcHBlclxuXHRcdFx0fSxcblxuICAgICAgICAgICAgYXBwbHlTdHlsZU9uKGVsLHN0eWxlSWQpe1xuXHRcdFx0XHRcbiAgICAgICAgICAgICAgICBsZXQgc3R5bGU9d3JhcHBlcnMuZ2V0KHN0eWxlSWQpXG4gICAgICAgICAgICAgICAgbGV0IG91dGVyV3JhcHBlciwgaW5uZXJXcmFwcGVyXG4gICAgICAgICAgICAgICAgaWYoc3R5bGUpe1xuXHRcdFx0XHRcdG91dGVyV3JhcHBlcj1pbm5lcldyYXBwZXI9c3R5bGUuY2xvbmVOb2RlKClcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnQ9aW5uZXJXcmFwcGVyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKHN0eWxlLnBhcmVudE5vZGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0ZXJXcmFwcGVyPXN0eWxlLnBhcmVudE5vZGUuY2xvbmVOb2RlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGVyV3JhcHBlci5hcHBlbmRDaGlsZChjdXJyZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudD1vdXRlcldyYXBwZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXN0eWxlLnBhcmVudE5vZGVcbiAgICAgICAgICAgICAgICAgICAgfVxuXHRcdFx0XHRcdGVsLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQob3V0ZXJXcmFwcGVyKVxuXHRcdFx0XHRcdGlubmVyV3JhcHBlci5hcHBlbmRDaGlsZChlbClcbiAgICAgICAgICAgICAgICB9XG5cblx0XHRcdFx0cmV0dXJuIGVsXG4gICAgICAgICAgICB9XG5cdFx0fSlcbiAgICB9XG5cdFxuXHRyZWxlYXNlKCl7XG5cdFx0cmVxdWlyZShcIi4vbGlzdFwiKS5yZWxlYXNlKHRoaXMpXG5cdH1cbn1cbiJdfQ==