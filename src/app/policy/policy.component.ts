import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { flyIn } from '../animate/fly-in';

import { PolicyData } from './policyData';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css'],

  animations: [flyIn]
})
export class PolicyComponent implements OnInit {

    policyData: PolicyData = {
        all_page: 2,
        page: '1',
        data_important: null,
        data_guide: [
        {
        id: 26,
        title: '高校毕业生就业政策百问(2014年版)',
        click: 8334,
        date: '2014-03-13',
        important: 0
        },
        {
        id: 25,
        title: '高校毕业生就业政策百问',
        click: 6180,
        date: '2012-05-15',
        important: 0
        },
        {
        id: 24,
        title: '关于举办2012年高校应届毕业生应征入伍政策网上咨询周活动的通知',
        click: 10547,
        date: '2012-04-23',
        important: 0
        },
        {
        id: 23,
        title: '关于毕业生申领《高校毕业生自主创业证》的通知',
        click: 55126,
        date: '2012-04-13',
        important: 0
        },
        {
        id: 22,
        title: '国家鼓励普通高等学校应届毕业生入伍服义务兵役政策',
        click: 8630,
        date: '2010-04-30',
        important: 0
        },
        {
        id: 21,
        title: '2009年普通高等学校应届毕业生入伍服义务兵役征集程序及优惠政策',
        click: 6579,
        date: '2009-10-23',
        important: 0
        },
        {
        id: 20,
        title: '2009年大学生村官考试报名录取信息汇总',
        click: 7774,
        date: '2009-05-21',
        important: 0
        },
        {
        id: 19,
        title: '国家促进普通高校毕业生就业政策百问',
        click: 8871,
        date: '2009-05-21',
        important: 0
        },
        {
        id: 18,
        title: '天津大学毕业生改派流程',
        click: 30597,
        date: '2009-05-21',
        important: 0
        },
        {
        id: 17,
        title: '新西部　新生活　新成长',
        click: 6902,
        date: '2009-04-14',
        important: 0
        },
        {
        id: 16,
        title: '2009年大学生志愿服务西部计划问答',
        click: 7315,
        date: '2009-04-14',
        important: 0
        },
        {
        id: 15,
        title: '上海市教育委员会、上海市关于做好2009年非上海生源应届普通高校毕业生进沪就业工作的通知',
        click: 8375,
        date: '2009-03-14',
        important: 0
        }
        ]
    };

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
        this.dataService.fetchData('http://172.26.169.32:4567/api/policy/index/' + page).subscribe(function(data) {
            self.policyData = data;
            console.log(data);
        })
    }

}
