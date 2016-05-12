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
			var targets=[]
			var styles='nwCell,neCell,swCell,seCell,firstRow,lastRow,firstCol,lastCol,band1Vert,band2Vert,band1Horz,band2Horz'.split(',')
			for(var i=0;i<12;i++){
				if(x.charAt(i)=='1')
					targets[i]=styles[i]
			}
			this.parent.targetStyles=targets
		}
	}
}