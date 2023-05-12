import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { ShowChatsComponent } from './show-chats/show-chats.component';

const routes: Routes = [
  { path: 'SignUp', component: SignUpComponent },
  { path: 'LogIn', component: LogInComponent },
  { path: 'Chats', component: ShowChatsComponent },
  { path: '', redirectTo: '/LogIn', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
