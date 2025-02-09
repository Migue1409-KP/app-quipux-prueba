import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CreateTrackListComponent } from './pages/create-tracklist/create-tracklist.component';
import { FindAllTrackListsComponent } from './pages/find-all-tracklists/find-all-tracklists.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  { 
    path: 'create-tracklist',
    component: CreateTrackListComponent
  },
  {
    path: 'find-all-tracklists',
    component: FindAllTrackListsComponent
  }
];