import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { flyIn } from '../animate/fly-in';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css'],

  animations: [flyIn]
})
export class RecruitmentComponent implements OnInit {

  keyword: String;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search(): void {
    this.router.navigate(['/recruitment/result', this.keyword]);
  }

}
