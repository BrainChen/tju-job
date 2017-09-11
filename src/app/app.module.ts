import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { GuidanceComponent } from './guidance/guidance.component';
import { routing } from './app.routing.module'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GuidanceComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
