var docx2xsl=require("../lib")
var newDocx=require("docx4js/spec/newDocx")

describe("docx2xsl", function(){
    beforeEach(function(done){
        docx2xsl(newDocx())
            .catch(e=>{fail(e);done()})
            .then(xsl=>{
                this.xsl=xsl
                done()
            })
    })
    it("can run", function(){

    })

    it("can save", function(){
        expect(!!this.xsl.save).toBe(true)
    })

    it("can get data", function(){
        expect(!!this.xsl.data).toBe(true)
    })

    it("can create XSL", function(){
        expect(this.xsl.data).toMatch(/root/)
    })

})
