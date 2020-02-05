import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('currentUser'));
    this.currentUser = this.currentUserSubject.asObservable();
}

private loginURL = "http://localhost:57096/api/accounts/login";

login(login: Login) {
  return this.http.post<string>(this.loginURL, login, {headers:{ 'Content-Type': 'application/json' }, 
  responseType:'text' as 'json' })
  .pipe(map(user => {
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem('currentUser', user);

    this.currentUserSubject.next(user);

    console.log(user);

    return user;
  }));
}

  getAuthorizationToken() {
    return localStorage.getItem('currentUser');
  }

}


export class Login {
  email: string;
  password: string;
}