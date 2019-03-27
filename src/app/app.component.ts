import { Component, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shop';
  refresh: Subject<any> = new Subject();

  list: any = [];
  //@Output() mainListChange: EventEmitter<any> = new EventEmitter();


  displayList(list){
    console.log("Cart"+this.list);
    this.list = list;
    //this.mainListChange.emit(this.list);
    this.refresh.next();
  }
}
