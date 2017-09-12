import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuidanceComponent } from './guidance.component';

const routes: Routes = [
    {
        path: '',
        component: GuidanceComponent
    }
];

const guidanceRouting = RouterModule.forChild(routes);

@NgModule({
    imports: [ guidanceRouting ],
    exports: [ RouterModule ]
})

export class GuidanceRoutingModule {};
