import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Data} from './data.interface';
import {Observable} from 'rxjs';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
  configUrl = 'https://rickandmortyapi.com/api/character/';

  getConfig(): Observable<Data[]> {
    return this.http.get<Data[]>(this.configUrl);
  }
}
