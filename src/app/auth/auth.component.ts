import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MustMatch } from '../shared/must-match';
import { Validators } from '@angular/forms';
import { AuthService, Login, UserSet, UserChange } from '../auth.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  submitted = false;
  loginMode = true;
  registerMode = false;
  resetMode = false;
  changeMode = false;
  errorMessage;

  loading = false;
  
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required]]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });

  resetForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });


  changePasswordForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    token: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required]]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });


  onSubmit() {

    this.loading = true;

    let login: Login = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    this.authService.login(login)
        .pipe(first())
        .subscribe(
            data => {
                this.loading = false;
                this.router.navigate(['/home/presidentialprediction']);
            },
            error => {
                console.log(error);
                this.errorMessage = error.message;
                this.loginForm.value.password = '';
                this.loading = false;
            });

    this.submitted = true;
    

    console.warn(this.loginForm.value);
    console.log(this.loginForm);
  }

  onRegister() {

    this.loading = true;

    let register: Login = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    }

    this.authService.register(register)
      .pipe(first())
      .subscribe(
        data => {
          this.loading = false;
          this.router.navigate(['/home/presidentialprediction']);
        },
        error => {
          console.log(error);
          this.errorMessage = error.message;
          this.registerForm.reset();
          this.loading = false;
      });

    this.submitted = true;
    console.log(this.registerForm);
  }

  onSendReset() {

    this.loading = true;
    
    let noster: UserSet = {
      username: this.resetForm.value.email
    }

    this.authService.reset(noster).subscribe(
      data => {
        this.loading = false; 
        this.goChangeMode();
      }, error => {
        this.loading = false;
        window.alert(error.message);
        this.startLogin();
      }
    );

    console.log(this.resetForm);
   
  }

  goChangeMode() {
    this.changeMode = true;
    this.loginMode = false;
    this.registerMode = false;
    this.resetMode = false;
    this.submitted = false;
  }

  onChangePassword() {

    this.loading = true;

    let noster: UserChange = {
      username: this.changePasswordForm.value.email,
      resetToken: this.changePasswordForm.value.token,
      newPassword: this.changePasswordForm.value.password
    }

    this.authService.changePassword(noster).subscribe(
        data => {
          this.loading = false;
        }, error => {
          this.loading = false;
          window.alert(error.message);
          this.startLogin();
        }
    )

    this.loginForm.reset();
    this.registerForm.reset();
    this.resetForm.reset();
    this.changePasswordForm.reset();

    //TODO: Call API, Send us back to login mode

    this.changeMode = false;
    this.loginMode = true;
  }

  startLogin() {
    this.loginForm.reset();
    this.registerForm.reset();
    this.resetForm.reset();
    this.changePasswordForm.reset();

    this.loginMode = true;
    this.registerMode = false;
    this.resetMode = false;
    this.submitted = false;
  }

  startForgotPassword() {
    this.loginForm.reset();
    this.registerForm.reset();
    this.resetForm.reset();
    this.changePasswordForm.reset();

    this.loginMode = false;
    this.registerMode = false;
    this.resetMode = true;
    this.submitted = false;
  }

  startRegister() {
    this.loginForm.reset();
    this.registerForm.reset();
    this.resetForm.reset();
    this.changePasswordForm.reset();

    this.loginMode = false;
    this.registerMode = true;
    this.resetMode = false;
    this.submitted = false;
  }
  
  ngOnInit() {
  }
}
