import Converter from "any"

export default class Document extends Converter{
    static createDocument(){
        return $.parseXML(`<?xml version="1.0" encoding="UTF-8"?><root xmlns="http://www.w3.org/1999/XSL/Format"><layout-masert-set/></root>`)
    }
    get data(){
        return `<?xml version="1.0" encoding="UTF-8"?>${this.root.outerHTML}`
    }

    convert(){
        this.doc=this.constructor.createDocument()
        this.root=this.content=this.doc.documentElement
        this.layoutMasterSet=this.content.firstChild
    }
}
