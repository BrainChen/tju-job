import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    yesaround: Object = {'around': true};
    noaround: Object = {'around': false};
    around: Object = this.noaround;

    yesdownmenu: Object = {'downmenu': true};
    nodownmenu: Object = {'downmenu': false};
    downmenu: Object = {'downmenu': false};

    toggleArrow(): void {
        if (this.around === this.yesaround) {
            this.around = this.noaround;
        } else {
            this.around = this.yesaround;
        }

        if (this.downmenu === this.yesdownmenu) {
            this.downmenu = this.noaround;
        } else {
            this.downmenu = this.yesdownmenu;
        }
    }

    toggleShow(bool): void {
        this.dataService.toggleShow(bool);
    }

    constructor(private dataService: DataService) { }
}
