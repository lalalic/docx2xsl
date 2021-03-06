import Style from './converter'
import Inline from './inline'
import Numbering from './numbering'

export default class Paragraph extends Style{
	_getPropertiesConverter(category){
		if(this[category])
			return this[category]
		
		switch(category){
		case 'inline'://rPr
			return this[category]=new Inline.Properties(this.style)
		case 'paragraph'://pPr
			return this[category]=new this.constructor.Properties(this.style)
		case 'frame'://framePr
			this[category]=new this.constructor.Properties(this.style)
			return this[category]=new this.constructor.FrameProperties(this.style)
		case 'numbering'://numPr
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
		
		pBdr(x){
			Object.keys(x).forEach(key=>this.set(`border-${key}`,this._border(x[key])))
		}
	}

	static FrameProperties=class extends Style.Properties{

	}
}
