"use strict"

describe("docx2xsl", function(){
	var docx2xsl=require("../lib")
	var newDocx=require("docx4js/spec/newDocx")
	var fop=require("./fopHelper")
	
	function check(xsl,model,done){
		if(typeof(model)=="string")
			expect(!!xsl.dom.querySelector(model)).toBe(true)
		else
			model(xsl)
		done()
	}
	
	describe("styles", function(){
		it("document default style on root",done=>
			docx2xsl(newDocx()).then(docx=>check(docx,"root[font-family=Arial]",done))
		)
		
		it("section style on page master",done=>
			docx2xsl(newDocx()).then(docx=>check(docx,"simple-page-master[page-width]",done))
		)
		
		describe("named style structure", function(){
			it("default paragraph style",done=>
				docx2xsl(newDocx({"word/styles.xml":
					`<w:style w:type="paragraph" w:default="1" w:styleId="Normal">
						<w:name w:val="Normal"/>
						<w:pPr>
							<w:jc w:val="center"/>
						</w:pPr>
					</w:style>`})).then(docx=>check(docx,"flow [text-align='center'] inline",done))
			)
			
			it("default inline style",done=>
				docx2xsl(newDocx({"word/styles.xml":
					`<w:style w:type="character" w:default="1" w:styleId="Normal">
						<w:name w:val="Normal"/>
						<w:rPr>
							<w:sz w:val="22"/>
						</w:rPr>
					</w:style>`})).then(docx=>check(docx,"flow [font-size='11pt']",done))
					.catch(e=>{fail(e);done()})
			)
			
			it("multiple leveled paragraph style",done=>
				docx2xsl(newDocx({"word/styles.xml":
					`<w:style w:type="paragraph" w:default="1" w:styleId="Normal">
						<w:pPr>
							<w:jc w:val="center"/>
						</w:pPr>
					</w:style>
					<w:style w:type="paragraph" w:styleId="A">
						<w:basedOn w:val="Normal"/>
						<w:rPr>
							<w:sz w:val="22"/>
						</w:rPr>
					</w:style>`,
					"word/document.xml":
					`<w:p>
						<w:pPr>
							<w:pStyle w:val="A"/>
						</w:pPr>
						<w:r>
							<w:t>On the Insert tab.</w:t>
						</w:r>
					</w:p>`})).then(docx=>check(docx,xsl=>{
						expect(!!xsl.dom.querySelector("flow [font-size='11pt']")).toBe(true)
						expect(!!xsl.dom.querySelector("flow [text-align='center']")).toBe(true)
					},done)).catch(e=>{fail(e);done()})
			)
			
			it("multiple leveled inline style",done=>
				docx2xsl(newDocx({"word/styles.xml":
					`<w:style w:type="character" w:default="1" w:styleId="Normal">
						<w:rPr>
							<w:sz w:val="22"/>
						</w:rPr>
					</w:style>
					<w:style w:type="character" w:styleId="A">
						<w:basedOn w:val="Normal"/>
						<w:rPr>
							<w:rFonts w:ascii="fake"/>
						</w:rPr>
					</w:style>`,
					"word/document.xml":
					`<w:p>
						<w:r>
							<w:rPr>
								<w:rStyle w:val="A"/>
							</w:rPr>
							<w:t>On the Insert tab.</w:t>
						</w:r>
					</w:p>`})).then(docx=>check(docx,xsl=>{
						expect(!!xsl.dom.querySelector("flow [font-size='11pt']")).toBe(true)
						expect(!!xsl.dom.querySelector("flow [font-family='fake']")).toBe(true)
					},done))
			)
		})
		
		describe("style prperties",function(){
			it("Common Accessibility Properties").pend("not support")
			
			it("Common Absolute Position Properties")
			
			it("Common Aural Properties").pend("not support")
			
			it("Common Border, Padding, and Background Properties")
			
			it("Common Font Properties:family,size", done=>
				docx2xsl(newDocx(
					`<w:p>
						<w:r>
							<w:rPr>
								<w:rFonts w:ascii="Arial"/>
								<w:sz w:val="22"/>
							</w:rPr>
						<w:t>On the Insert tab.</w:t>
						</w:r>
					</w:p>`)).then(docx=>check(docx,"inline[font-family][font-size]",done))
			)
			
			it("Common Hyphenation Properties")
			
			it("Common Margin Properties-Block")
			
			it("Common Relative Position Properties")
		})
		
		describe("inline styles", function(){
			it("Common Margin Properties-Inline")
		})
		
		describe("specific styles", function(){
			/*
			Area Alignment Properties

			Properties that control the alignment of inline-areas with respect to each other, particularly in relation to the mixing of different baselines for different scripts. In addition, there are two properties: "display-align" and "relative-align" that control the placement of block-areas.

			Area Dimension Properties

			Properties that control the dimensions of both block-areas and inline-areas.

			Block and Line-related Properties

			Properties that govern the construction of line-areas and the placement of these line-areas within containing block-areas.

			Character Properties

			Properties that govern the presentation of text, including word spacing, letter spacing, and word space treatment and suppression.

			Color-related Properties

			Properties that govern color and color-model selection.

			Float-related properties

			Properties governing the placement of both side-floats (start- and end-floats) and before-floats ("top" floats in "lr-tb" writing-mode).

			Keeps and Breaks Properties

			Properties that control keeps and breaks across pages, columns, and lines, including widow and orphan control and keeping content together.

			Layout-related Properties

			These properties control what is "top" ("reference-orientation") as well as clipping, overflow, and column-spanning conditions.

			Leader and Rule Properties

			Properties governing the construction of leaders and horizontal rules.

			Properties for Dynamic Effects

			Properties governing the presentation and actions associated with links and other dynamic effects.

			Properties for Indexing

			Properties governing the creation and presentation of a "back of the book" index.

			Properties for Markers

			Properties governing the creation and retrieval of markers. Markers are used typically for "dictionary" headers and footers.

			Properties for Number to String Conversions

			Properties used in the construction of page-numbers and other formatter-based numbering.

			Pagination and Layout Properties

			These properties govern the sequencing, layout, and instantiation of pages, including: the page size and orientation, sizes of regions on the page-master, the identification and selection of page-masters, division of the body region into columns, and the assignment of content flows to layout regions.

			Table Properties

			Properties governing the layout and presentation of tables.

			Writing-mode-related Properties

			Properties related to various aspects of "directionality" and writing-mode influencing block-progression-direction and inline-progression-direction.

			Miscellaneous Properties
			*/
		})
		
		
		xdescribe("numbering style", function(){
			it("list is from <w:num>", done=>
				docx4js.load(newDocx({"word/numbering.xml":`
					<w:numbering xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" >
						<w:abstractNum w:abstractNumId="0">
							<w:nsid w:val="36965BDB"/>
							<w:multiLevelType w:val="multilevel"/>
							<w:tmpl w:val="0409001D"/>
							<w:lvl w:ilvl="0">
								<w:start w:val="1"/>
								<w:numFmt w:val="decimal"/>
								<w:lvlText w:val="%1)"/>
								<w:lvlJc w:val="left"/>
								<w:pPr>
									<w:ind w:left="360" w:hanging="360"/>
								</w:pPr>
							</w:lvl>
						</w:abstractNum>
						<w:num w:numId="3">
							<w:abstractNumId w:val="0"/>
						</w:num>
					</w:numbering>`})).then(docx=>check(docx,"style.list",done))
			)
			
			it("numbering",done=>
				docx4js.load(newDocx({"word/styles.xml":`
					<w:style w:type="numbering" w:default="1" w:styleId="NoList">
						<w:name w:val="No List"/>
						<w:uiPriority w:val="99"/>
						<w:semiHidden/>
						<w:unhideWhenUsed/>
					</w:style>`})).then(docx=>check(docx,"style.numbering",done))
			)
		})
		
		
		xdescribe("table", function(){
			it("table",done=>
				docx4js.load(newDocx({"word/styles.xml":`
				<w:style w:type="table" w:default="1" w:styleId="TableNormal">
					<w:name w:val="Normal Table"/>
					<w:uiPriority w:val="99"/>
					<w:semiHidden/>
					<w:unhideWhenUsed/>
					<w:tblPr>
						<w:tblInd w:w="0" w:type="dxa"/>
						<w:tblCellMar>
							<w:top w:w="0" w:type="dxa"/>
							<w:left w:w="108" w:type="dxa"/>
							<w:bottom w:w="0" w:type="dxa"/>
							<w:right w:w="108" w:type="dxa"/>
						</w:tblCellMar>
					</w:tblPr>
				</w:style>`})).then(docx=>check(docx,"style.table",done))
			)
		})
	})
})