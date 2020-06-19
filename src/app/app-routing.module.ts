import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { RepositoriesComponent } from './repositories/repositories.component';


const routes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'repositories', component: RepositoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
