'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Any = function () {
	function Any(wModel, parentConverter) {
		_classCallCheck(this, Any);

		this.stylable = false;

		this.wordModel = wModel;
		this.parent = parentConverter;
		this.doc = parentConverter && parentConverter.doc;
		this.content = null;
		this.tag = null;
	}

	/**interface API: happen when just word model identified, without children appended yet*/


	_createClass(Any, [{
		key: 'visit',
		value: function visit() {
			if (!this.parent || this.parent.content) return this.convert.apply(this, arguments);
		}
	}, {
		key: 'convert',
		value: function convert() {
			if (this._shouldIgnore()) {
				this.content = this.parent && this.parent.content || null;
				return;
			}

			this.content = this.createElement();
			if (this.content) {
				this.parent.content.appendChild(this.content);
			} else this.content = this.parent && this.parent.content || null;

			this.convertStyle();
		}
	}, {
		key: 'createElement',
		value: function createElement() {
			switch (_typeof(this.tag)) {
				case 'string':
					return this.doc.createElement(this.tag);
				case 'function':
					return this.doc.createElement(this.tag());
				default:
					return null;
			}
		}
	}, {
		key: 'convertStyle',
		value: function convertStyle(el) {
			if (!this.stylable) return;
			var directStyle = this.wordModel.getDirectStyle(),
			    namedStyleId = this.wordModel.getStyleId();

			var style = this.doc.createStyle(el || this.content, namedStyleId);

			if (directStyle) directStyle.parse([new this.constructor.StyleProperties(style, this)]);

			return style;
		}
	}, {
		key: '_shouldIgnore',
		value: function _shouldIgnore() {
			return false;
		}
	}]);

	return Any;
}();

exports.default = Any;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hbnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQXFCO0FBR2pCLFVBSGlCLEdBR2pCLENBQVksTUFBWixFQUFvQixlQUFwQixFQUFvQzt3QkFIbkIsS0FHbUI7O09BRnZDLFdBQVMsTUFFOEI7O0FBQ2hDLE9BQUssU0FBTCxHQUFlLE1BQWYsQ0FEZ0M7QUFFdEMsT0FBSyxNQUFMLEdBQVksZUFBWixDQUZzQztBQUd0QyxPQUFLLEdBQUwsR0FBVSxtQkFBbUIsZ0JBQWdCLEdBQWhCLENBSFM7QUFJdEMsT0FBSyxPQUFMLEdBQWEsSUFBYixDQUpzQztBQUtoQyxPQUFLLEdBQUwsR0FBUyxJQUFULENBTGdDO0VBQXBDOzs7OztjQUhpQjs7MEJBWWI7QUFDTixPQUFHLENBQUMsS0FBSyxNQUFMLElBQWUsS0FBSyxNQUFMLENBQVksT0FBWixFQUNsQixPQUFPLEtBQUssT0FBTCxhQUFnQixTQUFoQixDQUFQLENBREQ7Ozs7NEJBR1E7QUFDUixPQUFHLEtBQUssYUFBTCxFQUFILEVBQXdCO0FBQ3ZCLFNBQUssT0FBTCxHQUFhLEtBQUssTUFBTCxJQUFlLEtBQUssTUFBTCxDQUFZLE9BQVosSUFBdUIsSUFBdEMsQ0FEVTtBQUV2QixXQUZ1QjtJQUF4Qjs7QUFLTSxRQUFLLE9BQUwsR0FBYSxLQUFLLGFBQUwsRUFBYixDQU5FO0FBT1IsT0FBRyxLQUFLLE9BQUwsRUFBYTtBQUNmLFNBQUssTUFBTCxDQUFZLE9BQVosQ0FBb0IsV0FBcEIsQ0FBZ0MsS0FBSyxPQUFMLENBQWhDLENBRGU7SUFBaEIsTUFHQyxLQUFLLE9BQUwsR0FBYSxLQUFLLE1BQUwsSUFBZSxLQUFLLE1BQUwsQ0FBWSxPQUFaLElBQXVCLElBQXRDLENBSGQ7O0FBS0EsUUFBSyxZQUFMLEdBWlE7Ozs7a0NBZVM7QUFDakIsbUJBQWMsS0FBSyxHQUFMLENBQWQ7QUFDQSxTQUFLLFFBQUw7QUFDQyxZQUFPLEtBQUssR0FBTCxDQUFTLGFBQVQsQ0FBdUIsS0FBSyxHQUFMLENBQTlCLENBREQ7QUFEQSxTQUdLLFVBQUw7QUFDQyxZQUFPLEtBQUssR0FBTCxDQUFTLGFBQVQsQ0FBdUIsS0FBSyxHQUFMLEVBQXZCLENBQVAsQ0FERDtBQUhBO0FBTUMsWUFBTyxJQUFQLENBREQ7QUFMQSxJQURpQjs7OzsrQkFXRixJQUFHO0FBQ2xCLE9BQUcsQ0FBQyxLQUFLLFFBQUwsRUFDSCxPQUREO0FBRUEsT0FBSSxjQUFZLEtBQUssU0FBTCxDQUFlLGNBQWYsRUFBWjtPQUNGLGVBQWEsS0FBSyxTQUFMLENBQWUsVUFBZixFQUFiLENBSmdCOztBQU1sQixPQUFJLFFBQU0sS0FBSyxHQUFMLENBQVMsV0FBVCxDQUFxQixNQUFJLEtBQUssT0FBTCxFQUFhLFlBQXRDLENBQU4sQ0FOYzs7QUFRbEIsT0FBRyxXQUFILEVBQ0MsWUFBWSxLQUFaLENBQWtCLENBQUMsSUFBSSxLQUFLLFdBQUwsQ0FBaUIsZUFBakIsQ0FBaUMsS0FBckMsRUFBNEMsSUFBNUMsQ0FBRCxDQUFsQixFQUREOztBQUdBLFVBQU8sS0FBUCxDQVhrQjs7OztrQ0FjRDtBQUNYLFVBQU8sS0FBUCxDQURXOzs7O1FBeERFIiwiZmlsZSI6ImFueS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFueXtcblx0c3R5bGFibGU9ZmFsc2Vcblx0XG4gICAgY29uc3RydWN0b3Iod01vZGVsLCBwYXJlbnRDb252ZXJ0ZXIpe1xuICAgICAgICB0aGlzLndvcmRNb2RlbD13TW9kZWxcblx0XHR0aGlzLnBhcmVudD1wYXJlbnRDb252ZXJ0ZXJcblx0XHR0aGlzLmRvYz0gcGFyZW50Q29udmVydGVyICYmIHBhcmVudENvbnZlcnRlci5kb2Ncblx0XHR0aGlzLmNvbnRlbnQ9bnVsbDtcbiAgICAgICAgdGhpcy50YWc9bnVsbFxuICAgIH1cblxuICAgIC8qKmludGVyZmFjZSBBUEk6IGhhcHBlbiB3aGVuIGp1c3Qgd29yZCBtb2RlbCBpZGVudGlmaWVkLCB3aXRob3V0IGNoaWxkcmVuIGFwcGVuZGVkIHlldCovXG5cdHZpc2l0KCl7XG5cdFx0aWYoIXRoaXMucGFyZW50IHx8IHRoaXMucGFyZW50LmNvbnRlbnQpXG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0KC4uLmFyZ3VtZW50cylcblx0fVxuXHRjb252ZXJ0KCl7XG5cdFx0aWYodGhpcy5fc2hvdWxkSWdub3JlKCkpe1xuXHRcdFx0dGhpcy5jb250ZW50PXRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmNvbnRlbnQgfHwgbnVsbFxuXHRcdFx0cmV0dXJuIFxuXHRcdH1cblx0XHRcdFxuICAgICAgICB0aGlzLmNvbnRlbnQ9dGhpcy5jcmVhdGVFbGVtZW50KClcblx0XHRpZih0aGlzLmNvbnRlbnQpe1xuXHRcdFx0dGhpcy5wYXJlbnQuY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnQpXG5cdFx0fWVsc2Vcblx0XHRcdHRoaXMuY29udGVudD10aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5jb250ZW50IHx8IG51bGxcblxuXHRcdHRoaXMuY29udmVydFN0eWxlKClcbiAgICB9XG5cbiAgICBjcmVhdGVFbGVtZW50KCl7XG5cdFx0c3dpdGNoKHR5cGVvZih0aGlzLnRhZykpe1xuXHRcdGNhc2UgJ3N0cmluZyc6XG5cdFx0XHRyZXR1cm4gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCh0aGlzLnRhZylcblx0XHRjYXNlICdmdW5jdGlvbic6XG5cdFx0XHRyZXR1cm4gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCh0aGlzLnRhZygpKVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gbnVsbFxuXHRcdH1cblx0fVxuXG4gICAgY29udmVydFN0eWxlKGVsKXtcblx0XHRpZighdGhpcy5zdHlsYWJsZSlcblx0XHRcdHJldHVyblxuXHRcdGxldCBkaXJlY3RTdHlsZT10aGlzLndvcmRNb2RlbC5nZXREaXJlY3RTdHlsZSgpXG5cdFx0XHQsbmFtZWRTdHlsZUlkPXRoaXMud29yZE1vZGVsLmdldFN0eWxlSWQoKVxuXHRcdFxuXHRcdGxldCBzdHlsZT10aGlzLmRvYy5jcmVhdGVTdHlsZShlbHx8dGhpcy5jb250ZW50LG5hbWVkU3R5bGVJZClcblx0XHRcblx0XHRpZihkaXJlY3RTdHlsZSlcblx0XHRcdGRpcmVjdFN0eWxlLnBhcnNlKFtuZXcgdGhpcy5jb25zdHJ1Y3Rvci5TdHlsZVByb3BlcnRpZXMoc3R5bGUsIHRoaXMpXSlcblx0XHRcblx0XHRyZXR1cm4gc3R5bGVcblx0fVxuXG4gICAgX3Nob3VsZElnbm9yZSgpe1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG59XG4iXX0=