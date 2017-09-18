import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { MainComponent } from './main/main.component';
import { GuidanceComponent } from './guidance/guidance.component';
import { PublicComponent } from './public/public.component';
import { PolicyComponent } from './policy/policy.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { WorkComponent } from './work/work.component';

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
        component: RecruitmentComponent
    },
    {
        path: 'policy',
        component: PolicyComponent
    },
    {
        path: 'guidance',
        component: GuidanceComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
