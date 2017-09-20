import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animate/fly-in';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css'],

  animations: [flyIn]
})
export class RecruitmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
