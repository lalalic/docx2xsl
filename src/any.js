export default class Any{
	stylable=false
	
    constructor(wModel, parentConverter){
        this.wordModel=wModel
		this.parent=parentConverter
		this.doc= parentConverter && parentConverter.doc
		this.content=null;
        this.tag=null
    }

    /**interface API: happen when just word model identified, without children appended yet*/
	visit(){
		if(!this.parent || this.parent.content)
			return this.convert(...arguments)
	}
	convert(){
        this.content=this.createElement()
		if(this.content){
			this.parent.content.appendChild(this.content)
		}else
			this.content=this.parent && this.parent.content || null

		this.convertStyle()
    }

    createElement(){
		switch(typeof(this.tag)){
		case 'string':
			return this.doc.createElement(this.tag)
		case 'function':
			return this.doc.createElement(this.tag())
		default:
			return null
		}
	}

    convertStyle(el){
		if(!this.stylable)
			return
		let directStyle=this.wordModel.getDirectStyle()
			,namedStyleId=this.wordModel.getStyleId()
		
		let style=this.doc.createStyle(el||this.content,namedStyleId)
		
		if(directStyle)
			directStyle.parse([new this.constructor.StyleProperties(style, this)])
		
		return style
	}

    _shouldIgnore(){
        return false
    }
}
