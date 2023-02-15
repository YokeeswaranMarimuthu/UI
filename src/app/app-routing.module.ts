import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { ShowMessagesComponent } from './show-messages/show-messages.component';

const routes: Routes = [
  { path: 'SignUp', component: SignUpComponent },
  { path: 'LogIn', component: LogInComponent },
  { path: 'ShowMessages', component: ShowMessagesComponent },
  { path: '', redirectTo: '/LogIn', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
