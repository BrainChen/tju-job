import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { flyIn } from '../../animate/fly-in';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';

import { VillageData } from './villageData';
import { Content } from '../../content';

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['../recruitment.child.component.css'],

  animations: [flyIn],
  encapsulation: ViewEncapsulation.None
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
    title: 'loading',
    date: '2017-09-10'
    },
    {
    id: 44,
    title: 'loading',
    date: '2013-12-24'
    },
    {
    id: 43,
    title: 'loading',
    date: '2013-12-03'
    },
    {
    id: 42,
    title: 'loading',
    date: '2013-07-01'
    },
    {
    id: 41,
    title: 'loading',
    date: '2013-06-05'
    }
    ],
    western: [
    {
    id: 45,
    title: 'loading',
    date: '2017-09-09'
    },
    {
    id: 19,
    title: 'loading',
    date: '2009-04-15'
    },
    {
    id: 18,
    title: 'loading',
    date: '2009-04-14'
    }
    ],
    three_one: [
    {
    id: 23,
    title: 'loading',
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
            this.dataService.fetchData(this.dataService.getUrl() + '/api/recruit/detail/6/'
             + route.snapshot.params['id']).subscribe(function(data) {
                self.content = data;
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
        this.dataService.fetchData(this.dataService.getUrl() + '/api/recruit/index/5/1').subscribe(function(data) {
            self.villageData = data;
        })
    }

}
