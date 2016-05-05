export default class List extends require("./block"){
	/**
	**	list-block can NOT be nested
	*/
	convert(){
		var elParent=this.parent.content, ul=elParent.lastChild;
		var listStyle=this.wordModel.getNumberingStyle()
		var numId=listStyle.id, level=this.wordModel.getLevel()
		
		if(!ul || ul.tagName!='list-block' 		//not list
			|| ul.getAttribute("id")!=numId 	//not same list
			|| ul.getAttribute('level')!=level){//not same level
			ul=this.doc.createElement("list-block")
			ul.setAttribute("id",listStyle.id)
			ul.setAttribute('level',level)
			elParent.appendChild(ul)
		}
		
		this.listBlock=ul
		
		
		this.listItem=this.doc.createElement('list-item')
		this.listItemLabel=this.doc.createElement("list-item-label")
		this.listItemLabel.appendChild(this.labelContent=this.doc.createElement("block"))
		this.listItemLabel.setAttribute("end-indent","label-end()")
		this.labelContent.appendChild(this.doc.createTextNode("*"))
		
		this.listItemBody=this.doc.createElement("list-item-body")
		this.listItemBody.setAttribute("start-indent","body-start()")
		
		this.listBlock.appendChild(this.listItem)
		this.listItem.appendChild(this.listItemLabel)
		this.listItem.appendChild(this.listItemBody)
		
		this.listItemBody.appendChild(this.doc.createElement("block"))
		this.listItemBody.firstChild.appendChild(this.content=this.createElement())
		
		this.convertStyle(this.content, this.labelContent)
	}
	
	convertStyle(body,label){
		super.convertStyle(body)
		
	}
	
	static release(doc){
		doc.root.querySelectorAll("list-block")
			.forEach(a=>["level","id"]
				.forEach(b=>a.removeAttribute(b)))
	}
}

