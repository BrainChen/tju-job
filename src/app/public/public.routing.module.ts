import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicComponent } from './public.component';

const routes: Routes = [
    {
        path: '',
        component: PublicComponent
    }
];

const publicRouting = RouterModule.forChild(routes);

@NgModule({
    imports: [ publicRouting ],
    exports: [ RouterModule ]
})

export class PublicRoutingModule {};
