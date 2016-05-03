import Paragraph from './paragraph'
import Inline from './inline'

export default class Document extends Paragraph{
	get styleId(){
		return "*"
	}
	
	get parentStyleId(){
		return null
	}
}