import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent {
    totalMonth: any = {};
    calendarData: any = [
        {
            held_time: '6:30',
            place: '天津大学',
            title: 'loading',
            id: 6669
        },
        {
            held_time: '6:30',
            place: '天津大学',
            title: 'loading',
            id: 6669
        },
        {
            held_time: '6:30',
            place: '天津大学',
            title: 'loading',
            id: 6669
        },
        {
            hele_time: '6:30',
            place: '天津大学',
            title: 'loading',
            id: 6669
        }
    ]
    calendar: Boolean = false;
    temp: any = [];
    week1: any = [];
    week2: any = [];
    week3: any = [];
    week4: any = [];
    week5: any = [];
    week6: any = [];
    allMonth: any = {};

    date: any = new Date();
    showDate: any;
    currentDate: any = this.date.getDate();
    importantDate: any = [];

    year: any;
    month: any;

    constructor(private router: Router, private dataService: DataService) {
        this.refreshDate();
    }

    front(): void {
        this.date.setMonth(this.date.getMonth() - 1);
        this.refreshDate();
    }

    next(): void {
        this.date.setMonth(this.date.getMonth() + 1);
        this.refreshDate();
    }

    refreshDate(): void {
        const self = this;
        this.year = this.date.getYear();
        this.month = this.date.getMonth() + 1;
        if (this.month < 10) {
            this.month = '0' + this.month;
        }
        this.dataService.fetchData(
            this.dataService.getUrl() + '/api/calendar/' + (this.year + 1900) + '/' + this.month
        ).subscribe(function(data) {
            self.totalMonth = data;
            self.importantDate = [];
            for (let i = 1; i <= 31; i++) {
                if (data.meeting[i].important === 1) {
                    self.importantDate.push(i);
                }
            }
        })
        this.allMonth = {
            '1': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            '2': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
            '3': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            '4': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
            '5': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            '6': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
            '7': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            '8': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            '9': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
            '10': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            '11': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
            '12': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
        }
        if (this.date.getYear() % 4 === 0 && this.date.getYear() % 100 !== 0) {
            this.allMonth['2'] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
            this.allMonth['2'].push(29);
        }
        this.temp = this.allMonth[this.date.getMonth() + 1];
        this.week1 = [];
        this.week2 = [];
        this.week3 = [];
        this.week4 = [];
        this.week5 = [];
        this.week6 = [];
        let hamapi: number = this.date.getDay() - (this.date.getDate() % 7 - 1);
        if (hamapi < 0) {
            hamapi = hamapi + 7;
        }
        for (let i = 0; i < hamapi; i++) {
            this.week1.push('');
        }
        for (let i = hamapi; i < 7; i++) {
            this.week1.push(this.temp.shift());
        }
        if (this.week1[6] === '') {
            this.week1 = [];
        }
        for (let i = 0; i < 7; i++) {
            this.week2.push(this.temp.shift());
        }
        for (let i = 0; i < 7; i++) {
            this.week3.push(this.temp.shift());
        }
        for (let i = 0; i < 7; i++) {
            this.week4.push(this.temp.shift());
        }
        for (let i = 0; i < 7; i++) {
            let a = this.temp.shift();
            if (a !== undefined) {
                this.week5.push(a);
            }
        }
        for (let i = 0; i < 7; i++) {
            let a = this.temp.shift();
            if (a !== undefined) {
                this.week6.push(a);
            }
        }
    }

    show(i): void {
        this.calendar = true;
        this.showDate = i;
        this.calendarData = this.totalMonth.meeting[i].meeting;
    }

    close(): void {
        this.calendar = false;
    }

    navigate(id): void {
        this.calendar = false;
        this.router.navigate(['/recruitment/meeting/' + id]);
    }
}
