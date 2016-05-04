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

        let styles=[] ,wrappers=new Map()
        wrappers.set('*',this.root)

		Object.assign(this.doc,{
			createStyle(id, pid){
                let wrapper=this.createElement("wrapper")
                let parent=wrappers.get(pid)
                if(parent)
                    parent.appendChild(wrapper)
                else
                    styles.push(wrapper)

                wrappers.set(id,wrapper)
                return wrapper
			},

            applyStyleOn(el,styleId){
                let style=wrappers.get(styleId)
                let outerWrapper, innerWrapper
                if(style){
                    innerWrapper=style.clone()
                    let current=innerWrapper
                    while(style.parentNode){
                        outerWrapper=style.parentNode.clone()
                        outerWrapper.appendChild(current)
                        current=outerWrapper
                        style=style.parentNode
                    }
                }else{

                }
                el.parentNode.appendChild(outerWrapper)
                innerWrapper.appendChild(el)
            }

			__release(){
                wrappers.clear()
                delete styles
                delete wrappers
            }
		})
    }

    release(){
        this.doc.__release()
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
