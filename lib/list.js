"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_require) {
	_inherits(List, _require);

	function List() {
		_classCallCheck(this, List);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(List).apply(this, arguments));
	}

	_createClass(List, [{
		key: "convert",

		/**
  **	list-block can NOT be nested
  */
		value: function convert() {
			debugger;
			var elParent = this.parent.content,
			    ul = elParent.lastChild;
			var listStyle = this.wordModel.getNumberingStyle();
			if (listStyle == null) {
				console.error("identified as list, but there's no numbering definition for it; transform as normal paragraph");
				return _get(Object.getPrototypeOf(List.prototype), "convert", this).call(this);
			}
			var numId = listStyle.id,
			    level = this.wordModel.getLevel();

			if (!ul || ul.tagName != 'list-block' //not list
			 || ul.getAttribute("id") != numId //not same list
			 || ul.getAttribute('level') != level) {
				//not same level
				ul = this.doc.createElement("list-block");
				ul.setAttribute("id", listStyle.id);
				ul.setAttribute('level', level);
				elParent.appendChild(ul);
			}

			this.listBlock = ul;

			this.listItem = this.doc.createElement('list-item');
			this.listItemLabel = this.doc.createElement("list-item-label");
			this.listItemLabel.appendChild(this.labelContent = this.doc.createElement("block"));
			this.listItemLabel.setAttribute("end-indent", "label-end()");
			this.labelContent.appendChild(this.doc.createTextNode("*"));

			this.listItemBody = this.doc.createElement("list-item-body");
			this.listItemBody.setAttribute("start-indent", "body-start()");

			this.listBlock.appendChild(this.listItem);
			this.listItem.appendChild(this.listItemLabel);
			this.listItem.appendChild(this.listItemBody);

			this.listItemBody.appendChild(this.content = this.createElement());

			this.convertStyle(this.content, this.labelContent);
		}
	}], [{
		key: "release",
		value: function release(doc) {
			doc.root.querySelectorAll("list-block").forEach(function (a) {
				return ["level", "id"].forEach(function (b) {
					return a.removeAttribute(b);
				});
			});
		}
	}]);

	return List;
}(require("./block"));

exports.default = List;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9saXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs0QkFJWDtBQUNSLFlBRFE7QUFFUixPQUFJLFdBQVMsS0FBSyxNQUFMLENBQVksT0FBWjtPQUFxQixLQUFHLFNBQVMsU0FBVCxDQUY3QjtBQUdSLE9BQUksWUFBVSxLQUFLLFNBQUwsQ0FBZSxpQkFBZixFQUFWLENBSEk7QUFJUixPQUFHLGFBQVcsSUFBWCxFQUFnQjtBQUNsQixZQUFRLEtBQVIsQ0FBYywrRkFBZCxFQURrQjtBQUVsQixzQ0FWa0IsNENBVWxCLENBRmtCO0lBQW5CO0FBSUEsT0FBSSxRQUFNLFVBQVUsRUFBVjtPQUFjLFFBQU0sS0FBSyxTQUFMLENBQWUsUUFBZixFQUFOLENBUmhCOztBQVVSLE9BQUcsQ0FBQyxFQUFELElBQU8sR0FBRyxPQUFILElBQVksWUFBWjtBQUFQLE9BQ0MsR0FBRyxZQUFILENBQWdCLElBQWhCLEtBQXVCLEtBQXZCO0FBREQsT0FFQyxHQUFHLFlBQUgsQ0FBZ0IsT0FBaEIsS0FBMEIsS0FBMUIsRUFBZ0M7O0FBQ25DLFNBQUcsS0FBSyxHQUFMLENBQVMsYUFBVCxDQUF1QixZQUF2QixDQUFILENBRG1DO0FBRW5DLE9BQUcsWUFBSCxDQUFnQixJQUFoQixFQUFxQixVQUFVLEVBQVYsQ0FBckIsQ0FGbUM7QUFHbkMsT0FBRyxZQUFILENBQWdCLE9BQWhCLEVBQXdCLEtBQXhCLEVBSG1DO0FBSW5DLGFBQVMsV0FBVCxDQUFxQixFQUFyQixFQUptQztJQUZwQzs7QUFTQSxRQUFLLFNBQUwsR0FBZSxFQUFmLENBbkJROztBQXNCUixRQUFLLFFBQUwsR0FBYyxLQUFLLEdBQUwsQ0FBUyxhQUFULENBQXVCLFdBQXZCLENBQWQsQ0F0QlE7QUF1QlIsUUFBSyxhQUFMLEdBQW1CLEtBQUssR0FBTCxDQUFTLGFBQVQsQ0FBdUIsaUJBQXZCLENBQW5CLENBdkJRO0FBd0JSLFFBQUssYUFBTCxDQUFtQixXQUFuQixDQUErQixLQUFLLFlBQUwsR0FBa0IsS0FBSyxHQUFMLENBQVMsYUFBVCxDQUF1QixPQUF2QixDQUFsQixDQUEvQixDQXhCUTtBQXlCUixRQUFLLGFBQUwsQ0FBbUIsWUFBbkIsQ0FBZ0MsWUFBaEMsRUFBNkMsYUFBN0MsRUF6QlE7QUEwQlIsUUFBSyxZQUFMLENBQWtCLFdBQWxCLENBQThCLEtBQUssR0FBTCxDQUFTLGNBQVQsQ0FBd0IsR0FBeEIsQ0FBOUIsRUExQlE7O0FBNEJSLFFBQUssWUFBTCxHQUFrQixLQUFLLEdBQUwsQ0FBUyxhQUFULENBQXVCLGdCQUF2QixDQUFsQixDQTVCUTtBQTZCUixRQUFLLFlBQUwsQ0FBa0IsWUFBbEIsQ0FBK0IsY0FBL0IsRUFBOEMsY0FBOUMsRUE3QlE7O0FBK0JSLFFBQUssU0FBTCxDQUFlLFdBQWYsQ0FBMkIsS0FBSyxRQUFMLENBQTNCLENBL0JRO0FBZ0NSLFFBQUssUUFBTCxDQUFjLFdBQWQsQ0FBMEIsS0FBSyxhQUFMLENBQTFCLENBaENRO0FBaUNSLFFBQUssUUFBTCxDQUFjLFdBQWQsQ0FBMEIsS0FBSyxZQUFMLENBQTFCLENBakNROztBQW1DUixRQUFLLFlBQUwsQ0FBa0IsV0FBbEIsQ0FBOEIsS0FBSyxPQUFMLEdBQWEsS0FBSyxhQUFMLEVBQWIsQ0FBOUIsQ0FuQ1E7O0FBcUNSLFFBQUssWUFBTCxDQUFrQixLQUFLLE9BQUwsRUFBYyxLQUFLLFlBQUwsQ0FBaEMsQ0FyQ1E7Ozs7MEJBeUNNLEtBQUk7QUFDbEIsT0FBSSxJQUFKLENBQVMsZ0JBQVQsQ0FBMEIsWUFBMUIsRUFDRSxPQURGLENBQ1U7V0FBRyxDQUFDLE9BQUQsRUFBUyxJQUFULEVBQ1YsT0FEVSxDQUNGO1lBQUcsRUFBRSxlQUFGLENBQWtCLENBQWxCO0tBQUg7SUFERCxDQURWLENBRGtCOzs7O1FBN0NDO0VBQWEsUUFBUSxTQUFSOztrQkFBYiIsImZpbGUiOiJsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIHJlcXVpcmUoXCIuL2Jsb2NrXCIpe1xuXHQvKipcblx0KipcdGxpc3QtYmxvY2sgY2FuIE5PVCBiZSBuZXN0ZWRcblx0Ki9cblx0Y29udmVydCgpe1xuXHRcdGRlYnVnZ2VyXG5cdFx0dmFyIGVsUGFyZW50PXRoaXMucGFyZW50LmNvbnRlbnQsIHVsPWVsUGFyZW50Lmxhc3RDaGlsZDtcblx0XHR2YXIgbGlzdFN0eWxlPXRoaXMud29yZE1vZGVsLmdldE51bWJlcmluZ1N0eWxlKClcblx0XHRpZihsaXN0U3R5bGU9PW51bGwpe1xuXHRcdFx0Y29uc29sZS5lcnJvcihcImlkZW50aWZpZWQgYXMgbGlzdCwgYnV0IHRoZXJlJ3Mgbm8gbnVtYmVyaW5nIGRlZmluaXRpb24gZm9yIGl0OyB0cmFuc2Zvcm0gYXMgbm9ybWFsIHBhcmFncmFwaFwiKVxuXHRcdFx0cmV0dXJuIHN1cGVyLmNvbnZlcnQoKVxuXHRcdH1cblx0XHR2YXIgbnVtSWQ9bGlzdFN0eWxlLmlkLCBsZXZlbD10aGlzLndvcmRNb2RlbC5nZXRMZXZlbCgpXG5cdFx0XG5cdFx0aWYoIXVsIHx8IHVsLnRhZ05hbWUhPSdsaXN0LWJsb2NrJyBcdFx0Ly9ub3QgbGlzdFxuXHRcdFx0fHwgdWwuZ2V0QXR0cmlidXRlKFwiaWRcIikhPW51bUlkIFx0Ly9ub3Qgc2FtZSBsaXN0XG5cdFx0XHR8fCB1bC5nZXRBdHRyaWJ1dGUoJ2xldmVsJykhPWxldmVsKXsvL25vdCBzYW1lIGxldmVsXG5cdFx0XHR1bD10aGlzLmRvYy5jcmVhdGVFbGVtZW50KFwibGlzdC1ibG9ja1wiKVxuXHRcdFx0dWwuc2V0QXR0cmlidXRlKFwiaWRcIixsaXN0U3R5bGUuaWQpXG5cdFx0XHR1bC5zZXRBdHRyaWJ1dGUoJ2xldmVsJyxsZXZlbClcblx0XHRcdGVsUGFyZW50LmFwcGVuZENoaWxkKHVsKVxuXHRcdH1cblx0XHRcblx0XHR0aGlzLmxpc3RCbG9jaz11bFxuXHRcdFxuXHRcdFxuXHRcdHRoaXMubGlzdEl0ZW09dGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnbGlzdC1pdGVtJylcblx0XHR0aGlzLmxpc3RJdGVtTGFiZWw9dGhpcy5kb2MuY3JlYXRlRWxlbWVudChcImxpc3QtaXRlbS1sYWJlbFwiKVxuXHRcdHRoaXMubGlzdEl0ZW1MYWJlbC5hcHBlbmRDaGlsZCh0aGlzLmxhYmVsQ29udGVudD10aGlzLmRvYy5jcmVhdGVFbGVtZW50KFwiYmxvY2tcIikpXG5cdFx0dGhpcy5saXN0SXRlbUxhYmVsLnNldEF0dHJpYnV0ZShcImVuZC1pbmRlbnRcIixcImxhYmVsLWVuZCgpXCIpXG5cdFx0dGhpcy5sYWJlbENvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5kb2MuY3JlYXRlVGV4dE5vZGUoXCIqXCIpKVxuXHRcdFxuXHRcdHRoaXMubGlzdEl0ZW1Cb2R5PXRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoXCJsaXN0LWl0ZW0tYm9keVwiKVxuXHRcdHRoaXMubGlzdEl0ZW1Cb2R5LnNldEF0dHJpYnV0ZShcInN0YXJ0LWluZGVudFwiLFwiYm9keS1zdGFydCgpXCIpXG5cdFx0XG5cdFx0dGhpcy5saXN0QmxvY2suYXBwZW5kQ2hpbGQodGhpcy5saXN0SXRlbSlcblx0XHR0aGlzLmxpc3RJdGVtLmFwcGVuZENoaWxkKHRoaXMubGlzdEl0ZW1MYWJlbClcblx0XHR0aGlzLmxpc3RJdGVtLmFwcGVuZENoaWxkKHRoaXMubGlzdEl0ZW1Cb2R5KVxuXHRcdFxuXHRcdHRoaXMubGlzdEl0ZW1Cb2R5LmFwcGVuZENoaWxkKHRoaXMuY29udGVudD10aGlzLmNyZWF0ZUVsZW1lbnQoKSlcblx0XHRcblx0XHR0aGlzLmNvbnZlcnRTdHlsZSh0aGlzLmNvbnRlbnQsIHRoaXMubGFiZWxDb250ZW50KVxuXHR9XG5cblx0XG5cdHN0YXRpYyByZWxlYXNlKGRvYyl7XG5cdFx0ZG9jLnJvb3QucXVlcnlTZWxlY3RvckFsbChcImxpc3QtYmxvY2tcIilcblx0XHRcdC5mb3JFYWNoKGE9PltcImxldmVsXCIsXCJpZFwiXVxuXHRcdFx0XHQuZm9yRWFjaChiPT5hLnJlbW92ZUF0dHJpYnV0ZShiKSkpXG5cdH1cbn1cblxuIl19