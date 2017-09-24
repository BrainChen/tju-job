import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { flyIn } from '../animate/fly-in';

import { GuidanceData } from './guidanceData';

@Component({
  selector: 'app-guidance',
  templateUrl: './guidance.component.html',
  styleUrls: ['./guidance.component.css'],

  animations: [flyIn]
})
export class GuidanceComponent implements OnInit {

    guidanceData: GuidanceData = {
        all_page: 2,
        page: '2',
        data_important: null,
        data_guide: [
        {
        id: 14,
        title: '天津市促进以创业带动就业的若干政策规定',
        click: 7672,
        date: '2009-03-14',
        important: 0
        },
        {
        id: 13,
        title: '天津市促进高校毕业生就业的意见',
        click: 7789,
        date: '2009-03-14',
        important: 0
        },
        {
        id: 12,
        title: '教育部关于当前形势下做好普通高等学校毕业生就业工作的通知',
        click: 6524,
        date: '2009-03-14',
        important: 0
        },
        {
        id: 11,
        title: '国务院办公厅关于加强普通高等学校毕业生就业工作的通知 ',
        click: 6405,
        date: '2009-02-23',
        important: 0
        },
        {
        id: 10,
        title: '国务院关于做好当前经济形势下就业工作的通知',
        click: 6896,
        date: '2009-02-23',
        important: 0
        },
        {
        id: 9,
        title: '人社部出台《高校毕业生就业政策解读》',
        click: 5165,
        date: '2009-02-23',
        important: 0
        },
        {
        id: 7,
        title: '关于办理违约的有关程序说明',
        click: 11030,
        date: '2008-10-29',
        important: 0
        },
        {
        id: 6,
        title: '个人出国申请书',
        click: 5778,
        date: '2008-10-13',
        important: 0
        },
        {
        id: 5,
        title: '关于毕业生户口规定的说明',
        click: 8674,
        date: '2008-10-13',
        important: 0
        },
        {
        id: 4,
        title: '关于毕业生档案的说明',
        click: 11731,
        date: '2008-10-13',
        important: 0
        },
        {
        id: 3,
        title: '学生毕业时需要注意的事项',
        click: 13880,
        date: '2008-10-13',
        important: 0
        }
        ]
    }

    currentPage: any = 1;
    middlePage: any = 3;
    pages: Array<number> = [this.currentPage, this.currentPage + 1, this.currentPage + 2, this.currentPage + 3, this.currentPage + 4];

    constructor(private dataService: DataService) {
        this.refreshContent(1);
    }

    ngOnInit() {
    }

    onSelect(i): void {
        this.currentPage = i;
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
        this.dataService.fetchData('http://172.23.98.96:4567/api/guide/index/' + page).subscribe(function(data) {
            self.guidanceData = data;
            console.log(data);
        })
    }
}
