import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  @Output() sortOrder = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  dropdownSelectEvent($event) {
    console.log($event);
    this.sortOrder.emit($event.target.value);
  }



}
