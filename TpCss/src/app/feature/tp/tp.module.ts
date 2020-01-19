import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TpRoutingModule } from './tp-routing.module';
import { Tp1Component } from './tp1/tp1.component';
import { Tp2Component } from './tp2/tp2.component';
import { Tp3Component } from './tp3/tp3.component';
import { Tp4Component } from './tp4/tp4.component';
import { Tp5Component } from './tp5/tp5.component';


@NgModule({
  declarations: [Tp1Component, Tp2Component, Tp3Component, Tp4Component, Tp5Component],
  imports: [
    CommonModule,
    TpRoutingModule
  ]
})
export class TpModule { }
