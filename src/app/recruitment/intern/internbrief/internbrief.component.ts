import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';
import { flyIn } from '../../../animate/fly-in';

import { BriefData } from '../../brief/briefData';

@Component({
  selector: 'app-internbrief',
  templateUrl: './internbrief.component.html',
  styleUrls: ['../../recruitment.child.component.css'],

  animations: [flyIn]
})
export class InternbriefComponent implements OnInit {

  internbriefData: BriefData = {
    page: '1',
    total_page: 2333,
    important: [
    {
    id: 48762,
    important: 1,
    title: 'loading',
    click: 0,
    date: '1970-01-01'
    },
    {
    id: 48761,
    important: 1,
    title: 'loading',
    click: 0,
    date: '1970-01-01'
    }
    ],
    info: [
    {
    id: 48762,
    important: 1,
    title: 'loading',
    click: 0,
    date: '1970-01-01'
    },
    {
    id: 48761,
    important: 1,
    title: 'loading',
    click: 0,
    date: '1970-01-01'
    },
    {
    id: 48760,
    important: 0,
    title: 'loading',
    click: 0,
    date: '1970-01-01'
    },
    {
    id: 48759,
    important: 0,
    title: 'loading',
    click: 0,
    date: '1970-01-01'
    },
    {
    id: 48758,
    important: 0,
    title: 'loading',
    click: 0,
    date: '1970-01-01'
    },
    {
    id: 48757,
    important: 0,
    title: 'loading',
    click: 0,
    date: '1970-01-01'
    },
    {
    id: 48756,
    important: 0,
    title: 'loading',
    click: 0,
    date: '1970-01-01'
    },
    {
    id: 48755,
    important: 0,
    title: 'loading',
    click: 0,
    date: '1970-01-01'
    },
    {
    id: 48754,
    important: 0,
    title: 'loading',
    click: 0,
    date: '1970-01-01'
    },
    {
    id: 48753,
    important: 0,
    title: 'loading',
    click: 0,
    date: '1970-01-01'
    }
    ]
    }
    currentPage: any = 1;
    middlePage: any = 3;
    pages: Array<number> =  [];


    constructor(private dataService: DataService) {
        this.refreshContent(1);
    }

    ngOnInit() {
    }

    onSelect(i): void {
        this.currentPage = i;
        if (this.internbriefData.total_page > 5) {
            if (i < this.internbriefData.total_page - 1 && i > 2) {
                this.middlePage = i;
            }
            if (i === 2) {
                this.middlePage = 3;
            }
            if (i === this.internbriefData.total_page - 1) {
                this.middlePage = this.internbriefData.total_page - 2;
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
        if (this.currentPage < this.internbriefData.total_page) {
            this.currentPage++;
            this.onSelect(this.currentPage);
        }
    }

    refreshContent(page): void {
        const self = this;
        this.dataService.fetchData('http://172.23.238.215:4567/api/shixizp/index/' + page).subscribe(function(data) {
            self.internbriefData = data;
            if (self.internbriefData.total_page <= 5) {
                self.pages = [];
                for (let j = 1; j <= self.internbriefData.total_page; j++) {
                    self.pages.push(j);
                }
            } else {
                 if (self.currentPage <= 2) {
                   self.pages = [1, 2, 3, 4, 5];
                 } else if (self.currentPage >= self.internbriefData.total_page - 1) {
                   self.pages = [self.internbriefData.total_page - 4,
                   self.internbriefData.total_page - 3, self.internbriefData.total_page - 2,
                   self.internbriefData.total_page - 1, self.internbriefData.total_page];
                 } else {
                   self.pages = [self.currentPage - 2, self.currentPage - 1, self.currentPage, self.currentPage + 1, self.currentPage + 2];
                 }
            }
            console.log(data);
        })
    }

}
