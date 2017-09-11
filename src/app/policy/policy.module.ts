import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyComponent } from './policy.component';
import { PolicyRoutingModule } from './policy.routing.module';

@NgModule({
    declarations: [PolicyComponent],
    imports: [CommonModule, PolicyRoutingModule]
})

export class PolicyModule {};
