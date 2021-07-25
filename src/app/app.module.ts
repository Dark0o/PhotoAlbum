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
import { AuthGuardService } from './services/auth/auth-guard.service';
import { CardComponent } from './shared/card/card.component';
import { AlbumsService } from './services/albums.service';
import { HttpClientModule } from '@angular/common/http';
import { PhotosService } from './services/photos.service';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';
import { FilterPipe } from './pipes/filter.pipe';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ImageModalComponent } from './modals/image-modal/image-modal.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AlbumsComponent,
    PhotosComponent,
    CardComponent,
    FilterPipe,
    ImageModalComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpClientModule,
    LazyLoadImagesModule,
    MDBBootstrapModule.forRoot(),
    MdbModalModule,
  ],
  entryComponents: [ImageModalComponent],
  providers: [
    UsersService,
    AuthService,
    AuthGuardService,
    AlbumsService,
    PhotosService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
