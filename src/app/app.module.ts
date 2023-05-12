import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesService } from './services/services.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { ShowChatsComponent } from './show-chats/show-chats.component';
import { RouterModule } from '@angular/router';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { ChatListComponent } from './show-chats/chat-list/chat-list.component';
import { ShowMessageComponent } from './show-chats/show-message/show-message.component';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    ShowChatsComponent,
    ChatListComponent,
    ShowMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule,
    MatSelectModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [
    ServicesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
