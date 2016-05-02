var docx2xsl=require("../lib")
var newDocx=require("docx4js/spec/newDocx")
var fop=require("./fopHelper")

describe("docx2xsl", function(){
    it("can create convertible xsl to PDF", function(done){
        docx2xsl(newDocx())
            .then(xsl=>fop.fromContent(xsl.data))
            .then(pdf=>{
                done()
            }).catch(e=>{fail(e);done()})
    })
})
