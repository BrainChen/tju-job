import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
      id: 18168,
      title: 'loading',
      date: '1970-01-01',
      click: 0
    },
    {
      id: 18168,
      title: 'loading',
      date: '1970-01-01',
      click: 0
    },
    {
      id: 18168,
      title: 'loading',
      date: '1970-01-01',
      click: 0
    },
    {
      id: 18168,
      title: 'loading',
      date: '1970-01-01',
      click: 0
    },
    {
      id: 18168,
      title: 'loading',
      date: '1970-01-01',
      click: 0
    },
    ],
    meeting: [
    {
      id: 97,
      title: 'loading',
      held_date: '1970-01-01',
      held_time: '00:00',
      place: '天津大学',
      date: '1970-01-01',
      click: 0
    },
    {
      id: 97,
      title: 'loading',
      held_date: '1970-01-01',
      held_time: '00:00',
      place: '天津大学',
      date: '1970-01-01',
      click: 0
    },
    {
      id: 97,
      title: 'loading',
      held_date: '1970-01-01',
      held_time: '00:00',
      place: '天津大学',
      date: '1970-01-01',
      click: 0
    },
    {
      id: 97,
      title: 'loading',
      held_date: '1970-01-01',
      held_time: '00:00',
      place: '天津大学',
      date: '1970-01-01',
      click: 0
    },
    {
      id: 97,
      title: 'loading',
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

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    const self = this;
    this.key = route.snapshot.params['key'];
    this.dataService.fetchData(this.dataService.getUrl() + '/api/search/' + this.key).subscribe(function(data) {
      self.resultData = data;
    });
  }

  ngOnInit() {
  }

  option(): void {
    this.op = !this.op;
  }

}
