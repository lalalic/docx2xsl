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

		/**
  * list label: numId.level.rPr|lvlJc, numId.abstr.level.rPr|lvlJc
  * list content style: numId.level.pPr, numId.abstr.level.pPr, direct style, named style 
  */

	}, {
		key: "converStyle",
		value: function converStyle() {
			_get(Object.getPrototypeOf(List.prototype), "convertStyle", this).apply(this, arguments);
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
//# sourceMappingURL=data:application/json;base64,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c3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgcmVxdWlyZShcIi4vYmxvY2tcIil7XG5cdC8qKlxuXHQqKlx0bGlzdC1ibG9jayBjYW4gTk9UIGJlIG5lc3RlZFxuXHQqL1xuXHRjb252ZXJ0KCl7XG5cdFx0dmFyIGVsUGFyZW50PXRoaXMucGFyZW50LmNvbnRlbnQsIHVsPWVsUGFyZW50Lmxhc3RDaGlsZDtcblx0XHR2YXIgbGlzdFN0eWxlPXRoaXMud29yZE1vZGVsLmdldE51bWJlcmluZ1N0eWxlKClcblx0XHRpZihsaXN0U3R5bGU9PW51bGwpe1xuXHRcdFx0Y29uc29sZS5lcnJvcihcImlkZW50aWZpZWQgYXMgbGlzdCwgYnV0IHRoZXJlJ3Mgbm8gbnVtYmVyaW5nIGRlZmluaXRpb24gZm9yIGl0OyB0cmFuc2Zvcm0gYXMgbm9ybWFsIHBhcmFncmFwaFwiKVxuXHRcdFx0cmV0dXJuIHN1cGVyLmNvbnZlcnQoKVxuXHRcdH1cblx0XHR2YXIgbnVtSWQ9bGlzdFN0eWxlLmlkLCBsZXZlbD10aGlzLndvcmRNb2RlbC5nZXRMZXZlbCgpXG5cdFx0XG5cdFx0aWYoIXVsIHx8IHVsLnRhZ05hbWUhPSdsaXN0LWJsb2NrJyBcdFx0Ly9ub3QgbGlzdFxuXHRcdFx0fHwgdWwuZ2V0QXR0cmlidXRlKFwiaWRcIikhPW51bUlkIFx0Ly9ub3Qgc2FtZSBsaXN0XG5cdFx0XHR8fCB1bC5nZXRBdHRyaWJ1dGUoJ2xldmVsJykhPWxldmVsKXsvL25vdCBzYW1lIGxldmVsXG5cdFx0XHR1bD10aGlzLmRvYy5jcmVhdGVFbGVtZW50KFwibGlzdC1ibG9ja1wiKVxuXHRcdFx0dWwuc2V0QXR0cmlidXRlKFwiaWRcIixsaXN0U3R5bGUuaWQpXG5cdFx0XHR1bC5zZXRBdHRyaWJ1dGUoJ2xldmVsJyxsZXZlbClcblx0XHRcdGVsUGFyZW50LmFwcGVuZENoaWxkKHVsKVxuXHRcdH1cblx0XHRcblx0XHR0aGlzLmxpc3RCbG9jaz11bFxuXHRcdFxuXHRcdFxuXHRcdHRoaXMubGlzdEl0ZW09dGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnbGlzdC1pdGVtJylcblx0XHR0aGlzLmxpc3RJdGVtTGFiZWw9dGhpcy5kb2MuY3JlYXRlRWxlbWVudChcImxpc3QtaXRlbS1sYWJlbFwiKVxuXHRcdHRoaXMubGlzdEl0ZW1MYWJlbC5hcHBlbmRDaGlsZCh0aGlzLmxhYmVsQ29udGVudD10aGlzLmRvYy5jcmVhdGVFbGVtZW50KFwiYmxvY2tcIikpXG5cdFx0dGhpcy5saXN0SXRlbUxhYmVsLnNldEF0dHJpYnV0ZShcImVuZC1pbmRlbnRcIixcImxhYmVsLWVuZCgpXCIpXG5cdFx0dGhpcy5sYWJlbENvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5kb2MuY3JlYXRlVGV4dE5vZGUodGhpcy53b3JkTW9kZWwuZ2V0TGFiZWwoKSkpXG5cdFx0XG5cdFx0dGhpcy5saXN0SXRlbUJvZHk9dGhpcy5kb2MuY3JlYXRlRWxlbWVudChcImxpc3QtaXRlbS1ib2R5XCIpXG5cdFx0dGhpcy5saXN0SXRlbUJvZHkuc2V0QXR0cmlidXRlKFwic3RhcnQtaW5kZW50XCIsXCJib2R5LXN0YXJ0KClcIilcblx0XHRcblx0XHR0aGlzLmxpc3RCbG9jay5hcHBlbmRDaGlsZCh0aGlzLmxpc3RJdGVtKVxuXHRcdHRoaXMubGlzdEl0ZW0uYXBwZW5kQ2hpbGQodGhpcy5saXN0SXRlbUxhYmVsKVxuXHRcdHRoaXMubGlzdEl0ZW0uYXBwZW5kQ2hpbGQodGhpcy5saXN0SXRlbUJvZHkpXG5cdFx0XG5cdFx0dGhpcy5saXN0SXRlbUJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50PXRoaXMuY3JlYXRlRWxlbWVudCgpKVxuXHRcdFxuXHRcdHRoaXMuY29udmVydFN0eWxlKHRoaXMuY29udGVudCwgdGhpcy5sYWJlbENvbnRlbnQpXG5cdH1cblx0XG5cdC8qKlxuXHQqIGxpc3QgbGFiZWw6IG51bUlkLmxldmVsLnJQcnxsdmxKYywgbnVtSWQuYWJzdHIubGV2ZWwuclByfGx2bEpjXG5cdCogbGlzdCBjb250ZW50IHN0eWxlOiBudW1JZC5sZXZlbC5wUHIsIG51bUlkLmFic3RyLmxldmVsLnBQciwgZGlyZWN0IHN0eWxlLCBuYW1lZCBzdHlsZSBcblx0Ki9cblx0Y29udmVyU3R5bGUoKXtcblx0XHRzdXBlci5jb252ZXJ0U3R5bGUoLi4uYXJndW1lbnRzKVxuXHR9XG5cblx0XG5cdHN0YXRpYyByZWxlYXNlKGRvYyl7XG5cdFx0ZG9jLnJvb3QucXVlcnlTZWxlY3RvckFsbChcImxpc3QtYmxvY2tcIilcblx0XHRcdC5mb3JFYWNoKGE9PltcImxldmVsXCIsXCJpZFwiXVxuXHRcdFx0XHQuZm9yRWFjaChiPT5hLnJlbW92ZUF0dHJpYnV0ZShiKSkpXG5cdH1cbn1cblxuIl19