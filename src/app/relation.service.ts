import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NosterRelation } from './models/noster-relation';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RelationService {

  constructor(private http: HttpClient) { }

  baseURL = environment.apiURL + 'NosterRelations'

  getMyFriends(): Observable<NosterRelation[]> {
    return this.http.get<NosterRelation[]>(this.baseURL);
  }

}
