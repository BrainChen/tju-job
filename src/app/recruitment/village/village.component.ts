import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../animate/fly-in';

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css'],

  animations: [flyIn]
})
export class VillageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
