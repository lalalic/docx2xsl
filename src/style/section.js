import Style from './converter'

export default class Section extends Style.Properties{
	size(x){
		this.set("page-width",`${x.width}pt`)
		this.set("page-height", `${x.height}pt`)
	}
	margin(x){
		this.set("margin-left",x.left+'pt')
		this.set("margin-right",x.right+'pt')
		this.set("margin-top",x.top+'pt')
		this.set("margin-bottom",x.bottom+'pt')

		if(x.gutter){
			let gutter='padding'+(x.gutterAtRight ? 'Right' : 'Left')
			this.set(gutter,x[(x.gutterAtRight ? 'right' : 'left')]+x.gutter+'pt')
		}
	}

	cols(x){

	}
}
