import Style from './converter'
import Paragraph from './paragraph'
import Inline from './inline'

/*
the priority of css rule should be aligned with word
*/

var gRow=/row|horz/i
export default class Table extends Style{
	constructor(){
		super(...arguments)
		this.target=this.wordModel.getTarget()
	}
	get PrioritiziedStyles(){//low-->high
		return 'nwCell,neCell,swCell,seCell,firstRow,lastRow,firstCol,lastCol,band1Vert,band2Vert,band1Horz,band2Horz'.split(',').reverse()
	}
	
	_getPropertiesConverter(category){
		if(this[category])
			return this[category]
		
		switch(category){
		case 'table':
			return this[category]=new this.constructor.Properties(this.style,this)
		case 'inline'://0012
			return this[category]=new Inline.Properties(this.doc.createStyle(this.styleId+".inline"),this)
		case 'paragraph'://0012
			return this[category]=new Paragraph.Properties(this.doc.createStyle(this.styleId+".block"),this)
		case 'cell'://0011
			return this[category]=new this.constructor.CellProperties(this.doc.createStyle(this.styleId+".table-cell", this.styleId+".*table-cell"),this)
		}
	}
	
	getTableSelector(){
		return '.'+Style.asCssID(this.wordModel.id)+'>tbody'
	}
	
	getPrioritizedSelector(){
		var selector=this.target
		for(var level=this.PrioritiziedStyles.indexOf(this.target),i=0;i<level;i++)
			selector=selector+'[x'+i+']';
		return selector
	}
}

function findTable(cell){
	return cell.parentNode.parentNode
}

function findRow(cell){
	return cell.parentNode
}

function is(table,row, cell, condition){
	return Array.from(table.querySelectorAll(condition)).indexOf(cell)!=-1
}

class Priorities{
	constructor(){
			
	}
	
}
	
Table.Properties=class Properties extends Style.Properties{
	constructor(){
		super(...arguments)
		this.priorities=new Priorities()
	}
	applyOn(cell){
		var table=findTable(cell), row=findRow(cell)
		'left,right,top,bottom'.split(",").forEach(a=>{
			let side=`border-${a}`
			if(this.priorities.has(side)){
				this.priorities.get(side).forEach(rule=>{
					if(!cell.hasAttribute(side))
						if(is(table, row, cell, rule.condition))
							cell.setAttribute(side,rule.value)
				})
			}
		})
	}
	
	
	cellStyle(condition, borderSide, value, priority){
		this.priorities[borderSide][priority].push({condition,value})
		return this.doc.createStyle(this.parent.styleId+".*table-cell")
	}
	tblBorders(x){
		x.left && this.cellStyle('tr>td:first-child','border-left',this._border(x.left),12) //0012
		x.right && this.cellStyle('tr>td:last-child','border-right',this._border(x.right),12)//0012
		x.top && this.cellStyle('tr:first-of-type>td','border-top',this._border(x.top),12)//0012
		x.bottom && this.cellStyle('tr:last-of-type>td','border-bottom',this._border(x.bottom),12)//0012
		
		if(x.insideV){
			var css=this._border(x.insideV)
			this.cellStyle('tr>td:not(:first-child):not(:last-child)','border-right',css,22)//0022
			this.cellStyle('tr>td:not(:first-child):not(:last-child)','border-left',css,22)//0022
			
			//@todo: are they needed?
			this.cellStyle('tr>td:last-child','border-left',css,12)//0012
			this.cellStyle('tr>td:first-child','border-right',css,12)//0012
		}
		
		if(x.insideH){
			var css=this._border(x.insideH)
			this.cellStyle('tr:not(:first-of-type):not(:last-of-type)>td','border-Top',css,22)//0022
			this.cellStyle('tr:not(:first-of-type):not(:last-of-type)>td','border-Bottom',css,22)//0022
			
			//@todo: are they needed?
			this.cellStyle('tr:last-of-type>td','border-left',css,12)//0012
			this.cellStyle('tr:first-of-type>td','border-right',css,12)//0012
		}
	}
	tblCellMar(x){
		for(var i in x)
			this.cellStyle('tr>td','padding'+this.upperFirst(i),(x[i]<1 && x[i]>0 ? 1 : x[i])+'pt',2)//0002
	}
	tblInd(x){
		x && this.set("margin-left",x+'pt')
	}
	tblW(x){
		x && x!='auto' && this.set("width",x)
	}
}
		

Table.RowProperties=class RowProperties extends Style.Properties{
	constructor(style,parent){
		super(...arguments)
		this.parent=parent
		this.doc=parent.doc
	}
}

Table.CellProperties=class CellProperties extends Style.Properties{
	constructor(style,parent){
		super(...arguments)
		this.parent=parent
		this.doc=parent.doc
	}
	tcBorders(x){
		var tableSelector=this.parent.getTableSelector(), selector=this.parent.getPrioritizedSelector()
		switch(this.parent.target){
			case 'firstRow':
			case 'lastRow':
			case 'band1Horz':
			case 'band2Horz':
				var style;
				x.left && (this.doc.createStyle(tableSelector+'>.'+selector+'>td:first-child').borderLeft=this._border(x.left));//0021
				x.right && (this.doc.createStyle(tableSelector+'>.'+selector+'>td:last-child').borderRight=this._border(x.right));//0021
				x.top && (this.doc.createStyle(tableSelector+'>.'+selector+'>td').borderTop=this._border(x.top));//0011
				x.bottom && (this.doc.createStyle(tableSelector+'>.'+selector+'>td').borderBottom=this._border(x.bottom));////0011
				x.insideV && ((style=this.doc.createStyle(tableSelector+'>.'+selector+'>td:not(:first-child):not(:last-child)')).borderRight=style.borderLeft=this._border(x.insideV));//0031
				break
			case 'firstCol':
			case 'lastCol':
			case 'band2Vert':
			case 'band1Vert':
				x.top && (this.doc.createStyle(tableSelector+'>tr:first-of-type>.'+selector).borderTop=this._border(x.top));//0021
				x.left && (this.doc.createStyle(tableSelector+'>tr:first-of-type>.'+selector).borderLeft=this._border(x.left));//0021
				x.right && (this.doc.createStyle(tableSelector+'>tr:first-of-type>.'+selector).borderRight=this._border(x.right));//0021
				
				x.bottom && (this.doc.createStyle(tableSelector+'>tr:last-of-type>.'+selector).borderBottom=this._border(x.bottom));//0021
				x.left && (this.doc.createStyle(tableSelector+'>tr:last-of-type>.'+selector).borderLeft=this._border(x.left));//0021
				x.right && (this.doc.createStyle(tableSelector+'>tr:last-of-type>.'+selector).borderRight=this._border(x.right));//0021
				
				
				x.left && (this.doc.createStyle(tableSelector+'>tr:not(:first-of-type):not(:last-of-type)>.'+selector).borderLeft=this._border(x.left));//0031
				x.right && (this.doc.createStyle(tableSelector+'>tr:not(:first-of-type):not(:last-of-type)>.'+selector).borderRight=this._border(x.right));//0031
				break
			default:
				x.left && (this.doc.createStyle(tableSelector+'>tr>.'+selector).borderLeft=this._border(x.left))//0011
				x.right && (this.doc.createStyle(tableSelector+'>tr>.'+selector).borderRight=this._border(x.right))//0011
				x.top && (this.doc.createStyle(tableSelector+'>tr>.'+selector).borderTop=this._border(x.top))//0011
				x.bottom && (this.doc.createStyle(tableSelector+'>tr>.'+selector).borderBottom=this._border(x.bottom))//0011
		}
	}
	shd(x){
		this.style.backgroundColor=x
	}
	gridSpan(x){
		this.parent.content.setAttribute('colspan',x)
	}
}
		
Table.TableStyles='firstRow,lastRow,firstCol,lastCol,band1Vert,band2Vert,band1Horz,band2Horz,neCell,nwCell,seCell,swCell'.split(',')