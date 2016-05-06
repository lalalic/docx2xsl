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
    "heading": require('./heading'),
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
    , 'style.paragraph': require('./style/paragraph'),
    'style.table': require('./style/table')
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztrQkE2QndCOztBQTdCeEI7Ozs7OztBQUVBLElBQUksYUFBVztBQUNYLFNBQW9CLFFBQVEsT0FBUixDQUFwQjtBQUNDLGdCQUFvQixRQUFRLFlBQVIsQ0FBcEI7QUFDQSxlQUFvQixRQUFRLHNCQUFSLENBQXBCO0FBQ0EsaUJBQW9CLFFBQVEsU0FBUixDQUFwQjtBQUNILGVBQWMsUUFBUSxXQUFSLENBQWQ7QUFDRyxjQUFvQixRQUFRLFVBQVIsQ0FBcEI7QUFDQSxZQUFvQixRQUFRLFFBQVIsQ0FBcEI7O0FBRUgsaUJBQWUsUUFBUSxRQUFSLENBQWY7QUFDQSxxQkFBa0IsUUFBUSxZQUFSLENBQWxCOztBQUVBLGFBQVcsUUFBUSxTQUFSLENBQVg7QUFDQSxXQUFVLFFBQVEsYUFBUixDQUFWO0FBQ0EsWUFBVSxRQUFRLGNBQVIsQ0FBVjs7QUFFQSxZQUFVLFFBQVEsUUFBUixDQUFWOztBQUlBLHNCQUFrQixRQUFRLGtCQUFSLENBQWxCO0FBQ0Esb0JBQWlCLFFBQVEsZ0JBQVIsQ0FBakI7O0FBckJhLE1BdUJiLG1CQUFtQixRQUFRLG1CQUFSLENBQW5CO0FBQ0EsbUJBQWdCLFFBQVEsZUFBUixDQUFoQjtDQXhCRTs7QUEyQlcsU0FBUyxRQUFULENBQWtCLEtBQWxCLEVBQXlCLE1BQXpCLEVBQWdDO0FBQzNDLFdBQU8sa0JBQVEsSUFBUixDQUFhLEtBQWIsRUFBb0IsSUFBcEIsQ0FBeUIsZ0JBQU07QUFDbEMsWUFBSSxTQUFPLEtBQUssS0FBTCxDQUFXLGtCQUFRLG9CQUFSLENBQTZCLFVBQTdCLENBQVgsQ0FBUCxDQUQ4QjtBQUV4QyxlQUFPLE9BQVAsR0FGd0M7QUFHbEMsZUFBTztBQUNILGdCQUFJLElBQUosR0FBVTtBQUNOLHVCQUFPLE9BQU8sSUFBUCxDQUREO2FBQVY7O0FBSVQsZ0JBQUksR0FBSixHQUFTO0FBQ1IsdUJBQU8sT0FBTyxHQUFQLENBREM7YUFBVDs7QUFJUyxnQ0FBSyxNQUFLO0FBQ04sb0JBQUksT0FBSyxLQUFLLElBQUwsQ0FESDtBQUVOLG9CQUFHLEVBQUUsTUFBRixFQUFTO0FBQ2Qsd0JBQUksS0FBRyxJQUFILENBRFU7QUFFZCw0QkFBUSxFQUFSLEVBQVksU0FBWixDQUFzQixRQUFTLEtBQUssR0FBTCxXQUFULEVBQTBCLElBQWhELEVBRmM7aUJBQVosTUFHRTtBQUNKLHdCQUFJLE1BQU0sT0FBTyxHQUFQLENBQVcsZUFBWCxDQUEyQixJQUEzQixDQUFOLENBREE7QUFFSix3QkFBSSxPQUFPLFNBQVMsYUFBVCxDQUF1QixHQUF2QixDQUFQLENBRkE7QUFHSiw2QkFBUyxJQUFULENBQWMsV0FBZCxDQUEwQixJQUExQixFQUhJO0FBSUoseUJBQUssUUFBTCxJQUFtQixRQUFNLEtBQU4sVUFBbkIsQ0FKSTtBQUtKLHlCQUFLLElBQUwsR0FBWSxHQUFaLENBTEk7QUFNSix5QkFBSyxLQUFMLEdBTkk7QUFPSiw2QkFBUyxJQUFULENBQWMsV0FBZCxDQUEwQixJQUExQixFQVBJO2lCQUhGO2FBWEQ7U0FBUCxDQUhrQztLQUFOLENBQWhDLENBRDJDO0NBQWhDOztBQWdDZixPQUFPLE1BQVAsQ0FBYyxRQUFkLEVBQXVCLEVBQUMsc0JBQUQsRUFBdkIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZG9jeDRqcyBmcm9tIFwiZG9jeDRqc1wiXG5cbnZhciBjb252ZXJ0ZXJzPXtcbiAgICBcIipcIjogICAgICAgICAgICAgICAgcmVxdWlyZShcIi4vYW55XCIpXG4gICAgLFwiZG9jdW1lbnRcIjogICAgICAgICByZXF1aXJlKFwiLi9kb2N1bWVudFwiKVxuICAgICxcInNlY3Rpb25cIjogICAgICAgICAgcmVxdWlyZShcIi4vc2ltcGxlLXBhZ2UtbWFzdGVyXCIpXG4gICAgLFwicGFyYWdyYXBoXCI6ICAgICAgICByZXF1aXJlKCcuL2Jsb2NrJylcblx0LFwiaGVhZGluZ1wiOlx0XHRcdCByZXF1aXJlKCcuL2hlYWRpbmcnKVxuICAgICxcImlubGluZVwiOiAgICAgICAgICAgcmVxdWlyZShcIi4vaW5saW5lXCIpXG4gICAgLFwidGV4dFwiOiAgICAgICAgICAgICByZXF1aXJlKFwiLi90ZXh0XCIpXG5cdFxuXHQsJ2h5cGVybGluayc6IFx0XHRyZXF1aXJlKCcuL2xpbmsnKVxuXHQsJ2Jvb2ttYXJrU3RhcnQnOiBcdHJlcXVpcmUoJy4vbG9jYXRpb24nKVxuXHRcblx0LCd0YWJsZSc6XHRcdFx0cmVxdWlyZSgnLi90YWJsZScpXG5cdCwncm93JzpcdFx0XHRcdHJlcXVpcmUoJy4vdGFibGUtcm93Jylcblx0LCdjZWxsJzpcdFx0XHRyZXF1aXJlKCcuL3RhYmxlLWNlbGwnKVxuXHRcblx0LCdsaXN0JzpcdFx0XHRyZXF1aXJlKCcuL2xpc3QnKVxuXHRcblx0XG5cdFxuXHQsJ3N0eWxlLmRvY3VtZW50JzpcdHJlcXVpcmUoJy4vc3R5bGUvZG9jdW1lbnQnKVxuXHQsJ3N0eWxlLmlubGluZSc6XHRcdHJlcXVpcmUoJy4vc3R5bGUvaW5saW5lJylcblx0Ly8sJ3N0eWxlLm51bWJlcmluZy5kZWZpbml0aW9uJzpcdHJlcXVpcmUoJy4vc3R5bGUvbGlzdCcpXG5cdCwnc3R5bGUucGFyYWdyYXBoJzpcdHJlcXVpcmUoJy4vc3R5bGUvcGFyYWdyYXBoJylcblx0LCdzdHlsZS50YWJsZSc6XHRcdHJlcXVpcmUoJy4vc3R5bGUvdGFibGUnKVx0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRvY3gyeHNsKGFEb2N4LCBvcHRpb24pe1xuICAgIHJldHVybiBkb2N4NGpzLmxvYWQoYURvY3gpLnRoZW4oZG9jeD0+e1xuICAgICAgICBsZXQgeHNsRG9jPWRvY3gucGFyc2UoZG9jeDRqcy5jcmVhdGVWaXNpdG9yRmFjdG9yeShjb252ZXJ0ZXJzKSlcblx0XHR4c2xEb2MucmVsZWFzZSgpXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXQgZGF0YSgpe1xuICAgICAgICAgICAgICAgIHJldHVybiB4c2xEb2MuZGF0YVxuICAgICAgICAgICAgfSxcblx0XHRcdFxuXHRcdFx0Z2V0IGRvbSgpe1xuXHRcdFx0XHRyZXR1cm4geHNsRG9jLmRvY1xuXHRcdFx0fSxcblxuICAgICAgICAgICAgc2F2ZShmaWxlKXtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YT10aGlzLmRhdGFcbiAgICAgICAgICAgICAgICBpZigkLmlzTm9kZSl7XG4gICAgICAgICAgICBcdFx0bGV0IGZzPVwiZnNcIlxuICAgICAgICAgICAgXHRcdHJlcXVpcmUoZnMpLndyaXRlRmlsZShmaWxlfHxgJHtEYXRlLm5vdygpfS54bWxgLGRhdGEpXG4gICAgICAgICAgICBcdH1lbHNle1xuICAgICAgICAgICAgXHRcdGxldCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChkYXRhKVxuICAgICAgICAgICAgXHRcdGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgICAgICBcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKVxuICAgICAgICAgICAgXHRcdGxpbmsuZG93bmxvYWQgPSBgJHtmaWxlfHwnbmV3J30ueG1sYDtcbiAgICAgICAgICAgIFx0XHRsaW5rLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICBcdFx0bGluay5jbGljaygpXG4gICAgICAgICAgICBcdFx0ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKVxuICAgICAgICAgICAgXHR9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5PYmplY3QuYXNzaWduKGRvY3gyeHNsLHtjb252ZXJ0ZXJzfSlcbiJdfQ==