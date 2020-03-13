import { Component, OnChanges, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Data} from './data.interface';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  array;
  master;
  selectFilterArray;
  constructor(private content: ConfigService) {}

  ngOnInit() {
    this.content.getConfig()
    .subscribe(data => {
      this.array = data;
      this.master = this.array.results;
    });
   }

  catchSortEvent(sortingOrder) {
    let sortedData = [];
    if (sortingOrder === 'Ascending') {
      sortedData = this.array.results.sort((a, b) => (a.id > b.id) ? 1 : -1);
    } else {
      sortedData = this.array.results.sort((a, b) => (b.id > a.id) ? 1 : -1);
    }
    this.array.results = sortedData;
  }

  catchFiltersArray(selectedFilter) {
    this.selectFilterArray = Object.values(selectedFilter);
    let filterData = [];
    for(const key in selectedFilter) {
        if (key === 'species' || key === 'gender' ) {
          if (selectedFilter[key].length > 0) {
            selectedFilter[key].forEach((term) => {
              if (filterData.length === 0) {
                filterData = this.master.filter((item) => {
                  if (item[key].toLowerCase() === term) {
                      return true;
                  } else {
                    return false;
                  }
                });
              } else {
                filterData = filterData.filter((item) => {
                  if (item[key].toLowerCase() === term) {
                      return true;
                  } else {
                    return false;
                  }
                });
              }
          });
          } else if (selectedFilter["species"].length === 0 && selectedFilter["gender"].length === 0) {
           filterData = this.master;
        }
       }
    }
    this.array.results = filterData;
  }

  catchSearchEvent(searchTerm) {
    let searchData = [];
    if (searchTerm.trim() !== '') {
    searchData = this.array.results.filter((item) => {
      if (item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
         return true;
      } else {
        return false;
      }
    });
    this.array.results = searchData;
  } else {
    this.array.results = this.master.results;
  }
  }
 }
 