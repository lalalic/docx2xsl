import Style from './style/table'

export default class TableCell extends require("./any"){
	tag="table-cell"

	get tableStyleId(){//assert this.parent is a cell
		return this.parent.tableStyleId
	}

	get tableNamedStyleId(){
		return this.parent.tableNamedStyleId
	}

	getParentStyleIdOf(styleId){
		
	}

	convertStyle(){
		this.targetStyles=[]

		let directStyle=this.wordModel.getDirectStyle()

		let style=this.doc.createStyle(this.content)

		//direct style
		if(directStyle)
			directStyle.parse([new this.constructor.StyleProperties(style, this)])

		let isFirstRow=this.targetStyles.contains("firstRow") || this.wordModel.isFirstRow()
		let isFirstCol=this.targetStyles.contains("firstCol") || this.wordModel.isFirstCol()
		let isLastRow=this.targetStyles.contains("lastRow") || this.wordModel.isLastRow()
		let isLastCol=this.targetStyles.contains("lastCol") || this.wordModel.isLastCol()

		Object.assign(this,{isFirstRow, isFirstCol, isLastRow, isLastCol})
		//direct table style
		this.inheritStyle(this.tableStyleId)

		let namedStyleId=this.tableNamedStyleId
		while(namedStyleId){
			//named table style :12 target styles
			this.targetStyles.forEach(a=>this.inheritStyle(namedStyleId+"."+a))

			//named table style: table level
			this.inheritStyle(namedStyleId)

			namedStyleId=this.getParentStyleIdOf(namedStyleId)
		}
		return style
	}

	inheritStyle(styleId){
		if(!styleId) return
		//direct table style
		this.doc.createStyle(this.content, styleId+".*cell")

		if(this.isFirstRow)
			this.doc.createStyle(this.content, styleId+".*firstRow")
		else
			this.doc.createStyle(this.content, styleId+".*!firstRow")

		if(this.isFirstCol
			this.doc.createStyle(this.content, styleId+".*firstCol")
		else
			this.doc.createStyle(this.content, styleId+".*!firstCol")

		if(this.isLastRow
			this.doc.createStyle(this.content, styleId+".*lastRow")

		if(this.isLastCol
			this.doc.createStyle(this.content, styleId+".*lastCol")
	}

	static StyleProperties=class extends Style.CellProperties{
		cnfStyle(x){
			var targets=[]
			var styles='nwCell,neCell,swCell,seCell,firstRow,lastRow,firstCol,lastCol,band1Vert,band2Vert,band1Horz,band2Horz'.split(',')
			for(var i=0;i<12;i++){
				if(x.charAt(i)=='1')
					targets.unshift(styles[i])
			}
			this.parent.targetStyles=targets
		}
	}
}
