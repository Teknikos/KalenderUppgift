import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from "../app/main/main.component";
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  {path:'', component: MainComponent, pathMatch: 'full'},
  {path: 'schedule', component: ScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
