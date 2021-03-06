import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../../data.service';
import { flyIn } from '../../animate/fly-in';
import { ActivatedRoute } from '@angular/router';

import { AdmissionData } from './admissionData';
import { Content } from '../../content';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['../recruitment.child.component.css'],

  animations: [flyIn],
  encapsulation: ViewEncapsulation.None
})
export class AdmissionComponent implements OnInit {

    content: Content = {
        id: 1,
        title: 'loading',
        content: 'loading',
        date: '1970-01-01',
        click: 0,
        attach1: '',
        attach2: '',
        attach3: '',
        attach1_name: '',
        attach2_name: '',
        attach3_name: ''
    }

  admissionData: AdmissionData = {
    page: '1',
    total_page: 4,
    info: [
        {
            id: 50,
            title: 'loading',
            click: 0,
            date: '1970-01-01'
        }
        ]
    }

    detail: Boolean =  true;
    currentPage: any = this.dataService.getAdmission();
    middlePage: any;
    pages: Array<number> =  [];


    constructor(private route: ActivatedRoute, private dataService: DataService) {
        const self = this;
        if (route.snapshot.params['id'] !== undefined) {
            this.detail = false;
            this.dataService.fetchData(this.dataService.getUrl() + '/api/recruit/detail/7/'
             + route.snapshot.params['id']).subscribe(function(data) {
                self.content = data;
            })
        } else {
            this.detail = true;
            this.refreshContent(this.dataService.getAdmission());
        }
    }

    ngOnInit() {
    }

    onSelect(i): void {
        this.currentPage = i;
        this.dataService.setAdmission(this.currentPage);
        if (this.admissionData.total_page > 5) {
            if (i < this.admissionData.total_page - 1 && i > 2) {
                this.middlePage = i;
            }
            if (i === 2) {
                this.middlePage = 3;
            }
            if (i === this.admissionData.total_page - 1) {
                this.middlePage = this.admissionData.total_page - 2;
            }
            this.pages = [this.middlePage - 2, this.middlePage - 1, this.middlePage, this.middlePage + 1, this.middlePage + 2];
        }
        this.refreshContent(this.currentPage);
    }

    frontPage(): void {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.onSelect(this.currentPage);
        }
    }

    nextPage(): void {
        if (this.currentPage < this.admissionData.total_page) {
            this.currentPage++;
            this.onSelect(this.currentPage);
        }
    }

    refreshContent(page): void {
        const self = this;
        this.dataService.fetchData(this.dataService.getUrl() + '/api/recruit/index/4/' + page).subscribe(function(data) {
            self.admissionData = data;
            if (self.admissionData.total_page <= 5) {
                self.pages = [];
                for (let j = 1; j <= self.admissionData.total_page; j++) {
                    self.pages.push(j);
                }
            } else {
                 if (self.currentPage <= 2) {
                   self.pages = [1, 2, 3, 4, 5];
                 } else if (self.currentPage >= self.admissionData.total_page - 1) {
                   self.pages = [self.admissionData.total_page - 4, self.admissionData.total_page - 3, self.admissionData.total_page - 2,
                   self.admissionData.total_page - 1, self.admissionData.total_page];
                 } else {
                   self.pages = [self.currentPage - 2, self.currentPage - 1, self.currentPage, self.currentPage + 1, self.currentPage + 2];
                 }
            }
        })
    }

}
