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
					if(el.tagName=="table-cell")
						this.applyTableStyleOnCell(...arguments)
					else
						this.applyStyleOn(...arguments)
					return el
				}

				//console.log(`creating style ${id}${pid ? ` with parent ${pid}` : ""}`)

				if(id=='*')
					return this.root
				
				if(wrappers.has(id))
					return wrappers.get(id)
				
				let wrapper=this.createElement("wrapper")
                let parent=wrappers.get(pid)
                if(parent)
                    parent.appendChild(wrapper)
                else
                    styles.push(wrapper)

                wrappers.set(id,wrapper)
				wrapper.set=wrapper.setAttribute
				wrapper.sid=id
                return wrapper
			},

            applyStyleOn(el,styleId){
                let style=wrappers.get(styleId)
                while(style){
					Array.from(style.attributes).forEach(a=>{
						let {name,value}=a
						if(!el.hasAttribute(name)){
							if(typeof(value)=='function')
								value(el)
							else
								el.setAttribute(name,value)
						}
					})
					style=style.parentNode
                }
				
				//@todo: toggle attributes

				return el
            },
			
			applyTableStyleOnCell(cell, styleId, targetStyles){
				if(styleId && styleId.indexOf(".*")!=-1)
					return this.applyStyleOn(cell,styleId)
				
				let style=wrappers.get(styleId)
				let inheritStyle=require("./table-cell").inheritStyle
				while(style){
					inheritStyle(style.sid, cell, this, targetStyles)
					style=style.parentNode
				}
				return cell
			}
		})
    }
	
	release(){
		require("./list").release(this)
	}
}
