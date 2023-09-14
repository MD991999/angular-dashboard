import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // Output() -used to share data from child to parent
  @Output() ontoggle=new EventEmitter()
  sidebartoggle(){
    // userdefined event ontoggle will occur only when its emit method been called 
this.ontoggle.emit()
// to resize elements in window
setTimeout(()=>{
  window.dispatchEvent(
    new Event('resize')
  )
},100) ;
}
}
