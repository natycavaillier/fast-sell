import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LogonComponent } from './components/logon/logon.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logon', component: LogonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
