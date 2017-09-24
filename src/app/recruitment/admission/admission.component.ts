import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../animate/fly-in';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css'],

  animations: [flyIn]
})
export class AdmissionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
