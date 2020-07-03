import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { NosterMessage } from './models/noster-message';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  private urlBase = environment.apiURL + 'nostermessages/'

  getMyMessages(): Observable<NosterMessage>{
    return this.http.get<NosterMessage>(this.urlBase);
  }

  getThisConvo(displayName: string): Observable<NosterMessage> {
    return this.http.get<NosterMessage>(this.urlBase + displayName);
  }

  postMessage() {
    //TODO
  }

}
