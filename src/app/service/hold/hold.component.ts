import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../animate/fly-in';
import { DataService } from '../../data.service';
import { HoldData } from './holdData';

@Component({
    selector: 'app-hold',
    templateUrl: './hold.component.html',
    styleUrls: ['./hold.component.css'],

    animations: [flyIn]
})
export class HoldComponent implements OnInit {

  holdData: HoldData = {
    src: '',
    content: ''
  };

  constructor(private dataService: DataService) {
    const self = this;
    this.dataService.fetchData(this.dataService.getUrl() + '/api/service/index/1').subscribe(function(data) {
      self.holdData = data;
      console.log(self.holdData);
    });
  }

  ngOnInit() {
  }

}
