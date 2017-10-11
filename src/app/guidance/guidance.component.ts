import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

import { GuidanceData } from './guidanceData';
import { Content } from '../content';
import { flyIn } from '../animate/fly-in';

@Component({
  selector: 'app-guidance',
  templateUrl: './guidance.component.html',
  styleUrls: ['./guidance.component.css'],

  animations: [flyIn],
  encapsulation: ViewEncapsulation.None
})
export class GuidanceComponent implements OnInit {

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

    guidanceData: GuidanceData = {
        all_page: 2,
        page: '2',
        data_important: null,
        data_guide: [
        {
        id: 14,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: 0
        },
        {
        id: 13,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: 0
        },
        {
        id: 12,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: 0
        },
        {
        id: 11,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: 0
        },
        {
        id: 10,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: 0
        },
        {
        id: 9,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: 0
        },
        {
        id: 7,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: 0
        },
        {
        id: 6,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: 0
        },
        {
        id: 5,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: 0
        },
        {
        id: 4,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: 0
        },
        {
        id: 3,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: 0
        }
        ]
    }

    detail: Boolean =  true;
    currentPage: any = 1;
    middlePage: any = 3;
    pages: Array<number> = [];

    constructor(private route: ActivatedRoute, private dataService: DataService) {
        const self = this;
        if (route.snapshot.params['id'] !== undefined) {
            this.detail = false;
            this.dataService.fetchData(this.dataService.getUrl() +
            '/api/detail/4/' + route.snapshot.params['id']).subscribe(function(data) {
                self.content = data;
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
        if (this.guidanceData.all_page > 5) {
            if (i < this.guidanceData.all_page - 1 && i > 2) {
                this.middlePage = i;
            }
            if (i === 2) {
                this.middlePage = 3;
            }
            if (i === this.guidanceData.all_page - 1) {
                this.middlePage = this.guidanceData.all_page - 2;
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
        if (this.currentPage < this.guidanceData.all_page) {
            this.currentPage++;
            this.onSelect(this.currentPage);
        }
    }

    refreshContent(page): void {
        const self = this;
        this.dataService.fetchData(this.dataService.getUrl() + '/api/guide/index/' + page).subscribe(function(data) {
            self.guidanceData = data;
            if (self.guidanceData.all_page <= 5) {
                self.pages = [];
                for (let j = 1; j <= self.guidanceData.all_page; j++) {
                    self.pages.push(j);
                }
            } else {
                self.pages = [self.currentPage, self.currentPage + 1, self.currentPage + 2, self.currentPage + 3, self.currentPage + 4];
            }
        })
    }
}
