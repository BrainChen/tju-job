import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../animate/fly-in';

@Component({
  selector: 'app-civil',
  templateUrl: './civil.component.html',
  styleUrls: ['./civil.component.css'],

  animations: [flyIn]
})
export class CivilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
