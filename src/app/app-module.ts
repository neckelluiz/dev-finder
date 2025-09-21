import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { ProfileHeaderComponent } from './pages/profile/profile-header/profile-header.component';
import { ProfileCardComponent } from './pages/profile/profile-card/profile-card.component';
import { CommonModule } from '@angular/common';
import { UserAvatarComponent } from './shared/user-avatar/user-avatar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ProfileHeaderComponent,
    ProfileCardComponent,
    UserAvatarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    CommonModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

