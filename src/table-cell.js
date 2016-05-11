import Style from './style/table'

export default class TableCell extends require("./any"){
	tag="table-cell"
	
	get tableStyleId(){//assert this.parent is a cell
		return this.parent.tableStyleId
	}
	
	convertStyle(){
		let directStyle=this.wordModel.getDirectStyle()
		
		let style=this.doc.createStyle(this.content, this.tableStyleId+".table-cell")
		
		if(directStyle)
			directStyle.parse([new this.constructor.StyleProperties(style, this)])
		
		return style
	}
	
	static StyleProperties=class extends Style.CellProperties{
		tcBorders(x){
			Object.keys(x).forEach(a=>this.set(`border-${a}`,this._border(x[a])))
		}
		
		cnfStyle(x){
			
		}
	}
}