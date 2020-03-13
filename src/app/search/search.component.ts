import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchTerm = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

    searchTermMethod(event) {
    this.searchTerm.emit(event);
    }
}
