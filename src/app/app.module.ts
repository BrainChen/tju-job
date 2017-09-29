import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

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
import { ShorterPipe } from './shorter.pipe';

import { BriefComponent } from './recruitment/brief/brief.component';
import { MeetingComponent } from './recruitment/meeting/meeting.component';
import { InternComponent } from './recruitment/intern/intern.component';
import { CivilComponent } from './recruitment/civil/civil.component';
import { VillageComponent } from './recruitment/village/village.component';
import { AdmissionComponent } from './recruitment/admission/admission.component';
import { ResultComponent } from './recruitment/result/result.component';

import { HoldComponent } from './service/hold/hold.component';
import { PublishComponent } from './service/publish/publish.component';

import { DownloadComponent } from './download/download.component';
import { ServiceComponent } from './service/service.component';

import { InternmeetingComponent } from './recruitment/intern/internmeeting/internmeeting.component';
import { InternbriefComponent } from './recruitment/intern/internbrief/internbrief.component';


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
    RelativelinkComponent,
    ShorterPipe,
    BriefComponent,
    MeetingComponent,
    InternComponent,
    CivilComponent,
    VillageComponent,
    AdmissionComponent,
    DownloadComponent,
    ServiceComponent,
    HoldComponent,
    PublishComponent,
    InternmeetingComponent,
    InternbriefComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    routing
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
