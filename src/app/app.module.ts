import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileService } from './services/profile.service';
import {HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import { PipesComponent } from './pipes/pipes.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { RepositoriesComponent } from './repositories/repositories.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReposComponent } from './repos/repos.component';
// import { UsernameComponent } from './username/username.component';
// import {RespositoriesService} from './services/repositories.service';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PipesComponent,
    RepositoriesComponent,
    ProfileComponent,
    NavbarComponent,
    ReposComponent,
    // UsernameComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule,
   // ProfileComponent,
  //  RespositoriesService,
  
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
