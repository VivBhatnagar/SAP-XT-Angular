import { Component, OnInit, Output, EventEmitter, OnChanges, Input } from '@angular/core';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnChanges {
  @Output() filterForm = new EventEmitter();
  filtersArray = [{
    species: [],
    gender: []
  }];
  constructor() { }

  ngOnChanges() {

  }
  hasFilterData(data) {
    const category = data.target.parentElement.parentElement.parentElement.querySelector('.filter-category').innerText.toLowerCase();
    if (data.target.checked === true) {
      this.filtersArray[0][category]
      .push(data.target.value);
} else if (this.filtersArray[0][category].includes(data.target.value)) {
      this.filtersArray[0][category]
      = this.filtersArray[0][category]
      .filter(item => item !== data.target.value ? true : false );
    }
    this.filterForm.emit(this.filtersArray[0]);
  }
}
