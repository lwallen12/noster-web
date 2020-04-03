import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PatternValidatorService {

  passwordPatternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$');
      const valid = regex.test(control.value);
      return valid ? null : { invalidPassword: true };
    };
  }

//var str = new String("This is string"); 
//console.log("str.charAt(0) is:" + str.charAt(0));  T

//console.log("str.charAt(0) is:" + str.charCodeAt(0)); 
//str.charAt(0) is:84 

 IsValidPassword(password: string): string {
    if (password.length < 8) {
      return "Password must be at least 8 characters";
    }
    
    for (var i = 0; i < password.length; i++) {
      var passArray: number[];

      passArray.push(password.charCodeAt(i));
      
      //

    }
 }



}
