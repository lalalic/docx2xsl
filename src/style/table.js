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
		if(this.target=="table")
			this.target=""
	}

	get styleId(){
		return this.wordModel.id+(this.target ? `.${this.target}` : "")
	}

	_getPropertiesConverter(category){
		if(this[category])
			return this[category]

		switch(category){
		case 'table':
			return this[category]=new this.constructor.Properties(this.style,this)
		case 'inline'://0012
			return this[category]=new Inline.Properties(this.doc.createStyle(this.styleId+".*inline"),this)
		case 'paragraph'://0012
			return this[category]=new Paragraph.Properties(this.doc.createStyle(this.styleId+".*block"),this)
		case 'cell'://0011
			return this[category]=new this.constructor.CellProperties(this.doc.createStyle(this.styleId+".*cell"),this)
		}
	}
	
	static OrderedTargetStyles="band1Vert,band2Vert,band1Horz,band2Horz,firstRow,lastRow,firstCol,lastCol,nwCell,neCell,swCell,seCell".split(",")
}

Table.Properties=class Properties extends Style.Properties{
	tblBorders(x){
		let parentStyleId=this.parent.styleId
		x.left && this.doc.createStyle(parentStyleId+".*firstCol").set("border-left",this._border(x.left))

		x.right && this.doc.createStyle(parentStyleId+".*lastCol").set("border-right",this._border(x.right))

		x.top && this.doc.createStyle(parentStyleId+".*firstRow").set("border-top",this._border(x.top))

		x.bottom && this.doc.createStyle(parentStyleId+".*lastRow").set("border-bottom",this._border(x.bottom))

		x.insideV && this.doc.createStyle(parentStyleId+".*!firstCol").set("border-left",this._border(x.insideV))

		x.insideH && this.doc.createStyle(parentStyleId+".*!firstRow").set("border-top",this._border(x.insideH))
	}
	tblCellMar(x){
		let style=this.doc.createStyle(this.parent.styleId+".*cell")
		Object.keys(x).forEach(i=>style.set(`padding-${i}`,(x[i]<1 && x[i]>0 ? 1 : x[i])+'pt'))
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
		let parentStyleId=this.parent.styleId
		switch(this.parent.target){
			case 'firstRow':
			case 'lastRow':
			case 'band1Horz':
			case 'band2Horz':
				x.top && this.set("border-top", this._border(x.top))
				x.bottom && this.set("border-bottom", this._border(x.bottom))
				x.left && this.doc.createStyle(`${parentStyleId}.*firstCol`).set("border-left",this._border(x.left))
				x.right && this.doc.createStyle(`${parentStyleId}.*lastCol`).set("border-right",this._border(x.right))
				x.insideV && this.doc.createStyle(parentStyleId+".*!firstCol").set("border-left",this._border(x.insideV))
			break
			case 'firstCol':
			case 'lastCol':
			case 'band2Vert':
			case 'band1Vert':
				x.right && this.set("border-right", this._border(x.right))
				x.left && this.set("border-left", this._border(x.left))
				x.top && this.doc.createStyle(parentStyleId+".*firstRow").set("border-top",this._border(x.top))
				x.bottom && this.doc.createStyle(parentStyleId+".*lastRow").set("border-bottom",this._border(x.bottom))
				x.insideV && this.doc.createStyle(parentStyleId+".*!firstCol").set("border-left",this._border(x.insideV))
			break
			default:
				x.top && this.set("border-top", this._border(x.top))
				x.bottom && this.set("border-bottom", this._border(x.bottom))
				x.right && this.set("border-right", this._border(x.right))
				x.left && this.set("border-left", this._border(x.left))
			break
		}
	}
	shd(x){
		this.set("background-color",x)
	}
	gridSpan(x){
		this.parent.content.setAttribute('cols-pan',x)
	}
}