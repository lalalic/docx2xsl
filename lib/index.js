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
    //,'style.list':		require("./style/list")
    //,'style.numbering.definition':	require('./style/numbering')
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztrQkE4QndCOztBQTlCeEI7Ozs7OztBQUVBLElBQUksYUFBVztBQUNYLFNBQW9CLFFBQVEsT0FBUixDQUFwQjtBQUNDLGdCQUFvQixRQUFRLFlBQVIsQ0FBcEI7QUFDQSxlQUFvQixRQUFRLHNCQUFSLENBQXBCO0FBQ0EsaUJBQW9CLFFBQVEsU0FBUixDQUFwQjtBQUNILGVBQWMsUUFBUSxXQUFSLENBQWQ7QUFDRyxjQUFvQixRQUFRLFVBQVIsQ0FBcEI7QUFDQSxZQUFvQixRQUFRLFFBQVIsQ0FBcEI7O0FBRUgsaUJBQWUsUUFBUSxRQUFSLENBQWY7QUFDQSxxQkFBa0IsUUFBUSxZQUFSLENBQWxCOztBQUVBLGFBQVcsUUFBUSxTQUFSLENBQVg7QUFDQSxXQUFVLFFBQVEsYUFBUixDQUFWO0FBQ0EsWUFBVSxRQUFRLGNBQVIsQ0FBVjs7QUFFQSxZQUFVLFFBQVEsUUFBUixDQUFWOztBQUlBLHNCQUFrQixRQUFRLGtCQUFSLENBQWxCO0FBQ0Esb0JBQWdCLFFBQVEsZ0JBQVIsQ0FBaEI7OztBQXJCYSxNQXdCYixtQkFBbUIsUUFBUSxtQkFBUixDQUFuQjtBQUNBLG1CQUFnQixRQUFRLGVBQVIsQ0FBaEI7Q0F6QkU7O0FBNEJXLFNBQVMsUUFBVCxDQUFrQixLQUFsQixFQUF5QixNQUF6QixFQUFnQztBQUMzQyxXQUFPLGtCQUFRLElBQVIsQ0FBYSxLQUFiLEVBQW9CLElBQXBCLENBQXlCLGdCQUFNO0FBQ2xDLFlBQUksU0FBTyxLQUFLLEtBQUwsQ0FBVyxrQkFBUSxvQkFBUixDQUE2QixVQUE3QixDQUFYLENBQVAsQ0FEOEI7QUFFeEMsZUFBTyxPQUFQLEdBRndDO0FBR2xDLGVBQU87QUFDSCxnQkFBSSxJQUFKLEdBQVU7QUFDTix1QkFBTyxPQUFPLElBQVAsQ0FERDthQUFWOztBQUlULGdCQUFJLEdBQUosR0FBUztBQUNSLHVCQUFPLE9BQU8sR0FBUCxDQURDO2FBQVQ7O0FBSVMsZ0NBQUssTUFBSztBQUNOLG9CQUFJLE9BQUssS0FBSyxJQUFMLENBREg7QUFFTixvQkFBRyxFQUFFLE1BQUYsRUFBUztBQUNkLHdCQUFJLEtBQUcsSUFBSCxDQURVO0FBRWQsNEJBQVEsRUFBUixFQUFZLFNBQVosQ0FBc0IsUUFBUyxLQUFLLEdBQUwsV0FBVCxFQUEwQixJQUFoRCxFQUZjO2lCQUFaLE1BR0U7QUFDSix3QkFBSSxNQUFNLE9BQU8sR0FBUCxDQUFXLGVBQVgsQ0FBMkIsSUFBM0IsQ0FBTixDQURBO0FBRUosd0JBQUksT0FBTyxTQUFTLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBUCxDQUZBO0FBR0osNkJBQVMsSUFBVCxDQUFjLFdBQWQsQ0FBMEIsSUFBMUIsRUFISTtBQUlKLHlCQUFLLFFBQUwsSUFBbUIsUUFBTSxLQUFOLFVBQW5CLENBSkk7QUFLSix5QkFBSyxJQUFMLEdBQVksR0FBWixDQUxJO0FBTUoseUJBQUssS0FBTCxHQU5JO0FBT0osNkJBQVMsSUFBVCxDQUFjLFdBQWQsQ0FBMEIsSUFBMUIsRUFQSTtpQkFIRjthQVhEO1NBQVAsQ0FIa0M7S0FBTixDQUFoQyxDQUQyQztDQUFoQzs7QUFnQ2YsT0FBTyxNQUFQLENBQWMsUUFBZCxFQUF1QixFQUFDLHNCQUFELEVBQXZCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRvY3g0anMgZnJvbSBcImRvY3g0anNcIlxuXG52YXIgY29udmVydGVycz17XG4gICAgXCIqXCI6ICAgICAgICAgICAgICAgIHJlcXVpcmUoXCIuL2FueVwiKVxuICAgICxcImRvY3VtZW50XCI6ICAgICAgICAgcmVxdWlyZShcIi4vZG9jdW1lbnRcIilcbiAgICAsXCJzZWN0aW9uXCI6ICAgICAgICAgIHJlcXVpcmUoXCIuL3NpbXBsZS1wYWdlLW1hc3RlclwiKVxuICAgICxcInBhcmFncmFwaFwiOiAgICAgICAgcmVxdWlyZSgnLi9ibG9jaycpXG5cdCxcImhlYWRpbmdcIjpcdFx0XHQgcmVxdWlyZSgnLi9oZWFkaW5nJylcbiAgICAsXCJpbmxpbmVcIjogICAgICAgICAgIHJlcXVpcmUoXCIuL2lubGluZVwiKVxuICAgICxcInRleHRcIjogICAgICAgICAgICAgcmVxdWlyZShcIi4vdGV4dFwiKVxuXHRcblx0LCdoeXBlcmxpbmsnOiBcdFx0cmVxdWlyZSgnLi9saW5rJylcblx0LCdib29rbWFya1N0YXJ0JzogXHRyZXF1aXJlKCcuL2xvY2F0aW9uJylcblx0XG5cdCwndGFibGUnOlx0XHRcdHJlcXVpcmUoJy4vdGFibGUnKVxuXHQsJ3Jvdyc6XHRcdFx0XHRyZXF1aXJlKCcuL3RhYmxlLXJvdycpXG5cdCwnY2VsbCc6XHRcdFx0cmVxdWlyZSgnLi90YWJsZS1jZWxsJylcblx0XG5cdCwnbGlzdCc6XHRcdFx0cmVxdWlyZSgnLi9saXN0Jylcblx0XG5cdFxuXHRcblx0LCdzdHlsZS5kb2N1bWVudCc6XHRyZXF1aXJlKCcuL3N0eWxlL2RvY3VtZW50Jylcblx0LCdzdHlsZS5pbmxpbmUnOlx0cmVxdWlyZSgnLi9zdHlsZS9pbmxpbmUnKVxuXHQvLywnc3R5bGUubGlzdCc6XHRcdHJlcXVpcmUoXCIuL3N0eWxlL2xpc3RcIilcblx0Ly8sJ3N0eWxlLm51bWJlcmluZy5kZWZpbml0aW9uJzpcdHJlcXVpcmUoJy4vc3R5bGUvbnVtYmVyaW5nJylcblx0LCdzdHlsZS5wYXJhZ3JhcGgnOlx0cmVxdWlyZSgnLi9zdHlsZS9wYXJhZ3JhcGgnKVxuXHQsJ3N0eWxlLnRhYmxlJzpcdFx0cmVxdWlyZSgnLi9zdHlsZS90YWJsZScpXHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZG9jeDJ4c2woYURvY3gsIG9wdGlvbil7XG4gICAgcmV0dXJuIGRvY3g0anMubG9hZChhRG9jeCkudGhlbihkb2N4PT57XG4gICAgICAgIGxldCB4c2xEb2M9ZG9jeC5wYXJzZShkb2N4NGpzLmNyZWF0ZVZpc2l0b3JGYWN0b3J5KGNvbnZlcnRlcnMpKVxuXHRcdHhzbERvYy5yZWxlYXNlKClcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdldCBkYXRhKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHhzbERvYy5kYXRhXG4gICAgICAgICAgICB9LFxuXHRcdFx0XG5cdFx0XHRnZXQgZG9tKCl7XG5cdFx0XHRcdHJldHVybiB4c2xEb2MuZG9jXG5cdFx0XHR9LFxuXG4gICAgICAgICAgICBzYXZlKGZpbGUpe1xuICAgICAgICAgICAgICAgIGxldCBkYXRhPXRoaXMuZGF0YVxuICAgICAgICAgICAgICAgIGlmKCQuaXNOb2RlKXtcbiAgICAgICAgICAgIFx0XHRsZXQgZnM9XCJmc1wiXG4gICAgICAgICAgICBcdFx0cmVxdWlyZShmcykud3JpdGVGaWxlKGZpbGV8fGAke0RhdGUubm93KCl9LnhtbGAsZGF0YSlcbiAgICAgICAgICAgIFx0fWVsc2V7XG4gICAgICAgICAgICBcdFx0bGV0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGRhdGEpXG4gICAgICAgICAgICBcdFx0bGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgIFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspXG4gICAgICAgICAgICBcdFx0bGluay5kb3dubG9hZCA9IGAke2ZpbGV8fCduZXcnfS54bWxgO1xuICAgICAgICAgICAgXHRcdGxpbmsuaHJlZiA9IHVybDtcbiAgICAgICAgICAgIFx0XHRsaW5rLmNsaWNrKClcbiAgICAgICAgICAgIFx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspXG4gICAgICAgICAgICBcdH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbk9iamVjdC5hc3NpZ24oZG9jeDJ4c2wse2NvbnZlcnRlcnN9KVxuIl19