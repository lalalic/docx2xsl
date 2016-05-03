"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = docx2xsl;

var _docx4js = require("docx4js");

var _docx4js2 = _interopRequireDefault(_docx4js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var converters = {
    "*": require("./converter/any"),
    "document": require("./converter/document"),
    "section": require("./converter/simple-page-master"),
    "paragraph": require('./converter/block'),
    "inline": require("./converter/inline"),
    "text": require("./converter/text"),

    'style.document': require('./style/document'),
    'style.inline': require('./style/inline')
    //,'style.numbering.definition':	require('./style/list')
    , 'style.paragraph': require('./style/paragraph')
    //,'style.table':		require('./style/table')	
};

function docx2xsl(aDocx, option) {
    return _docx4js2.default.load(aDocx).then(function (docx) {
        var xslDoc = docx.parse(_docx4js2.default.createVisitorFactory(converters));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztrQkFrQndCOztBQWxCeEI7Ozs7OztBQUVBLElBQUksYUFBVztBQUNYLFNBQW9CLFFBQVEsaUJBQVIsQ0FBcEI7QUFDQyxnQkFBb0IsUUFBUSxzQkFBUixDQUFwQjtBQUNBLGVBQW9CLFFBQVEsZ0NBQVIsQ0FBcEI7QUFDQSxpQkFBb0IsUUFBUSxtQkFBUixDQUFwQjtBQUNBLGNBQW9CLFFBQVEsb0JBQVIsQ0FBcEI7QUFDQSxZQUFvQixRQUFRLGtCQUFSLENBQXBCOztBQUdILHNCQUFrQixRQUFRLGtCQUFSLENBQWxCO0FBQ0Esb0JBQWlCLFFBQVEsZ0JBQVIsQ0FBakI7O0FBVmEsTUFZYixtQkFBbUIsUUFBUSxtQkFBUixDQUFuQjs7QUFaYSxDQUFYOztBQWdCVyxTQUFTLFFBQVQsQ0FBa0IsS0FBbEIsRUFBeUIsTUFBekIsRUFBZ0M7QUFDM0MsV0FBTyxrQkFBUSxJQUFSLENBQWEsS0FBYixFQUFvQixJQUFwQixDQUF5QixnQkFBTTtBQUNsQyxZQUFJLFNBQU8sS0FBSyxLQUFMLENBQVcsa0JBQVEsb0JBQVIsQ0FBNkIsVUFBN0IsQ0FBWCxDQUFQLENBRDhCO0FBRWxDLGVBQU87QUFDSCxnQkFBSSxJQUFKLEdBQVU7QUFDTix1QkFBTyxPQUFPLElBQVAsQ0FERDthQUFWOztBQUlULGdCQUFJLEdBQUosR0FBUztBQUNSLHVCQUFPLE9BQU8sR0FBUCxDQURDO2FBQVQ7O0FBSVMsZ0NBQUssTUFBSztBQUNOLG9CQUFJLE9BQUssS0FBSyxJQUFMLENBREg7QUFFTixvQkFBRyxFQUFFLE1BQUYsRUFBUztBQUNkLHdCQUFJLEtBQUcsSUFBSCxDQURVO0FBRWQsNEJBQVEsRUFBUixFQUFZLFNBQVosQ0FBc0IsUUFBUyxLQUFLLEdBQUwsV0FBVCxFQUEwQixJQUFoRCxFQUZjO2lCQUFaLE1BR0U7QUFDSix3QkFBSSxNQUFNLE9BQU8sR0FBUCxDQUFXLGVBQVgsQ0FBMkIsSUFBM0IsQ0FBTixDQURBO0FBRUosd0JBQUksT0FBTyxTQUFTLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBUCxDQUZBO0FBR0osNkJBQVMsSUFBVCxDQUFjLFdBQWQsQ0FBMEIsSUFBMUIsRUFISTtBQUlKLHlCQUFLLFFBQUwsSUFBbUIsUUFBTSxLQUFOLFVBQW5CLENBSkk7QUFLSix5QkFBSyxJQUFMLEdBQVksR0FBWixDQUxJO0FBTUoseUJBQUssS0FBTCxHQU5JO0FBT0osNkJBQVMsSUFBVCxDQUFjLFdBQWQsQ0FBMEIsSUFBMUIsRUFQSTtpQkFIRjthQVhEO1NBQVAsQ0FGa0M7S0FBTixDQUFoQyxDQUQyQztDQUFoQzs7QUErQmYsT0FBTyxNQUFQLENBQWMsUUFBZCxFQUF1QixFQUFDLHNCQUFELEVBQXZCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRvY3g0anMgZnJvbSBcImRvY3g0anNcIlxuXG52YXIgY29udmVydGVycz17XG4gICAgXCIqXCI6ICAgICAgICAgICAgICAgIHJlcXVpcmUoXCIuL2NvbnZlcnRlci9hbnlcIilcbiAgICAsXCJkb2N1bWVudFwiOiAgICAgICAgIHJlcXVpcmUoXCIuL2NvbnZlcnRlci9kb2N1bWVudFwiKVxuICAgICxcInNlY3Rpb25cIjogICAgICAgICAgcmVxdWlyZShcIi4vY29udmVydGVyL3NpbXBsZS1wYWdlLW1hc3RlclwiKVxuICAgICxcInBhcmFncmFwaFwiOiAgICAgICAgcmVxdWlyZSgnLi9jb252ZXJ0ZXIvYmxvY2snKVxuICAgICxcImlubGluZVwiOiAgICAgICAgICAgcmVxdWlyZShcIi4vY29udmVydGVyL2lubGluZVwiKVxuICAgICxcInRleHRcIjogICAgICAgICAgICAgcmVxdWlyZShcIi4vY29udmVydGVyL3RleHRcIilcblx0XG5cdFxuXHQsJ3N0eWxlLmRvY3VtZW50JzpcdHJlcXVpcmUoJy4vc3R5bGUvZG9jdW1lbnQnKVxuXHQsJ3N0eWxlLmlubGluZSc6XHRcdHJlcXVpcmUoJy4vc3R5bGUvaW5saW5lJylcblx0Ly8sJ3N0eWxlLm51bWJlcmluZy5kZWZpbml0aW9uJzpcdHJlcXVpcmUoJy4vc3R5bGUvbGlzdCcpXG5cdCwnc3R5bGUucGFyYWdyYXBoJzpcdHJlcXVpcmUoJy4vc3R5bGUvcGFyYWdyYXBoJylcblx0Ly8sJ3N0eWxlLnRhYmxlJzpcdFx0cmVxdWlyZSgnLi9zdHlsZS90YWJsZScpXHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZG9jeDJ4c2woYURvY3gsIG9wdGlvbil7XG4gICAgcmV0dXJuIGRvY3g0anMubG9hZChhRG9jeCkudGhlbihkb2N4PT57XG4gICAgICAgIGxldCB4c2xEb2M9ZG9jeC5wYXJzZShkb2N4NGpzLmNyZWF0ZVZpc2l0b3JGYWN0b3J5KGNvbnZlcnRlcnMpKVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0IGRhdGEoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4geHNsRG9jLmRhdGFcbiAgICAgICAgICAgIH0sXG5cdFx0XHRcblx0XHRcdGdldCBkb20oKXtcblx0XHRcdFx0cmV0dXJuIHhzbERvYy5kb2Ncblx0XHRcdH0sXG5cbiAgICAgICAgICAgIHNhdmUoZmlsZSl7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGE9dGhpcy5kYXRhXG4gICAgICAgICAgICAgICAgaWYoJC5pc05vZGUpe1xuICAgICAgICAgICAgXHRcdGxldCBmcz1cImZzXCJcbiAgICAgICAgICAgIFx0XHRyZXF1aXJlKGZzKS53cml0ZUZpbGUoZmlsZXx8YCR7RGF0ZS5ub3coKX0ueG1sYCxkYXRhKVxuICAgICAgICAgICAgXHR9ZWxzZXtcbiAgICAgICAgICAgIFx0XHRsZXQgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZGF0YSlcbiAgICAgICAgICAgIFx0XHRsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgICAgXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluaylcbiAgICAgICAgICAgIFx0XHRsaW5rLmRvd25sb2FkID0gYCR7ZmlsZXx8J25ldyd9LnhtbGA7XG4gICAgICAgICAgICBcdFx0bGluay5ocmVmID0gdXJsO1xuICAgICAgICAgICAgXHRcdGxpbmsuY2xpY2soKVxuICAgICAgICAgICAgXHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluaylcbiAgICAgICAgICAgIFx0fVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuT2JqZWN0LmFzc2lnbihkb2N4MnhzbCx7Y29udmVydGVyc30pXG4iXX0=