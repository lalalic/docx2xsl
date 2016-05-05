export default class Document extends require("./any"){
    static createDocument(){
        return $.parseXML(`<?xml version="1.0" encoding="UTF-8"?><root xmlns="http://www.w3.org/1999/XSL/Format"><layout-master-set/><bookmark-tree/></root>`)
    }
    get data(){
        return `<?xml version="1.0" encoding="UTF-8"?>${this.root.outerHTML}`
    }

    convert(){
        this.doc=this.constructor.createDocument()
        this.root=this.doc.root=this.content=this.doc.documentElement
        this.layoutMasterSet=this.doc.layoutMasterSet=this.content.firstChild
		this.bookmarkTree=this.doc.bookmarkTree=this.root.querySelector("bookmark-tree")
		

        let styles=[] ,wrappers=new Map()
        wrappers.set('*',this.root)

		Object.assign(this.doc,{
			createStyle(id, pid){
				if(typeof(id)=='object'){//create direct style for element
					let el=id
					//console.log(`creating direct style${pid ? ` with named style ${pid}` : ""}`)
					this.applyStyleOn(el,pid)
					return el
				}

				//console.log(`creating style ${id}${pid ? ` with parent ${pid}` : ""}`)

				if(id=='*')
					return this.root
				
				let wrapper=this.createElement("wrapper")
                let parent=wrappers.get(pid)
                if(parent)
                    parent.appendChild(wrapper)
                else
                    styles.push(wrapper)

                wrappers.set(id,wrapper)
				wrapper.set=wrapper.setAttribute
                return wrapper
			},

            applyStyleOn(el,styleId){
				
                let style=wrappers.get(styleId)
                let outerWrapper, innerWrapper
                if(style){
					outerWrapper=innerWrapper=style.cloneNode()
                    let current=innerWrapper
                    while(style.parentNode){
                        outerWrapper=style.parentNode.cloneNode()
                        outerWrapper.appendChild(current)
                        current=outerWrapper
                        style=style.parentNode
                    }
					el.parentNode.appendChild(outerWrapper)
					innerWrapper.appendChild(el)
                }

				return el
            }
		})
    }
	
	release(){
		require("./list").release(this)
	}
}
