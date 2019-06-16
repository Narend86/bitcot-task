import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  loginForm:FormGroup;

  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<EditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,public snackBar: MatSnackBar) { }

  ngOnInit() {
    console.log(this.data)
    this.loadForm();
  }

  loadForm() {
    this.loginForm = this.fb.group({
      title: new FormControl(this.data.title),
      amount: new FormControl(this.data.amount),
      restro: new FormControl(this.data.restro),
      like: new FormControl(this.data.like),
      order: new FormControl(this.data.order),
      area: new FormControl(this.data.area),
      description: new FormControl(this.data.description),
      imgSrc: new FormControl(this.data.imgSrc),
      id: new FormControl(this.data.id)
    })
  }
  editData(){
    if(this.loginForm.valid){
      let result ={
        data:this.loginForm.value
      }
      this.dialogRef.close(result)
      this.snackBar.open("update successfully", 'Dismiss', { duration: 3000 });
    }
  }

  close(data){
    this.dialogRef.close(data)
  }

}
