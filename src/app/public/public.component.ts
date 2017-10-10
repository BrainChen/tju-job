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
        title: 'dgG',
        click: 0,
        date: '2017-09-16',
        important: '1'
        },
        {
        id: 1127,
        title: '天津大学入围江苏选调生名单公示',
        click: 176,
        date: '2017-05-15',
        important: '1'
        }
        ],
        data_notice: [
        {
        id: 1130,
        title: 'dgG',
        click: 0,
        date: '2017-09-16',
        important: '1'
        },
        {
        id: 1129,
        title: '重要通知（5.26报名截止）|关于招募赴广西钦州挂职锻炼人员的通知',
        click: 45,
        date: '2017-05-16',
        important: '0'
        },
        {
        id: 1128,
        title: '宝洁俱乐部2017年管理层纳新盛大开幕！',
        click: 130,
        date: '2017-05-15',
        important: '0'
        },
        {
        id: 1127,
        title: '天津大学入围江苏选调生名单公示',
        click: 176,
        date: '2017-05-15',
        important: '1'
        },
        {
        id: 1124,
        title: '就业协议补办公告',
        click: 871,
        date: '2017-05-10',
        important: '0'
        },
        {
        id: 1123,
        title: '毕业生补办就业协议公告',
        click: 1006,
        date: '2017-05-09',
        important: '0'
        },
        {
        id: 1122,
        title: '就业协议补办公告',
        click: 973,
        date: '2017-05-09',
        important: '0'
        },
        {
        id: 1121,
        title: '就业协议补办公告',
        click: 1457,
        date: '2017-05-08',
        important: '0'
        },
        {
        id: 1120,
        title: '【5.10老校区、5.11新校区】金牌讲师带你玩转简历',
        click: 1379,
        date: '2017-05-08',
        important: '0'
        },
        {
        id: 1119,
        title: '天津大学2017年度暑期实习生洽谈会邀请函',
        click: 881,
        date: '2017-05-08',
        important: '0'
        }
        ]
    };

    detail: Boolean =  true;
    currentPage: any = 1;
    middlePage: any = 3;
    pages: Array<number> = [this.currentPage, this.currentPage + 1, this.currentPage + 2, this.currentPage + 3, this.currentPage + 4];

    constructor(private route: ActivatedRoute, private dataService: DataService) {
        const self = this;
        if (route.snapshot.params['id'] !== undefined) {
            this.detail = false;
            this.dataService.fetchData('http://172.23.9.4:4567/api/detail/1/' + route.snapshot.params['id']).subscribe(function(data) {
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
        this.dataService.fetchData('http://172.23.9.4:4567/api/notice/index/' + page).subscribe(function(data) {
            self.publicData = data;
            console.log(data);
        })
    }

}
