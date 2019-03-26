import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shop';

  list: any = [];
  @Output() mainListChange: EventEmitter<any> = new EventEmitter();


  displayList(list){
    console.log("Cart"+this.list);
    this.list = list;
    this.mainListChange.emit(this.list);
  }
}
