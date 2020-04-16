import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';

//import * as jwt_decode from "jwt-decode";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        //Need to remove current user and logout if go idle..
        //Need to effectively refresh the token
        //Should we also check if the local storage is expired
        

        if (localStorage.getItem('currentUser'))  {
            //Should not just be authorized if there is a user object... or maybe.. but when no longer 
            //a valid token, this should be made null?
            return true;
        }

        
        this.router.navigate(['/auth']);
        return false;
    }


}