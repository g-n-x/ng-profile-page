import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { UserService } from './user.service';
import { ProfileListComponent } from './profile-list/profile-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
