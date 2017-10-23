import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { flyIn } from '../../animate/fly-in';

import { DataService } from '../../data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['../recruitment.child.component.css', './result.component.css', '../meeting/meeting.component.css'],

  animations: [flyIn],
  encapsulation: ViewEncapsulation.None
})
export class ResultComponent implements OnInit {
  resultData: any = {
    infor: [
    {
      id: 0,
      title: '无相关结果',
      date: '1970-01-01',
      click: 0
    },
    {
      id: 0,
      title: '无相关结果',
      date: '1970-01-01',
      click: 0
    },
    {
      id: 0,
      title: '无相关结果',
      date: '1970-01-01',
      click: 0
    },
    {
      id: 18168,
      title: '无相关结果',
      date: '1970-01-01',
      click: 0
    },
    {
      id: 0,
      title: '无相关结果',
      date: '1970-01-01',
      click: 0
    },
    ],
    meeting: [
    {
      id: 0,
      title: 'loading',
      held_date: '1970-01-01',
      held_time: '00:00',
      place: '天津大学',
      date: '1970-01-01',
      click: 0
    },
    {
      id: 0,
      title: '无相关结果',
      held_date: '1970-01-01',
      held_time: '00:00',
      place: '天津大学',
      date: '1970-01-01',
      click: 0
    },
    {
      id: 97,
      title: '无相关结果',
      held_date: '1970-01-01',
      held_time: '00:00',
      place: '天津大学',
      date: '1970-01-01',
      click: 0
    },
    {
      id: 0,
      title: '无相关结果',
      held_date: '1970-01-01',
      held_time: '00:00',
      place: '天津大学',
      date: '1970-01-01',
      click: 0
    },
    {
      id: 0,
      title: '无相关结果',
      held_date: '1970-01-01',
      held_time: '00:00',
      place: '天津大学',
      date: '1970-01-01',
      click: 0
    }
    ]
    }
  op: Boolean = true;
  key: String;

  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) {
    const self = this;
    this.key = route.snapshot.params['key'];
    this.updateResult(this.key);
  }

  ngOnInit() {
    const self = this;
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
        self.updateResult(event.toString().slice(event.toString().lastIndexOf('/') + 1, -2));
    });
  }

  option(): void {
    this.op = !this.op;
  }

  updateResult(index): void {
    const self = this;
    this.dataService.fetchData(this.dataService.getUrl() + '/api/search/' + index).subscribe(function(data) {
      self.resultData = data;
    });
  }

}
