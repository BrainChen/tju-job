import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../animate/fly-in';
import { DataService } from '../../data.service';

import { MeetingData } from './meetingData';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['../recruitment.child.component.css', './meeting.component.css'],

  animations: [flyIn]
})

export class MeetingComponent implements OnInit {

  meetingData: MeetingData = {
    page: '1',
    total_page: 2333,
    important: [
    {
    id: 6669,
    important: 1,
    title: 'loading',
    held_date: '1970-01-01',
    held_time: '00:00',
    place: '天津大学',
    click: 0,
    date: '1970-01-01'
    },
    {
    id: 6669,
    important: 1,
    title: 'loading',
    held_date: '1970-01-01',
    held_time: '00:00',
    place: '天津大学',
    click: 0,
    date: '1970-01-01'
    },
    {
    id: 6669,
    important: 1,
    title: 'loading',
    held_date: '1970-01-01',
    held_time: '00:00',
    place: '天津大学',
    click: 0,
    date: '1970-01-01'
    },
    ],
    info: [
    {
    id: 6669,
    important: 1,
    title: 'loading',
    held_date: '1970-01-01',
    held_time: '00:00',
    place: '天津大学',
    click: 0,
    date: '1970-01-01'
    }, {
    id: 6669,
    important: 1,
    title: 'loading',
    held_date: '1970-01-01',
    held_time: '00:00',
    place: '天津大学',
    click: 0,
    date: '1970-01-01'
    }, {
    id: 6669,
    important: 1,
    title: 'loading',
    held_date: '1970-01-01',
    held_time: '00:00',
    place: '天津大学',
    click: 0,
    date: '1970-01-01'
    }, {
    id: 6669,
    important: 1,
    title: 'loading',
    held_date: '1970-01-01',
    held_time: '00:00',
    place: '天津大学',
    click: 0,
    date: '1970-01-01'
    }, {
    id: 6669,
    important: 1,
    title: 'loading',
    held_date: '1970-01-01',
    held_time: '00:00',
    place: '天津大学',
    click: 0,
    date: '1970-01-01'
    }, {
    id: 6669,
    important: 1,
    title: 'loading',
    held_date: '1970-01-01',
    held_time: '00:00',
    place: '天津大学',
    click: 0,
    date: '1970-01-01'
    }, {
    id: 6669,
    important: 1,
    title: 'loading',
    held_date: '1970-01-01',
    held_time: '00:00',
    place: '天津大学',
    click: 0,
    date: '1970-01-01'
    }, {
    id: 6669,
    important: 1,
    title: 'loading',
    held_date: '1970-01-01',
    held_time: '00:00',
    place: '天津大学',
    click: 0,
    date: '1970-01-01'
    }, {
    id: 6669,
    important: 1,
    title: 'loading',
    held_date: '1970-01-01',
    held_time: '00:00',
    place: '天津大学',
    click: 0,
    date: '1970-01-01'
    }, {
    id: 6669,
    important: 1,
    title: 'loading',
    held_date: '1970-01-01',
    held_time: '00:00',
    place: '天津大学',
    click: 0,
    date: '1970-01-01'
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
        if (this.meetingData.total_page > 5) {
            if (i < this.meetingData.total_page - 1 && i > 2) {
                this.middlePage = i;
            }
            if (i === 2) {
                this.middlePage = 3;
            }
            if (i === this.meetingData.total_page - 1) {
                this.middlePage = this.meetingData.total_page - 2;
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
        if (this.currentPage < this.meetingData.total_page) {
            this.currentPage++;
            this.onSelect(this.currentPage);
        }
    }

    refreshContent(page): void {
        const self = this;
        this.dataService.fetchData('http://172.24.74.145:1024/api/recruit/index/2/' + page).subscribe(function(data) {
            self.meetingData = data;
            if (self.meetingData.total_page <= 5) {
                self.pages = [];
                for (let j = 1; j <= self.meetingData.total_page; j++) {
                    self.pages.push(j);
                }
            } else {
                 if (self.currentPage <= 2) {
                   self.pages = [1, 2, 3, 4, 5];
                 } else if (self.currentPage >= self.meetingData.total_page - 1) {
                   self.pages = [self.meetingData.total_page - 4, self.meetingData.total_page - 3, self.meetingData.total_page - 2,
                   self.meetingData.total_page - 1, self.meetingData.total_page];
                 } else {
                   self.pages = [self.currentPage - 2, self.currentPage - 1, self.currentPage, self.currentPage + 1, self.currentPage + 2];
                 }
            }
            console.log(data);
        })
    }

}
