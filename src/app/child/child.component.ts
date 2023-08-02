import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() getName : string = '';

  @Output() sentMessage = new EventEmitter<string>();


  passingDataToParent(){
    this.sentMessage.emit('Good Morning')
  }


  childData : string = "KSHRD";
}
