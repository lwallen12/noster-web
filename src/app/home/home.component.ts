import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { Idle } from '@ng-idle/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  now;
  expiresIn;
  authorizedTime;

  uselessMessage = "This is from within setTimeout. We are calling refresh token endpoint!";

  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;
  title = 'angular-idle-timeout';
  isIdle: boolean = false;

  myInterval;

  constructor(private authService: AuthService, 
    private router: Router, 
    private idle: Idle, 
    private ngZone: NgZone) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {

  }


}
