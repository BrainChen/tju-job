import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolicyComponent } from './policy.component';

const routes: Routes = [
    {
        path: '',
        component: PolicyComponent
    }
];

const policyRouting = RouterModule.forChild(routes);

@NgModule({
    imports: [ policyRouting ],
    exports: [ RouterModule ]
})

export class PolicyRoutingModule {};
