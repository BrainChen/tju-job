import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../animate/fly-in';

@Component({
    selector: 'app-hold',
    templateUrl: './hold.component.html',
    styleUrls: ['./hold.component.css'],

    animations: [flyIn]
})
export class HoldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
