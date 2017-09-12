import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuidanceComponent } from './guidance.component';
import { GuidanceRoutingModule } from './guidance.routing.module';

@NgModule({
    declarations: [GuidanceComponent],
    imports: [CommonModule, GuidanceRoutingModule]
})

export class PolicyModule {};
