import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { flyIn } from '../../animate/fly-in';

import { AdmissionData } from './admissionData';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['../recruitment.child.component.css'],

  animations: [flyIn]
})
export class AdmissionComponent implements OnInit {

  admissionData: AdmissionData = {
    page: '1',
    total_page: 4,
    info: [
    {
    id: 50,
    title: '阿富汗是v',
    click: 0,
    date: '2017-09-09'
    },
    {
    id: 49,
    title: '2014松正电动汽车天津大学校招录用情况',
    click: 26456,
    date: '2013-10-31'
    },
    {
    id: 48,
    title: '松正电动汽车录取通知信息',
    click: 9908,
    date: '2013-10-29'
    },
    {
    id: 47,
    title: '天津LG新型建材有限公司 面试名单',
    click: 9032,
    date: '2011-03-30'
    },
    {
    id: 46,
    title: '深圳发展银行深圳分行笔试通知',
    click: 5172,
    date: '2010-01-08'
    },
    {
    id: 45,
    title: '三安光电股份有限公司',
    click: 799,
    date: '2009-03-18'
    },
    {
    id: 44,
    title: '江苏省2009年选调生推荐人选资格审查通过人员名单',
    click: 6134,
    date: '2009-02-19'
    },
    {
    id: 43,
    title: '中国成达工程有限公司',
    click: 1874,
    date: '2009-01-05'
    },
    {
    id: 42,
    title: '美国世能达物流公司',
    click: 6793,
    date: '2009-01-04'
    },
    {
    id: 41,
    title: '北京用尚科技',
    click: 1167,
    date: '2008-12-26'
    },
    {
    id: 40,
    title: '昆明云内动力股份有限公司',
    click: 1103,
    date: '2008-12-17'
    },
    {
    id: 39,
    title: '昆明云内动力股份有限公司',
    click: 1049,
    date: '2008-12-17'
    },
    {
    id: 38,
    title: '国家开发银行吉林省分行',
    click: 1404,
    date: '2008-12-15'
    },
    {
    id: 37,
    title: '天津港（集团）有限公司天津大学招聘笔试名单',
    click: 2089,
    date: '2008-12-12'
    },
    {
    id: 36,
    title: '北京尚用科技有限公司',
    click: 1192,
    date: '2008-12-10'
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
        if (this.admissionData.total_page > 5) {
            if (i < this.admissionData.total_page - 1 && i > 2) {
                this.middlePage = i;
            }
            if (i === 2) {
                this.middlePage = 3;
            }
            if (i === this.admissionData.total_page - 1) {
                this.middlePage = this.admissionData.total_page - 2;
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
        if (this.currentPage < this.admissionData.total_page) {
            this.currentPage++;
            this.onSelect(this.currentPage);
        }
    }

    refreshContent(page): void {
        const self = this;
        this.dataService.fetchData('http://172.23.238.215:4567/api/recruit/index/1/' + page).subscribe(function(data) {
            self.admissionData = data;
            if (self.admissionData.total_page <= 5) {
                self.pages = [];
                for (let j = 1; j <= self.admissionData.total_page; j++) {
                    self.pages.push(j);
                }
            } else {
                 if (self.currentPage <= 2) {
                   self.pages = [1, 2, 3, 4, 5];
                 } else if (self.currentPage >= self.admissionData.total_page - 1) {
                   self.pages = [self.admissionData.total_page - 4, self.admissionData.total_page - 3, self.admissionData.total_page - 2,
                   self.admissionData.total_page - 1, self.admissionData.total_page];
                 } else {
                   self.pages = [self.currentPage - 2, self.currentPage - 1, self.currentPage, self.currentPage + 1, self.currentPage + 2];
                 }
            }
            console.log(data);
        })
    }

}
