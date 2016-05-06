import docx4js from "docx4js"

var converters={
    "*":                require("./any")
    ,"document":         require("./document")
    ,"section":          require("./simple-page-master")
    ,"paragraph":        require('./block')
	,"heading":			 require('./heading')
    ,"inline":           require("./inline")
    ,"text":             require("./text")
	
	,'hyperlink': 		require('./link')
	,'bookmarkStart': 	require('./location')
	
	,'table':			require('./table')
	,'row':				require('./table-row')
	,'cell':			require('./table-cell')
	
	,'list':			require('./list')
	
	
	
	,'style.document':	require('./style/document')
	,'style.inline':		require('./style/inline')
	//,'style.numbering.definition':	require('./style/list')
	,'style.paragraph':	require('./style/paragraph')
	,'style.table':		require('./style/table')	
}

export default function docx2xsl(aDocx, option){
    return docx4js.load(aDocx).then(docx=>{
        let xslDoc=docx.parse(docx4js.createVisitorFactory(converters))
		xslDoc.release()
        return {
            get data(){
                return xslDoc.data
            },
			
			get dom(){
				return xslDoc.doc
			},

            save(file){
                let data=this.data
                if($.isNode){
            		let fs="fs"
            		require(fs).writeFile(file||`${Date.now()}.xml`,data)
            	}else{
            		let url = window.URL.createObjectURL(data)
            		let link = document.createElement("a");
            		document.body.appendChild(link)
            		link.download = `${file||'new'}.xml`;
            		link.href = url;
            		link.click()
            		document.body.removeChild(link)
            	}
            }
        }
    })
}

Object.assign(docx2xsl,{converters})
