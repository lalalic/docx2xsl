import Style from './style/table'

export default class TableRow extends require("./any"){
	tag="table-row"
	
	get tableStyleId(){//assert this.parent is a table
		return this.parent.styleId
	}
	
	get tableNamedStyleId(){
		return this.parent.wordModel.getStyleId()
	}

	
	static StyleProperties=class extends Style.RowProperties{
		cnfStyle(x){
			
		}
	}
}