import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../services/profile.service'
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
// import { ProfileComponent } from './components/profile/profile.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //this.http.get<ApiResponse>("https://jackoyugi.github.io/Gitgoole/").subscribe(data =>{
    //Sucessful API request
    
  //})

  profile:any = [];
  repos:any = [];
  username:string;

  constructor(private profileService: ProfileService) { 
  //   this.profileService.getProfileInfo().subscribe(profile => {
  //       console.log(profile);
  //       this.profile = profile;
  //   });
  //   this.profileService.getProfileRepos().subscribe(repos => {
  //     console.log(repos);
  //     this.repos = repos;
  // });
  }
  findProfile() {
    this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
     });
    this.profileService.getProfileRepos().subscribe(repos => {
    console.log(repos);
    this.repos = repos;
    });
  }

  ngOnInit(): void {
  }

}
