export default class Link extends require("./any"){
	tag="basic-link"
	
	convert(){
		super.convert(...arguments)
		var link=this.wordModel.getLink()
		switch(typeof(link)){
		case 'string':
			if(link.startsWith('#'))
				this.content.setAttribute("internal-destination",link.substring(1))
			else
				this.content.setAttribute("external-destination",link)
		break
		default:
		
		break
		}
	}
}