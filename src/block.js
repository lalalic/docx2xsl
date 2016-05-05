import Style from "./style/paragraph"

export default class Block extends require("./any"){
    tag="block"
	stylable=true
	static StyleProperties=Style.Properties
}
