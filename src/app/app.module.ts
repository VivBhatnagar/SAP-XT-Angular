import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {FiltersModule} from './filters/filters.module';
import {CharacterDetailsModule} from './character-details/character-details.module';
import {SearchModule} from './search/search.module';
import {SortModule} from './sort/sort.module';
import {SelectedFiltersModule} from './selected-filters/selected-filters.module';

import {ConfigService} from './config.service';

import { AppComponent } from './app.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CharacterDetailsModule,
    FiltersModule,
    SearchModule,
    SortModule,
    SelectedFiltersModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
