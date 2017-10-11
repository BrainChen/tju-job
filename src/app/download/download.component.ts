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
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        file: '/upload/download/16-11-16-11-49-19_14792681599hjUSB.DOC'
        },
        {
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        file: '/upload/download/16-10-08-02-38-20_1475908700mwFP9g.DOC'
        },
        {
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        file: '/upload/download/16-07-17-09-42-05_1468719725WzfEwl.DOC'
        },
        {
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        file: '/upload/download/15-10-30-12-02-02_1446177722XzObED.PDF'
        },
        {
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        file: '/upload/download/15-10-21-11-21-08_1445397668InSEDG.DOC'
        },
        {
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        file: '/upload/download/15-10-21-11-16-25_1445397385HezDjw.DOCX'
        },
        {
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        file: '/upload/download/15-10-20-11-55-32_1445313332vDz8Z6.PDF'
        },
        {
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        file: '/upload/download/14-09-26-09-47-20_1411696040nGldEl.RAR'
        },
        {
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        file: '/upload/download/14-04-18-03-54-04_1397807644KZLlBA.DOC'
        },
        {
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        file: '/upload/download/12-12-14-11-25-15_1355455515nTcI61.DOC'
        },
        {
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        file: '/upload/download/12-06-08-10-35-43_133912294375Iad7.PDF'
        },
        {
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        file: '/upload/download/12-03-12-08-47-55_1331513275xP6WsS.DOC'
        },
        {
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        file: '/upload/download/11-10-26-04-09-44_1319616584oCX2i0.DOC'
        },
        {
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        file: '/upload/download/10-10-11-10-36-01_1286764561n8T4aS.RAR'
        },
        {
        title: 'loading',
        click: 0,
        date: '1970-01-01',
        file: '/upload/download/10-10-11-10-35-42_1286764542j6owaa.RAR'
        }
        ]
    };

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
        if (this.downloadData.all_page > 5) {
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
        if (this.currentPage < this.downloadData.all_page) {
            this.currentPage++;
            this.onSelect(this.currentPage);
        }
    }

    refreshContent(page): void {
        const self = this;
        this.dataService.fetchData(this.dataService.getUrl() + '/api/download/index/' + page).subscribe(function(data) {
            self.downloadData = data;
            if (self.downloadData.all_page <= 5) {
                self.pages = [];
                for (let j = 1; j <= self.downloadData.all_page; j++) {
                    self.pages.push(j);
                }
            } else {
                self.pages = [self.currentPage, self.currentPage + 1, self.currentPage + 2, self.currentPage + 3, self.currentPage + 4];
            }
            console.log(data);
        })
    }

}
