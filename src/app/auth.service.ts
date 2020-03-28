import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('currentUser'));
    this.currentUser = this.currentUserSubject.asObservable();
}

private loginURL = "https://xo32uewxqj.execute-api.us-east-1.amazonaws.com/Prod/api/accounts/login";
private prodURL = "https://xo32uewxqj.execute-api.us-east-1.amazonaws.com/Prod/api/accounts/";
private devURL = "http://localhost:57096/api/accounts/";

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

register(login: Login) {
  return this.http.post<string>(this.prodURL + 'register', login, {headers:{ 'Content-Type': 'application/json' }, 
  responseType:'text' as 'json' })
    .pipe(map(user => {
      localStorage.setItem('currentUser', user);

      this.currentUserSubject.next(user);

      console.log(user);
      
      return user;
    }));
}

reset(user: UserSet) {
  return this.http.post<string>(this.prodURL + 'reset', user);
}

changePassword(user: UserChange) {
  //TODO: Make call to change Password in API
  return this.http.post<any>(this.prodURL + 'change', user)
}

logout() {
  // remove user from local storage and set current user to null
  localStorage.removeItem('currentUser');
  this.currentUserSubject.next(null);

  this.router.navigate(['/auth']); 
}

getAuthorizationToken() {
    return localStorage.getItem('currentUser');
  }

//Just to test auth and intereptor work
getProtected() {
  return this.http.get<any>('https://xo32uewxqj.execute-api.us-east-1.amazonaws.com/Prod/api/accounts/protected');
}

refreshToken() {

  return this.http.post<any>("https://xo32uewxqj.execute-api.us-east-1.amazonaws.com/Prod/api/accounts/refresh", null, {headers:{ 'Authorization': 'Bearer ' + this.getAuthorizationToken() }, 
  responseType:'text' as 'json' })
    .pipe(map(user => {
      localStorage.setItem('currentUser', user);

    this.currentUserSubject.next(user);
    
    console.log("new user should be: " + user);

    return user;
    }));
  }

}



export class Login {
  email: string;
  password: string;
}

export class UserSet {
  username: string;
}

export class UserChange {
  username: string;
  resetToken: string;
  newPassword: string;
}