import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tp1Component } from './tp1/tp1.component';
import { Tp2Component } from './tp2/tp2.component';
import { Tp3Component } from './tp3/tp3.component';
import { Tp4Component } from './tp4/tp4.component';
import { Tp5Component } from './tp5/tp5.component';


const routes: Routes = [
  { path: '1', component: Tp1Component },
  { path: '2', component: Tp2Component },
  { path: '3', component: Tp3Component },
  { path: '4', component: Tp4Component },
  { path: '5', component: Tp5Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TpRoutingModule { }
