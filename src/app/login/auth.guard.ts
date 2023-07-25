import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://backend-uas-psi.vercel.app'; // Replace with your API endpoint
  private isLoggedIn = false;

  constructor(private http: HttpClient) {}

  // Function to set login status
  setLoggedInStatus(status: boolean): void {
    this.isLoggedIn = status;
  }

  // Function to check if the user is logged in
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  login(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  register(email: string, password: string, name: string) {
    return this.http.post(`${this.apiUrl}/register`, { email, password, name });
  }

  logout(): void {
    console.log('Performing logout');
    this.setLoggedInStatus(false);
  }
}
