import Style from './converter'

export default class Inline extends Style{
	_getPropertiesConverter(){
		if(typeof(this.inline)=='undefined')
			this.inline=new this.constructor.Properties(this.style)
		return this.inline
	}
	
	static Properties=class extends Style.Properties{
		rFonts(x){
			x.ascii && this.set("font-family",x.ascii)
		}
		b(x){
			this.set("font-weight",700)
		}
		sz(x){
			this.set("font-size", x+'pt')
		}
		color(x){
			this.set("color",x)
		}
		i(x){
			this.set("font-style",'italics')
		}
		u(x){
			this.set("text-decoration",'underline')
		}
		bdr(x){
			this.set("border",this._border(x))
		}
		lang(x){
			
		}
		vertAlign(x){
			switch(x){
			case 'superscript':
				this.set("vertical-align",'super')
			break
			case 'subscript':
				this.set("vertical-align",'sub')
			break
			}
		}
		highlight(x){
			this.set("background-color",x)
		}
	}
}