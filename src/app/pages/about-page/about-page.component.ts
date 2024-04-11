import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.less'
})
export class AboutPageComponent {

id_Count = 1;
width_px = 40;

 textArray = [{
    id : this.id_Count,
    text : '',
  }]



line_Switch(event:any){
  if(event.charCode == 13 || event.keyCode == 13){
    this.textArray.push({
      id : ++this.id_Count,
      text : '',
    })
    setTimeout(() => {
      document.getElementById('txt--'+this.id_Count)?.focus();
    }, 0);
  }
}

}

