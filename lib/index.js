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
    "section": require("./converter/simple-page-master")
};

function docx2xsl(aDocx, option) {
    return _docx4js2.default.load(aDocx).then(function (docx) {
        var xslDoc = docx.parse(_docx4js2.default.createVisitorFactory(converters));
        return {
            get data() {
                return xslDoc.data;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztrQkFRd0I7O0FBUnhCOzs7Ozs7QUFFQSxJQUFJLGFBQVc7QUFDWCxTQUFvQixRQUFRLGlCQUFSLENBQXBCO0FBQ0EsZ0JBQW9CLFFBQVEsc0JBQVIsQ0FBcEI7QUFDQSxlQUFvQixRQUFRLGdDQUFSLENBQXBCO0NBSEE7O0FBTVcsU0FBUyxRQUFULENBQWtCLEtBQWxCLEVBQXlCLE1BQXpCLEVBQWdDO0FBQzNDLFdBQU8sa0JBQVEsSUFBUixDQUFhLEtBQWIsRUFBb0IsSUFBcEIsQ0FBeUIsZ0JBQU07QUFDbEMsWUFBSSxTQUFPLEtBQUssS0FBTCxDQUFXLGtCQUFRLG9CQUFSLENBQTZCLFVBQTdCLENBQVgsQ0FBUCxDQUQ4QjtBQUVsQyxlQUFPO0FBQ0gsZ0JBQUksSUFBSixHQUFVO0FBQ04sdUJBQU8sT0FBTyxJQUFQLENBREQ7YUFBVjs7QUFJQSxnQ0FBSyxNQUFLO0FBQ04sb0JBQUksT0FBSyxLQUFLLElBQUwsQ0FESDtBQUVOLG9CQUFHLEVBQUUsTUFBRixFQUFTO0FBQ2Qsd0JBQUksS0FBRyxJQUFILENBRFU7QUFFZCw0QkFBUSxFQUFSLEVBQVksU0FBWixDQUFzQixRQUFTLEtBQUssR0FBTCxXQUFULEVBQTBCLElBQWhELEVBRmM7aUJBQVosTUFHRTtBQUNKLHdCQUFJLE1BQU0sT0FBTyxHQUFQLENBQVcsZUFBWCxDQUEyQixJQUEzQixDQUFOLENBREE7QUFFSix3QkFBSSxPQUFPLFNBQVMsYUFBVCxDQUF1QixHQUF2QixDQUFQLENBRkE7QUFHSiw2QkFBUyxJQUFULENBQWMsV0FBZCxDQUEwQixJQUExQixFQUhJO0FBSUoseUJBQUssUUFBTCxJQUFtQixRQUFNLEtBQU4sVUFBbkIsQ0FKSTtBQUtKLHlCQUFLLElBQUwsR0FBWSxHQUFaLENBTEk7QUFNSix5QkFBSyxLQUFMLEdBTkk7QUFPSiw2QkFBUyxJQUFULENBQWMsV0FBZCxDQUEwQixJQUExQixFQVBJO2lCQUhGO2FBUEQ7U0FBUCxDQUZrQztLQUFOLENBQWhDLENBRDJDO0NBQWhDOztBQTJCZixPQUFPLE1BQVAsQ0FBYyxRQUFkLEVBQXVCLEVBQUMsc0JBQUQsRUFBdkIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZG9jeDRqcyBmcm9tIFwiZG9jeDRqc1wiXG5cbnZhciBjb252ZXJ0ZXJzPXtcbiAgICBcIipcIjogICAgICAgICAgICAgICAgcmVxdWlyZShcIi4vY29udmVydGVyL2FueVwiKSxcbiAgICBcImRvY3VtZW50XCI6ICAgICAgICAgcmVxdWlyZShcIi4vY29udmVydGVyL2RvY3VtZW50XCIpLFxuICAgIFwic2VjdGlvblwiOiAgICAgICAgICByZXF1aXJlKFwiLi9jb252ZXJ0ZXIvc2ltcGxlLXBhZ2UtbWFzdGVyXCIpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRvY3gyeHNsKGFEb2N4LCBvcHRpb24pe1xuICAgIHJldHVybiBkb2N4NGpzLmxvYWQoYURvY3gpLnRoZW4oZG9jeD0+e1xuICAgICAgICBsZXQgeHNsRG9jPWRvY3gucGFyc2UoZG9jeDRqcy5jcmVhdGVWaXNpdG9yRmFjdG9yeShjb252ZXJ0ZXJzKSlcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdldCBkYXRhKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHhzbERvYy5kYXRhXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzYXZlKGZpbGUpe1xuICAgICAgICAgICAgICAgIGxldCBkYXRhPXRoaXMuZGF0YVxuICAgICAgICAgICAgICAgIGlmKCQuaXNOb2RlKXtcbiAgICAgICAgICAgIFx0XHRsZXQgZnM9XCJmc1wiXG4gICAgICAgICAgICBcdFx0cmVxdWlyZShmcykud3JpdGVGaWxlKGZpbGV8fGAke0RhdGUubm93KCl9LnhtbGAsZGF0YSlcbiAgICAgICAgICAgIFx0fWVsc2V7XG4gICAgICAgICAgICBcdFx0bGV0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGRhdGEpXG4gICAgICAgICAgICBcdFx0bGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgIFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspXG4gICAgICAgICAgICBcdFx0bGluay5kb3dubG9hZCA9IGAke2ZpbGV8fCduZXcnfS54bWxgO1xuICAgICAgICAgICAgXHRcdGxpbmsuaHJlZiA9IHVybDtcbiAgICAgICAgICAgIFx0XHRsaW5rLmNsaWNrKClcbiAgICAgICAgICAgIFx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspXG4gICAgICAgICAgICBcdH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbk9iamVjdC5hc3NpZ24oZG9jeDJ4c2wse2NvbnZlcnRlcnN9KVxuIl19