import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['../recruitment.child.component.css']
})
export class ResultComponent implements OnInit {

  key: String;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.key = route.snapshot.params['key'];
  }

  ngOnInit() {
  }

}
