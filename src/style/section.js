import Style from './converter'

export default class Section extends Style.Properties{
	size(x){
		this.setStyle("page-width",`${x.width}pt`)
		this.setStyle("page-height", `${x.height}pt`)
	}
	margin(x){
		this.setStyle("margin-left",x.left+'pt')
		this.setStyle("margin-right",x.right+'pt')
		this.setStyle("margin-top",x.top+'pt')
		this.setStyle("margin-bottom",x.bottom+'pt')

		if(x.gutter){
			let gutter='padding'+(x.gutterAtRight ? 'Right' : 'Left')
			this.setStyle(gutter,x[(x.gutterAtRight ? 'right' : 'left')]+x.gutter+'pt')
		}
	}

	cols(x){

	}
}
