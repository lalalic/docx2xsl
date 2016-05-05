"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _section = require("./style/section");

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var uid = Date.now();

var SimplePageMaster = function (_require) {
    _inherits(SimplePageMaster, _require);

    function SimplePageMaster() {
        var _Object$getPrototypeO;

        var _temp, _this, _ret;

        _classCallCheck(this, SimplePageMaster);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SimplePageMaster)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.tag = "simple-page-master", _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SimplePageMaster, [{
        key: "convert",
        value: function convert() {
            this.pageMaster = this.createElement();
            this.masterName = "master_" + uid++;
            this.pageMaster.setAttribute("master-name", this.masterName);

            this.pageSequence = this.doc.createElement("page-sequence");
            this.pageSequence.setAttribute("master-reference", this.masterName);

            this.content = this.doc.createElement("flow");
            this.content.setAttribute("flow-name", "xsl-region-body");

            this.doc.layoutMasterSet.appendChild(this.pageMaster);
            this.doc.root.appendChild(this.pageSequence);
            this.pageSequence.appendChild(this.content);

            this.pageMaster.appendChild(this.doc.createElement("region-body"));
            this.pageMaster.appendChild(this.doc.createElement("region-before"));
            this.pageMaster.appendChild(this.doc.createElement("region-after"));

            this.convertStyle();
        }
    }, {
        key: "convertStyle",
        value: function convertStyle() {
            var style = this.wordModel.getDirectStyle();
            style && style.parse([new _section2.default(this.pageMaster, this)]);
        }
    }]);

    return SimplePageMaster;
}(require("./any"));

exports.default = SimplePageMaster;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaW1wbGUtcGFnZS1tYXN0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSSxNQUFJLEtBQUssR0FBTCxFQUFKOztJQUNpQjs7Ozs7Ozs7Ozs7Ozs7a05BQ2pCLE1BQUk7OztpQkFEYTs7a0NBR1I7QUFDTCxpQkFBSyxVQUFMLEdBQWdCLEtBQUssYUFBTCxFQUFoQixDQURLO0FBRUwsaUJBQUssVUFBTCxlQUEwQixLQUExQixDQUZLO0FBR0wsaUJBQUssVUFBTCxDQUFnQixZQUFoQixDQUE2QixhQUE3QixFQUEyQyxLQUFLLFVBQUwsQ0FBM0MsQ0FISzs7QUFLTCxpQkFBSyxZQUFMLEdBQWtCLEtBQUssR0FBTCxDQUFTLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbEIsQ0FMSztBQU1MLGlCQUFLLFlBQUwsQ0FBa0IsWUFBbEIsQ0FBK0Isa0JBQS9CLEVBQW1ELEtBQUssVUFBTCxDQUFuRCxDQU5LOztBQVFMLGlCQUFLLE9BQUwsR0FBYSxLQUFLLEdBQUwsQ0FBUyxhQUFULENBQXVCLE1BQXZCLENBQWIsQ0FSSztBQVNMLGlCQUFLLE9BQUwsQ0FBYSxZQUFiLENBQTBCLFdBQTFCLEVBQXNDLGlCQUF0QyxFQVRLOztBQVdMLGlCQUFLLEdBQUwsQ0FBUyxlQUFULENBQXlCLFdBQXpCLENBQXFDLEtBQUssVUFBTCxDQUFyQyxDQVhLO0FBWUwsaUJBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxXQUFkLENBQTBCLEtBQUssWUFBTCxDQUExQixDQVpLO0FBYUwsaUJBQUssWUFBTCxDQUFrQixXQUFsQixDQUE4QixLQUFLLE9BQUwsQ0FBOUIsQ0FiSzs7QUFlTCxpQkFBSyxVQUFMLENBQWdCLFdBQWhCLENBQTRCLEtBQUssR0FBTCxDQUFTLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBNUIsRUFmSztBQWdCTCxpQkFBSyxVQUFMLENBQWdCLFdBQWhCLENBQTRCLEtBQUssR0FBTCxDQUFTLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBNUIsRUFoQks7QUFpQkwsaUJBQUssVUFBTCxDQUFnQixXQUFoQixDQUE0QixLQUFLLEdBQUwsQ0FBUyxhQUFULENBQXVCLGNBQXZCLENBQTVCLEVBakJLOztBQW1CTCxpQkFBSyxZQUFMLEdBbkJLOzs7O3VDQXNCSztBQUNWLGdCQUFJLFFBQU0sS0FBSyxTQUFMLENBQWUsY0FBZixFQUFOLENBRE07QUFFaEIscUJBQVMsTUFBTSxLQUFOLENBQVksQ0FBQyxzQkFBVSxLQUFLLFVBQUwsRUFBaUIsSUFBM0IsQ0FBRCxDQUFaLENBQVQsQ0FGZ0I7Ozs7V0F6Qkc7RUFBeUIsUUFBUSxPQUFSOztrQkFBekIiLCJmaWxlIjoic2ltcGxlLXBhZ2UtbWFzdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlIGZyb20gXCIuL3N0eWxlL3NlY3Rpb25cIlxuXG52YXIgdWlkPURhdGUubm93KClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXBsZVBhZ2VNYXN0ZXIgZXh0ZW5kcyByZXF1aXJlKFwiLi9hbnlcIil7XG4gICAgdGFnPVwic2ltcGxlLXBhZ2UtbWFzdGVyXCJcblxuICAgIGNvbnZlcnQoKXtcbiAgICAgICAgdGhpcy5wYWdlTWFzdGVyPXRoaXMuY3JlYXRlRWxlbWVudCgpXG4gICAgICAgIHRoaXMubWFzdGVyTmFtZT1gbWFzdGVyXyR7dWlkKyt9YFxuICAgICAgICB0aGlzLnBhZ2VNYXN0ZXIuc2V0QXR0cmlidXRlKFwibWFzdGVyLW5hbWVcIix0aGlzLm1hc3Rlck5hbWUpXG5cbiAgICAgICAgdGhpcy5wYWdlU2VxdWVuY2U9dGhpcy5kb2MuY3JlYXRlRWxlbWVudChcInBhZ2Utc2VxdWVuY2VcIilcbiAgICAgICAgdGhpcy5wYWdlU2VxdWVuY2Uuc2V0QXR0cmlidXRlKFwibWFzdGVyLXJlZmVyZW5jZVwiLCB0aGlzLm1hc3Rlck5hbWUpXG5cbiAgICAgICAgdGhpcy5jb250ZW50PXRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoXCJmbG93XCIpXG4gICAgICAgIHRoaXMuY29udGVudC5zZXRBdHRyaWJ1dGUoXCJmbG93LW5hbWVcIixcInhzbC1yZWdpb24tYm9keVwiKVxuXG4gICAgICAgIHRoaXMuZG9jLmxheW91dE1hc3RlclNldC5hcHBlbmRDaGlsZCh0aGlzLnBhZ2VNYXN0ZXIpXG4gICAgICAgIHRoaXMuZG9jLnJvb3QuYXBwZW5kQ2hpbGQodGhpcy5wYWdlU2VxdWVuY2UpXG4gICAgICAgIHRoaXMucGFnZVNlcXVlbmNlLmFwcGVuZENoaWxkKHRoaXMuY29udGVudClcblxuICAgICAgICB0aGlzLnBhZ2VNYXN0ZXIuYXBwZW5kQ2hpbGQodGhpcy5kb2MuY3JlYXRlRWxlbWVudChcInJlZ2lvbi1ib2R5XCIpKVxuICAgICAgICB0aGlzLnBhZ2VNYXN0ZXIuYXBwZW5kQ2hpbGQodGhpcy5kb2MuY3JlYXRlRWxlbWVudChcInJlZ2lvbi1iZWZvcmVcIikpXG4gICAgICAgIHRoaXMucGFnZU1hc3Rlci5hcHBlbmRDaGlsZCh0aGlzLmRvYy5jcmVhdGVFbGVtZW50KFwicmVnaW9uLWFmdGVyXCIpKVxuXG4gICAgICAgIHRoaXMuY29udmVydFN0eWxlKClcbiAgICB9XG5cbiAgICBjb252ZXJ0U3R5bGUoKXtcbiAgICAgICAgdmFyIHN0eWxlPXRoaXMud29yZE1vZGVsLmdldERpcmVjdFN0eWxlKClcblx0XHRzdHlsZSAmJiBzdHlsZS5wYXJzZShbbmV3IFN0eWxlKHRoaXMucGFnZU1hc3RlciwgdGhpcyldKVxuICAgIH1cbn1cbiJdfQ==