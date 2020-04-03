import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

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

login(login: Login) {
  return this.http.post<string>(environment.apiURL + 'accounts/login', login, {headers:{ 'Content-Type': 'application/json' }, 
  responseType:'text' as 'json' })
  .pipe(map(user => {
    catchError(this.handleError),
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem('currentUser', user);
    this.currentUserSubject.next(user);
    console.log(user);
    return user;
  }));
}

register(login: Login) {
  return this.http.post<string>(environment.apiURL + 'accounts/register', login, {headers:{ 'Content-Type': 'application/json' }, 
  responseType:'text' as 'json' })
    .pipe(
      catchError(this.handleError),
      map(user => {
        localStorage.setItem('currentUser', user);
        this.currentUserSubject.next(user);
        console.log(user);
        return user;
      }
    )
  );
}

reset(user: UserSet) {
  return this.http.post<string>(environment.apiURL + 'accounts/reset', user);
}

changePassword(user: UserChange) {
  //TODO: Make call to change Password in API
  return this.http.post<any>(environment.apiURL + 'accounts/change', user)
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
  return this.http.get<any>(environment.apiURL + 'accounts/protected');
}

refreshToken() {
  return this.http.post<any>(environment.apiURL + "refresh", null, 
    {headers:{ 'Authorization': 'Bearer ' + this.getAuthorizationToken() }, 
  responseType:'text' as 'json' })
    .pipe(
      catchError(this.handleError),
      map(user => {
        localStorage.setItem('currentUser', user);
        this.currentUserSubject.next(user);
        console.log("new user should be: " + user);
       return user;
    }));
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
        console.error(error.error);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

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