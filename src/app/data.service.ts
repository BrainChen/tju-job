import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  showAbout: Boolean = false;

  constructor(private http: Http) {}

  fetchData(url) {
    return this.http.get(url).map(res => res.json());
  }

  toggleShow(bool): void {
    this.showAbout = bool;
  }

}
