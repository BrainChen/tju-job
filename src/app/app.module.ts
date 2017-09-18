import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PublicComponent } from './public/public.component';
import { PolicyComponent } from './policy/policy.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { WorkComponent } from './work/work.component';
import { GuidanceComponent } from './guidance/guidance.component';

import { routing } from './app.routing.module';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';

import { CalendarComponent } from './plugins/calendar/calendar.component';
import { WorktimeComponent } from './plugins/worktime/worktime.component';
import { RelativelinkComponent } from './plugins/relativelink/relativelink.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PublicComponent,
    PolicyComponent,
    RecruitmentComponent,
    WorkComponent,
    GuidanceComponent,
    CalendarComponent,
    WorktimeComponent,
    RelativelinkComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
