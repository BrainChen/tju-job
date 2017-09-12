import { MainComponent } from './main/main.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { GuidanceComponent } from './guidance/guidance.component';

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
        loadChildren: 'app/public/public.module#PublicModule'
    },
    {
        path: 'work',
        loadChildren: 'app/work/work.module#WorkModule'
    },
    {
        path: 'recruitment',
        loadChildren: 'app/recruitment/recruitment.module#RecruitmentModule'
    },
    {
        path: 'policy',
        loadChildren: 'app/policy/policy.module#PolicyModule'
    },
    // want to know why this component cannot be packed as a lazy component
    {
        path: 'guidance',
        component: GuidanceComponent
        //loadChildren: 'app/guidance/guidance.module#GuidanceModule'
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
