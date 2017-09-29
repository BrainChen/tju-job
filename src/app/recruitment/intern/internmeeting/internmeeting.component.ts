import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../../animate/fly-in';

@Component({
  selector: 'app-internmeeting',
  templateUrl: './internmeeting.component.html',
  styleUrls: ['../../recruitment.child.component.css'],

  animations: [flyIn]
})
export class InternmeetingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
