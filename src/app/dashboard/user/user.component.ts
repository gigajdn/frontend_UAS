import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.guard';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  name!: any

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authService.authUser();
    this.name=localStorage.getItem('role');
  }
}
