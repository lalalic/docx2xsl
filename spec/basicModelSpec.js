"use strict"

describe("docx2xsl", function(){
	var docx2xsl=require("../lib")
	var newDocx=require("docx4js/spec/newDocx")
	var fop=require("./fopHelper")
	
	function validateAgainstFOP(data,done){
		if(!$.isNode) 
			return done()
		
		fop.fromContent(data).then(done,e=>{fail(e);done()})
	}

	function check(xsl,model,done){
		if(typeof(model)=='string'){
			expect(!!xsl.dom.querySelector(model)).toBe(true)
		}else
			model(xsl)
		validateAgainstFOP(xsl.data,done)
	}
	
	function failx(done){
		return e=>{fail(e);done()}
	}

	it("document",done=>
		docx2xsl(newDocx()).then(docx=>check(docx,"root",done))
	)

	it("body",done=>
		docx2xsl(newDocx()).then(docx=>check(docx,"page-sequence",done))
	)

	it("sections",done=>
		docx2xsl(newDocx()).then(docx=>check(docx,"simple-page-master",done))
	)

	it("paragraph",done=>
		docx2xsl(newDocx()).then(docx=>check(docx,"block",done))
	)

	it("inline",done=>
		docx2xsl(newDocx()).then(docx=>check(docx,"inline",done))
	)

	it("text",done=>
		docx2xsl(newDocx()).then(docx=>check(docx,xsl=>{
			let text=xsl.dom.querySelector("inline").textContent
			expect(text.length>0).toBe(true)
		},done))
	)
	
	it("table",done=>
		docx2xsl(newDocx("<w:tbl><w:tr><w:tc><w:p><w:r><w:t>hello</w:t></w:r></w:p></w:tc></w:tr></w:tbl>"))
			.then(docx=>check(docx,"table>table-body>table-row>table-cell block inline",done))
			.catch(e=>{fail(e);done()})
	)

	describe("link", function(){
		it("extenal", done=>
			docx2xsl(newDocx({"word/document.xml":
				`<w:p>
						<w:hyperlink r:id="rId6" w:history="1">
						  <w:r>
							<w:rPr>
							  <w:rStyle w:val="Hyperlink"/>
							</w:rPr>
							<w:t>lazy dog.</w:t>
						  </w:r>
						</w:hyperlink>
				</w:p>`,
				}))
			.then(docx=>check(docx,"basic-link[external-destination]",done))
			.catch(e=>{fail(e);done()})
		)
		
		it("location", done=>
			docx2xsl(newDocx(
				`<w:p>
					<w:bookmarkStart w:id="0" w:name="begin"/>
					<w:r>
						<w:t>On the Insert tab</w:t>
					</w:r>
					<w:bookmarkEnd w:id="0"/>
					<w:r>
						<w:t>, the galleries</w:t>
					</w:r>
				</w:p>`))
			.then(docx=>check(docx,"[id='begin']",done))
			.catch(e=>{fail(e);done()})
		)
		
		it("internal", done=>
			docx2xsl(newDocx(
				`<w:p>
					<w:bookmarkStart w:id="0" w:name="begin"/>
					<w:r>
						<w:t>On the Insert tab</w:t>
					</w:r>
					<w:bookmarkEnd w:id="0"/>
					<w:r>
						<w:t>, the galleries</w:t>
					</w:r>
				</w:p>
				<w:p>
					<w:hyperlink w:anchor="begin" w:history="1">
						<w:r>
							<w:rPr>
								<w:rStyle w:val="Hyperlink"/>
							</w:rPr>
							<w:t>Home tab</w:t>
						</w:r>
					</w:hyperlink>
				</w:p>`))
			.then(docx=>check(docx,"basic-link[internal-destination]",done))
			.catch(e=>{fail(e);done()})
		)
	})
	
	it("toc")
	
	it("index")
	
	xdescribe("special characters", function(){
		it("br", done=>
			docx2xsl(newDocx(`<w:p><w:r><w:br/></w:r><w:p>`))
			.then(docx=>check(docx,"br", done))
		)
		

		it("tab",done=>
			docx2xsl(newDocx(`<w:p><w:r><w:tab/></w:r><w:p>`))
			.then(docx=>check(docx, "tab", done))
		)

		it("symbol")

		it("softHyphen")

		it("noBreakHyphen", done=>
			docx2xsl(newDocx(`
				<w:p>
					<w:r>
						<w:noBreakHyphen/>
						<w:t xml:space="preserve"> over the </w:t>
					</w:r>
				</w:p>`)).then(docx=>check(docx,"noBreakHyphen",done))
		)
	})
	
	
	xdescribe("heading", function(){
		describe("from inline style", function(){
			it("heading", done=>{
				docx2xsl(newDocx(`
					<w:p>
					  <w:pPr>
						<w:outlineLvl w:val="0"/>
					  </w:pPr>
					  <w:r>
						<w:t xml:space="preserve">The quick </w:t>
					  </w:r>
					  <w:r>
						<w:t xml:space="preserve">brown fox jumps </w:t>
					  </w:r>
					  <w:r>
						<w:t>over the lazy dog.</w:t>
					  </w:r>
					</w:p>`)).then(docx=>check(docx,"heading",done))
			})

			it("headingChar", done=>{
				docx2xsl(newDocx(`
					<w:p>
					  <w:r>
						 <w:rPr>
						  <w:outlineLvl w:val="0"/>
						</w:rPr>
						<w:t xml:space="preserve">The quick </w:t>
					  </w:r>
					  <w:r>
						<w:t xml:space="preserve">brown fox jumps </w:t>
					  </w:r>
					  <w:r>
						<w:t>over the lazy dog.</w:t>
					  </w:r>
					</w:p>`)).then(docx=>check(docx,"headingChar",done))
			})
		})
		
		describe("from named style", function(){
			it("heading", done=>{
				docx2xsl(newDocx({"word/document.xml":`
					<w:p>
					  <w:pPr>
						<w:pStyle w:val="Heading"/>
					  </w:pPr>
					  <w:r>
						<w:t xml:space="preserve">The quick </w:t>
					  </w:r>
				</w:p>`,"word/styles.xml":`
					<w:style w:type="paragraph" w:styleId="Heading">
						<w:name w:val="Heading"/>
						<w:basedOn w:val="Normal"/>
						<w:uiPriority w:val="34"/>
						<w:qFormat/>
						<w:rsid w:val="00031D5F"/>
						<w:pPr>
							<w:ind w:left="720"/>
							<w:contextualSpacing/>
							<w:outlineLvl w:val="0"/>
						</w:pPr>
					</w:style>
				`})).then(docx=>check(docx,"heading",done))
			})
			
			xit("headingChar", done=>{
				docx2xsl(newDocx({"word/document.xml":`
					<w:p>
					  <w:r>
						  <w:rPr>
							<w:rStyle w:val="HeadingChar"/>
						  </w:rPr>
						<w:t>The quick </w:t>
					  </w:r>
					</w:p>`,"word/styles.xml":`
					<w:style w:type="character" w:styleId="HeadingChar">
						<w:name w:val="HeadingChar"/>
						<w:rPr>
							<w:outlineLvl w:val="0"/>
						</w:rPr>
					</w:style>
				`})).then(docx=>check(docx,"headingChar",done))
			}).pend("doesn't mean paragrah containing it is a heading")

		})
	})
	

	describe("list", function(){
		beforeEach(function(){
			let List=require("docx4js/lib/openxml/docx/model/list")
			spyOn(List.prototype,"getNumberingStyle").and.returnValue({id:"0"})
		})
		it("from inline", done=>{
			docx2xsl(newDocx(
				`<w:p>
					<w:pPr>
						<w:pStyle w:val="ListParagraph"/>
						<w:numPr>
							<w:ilvl w:val="0"/>
							<w:numId w:val="1"/>
						</w:numPr>
					</w:pPr>
					<w:r>
						<w:t>On the Insert tab, the galleries include items that are designed to coordin</w:t>
					</w:r>
				</w:p>
				<w:p>
					<w:pPr>
						<w:pStyle w:val="ListParagraph"/>
						<w:numPr>
							<w:ilvl w:val="0"/>
							<w:numId w:val="1"/>
						</w:numPr>
					</w:pPr>
					<w:r>
						<w:t>On the Insert tab, the galleries include items that are designed to coordin</w:t>
					</w:r>
				</w:p>
				<w:p>
					<w:pPr>
						<w:pStyle w:val="ListParagraph"/>
						<w:numPr>
							<w:ilvl w:val="1"/>
							<w:numId w:val="1"/>
						</w:numPr>
					</w:pPr>
					<w:r>
						<w:t>On the Insert tab, the galleries include items that are designed to coordin</w:t>
					</w:r>
				</w:p>`))
			.then(docx=>check(docx,xsl=>{
				expect(!!xsl.dom.querySelector("list-block list-item list-item-label+list-item-body")).toBe(true)
				expect(!!xsl.dom.querySelector("list-block list-block")).toBe(false)
				expect(xsl.dom.querySelectorAll("list-block").length).toBe(2)
				expect(xsl.dom.querySelectorAll("list-item-body").length).toBe(3)
			},done)).catch(e=>{fail(e);done()})
		})
		
		it("from named style", done=>{
			docx2xsl(newDocx({"word/document.xml":`
				<w:p>
					<w:pPr>
						<w:pStyle w:val="ListParagraph"/>
					</w:pPr>
					<w:r>
						<w:t>On the Insert tab, the galleries include items that are designed to coordin</w:t>
					</w:r>
				</w:p>
			`,"word/styles.xml":`
					<w:style w:type="paragraph" w:styleId="ListParagraph">
						<w:name w:val="List Paragraph"/>
						<w:basedOn w:val="Normal"/>
						<w:uiPriority w:val="34"/>
						<w:qFormat/>
						<w:rsid w:val="00031D5F"/>
						<w:pPr>
							<w:ind w:left="720"/>
							<w:contextualSpacing/>
							<w:numPr>
								<w:ilvl w:val="0"/>
								<w:numId w:val="1"/>
							</w:numPr>
						</w:pPr>
					</w:style>
			`}))
			.then(docx=>check(docx,"list-block list-item list-item-label+list-item-body",done))
			.catch(e=>{fail(e);done()})
		})
	})
	
})
