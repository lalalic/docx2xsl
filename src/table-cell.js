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
			return;
			var names=[], PrioritiziedStyles=Style.prototype.PrioritiziedStyles, level=-1, t
			for(var i=0;i<12;i++){
				if(x.charAt(i)=='1'){
					names.push(t=Style.TableStyles[i])
					if((t=PrioritiziedStyles.indexOf(t))>level)
						level=t
				}
			}
			names.length && Td.addClass(this.parent.content,names.join(' '));
			for(var i=0;i<level;i++)
				this.parent.content.setAttribute('x'+i,1)
		}
	}
}