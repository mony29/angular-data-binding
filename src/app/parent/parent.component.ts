import { Component, Input, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  name : string = ' Mony';

  myData:string = '';

  gettingData(school: any) : void{
    // console.log(`Hello dads${school}`)
    this.myData = school
  }

  @ViewChild(ChildComponent) child !: ChildComponent

  message : boolean = true;
  // message : boolean = true;
}
