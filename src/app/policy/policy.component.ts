import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

import { flyIn } from '../animate/fly-in';
import { Content } from '../content';
import { PolicyData } from './policyData';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css'],

  animations: [flyIn],
  encapsulation: ViewEncapsulation.None
})
export class PolicyComponent implements OnInit {
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

    policyData: PolicyData = {
        all_page: 2,
        page: '1',
        data_important: null,
        data_guide: [
        {
            id: 26,
            title: 'loading',
            click: 0,
            date: '1970-01-01',
            important: 0
        },
        {
            id: 26,
            title: 'loading',
            click: 0,
            date: '1970-01-01',
            important: 0
        },
        {
            id: 26,
            title: 'loading',
            click: 0,
            date: '1970-01-01',
            important: 0
        },
        {
            id: 26,
            title: 'loading',
            click: 0,
            date: '1970-01-01',
            important: 0
        },
        {
            id: 26,
            title: 'loading',
            click: 0,
            date: '1970-01-01',
            important: 0
        },
        {
            id: 26,
            title: 'loading',
            click: 0,
            date: '1970-01-01',
            important: 0
        },
        {
            id: 26,
            title: 'loading',
            click: 0,
            date: '1970-01-01',
            important: 0
        },
        {
            id: 26,
            title: 'loading',
            click: 0,
            date: '1970-01-01',
            important: 0
        },
        {
            id: 26,
            title: 'loading',
            click: 0,
            date: '1970-01-01',
            important: 0
        },
        {
            id: 26,
            title: 'loading',
            click: 0,
            date: '1970-01-01',
            important: 0
        }
        ]
    };

    detail: Boolean =  true;
    currentPage: any = 1;
    middlePage: any = 3;
    pages: Array<number> =  [];


    constructor(private route: ActivatedRoute, private dataService: DataService) {
        const self = this;
        if (route.snapshot.params['id'] !== undefined) {
            this.detail = false;
            this.dataService.fetchData(this.dataService.getUrl() +
            '/api/detail/2/' + route.snapshot.params['id']).subscribe(function(data) {
                self.content = data;
                console.log(data);
            })
        } else {
            this.detail = true;
            this.refreshContent(1);
        }
    }

    ngOnInit() {
    }

    onSelect(i): void {
        this.currentPage = i;
        if (this.policyData.all_page > 5) {
            if (i < this.policyData.all_page - 1 && i > 2) {
                this.middlePage = i;
            }
            if (i === 2) {
                this.middlePage = 3;
            }
            if (i === this.policyData.all_page - 1) {
                this.middlePage = this.policyData.all_page - 2;
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
        if (this.currentPage < this.policyData.all_page) {
            this.currentPage++;
            this.onSelect(this.currentPage);
        }
    }

    refreshContent(page): void {
        const self = this;
        this.dataService.fetchData(this.dataService.getUrl() + '/api/policy/index/' + page).subscribe(function(data) {
            self.policyData = data;
            if (self.policyData.all_page <= 5) {
                self.pages = [];
                for (let j = 1; j <= self.policyData.all_page; j++) {
                    self.pages.push(j);
                }
            } else {
                if (self.currentPage <= 2) {
                   self.pages = [1, 2, 3, 4, 5];
                 } else if (self.currentPage >= self.policyData.all_page - 1) {
                   self.pages = [self.policyData.all_page - 4, self.policyData.all_page - 3, self.policyData.all_page - 2,
                   self.policyData.all_page - 1, self.policyData.all_page];
                 } else {
                   self.pages = [self.currentPage - 2, self.currentPage - 1, self.currentPage, self.currentPage + 1, self.currentPage + 2];
                 }
            }
            console.log(data);
        })
    }

}
