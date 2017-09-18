import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.css']
})

export class WorkComponent implements OnInit {

    wordData: Object = {
        'head': {
            'image': '../../assets/hero.jpg',
            'content': [
                {
                    'title': 'Google公司招收实习生',
                    'link': 'http://www.google.com',
                    'time': '2017-09-18'
                },
                {
                    'title': 'Google公司招收实习生',
                    'link': 'http://www.google.com',
                    'time': '2017-09-18'
                },
                {
                    'title': 'Google公司招收实习生',
                    'link': 'http://www.google.com',
                    'time': '2017-09-18'
                }
            ]
        }
    }

    constructor() { }

    ngOnInit() {
    }

}
