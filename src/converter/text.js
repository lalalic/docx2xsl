export default class Text extends require("./any"){
    convert(){
        this.parent.content.appendChild(this.doc.createTextNode(this.wordModel.getText()))
    }
}
