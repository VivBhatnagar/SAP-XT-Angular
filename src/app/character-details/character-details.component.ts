import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnChanges {
  @Input() array;
  data;
  constructor() { }

  ngOnChanges() {
    if (!!this.array && this.array.results.length > 0 ) {
      this.data = this.array.results;
    console.log(this.array);
    }
  }
}
