import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  allData;
  constructor(public appService:AppService) { }

  ngOnInit() {
    this.appService.sendJson().subscribe(data=>{
  
      this.allData = data.response;
      
    });
    
  }

}
