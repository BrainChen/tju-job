import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../animate/fly-in';

@Component({
    selector: 'app-publish',
    templateUrl: './publish.component.html',
    styleUrls: ['./publish.component.css'],

    animations: [flyIn]
})
export class PublishComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
