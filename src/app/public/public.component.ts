import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

import { PublicData } from './publicData';
import { Content } from '../content';
import { flyIn } from '../animate/fly-in';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css'],

  animations: [flyIn],
  encapsulation: ViewEncapsulation.None
})
export class PublicComponent implements OnInit {

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

    publicData: PublicData = {
        all_page: 87,
        page: '1',
        data_important: [
        {
        id: 1130,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: '1'
        },
        {
        id: 1127,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: '1'
        }
        ],
        data_notice: [
        {
        id: 1130,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: '1'
        },
        {
        id: 1129,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: '0'
        },
        {
        id: 1129,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: '0'
        },
        {
        id: 1129,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: '0'
        },
        {
        id: 1129,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: '0'
        },
        {
        id: 1129,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: '0'
        },
        {
        id: 1129,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: '0'
        },
        {
        id: 1129,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: '0'
        },
        {
        id: 1129,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: '0'
        },
        {
        id: 1129,
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        important: '0'
        }
        ]
    };

    detail: Boolean =  true;
    currentPage: any = this.dataService.getPublic();
    middlePage: any;
    pages: Array<number> = [this.currentPage, this.currentPage + 1, this.currentPage + 2, this.currentPage + 3, this.currentPage + 4];

    constructor(private route: ActivatedRoute, private dataService: DataService) {
        const self = this;
        if (route.snapshot.params['id'] !== undefined) {
            this.detail = false;
            this.dataService.fetchData(this.dataService.getUrl() +
            '/api/detail/1/' + route.snapshot.params['id']).subscribe(function(data) {
                self.content = data;
            })
        } else {
            this.detail = true;
            this.refreshContent(this.dataService.getPublic());
        }
    }

    ngOnInit() {
    }

    onSelect(i): void {
        this.currentPage = i;
        this.dataService.setPublic(this.currentPage);
        if (i < this.publicData.all_page - 1 && i > 2) {
            this.middlePage = i;
        }
        if (i === 2) {
            this.middlePage = 3;
        }
        if (i === this.publicData.all_page - 1) {
            this.middlePage = this.publicData.all_page - 2;
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
        if (this.currentPage < this.publicData.all_page) {
            this.currentPage++;
            this.onSelect(this.currentPage);
        }
    }

    refreshContent(page): void {
        const self = this;
        this.dataService.fetchData(this.dataService.getUrl() + '/api/notice/index/' + page).subscribe(function(data) {
            self.publicData = data;
        })
    }

}
