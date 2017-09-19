import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }

  register(login: string, password: string, birthYear: number) {
    const params = {
      'login' : login,
      'password' : password,
      'birthYear' : birthYear
    };
    return this.httpClient.post('http://ponyracer.ninja-squad.com/api/users', params);
  }

  authenticate(credentials: {login: string; password: string}) {
    const params = {
      'login' : credentials.login,
      'password' : credentials.password
    };
    return this.httpClient.post('http://ponyracer.ninja-squad.com/api/users/authentication', params);
  }

}
