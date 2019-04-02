import { Component, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit{
  @ViewChild('appTitle')
  child: ElementRef;

  title = "shop";
  refresh: Subject<any> = new Subject();
  list: any = [];

  displayList(list){
    this.list = list;
  }

  ngAfterViewInit() {
    this.child.nativeElement.textContent = "Shopping App";
  }
}
