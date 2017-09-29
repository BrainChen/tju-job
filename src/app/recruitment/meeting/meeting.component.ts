import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../animate/fly-in';

import { MeetingData } from './meetingData';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['../recruitment.child.component.css'],

  animations: [flyIn]
})

export class MeetingComponent implements OnInit {

  meetingData: MeetingData = {
    page: '1',
    total_page: 581,
    important: [
    {
    id: 6669,
    important: 1,
    title: '然而更',
    held_date: '1998-08-24',
    held_time: '15:00',
    place: '是否会发货',
    click: 0,
    date: '2017-09-15'
    },
    {
    id: 6668,
    important: 1,
    title: '按时发多少',
    held_date: '1998-08-24',
    held_time: '12:00',
    place: '正园',
    click: 0,
    date: '2017-09-08'
    },
    {
    id: 6667,
    important: 1,
    title: '航天科工三院暑期实践参观团招募宣讲会',
    held_date: '2017-06-23',
    held_time: '14:00',
    place: '卫津路26教B122',
    click: 573,
    date: '2017-06-22'
    }
    ],
    info: [
    {
    id: 6669,
    important: 1,
    title: '然而更',
    held_date: '1998-08-24',
    held_time: '15:00',
    place: '是否会发货',
    click: 0,
    date: '2017-09-15'
    },
    {
    id: 6668,
    important: 1,
    title: '按时发多少',
    held_date: '1998-08-24',
    held_time: '12:00',
    place: '正园',
    click: 0,
    date: '2017-09-08'
    },
    {
    id: 6666,
    important: 0,
    title: '航空工业沈阳飞机设计研究所（601所）2018届毕业生招聘会',
    held_date: '2017-06-27',
    held_time: '14:00',
    place: '卫津路会议楼第八会议室',
    click: 794,
    date: '2017-06-22'
    },
    {
    id: 6665,
    important: 0,
    title: '【北洋园】神雾科技集团股份有限公司',
    held_date: '2017-06-21',
    held_time: '09:30',
    place: '50楼A121',
    click: 935,
    date: '2017-06-16'
    },
    {
    id: 6664,
    important: 0,
    title: '【北洋园】中交第四航务工程勘察设计院有限公司宣讲会',
    held_date: '2017-06-20',
    held_time: '09:30',
    place: '43楼A403',
    click: 1026,
    date: '2017-06-15'
    },
    {
    id: 6663,
    important: 0,
    title: '【北洋园】山东星火国际传媒集团有限公司宣讲会',
    held_date: '2017-06-09',
    held_time: '13:30',
    place: '44楼B105',
    click: 712,
    date: '2017-06-08'
    },
    {
    id: 6662,
    important: 0,
    title: '【北洋园】天津银隆新能源有限公司面试',
    held_date: '2017-06-08',
    held_time: '10:00',
    place: '大通学生中心C102、C103',
    click: 1109,
    date: '2017-06-05'
    },
    {
    id: 6661,
    important: 0,
    title: '【卫津路校区】中国国际海运集装箱（集团）股份有限公司宣讲会',
    held_date: '2017-06-01',
    held_time: '19:00',
    place: '24楼301',
    click: 984,
    date: '2017-05-31'
    },
    {
    id: 6660,
    important: 0,
    title: '【北洋园】天津大学6月2日综合类双选会',
    held_date: '2017-06-02',
    held_time: '09:00',
    place: '体育馆',
    click: 5688,
    date: '2017-05-26'
    },
    {
    id: 6659,
    important: 0,
    title: '【北洋园】山西诚信化工有限公司2017年度人才引进',
    held_date: '2017-06-02',
    held_time: '13:30',
    place: '44-A103',
    click: 1037,
    date: '2017-05-26'
    }
    ]
    }

  constructor() { }

  ngOnInit() {
  }

}
