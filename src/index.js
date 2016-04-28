import docx4js from "docx4js"

var converters={
    "*":                require("./converter/any"),
    "document":         require("./converter/document"),
    "section":          require("./converter/simple-page-master")
}

export default function docx2xsl(aDocx, option){
    return docx4js.load(aDocx).then(docx=>{
        let xslDoc=docx.parse(docx4js.createVisitorFactory(converters))
        return {
            get data(){
                return xslDoc.data
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
