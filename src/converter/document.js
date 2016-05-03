import Converter from "./any"

export default class Document extends Converter{
    static createDocument(){
        return $.parseXML(`<?xml version="1.0" encoding="UTF-8"?><root xmlns="http://www.w3.org/1999/XSL/Format"><layout-master-set/></root>`)
    }
    get data(){
        return `<?xml version="1.0" encoding="UTF-8"?>${this.root.outerHTML}`
    }

    convert(){
        this.doc=this.constructor.createDocument()
        this.root=this.doc.root=this.content=this.doc.documentElement
        this.layoutMasterSet=this.doc.layoutMasterSet=this.content.firstChild
		
		Object.assign(this.doc,{
			createStyle(id, pid){
				return Object.seal(new Style(id, pid))
			},
			
			getStyle(id){
				return Style.tree.get(id)
			}
		})
    }
}

class Style{
	constructor(id, pid){
		this.props=new Map()
		this.categories=new Map()
		this.id=id
		this.pid=pid
		
		id && Style.tree.set(id, this)
	}
	
	setAttribute(){// a unified API for element
		this.set(...arguments)
	}
	
	set(){
		this.props.set(...arguments)
	}
	
	addCategory(category,style){
		this.categories.set(category,style)
		return style
	}
	
	get parent(){
		return Style.tree.get(this.pid)
	}
	
	applyOn(content){
		console.log(`style ${this.id} applied`)
		this.props.forEach((v,k)=>{
			if(!content.hasAttribute(k))
				content.setAttribute(k,v)
		})
		if(this.parent)
			this.parent.applyOn(content)
	}

	static tree=new Map()
	static defaults=new Map()
}
