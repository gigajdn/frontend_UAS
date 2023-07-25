import { Component } from '@angular/core';
import { AuthService } from 'src/app/login/auth.guard';

@Component({
  selector: 'app-top-admin',
  templateUrl: './top-admin.component.html',
  styleUrls: ['./top-admin.component.scss']
})
export class TopAdminComponent {
  constructor(private authService: AuthService) {}

  isLoggedIn(): boolean {
    
    return this.authService.isAuthenticated();
  }
}
