import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  name!: any

  constructor(private router: Router) {}

  authUser() {    
    if (localStorage.getItem('role') !== "user"){      
      this.router.navigate(['/login']);
    }    
    else {
      this.name=localStorage.getItem('role');
    }
  }

  authAdmin() {    
    if (localStorage.getItem('role') !== "admin"){
      this.router.navigate(['/login']);
    }    
    else {
      this.name=localStorage.getItem('role');
    }
  }
}
