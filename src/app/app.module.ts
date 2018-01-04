import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { UserService } from './user.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
<<<<<<< HEAD
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
=======
>>>>>>> 53ef24a74462c4cac87652c8bc07a22a5ce7aeab


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    FormsModule,
    AppRoutingModule
=======
    FormsModule
>>>>>>> 53ef24a74462c4cac87652c8bc07a22a5ce7aeab
  ],
  providers: [HeroService, UserService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
