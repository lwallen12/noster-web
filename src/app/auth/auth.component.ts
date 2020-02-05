import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MustMatch } from '../shared/must-match';
import { Validators } from '@angular/forms';
import { AuthService, Login } from '../auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  submitted = false;
  loginMode = true;
  
  constructor(private fb: FormBuilder, private authService: AuthService) { }

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

  onSubmit() {
    let login: Login = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    this.authService.login(login)
        .pipe(first())
        .subscribe(
            data => {
                console.log(data);
                //this.router.navigate(['/inside']);
            },
            error => {
                //this.error = error.message;
            });

    this.submitted = true;

    console.warn(this.loginForm.value);
    console.log(this.loginForm);
  }

  onRegister() {
    this.submitted = true;

    console.log(this.registerForm);
  }

  switchMode() {
    this.loginMode = !this.loginMode;
  }
  
  ngOnInit() {
  }
}
