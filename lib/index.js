"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = docx2xsl;

var _docx4js = require("docx4js");

var _docx4js2 = _interopRequireDefault(_docx4js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var converters = {
    "*": require("./any"),
    "document": require("./document"),
    "section": require("./simple-page-master"),
    "paragraph": require('./block'),
    "inline": require("./inline"),
    "text": require("./text"),

    'hyperlink': require('./link'),
    'bookmarkStart': require('./location'),

    'table': require('./table'),
    'row': require('./table-row'),
    'cell': require('./table-cell'),

    'list': require('./list'),

    'style.document': require('./style/document'),
    'style.inline': require('./style/inline')
    //,'style.numbering.definition':	require('./style/list')
    , 'style.paragraph': require('./style/paragraph')
    //,'style.table':		require('./style/table')	
};

function docx2xsl(aDocx, option) {
    return _docx4js2.default.load(aDocx).then(function (docx) {
        var xslDoc = docx.parse(_docx4js2.default.createVisitorFactory(converters));
        xslDoc.release();
        return {
            get data() {
                return xslDoc.data;
            },

            get dom() {
                return xslDoc.doc;
            },

            save: function save(file) {
                var data = this.data;
                if ($.isNode) {
                    var fs = "fs";
                    require(fs).writeFile(file || Date.now() + ".xml", data);
                } else {
                    var url = window.URL.createObjectURL(data);
                    var link = document.createElement("a");
                    document.body.appendChild(link);
                    link.download = (file || 'new') + ".xml";
                    link.href = url;
                    link.click();
                    document.body.removeChild(link);
                }
            }
        };
    });
}

Object.assign(docx2xsl, { converters: converters });
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztrQkE0QndCOztBQTVCeEI7Ozs7OztBQUVBLElBQUksYUFBVztBQUNYLFNBQW9CLFFBQVEsT0FBUixDQUFwQjtBQUNDLGdCQUFvQixRQUFRLFlBQVIsQ0FBcEI7QUFDQSxlQUFvQixRQUFRLHNCQUFSLENBQXBCO0FBQ0EsaUJBQW9CLFFBQVEsU0FBUixDQUFwQjtBQUNBLGNBQW9CLFFBQVEsVUFBUixDQUFwQjtBQUNBLFlBQW9CLFFBQVEsUUFBUixDQUFwQjs7QUFFSCxpQkFBZSxRQUFRLFFBQVIsQ0FBZjtBQUNBLHFCQUFrQixRQUFRLFlBQVIsQ0FBbEI7O0FBRUEsYUFBVyxRQUFRLFNBQVIsQ0FBWDtBQUNBLFdBQVUsUUFBUSxhQUFSLENBQVY7QUFDQSxZQUFVLFFBQVEsY0FBUixDQUFWOztBQUVBLFlBQVUsUUFBUSxRQUFSLENBQVY7O0FBSUEsc0JBQWtCLFFBQVEsa0JBQVIsQ0FBbEI7QUFDQSxvQkFBaUIsUUFBUSxnQkFBUixDQUFqQjs7QUFwQmEsTUFzQmIsbUJBQW1CLFFBQVEsbUJBQVIsQ0FBbkI7O0FBdEJhLENBQVg7O0FBMEJXLFNBQVMsUUFBVCxDQUFrQixLQUFsQixFQUF5QixNQUF6QixFQUFnQztBQUMzQyxXQUFPLGtCQUFRLElBQVIsQ0FBYSxLQUFiLEVBQW9CLElBQXBCLENBQXlCLGdCQUFNO0FBQ2xDLFlBQUksU0FBTyxLQUFLLEtBQUwsQ0FBVyxrQkFBUSxvQkFBUixDQUE2QixVQUE3QixDQUFYLENBQVAsQ0FEOEI7QUFFeEMsZUFBTyxPQUFQLEdBRndDO0FBR2xDLGVBQU87QUFDSCxnQkFBSSxJQUFKLEdBQVU7QUFDTix1QkFBTyxPQUFPLElBQVAsQ0FERDthQUFWOztBQUlULGdCQUFJLEdBQUosR0FBUztBQUNSLHVCQUFPLE9BQU8sR0FBUCxDQURDO2FBQVQ7O0FBSVMsZ0NBQUssTUFBSztBQUNOLG9CQUFJLE9BQUssS0FBSyxJQUFMLENBREg7QUFFTixvQkFBRyxFQUFFLE1BQUYsRUFBUztBQUNkLHdCQUFJLEtBQUcsSUFBSCxDQURVO0FBRWQsNEJBQVEsRUFBUixFQUFZLFNBQVosQ0FBc0IsUUFBUyxLQUFLLEdBQUwsV0FBVCxFQUEwQixJQUFoRCxFQUZjO2lCQUFaLE1BR0U7QUFDSix3QkFBSSxNQUFNLE9BQU8sR0FBUCxDQUFXLGVBQVgsQ0FBMkIsSUFBM0IsQ0FBTixDQURBO0FBRUosd0JBQUksT0FBTyxTQUFTLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBUCxDQUZBO0FBR0osNkJBQVMsSUFBVCxDQUFjLFdBQWQsQ0FBMEIsSUFBMUIsRUFISTtBQUlKLHlCQUFLLFFBQUwsSUFBbUIsUUFBTSxLQUFOLFVBQW5CLENBSkk7QUFLSix5QkFBSyxJQUFMLEdBQVksR0FBWixDQUxJO0FBTUoseUJBQUssS0FBTCxHQU5JO0FBT0osNkJBQVMsSUFBVCxDQUFjLFdBQWQsQ0FBMEIsSUFBMUIsRUFQSTtpQkFIRjthQVhEO1NBQVAsQ0FIa0M7S0FBTixDQUFoQyxDQUQyQztDQUFoQzs7QUFnQ2YsT0FBTyxNQUFQLENBQWMsUUFBZCxFQUF1QixFQUFDLHNCQUFELEVBQXZCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRvY3g0anMgZnJvbSBcImRvY3g0anNcIlxuXG52YXIgY29udmVydGVycz17XG4gICAgXCIqXCI6ICAgICAgICAgICAgICAgIHJlcXVpcmUoXCIuL2FueVwiKVxuICAgICxcImRvY3VtZW50XCI6ICAgICAgICAgcmVxdWlyZShcIi4vZG9jdW1lbnRcIilcbiAgICAsXCJzZWN0aW9uXCI6ICAgICAgICAgIHJlcXVpcmUoXCIuL3NpbXBsZS1wYWdlLW1hc3RlclwiKVxuICAgICxcInBhcmFncmFwaFwiOiAgICAgICAgcmVxdWlyZSgnLi9ibG9jaycpXG4gICAgLFwiaW5saW5lXCI6ICAgICAgICAgICByZXF1aXJlKFwiLi9pbmxpbmVcIilcbiAgICAsXCJ0ZXh0XCI6ICAgICAgICAgICAgIHJlcXVpcmUoXCIuL3RleHRcIilcblx0XG5cdCwnaHlwZXJsaW5rJzogXHRcdHJlcXVpcmUoJy4vbGluaycpXG5cdCwnYm9va21hcmtTdGFydCc6IFx0cmVxdWlyZSgnLi9sb2NhdGlvbicpXG5cdFxuXHQsJ3RhYmxlJzpcdFx0XHRyZXF1aXJlKCcuL3RhYmxlJylcblx0LCdyb3cnOlx0XHRcdFx0cmVxdWlyZSgnLi90YWJsZS1yb3cnKVxuXHQsJ2NlbGwnOlx0XHRcdHJlcXVpcmUoJy4vdGFibGUtY2VsbCcpXG5cdFxuXHQsJ2xpc3QnOlx0XHRcdHJlcXVpcmUoJy4vbGlzdCcpXG5cdFxuXHRcblx0XG5cdCwnc3R5bGUuZG9jdW1lbnQnOlx0cmVxdWlyZSgnLi9zdHlsZS9kb2N1bWVudCcpXG5cdCwnc3R5bGUuaW5saW5lJzpcdFx0cmVxdWlyZSgnLi9zdHlsZS9pbmxpbmUnKVxuXHQvLywnc3R5bGUubnVtYmVyaW5nLmRlZmluaXRpb24nOlx0cmVxdWlyZSgnLi9zdHlsZS9saXN0Jylcblx0LCdzdHlsZS5wYXJhZ3JhcGgnOlx0cmVxdWlyZSgnLi9zdHlsZS9wYXJhZ3JhcGgnKVxuXHQvLywnc3R5bGUudGFibGUnOlx0XHRyZXF1aXJlKCcuL3N0eWxlL3RhYmxlJylcdFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkb2N4MnhzbChhRG9jeCwgb3B0aW9uKXtcbiAgICByZXR1cm4gZG9jeDRqcy5sb2FkKGFEb2N4KS50aGVuKGRvY3g9PntcbiAgICAgICAgbGV0IHhzbERvYz1kb2N4LnBhcnNlKGRvY3g0anMuY3JlYXRlVmlzaXRvckZhY3RvcnkoY29udmVydGVycykpXG5cdFx0eHNsRG9jLnJlbGVhc2UoKVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0IGRhdGEoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4geHNsRG9jLmRhdGFcbiAgICAgICAgICAgIH0sXG5cdFx0XHRcblx0XHRcdGdldCBkb20oKXtcblx0XHRcdFx0cmV0dXJuIHhzbERvYy5kb2Ncblx0XHRcdH0sXG5cbiAgICAgICAgICAgIHNhdmUoZmlsZSl7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGE9dGhpcy5kYXRhXG4gICAgICAgICAgICAgICAgaWYoJC5pc05vZGUpe1xuICAgICAgICAgICAgXHRcdGxldCBmcz1cImZzXCJcbiAgICAgICAgICAgIFx0XHRyZXF1aXJlKGZzKS53cml0ZUZpbGUoZmlsZXx8YCR7RGF0ZS5ub3coKX0ueG1sYCxkYXRhKVxuICAgICAgICAgICAgXHR9ZWxzZXtcbiAgICAgICAgICAgIFx0XHRsZXQgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZGF0YSlcbiAgICAgICAgICAgIFx0XHRsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgICAgXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluaylcbiAgICAgICAgICAgIFx0XHRsaW5rLmRvd25sb2FkID0gYCR7ZmlsZXx8J25ldyd9LnhtbGA7XG4gICAgICAgICAgICBcdFx0bGluay5ocmVmID0gdXJsO1xuICAgICAgICAgICAgXHRcdGxpbmsuY2xpY2soKVxuICAgICAgICAgICAgXHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluaylcbiAgICAgICAgICAgIFx0fVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuT2JqZWN0LmFzc2lnbihkb2N4MnhzbCx7Y29udmVydGVyc30pXG4iXX0=