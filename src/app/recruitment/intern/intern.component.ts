import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../animate/fly-in';

@Component({
  selector: 'app-intern',
  templateUrl: './intern.component.html',
  styleUrls: ['../recruitment.child.component.css'],

  animations: [flyIn]
})
export class InternComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
