import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppService } from '../app.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  getUserInfo;
  userName;
  showLogin = true;
  showLogout = false;
  constructor(private router: Router,
    public snackBar: MatSnackBar,
    public appService: AppService) {
      
  }

  ngOnInit() {
    this.getUserInfo = localStorage.getItem('currentUser');
    this.userName = JSON.parse(this.getUserInfo);
    this.appService.showBehaviour.subscribe(data=>{
      this.showLogout = data; 
      this.showLogin = false;
    })
    
    if (this.userName !== null) {
      console.log('hello')
      
    } else {
     
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/product-list']);
    this.snackBar.open("Logout successfully", 'Dismiss', { duration: 3000 })
    this.showLogin = true;
    this.showLogout = false;
  }

}
