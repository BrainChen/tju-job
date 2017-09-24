import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { flyIn } from '../animate/fly-in';

import { DownloadData } from './downloadData';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css'],

  animations: [flyIn]
})
export class DownloadComponent implements OnInit {

  downloadData: DownloadData = {
        all_page: 2,
        page: '1',
        data_download: [
        {
        title: '回原籍申请',
        click: 16315,
        date: '2016-11-16',
        file: '/upload/download/16-11-16-11-49-19_14792681599hjUSB.DOC'
        },
        {
        title: '职业咨询登记表',
        click: 7455,
        date: '2016-10-08',
        file: '/upload/download/16-10-08-02-38-20_1475908700mwFP9g.DOC'
        },
        {
        title: '关于毕业生改派的有关程序说明及改派申请书2016年7月',
        click: 5931,
        date: '2016-07-17',
        file: '/upload/download/16-07-17-09-42-05_1468719725WzfEwl.DOC'
        },
        {
        title: '天津大学2016届生源信息简版',
        click: 5575,
        date: '2015-10-30',
        file: '/upload/download/15-10-30-12-02-02_1446177722XzObED.PDF'
        },
        {
        title: '补办协议申请表',
        click: 2777,
        date: '2015-10-21',
        file: '/upload/download/15-10-21-11-21-08_1445397668InSEDG.DOC'
        },
        {
        title: '应届毕业生就业协议书补办流程',
        click: 1899,
        date: '2015-10-21',
        file: '/upload/download/15-10-21-11-16-25_1445397385HezDjw.DOCX'
        },
        {
        title: '天津大学2016届生源信息',
        click: 1844,
        date: '2015-10-20',
        file: '/upload/download/15-10-20-11-55-32_1445313332vDz8Z6.PDF'
        },
        {
        title: '2015届生源信息',
        click: 30554,
        date: '2014-09-26',
        file: '/upload/download/14-09-26-09-47-20_1411696040nGldEl.RAR'
        },
        {
        title: '出国申请表',
        click: 3367,
        date: '2014-04-18',
        file: '/upload/download/14-04-18-03-54-04_1397807644KZLlBA.DOC'
        },
        {
        title: '违约申请书',
        click: 7060,
        date: '2012-12-14',
        file: '/upload/download/12-12-14-11-25-15_1355455515nTcI61.DOC'
        },
        {
        title: '天津大学2013届生源信息表',
        click: 22919,
        date: '2012-06-08',
        file: '/upload/download/12-06-08-10-35-43_133912294375Iad7.PDF'
        },
        {
        title: '天津大学2012届毕业生春季大型双选会邀请函',
        click: 2904,
        date: '2012-03-12',
        file: '/upload/download/12-03-12-08-47-55_1331513275xP6WsS.DOC'
        },
        {
        title: '天津大学2012届毕业生大型双选会邀请函',
        click: 3178,
        date: '2011-10-26',
        file: '/upload/download/11-10-26-04-09-44_1319616584oCX2i0.DOC'
        },
        {
        title: '天津大学专业介绍2',
        click: 4429,
        date: '2010-10-11',
        file: '/upload/download/10-10-11-10-36-01_1286764561n8T4aS.RAR'
        },
        {
        title: '天津大学专业介绍1',
        click: 5878,
        date: '2010-10-11',
        file: '/upload/download/10-10-11-10-35-42_1286764542j6owaa.RAR'
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
        if (i < this.downloadData.all_page - 1 && i > 2) {
            this.middlePage = i;
        }
        if (i === 2) {
            this.middlePage = 3;
        }
        if (i === this.downloadData.all_page - 1) {
            this.middlePage = this.downloadData.all_page - 2;
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
        if (this.currentPage < this.downloadData.all_page) {
            this.currentPage++;
            this.onSelect(this.currentPage);
        }
    }

    refreshContent(page): void {
        const self = this;
        this.dataService.fetchData('http://172.23.98.96:4567/api/download/index/' + page).subscribe(function(data) {
            self.downloadData = data;
            console.log(data);
        })
    }

}
