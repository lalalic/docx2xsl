import Style from "../style/paragraph"

export default class Block extends require("./any"){
    tag="block"

    convertStyle(){
        super.convertStyle(...arguments)
		var style=this.wordModel.getDirectStyle()
		style && style.parse([new Style.Properties(this.content, this)])
    }
}
