import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { flyIn } from '../animate/fly-in';

import { WorkData } from './workData';

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.css'],

    animations: [flyIn]
})


export class WorkComponent implements OnInit {
    workData: WorkData = {
        all_page: 20,
        page: '1',
        data_important: [
        {
        id: 224,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: 0
        },
        {
        id: 223,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: 0
        },
        {
        id: 222,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: 0
        }
        ],
        data_guide: [
        {
        id: 224,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: 0
        },
        {
        id: 223,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: 0
        },
        {
        id: 222,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: 0
        },
        {
        id: 221,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: 0
        },
        {
        id: 220,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: 0
        },
        {
        id: 218,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: 0
        },
        {
        id: 217,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: 0
        },
        {
        id: 216,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: 0
        },
        {
        id: 215,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: 0
        },
        {
        id: 214,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: 0
        }
        ]
    }

    currentPage: any = 1;
    middlePage: any = 3;
    pages: Array<number> = [];


    constructor(private dataService: DataService) {
        this.refreshContent(1);
    }

    ngOnInit() {
    }

    onSelect(i): void {
        this.currentPage = i;
        if (i < this.workData.all_page - 1 && i > 2) {
            this.middlePage = i;
        }
        if (i === 2) {
            this.middlePage = 3;
        }
        if (i === this.workData.all_page - 1) {
            this.middlePage = this.workData.all_page - 2;
        }
        this.pages = [this.middlePage - 2, this.middlePage - 1, this.middlePage, this.middlePage + 1, this.middlePage + 2];
        this.refreshContent(this.currentPage);
    }

    frontPage(): void {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.onSelect(this.currentPage);
        }
    }

    nextPage(): void {
        if (this.currentPage < this.workData.all_page) {
            this.currentPage++;
            this.onSelect(this.currentPage);
        }
    }

    refreshContent(page): void {
        const self = this;
        this.dataService.fetchData('http://172.23.238.215:4567/api/dynamic/index/' + page).subscribe(function(data) {
            self.workData = data;
            if (self.workData.all_page <= 5) {
                self.pages = [];
                for (let j = 1; j <= self.workData.all_page; j++) {
                    self.pages.push(j);
                }
            } else {
                if (self.currentPage <= 2) {
                   self.pages = [1, 2, 3, 4, 5];
                 } else if (self.currentPage >= self.workData.all_page - 1) {
                   self.pages = [self.workData.all_page - 4, self.workData.all_page - 3, self.workData.all_page - 2,
                   self.workData.all_page - 1, self.workData.all_page];
                 } else {
                   self.pages = [self.currentPage - 2, self.currentPage - 1, self.currentPage, self.currentPage + 1, self.currentPage + 2];
                 }            }
            console.log(data);
        })
    }

}
