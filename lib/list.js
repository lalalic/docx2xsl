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
			this.labelContent.appendChild(this.doc.createTextNode(this.wordModel.getLabel()));

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
//# sourceMappingURL=data:application/json;base64,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IExpc3QgZXh0ZW5kcyByZXF1aXJlKFwiLi9ibG9ja1wiKXtcblx0LyoqXG5cdCoqXHRsaXN0LWJsb2NrIGNhbiBOT1QgYmUgbmVzdGVkXG5cdCovXG5cdGNvbnZlcnQoKXtcblx0XHR2YXIgZWxQYXJlbnQ9dGhpcy5wYXJlbnQuY29udGVudCwgdWw9ZWxQYXJlbnQubGFzdENoaWxkO1xuXHRcdHZhciBsaXN0U3R5bGU9dGhpcy53b3JkTW9kZWwuZ2V0TnVtYmVyaW5nU3R5bGUoKVxuXHRcdGlmKGxpc3RTdHlsZT09bnVsbCl7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiaWRlbnRpZmllZCBhcyBsaXN0LCBidXQgdGhlcmUncyBubyBudW1iZXJpbmcgZGVmaW5pdGlvbiBmb3IgaXQ7IHRyYW5zZm9ybSBhcyBub3JtYWwgcGFyYWdyYXBoXCIpXG5cdFx0XHRyZXR1cm4gc3VwZXIuY29udmVydCgpXG5cdFx0fVxuXHRcdHZhciBudW1JZD1saXN0U3R5bGUuaWQsIGxldmVsPXRoaXMud29yZE1vZGVsLmdldExldmVsKClcblx0XHRcblx0XHRpZighdWwgfHwgdWwudGFnTmFtZSE9J2xpc3QtYmxvY2snIFx0XHQvL25vdCBsaXN0XG5cdFx0XHR8fCB1bC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSE9bnVtSWQgXHQvL25vdCBzYW1lIGxpc3Rcblx0XHRcdHx8IHVsLmdldEF0dHJpYnV0ZSgnbGV2ZWwnKSE9bGV2ZWwpey8vbm90IHNhbWUgbGV2ZWxcblx0XHRcdHVsPXRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoXCJsaXN0LWJsb2NrXCIpXG5cdFx0XHR1bC5zZXRBdHRyaWJ1dGUoXCJpZFwiLGxpc3RTdHlsZS5pZClcblx0XHRcdHVsLnNldEF0dHJpYnV0ZSgnbGV2ZWwnLGxldmVsKVxuXHRcdFx0ZWxQYXJlbnQuYXBwZW5kQ2hpbGQodWwpXG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMubGlzdEJsb2NrPXVsXG5cdFx0XG5cdFx0XG5cdFx0dGhpcy5saXN0SXRlbT10aGlzLmRvYy5jcmVhdGVFbGVtZW50KCdsaXN0LWl0ZW0nKVxuXHRcdHRoaXMubGlzdEl0ZW1MYWJlbD10aGlzLmRvYy5jcmVhdGVFbGVtZW50KFwibGlzdC1pdGVtLWxhYmVsXCIpXG5cdFx0dGhpcy5saXN0SXRlbUxhYmVsLmFwcGVuZENoaWxkKHRoaXMubGFiZWxDb250ZW50PXRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoXCJibG9ja1wiKSlcblx0XHR0aGlzLmxpc3RJdGVtTGFiZWwuc2V0QXR0cmlidXRlKFwiZW5kLWluZGVudFwiLFwibGFiZWwtZW5kKClcIilcblx0XHR0aGlzLmxhYmVsQ29udGVudC5hcHBlbmRDaGlsZCh0aGlzLmRvYy5jcmVhdGVUZXh0Tm9kZSh0aGlzLndvcmRNb2RlbC5nZXRMYWJlbCgpKSlcblx0XHRcblx0XHR0aGlzLmxpc3RJdGVtQm9keT10aGlzLmRvYy5jcmVhdGVFbGVtZW50KFwibGlzdC1pdGVtLWJvZHlcIilcblx0XHR0aGlzLmxpc3RJdGVtQm9keS5zZXRBdHRyaWJ1dGUoXCJzdGFydC1pbmRlbnRcIixcImJvZHktc3RhcnQoKVwiKVxuXHRcdFxuXHRcdHRoaXMubGlzdEJsb2NrLmFwcGVuZENoaWxkKHRoaXMubGlzdEl0ZW0pXG5cdFx0dGhpcy5saXN0SXRlbS5hcHBlbmRDaGlsZCh0aGlzLmxpc3RJdGVtTGFiZWwpXG5cdFx0dGhpcy5saXN0SXRlbS5hcHBlbmRDaGlsZCh0aGlzLmxpc3RJdGVtQm9keSlcblx0XHRcblx0XHR0aGlzLmxpc3RJdGVtQm9keS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnQ9dGhpcy5jcmVhdGVFbGVtZW50KCkpXG5cdFx0XG5cdFx0dGhpcy5jb252ZXJ0U3R5bGUodGhpcy5jb250ZW50LCB0aGlzLmxhYmVsQ29udGVudClcblx0fVxuXG5cdFxuXHRzdGF0aWMgcmVsZWFzZShkb2Mpe1xuXHRcdGRvYy5yb290LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaXN0LWJsb2NrXCIpXG5cdFx0XHQuZm9yRWFjaChhPT5bXCJsZXZlbFwiLFwiaWRcIl1cblx0XHRcdFx0LmZvckVhY2goYj0+YS5yZW1vdmVBdHRyaWJ1dGUoYikpKVxuXHR9XG59XG5cbiJdfQ==