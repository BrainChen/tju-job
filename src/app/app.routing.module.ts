import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { MainComponent } from './main/main.component';
import { GuidanceComponent } from './guidance/guidance.component';
import { PublicComponent } from './public/public.component';
import { PolicyComponent } from './policy/policy.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { WorkComponent } from './work/work.component';

import { BriefComponent } from './recruitment/brief/brief.component';
import { MeetingComponent } from './recruitment/meeting/meeting.component';
import { InternComponent } from './recruitment/intern/intern.component';
import { CivilComponent } from './recruitment/civil/civil.component';
import { VillageComponent } from './recruitment/village/village.component';
import { AdmissionComponent } from './recruitment/admission/admission.component';

import { DownloadComponent } from './download/download.component';
import { ServiceComponent } from './service/service.component';

import { HoldComponent } from './service/hold/hold.component';
import { PublishComponent } from './service/publish/publish.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: 'public',
        component: PublicComponent
    },
    {
        path: 'work',
        component: WorkComponent
    },
    {
        path: 'recruitment',
        component: RecruitmentComponent,
        children: [
            {
                path: '',
                redirectTo: 'brief',
                pathMatch: 'full'
            },
            {
                path: 'brief',
                component: BriefComponent
            },
            {
                path: 'meeting',
                component: MeetingComponent
            },
            {
                path: 'intern',
                component: InternComponent
            },
            {
                path: 'civil',
                component: CivilComponent
            },
            {
                path: 'village',
                component: VillageComponent
            },
            {
                path: 'admission',
                component: AdmissionComponent
            },
        ]
    },
    {
        path: 'policy',
        component: PolicyComponent
    },
    {
        path: 'guidance',
        component: GuidanceComponent
    },
    {
        path: 'download',
        component: DownloadComponent
    },
    {
        path: 'service',
        component: ServiceComponent,
        children: [
            {
                path: '',
                redirectTo: 'hold',
                pathMatch: 'full'
            },
            {
                path: 'hold',
                component: HoldComponent
            },
            {
                path: 'publish',
                component: PublishComponent
            }
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
