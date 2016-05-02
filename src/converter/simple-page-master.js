import Converter from "./any"
import Style from "../style/section"

var uid=Date.now()
export default class SimplePageMaster extends Converter{
    tag="simple-page-master"

    convert(){
        this.pageMaster=this.createElement()
        this.masterName=`master_${uid++}`
        this.pageMaster.setAttribute("master-name",this.masterName)

        this.pageSequence=this.doc.createElement("page-sequence")
        this.pageSequence.setAttribute("master-reference", this.masterName)

        this.content=this.doc.createElement("flow")
        this.content.setAttribute("flow-name","xsl-region-body")

        this.doc.layoutMasterSet.appendChild(this.pageMaster)
        this.doc.root.appendChild(this.pageSequence)
        this.pageSequence.appendChild(this.content)

        this.pageMaster.appendChild(this.doc.createElement("region-body"))
        this.pageMaster.appendChild(this.doc.createElement("region-before"))
        this.pageMaster.appendChild(this.doc.createElement("region-after"))

        this.convertStyle()
    }

    convertStyle(){
        var style=this.wordModel.getDirectStyle()
		style && style.parse([new Style(this.pageMaster, this)])
    }
}
