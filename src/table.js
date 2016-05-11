import Style from "./style/table"

var uid=Date.now()
export default class Table extends require("./any"){
	tag="table"
	stylable=true
	styleId=`_table_${uid++}`
	static StyleProperties=Style.Properties
	
	convertStyle(){
		var width=this.wordModel.getColWidth()
		for(var i=0,cols=width.cols,sum=width.sum,len=cols.length;i<len;i++){
			let column=this.doc.createElement("table-column")
			this.content.appendChild(column)
			column.setAttribute("column-width",`${cols[i]*100/sum}%`)
		}
		var tbody=this.doc.createElement('table-body')
		this.content.appendChild(tbody)
		
		var table=this.content
		this.content=tbody
		table.setAttribute("table-layout","fixed")
		table.setAttribute("width","100%")
		
		let directStyle=this.wordModel.getDirectStyle()
		
		
		let style=this.doc.createStyle(this.content)
		
		if(directStyle)
			directStyle.parse([new this.constructor.StyleProperties(style, this)])
	}
}