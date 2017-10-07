import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { flyIn } from '../../animate/fly-in';
import { ActivatedRoute } from '@angular/router';

import { CivilData } from './civilData';
import { Content } from '../../content';

@Component({
  selector: 'app-civil',
  templateUrl: './civil.component.html',
  styleUrls: ['../recruitment.child.component.css'],

  animations: [flyIn]
})
export class CivilComponent implements OnInit {

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

  civilData: CivilData = {
    page: '1',
    total_page: 9,
    important: [
    {
    id: 93,
    important: 1,
    title: 'loading',
    province: '山西',
    click: 0,
    date: '1970-01-01'
    },
    {
    id: 91,
    important: 1,
    title: 'loading',
    province: '山西',
    click: 0,
    date: '1970-01-01'
    }
    ],
    info: [
    {
    id: 93,
    important: 1,
    title: 'loading',
    province: '山西',
    click: 0,
    date: '1970-01-01'
    },
    {
    id: 92,
    important: 0,
    title: 'loading',
    province: '',
    click: 0,
    date: '1970-01-01'
    },
    {
    id: 91,
    important: 1,
    title: 'loading',
    province: '山西',
    click: 0,
    date: '1970-01-01'
    },
    {
    id: 89,
    important: 0,
    title: 'loading',
    province: '北京',
    click: 0,
    date: '1970-01-01'
    },
    {
    id: 88,
    important: 0,
    title: 'loading',
    province: '南通市公开选调优秀青年后备人才',
    click: 0,
    date: '1970-01-01'
    },
    {
    id: 87,
    important: 0,
    title: 'loading',
    province: '福建省',
    click: 0,
    date: '1970-01-01'
    },
    {
    id: 86,
    important: 0,
    title: 'loading',
    province: '重庆市',
    click: 0,
    date: '1970-01-01'
    },
    {
    id: 85,
    important: 0,
    title: 'loading',
    province: '四川省',
    click: 0,
    date: '1970-01-01'
    },
    {
    id: 84,
    important: 0,
    title: 'loading',
    province: '天津市',
    click: 0,
    date: '1970-01-01'
    },
    {
    id: 83,
    important: 0,
    title: 'loading',
    province: '全国',
    click: 0,
    date: '1970-01-01'
    }
    ]
    }

    detail: Boolean =  true;
    currentPage: any = 1;
    middlePage: any = 3;
    pages: Array<number> =  [];


    constructor(private route: ActivatedRoute, private dataService: DataService) {
        const self = this;
        if (route.snapshot.params['id'] !== undefined) {
            this.detail = false;
            this.dataService.fetchData('http://172.24.74.145:1024/api/recruit/detail/5/'
             + route.snapshot.params['id']).subscribe(function(data) {
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
        if (this.civilData.total_page > 5) {
            if (i < this.civilData.total_page - 1 && i > 2) {
                this.middlePage = i;
            }
            if (i === 2) {
                this.middlePage = 3;
            }
            if (i === this.civilData.total_page - 1) {
                this.middlePage = this.civilData.total_page - 2;
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
        if (this.currentPage < this.civilData.total_page) {
            this.currentPage++;
            this.onSelect(this.currentPage);
        }
    }

    refreshContent(page): void {
        const self = this;
        this.dataService.fetchData('http://172.23.238.215:4567/api/recruit/index/3/' + page).subscribe(function(data) {
            self.civilData = data;
            if (self.civilData.total_page <= 5) {
                self.pages = [];
                for (let j = 1; j <= self.civilData.total_page; j++) {
                    self.pages.push(j);
                }
            } else {
                 if (self.currentPage <= 2) {
                   self.pages = [1, 2, 3, 4, 5];
                 } else if (self.currentPage >= self.civilData.total_page - 1) {
                   self.pages = [self.civilData.total_page - 4, self.civilData.total_page - 3, self.civilData.total_page - 2,
                   self.civilData.total_page - 1, self.civilData.total_page];
                 } else {
                   self.pages = [self.currentPage - 2, self.currentPage - 1, self.currentPage, self.currentPage + 1, self.currentPage + 2];
                 }
            }
            console.log(data);
        })
    }

}
