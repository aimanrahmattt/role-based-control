import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { ChangeAccessComponent } from './change-access/change-access.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'change-access', component: ChangeAccessComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
