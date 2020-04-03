import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgIdleKeepaliveModule, Keepalive } from '@ng-idle/keepalive';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  updateSection = false;
  highScoreSection = false;
  resourceSection = false;
  instructionSection = false;

  environment = environment;

  now;
  expiresIn;
  authorizedTime;

  uselessMessage = "This is from within setTimeout. We are calling refresh token endpoint!";

  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;
  title = 'angular-idle-timeout';
  isIdle: boolean = false;

  currentURL: string;

  myInterval;

  constructor(private authService: AuthService, 
    private router: Router, 
    private route: ActivatedRoute,
    private idle: Idle, 
    private ngZone: NgZone,
    private keepalive: Keepalive) {
      
  this.route.url.subscribe(data =>
      console.log(data));

    idle.setIdle(1200); //1200 for 20 minutes
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    idle.setTimeout(60);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    
    this.onIdleEnd();
    this.onIdleStart();
    this.onTimeoutWarning();
    this.onTimeout();

    // sets the ping interval to 15 seconds
    keepalive.interval(15);

    keepalive.onPing.subscribe(() => this.lastPing = new Date());

    this.idle.watch();

     }

     onIdleEnd() {
      this.idle.onIdleEnd.subscribe(() => { 
      this.idleState = 'No longer idle.'
      console.log(this.idleState);
      this.reset();
      this.isIdle = false;

      this.router.navigate(['/home'])
    });
  }

  onIdleStart() {
    this.idle.onIdleStart.subscribe(() => {
      this.idleState = 'You\'ve gone idle!'
      console.log(this.idleState);
      this.isIdle = true;
  });
  }

  onTimeoutWarning() {
    this.idle.onTimeoutWarning.subscribe((countdown) => {
      this.idleState = 'You will time out in ' + countdown + ' seconds!'
      console.log(this.idleState);
    });
  }

  onTimeout() {
  this.idle.onTimeout.subscribe(() => {
    this.idleState = 'Timed out!';
    this.timedOut = true;
    console.log(this.idleState);
    this.onLogout();
  });
}

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
  }

//You need to use ArrowFunction ()=> to preserve this context within setTimeout
mySetInterval() {      
  console.log("Hello from mySetTimeout before setTimeout in code");
  this.myInterval = setInterval (() => {
        console.log(this.uselessMessage);
      //TODO: Refresh, if not idle
      if (!this.isIdle) {
        var token =  this.authService.refreshToken().subscribe(
          data => {
            console.log(data)
          }
        );
        console.log(token);
      }
      
    }, 300000); //chanage to 3000 if you wanna see it quicker that the 5 min (300,000)
  console.log("Hello from mySetTimeout after setTimeout in code");
}

  onLogout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.currentURL = this.router.url;
    this.mySetInterval();
  }

  updateDropDown() {
    this.updateSection = !this.updateSection;
  }

  highScoreDropDown() {
    this.highScoreSection = !this.highScoreSection;
  }

  resourceDropDown() {
    this.resourceSection = !this.resourceSection;
  }

  instructionDropDown() {
    this.instructionSection = !this.instructionSection;
  }
  

  ngOnDestroy(): void {

  }


}
