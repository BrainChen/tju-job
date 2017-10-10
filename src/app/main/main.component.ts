import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { flyIn } from '../animate/fly-in';

import { MainDatas } from './mainData';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],

    animations: [flyIn]
})

export class MainComponent implements OnInit {

    mainDatas: MainDatas = {
    data_banner: {
    image: ''
    },
    data_notice: [
    {
    id: 1130,
    title: 'loading',
    date: '2017-09-16'
    },
    {
    id: 1129,
    title: 'loading',
    date: '2017-05-16'
    },
    {
    id: 1128,
    title: 'loading',
    date: '2017-05-15'
    },
    {
    id: 1127,
    title: 'loading',
    date: '2017-05-15'
    },
    {
    id: 1124,
    title: 'loading',
    date: '2017-05-10'
    },
    {
    id: 1123,
    title: 'loading',
    date: '2017-05-09'
    }
    ],
    data_dynamic: [
    {
    id: 224,
    title: 'loading',
    date: '2017-05-15'
    },
    {
    id: 223,
    title: 'loading',
    date: '2017-05-15'
    },
    {
    id: 222,
    title: 'loading',
    date: '2017-05-15'
    },
    {
    id: 221,
    title: 'loading',
    date: '2017-05-15'
    },
    {
    id: 220,
    title: 'loading',
    date: '2017-05-15'
    },
    {
    id: 218,
    title: 'loading',
    date: '2017-05-08'
    }
    ],
    data_meeting: [
    {
    id: 6669,
    title: 'loading',
    date: '2017-09-15'
    },
    {
    id: 6668,
    title: 'loading',
    date: '2017-09-08'
    },
    {
    id: 6667,
    title: 'loading',
    date: '2017-06-22'
    },
    {
    id: 6666,
    title: 'loading',
    date: '2017-06-22'
    },
    {
    id: 6665,
    title: 'loading',
    date: '2017-06-16'
    },
    {
    id: 6664,
    title: 'loading',
    date: '2017-06-15'
    }
    ],
    data_info: [
    {
    id: 48762,
    title: 'loading',
    date: '2017-09-08'
    },
    {
    id: 48761,
    title: 'loading',
    date: '2017-09-07'
    },
    {
    id: 48760,
    title: 'loading',
    date: '2017-05-16'
    },
    {
    id: 48759,
    title: 'loading',
    date: '2017-05-16'
    },
    {
    id: 48758,
    title: 'loading',
    date: '2017-05-16'
    },
    {
    id: 48757,
    title: 'loading',
    date: '2017-05-16'
    }
    ],
    data_date: {
    message: '暂时为空'
    },
    data_partner: [
    {
    url: 'http://www.twt.edu.cn',
    image: ''
    },
    {
    url: 'http://www.twt.edu.cn',
    image: ''
    }
    ]
    };

    innerHeight: Number = window.screen.availHeight;
    innerWidth: Number = window.screen.availWidth;

    publicObj: Object = this.mainDatas.data_info;
    recruitmentObj: Object = this.mainDatas.data_meeting;

    isone: Boolean = true;
    oneTo: String = '/public';
    istwo: Boolean = true;
    twoTo: String = '/recruitment/meeting';

    constructor(private dataService: DataService) {
        this.dataService.showAbout = true;
        const self = this;
        this.dataService.fetchData('http://172.23.9.4:4567/api/index').subscribe(function(data) {
            self.mainDatas = data;
            self.getpublic();
            self.getrecruitment();
            console.log(data);
        })
    }

    ngOnInit() {
    }

    getpublic(): void {
        this.publicObj = this.mainDatas.data_notice;
        this.oneTo = '/public';
        if (this.isone === false) {
            this.isone = !this.isone;
        }
    }

    getwork(): void {
        this.publicObj = this.mainDatas.data_dynamic;
        this.oneTo = '/work';
        if (this.isone === true) {
            this.isone = !this.isone;
        }
    }

    getrecruitment(): void {
        this.recruitmentObj = this.mainDatas.data_meeting;
        this.twoTo = '/recruitment/meeting';
        if (this.istwo === false) {
            this.istwo = !this.istwo;
        }
    }

    getrecruitmentinfo(): void {
        this.recruitmentObj = this.mainDatas.data_info;
        this.twoTo = '/recruitment/brief';
        if (this.istwo === true) {
            this.istwo = !this.istwo;
        }
    }

}
