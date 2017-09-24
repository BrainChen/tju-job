import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../animate/fly-in';

@Component({
  selector: 'app-brief',
  templateUrl: './brief.component.html',
  styleUrls: ['../recruitment.child.component.css'],

  animations: [flyIn]
})
export class BriefComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
