import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruitmentComponent } from './recruitment.component';
import { RecruitmentRoutingModule } from './recruitment.routing.module';

@NgModule({
    declarations: [RecruitmentComponent],
    imports: [CommonModule, RecruitmentRoutingModule]
})

export class RecruitmentModule {};
