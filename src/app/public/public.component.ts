import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { PublicData } from './publicData';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

    publicData: PublicData = {
        all_page: 58,
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
        },
        {
        id: 1118,
        title: '职业发展咨询室5月份的预约开始啦！',
        click: 977,
        date: '2017-05-05',
        important: '0'
        },
        {
        id: 1117,
        title: '【5.5朋辈经验分享会】之化工学院专场',
        click: 1011,
        date: '2017-05-05',
        important: '0'
        }
        ]
    }

    constructor(private dataService: DataService) {
        const self = this;
        this.dataService.fetchData('http://172.23.56.235:4567/api/notice/index/1').subscribe(function(data) {
            this.publicData = data;
        })
    }

    ngOnInit() {
    }   

}
