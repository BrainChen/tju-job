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
import { ResultComponent } from './recruitment/result/result.component';

import { DownloadComponent } from './download/download.component';
import { ServiceComponent } from './service/service.component';

import { HoldComponent } from './service/hold/hold.component';
import { PublishComponent } from './service/publish/publish.component';

import { InternmeetingComponent } from './recruitment/intern/internmeeting/internmeeting.component';
import { InternbriefComponent } from './recruitment/intern/internbrief/internbrief.component';
import { ErrorComponent } from './error/error.component';

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
        path: 'public/:id',
        component: PublicComponent
    },
    {
        path: 'work',
        component: WorkComponent
    },
    {
        path: 'work/:id',
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
                path: 'brief/:id',
                component: BriefComponent
            },
            {
                path: 'meeting',
                component: MeetingComponent
            },
            {
                path: 'meeting/:id',
                component: MeetingComponent
            },
            {
                path: 'intern',
                component: InternComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'internbrief',
                        pathMatch: 'full'
                    },
                    {
                        path: 'internbrief',
                        component: InternbriefComponent
                    },
                    {
                        path: 'internbrief/:id',
                        component: InternbriefComponent
                    },
                    {
                        path: 'internmeeting',
                        component: InternmeetingComponent
                    },
                    {
                        path: 'internmeeting/:id',
                        component: InternmeetingComponent
                    }
                ]
            },
            {
                path: 'civil',
                component: CivilComponent
            },
            {
                path: 'civil/:id',
                component: CivilComponent
            },
            {
                path: 'village',
                component: VillageComponent
            },
            {
                path: 'village/:id',
                component: VillageComponent
            },
            {
                path: 'admission',
                component: AdmissionComponent
            },
            {
                path: 'admission/:id',
                component: AdmissionComponent
            },
            {
                path: 'result',
                component: ResultComponent
            },
            {
                path: 'result/:key',
                component: ResultComponent
            }
        ]
    },
    {
        path: 'policy',
        component: PolicyComponent
    },
    {
        path: 'policy/:id',
        component: PolicyComponent
    },
    {
        path: 'guidance',
        component: GuidanceComponent
    },
    {
        path: 'guidance/:id',
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
    },
    {
        path: 'error',
        component: ErrorComponent
    },
    {
        path: '**',
        redirectTo: '/error',
        pathMatch: 'full'
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
