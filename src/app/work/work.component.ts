import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import { flyIn } from '../animate/fly-in';
import { ActivatedRoute } from '@angular/router';

import { WorkData } from './workData';
import { Content } from '../content';

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.css'],

    animations: [flyIn],
    encapsulation: ViewEncapsulation.None
})


export class WorkComponent implements OnInit {
    imagecount: any = 0;
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

    workData: WorkData = {
        all_page: 20,
        page: '1',
        data_pic: [
            {
                id: 1,
                pic: '../assets/work.png'
            },
            {
                id: 2,
                pic: ''
            },
            {
                id: 3,
                pic: ''
            }
        ],
        data_rotation: [
            {
                id: 224,
                title: 'loading',
                click: 0,
                date: '1970-01-01',
                important: 0
            }
        ],
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


    imagesrc: String = this.workData.data_pic[0].pic;
    detail: Boolean =  true;
    currentPage: any = this.dataService.getWork();
    middlePage: any;
    pages: Array<number> = [];


    constructor(private route: ActivatedRoute, private dataService: DataService) {
        const self = this;
        if (route.snapshot.params['id'] !== undefined) {
            this.detail = false;
            this.dataService.fetchData(this.dataService.getUrl() +
            '/api/detail/3/' + route.snapshot.params['id']).subscribe(function(data) {
                self.content = data;
            })
        } else {
            this.detail = true;
            this.refreshContent(this.dataService.getWork());
        }

        this.circle();
    }

    ngOnInit() {
    }

    onSelect(i): void {
        this.currentPage = i;
        this.dataService.setWork(this.currentPage);
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
        this.dataService.fetchData(this.dataService.getUrl() + '/api/dynamic/index/' + page).subscribe(function(data) {
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
                 }
            }
        })
    }

    circle(): void {
        const self = this;
        setTimeout(function() {
            self.imagecount++;
            if (self.imagecount === 3) {
                self.imagecount = 0;
            }
            self.imagesrc = self.workData.data_pic[self.imagecount].pic;
            self.circle();
        }, 5000);
    }
}
