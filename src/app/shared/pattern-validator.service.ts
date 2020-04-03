import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { element } from '@angular/core/src/render3';

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

 IsValidPassword(password: string): string | boolean {
    // if (password.length < 8) {
    //   return "Password must be at least 8 characters";
    // }
    
    // var passArray: any[] = password.split('');

    var passArray: any[] = [];

    // passArray.forEach(element => element = element.charCodeAt(element));

    for (let i = 0; i <= password.length; i++) {
        passArray.push(password.charCodeAt(i));
    }

    console.log(passArray)

    if (!this.checkForNumber(passArray)) {
      return "Password needs a number.";
    }

    if (!this.checkForLowerCase(passArray)) {
      return "Password needs a lowercase letter.";
    }

    if (!this.checkForUpperCase(passArray)) {
      return "Password needs an uppercase letter.";
    }

    if (!this.checkForNonAlphaNum(passArray)) {
      return "Password needs a special character, or a different one than the one you're using."
    }

    return true;

 }

 //does undefined evaluate to false?
 checkForNumber(passwordArr: number[]) {
   if (passwordArr.find(x => (x > 47 && x < 58))) {
     return true;
   }
   
 }

 checkForLowerCase(passwordArr: number[]) {
  if (passwordArr.find(x => (x > 96 && x < 123))) {
      return true
  }
 }

 checkForUpperCase(passwordArr: number[]) {
  if (passwordArr.find(x => (x > 64 && x < 91))) {
      return true
  }
 }

 checkForNonAlphaNum(passwordArr: number[]) {
  if (passwordArr.find(x => (x === 33 || x === 61 || x === 64 || x ===94 || x > 34 && x < 39 || x > 39 && x < 44))) {
    return true
}
 }

}
