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

			this.listItemBody.appendChild(this.doc.createElement("block"));
			this.listItemBody.firstChild.appendChild(this.content = this.createElement());

			this.convertStyle(this.content, this.labelContent);
		}
	}, {
		key: "convertStyle",
		value: function convertStyle(body, label) {
			_get(Object.getPrototypeOf(List.prototype), "convertStyle", this).call(this, body);
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
//# sourceMappingURL=data:application/json;base64,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b250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyByZXF1aXJlKFwiLi9ibG9ja1wiKXtcblx0LyoqXG5cdCoqXHRsaXN0LWJsb2NrIGNhbiBOT1QgYmUgbmVzdGVkXG5cdCovXG5cdGNvbnZlcnQoKXtcblx0XHR2YXIgZWxQYXJlbnQ9dGhpcy5wYXJlbnQuY29udGVudCwgdWw9ZWxQYXJlbnQubGFzdENoaWxkO1xuXHRcdHZhciBsaXN0U3R5bGU9dGhpcy53b3JkTW9kZWwuZ2V0TnVtYmVyaW5nU3R5bGUoKVxuXHRcdHZhciBudW1JZD1saXN0U3R5bGUuaWQsIGxldmVsPXRoaXMud29yZE1vZGVsLmdldExldmVsKClcblx0XHRcblx0XHRpZighdWwgfHwgdWwudGFnTmFtZSE9J2xpc3QtYmxvY2snIFx0XHQvL25vdCBsaXN0XG5cdFx0XHR8fCB1bC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSE9bnVtSWQgXHQvL25vdCBzYW1lIGxpc3Rcblx0XHRcdHx8IHVsLmdldEF0dHJpYnV0ZSgnbGV2ZWwnKSE9bGV2ZWwpey8vbm90IHNhbWUgbGV2ZWxcblx0XHRcdHVsPXRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoXCJsaXN0LWJsb2NrXCIpXG5cdFx0XHR1bC5zZXRBdHRyaWJ1dGUoXCJpZFwiLGxpc3RTdHlsZS5pZClcblx0XHRcdHVsLnNldEF0dHJpYnV0ZSgnbGV2ZWwnLGxldmVsKVxuXHRcdFx0ZWxQYXJlbnQuYXBwZW5kQ2hpbGQodWwpXG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMubGlzdEJsb2NrPXVsXG5cdFx0XG5cdFx0XG5cdFx0dGhpcy5saXN0SXRlbT10aGlzLmRvYy5jcmVhdGVFbGVtZW50KCdsaXN0LWl0ZW0nKVxuXHRcdHRoaXMubGlzdEl0ZW1MYWJlbD10aGlzLmRvYy5jcmVhdGVFbGVtZW50KFwibGlzdC1pdGVtLWxhYmVsXCIpXG5cdFx0dGhpcy5saXN0SXRlbUxhYmVsLmFwcGVuZENoaWxkKHRoaXMubGFiZWxDb250ZW50PXRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoXCJibG9ja1wiKSlcblx0XHR0aGlzLmxpc3RJdGVtTGFiZWwuc2V0QXR0cmlidXRlKFwiZW5kLWluZGVudFwiLFwibGFiZWwtZW5kKClcIilcblx0XHR0aGlzLmxhYmVsQ29udGVudC5hcHBlbmRDaGlsZCh0aGlzLmRvYy5jcmVhdGVUZXh0Tm9kZShcIipcIikpXG5cdFx0XG5cdFx0dGhpcy5saXN0SXRlbUJvZHk9dGhpcy5kb2MuY3JlYXRlRWxlbWVudChcImxpc3QtaXRlbS1ib2R5XCIpXG5cdFx0dGhpcy5saXN0SXRlbUJvZHkuc2V0QXR0cmlidXRlKFwic3RhcnQtaW5kZW50XCIsXCJib2R5LXN0YXJ0KClcIilcblx0XHRcblx0XHR0aGlzLmxpc3RCbG9jay5hcHBlbmRDaGlsZCh0aGlzLmxpc3RJdGVtKVxuXHRcdHRoaXMubGlzdEl0ZW0uYXBwZW5kQ2hpbGQodGhpcy5saXN0SXRlbUxhYmVsKVxuXHRcdHRoaXMubGlzdEl0ZW0uYXBwZW5kQ2hpbGQodGhpcy5saXN0SXRlbUJvZHkpXG5cdFx0XG5cdFx0dGhpcy5saXN0SXRlbUJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kb2MuY3JlYXRlRWxlbWVudChcImJsb2NrXCIpKVxuXHRcdHRoaXMubGlzdEl0ZW1Cb2R5LmZpcnN0Q2hpbGQuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50PXRoaXMuY3JlYXRlRWxlbWVudCgpKVxuXHRcdFxuXHRcdHRoaXMuY29udmVydFN0eWxlKHRoaXMuY29udGVudCwgdGhpcy5sYWJlbENvbnRlbnQpXG5cdH1cblx0XG5cdGNvbnZlcnRTdHlsZShib2R5LGxhYmVsKXtcblx0XHRzdXBlci5jb252ZXJ0U3R5bGUoYm9keSlcblx0XHRcblx0fVxuXHRcblx0c3RhdGljIHJlbGVhc2UoZG9jKXtcblx0XHRkb2Mucm9vdC5xdWVyeVNlbGVjdG9yQWxsKFwibGlzdC1ibG9ja1wiKVxuXHRcdFx0LmZvckVhY2goYT0+W1wibGV2ZWxcIixcImlkXCJdXG5cdFx0XHRcdC5mb3JFYWNoKGI9PmEucmVtb3ZlQXR0cmlidXRlKGIpKSlcblx0fVxufVxuXG4iXX0=