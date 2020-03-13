import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedFiltersComponent } from './selected-filters.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SelectedFiltersComponent],
  exports: [SelectedFiltersComponent]
})
export class SelectedFiltersModule { }
