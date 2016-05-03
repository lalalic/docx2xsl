import Style from "../style/paragraph"

export default class Block extends require("./any"){
    tag="block"

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
}
