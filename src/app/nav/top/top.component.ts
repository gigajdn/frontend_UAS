import { Component } from '@angular/core';
import { AuthService } from 'src/app/login/auth.guard';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent {
  constructor(private authService: AuthService) {}

  isLoggedIn(): boolean {
    
    return this.authService.isAuthenticated();
  }
}
