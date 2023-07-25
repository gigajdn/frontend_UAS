import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.guard';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  name!: any
 
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authService.authAdmin();
    this.name = this
  } 
}
