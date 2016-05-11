import Style from './style/table'

export default class TableCell extends require("./any"){
	tag="table-cell"
	
	get tableStyleId(){//assert this.parent is a cell
		return this.parent.tableStyleId
	}
	
	get tableNamedStyleId(){
		return this.parent.tableNamedStyleId
	}
	
	convertStyle(){
		this.targetStyles=[]
		
		let directStyle=this.wordModel.getDirectStyle()
		
		let style=this.doc.createStyle(this.content)
		
		//direct style
		if(directStyle)
			directStyle.parse([new this.constructor.StyleProperties(style, this)])
		
		//direct table style
		this.inheritStyle(this.tableStyleId)
		
		//named table style :12 target styles
		this.targetStyles.forEach(a=>{
			this.inheritStyle(this.tableNamedStyleId+"."+a)
		})
		
		//named table style: table level
		this.inheritStyle(this.tableNamedStyleId)
		
		return style
	}
	
	inheritStyle(styleId){
		if(!styleId) return
		//direct table style
		this.doc.createStyle(this.content, styleId+".*cell")
		
		if(this.wordModel.isFirstRow())
			this.doc.createStyle(this.content, styleId+".*firstRow")
		else
			this.doc.createStyle(this.content, styleId+".*!firstRow")
		
		if(this.wordModel.isFirstCol())
			this.doc.createStyle(this.content, styleId+".*firstCol")
		else
			this.doc.createStyle(this.content, styleId+".*!firstCol")
		
		if(this.wordModel.isLastRow())
			this.doc.createStyle(this.content, styleId+".*lastRow")
		
		if(this.wordModel.isLastCol())
			this.doc.createStyle(this.content, styleId+".*lastCol")
	}
	
	static StyleProperties=class extends Style.CellProperties{
		cnfStyle(x){
			var targets=[]
			var styles='nwCell,neCell,swCell,seCell,firstRow,lastRow,firstCol,lastCol,band1Vert,band2Vert,band1Horz,band2Horz'.split(',')
			for(var i=0;i<12;i++){
				if(x.charAt(i)=='1')
					targets.push(styles[i])
			}
			this.parent.targetStyles=targets
		}
	}
}