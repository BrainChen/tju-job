import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../../../data.service';
import { flyIn } from '../../../animate/fly-in';
import { ActivatedRoute } from '@angular/router';

import { MeetingData } from '../../meeting/meetingData';
import { Content } from '../../../content';

@Component({
  selector: 'app-internmeeting',
  templateUrl: './internmeeting.component.html',
  styleUrls: ['../../recruitment.child.component.css', '../../meeting/meeting.component.css'],

  animations: [flyIn],
  encapsulation: ViewEncapsulation.None
})
export class InternmeetingComponent implements OnInit {

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

    detail: Boolean =  true;
    currentPage: any = 1;
    middlePage: any = 3;
    pages: Array<number> =  [];


    constructor(private route: ActivatedRoute, private dataService: DataService) {
        const self = this;
        if (route.snapshot.params['id'] !== undefined) {
            this.detail = false;
            this.dataService.fetchData('http://172.23.9.4:4567/api/recruit/detail/3/'
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
        this.dataService.fetchData('http://172.23.9.4:4567/api/shixizph/index/' + page).subscribe(function(data) {
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
