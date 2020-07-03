import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NosterRelation } from './models/noster-relation';
import { environment } from 'src/environments/environment';
import { Noster } from './models/noster';

@Injectable({
  providedIn: 'root'
})
export class RelationService {

  constructor(private http: HttpClient) { }

  baseURL = environment.apiURL + 'NosterRelations';

  getMyFriends(): Observable<NosterRelation[]> {
    return this.http.get<NosterRelation[]>(this.baseURL);
  }

  getMyPending(): Observable<Noster[]> {
    return this.http.get<Noster[]>(this.baseURL + '/reqinbox')
  }

  //only requires the target, a noster
  sendFriendReq(nosterRelation: NosterRelation): Observable<NosterRelation> {
    return this.http.post<NosterRelation>(this.baseURL + '/sendFriend', nosterRelation);
  }

  confirmFriendReq(nosterRelation: Noster): Observable<Noster> {
    return this.http.post<Noster>(this.baseURL + '/confirmFriend', nosterRelation);
  }

  denyFriendReq(nosterRelation: Noster): Observable<Noster> {
    return this.http.post<Noster>(this.baseURL + '/denyFriend', nosterRelation);
  }

}
