import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResourceService } from 'src/app/core/services/resource/resource.service';
import { User } from 'src/app/models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ResourceService<User>{

  constructor(http: HttpClient) {
    super(http, 'users');
  }
}
