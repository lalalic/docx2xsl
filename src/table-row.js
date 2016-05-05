import Style from './style/table'

export default class TableRow extends require("./any"){
	tag="table-row"
	//stylable=true
	
	static StyleProperties=class extends Style.RowProperties{
		cnfStyle(x){
			var names=[], PrioritiziedStyles=Style.prototype.PrioritiziedStyles, level=-1, t
			for(var i=0;i<12;i++){
				if(x.charAt(i)=='1'){
					names.push(t=Style.TableStyles[i])
					if((t=PrioritiziedStyles.indexOf(t))>level)
						level=t
				}
			}
			names.length && Td.addClass(this.parent.content,names.join(' '));
			for(var i=0;i<level;i++)
				this.parent.content.setAttribute('x'+i,1)
		}
	}
}