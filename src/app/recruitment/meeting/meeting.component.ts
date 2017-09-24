import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../animate/fly-in';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css'],

  animations: [flyIn]
})
export class MeetingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
