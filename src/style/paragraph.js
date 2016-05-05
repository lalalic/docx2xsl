import Style from './converter'
import Inline from './inline'
import Numbering from './numbering'

export default class Paragraph extends Style{
	_getPropertiesConverter(category){
		if(this[category])
			return this[category]
		
		switch(category){
		case 'inline':
			return this[category]=new Inline.Properties(this.style)
		case 'paragraph':
			return this[category]=new this.constructor.Properties(this.style)
		case 'frame':
			this[category]=new this.constructor.Properties(this.style)
			return this[category]=new this.constructor.FrameProperties(this.style)
		case 'numbering':
			this[category]=new this.constructor.Properties(this.style)
			return this[category]=new Numbering.Properties(this.style)
		}
	}

	static Properties=class extends Style.Properties{
		jc(x){
			this.set("text-align",x)
		}
		ind(x){
			x.left && this.set("margin-left",x.left+'pt')
			x.right && this.set("margin-right",x.right+'pt')
			x.firstLine && this.set("text-indent",x.firstLine+'pt')
			x.hanging && this.set("text-indent",'-'+x.hanging+'pt')
		}
		spacing(x){
			x.bottom && this.set("margin-bottom",x.bottom+'pt')
			x.top && this.set("margin-top",x.top+'pt')

			x.lineHeight && this.set("line-height",x.lineHeight)
		}
	}

	static FrameProperties=class extends Style.Properties{

	}
}
