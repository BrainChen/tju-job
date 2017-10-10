import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent {
    calendarData: any = [
        {
            time: '6:30',
            place: '天津大学',
            title: 'loading',
            id: 6669
        },
        {
            time: '6:30',
            place: '天津大学',
            title: 'loading',
            id: 6669
        },
        {
            time: '6:30',
            place: '天津大学',
            title: 'loading',
            id: 6669
        },
        {
            time: '6:30',
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
        for (let i = 0; i < this.date.getDay(); i++) {
            this.week1.push('');
        }
        for (let i = this.date.getDay(); i < 7; i++) {
            this.week1.push(this.temp.shift());
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
    }

    close(): void {
        this.calendar = false;
    }

    navigate(id): void {
        this.calendar = false;
        this.router.navigate(['/recruitment/meeting/' + id]);
    }
}
