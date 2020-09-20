import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']

})
export class HomeComponent implements OnInit {
  public imageArray:any=["../../../assets/home/product1.jpg","../../../assets/home/product1.jpg"]

  constructor() { }

  ngOnInit() {
    console.log(this.imageArray,"43256789u");
    
  }
  // insertImage(){
  //   this.imageArray.push()
  // }

}
