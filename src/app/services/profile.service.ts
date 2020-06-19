import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid = 'ab4e69ad1ad03f4c3c00';
  private clientsecret = '2c92fdf025450bc0b1bf5800d27c4c9c67c0124d';

  constructor(private http:Http) { }
}
