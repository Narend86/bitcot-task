import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit-user-info',
  templateUrl: './edit-user-info.component.html',
  styleUrls: ['./edit-user-info.component.css']
})
export class EditUserInfoComponent implements OnInit {
  userForm:FormGroup;
  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<EditUserInfoComponent>,
              public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loadForm();
  }
  loadForm() {
    this.userForm = this.fb.group({
      user: new FormControl(''),
      password: new FormControl(''),
    })
  }
  onSubmit(){
    if(this.userForm.valid){
      this.dialogRef.close(this.userForm.value)
    }
    this.snackBar.open("user info update successfully", 'Dismiss', { duration: 3000 });

  }
  close(data){
  this.dialogRef.close(data);
  }
}
