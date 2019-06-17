import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { DetailsComponent } from '../details/details.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allData;
  userInfo;
  username;
  date = new Date();
  constructor(public appService:AppService,
    public snackBar: MatSnackBar,public dialog: MatDialog) { }

  ngOnInit() {
    this.appService.sendJson().subscribe(data=>{
      
      this.allData = data.response;
      
    });
    this.userInfo = localStorage.getItem('currentUser');
    this.username = JSON.parse(this.userInfo);
  }
  detailCard(item) {
    const dialogRef = this.dialog.open(DetailsComponent,{
      width:'400px',
      height:'auto',
      data:item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editCard(item) {
    const dialogRef = this.dialog.open(EditProductComponent,{
      width:'400px',
      height:'auto',
      data:item
    });

    dialogRef.afterClosed().subscribe(result => {
  console.log(result)
  console.log(result.data)
      // this.allData.push(result.data)
      // this.allData.splice(this.allData.indexOf(item), 1);
        for(let i = 0; i< this.allData.length; i++){
      if(this.allData[i].id===result.data.id){
        this.allData[i] = result.data
      }
    }
    });
  }

  deleteCard(item){
    console.log(item)
    // for(let i = 0; i< this.allData.length; i++){
    //   if(this.allData[i].id===id){
    //     this.allData.splice(i,1)
    //   }
    // }
    this.allData.splice(this.allData.indexOf(item), 1);
    this.snackBar.open("Delete successfully", 'Dismiss', { duration: 3000 });
  }

}
