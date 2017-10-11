import { Component } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-relativelink',
  templateUrl: './relativelink.component.html',
  styleUrls: ['./relativelink.component.css']
})

export class RelativelinkComponent {
  relativeData: object;
  constructor(private dataService: DataService) {
    const self = this;
    this.dataService.fetchData(this.dataService.getUrl() + '/api/link').subscribe(function(data) {
      self.relativeData = data;
    })
  }
}
