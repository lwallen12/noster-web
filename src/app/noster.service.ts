import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NosterRelation } from './models/noster-relation';
import { environment } from 'src/environments/environment';
import { Noster } from './models/noster';

@Injectable({
  providedIn: 'root'
})
export class NosterService {

  constructor(private http: HttpClient) { }

  baseURL = environment.apiURL + 'Nosters'

  getMyNetwork(search: Search): Observable<Noster[]> {
    return this.http.post<Noster[]>(this.baseURL + '/search', search)
  }

  
}

export class Search {

  constructor(search: string) {
    this.search = search
  }

  public search: string;
}
