import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "./_helpers";
import {SystemConfigComponent} from "./system-config/system-config.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: 'system-config', component: SystemConfigComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
