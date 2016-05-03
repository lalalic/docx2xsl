import Style from "../style/inline"

export default class Inline extends require("./any"){
    tag="inline"

    convertStyle(){
        super.convertStyle(...arguments)
		
		let directStyle=this.wordModel.getDirectStyle()
			,namedStyleId=this.wordModel.getStyleId()
			,style=null
			
		if(directStyle){
			style=this.doc.createStyle(null,namedStyleId)
			directStyle.parse([new Style.Properties(style, this)])
		}else 
			style=this.doc.getStyle(namedStyleId)
		
		style && style.applyOn(this.content)
    }
	
	_shouldIgnore(){
		return this.wordModel.isWebHidden() || this.wordModel.isHidden()
	}
}
