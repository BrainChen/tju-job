import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animate/fly-in';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],

  animations: [flyIn]
})
export class ServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
