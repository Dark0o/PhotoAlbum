import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from '../albums/albums.component';
import { HomeComponent } from '../home/home.component';
import { PhotosComponent } from '../photos/photos.component';
import { AuthGuardService } from '../services/auth/auth-guard.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'albums',
    component: AlbumsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'albums/:id/photos',
    component: PhotosComponent,
    canActivate: [AuthGuardService],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
