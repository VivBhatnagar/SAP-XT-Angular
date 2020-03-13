import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-selected-filters',
  templateUrl: './selected-filters.component.html',
  styleUrls: ['./selected-filters.component.css']
})
export class SelectedFiltersComponent implements OnChanges {
  @Input() selectedFilters;
  items;
  constructor() {  }

  ngOnChanges() {
    console.log(this.selectedFilters, 'if k bahar wala');

    // if (!!this.selectedFilters && Object.values(this.selectedFilters).length > 0 ) {

    this.items = this.selectedFilters;
    console.log(this.items);
    // }
  }
}
