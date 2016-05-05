import Style from "./style/inline"

export default class Inline extends require("./any"){
    tag="inline"
	stylable=true
	static StyleProperties=Style.Properties
	
	_shouldIgnore(){
		return this.wordModel.isWebHidden() || this.wordModel.isHidden()
	}
}
