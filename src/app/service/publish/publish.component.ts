import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../animate/fly-in';
import { DataService } from '../../data.service';

@Component({
    selector: 'app-publish',
    templateUrl: './publish.component.html',
    styleUrls: ['./publish.component.css'],

    animations: [flyIn]
})
export class PublishComponent implements OnInit {

  publishData: any = {
    src: '',
    content: ''
  }
  constructor(private dataService: DataService) {
    const self = this;
    this.dataService.fetchData(this.dataService.getUrl() + '/api/service/index/2').subscribe(function(data) {
      self.publishData = data;
    });
  }

  ngOnInit() {
  }

}
