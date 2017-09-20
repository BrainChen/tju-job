import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { flyIn } from '../animate/fly-in';

import { WorkData } from './workData';

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.css'],

    animations: [flyIn]
})


export class WorkComponent implements OnInit {
    workData: WorkData = {
        all_page: 20,
        page: '1',
        data_important: [
        {
        id: 224,
        title: '【逐梦起航】情系桑梓 守心如初——专访2017届毕业生阿卜杜热扎克&amp;#8226;麦提纳斯尔',
        click: 25,
        date: '2017-05-15',
        important: 0
        },
        {
        id: 223,
        title: '【青春基层】以梦为马，砥砺前行——专访2014届毕业生秦煜博',
        click: 21,
        date: '2017-05-15',
        important: 0
        },
        {
        id: 222,
        title: '【逐梦起航】笃志好学，前程自来—专访2017届毕业生祖里皮卡尔·买买提',
        click: 24,
        date: '2017-05-15',
        important: 0
        }
        ],
        data_guide: [
        {
        id: 224,
        title: '【逐梦起航】情系桑梓 守心如初——专访2017届毕业生阿卜杜热扎克&amp;#8226;麦提纳斯尔',
        click: 25,
        date: '2017-05-15',
        important: 0
        },
        {
        id: 223,
        title: '【青春基层】以梦为马，砥砺前行——专访2014届毕业生秦煜博',
        click: 21,
        date: '2017-05-15',
        important: 0
        },
        {
        id: 222,
        title: '【逐梦起航】笃志好学，前程自来—专访2017届毕业生祖里皮卡尔·买买提',
        click: 24,
        date: '2017-05-15',
        important: 0
        },
        {
        id: 221,
        title: '简历大讲堂（第六期）成功举办',
        click: 24,
        date: '2017-05-15',
        important: 0
        },
        {
        id: 220,
        title: '简历大讲堂（第五期）成功举办',
        click: 18,
        date: '2017-05-15',
        important: 0
        },
        {
        id: 218,
        title: '【精彩回顾】“学而思”首届天津大学演讲挑战赛决赛圆满举行',
        click: 141,
        date: '2017-05-08',
        important: 0
        },
        {
        id: 217,
        title: '【生涯体验周·感想集之3】志愿者们，感恩有你（教育学院、微电子学院、材料科学与工程学院的四位志愿者的视频分享）',
        click: 111,
        date: '2017-05-08',
        important: 0
        },
        {
        id: 216,
        title: '【生涯体验周·感想集之2】志愿者们，感恩有你（机械、文、马克思的三位志愿者的视频分享）',
        click: 142,
        date: '2017-05-08',
        important: 0
        },
        {
        id: 215,
        title: '【校友话职场】新青年论坛：既然选择了基层之“不忘初心，立志前行”',
        click: 106,
        date: '2017-05-08',
        important: 0
        },
        {
        id: 214,
        title: '【生涯体验周·感想集】暖帅、酷帅、萌帅，为你讲述他们眼中的生涯体验周',
        click: 712,
        date: '2017-05-02',
        important: 0
        }
        ]
    }

    currentPage: any = 1;
    middlePage: any = 3;
    pages: Array<number> = [this.currentPage, this.currentPage + 1, this.currentPage + 2, this.currentPage + 3, this.currentPage + 4];


    constructor(private dataService: DataService) { }

    ngOnInit() {
    }

    onSelect(i): void {
        this.currentPage = i;
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
        this.dataService.fetchData('http://172.26.169.32:4567/api/dynamic/index/' + page).subscribe(function(data) {
            self.workData = data;
            console.log(data);
        })
    }

}
