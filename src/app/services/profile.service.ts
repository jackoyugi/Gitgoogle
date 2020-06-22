import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RepositoriesComponent } from '../repositories/repositories.component';
//import 'rxjs/add/operator/map';
// import {UserName} from '../username/username.component'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid = 'ab4e69ad1ad03f4c3c00';
  private clientsecret = '2c92fdf025450bc0b1bf5800d27c4c9c67c0124d';

  constructor(private http:HttpClient) { 
    console.log("service is now ready!")
    this.username = 'jackoyugi';
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    //.map(res => res.json());
  }
  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  }
  updateProfile(username:string){
    this.username = username
  } 
}
