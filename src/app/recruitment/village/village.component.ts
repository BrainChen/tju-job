import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../animate/fly-in';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';

import { VillageData } from './villageData';
import { Content } from '../../content';

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['../recruitment.child.component.css'],

  animations: [flyIn]
})
export class VillageComponent implements OnInit {

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

  villageData: VillageData = {
    headers: { },
    original: {
    university: [
    {
    id: 46,
    title: '大师傅大哥大哥发的规范',
    date: '2017-09-10'
    },
    {
    id: 44,
    title: '2014年江苏省“985”高校村官工程实施方案',
    date: '2013-12-24'
    },
    {
    id: 43,
    title: '（截止至12月15日）福建省村官和选调生报名通知',
    date: '2013-12-03'
    },
    {
    id: 42,
    title: '本溪市2013年选聘优秀高校毕业生到村任职公告',
    date: '2013-07-01'
    },
    {
    id: 41,
    title: '2013年天津市东丽区选聘大学生村官报名通知',
    date: '2013-06-05'
    }
    ],
    western: [
    {
    id: 45,
    title: '啊风高放火',
    date: '2017-09-09'
    },
    {
    id: 19,
    title: '大学生志愿服务西部计划高校项目办招募工作指南',
    date: '2009-04-15'
    },
    {
    id: 18,
    title: '2009年大学生志愿服务西部计划问答',
    date: '2009-04-14'
    }
    ],
    three_one: [
    {
    id: 23,
    title: '天津市三支一扶招募公告',
    date: '2009-05-26'
    }
    ]
    },
    exception: null
    }

    detail: Boolean =  true;
  constructor(private route: ActivatedRoute, private dataService: DataService) {
        const self = this;
        if (route.snapshot.params['id'] !== undefined) {
            this.detail = false;
            this.dataService.fetchData('http://172.24.74.145:1024/api/recruit/detail/2/'
             + route.snapshot.params['id']).subscribe(function(data) {
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

  refreshContent(page): void {
        const self = this;
        this.dataService.fetchData('' + page).subscribe(function(data) {
            self.villageData = data;
            console.log(data);
        })
    }

}
