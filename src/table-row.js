import Style from './style/table'

export default class TableRow extends require("./any"){
	tag="table-row"

	get tableStyleId(){//assert this.parent is a table
		return this.parent.styleId
	}
	
	convertStyle(){

		let directStyle=this.wordModel.getDirectStyle()

		
		let style=this.doc.createStyle(this.content)
		
		if(directStyle)
			directStyle.parse([new this.constructor.StyleProperties(style, this)])
		
		return style
	}

	static StyleProperties=class extends Style.RowProperties{
		cnfStyle(x){
			let targets=[]
			this.parent.targetStyles=targets
			x.forEach(a=>targets[Style.OrderedTargetStyles.indexOf(a)]=a)
		}
	}
}