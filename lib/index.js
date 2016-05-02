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
    "text": require("./converter/text")
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztrQkFXd0I7O0FBWHhCOzs7Ozs7QUFFQSxJQUFJLGFBQVc7QUFDWCxTQUFvQixRQUFRLGlCQUFSLENBQXBCO0FBQ0EsZ0JBQW9CLFFBQVEsc0JBQVIsQ0FBcEI7QUFDQSxlQUFvQixRQUFRLGdDQUFSLENBQXBCO0FBQ0EsaUJBQW9CLFFBQVEsbUJBQVIsQ0FBcEI7QUFDQSxjQUFvQixRQUFRLG9CQUFSLENBQXBCO0FBQ0EsWUFBb0IsUUFBUSxrQkFBUixDQUFwQjtDQU5BOztBQVNXLFNBQVMsUUFBVCxDQUFrQixLQUFsQixFQUF5QixNQUF6QixFQUFnQztBQUMzQyxXQUFPLGtCQUFRLElBQVIsQ0FBYSxLQUFiLEVBQW9CLElBQXBCLENBQXlCLGdCQUFNO0FBQ2xDLFlBQUksU0FBTyxLQUFLLEtBQUwsQ0FBVyxrQkFBUSxvQkFBUixDQUE2QixVQUE3QixDQUFYLENBQVAsQ0FEOEI7QUFFbEMsZUFBTztBQUNILGdCQUFJLElBQUosR0FBVTtBQUNOLHVCQUFPLE9BQU8sSUFBUCxDQUREO2FBQVY7O0FBSUEsZ0NBQUssTUFBSztBQUNOLG9CQUFJLE9BQUssS0FBSyxJQUFMLENBREg7QUFFTixvQkFBRyxFQUFFLE1BQUYsRUFBUztBQUNkLHdCQUFJLEtBQUcsSUFBSCxDQURVO0FBRWQsNEJBQVEsRUFBUixFQUFZLFNBQVosQ0FBc0IsUUFBUyxLQUFLLEdBQUwsV0FBVCxFQUEwQixJQUFoRCxFQUZjO2lCQUFaLE1BR0U7QUFDSix3QkFBSSxNQUFNLE9BQU8sR0FBUCxDQUFXLGVBQVgsQ0FBMkIsSUFBM0IsQ0FBTixDQURBO0FBRUosd0JBQUksT0FBTyxTQUFTLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBUCxDQUZBO0FBR0osNkJBQVMsSUFBVCxDQUFjLFdBQWQsQ0FBMEIsSUFBMUIsRUFISTtBQUlKLHlCQUFLLFFBQUwsSUFBbUIsUUFBTSxLQUFOLFVBQW5CLENBSkk7QUFLSix5QkFBSyxJQUFMLEdBQVksR0FBWixDQUxJO0FBTUoseUJBQUssS0FBTCxHQU5JO0FBT0osNkJBQVMsSUFBVCxDQUFjLFdBQWQsQ0FBMEIsSUFBMUIsRUFQSTtpQkFIRjthQVBEO1NBQVAsQ0FGa0M7S0FBTixDQUFoQyxDQUQyQztDQUFoQzs7QUEyQmYsT0FBTyxNQUFQLENBQWMsUUFBZCxFQUF1QixFQUFDLHNCQUFELEVBQXZCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRvY3g0anMgZnJvbSBcImRvY3g0anNcIlxuXG52YXIgY29udmVydGVycz17XG4gICAgXCIqXCI6ICAgICAgICAgICAgICAgIHJlcXVpcmUoXCIuL2NvbnZlcnRlci9hbnlcIiksXG4gICAgXCJkb2N1bWVudFwiOiAgICAgICAgIHJlcXVpcmUoXCIuL2NvbnZlcnRlci9kb2N1bWVudFwiKSxcbiAgICBcInNlY3Rpb25cIjogICAgICAgICAgcmVxdWlyZShcIi4vY29udmVydGVyL3NpbXBsZS1wYWdlLW1hc3RlclwiKSxcbiAgICBcInBhcmFncmFwaFwiOiAgICAgICAgcmVxdWlyZSgnLi9jb252ZXJ0ZXIvYmxvY2snKSxcbiAgICBcImlubGluZVwiOiAgICAgICAgICAgcmVxdWlyZShcIi4vY29udmVydGVyL2lubGluZVwiKSxcbiAgICBcInRleHRcIjogICAgICAgICAgICAgcmVxdWlyZShcIi4vY29udmVydGVyL3RleHRcIilcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZG9jeDJ4c2woYURvY3gsIG9wdGlvbil7XG4gICAgcmV0dXJuIGRvY3g0anMubG9hZChhRG9jeCkudGhlbihkb2N4PT57XG4gICAgICAgIGxldCB4c2xEb2M9ZG9jeC5wYXJzZShkb2N4NGpzLmNyZWF0ZVZpc2l0b3JGYWN0b3J5KGNvbnZlcnRlcnMpKVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0IGRhdGEoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4geHNsRG9jLmRhdGFcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNhdmUoZmlsZSl7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGE9dGhpcy5kYXRhXG4gICAgICAgICAgICAgICAgaWYoJC5pc05vZGUpe1xuICAgICAgICAgICAgXHRcdGxldCBmcz1cImZzXCJcbiAgICAgICAgICAgIFx0XHRyZXF1aXJlKGZzKS53cml0ZUZpbGUoZmlsZXx8YCR7RGF0ZS5ub3coKX0ueG1sYCxkYXRhKVxuICAgICAgICAgICAgXHR9ZWxzZXtcbiAgICAgICAgICAgIFx0XHRsZXQgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZGF0YSlcbiAgICAgICAgICAgIFx0XHRsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgICAgXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluaylcbiAgICAgICAgICAgIFx0XHRsaW5rLmRvd25sb2FkID0gYCR7ZmlsZXx8J25ldyd9LnhtbGA7XG4gICAgICAgICAgICBcdFx0bGluay5ocmVmID0gdXJsO1xuICAgICAgICAgICAgXHRcdGxpbmsuY2xpY2soKVxuICAgICAgICAgICAgXHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluaylcbiAgICAgICAgICAgIFx0fVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuT2JqZWN0LmFzc2lnbihkb2N4MnhzbCx7Y29udmVydGVyc30pXG4iXX0=