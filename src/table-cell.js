import Style from './style/table'

export default class TableCell extends require("./any"){
	tag="table-cell"
	

	get tableStyleId(){//assert this.parent is a cell
		return this.parent.tableStyleId
	}
	convertStyle(){
		this.targetStyles=Array.from(this.parent.targetStyles ? this.parent.targetStyles : [])
		let directStyle=this.wordModel.getDirectStyle()
		//direct style
		if(directStyle)
			directStyle.parse([new this.constructor.StyleProperties(this.doc.createStyle(this.content), this)])

		let isFirstRow=this.targetStyles.includes("firstRow") || this.wordModel.isFirstRow()
		let isFirstCol=this.targetStyles.includes("firstCol") || this.wordModel.isFirstCol()
		let isLastRow=this.targetStyles.includes("lastRow") || this.wordModel.isLastRow()
		let isLastCol=this.targetStyles.includes("lastCol") || this.wordModel.isLastCol()

		Object.assign(this.content,{isFirstRow, isFirstCol, isLastRow, isLastCol})
		
		return this.doc.createStyle(this.content, this.tableStyleId, this.targetStyles.reverse())
	}
	
	static inheritStyle=inheritStyle

	static StyleProperties=class extends Style.CellProperties{
		cnfStyle(x){						
			var targets=this.parent.targetStyles
			x.forEach(a=>targets[Style.OrderedTargetStyles.indexOf(a)]=a)
			this.parent.targetStyles=targets.filter(a=>a)
		}
	}
}

function inheritStyle(styleId, cell, doc, targetStyles=[]){
	if(!styleId) return
	
	targetStyles.forEach(a=>inheritStyle(styleId+"."+a, cell, doc))
	
	if(cell.isFirstRow)
		doc.createStyle(cell, styleId+".*firstRow")
	else
		doc.createStyle(cell, styleId+".*!firstRow")

	if(cell.isFirstCol)
		doc.createStyle(cell, styleId+".*firstCol")
	else
		doc.createStyle(cell, styleId+".*!firstCol")

	if(cell.isLastRow)
		doc.createStyle(cell, styleId+".*lastRow")

	if(cell.isLastCol)
		doc.createStyle(cell, styleId+".*lastCol")
	
	doc.createStyle(cell, styleId+".*cell")
}
