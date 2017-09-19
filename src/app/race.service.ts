import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {HttpClient, HttpParams} from '@angular/common/http';
import {RaceModel} from './models/race.model';

@Injectable()
export class RaceService {

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Array<RaceModel>> {

    return this.httpClient.get<Array<RaceModel>>(
      'http://ponyracer.ninja-squad.com/api/races',
      { params: new HttpParams().set('status', 'PENDING') }
    );
  }

}
