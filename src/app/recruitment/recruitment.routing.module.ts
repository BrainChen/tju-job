import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecruitmentComponent } from './recruitment.component';

const routes: Routes = [
    {
        path: '',
        component: RecruitmentComponent
    }
];


const recruitmentRouting = RouterModule.forChild(routes);

@NgModule({
    imports: [ recruitmentRouting ],
    exports: [ RouterModule ]
})

export class RecruitmentRoutingModule {};
