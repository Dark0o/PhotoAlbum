import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { RoutingModule } from './routing/routing.module';
import { FormsModule } from '@angular/forms';
import { UsersService } from './services/users.service';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AlbumsComponent,
    PhotosComponent,
  ],
  imports: [BrowserModule, RoutingModule, FormsModule],
  providers: [UsersService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
