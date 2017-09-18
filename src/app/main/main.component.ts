import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

import { MainDatas } from './mainData';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

    mainDatas: MainDatas = {
    data_banner: {
    image: ''
    },
    data_notice: [
    {
    id: 1130,
    title: 'dgG',
    date: '2017-09-16'
    },
    {
    id: 1129,
    title: '重要通知（5.26报名截止）|关于招募赴广西钦州挂职锻炼人员的通知',
    date: '2017-05-16'
    },
    {
    id: 1128,
    title: '宝洁俱乐部2017年管理层纳新盛大开幕！',
    date: '2017-05-15'
    },
    {
    id: 1127,
    title: '天津大学入围江苏选调生名单公示',
    date: '2017-05-15'
    },
    {
    id: 1124,
    title: '就业协议补办公告',
    date: '2017-05-10'
    },
    {
    id: 1123,
    title: '毕业生补办就业协议公告',
    date: '2017-05-09'
    }
    ],
    data_dynamic: [
    {
    id: 224,
    title: '【逐梦起航】情系桑梓 守心如初——专访2017届毕业生阿卜杜热扎克&amp;&8226;麦提纳斯尔',
    date: '2017-05-15'
    },
    {
    id: 223,
    title: '【青春基层】以梦为马，砥砺前行——专访2014届毕业生秦煜博',
    date: '2017-05-15'
    },
    {
    id: 222,
    title: '【逐梦起航】笃志好学，前程自来—专访2017届毕业生祖里皮卡尔·买买提',
    date: '2017-05-15'
    },
    {
    id: 221,
    title: '简历大讲堂（第六期）成功举办',
    date: '2017-05-15'
    },
    {
    id: 220,
    title: '简历大讲堂（第五期）成功举办',
    date: '2017-05-15'
    },
    {
    id: 218,
    title: '【精彩回顾】“学而思”首届天津大学演讲挑战赛决赛圆满举行',
    date: '2017-05-08'
    }
    ],
    data_meeting: [
    {
    id: 6669,
    title: '然而更',
    date: '2017-09-15'
    },
    {
    id: 6668,
    title: '按时发多少',
    date: '2017-09-08'
    },
    {
    id: 6667,
    title: '航天科工三院暑期实践参观团招募宣讲会',
    date: '2017-06-22'
    },
    {
    id: 6666,
    title: '航空工业沈阳飞机设计研究所（601所）2018届毕业生招聘会',
    date: '2017-06-22'
    },
    {
    id: 6665,
    title: '【北洋园】神雾科技集团股份有限公司',
    date: '2017-06-16'
    },
    {
    id: 6664,
    title: '【北洋园】中交第四航务工程勘察设计院有限公司宣讲会',
    date: '2017-06-15'
    }
    ],
    data_info: [
    {
    id: 48762,
    title: '测试2东三省',
    date: '2017-09-08'
    },
    {
    id: 48761,
    title: '尴尬发给',
    date: '2017-09-07'
    },
    {
    id: 48760,
    title: '兰州理工大学2017年公开招聘专业技术人员',
    date: '2017-05-16'
    },
    {
    id: 48759,
    title: '南昌市城市规划设计研究总院（市政设计分院）2017年招聘简章',
    date: '2017-05-16'
    },
    {
    id: 48758,
    title: '上海河图工程股份有限公司2017届（春季）校园招聘简章',
    date: '2017-05-16'
    },
    {
    id: 48757,
    title: '宜春学院2017年人才引进公告',
    date: '2017-05-16'
    }
    ],
    data_date: {
    message: '暂时为空'
    },
    data_partner: [
    {
    url: 'http://www.tj.lss.gov.cn',
    image: ''
    },
    {
    url: 'http://www.moe.edu.cn/',
    image: ''
    }
    ]
    };

    innerHeight: Number = window.screen.availHeight;
    innerWidth: Number = window.screen.availWidth;

    publicObj: Object = this.mainDatas.data_info;
    recruitmentObj: Object = this.mainDatas.data_meeting;

    isone: Boolean = true;
    istwo: Boolean = true;

    constructor(private dataService: DataService) {
        this.dataService.showAbout = true;
        const self = this;
        this.dataService.fetchData('http://172.26.108.111:4567/api/index').subscribe(function(data) {
            self.mainDatas = data;
            console.log(data);
        })
    }

    ngOnInit() {
    }

    getpublic(): void {
        this.publicObj = this.mainDatas.data_info;
        this.isone = !this.isone;
    }

    getwork(): void {
        this.publicObj = this.mainDatas.data_dynamic;
        this.isone = !this.isone;
    }

    getrecruitment(): void {
        this.recruitmentObj = this.mainDatas.data_meeting;
        this.istwo = !this.istwo;
    }

    getrecruitmentinfo(): void {
        this.recruitmentObj = this.mainDatas.data_notice;
        this.istwo = !this.istwo;
    }

}
