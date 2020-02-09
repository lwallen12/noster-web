import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-idle',
  templateUrl: './idle.component.html',
  styleUrls: ['./idle.component.css']
})
export class IdleComponent {
    @Input() message;

    constructor(private authService: AuthService) { }
    
    onLogout() {
        this.authService.logout();
    }

}

