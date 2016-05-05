export default class Location extends require("./any"){
	tag="inline"
	convert(){
		if(this.parent.content.childNodes.length==0 && !this.parent.content.id){
			this.parent.content.setAttribute("id",this.wordModel.getName())
		}else{
			super.convert(...arguments)
			this.content.setAttribute("id",this.wordModel.getName())
		}
			
	}
}