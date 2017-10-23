import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  showAbout: Boolean = false;
  httpURL: String = 'http://job.api.twtstudio.com';

  publicPage: any = 1;
  workPage: any = 1;
  briefPage: any = 1;
  meetingPage: any = 1;
  internBriefPage: any = 1;
  internMeetingPage: any = 1;
  civilPage: any = 1;
  admissionPage: any = 1;

  constructor(private http: Http) {}

  fetchData(url) {
    return this.http.get(url).map(res => res.json());
  }

  toggleShow(bool): void {
    this.showAbout = bool;
  }

  getUrl() {
    return this.httpURL;
  }

  setPublic(num) {
    this.publicPage = num;
  }
  getPublic() {
    return this.publicPage;
  }

  setWork(num) {
    this.workPage = num;
  }
  getWork() {
    return this.workPage;
  }

  setBrief(num) {
    this.briefPage = num;
  }
  getBrief() {
    return this.briefPage;
  }

  setMeeting(num) {
    this.meetingPage = num;
  }
  getMeeting() {
    return this.meetingPage;
  }

  setInternBrief(num) {
    this.internBriefPage = num;
  }
  getInternBrief() {
    return this.internBriefPage;
  }

  setInternMeeting(num) {
    this.internMeetingPage = num;
  }
  getInternMeeting() {
    return this.internMeetingPage;
  }

  setCivil(num) {
    this.civilPage = num;
  }
  getCivil() {
    return this.civilPage;
  }

  setAdmission(num) {
    this.admissionPage = num;
  }
  getAdmission() {
    return this.admissionPage;
  }

}
