import { Component } from '@angular/core';
import { AuthService } from '../auth.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  registerData = { email: '', password: '', name: '' };
  registerError: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    if (!this.registerData.email || !this.registerData.password || !this.registerData.name) {
      this.registerError = 'Please fill in both email, password, or name.';
      return;
    }

    this.authService
      .register(this.registerData.email, this.registerData.password, this.registerData.name)
      .subscribe(
        (response) => {
          // Handle successful registration
          this.router.navigate(['/login']);
        },
        (error) => {
          // Handle registration error
          this.registerError = 'Incorrect email or password.';
        }
      );
  }
}
