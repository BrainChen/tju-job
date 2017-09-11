import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkComponent } from './work.component';

const routes: Routes = [
    {
        path: '',
        component: WorkComponent
    }
];

const workRouting = RouterModule.forChild(routes);

@NgModule({
    imports: [ workRouting ],
    exports: [ RouterModule ]
})

export class WorkRoutingModule {};
