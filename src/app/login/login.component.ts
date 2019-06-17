import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, MatDialog } from '@angular/material';
import { AppService } from '../app.service';
import { EditUserInfoComponent } from '../edit-user-info/edit-user-info.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:string = "bitcot";
  password:string = "bitcot123";
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public snackBar: MatSnackBar,
    public appService:AppService,
    public dialog: MatDialog
  ) {
    this.loadForm();
  }
  loadForm() {
    this.loginForm = this.fb.group({
      userName: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }
  loginData() {
    let item = {
      userName: this.loginForm.controls['userName'].value,
      password: this.loginForm.controls['password'].value
    }
    console.log(item);
    
    if(item.userName === this.user && item.password === this.password){
      localStorage.setItem('currentUser', JSON.stringify(item));
      
      this.router.navigate(['/home']);
      if(localStorage.length===1){
        this.appService.changesBehaviour(true);
        console.log(localStorage.length)
      }else{
        console.log(localStorage.length)
        this.appService.changesBehaviour(false);
      }
      
      this.snackBar.open("Login successfully", 'Dismiss', { duration: 3000 });
    } else {
      this.snackBar.open("Incorrect userName or password", 'Dismiss', { duration: 3000 });
      return false;
    }
  }

  ngOnInit() {
  }

  EditData(){
  const dialogRef = this.dialog.open(EditUserInfoComponent,{
    width:'400px',
    height:'auto',
  });

  dialogRef.afterClosed().subscribe(result => {
    this.user = result.user;
    this.password = result.password
  });
}

}
